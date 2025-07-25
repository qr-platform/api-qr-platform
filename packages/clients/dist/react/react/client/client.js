"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const utils_1 = require("./utils");
const createClient = (config = {}) => {
    let _config = (0, utils_1.mergeConfigs)((0, utils_1.createConfig)(), config);
    const getConfig = () => ({ ..._config });
    const setConfig = (config) => {
        _config = (0, utils_1.mergeConfigs)(_config, config);
        return getConfig();
    };
    const interceptors = (0, utils_1.createInterceptors)();
    const request = async (options) => {
        const opts = {
            ..._config,
            ...options,
            fetch: options.fetch ?? _config.fetch ?? globalThis.fetch,
            headers: (0, utils_1.mergeHeaders)(_config.headers, options.headers),
        };
        if (opts.security) {
            await (0, utils_1.setAuthParams)({
                ...opts,
                security: opts.security,
            });
        }
        if (opts.requestValidator) {
            await opts.requestValidator(opts);
        }
        if (opts.body && opts.bodySerializer) {
            opts.body = opts.bodySerializer(opts.body);
        }
        // remove Content-Type header if body is empty to avoid sending invalid requests
        if (opts.body === undefined || opts.body === '') {
            opts.headers.delete('Content-Type');
        }
        const url = (0, utils_1.buildUrl)(opts);
        const requestInit = {
            redirect: 'follow',
            ...opts,
        };
        let request = new Request(url, requestInit);
        for (const fn of interceptors.request._fns) {
            if (fn) {
                request = await fn(request, opts);
            }
        }
        // fetch must be assigned here, otherwise it would throw the error:
        // TypeError: Failed to execute 'fetch' on 'Window': Illegal invocation
        const _fetch = opts.fetch;
        let response = await _fetch(request);
        for (const fn of interceptors.response._fns) {
            if (fn) {
                response = await fn(response, request, opts);
            }
        }
        const result = {
            request,
            response,
        };
        if (response.ok) {
            if (response.status === 204 ||
                response.headers.get('Content-Length') === '0') {
                return opts.responseStyle === 'data'
                    ? {}
                    : {
                        data: {},
                        ...result,
                    };
            }
            const parseAs = (opts.parseAs === 'auto'
                ? (0, utils_1.getParseAs)(response.headers.get('Content-Type'))
                : opts.parseAs) ?? 'json';
            let data;
            switch (parseAs) {
                case 'arrayBuffer':
                case 'blob':
                case 'formData':
                case 'json':
                case 'text':
                    data = await response[parseAs]();
                    break;
                case 'stream':
                    return opts.responseStyle === 'data'
                        ? response.body
                        : {
                            data: response.body,
                            ...result,
                        };
            }
            if (parseAs === 'json') {
                if (opts.responseValidator) {
                    await opts.responseValidator(data);
                }
                if (opts.responseTransformer) {
                    data = await opts.responseTransformer(data);
                }
            }
            return opts.responseStyle === 'data'
                ? data
                : {
                    data,
                    ...result,
                };
        }
        let error = await response.text();
        try {
            error = JSON.parse(error);
        }
        catch {
            // noop
        }
        let finalError = error;
        for (const fn of interceptors.error._fns) {
            if (fn) {
                finalError = (await fn(error, response, request, opts));
            }
        }
        finalError = finalError || {};
        if (opts.throwOnError) {
            throw finalError;
        }
        // TODO: we probably want to return error and improve types
        return opts.responseStyle === 'data'
            ? undefined
            : {
                error: finalError,
                ...result,
            };
    };
    return {
        buildUrl: utils_1.buildUrl,
        connect: (options) => request({ ...options, method: 'CONNECT' }),
        delete: (options) => request({ ...options, method: 'DELETE' }),
        get: (options) => request({ ...options, method: 'GET' }),
        getConfig,
        head: (options) => request({ ...options, method: 'HEAD' }),
        interceptors,
        options: (options) => request({ ...options, method: 'OPTIONS' }),
        patch: (options) => request({ ...options, method: 'PATCH' }),
        post: (options) => request({ ...options, method: 'POST' }),
        put: (options) => request({ ...options, method: 'PUT' }),
        request,
        setConfig,
        trace: (options) => request({ ...options, method: 'TRACE' }),
    };
};
exports.createClient = createClient;
