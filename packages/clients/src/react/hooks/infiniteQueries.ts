// generated with @7nohe/openapi-react-query-codegen@1.6.2

import {
  InfiniteData,
  UseInfiniteQueryOptions,
  useInfiniteQuery,
} from "@tanstack/react-query";
import {
  QrCodeLinksService,
  QrCodeRouterRulesService,
  QrCodeScansService,
  QrCodesService,
  RouterRuleTemplatesService,
} from "../../node/services.gen";
import * as Common from "./common";
export const useQrCodeScansServiceGetCodesByCodeIdScansInfinite = <
  TData = InfiniteData<Common.QrCodeScansServiceGetCodesByCodeIdScansDefaultResponse>,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    asOrganization,
    browser,
    city,
    codeId,
    continent,
    countryCode,
    limit,
    orderBy,
    orderDirection,
    os,
    region,
    scannedAt,
    status,
  }: {
    asOrganization?: string;
    browser?: string;
    city?: string;
    codeId: string;
    continent?: string;
    countryCode?: string;
    limit?: number;
    orderBy?: "scannedAt" | "browser" | "countryCode" | "status";
    orderDirection?: "asc" | "desc";
    os?: string;
    region?: string;
    scannedAt?: { [key: string]: unknown };
    status?: "success" | "limit_reached";
  },
  queryKey?: TQueryKey,
  options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useInfiniteQuery({
    queryKey: Common.UseQrCodeScansServiceGetCodesByCodeIdScansKeyFn(
      {
        asOrganization,
        browser,
        city,
        codeId,
        continent,
        countryCode,
        limit,
        orderBy,
        orderDirection,
        os,
        region,
        scannedAt,
        status,
      },
      queryKey
    ),
    queryFn: ({ pageParam }) =>
      QrCodeScansService.getCodesByCodeIdScans({
        asOrganization,
        browser,
        city,
        codeId,
        continent,
        countryCode,
        limit,
        orderBy,
        orderDirection,
        os,
        page: pageParam as number,
        region,
        scannedAt,
        status,
      }) as TData,
    initialPageParam: "1",
    getNextPageParam: (response) =>
      (
        response as {
          nextPage: string;
        }
      ).nextPage,
    ...options,
  });
export const useQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesInfinite = <
  TData = InfiniteData<Common.QrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesDefaultResponse>,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    codeId,
    dataType,
    includeDisabled,
    limit,
    priority,
    type,
  }: {
    codeId: string;
    dataType?:
      | "url"
      | "text"
      | "email"
      | "phone"
      | "sms"
      | "wifi"
      | "vcard"
      | "event";
    includeDisabled?: boolean;
    limit?: number;
    priority?: number;
    type?:
      | "browser"
      | "location"
      | "continent"
      | "geo"
      | "time"
      | "date"
      | "timezone"
      | "language"
      | "os"
      | "deviceVendor"
      | "deviceModel"
      | "scanLimit";
  },
  queryKey?: TQueryKey,
  options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useInfiniteQuery({
    queryKey:
      Common.UseQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesKeyFn(
        { codeId, dataType, includeDisabled, limit, priority, type },
        queryKey
      ),
    queryFn: ({ pageParam }) =>
      QrCodeRouterRulesService.getCodesByCodeIdRouterRules({
        codeId,
        dataType,
        includeDisabled,
        limit,
        page: pageParam as number,
        priority,
        type,
      }) as TData,
    initialPageParam: "1",
    getNextPageParam: (response) =>
      (
        response as {
          nextPage: string;
        }
      ).nextPage,
    ...options,
  });
export const useQrCodeRouterRulesServiceGetRouterRulesInfinite = <
  TData = InfiniteData<Common.QrCodeRouterRulesServiceGetRouterRulesDefaultResponse>,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    codeId,
    dataType,
    includeDisabled,
    limit,
    priority,
    type,
    workspaceId,
  }: {
    codeId?: string;
    dataType?:
      | "url"
      | "text"
      | "email"
      | "wifi"
      | "vcard"
      | "event"
      | "json"
      | "file";
    includeDisabled?: boolean;
    limit?: number;
    priority?: number;
    type?:
      | "browser"
      | "location"
      | "continent"
      | "geo"
      | "time"
      | "date"
      | "timezone"
      | "language"
      | "os"
      | "deviceVendor"
      | "deviceModel"
      | "scanLimit";
    workspaceId?: string;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useInfiniteQuery({
    queryKey: Common.UseQrCodeRouterRulesServiceGetRouterRulesKeyFn(
      { codeId, dataType, includeDisabled, limit, priority, type, workspaceId },
      queryKey
    ),
    queryFn: ({ pageParam }) =>
      QrCodeRouterRulesService.getRouterRules({
        codeId,
        dataType,
        includeDisabled,
        limit,
        page: pageParam as number,
        priority,
        type,
        workspaceId,
      }) as TData,
    initialPageParam: "1",
    getNextPageParam: (response) =>
      (
        response as {
          nextPage: string;
        }
      ).nextPage,
    ...options,
  });
export const useQrCodeRouterRulesServiceGetWorkspacesByWorkspaceIdRouterRulesInfinite =
  <
    TData = InfiniteData<Common.QrCodeRouterRulesServiceGetWorkspacesByWorkspaceIdRouterRulesDefaultResponse>,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[]
  >(
    {
      codeId,
      dataType,
      includeDisabled,
      limit,
      priority,
      type,
      workspaceId,
    }: {
      codeId?: string;
      dataType?:
        | "url"
        | "text"
        | "email"
        | "phone"
        | "sms"
        | "wifi"
        | "vcard"
        | "event";
      includeDisabled?: boolean;
      limit?: number;
      priority?: number;
      type?:
        | "browser"
        | "location"
        | "continent"
        | "geo"
        | "time"
        | "date"
        | "timezone"
        | "language"
        | "os"
        | "deviceVendor"
        | "deviceModel"
        | "scanLimit";
      workspaceId: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<
      UseInfiniteQueryOptions<TData, TError>,
      "queryKey" | "queryFn"
    >
  ) =>
    useInfiniteQuery({
      queryKey:
        Common.UseQrCodeRouterRulesServiceGetWorkspacesByWorkspaceIdRouterRulesKeyFn(
          {
            codeId,
            dataType,
            includeDisabled,
            limit,
            priority,
            type,
            workspaceId,
          },
          queryKey
        ),
      queryFn: ({ pageParam }) =>
        QrCodeRouterRulesService.getWorkspacesByWorkspaceIdRouterRules({
          codeId,
          dataType,
          includeDisabled,
          limit,
          page: pageParam as number,
          priority,
          type,
          workspaceId,
        }) as TData,
      initialPageParam: "1",
      getNextPageParam: (response) =>
        (
          response as {
            nextPage: string;
          }
        ).nextPage,
      ...options,
    });
export const useQrCodesServiceGetCodesDeletedInfinite = <
  TData = InfiniteData<Common.QrCodesServiceGetCodesDeletedDefaultResponse>,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    createdAt,
    data,
    isValid,
    limit,
    name,
    orderBy,
    orderDirection,
    updatedAt,
    workspaceId,
  }: {
    createdAt?: { [key: string]: unknown };
    data?: string;
    isValid?: "true" | "false" | "null";
    limit?: number;
    name?: string;
    orderBy?: "createdAt" | "updatedAt" | "name";
    orderDirection?: "asc" | "desc";
    updatedAt?: { [key: string]: unknown };
    workspaceId?: string;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useInfiniteQuery({
    queryKey: Common.UseQrCodesServiceGetCodesDeletedKeyFn(
      {
        createdAt,
        data,
        isValid,
        limit,
        name,
        orderBy,
        orderDirection,
        updatedAt,
        workspaceId,
      },
      queryKey
    ),
    queryFn: ({ pageParam }) =>
      QrCodesService.getCodesDeleted({
        createdAt,
        data,
        isValid,
        limit,
        name,
        orderBy,
        orderDirection,
        page: pageParam as number,
        updatedAt,
        workspaceId,
      }) as TData,
    initialPageParam: "1",
    getNextPageParam: (response) =>
      (
        response as {
          nextPage: string;
        }
      ).nextPage,
    ...options,
  });
export const useQrCodesServiceGetCodesInfinite = <
  TData = InfiniteData<Common.QrCodesServiceGetCodesDefaultResponse>,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    createdAt,
    data,
    isValid,
    limit,
    name,
    orderBy,
    orderDirection,
    updatedAt,
    workspaceId,
  }: {
    createdAt?: { [key: string]: unknown };
    data?: string;
    isValid?: "true" | "false" | "null";
    limit?: number;
    name?: string;
    orderBy?: "createdAt" | "updatedAt" | "name";
    orderDirection?: "asc" | "desc";
    updatedAt?: { [key: string]: unknown };
    workspaceId?: string;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useInfiniteQuery({
    queryKey: Common.UseQrCodesServiceGetCodesKeyFn(
      {
        createdAt,
        data,
        isValid,
        limit,
        name,
        orderBy,
        orderDirection,
        updatedAt,
        workspaceId,
      },
      queryKey
    ),
    queryFn: ({ pageParam }) =>
      QrCodesService.getCodes({
        createdAt,
        data,
        isValid,
        limit,
        name,
        orderBy,
        orderDirection,
        page: pageParam as number,
        updatedAt,
        workspaceId,
      }) as TData,
    initialPageParam: "1",
    getNextPageParam: (response) =>
      (
        response as {
          nextPage: string;
        }
      ).nextPage,
    ...options,
  });
export const useQrCodeLinksServiceGetCodesLinksInfinite = <
  TData = InfiniteData<Common.QrCodeLinksServiceGetCodesLinksDefaultResponse>,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    borderName,
    codeData,
    codeId,
    codeIsValid,
    codeName,
    codeType,
    codeVersion,
    createdAt,
    createdByApiKeyId,
    createdByUserId,
    isCurrentVersion,
    limit,
    orderBy,
    orderDirection,
    styleName,
    templateName,
    type,
    updatedAt,
    workspaceId,
  }: {
    borderName?: string;
    codeData?: string;
    codeId?: string;
    codeIsValid?: "true" | "false" | "null";
    codeName?: string;
    codeType?: string;
    codeVersion?: number;
    createdAt?: { [key: string]: unknown };
    createdByApiKeyId?: string;
    createdByUserId?: string;
    isCurrentVersion?: "true" | "false";
    limit?: number;
    orderBy?: "createdAt" | "updatedAt" | "type";
    orderDirection?: "asc" | "desc";
    styleName?: string;
    templateName?: string;
    type?: "svg" | "png" | "pdf";
    updatedAt?: { [key: string]: unknown };
    workspaceId?: string;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useInfiniteQuery({
    queryKey: Common.UseQrCodeLinksServiceGetCodesLinksKeyFn(
      {
        borderName,
        codeData,
        codeId,
        codeIsValid,
        codeName,
        codeType,
        codeVersion,
        createdAt,
        createdByApiKeyId,
        createdByUserId,
        isCurrentVersion,
        limit,
        orderBy,
        orderDirection,
        styleName,
        templateName,
        type,
        updatedAt,
        workspaceId,
      },
      queryKey
    ),
    queryFn: ({ pageParam }) =>
      QrCodeLinksService.getCodesLinks({
        borderName,
        codeData,
        codeId,
        codeIsValid,
        codeName,
        codeType,
        codeVersion,
        createdAt,
        createdByApiKeyId,
        createdByUserId,
        isCurrentVersion,
        limit,
        orderBy,
        orderDirection,
        page: pageParam as number,
        styleName,
        templateName,
        type,
        updatedAt,
        workspaceId,
      }) as TData,
    initialPageParam: "1",
    getNextPageParam: (response) =>
      (
        response as {
          nextPage: string;
        }
      ).nextPage,
    ...options,
  });
export const useRouterRuleTemplatesServiceGetRouterRuleTemplatesInfinite = <
  TData = InfiniteData<Common.RouterRuleTemplatesServiceGetRouterRuleTemplatesDefaultResponse>,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    includeGlobal,
    limit,
    type,
  }: {
    includeGlobal?: boolean;
    limit?: number;
    type?:
      | "browser"
      | "location"
      | "continent"
      | "geo"
      | "time"
      | "date"
      | "timezone"
      | "language"
      | "os"
      | "deviceVendor"
      | "deviceModel"
      | "scanLimit";
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseInfiniteQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useInfiniteQuery({
    queryKey: Common.UseRouterRuleTemplatesServiceGetRouterRuleTemplatesKeyFn(
      { includeGlobal, limit, type },
      queryKey
    ),
    queryFn: ({ pageParam }) =>
      RouterRuleTemplatesService.getRouterRuleTemplates({
        includeGlobal,
        limit,
        page: pageParam as number,
        type,
      }) as TData,
    initialPageParam: "1",
    getNextPageParam: (response) =>
      (
        response as {
          nextPage: string;
        }
      ).nextPage,
    ...options,
  });
