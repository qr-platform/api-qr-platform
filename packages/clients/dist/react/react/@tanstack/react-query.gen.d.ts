import { type Options } from '../sdk.gen';
import { type UseMutationOptions, type InfiniteData } from '@tanstack/react-query';
import type { PostAuthRegisterData, PostAuthRegisterError, PostAuthRegisterResponse, PostAuthRegisterVerifyData, PostAuthRegisterVerifyError, PostAuthRegisterVerifyResponse, PostAuthRegisterVerifyResendData, PostAuthRegisterVerifyResendError, PostAuthRegisterVerifyResendResponse, PostAuthSignInData, PostAuthSignInError, PostAuthSignInResponse, PostAuthSignInVerifyData, PostAuthSignInVerifyError, PostAuthSignInVerifyResponse, PostAuthEmailVerifySendData, PostAuthEmailVerifySendError, PostAuthEmailVerifySendResponse, PostAuthEmailVerifyData, PostAuthEmailVerifyError, PostAuthEmailVerifyResponse, GetAuthMeData, GetAuthSignOutData, PostAuthPasswordResetData, PostAuthPasswordResetError, PostAuthPasswordResetResponse, PostAuthPasswordResetVerifyData, PostAuthPasswordResetVerifyError, PostAuthPasswordResetVerifyResponse, PostAuthPasswordChangeData, PostAuthPasswordChangeError, PostAuthPasswordChangeResponse, GetApiKeysData, PostApiKeysData, PostApiKeysError, PostApiKeysResponse, DeleteApiKeysByApiKeyIdData, DeleteApiKeysByApiKeyIdError, DeleteApiKeysByApiKeyIdResponse, GetApiKeysByApiKeyIdData, PutApiKeysByApiKeyIdData, PutApiKeysByApiKeyIdError, PutApiKeysByApiKeyIdResponse, PutApiKeysByApiKeyIdStatusData, PutApiKeysByApiKeyIdStatusError, PutApiKeysByApiKeyIdStatusResponse, GetOrgsCurrentData, PutOrgsData, PutOrgsError, PutOrgsResponse, PostOrgsFirstData, PostOrgsFirstError, PostOrgsFirstResponse, PostOrgsCurrentByOrgIdData, PostOrgsCurrentByOrgIdError, PostOrgsCurrentByOrgIdResponse, GetInvitesData, PostInvitesData, PostInvitesError, PostInvitesResponse, GetInvitesMeData, DeleteInvitesByInvitationIdData, DeleteInvitesByInvitationIdError, DeleteInvitesByInvitationIdResponse, GetInvitesByTokenAcceptData, GetInvitesByTokenDeclineData, GetMembersData, PostMembersData, PostMembersError, PostMembersResponse, DeleteMembersByUserIdData, DeleteMembersByUserIdError, DeleteMembersByUserIdResponse, GetMembersByUserIdRolesData, PostMembersByUserIdRoleData, PostMembersByUserIdRoleError, PostMembersByUserIdRoleResponse, DeleteMembersByUserIdRoleByRoleNameData, DeleteMembersByUserIdRoleByRoleNameError, DeleteMembersByUserIdRoleByRoleNameResponse, GetWorkspacesData, PostWorkspacesData, PostWorkspacesError, PostWorkspacesResponse, DeleteWorkspacesByWorkspaceIdData, DeleteWorkspacesByWorkspaceIdError, DeleteWorkspacesByWorkspaceIdResponse, GetWorkspacesByWorkspaceIdData, PutWorkspacesByWorkspaceIdData, PutWorkspacesByWorkspaceIdError, PutWorkspacesByWorkspaceIdResponse, DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleData, DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleError, DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleResponse, GetWorkspacesByWorkspaceIdMembersByUserIdRoleData, PostWorkspacesByWorkspaceIdMembersByUserIdRoleData, PostWorkspacesByWorkspaceIdMembersByUserIdRoleError, PostWorkspacesByWorkspaceIdMembersByUserIdRoleResponse, GetWorkspacesByWorkspaceIdMembersData, GetRolesData, GetPlansData, GetPlansCurrentData, GetSettingsData, GetSettingsCustomData, PostSettingsCustomData, PostSettingsCustomError, PostSettingsCustomResponse, DeleteSettingsCustomBySettingSlugData, DeleteSettingsCustomBySettingSlugError, DeleteSettingsCustomBySettingSlugResponse, GetSettingsCustomBySettingSlugData, PutSettingsCustomBySettingSlugData, PutSettingsCustomBySettingSlugError, PutSettingsCustomBySettingSlugResponse, GetSettingsCustomBySettingSlugValueData, GetSettingsServiceData, GetSettingsServiceBySettingSlugData, PutSettingsServiceBySettingSlugData, PutSettingsServiceBySettingSlugError, PutSettingsServiceBySettingSlugResponse, GetSettingsServiceBySettingSlugValueData, GetWorkspacesByWorkspaceIdSettingsData, GetWorkspacesByWorkspaceIdSettingsCustomData, PostWorkspacesByWorkspaceIdSettingsCustomData, PostWorkspacesByWorkspaceIdSettingsCustomError, PostWorkspacesByWorkspaceIdSettingsCustomResponse, DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData, DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugError, DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponse, GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData, PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData, PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugError, PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponse, GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueData, GetWorkspacesByWorkspaceIdSettingsServiceData, DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData, DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugError, DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponse, GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData, PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData, PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugError, PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponse, GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueData, GetCodesByCodeIdScansData, GetCodesByCodeIdScansError, GetCodesByCodeIdRouterRulesData, GetCodesByCodeIdRouterRulesError, PostCodesByCodeIdRouterRulesData, PostCodesByCodeIdRouterRulesError, PostCodesByCodeIdRouterRulesResponse, DeleteCodesByCodeIdRouterRulesByRouterRuleIdData, DeleteCodesByCodeIdRouterRulesByRouterRuleIdError, DeleteCodesByCodeIdRouterRulesByRouterRuleIdResponse, GetCodesByCodeIdRouterRulesByRouterRuleIdData, PutCodesByCodeIdRouterRulesByRouterRuleIdData, PutCodesByCodeIdRouterRulesByRouterRuleIdError, PutCodesByCodeIdRouterRulesByRouterRuleIdResponse, GetCodesDeletedData, GetCodesDeletedError, GetCodesLinksData, GetCodesLinksError, DeleteCodesByCodeIdData, DeleteCodesByCodeIdError, DeleteCodesByCodeIdResponse, GetCodesByCodeIdData, PutCodesByCodeIdData, PutCodesByCodeIdError, PutCodesByCodeIdResponse, DeleteCodesData, DeleteCodesError, DeleteCodesResponse, GetCodesData, GetCodesError, PostCodesData, PostCodesError, PostCodesResponse, PutCodesByCodeIdOptionsData, PutCodesByCodeIdOptionsError, PutCodesByCodeIdOptionsResponse, DeleteCodesPermanentData, DeleteCodesPermanentError, DeleteCodesPermanentResponse, DeleteCodesByCodeIdPermanentData, DeleteCodesByCodeIdPermanentError, DeleteCodesByCodeIdPermanentResponse, PostCodesByCodeIdRestoreData, PostCodesByCodeIdRestoreError, PostCodesByCodeIdRestoreResponse, PostCodesBulkGetData, PostCodesBulkGetError, PostCodesBulkGetResponse, PostCodesGenerateByTypeData, PostCodesGenerateByTypeError, PostCodesGenerateByTypeResponse, PostCodesValidateData, PostCodesValidateError, PostCodesValidateResponse, PostCodesByCodeIdValidateData, PostCodesByCodeIdValidateError, PostCodesByCodeIdValidateResponse, PostCodesLinksRefreshData, PostCodesLinksRefreshError, PostCodesLinksRefreshResponse, GetCodesByCodeIdVersionByVersionData, DeleteCodesByCodeIdVersionsData, DeleteCodesByCodeIdVersionsError, DeleteCodesByCodeIdVersionsResponse, GetCodesByCodeIdVersionsData, PostCodesByCodeIdVersionByVersionRestoreData, PostCodesByCodeIdVersionByVersionRestoreError, PostCodesByCodeIdVersionByVersionRestoreResponse, GetCodesByCodeIdVersionByVersionByTypeData, GetCodesByCodeIdVersionByVersionByTypeLinkData, DeleteCodesByCodeIdVersionsByVersionLinksData, DeleteCodesByCodeIdVersionsByVersionLinksError, DeleteCodesByCodeIdVersionsByVersionLinksResponse, DeleteCodesByCodeIdVersionsByVersionLinksByTypeData, DeleteCodesByCodeIdVersionsByVersionLinksByTypeError, DeleteCodesByCodeIdVersionsByVersionLinksByTypeResponse, DeleteCodesByCodeIdVersionsLinksData, DeleteCodesByCodeIdVersionsLinksError, DeleteCodesByCodeIdVersionsLinksResponse, DeleteCodesByCodeIdVersionsLinksByTypeData, DeleteCodesByCodeIdVersionsLinksByTypeError, DeleteCodesByCodeIdVersionsLinksByTypeResponse, GetCodesByCodeIdByTypeData, GetCodesByCodeIdByTypeLinkData, DeleteCodesByCodeIdLinksData, DeleteCodesByCodeIdLinksError, DeleteCodesByCodeIdLinksResponse, DeleteCodesByCodeIdLinksByTypeData, DeleteCodesByCodeIdLinksByTypeError, DeleteCodesByCodeIdLinksByTypeResponse, GetTemplatesData, PostTemplatesData, PostTemplatesError, PostTemplatesResponse, GetTemplatesBaseData, DeleteTemplatesByTemplateIdData, DeleteTemplatesByTemplateIdError, DeleteTemplatesByTemplateIdResponse, GetTemplatesByTemplateIdData, PutTemplatesByTemplateIdData, PutTemplatesByTemplateIdError, PutTemplatesByTemplateIdResponse, PutTemplatesByTemplateIdOptionsData, PutTemplatesByTemplateIdOptionsError, PutTemplatesByTemplateIdOptionsResponse, GetTemplatesWorkspaceByWorkspaceIdData, GetStylesData, PostStylesData, PostStylesError, PostStylesResponse, GetStylesBaseData, DeleteStylesByStyleIdData, DeleteStylesByStyleIdError, DeleteStylesByStyleIdResponse, GetStylesByStyleIdData, PutStylesByStyleIdData, PutStylesByStyleIdError, PutStylesByStyleIdResponse, PutStylesByStyleIdOptionsData, PutStylesByStyleIdOptionsError, PutStylesByStyleIdOptionsResponse, GetStylesWorkspaceByWorkspaceIdData, GetTextsData, PostTextsData, PostTextsError, PostTextsResponse, GetTextsBaseData, DeleteTextsByTextIdData, DeleteTextsByTextIdError, DeleteTextsByTextIdResponse, GetTextsByTextIdData, PutTextsByTextIdData, PutTextsByTextIdError, PutTextsByTextIdResponse, PutTextsByTextIdOptionsData, PutTextsByTextIdOptionsError, PutTextsByTextIdOptionsResponse, GetTextsWorkspaceByWorkspaceIdData, GetBordersData, PostBordersData, PostBordersError, PostBordersResponse, GetBordersBaseData, DeleteBordersByBorderIdData, DeleteBordersByBorderIdError, DeleteBordersByBorderIdResponse, GetBordersByBorderIdData, PutBordersByBorderIdData, PutBordersByBorderIdError, PutBordersByBorderIdResponse, PutBordersByBorderIdOptionsData, PutBordersByBorderIdOptionsError, PutBordersByBorderIdOptionsResponse, GetBordersWorkspaceByWorkspaceIdData, GetCountryCodesData, GetRouterRuleTemplatesData, GetRouterRuleTemplatesError, PostRouterRuleTemplatesData, PostRouterRuleTemplatesError, DeleteRouterRuleTemplatesByRouterRuleTemplateIdData, DeleteRouterRuleTemplatesByRouterRuleTemplateIdError, DeleteRouterRuleTemplatesByRouterRuleTemplateIdResponse, GetRouterRuleTemplatesByRouterRuleTemplateIdData, PutRouterRuleTemplatesByRouterRuleTemplateIdData, PutRouterRuleTemplatesByRouterRuleTemplateIdError, GetRouterRulesData, GetRouterRulesError, GetWorkspacesByWorkspaceIdRouterRulesData, GetWorkspacesByWorkspaceIdRouterRulesError, PostWorkspacesByWorkspaceIdRouterRuleTemplatesData, PostWorkspacesByWorkspaceIdRouterRuleTemplatesError } from '../types.gen';
export type QueryKey<TOptions extends Options> = [
    Pick<TOptions, 'baseUrl' | 'body' | 'headers' | 'path' | 'query'> & {
        _id: string;
        _infinite?: boolean;
    }
];
export declare const postAuthRegisterQueryKey: (options?: Options<PostAuthRegisterData>) => [Pick<Options<PostAuthRegisterData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Register New User
 * Registers a new user and organization. Sends a verification code and token via email
 */
export declare const postAuthRegisterOptions: (options?: Options<PostAuthRegisterData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").RegisterResponse, Error, import("../types.gen").RegisterResponse, [Pick<Options<PostAuthRegisterData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").RegisterResponse, [Pick<Options<PostAuthRegisterData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostAuthRegisterData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").RegisterResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Register New User
 * Registers a new user and organization. Sends a verification code and token via email
 */
export declare const postAuthRegisterMutation: (options?: Partial<Options<PostAuthRegisterData>>) => UseMutationOptions<PostAuthRegisterResponse, PostAuthRegisterError, Options<PostAuthRegisterData>>;
export declare const postAuthRegisterVerifyQueryKey: (options?: Options<PostAuthRegisterVerifyData>) => [Pick<Options<PostAuthRegisterVerifyData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Verify Registration Code or Token
 * Verifies the 6-digit code or token sent via email after registration
 */
export declare const postAuthRegisterVerifyOptions: (options?: Options<PostAuthRegisterVerifyData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").RegisterVerifyResponse, Error, import("../types.gen").RegisterVerifyResponse, [Pick<Options<PostAuthRegisterVerifyData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").RegisterVerifyResponse, [Pick<Options<PostAuthRegisterVerifyData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostAuthRegisterVerifyData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").RegisterVerifyResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Verify Registration Code or Token
 * Verifies the 6-digit code or token sent via email after registration
 */
export declare const postAuthRegisterVerifyMutation: (options?: Partial<Options<PostAuthRegisterVerifyData>>) => UseMutationOptions<PostAuthRegisterVerifyResponse, PostAuthRegisterVerifyError, Options<PostAuthRegisterVerifyData>>;
export declare const postAuthRegisterVerifyResendQueryKey: (options?: Options<PostAuthRegisterVerifyResendData>) => [Pick<Options<PostAuthRegisterVerifyResendData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Resend Registration Verification Code and Token
 * Resends the 6-digit verification code or token to the user's email.
 */
export declare const postAuthRegisterVerifyResendOptions: (options?: Options<PostAuthRegisterVerifyResendData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").RegisterVerifyResendResponse, Error, import("../types.gen").RegisterVerifyResendResponse, [Pick<Options<PostAuthRegisterVerifyResendData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").RegisterVerifyResendResponse, [Pick<Options<PostAuthRegisterVerifyResendData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostAuthRegisterVerifyResendData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").RegisterVerifyResendResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Resend Registration Verification Code and Token
 * Resends the 6-digit verification code or token to the user's email.
 */
export declare const postAuthRegisterVerifyResendMutation: (options?: Partial<Options<PostAuthRegisterVerifyResendData>>) => UseMutationOptions<PostAuthRegisterVerifyResendResponse, PostAuthRegisterVerifyResendError, Options<PostAuthRegisterVerifyResendData>>;
export declare const postAuthSignInQueryKey: (options?: Options<PostAuthSignInData>) => [Pick<Options<PostAuthSignInData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Sign In User
 * Initiates user sign-in. Returns an access token if password is provided and correct, otherwise indicates if passwordless verification is needed
 */
export declare const postAuthSignInOptions: (options?: Options<PostAuthSignInData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SignInResponse, Error, import("../types.gen").SignInResponse, [Pick<Options<PostAuthSignInData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SignInResponse, [Pick<Options<PostAuthSignInData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostAuthSignInData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SignInResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Sign In User
 * Initiates user sign-in. Returns an access token if password is provided and correct, otherwise indicates if passwordless verification is needed
 */
export declare const postAuthSignInMutation: (options?: Partial<Options<PostAuthSignInData>>) => UseMutationOptions<PostAuthSignInResponse, PostAuthSignInError, Options<PostAuthSignInData>>;
export declare const postAuthSignInVerifyQueryKey: (options?: Options<PostAuthSignInVerifyData>) => [Pick<Options<PostAuthSignInVerifyData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Verify Sign In Code or Token
 * Verifies the 6-digit code or token sent via email for passwordless sign-in
 */
export declare const postAuthSignInVerifyOptions: (options?: Options<PostAuthSignInVerifyData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SignInVerifyResponse, Error, import("../types.gen").SignInVerifyResponse, [Pick<Options<PostAuthSignInVerifyData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SignInVerifyResponse, [Pick<Options<PostAuthSignInVerifyData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostAuthSignInVerifyData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SignInVerifyResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Verify Sign In Code or Token
 * Verifies the 6-digit code or token sent via email for passwordless sign-in
 */
export declare const postAuthSignInVerifyMutation: (options?: Partial<Options<PostAuthSignInVerifyData>>) => UseMutationOptions<PostAuthSignInVerifyResponse, PostAuthSignInVerifyError, Options<PostAuthSignInVerifyData>>;
export declare const postAuthEmailVerifySendQueryKey: (options?: Options<PostAuthEmailVerifySendData>) => [Pick<Options<PostAuthEmailVerifySendData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Send Email Verification Code and Token
 * Sends a verification code and token to the user's email if it's not already verified.
 */
export declare const postAuthEmailVerifySendOptions: (options?: Options<PostAuthEmailVerifySendData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EmailVerifySendResponse, Error, import("../types.gen").EmailVerifySendResponse, [Pick<Options<PostAuthEmailVerifySendData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EmailVerifySendResponse, [Pick<Options<PostAuthEmailVerifySendData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostAuthEmailVerifySendData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EmailVerifySendResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Send Email Verification Code and Token
 * Sends a verification code and token to the user's email if it's not already verified.
 */
export declare const postAuthEmailVerifySendMutation: (options?: Partial<Options<PostAuthEmailVerifySendData>>) => UseMutationOptions<PostAuthEmailVerifySendResponse, PostAuthEmailVerifySendError, Options<PostAuthEmailVerifySendData>>;
export declare const postAuthEmailVerifyQueryKey: (options?: Options<PostAuthEmailVerifyData>) => [Pick<Options<PostAuthEmailVerifyData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Verify Email Address
 * Verifies the user's email address using the provided code or token.
 */
export declare const postAuthEmailVerifyOptions: (options?: Options<PostAuthEmailVerifyData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").EmailVerifyResponse, Error, import("../types.gen").EmailVerifyResponse, [Pick<Options<PostAuthEmailVerifyData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").EmailVerifyResponse, [Pick<Options<PostAuthEmailVerifyData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostAuthEmailVerifyData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").EmailVerifyResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Verify Email Address
 * Verifies the user's email address using the provided code or token.
 */
export declare const postAuthEmailVerifyMutation: (options?: Partial<Options<PostAuthEmailVerifyData>>) => UseMutationOptions<PostAuthEmailVerifyResponse, PostAuthEmailVerifyError, Options<PostAuthEmailVerifyData>>;
export declare const getAuthMeQueryKey: (options?: Options<GetAuthMeData>) => [Pick<Options<GetAuthMeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get Current User
 * Retrieves the details of the currently authenticated user
 */
export declare const getAuthMeOptions: (options?: Options<GetAuthMeData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").MeResponse, Error, import("../types.gen").MeResponse, [Pick<Options<GetAuthMeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").MeResponse, [Pick<Options<GetAuthMeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetAuthMeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").MeResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getAuthSignOutQueryKey: (options?: Options<GetAuthSignOutData>) => [Pick<Options<GetAuthSignOutData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Sign Out User
 * Signs out the current user by clearing relevant cookies/session data
 */
export declare const getAuthSignOutOptions: (options?: Options<GetAuthSignOutData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SignOutResponse, Error, import("../types.gen").SignOutResponse, [Pick<Options<GetAuthSignOutData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SignOutResponse, [Pick<Options<GetAuthSignOutData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetAuthSignOutData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SignOutResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const postAuthPasswordResetQueryKey: (options?: Options<PostAuthPasswordResetData>) => [Pick<Options<PostAuthPasswordResetData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Request Password Reset
 * Sends a password reset email with a verification token
 */
export declare const postAuthPasswordResetOptions: (options?: Options<PostAuthPasswordResetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").PasswordResetResponse, Error, import("../types.gen").PasswordResetResponse, [Pick<Options<PostAuthPasswordResetData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").PasswordResetResponse, [Pick<Options<PostAuthPasswordResetData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostAuthPasswordResetData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").PasswordResetResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Request Password Reset
 * Sends a password reset email with a verification token
 */
export declare const postAuthPasswordResetMutation: (options?: Partial<Options<PostAuthPasswordResetData>>) => UseMutationOptions<PostAuthPasswordResetResponse, PostAuthPasswordResetError, Options<PostAuthPasswordResetData>>;
export declare const postAuthPasswordResetVerifyQueryKey: (options?: Options<PostAuthPasswordResetVerifyData>) => [Pick<Options<PostAuthPasswordResetVerifyData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Verify Password Reset
 * Verifies the password reset token and sets a new password
 */
export declare const postAuthPasswordResetVerifyOptions: (options?: Options<PostAuthPasswordResetVerifyData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").PasswordResetVerifyResponse, Error, import("../types.gen").PasswordResetVerifyResponse, [Pick<Options<PostAuthPasswordResetVerifyData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").PasswordResetVerifyResponse, [Pick<Options<PostAuthPasswordResetVerifyData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostAuthPasswordResetVerifyData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").PasswordResetVerifyResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Verify Password Reset
 * Verifies the password reset token and sets a new password
 */
export declare const postAuthPasswordResetVerifyMutation: (options?: Partial<Options<PostAuthPasswordResetVerifyData>>) => UseMutationOptions<PostAuthPasswordResetVerifyResponse, PostAuthPasswordResetVerifyError, Options<PostAuthPasswordResetVerifyData>>;
export declare const postAuthPasswordChangeQueryKey: (options?: Options<PostAuthPasswordChangeData>) => [Pick<Options<PostAuthPasswordChangeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Change Password
 * Changes the password for the authenticated user
 */
export declare const postAuthPasswordChangeOptions: (options?: Options<PostAuthPasswordChangeData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").PasswordChangeResponse, Error, import("../types.gen").PasswordChangeResponse, [Pick<Options<PostAuthPasswordChangeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").PasswordChangeResponse, [Pick<Options<PostAuthPasswordChangeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostAuthPasswordChangeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").PasswordChangeResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Change Password
 * Changes the password for the authenticated user
 */
export declare const postAuthPasswordChangeMutation: (options?: Partial<Options<PostAuthPasswordChangeData>>) => UseMutationOptions<PostAuthPasswordChangeResponse, PostAuthPasswordChangeError, Options<PostAuthPasswordChangeData>>;
export declare const getApiKeysQueryKey: (options?: Options<GetApiKeysData>) => [Pick<Options<GetApiKeysData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List API keys
 * Retrieves all API keys for the current organization.
 */
export declare const getApiKeysOptions: (options?: Options<GetApiKeysData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").ApiKeyList, Error, import("../types.gen").ApiKeyList, [Pick<Options<GetApiKeysData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").ApiKeyList, [Pick<Options<GetApiKeysData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetApiKeysData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").ApiKeyList;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const postApiKeysQueryKey: (options?: Options<PostApiKeysData>) => [Pick<Options<PostApiKeysData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Create API key
 * Creates a new API key for the current organization.
 */
export declare const postApiKeysOptions: (options?: Options<PostApiKeysData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").ApiKeyCreateResponse, Error, import("../types.gen").ApiKeyCreateResponse, [Pick<Options<PostApiKeysData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").ApiKeyCreateResponse, [Pick<Options<PostApiKeysData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostApiKeysData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").ApiKeyCreateResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Create API key
 * Creates a new API key for the current organization.
 */
export declare const postApiKeysMutation: (options?: Partial<Options<PostApiKeysData>>) => UseMutationOptions<PostApiKeysResponse, PostApiKeysError, Options<PostApiKeysData>>;
/**
 * Delete API key
 * Deletes an API key by its ID.
 */
export declare const deleteApiKeysByApiKeyIdMutation: (options?: Partial<Options<DeleteApiKeysByApiKeyIdData>>) => UseMutationOptions<DeleteApiKeysByApiKeyIdResponse, DeleteApiKeysByApiKeyIdError, Options<DeleteApiKeysByApiKeyIdData>>;
export declare const getApiKeysByApiKeyIdQueryKey: (options: Options<GetApiKeysByApiKeyIdData>) => [Pick<Options<GetApiKeysByApiKeyIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get API key details
 * Retrieves details of a specific API key by its ID.
 */
export declare const getApiKeysByApiKeyIdOptions: (options: Options<GetApiKeysByApiKeyIdData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").ApiKeyResponse, Error, import("../types.gen").ApiKeyResponse, [Pick<Options<GetApiKeysByApiKeyIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").ApiKeyResponse, [Pick<Options<GetApiKeysByApiKeyIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetApiKeysByApiKeyIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").ApiKeyResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Update API key
 * Updates an existing API key by its ID.
 */
export declare const putApiKeysByApiKeyIdMutation: (options?: Partial<Options<PutApiKeysByApiKeyIdData>>) => UseMutationOptions<PutApiKeysByApiKeyIdResponse, PutApiKeysByApiKeyIdError, Options<PutApiKeysByApiKeyIdData>>;
/**
 * Change API key status
 * Changes the status of an API key (activate or disable).
 */
export declare const putApiKeysByApiKeyIdStatusMutation: (options?: Partial<Options<PutApiKeysByApiKeyIdStatusData>>) => UseMutationOptions<PutApiKeysByApiKeyIdStatusResponse, PutApiKeysByApiKeyIdStatusError, Options<PutApiKeysByApiKeyIdStatusData>>;
export declare const getOrgsCurrentQueryKey: (options?: Options<GetOrgsCurrentData>) => [Pick<Options<GetOrgsCurrentData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get current organization
 * Retrieves details of the current active organization for the authenticated user.
 */
export declare const getOrgsCurrentOptions: (options?: Options<GetOrgsCurrentData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<{
    id: string;
    name: string;
    planName?: string | null;
    description?: string | null;
    redirectUrl?: string | null;
    isDisabled?: boolean;
    disabledBy?: string | null;
    disabledAt?: string | null;
    isDeleted?: boolean;
    deletedBy?: string | null;
    deletedAt?: string | null;
    isCurrent?: boolean;
    roles?: Array<{
        name: string;
        scopes?: Array<string>;
    }>;
    workspaces?: Array<{
        id: string;
        name: string;
        isRestricted: boolean;
        roles?: Array<{
            name: string;
            scopes?: Array<string>;
        }>;
    }>;
    createdByUser?: import("../types.gen").AuditInfoMember | null;
    updatedByUser?: import("../types.gen").AuditInfoMember | null;
    createdByApiKey?: import("../types.gen").AuditInfoApiKey | null;
    updatedByApiKey?: import("../types.gen").AuditInfoApiKey | null;
    createdAt?: string | null;
    updatedAt?: string | null;
}, Error, {
    id: string;
    name: string;
    planName?: string | null;
    description?: string | null;
    redirectUrl?: string | null;
    isDisabled?: boolean;
    disabledBy?: string | null;
    disabledAt?: string | null;
    isDeleted?: boolean;
    deletedBy?: string | null;
    deletedAt?: string | null;
    isCurrent?: boolean;
    roles?: Array<{
        name: string;
        scopes?: Array<string>;
    }>;
    workspaces?: Array<{
        id: string;
        name: string;
        isRestricted: boolean;
        roles?: Array<{
            name: string;
            scopes?: Array<string>;
        }>;
    }>;
    createdByUser?: import("../types.gen").AuditInfoMember | null;
    updatedByUser?: import("../types.gen").AuditInfoMember | null;
    createdByApiKey?: import("../types.gen").AuditInfoApiKey | null;
    updatedByApiKey?: import("../types.gen").AuditInfoApiKey | null;
    createdAt?: string | null;
    updatedAt?: string | null;
}, [Pick<Options<GetOrgsCurrentData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<{
        id: string;
        name: string;
        planName?: string | null;
        description?: string | null;
        redirectUrl?: string | null;
        isDisabled?: boolean;
        disabledBy?: string | null;
        disabledAt?: string | null;
        isDeleted?: boolean;
        deletedBy?: string | null;
        deletedAt?: string | null;
        isCurrent?: boolean;
        roles?: Array<{
            name: string;
            scopes?: Array<string>;
        }>;
        workspaces?: Array<{
            id: string;
            name: string;
            isRestricted: boolean;
            roles?: Array<{
                name: string;
                scopes?: Array<string>;
            }>;
        }>;
        createdByUser?: import("../types.gen").AuditInfoMember | null;
        updatedByUser?: import("../types.gen").AuditInfoMember | null;
        createdByApiKey?: import("../types.gen").AuditInfoApiKey | null;
        updatedByApiKey?: import("../types.gen").AuditInfoApiKey | null;
        createdAt?: string | null;
        updatedAt?: string | null;
    }, [Pick<Options<GetOrgsCurrentData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetOrgsCurrentData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: {
            id: string;
            name: string;
            planName?: string | null;
            description?: string | null;
            redirectUrl?: string | null;
            isDisabled?: boolean;
            disabledBy?: string | null;
            disabledAt?: string | null;
            isDeleted?: boolean;
            deletedBy?: string | null;
            deletedAt?: string | null;
            isCurrent?: boolean;
            roles?: Array<{
                name: string;
                scopes?: Array<string>;
            }>;
            workspaces?: Array<{
                id: string;
                name: string;
                isRestricted: boolean;
                roles?: Array<{
                    name: string;
                    scopes?: Array<string>;
                }>;
            }>;
            createdByUser?: import("../types.gen").AuditInfoMember | null;
            updatedByUser?: import("../types.gen").AuditInfoMember | null;
            createdByApiKey?: import("../types.gen").AuditInfoApiKey | null;
            updatedByApiKey?: import("../types.gen").AuditInfoApiKey | null;
            createdAt?: string | null;
            updatedAt?: string | null;
        };
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Update current organization
 * Updates the details of the current active organization.
 */
export declare const putOrgsMutation: (options?: Partial<Options<PutOrgsData>>) => UseMutationOptions<PutOrgsResponse, PutOrgsError, Options<PutOrgsData>>;
export declare const postOrgsFirstQueryKey: (options?: Options<PostOrgsFirstData>) => [Pick<Options<PostOrgsFirstData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Create first organization
 * Creates the first organization for a new user. Only works when the user has no organizations.
 */
export declare const postOrgsFirstOptions: (options?: Options<PostOrgsFirstData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").OrganizationCreateResponse, Error, import("../types.gen").OrganizationCreateResponse, [Pick<Options<PostOrgsFirstData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").OrganizationCreateResponse, [Pick<Options<PostOrgsFirstData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostOrgsFirstData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").OrganizationCreateResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Create first organization
 * Creates the first organization for a new user. Only works when the user has no organizations.
 */
export declare const postOrgsFirstMutation: (options?: Partial<Options<PostOrgsFirstData>>) => UseMutationOptions<PostOrgsFirstResponse, PostOrgsFirstError, Options<PostOrgsFirstData>>;
export declare const postOrgsCurrentByOrgIdQueryKey: (options: Options<PostOrgsCurrentByOrgIdData>) => [Pick<Options<PostOrgsCurrentByOrgIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Switch current organization
 * Switches the current active organization for the authenticated user.
 */
export declare const postOrgsCurrentByOrgIdOptions: (options: Options<PostOrgsCurrentByOrgIdData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").OrganizationSwitchResponse, Error, import("../types.gen").OrganizationSwitchResponse, [Pick<Options<PostOrgsCurrentByOrgIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").OrganizationSwitchResponse, [Pick<Options<PostOrgsCurrentByOrgIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostOrgsCurrentByOrgIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").OrganizationSwitchResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Switch current organization
 * Switches the current active organization for the authenticated user.
 */
export declare const postOrgsCurrentByOrgIdMutation: (options?: Partial<Options<PostOrgsCurrentByOrgIdData>>) => UseMutationOptions<PostOrgsCurrentByOrgIdResponse, PostOrgsCurrentByOrgIdError, Options<PostOrgsCurrentByOrgIdData>>;
export declare const getInvitesQueryKey: (options?: Options<GetInvitesData>) => [Pick<Options<GetInvitesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List organization invitations
 * Retrieves all invitations for the current organization.
 */
export declare const getInvitesOptions: (options?: Options<GetInvitesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").OrganizationInvitationsResponse, Error, import("../types.gen").OrganizationInvitationsResponse, [Pick<Options<GetInvitesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").OrganizationInvitationsResponse, [Pick<Options<GetInvitesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetInvitesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").OrganizationInvitationsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const postInvitesQueryKey: (options?: Options<PostInvitesData>) => [Pick<Options<PostInvitesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Create invitation
 * Creates a new invitation to join the organization with a specified role.
 */
export declare const postInvitesOptions: (options?: Options<PostInvitesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").InvitationResponse, Error, import("../types.gen").InvitationResponse, [Pick<Options<PostInvitesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").InvitationResponse, [Pick<Options<PostInvitesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostInvitesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").InvitationResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Create invitation
 * Creates a new invitation to join the organization with a specified role.
 */
export declare const postInvitesMutation: (options?: Partial<Options<PostInvitesData>>) => UseMutationOptions<PostInvitesResponse, PostInvitesError, Options<PostInvitesData>>;
export declare const getInvitesMeQueryKey: (options?: Options<GetInvitesMeData>) => [Pick<Options<GetInvitesMeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List my invitations
 * Retrieves all invitations sent by the current user.
 */
export declare const getInvitesMeOptions: (options?: Options<GetInvitesMeData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").UserInvitationsResponse, Error, import("../types.gen").UserInvitationsResponse, [Pick<Options<GetInvitesMeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").UserInvitationsResponse, [Pick<Options<GetInvitesMeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetInvitesMeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").UserInvitationsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Delete invitation
 * Deletes an invitation by its ID.
 */
export declare const deleteInvitesByInvitationIdMutation: (options?: Partial<Options<DeleteInvitesByInvitationIdData>>) => UseMutationOptions<DeleteInvitesByInvitationIdResponse, DeleteInvitesByInvitationIdError, Options<DeleteInvitesByInvitationIdData>>;
export declare const getInvitesByTokenAcceptQueryKey: (options: Options<GetInvitesByTokenAcceptData>) => [Pick<Options<GetInvitesByTokenAcceptData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Accept invitation
 * Accepts an invitation using the provided token. Creates a user account if needed.
 */
export declare const getInvitesByTokenAcceptOptions: (options: Options<GetInvitesByTokenAcceptData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AcceptInvitationResponse, Error, import("../types.gen").AcceptInvitationResponse, [Pick<Options<GetInvitesByTokenAcceptData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AcceptInvitationResponse, [Pick<Options<GetInvitesByTokenAcceptData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetInvitesByTokenAcceptData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AcceptInvitationResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getInvitesByTokenDeclineQueryKey: (options: Options<GetInvitesByTokenDeclineData>) => [Pick<Options<GetInvitesByTokenDeclineData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Decline invitation
 * Declines an invitation using the provided token.
 */
export declare const getInvitesByTokenDeclineOptions: (options: Options<GetInvitesByTokenDeclineData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<{
    message: string;
}, Error, {
    message: string;
}, [Pick<Options<GetInvitesByTokenDeclineData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<{
        message: string;
    }, [Pick<Options<GetInvitesByTokenDeclineData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetInvitesByTokenDeclineData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: {
            message: string;
        };
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getMembersQueryKey: (options?: Options<GetMembersData>) => [Pick<Options<GetMembersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List organization members
 * Retrieves all members of the current organization.
 */
export declare const getMembersOptions: (options?: Options<GetMembersData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").OrganizationMembers, Error, import("../types.gen").OrganizationMembers, [Pick<Options<GetMembersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").OrganizationMembers, [Pick<Options<GetMembersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetMembersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").OrganizationMembers;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const postMembersQueryKey: (options?: Options<PostMembersData>) => [Pick<Options<PostMembersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Add a member to organization
 * Adds a new member to the current organization with the specified role.
 */
export declare const postMembersOptions: (options?: Options<PostMembersData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").UserRoleWithOrganization, Error, import("../types.gen").UserRoleWithOrganization, [Pick<Options<PostMembersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").UserRoleWithOrganization, [Pick<Options<PostMembersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostMembersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").UserRoleWithOrganization;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Add a member to organization
 * Adds a new member to the current organization with the specified role.
 */
export declare const postMembersMutation: (options?: Partial<Options<PostMembersData>>) => UseMutationOptions<PostMembersResponse, PostMembersError, Options<PostMembersData>>;
/**
 * Remove member from organization
 * Removes a member from the current organization.
 */
export declare const deleteMembersByUserIdMutation: (options?: Partial<Options<DeleteMembersByUserIdData>>) => UseMutationOptions<DeleteMembersByUserIdResponse, DeleteMembersByUserIdError, Options<DeleteMembersByUserIdData>>;
export declare const getMembersByUserIdRolesQueryKey: (options: Options<GetMembersByUserIdRolesData>) => [Pick<Options<GetMembersByUserIdRolesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get member roles
 * Retrieves all roles assigned to a member in the current organization.
 */
export declare const getMembersByUserIdRolesOptions: (options: Options<GetMembersByUserIdRolesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GroupedMemberRoles, Error, import("../types.gen").GroupedMemberRoles, [Pick<Options<GetMembersByUserIdRolesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GroupedMemberRoles, [Pick<Options<GetMembersByUserIdRolesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetMembersByUserIdRolesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GroupedMemberRoles;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const postMembersByUserIdRoleQueryKey: (options: Options<PostMembersByUserIdRoleData>) => [Pick<Options<PostMembersByUserIdRoleData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Add role to member
 * Assigns a new role to a member in the current organization.
 */
export declare const postMembersByUserIdRoleOptions: (options: Options<PostMembersByUserIdRoleData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").UserRoleWithOrganization, Error, import("../types.gen").UserRoleWithOrganization, [Pick<Options<PostMembersByUserIdRoleData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").UserRoleWithOrganization, [Pick<Options<PostMembersByUserIdRoleData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostMembersByUserIdRoleData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").UserRoleWithOrganization;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Add role to member
 * Assigns a new role to a member in the current organization.
 */
export declare const postMembersByUserIdRoleMutation: (options?: Partial<Options<PostMembersByUserIdRoleData>>) => UseMutationOptions<PostMembersByUserIdRoleResponse, PostMembersByUserIdRoleError, Options<PostMembersByUserIdRoleData>>;
/**
 * Remove role from member
 * Removes a role from a member in the current organization.
 */
export declare const deleteMembersByUserIdRoleByRoleNameMutation: (options?: Partial<Options<DeleteMembersByUserIdRoleByRoleNameData>>) => UseMutationOptions<DeleteMembersByUserIdRoleByRoleNameResponse, DeleteMembersByUserIdRoleByRoleNameError, Options<DeleteMembersByUserIdRoleByRoleNameData>>;
export declare const getWorkspacesQueryKey: (options?: Options<GetWorkspacesData>) => [Pick<Options<GetWorkspacesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List workspaces
 * Retrieves all workspaces for the current organization.
 */
export declare const getWorkspacesOptions: (options?: Options<GetWorkspacesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").WorkspaceResponse[], Error, import("../types.gen").WorkspaceResponse[], [Pick<Options<GetWorkspacesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").WorkspaceResponse[], [Pick<Options<GetWorkspacesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetWorkspacesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").WorkspaceResponse[];
        [dataTagErrorSymbol]: Error;
    };
};
export declare const postWorkspacesQueryKey: (options?: Options<PostWorkspacesData>) => [Pick<Options<PostWorkspacesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Create a new workspace
 * Creates a new workspace in the current organization.
 */
export declare const postWorkspacesOptions: (options?: Options<PostWorkspacesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").WorkspaceResponse, Error, import("../types.gen").WorkspaceResponse, [Pick<Options<PostWorkspacesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").WorkspaceResponse, [Pick<Options<PostWorkspacesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostWorkspacesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").WorkspaceResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Create a new workspace
 * Creates a new workspace in the current organization.
 */
export declare const postWorkspacesMutation: (options?: Partial<Options<PostWorkspacesData>>) => UseMutationOptions<PostWorkspacesResponse, PostWorkspacesError, Options<PostWorkspacesData>>;
/**
 * Delete workspace
 * Deletes a workspace by its unique identifier.
 */
export declare const deleteWorkspacesByWorkspaceIdMutation: (options?: Partial<Options<DeleteWorkspacesByWorkspaceIdData>>) => UseMutationOptions<DeleteWorkspacesByWorkspaceIdResponse, DeleteWorkspacesByWorkspaceIdError, Options<DeleteWorkspacesByWorkspaceIdData>>;
export declare const getWorkspacesByWorkspaceIdQueryKey: (options: Options<GetWorkspacesByWorkspaceIdData>) => [Pick<Options<GetWorkspacesByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get workspace by ID
 * Retrieves a specific workspace by its unique identifier.
 */
export declare const getWorkspacesByWorkspaceIdOptions: (options: Options<GetWorkspacesByWorkspaceIdData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").WorkspaceResponse, Error, import("../types.gen").WorkspaceResponse, [Pick<Options<GetWorkspacesByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").WorkspaceResponse, [Pick<Options<GetWorkspacesByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetWorkspacesByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").WorkspaceResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Update workspace
 * Updates an existing workspace by its unique identifier.
 */
export declare const putWorkspacesByWorkspaceIdMutation: (options?: Partial<Options<PutWorkspacesByWorkspaceIdData>>) => UseMutationOptions<PutWorkspacesByWorkspaceIdResponse, PutWorkspacesByWorkspaceIdError, Options<PutWorkspacesByWorkspaceIdData>>;
/**
 * Remove role from workspace member
 * Removes a role from a user in a specific workspace.
 */
export declare const deleteWorkspacesByWorkspaceIdMembersByUserIdRoleMutation: (options?: Partial<Options<DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleData>>) => UseMutationOptions<DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleResponse, DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleError, Options<DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleData>>;
export declare const getWorkspacesByWorkspaceIdMembersByUserIdRoleQueryKey: (options: Options<GetWorkspacesByWorkspaceIdMembersByUserIdRoleData>) => [Pick<Options<GetWorkspacesByWorkspaceIdMembersByUserIdRoleData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get user roles in workspace
 * Retrieves the roles assigned to a specific user in a workspace.
 */
export declare const getWorkspacesByWorkspaceIdMembersByUserIdRoleOptions: (options: Options<GetWorkspacesByWorkspaceIdMembersByUserIdRoleData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").WorkspaceMemberRoles, Error, import("../types.gen").WorkspaceMemberRoles, [Pick<Options<GetWorkspacesByWorkspaceIdMembersByUserIdRoleData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").WorkspaceMemberRoles, [Pick<Options<GetWorkspacesByWorkspaceIdMembersByUserIdRoleData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetWorkspacesByWorkspaceIdMembersByUserIdRoleData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").WorkspaceMemberRoles;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const postWorkspacesByWorkspaceIdMembersByUserIdRoleQueryKey: (options: Options<PostWorkspacesByWorkspaceIdMembersByUserIdRoleData>) => [Pick<Options<PostWorkspacesByWorkspaceIdMembersByUserIdRoleData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Add role to workspace member
 * Assigns a role to a user in a specific workspace.
 */
export declare const postWorkspacesByWorkspaceIdMembersByUserIdRoleOptions: (options: Options<PostWorkspacesByWorkspaceIdMembersByUserIdRoleData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").AddWorkspaceMemberRoleResponse, Error, import("../types.gen").AddWorkspaceMemberRoleResponse, [Pick<Options<PostWorkspacesByWorkspaceIdMembersByUserIdRoleData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").AddWorkspaceMemberRoleResponse, [Pick<Options<PostWorkspacesByWorkspaceIdMembersByUserIdRoleData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostWorkspacesByWorkspaceIdMembersByUserIdRoleData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").AddWorkspaceMemberRoleResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Add role to workspace member
 * Assigns a role to a user in a specific workspace.
 */
export declare const postWorkspacesByWorkspaceIdMembersByUserIdRoleMutation: (options?: Partial<Options<PostWorkspacesByWorkspaceIdMembersByUserIdRoleData>>) => UseMutationOptions<PostWorkspacesByWorkspaceIdMembersByUserIdRoleResponse, PostWorkspacesByWorkspaceIdMembersByUserIdRoleError, Options<PostWorkspacesByWorkspaceIdMembersByUserIdRoleData>>;
export declare const getWorkspacesByWorkspaceIdMembersQueryKey: (options: Options<GetWorkspacesByWorkspaceIdMembersData>) => [Pick<Options<GetWorkspacesByWorkspaceIdMembersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List workspace members
 * Retrieves all members in a specific workspace.
 */
export declare const getWorkspacesByWorkspaceIdMembersOptions: (options: Options<GetWorkspacesByWorkspaceIdMembersData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").WorkspaceMembers, Error, import("../types.gen").WorkspaceMembers, [Pick<Options<GetWorkspacesByWorkspaceIdMembersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").WorkspaceMembers, [Pick<Options<GetWorkspacesByWorkspaceIdMembersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetWorkspacesByWorkspaceIdMembersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").WorkspaceMembers;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getRolesQueryKey: (options?: Options<GetRolesData>) => [Pick<Options<GetRolesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List all roles
 * Retrieves all system roles with their associated permission scopes.
 */
export declare const getRolesOptions: (options?: Options<GetRolesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").RolesWithScopesResponse, Error, import("../types.gen").RolesWithScopesResponse, [Pick<Options<GetRolesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").RolesWithScopesResponse, [Pick<Options<GetRolesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetRolesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").RolesWithScopesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getPlansQueryKey: (options?: Options<GetPlansData>) => [Pick<Options<GetPlansData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List available plans
 * Retrieves all available plans. If authenticated, the current plan will be marked.
 */
export declare const getPlansOptions: (options?: Options<GetPlansData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").PlansResponse, Error, import("../types.gen").PlansResponse, [Pick<Options<GetPlansData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").PlansResponse, [Pick<Options<GetPlansData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetPlansData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").PlansResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getPlansCurrentQueryKey: (options?: Options<GetPlansCurrentData>) => [Pick<Options<GetPlansCurrentData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get current plan
 * Retrieves the current plan for the authenticated organization with usage details.
 */
export declare const getPlansCurrentOptions: (options?: Options<GetPlansCurrentData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").PlanWithLimits, Error, import("../types.gen").PlanWithLimits, [Pick<Options<GetPlansCurrentData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").PlanWithLimits, [Pick<Options<GetPlansCurrentData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetPlansCurrentData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").PlanWithLimits;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getSettingsQueryKey: (options?: Options<GetSettingsData>) => [Pick<Options<GetSettingsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get all organization settings
 * Retrieves all settings (custom and service) for the organization.
 */
export declare const getSettingsOptions: (options?: Options<GetSettingsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SettingsWithGroupResponse, Error, import("../types.gen").SettingsWithGroupResponse, [Pick<Options<GetSettingsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SettingsWithGroupResponse, [Pick<Options<GetSettingsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetSettingsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SettingsWithGroupResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getSettingsCustomQueryKey: (options?: Options<GetSettingsCustomData>) => [Pick<Options<GetSettingsCustomData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get all custom settings
 * Retrieves all custom settings for the organization.
 */
export declare const getSettingsCustomOptions: (options?: Options<GetSettingsCustomData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SettingsResponse, Error, import("../types.gen").SettingsResponse, [Pick<Options<GetSettingsCustomData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SettingsResponse, [Pick<Options<GetSettingsCustomData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetSettingsCustomData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SettingsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const postSettingsCustomQueryKey: (options?: Options<PostSettingsCustomData>) => [Pick<Options<PostSettingsCustomData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Create custom setting
 * Creates a new custom setting for the organization.
 */
export declare const postSettingsCustomOptions: (options?: Options<PostSettingsCustomData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SettingResponse, Error, import("../types.gen").SettingResponse, [Pick<Options<PostSettingsCustomData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SettingResponse, [Pick<Options<PostSettingsCustomData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostSettingsCustomData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SettingResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Create custom setting
 * Creates a new custom setting for the organization.
 */
export declare const postSettingsCustomMutation: (options?: Partial<Options<PostSettingsCustomData>>) => UseMutationOptions<PostSettingsCustomResponse, PostSettingsCustomError, Options<PostSettingsCustomData>>;
/**
 * Delete custom setting
 * Deletes a custom setting by its slug.
 */
export declare const deleteSettingsCustomBySettingSlugMutation: (options?: Partial<Options<DeleteSettingsCustomBySettingSlugData>>) => UseMutationOptions<DeleteSettingsCustomBySettingSlugResponse, DeleteSettingsCustomBySettingSlugError, Options<DeleteSettingsCustomBySettingSlugData>>;
export declare const getSettingsCustomBySettingSlugQueryKey: (options: Options<GetSettingsCustomBySettingSlugData>) => [Pick<Options<GetSettingsCustomBySettingSlugData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get custom setting by slug
 * Retrieves a specific custom setting by its slug.
 */
export declare const getSettingsCustomBySettingSlugOptions: (options: Options<GetSettingsCustomBySettingSlugData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SettingResponse, Error, import("../types.gen").SettingResponse, [Pick<Options<GetSettingsCustomBySettingSlugData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SettingResponse, [Pick<Options<GetSettingsCustomBySettingSlugData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetSettingsCustomBySettingSlugData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SettingResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Update custom setting
 * Updates an existing custom setting by its slug.
 */
export declare const putSettingsCustomBySettingSlugMutation: (options?: Partial<Options<PutSettingsCustomBySettingSlugData>>) => UseMutationOptions<PutSettingsCustomBySettingSlugResponse, PutSettingsCustomBySettingSlugError, Options<PutSettingsCustomBySettingSlugData>>;
export declare const getSettingsCustomBySettingSlugValueQueryKey: (options: Options<GetSettingsCustomBySettingSlugValueData>) => [Pick<Options<GetSettingsCustomBySettingSlugValueData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get custom setting value
 * Retrieves only the value of a specific custom setting by its slug.
 */
export declare const getSettingsCustomBySettingSlugValueOptions: (options: Options<GetSettingsCustomBySettingSlugValueData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<string, Error, string, [Pick<Options<GetSettingsCustomBySettingSlugValueData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<string, [Pick<Options<GetSettingsCustomBySettingSlugValueData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetSettingsCustomBySettingSlugValueData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: string;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getSettingsServiceQueryKey: (options?: Options<GetSettingsServiceData>) => [Pick<Options<GetSettingsServiceData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get all service settings
 * Retrieves all service settings for the organization.
 */
export declare const getSettingsServiceOptions: (options?: Options<GetSettingsServiceData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SettingsResponse, Error, import("../types.gen").SettingsResponse, [Pick<Options<GetSettingsServiceData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SettingsResponse, [Pick<Options<GetSettingsServiceData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetSettingsServiceData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SettingsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getSettingsServiceBySettingSlugQueryKey: (options: Options<GetSettingsServiceBySettingSlugData>) => [Pick<Options<GetSettingsServiceBySettingSlugData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get service setting by slug
 * Retrieves a specific service setting by its slug.
 */
export declare const getSettingsServiceBySettingSlugOptions: (options: Options<GetSettingsServiceBySettingSlugData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SettingResponse, Error, import("../types.gen").SettingResponse, [Pick<Options<GetSettingsServiceBySettingSlugData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SettingResponse, [Pick<Options<GetSettingsServiceBySettingSlugData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetSettingsServiceBySettingSlugData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SettingResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Upsert service setting
 * Updates an existing service setting or creates it if it does not exist.
 */
export declare const putSettingsServiceBySettingSlugMutation: (options?: Partial<Options<PutSettingsServiceBySettingSlugData>>) => UseMutationOptions<PutSettingsServiceBySettingSlugResponse, PutSettingsServiceBySettingSlugError, Options<PutSettingsServiceBySettingSlugData>>;
export declare const getSettingsServiceBySettingSlugValueQueryKey: (options: Options<GetSettingsServiceBySettingSlugValueData>) => [Pick<Options<GetSettingsServiceBySettingSlugValueData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get service setting value
 * Retrieves only the value of a specific service setting by its slug.
 */
export declare const getSettingsServiceBySettingSlugValueOptions: (options: Options<GetSettingsServiceBySettingSlugValueData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<{
    [key: string]: unknown;
}, Error, {
    [key: string]: unknown;
}, [Pick<Options<GetSettingsServiceBySettingSlugValueData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<{
        [key: string]: unknown;
    }, [Pick<Options<GetSettingsServiceBySettingSlugValueData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetSettingsServiceBySettingSlugValueData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: {
            [key: string]: unknown;
        };
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getWorkspacesByWorkspaceIdSettingsQueryKey: (options: Options<GetWorkspacesByWorkspaceIdSettingsData>) => [Pick<Options<GetWorkspacesByWorkspaceIdSettingsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get all workspace settings
 * Retrieves all settings (custom and service) for the workspace.
 */
export declare const getWorkspacesByWorkspaceIdSettingsOptions: (options: Options<GetWorkspacesByWorkspaceIdSettingsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SettingsWithGroupResponse, Error, import("../types.gen").SettingsWithGroupResponse, [Pick<Options<GetWorkspacesByWorkspaceIdSettingsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SettingsWithGroupResponse, [Pick<Options<GetWorkspacesByWorkspaceIdSettingsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetWorkspacesByWorkspaceIdSettingsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SettingsWithGroupResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getWorkspacesByWorkspaceIdSettingsCustomQueryKey: (options: Options<GetWorkspacesByWorkspaceIdSettingsCustomData>) => [Pick<Options<GetWorkspacesByWorkspaceIdSettingsCustomData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get all workspace custom settings
 * Retrieves all custom settings for the workspace.
 */
export declare const getWorkspacesByWorkspaceIdSettingsCustomOptions: (options: Options<GetWorkspacesByWorkspaceIdSettingsCustomData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SettingsResponse, Error, import("../types.gen").SettingsResponse, [Pick<Options<GetWorkspacesByWorkspaceIdSettingsCustomData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SettingsResponse, [Pick<Options<GetWorkspacesByWorkspaceIdSettingsCustomData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetWorkspacesByWorkspaceIdSettingsCustomData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SettingsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const postWorkspacesByWorkspaceIdSettingsCustomQueryKey: (options: Options<PostWorkspacesByWorkspaceIdSettingsCustomData>) => [Pick<Options<PostWorkspacesByWorkspaceIdSettingsCustomData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Create workspace custom setting
 * Creates a new custom setting for the workspace.
 */
export declare const postWorkspacesByWorkspaceIdSettingsCustomOptions: (options: Options<PostWorkspacesByWorkspaceIdSettingsCustomData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SettingResponse, Error, import("../types.gen").SettingResponse, [Pick<Options<PostWorkspacesByWorkspaceIdSettingsCustomData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SettingResponse, [Pick<Options<PostWorkspacesByWorkspaceIdSettingsCustomData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostWorkspacesByWorkspaceIdSettingsCustomData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SettingResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Create workspace custom setting
 * Creates a new custom setting for the workspace.
 */
export declare const postWorkspacesByWorkspaceIdSettingsCustomMutation: (options?: Partial<Options<PostWorkspacesByWorkspaceIdSettingsCustomData>>) => UseMutationOptions<PostWorkspacesByWorkspaceIdSettingsCustomResponse, PostWorkspacesByWorkspaceIdSettingsCustomError, Options<PostWorkspacesByWorkspaceIdSettingsCustomData>>;
/**
 * Delete workspace custom setting
 * Deletes a workspace custom setting by its slug.
 */
export declare const deleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugMutation: (options?: Partial<Options<DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData>>) => UseMutationOptions<DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponse, DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugError, Options<DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData>>;
export declare const getWorkspacesByWorkspaceIdSettingsCustomBySettingSlugQueryKey: (options: Options<GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData>) => [Pick<Options<GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get workspace custom setting by slug
 * Retrieves a specific workspace custom setting by its slug.
 */
export declare const getWorkspacesByWorkspaceIdSettingsCustomBySettingSlugOptions: (options: Options<GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SettingResponse, Error, import("../types.gen").SettingResponse, [Pick<Options<GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SettingResponse, [Pick<Options<GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SettingResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Update workspace custom setting
 * Updates an existing workspace custom setting by its slug.
 */
export declare const putWorkspacesByWorkspaceIdSettingsCustomBySettingSlugMutation: (options?: Partial<Options<PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData>>) => UseMutationOptions<PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponse, PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugError, Options<PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData>>;
export declare const getWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueQueryKey: (options: Options<GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueData>) => [Pick<Options<GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get workspace custom setting value
 * Retrieves only the value of a specific workspace custom setting by its slug.
 */
export declare const getWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueOptions: (options: Options<GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<{
    [key: string]: unknown;
}, Error, {
    [key: string]: unknown;
}, [Pick<Options<GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<{
        [key: string]: unknown;
    }, [Pick<Options<GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: {
            [key: string]: unknown;
        };
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getWorkspacesByWorkspaceIdSettingsServiceQueryKey: (options: Options<GetWorkspacesByWorkspaceIdSettingsServiceData>) => [Pick<Options<GetWorkspacesByWorkspaceIdSettingsServiceData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get all workspace service settings
 * Retrieves all service settings for the workspace.
 */
export declare const getWorkspacesByWorkspaceIdSettingsServiceOptions: (options: Options<GetWorkspacesByWorkspaceIdSettingsServiceData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SettingsResponse, Error, import("../types.gen").SettingsResponse, [Pick<Options<GetWorkspacesByWorkspaceIdSettingsServiceData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SettingsResponse, [Pick<Options<GetWorkspacesByWorkspaceIdSettingsServiceData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetWorkspacesByWorkspaceIdSettingsServiceData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SettingsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Delete workspace service setting override
 * Deletes a workspace-level override for a service setting, reverting to organization defaults.
 */
export declare const deleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugMutation: (options?: Partial<Options<DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData>>) => UseMutationOptions<DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponse, DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugError, Options<DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData>>;
export declare const getWorkspacesByWorkspaceIdSettingsServiceBySettingSlugQueryKey: (options: Options<GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData>) => [Pick<Options<GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get workspace service setting by slug
 * Retrieves a specific workspace service setting by its slug.
 */
export declare const getWorkspacesByWorkspaceIdSettingsServiceBySettingSlugOptions: (options: Options<GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").SettingResponse, Error, import("../types.gen").SettingResponse, [Pick<Options<GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").SettingResponse, [Pick<Options<GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").SettingResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Upsert workspace service setting
 * Updates an existing workspace service setting or creates it if it does not exist.
 */
export declare const putWorkspacesByWorkspaceIdSettingsServiceBySettingSlugMutation: (options?: Partial<Options<PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData>>) => UseMutationOptions<PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponse, PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugError, Options<PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData>>;
export declare const getWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueQueryKey: (options: Options<GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueData>) => [Pick<Options<GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get workspace service setting value
 * Retrieves only the value of a specific workspace service setting by its slug.
 */
export declare const getWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueOptions: (options: Options<GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<{
    [key: string]: unknown;
}, Error, {
    [key: string]: unknown;
}, [Pick<Options<GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<{
        [key: string]: unknown;
    }, [Pick<Options<GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: {
            [key: string]: unknown;
        };
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getCodesByCodeIdScansQueryKey: (options: Options<GetCodesByCodeIdScansData>) => [Pick<Options<GetCodesByCodeIdScansData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List QR Code Scans
 * Retrieves a paginated list of scans for a specific QR Code with optional filtering
 */
export declare const getCodesByCodeIdScansOptions: (options: Options<GetCodesByCodeIdScansData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<unknown, Error, unknown, [Pick<Options<GetCodesByCodeIdScansData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<unknown, [Pick<Options<GetCodesByCodeIdScansData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetCodesByCodeIdScansData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: unknown;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getCodesByCodeIdScansInfiniteQueryKey: (options: Options<GetCodesByCodeIdScansData>) => QueryKey<Options<GetCodesByCodeIdScansData>>;
/**
 * List QR Code Scans
 * Retrieves a paginated list of scans for a specific QR Code with optional filtering
 */
export declare const getCodesByCodeIdScansInfiniteOptions: (options: Options<GetCodesByCodeIdScansData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<unknown, GetCodesByCodeIdScansError, InfiniteData<unknown, unknown>, QueryKey<Options<GetCodesByCodeIdScansData>>, number | Pick<Pick<Options<GetCodesByCodeIdScansData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}, "query" | "body" | "headers" | "path">> & {
    initialData: InfiniteData<unknown, number | Pick<Pick<Options<GetCodesByCodeIdScansData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }, "query" | "body" | "headers" | "path">> | (() => InfiniteData<unknown, number | Pick<Pick<Options<GetCodesByCodeIdScansData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }, "query" | "body" | "headers" | "path">>) | undefined;
} & {
    queryKey: QueryKey<Options<GetCodesByCodeIdScansData>> & {
        [dataTagSymbol]: InfiniteData<unknown, unknown>;
        [dataTagErrorSymbol]: GetCodesByCodeIdScansError;
    };
};
export declare const getCodesByCodeIdRouterRulesQueryKey: (options: Options<GetCodesByCodeIdRouterRulesData>) => [Pick<Options<GetCodesByCodeIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List Router Rule Assignments
 * Retrieves all router rule assignments for a specific QR code with pagination and filtering options. Returns rules sorted by priority (highest first) with enriched template data.
 */
export declare const getCodesByCodeIdRouterRulesOptions: (options: Options<GetCodesByCodeIdRouterRulesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeRouterRuleResponse>;
}, Error, {
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeRouterRuleResponse>;
}, [Pick<Options<GetCodesByCodeIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").CodeRouterRuleResponse>;
    }, [Pick<Options<GetCodesByCodeIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetCodesByCodeIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: {
            pagination: {
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            data: Array<import("../types.gen").CodeRouterRuleResponse>;
        };
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getCodesByCodeIdRouterRulesInfiniteQueryKey: (options: Options<GetCodesByCodeIdRouterRulesData>) => QueryKey<Options<GetCodesByCodeIdRouterRulesData>>;
/**
 * List Router Rule Assignments
 * Retrieves all router rule assignments for a specific QR code with pagination and filtering options. Returns rules sorted by priority (highest first) with enriched template data.
 */
export declare const getCodesByCodeIdRouterRulesInfiniteOptions: (options: Options<GetCodesByCodeIdRouterRulesData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeRouterRuleResponse>;
}, GetCodesByCodeIdRouterRulesError, InfiniteData<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeRouterRuleResponse>;
}, unknown>, QueryKey<Options<GetCodesByCodeIdRouterRulesData>>, number | Pick<Pick<Options<GetCodesByCodeIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}, "query" | "body" | "headers" | "path">> & {
    initialData: InfiniteData<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").CodeRouterRuleResponse>;
    }, number | Pick<Pick<Options<GetCodesByCodeIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }, "query" | "body" | "headers" | "path">> | (() => InfiniteData<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").CodeRouterRuleResponse>;
    }, number | Pick<Pick<Options<GetCodesByCodeIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }, "query" | "body" | "headers" | "path">>) | undefined;
} & {
    queryKey: QueryKey<Options<GetCodesByCodeIdRouterRulesData>> & {
        [dataTagSymbol]: InfiniteData<{
            pagination: {
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            data: Array<import("../types.gen").CodeRouterRuleResponse>;
        }, unknown>;
        [dataTagErrorSymbol]: GetCodesByCodeIdRouterRulesError;
    };
};
export declare const postCodesByCodeIdRouterRulesQueryKey: (options: Options<PostCodesByCodeIdRouterRulesData>) => [Pick<Options<PostCodesByCodeIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Create Router Rule Assignment
 * Assigns a router rule to a QR code. You can reference an existing template by ID/name or create an inline custom rule. Rules with the same priority are evaluated in creation order. Scan limits and loop functionality are supported.
 */
export declare const postCodesByCodeIdRouterRulesOptions: (options: Options<PostCodesByCodeIdRouterRulesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CodeRouterRuleResponse, Error, import("../types.gen").CodeRouterRuleResponse, [Pick<Options<PostCodesByCodeIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CodeRouterRuleResponse, [Pick<Options<PostCodesByCodeIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostCodesByCodeIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CodeRouterRuleResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Create Router Rule Assignment
 * Assigns a router rule to a QR code. You can reference an existing template by ID/name or create an inline custom rule. Rules with the same priority are evaluated in creation order. Scan limits and loop functionality are supported.
 */
export declare const postCodesByCodeIdRouterRulesMutation: (options?: Partial<Options<PostCodesByCodeIdRouterRulesData>>) => UseMutationOptions<PostCodesByCodeIdRouterRulesResponse, PostCodesByCodeIdRouterRulesError, Options<PostCodesByCodeIdRouterRulesData>>;
/**
 * Delete Router Rule Assignment
 * Deletes a router rule assignment. Rules that have been used (totalScans > 0) cannot be deleted to preserve analytics data. Consider disabling the rule instead.
 */
export declare const deleteCodesByCodeIdRouterRulesByRouterRuleIdMutation: (options?: Partial<Options<DeleteCodesByCodeIdRouterRulesByRouterRuleIdData>>) => UseMutationOptions<DeleteCodesByCodeIdRouterRulesByRouterRuleIdResponse, DeleteCodesByCodeIdRouterRulesByRouterRuleIdError, Options<DeleteCodesByCodeIdRouterRulesByRouterRuleIdData>>;
export declare const getCodesByCodeIdRouterRulesByRouterRuleIdQueryKey: (options: Options<GetCodesByCodeIdRouterRulesByRouterRuleIdData>) => [Pick<Options<GetCodesByCodeIdRouterRulesByRouterRuleIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get Router Rule Assignment
 * Retrieves a specific router rule assignment for a QR code. Returns the rule with enriched template data, usage statistics, and audit information.
 */
export declare const getCodesByCodeIdRouterRulesByRouterRuleIdOptions: (options: Options<GetCodesByCodeIdRouterRulesByRouterRuleIdData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CodeRouterRuleResponse, Error, import("../types.gen").CodeRouterRuleResponse, [Pick<Options<GetCodesByCodeIdRouterRulesByRouterRuleIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CodeRouterRuleResponse, [Pick<Options<GetCodesByCodeIdRouterRulesByRouterRuleIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetCodesByCodeIdRouterRulesByRouterRuleIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CodeRouterRuleResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Update Router Rule Assignment
 * Updates a router rule assignment. You can change the rule source (template vs inline), priority, data configuration, and other settings. Validation is context-aware and will validate dynamicData against the existing or provided dataType. Priority conflicts are checked.
 */
export declare const putCodesByCodeIdRouterRulesByRouterRuleIdMutation: (options?: Partial<Options<PutCodesByCodeIdRouterRulesByRouterRuleIdData>>) => UseMutationOptions<PutCodesByCodeIdRouterRulesByRouterRuleIdResponse, PutCodesByCodeIdRouterRulesByRouterRuleIdError, Options<PutCodesByCodeIdRouterRulesByRouterRuleIdData>>;
export declare const getCodesDeletedQueryKey: (options?: Options<GetCodesDeletedData>) => [Pick<Options<GetCodesDeletedData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List Soft Deleted QR Codes
 * Retrieves a paginated list of soft deleted QR Codes with optional filtering
 */
export declare const getCodesDeletedOptions: (options?: Options<GetCodesDeletedData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeResponse>;
}, Error, {
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeResponse>;
}, [Pick<Options<GetCodesDeletedData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").CodeResponse>;
    }, [Pick<Options<GetCodesDeletedData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetCodesDeletedData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: {
            pagination: {
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            data: Array<import("../types.gen").CodeResponse>;
        };
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getCodesDeletedInfiniteQueryKey: (options?: Options<GetCodesDeletedData>) => QueryKey<Options<GetCodesDeletedData>>;
/**
 * List Soft Deleted QR Codes
 * Retrieves a paginated list of soft deleted QR Codes with optional filtering
 */
export declare const getCodesDeletedInfiniteOptions: (options?: Options<GetCodesDeletedData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeResponse>;
}, GetCodesDeletedError, InfiniteData<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeResponse>;
}, unknown>, QueryKey<Options<GetCodesDeletedData>>, number | Pick<Pick<Options<GetCodesDeletedData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}, "query" | "body" | "headers" | "path">> & {
    initialData: InfiniteData<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").CodeResponse>;
    }, number | Pick<Pick<Options<GetCodesDeletedData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }, "query" | "body" | "headers" | "path">> | (() => InfiniteData<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").CodeResponse>;
    }, number | Pick<Pick<Options<GetCodesDeletedData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }, "query" | "body" | "headers" | "path">>) | undefined;
} & {
    queryKey: QueryKey<Options<GetCodesDeletedData>> & {
        [dataTagSymbol]: InfiniteData<{
            pagination: {
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            data: Array<import("../types.gen").CodeResponse>;
        }, unknown>;
        [dataTagErrorSymbol]: GetCodesDeletedError;
    };
};
export declare const getCodesLinksQueryKey: (options?: Options<GetCodesLinksData>) => [Pick<Options<GetCodesLinksData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List QR Code Links
 * Retrieves a paginated list of all QR Code links with optional filtering
 */
export declare const getCodesLinksOptions: (options?: Options<GetCodesLinksData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeLinksResponse>;
}, Error, {
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeLinksResponse>;
}, [Pick<Options<GetCodesLinksData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").CodeLinksResponse>;
    }, [Pick<Options<GetCodesLinksData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetCodesLinksData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: {
            pagination: {
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            data: Array<import("../types.gen").CodeLinksResponse>;
        };
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getCodesLinksInfiniteQueryKey: (options?: Options<GetCodesLinksData>) => QueryKey<Options<GetCodesLinksData>>;
/**
 * List QR Code Links
 * Retrieves a paginated list of all QR Code links with optional filtering
 */
export declare const getCodesLinksInfiniteOptions: (options?: Options<GetCodesLinksData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeLinksResponse>;
}, GetCodesLinksError, InfiniteData<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeLinksResponse>;
}, unknown>, QueryKey<Options<GetCodesLinksData>>, number | Pick<Pick<Options<GetCodesLinksData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}, "query" | "body" | "headers" | "path">> & {
    initialData: InfiniteData<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").CodeLinksResponse>;
    }, number | Pick<Pick<Options<GetCodesLinksData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }, "query" | "body" | "headers" | "path">> | (() => InfiniteData<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").CodeLinksResponse>;
    }, number | Pick<Pick<Options<GetCodesLinksData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }, "query" | "body" | "headers" | "path">>) | undefined;
} & {
    queryKey: QueryKey<Options<GetCodesLinksData>> & {
        [dataTagSymbol]: InfiniteData<{
            pagination: {
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            data: Array<import("../types.gen").CodeLinksResponse>;
        }, unknown>;
        [dataTagErrorSymbol]: GetCodesLinksError;
    };
};
/**
 * Soft Delete QR Code
 * Marks a QR Code as deleted without permanently removing it from the system. Usage limits are not affected and the code can potentially be restored.
 */
export declare const deleteCodesByCodeIdMutation: (options?: Partial<Options<DeleteCodesByCodeIdData>>) => UseMutationOptions<DeleteCodesByCodeIdResponse, DeleteCodesByCodeIdError, Options<DeleteCodesByCodeIdData>>;
export declare const getCodesByCodeIdQueryKey: (options: Options<GetCodesByCodeIdData>) => [Pick<Options<GetCodesByCodeIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get QR Code
 * Retrieves a QR Code by its unique identifier
 */
export declare const getCodesByCodeIdOptions: (options: Options<GetCodesByCodeIdData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").BaseCodeResponseWithAuditAndLinks, Error, import("../types.gen").BaseCodeResponseWithAuditAndLinks, [Pick<Options<GetCodesByCodeIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").BaseCodeResponseWithAuditAndLinks, [Pick<Options<GetCodesByCodeIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetCodesByCodeIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").BaseCodeResponseWithAuditAndLinks;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Update QR Code
 * Updates an existing QR Code with new data and options. Supports changing dataType for dynamic codes (e.g., from URL to WiFi configuration). When changing dataType, ensure metadata structure matches the new dataType requirements. This operation creates a new version of the QR code.
 */
export declare const putCodesByCodeIdMutation: (options?: Partial<Options<PutCodesByCodeIdData>>) => UseMutationOptions<PutCodesByCodeIdResponse, PutCodesByCodeIdError, Options<PutCodesByCodeIdData>>;
/**
 * Bulk Soft Delete QR Codes
 * Soft deletes multiple QR codes by their IDs. The codes are marked as deleted but not permanently removed from the system.
 */
export declare const deleteCodesMutation: (options?: Partial<Options<DeleteCodesData>>) => UseMutationOptions<DeleteCodesResponse, DeleteCodesError, Options<DeleteCodesData>>;
export declare const getCodesQueryKey: (options?: Options<GetCodesData>) => [Pick<Options<GetCodesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List QR Codes
 * Retrieves a paginated list of QR Codes with optional filtering
 */
export declare const getCodesOptions: (options?: Options<GetCodesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeResponse>;
}, Error, {
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeResponse>;
}, [Pick<Options<GetCodesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").CodeResponse>;
    }, [Pick<Options<GetCodesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetCodesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: {
            pagination: {
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            data: Array<import("../types.gen").CodeResponse>;
        };
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getCodesInfiniteQueryKey: (options?: Options<GetCodesData>) => QueryKey<Options<GetCodesData>>;
/**
 * List QR Codes
 * Retrieves a paginated list of QR Codes with optional filtering
 */
export declare const getCodesInfiniteOptions: (options?: Options<GetCodesData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeResponse>;
}, GetCodesError, InfiniteData<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeResponse>;
}, unknown>, QueryKey<Options<GetCodesData>>, number | Pick<Pick<Options<GetCodesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}, "query" | "body" | "headers" | "path">> & {
    initialData: InfiniteData<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").CodeResponse>;
    }, number | Pick<Pick<Options<GetCodesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }, "query" | "body" | "headers" | "path">> | (() => InfiniteData<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").CodeResponse>;
    }, number | Pick<Pick<Options<GetCodesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }, "query" | "body" | "headers" | "path">>) | undefined;
} & {
    queryKey: QueryKey<Options<GetCodesData>> & {
        [dataTagSymbol]: InfiniteData<{
            pagination: {
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            data: Array<import("../types.gen").CodeResponse>;
        }, unknown>;
        [dataTagErrorSymbol]: GetCodesError;
    };
};
export declare const postCodesQueryKey: (options?: Options<PostCodesData>) => [Pick<Options<PostCodesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Create QR Code
 * Creates a new QR Code with the specified data and options. Supports different dataTypes for dynamic codes including WiFi configuration, contact cards (vCard), plain text, email composition, calendar events, file downloads, and custom JSON data. Each dataType has specific metadata requirements that determine how the QR code is processed when scanned.
 */
export declare const postCodesOptions: (options?: Options<PostCodesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").BaseCodeResponseWithAuditAndLinks, Error, import("../types.gen").BaseCodeResponseWithAuditAndLinks, [Pick<Options<PostCodesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").BaseCodeResponseWithAuditAndLinks, [Pick<Options<PostCodesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostCodesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").BaseCodeResponseWithAuditAndLinks;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Create QR Code
 * Creates a new QR Code with the specified data and options. Supports different dataTypes for dynamic codes including WiFi configuration, contact cards (vCard), plain text, email composition, calendar events, file downloads, and custom JSON data. Each dataType has specific metadata requirements that determine how the QR code is processed when scanned.
 */
export declare const postCodesMutation: (options?: Partial<Options<PostCodesData>>) => UseMutationOptions<PostCodesResponse, PostCodesError, Options<PostCodesData>>;
/**
 * Partially update QR Code Options
 * Partially updates an existing QR Code's options using a deep merge. This will create a new version of the QR Code. Supports updating dataType for dynamic codes, which changes how the QR code content is processed when scanned (e.g., returning WiFi configuration instead of URL redirect).
 */
export declare const putCodesByCodeIdOptionsMutation: (options?: Partial<Options<PutCodesByCodeIdOptionsData>>) => UseMutationOptions<PutCodesByCodeIdOptionsResponse, PutCodesByCodeIdOptionsError, Options<PutCodesByCodeIdOptionsData>>;
/**
 * Bulk Permanent Delete QR Codes
 * Permanently deletes multiple QR codes by their IDs. This operation is irreversible and will remove all associated data including versions, files, and scans.
 */
export declare const deleteCodesPermanentMutation: (options?: Partial<Options<DeleteCodesPermanentData>>) => UseMutationOptions<DeleteCodesPermanentResponse, DeleteCodesPermanentError, Options<DeleteCodesPermanentData>>;
/**
 * Delete QR Code
 * Deletes a QR Code by its unique identifier
 */
export declare const deleteCodesByCodeIdPermanentMutation: (options?: Partial<Options<DeleteCodesByCodeIdPermanentData>>) => UseMutationOptions<DeleteCodesByCodeIdPermanentResponse, DeleteCodesByCodeIdPermanentError, Options<DeleteCodesByCodeIdPermanentData>>;
export declare const postCodesByCodeIdRestoreQueryKey: (options: Options<PostCodesByCodeIdRestoreData>) => [Pick<Options<PostCodesByCodeIdRestoreData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Restore QR Code
 * Restores a soft-deleted QR Code by setting its deleted status to false. The code becomes active again and accessible through regular endpoints.
 */
export declare const postCodesByCodeIdRestoreOptions: (options: Options<PostCodesByCodeIdRestoreData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").BaseCodeResponseWithAuditAndLinks, Error, import("../types.gen").BaseCodeResponseWithAuditAndLinks, [Pick<Options<PostCodesByCodeIdRestoreData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").BaseCodeResponseWithAuditAndLinks, [Pick<Options<PostCodesByCodeIdRestoreData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostCodesByCodeIdRestoreData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").BaseCodeResponseWithAuditAndLinks;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Restore QR Code
 * Restores a soft-deleted QR Code by setting its deleted status to false. The code becomes active again and accessible through regular endpoints.
 */
export declare const postCodesByCodeIdRestoreMutation: (options?: Partial<Options<PostCodesByCodeIdRestoreData>>) => UseMutationOptions<PostCodesByCodeIdRestoreResponse, PostCodesByCodeIdRestoreError, Options<PostCodesByCodeIdRestoreData>>;
export declare const postCodesBulkGetQueryKey: (options?: Options<PostCodesBulkGetData>) => [Pick<Options<PostCodesBulkGetData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Bulk Get QR Codes by ID List
 * Retrieves multiple QR codes by their IDs in a single request with access control and detailed error reporting.
 */
export declare const postCodesBulkGetOptions: (options?: Options<PostCodesBulkGetData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").BulkGetCodesResponse, Error, import("../types.gen").BulkGetCodesResponse, [Pick<Options<PostCodesBulkGetData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").BulkGetCodesResponse, [Pick<Options<PostCodesBulkGetData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostCodesBulkGetData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").BulkGetCodesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Bulk Get QR Codes by ID List
 * Retrieves multiple QR codes by their IDs in a single request with access control and detailed error reporting.
 */
export declare const postCodesBulkGetMutation: (options?: Partial<Options<PostCodesBulkGetData>>) => UseMutationOptions<PostCodesBulkGetResponse, PostCodesBulkGetError, Options<PostCodesBulkGetData>>;
export declare const postCodesGenerateByTypeQueryKey: (options: Options<PostCodesGenerateByTypeData>) => [Pick<Options<PostCodesGenerateByTypeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Generate QR Code File Content
 * Generates a file content for a QR Code
 */
export declare const postCodesGenerateByTypeOptions: (options: Options<PostCodesGenerateByTypeData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<Blob | File, Error, Blob | File, [Pick<Options<PostCodesGenerateByTypeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<Blob | File, [Pick<Options<PostCodesGenerateByTypeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostCodesGenerateByTypeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: Blob | File;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Generate QR Code File Content
 * Generates a file content for a QR Code
 */
export declare const postCodesGenerateByTypeMutation: (options?: Partial<Options<PostCodesGenerateByTypeData>>) => UseMutationOptions<PostCodesGenerateByTypeResponse, PostCodesGenerateByTypeError, Options<PostCodesGenerateByTypeData>>;
export declare const postCodesValidateQueryKey: (options?: Options<PostCodesValidateData>) => [Pick<Options<PostCodesValidateData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Validate QR Code Options
 * Validates QR Code styling options without generating or saving the QR Code
 */
export declare const postCodesValidateOptions: (options?: Options<PostCodesValidateData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").CodeValidationResponse, Error, import("../types.gen").CodeValidationResponse, [Pick<Options<PostCodesValidateData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").CodeValidationResponse, [Pick<Options<PostCodesValidateData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostCodesValidateData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").CodeValidationResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Validate QR Code Options
 * Validates QR Code styling options without generating or saving the QR Code
 */
export declare const postCodesValidateMutation: (options?: Partial<Options<PostCodesValidateData>>) => UseMutationOptions<PostCodesValidateResponse, PostCodesValidateError, Options<PostCodesValidateData>>;
export declare const postCodesByCodeIdValidateQueryKey: (options: Options<PostCodesByCodeIdValidateData>) => [Pick<Options<PostCodesByCodeIdValidateData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Validate Existing QR Code
 * Validates an existing QR Code and updates its validation status in the database
 */
export declare const postCodesByCodeIdValidateOptions: (options: Options<PostCodesByCodeIdValidateData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").ExistingCodeValidationResponse, Error, import("../types.gen").ExistingCodeValidationResponse, [Pick<Options<PostCodesByCodeIdValidateData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").ExistingCodeValidationResponse, [Pick<Options<PostCodesByCodeIdValidateData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostCodesByCodeIdValidateData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").ExistingCodeValidationResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Validate Existing QR Code
 * Validates an existing QR Code and updates its validation status in the database
 */
export declare const postCodesByCodeIdValidateMutation: (options?: Partial<Options<PostCodesByCodeIdValidateData>>) => UseMutationOptions<PostCodesByCodeIdValidateResponse, PostCodesByCodeIdValidateError, Options<PostCodesByCodeIdValidateData>>;
export declare const postCodesLinksRefreshQueryKey: (options?: Options<PostCodesLinksRefreshData>) => [Pick<Options<PostCodesLinksRefreshData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Bulk Refresh QR Code Links
 * Refreshes QR code links/files for all code versions matching the specified design element filters
 */
export declare const postCodesLinksRefreshOptions: (options?: Options<PostCodesLinksRefreshData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").RefreshCodeLinksResponse, Error, import("../types.gen").RefreshCodeLinksResponse, [Pick<Options<PostCodesLinksRefreshData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").RefreshCodeLinksResponse, [Pick<Options<PostCodesLinksRefreshData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostCodesLinksRefreshData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").RefreshCodeLinksResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Bulk Refresh QR Code Links
 * Refreshes QR code links/files for all code versions matching the specified design element filters
 */
export declare const postCodesLinksRefreshMutation: (options?: Partial<Options<PostCodesLinksRefreshData>>) => UseMutationOptions<PostCodesLinksRefreshResponse, PostCodesLinksRefreshError, Options<PostCodesLinksRefreshData>>;
export declare const getCodesByCodeIdVersionByVersionQueryKey: (options: Options<GetCodesByCodeIdVersionByVersionData>) => [Pick<Options<GetCodesByCodeIdVersionByVersionData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get QR Code version
 * Retrieves a specific version of a QR Code by ID and version number
 */
export declare const getCodesByCodeIdVersionByVersionOptions: (options: Options<GetCodesByCodeIdVersionByVersionData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").BaseCodeResponseWithAuditAndLinks, Error, import("../types.gen").BaseCodeResponseWithAuditAndLinks, [Pick<Options<GetCodesByCodeIdVersionByVersionData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").BaseCodeResponseWithAuditAndLinks, [Pick<Options<GetCodesByCodeIdVersionByVersionData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetCodesByCodeIdVersionByVersionData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").BaseCodeResponseWithAuditAndLinks;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Delete All QR Code Versions
 * Deletes all versions of a QR Code except the current one
 */
export declare const deleteCodesByCodeIdVersionsMutation: (options?: Partial<Options<DeleteCodesByCodeIdVersionsData>>) => UseMutationOptions<DeleteCodesByCodeIdVersionsResponse, DeleteCodesByCodeIdVersionsError, Options<DeleteCodesByCodeIdVersionsData>>;
export declare const getCodesByCodeIdVersionsQueryKey: (options: Options<GetCodesByCodeIdVersionsData>) => [Pick<Options<GetCodesByCodeIdVersionsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List QR Code versions
 * Retrieves all versions of a QR Code by its unique identifier
 */
export declare const getCodesByCodeIdVersionsOptions: (options: Options<GetCodesByCodeIdVersionsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeVersionResponse>;
}, Error, {
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").CodeVersionResponse>;
}, [Pick<Options<GetCodesByCodeIdVersionsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").CodeVersionResponse>;
    }, [Pick<Options<GetCodesByCodeIdVersionsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetCodesByCodeIdVersionsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: {
            pagination: {
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            data: Array<import("../types.gen").CodeVersionResponse>;
        };
        [dataTagErrorSymbol]: Error;
    };
};
export declare const postCodesByCodeIdVersionByVersionRestoreQueryKey: (options: Options<PostCodesByCodeIdVersionByVersionRestoreData>) => [Pick<Options<PostCodesByCodeIdVersionByVersionRestoreData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Restore QR Code Version
 * Restores a specific version of a QR Code as the current version
 */
export declare const postCodesByCodeIdVersionByVersionRestoreOptions: (options: Options<PostCodesByCodeIdVersionByVersionRestoreData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").BaseCodeResponseWithAuditAndLinks, Error, import("../types.gen").BaseCodeResponseWithAuditAndLinks, [Pick<Options<PostCodesByCodeIdVersionByVersionRestoreData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").BaseCodeResponseWithAuditAndLinks, [Pick<Options<PostCodesByCodeIdVersionByVersionRestoreData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostCodesByCodeIdVersionByVersionRestoreData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").BaseCodeResponseWithAuditAndLinks;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Restore QR Code Version
 * Restores a specific version of a QR Code as the current version
 */
export declare const postCodesByCodeIdVersionByVersionRestoreMutation: (options?: Partial<Options<PostCodesByCodeIdVersionByVersionRestoreData>>) => UseMutationOptions<PostCodesByCodeIdVersionByVersionRestoreResponse, PostCodesByCodeIdVersionByVersionRestoreError, Options<PostCodesByCodeIdVersionByVersionRestoreData>>;
export declare const getCodesByCodeIdVersionByVersionByTypeQueryKey: (options: Options<GetCodesByCodeIdVersionByVersionByTypeData>) => [Pick<Options<GetCodesByCodeIdVersionByVersionByTypeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get QR Code Version File Content
 * Retrieves the file content of a specific QR Code version
 */
export declare const getCodesByCodeIdVersionByVersionByTypeOptions: (options: Options<GetCodesByCodeIdVersionByVersionByTypeData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<Blob | File, Error, Blob | File, [Pick<Options<GetCodesByCodeIdVersionByVersionByTypeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<Blob | File, [Pick<Options<GetCodesByCodeIdVersionByVersionByTypeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetCodesByCodeIdVersionByVersionByTypeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: Blob | File;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getCodesByCodeIdVersionByVersionByTypeLinkQueryKey: (options: Options<GetCodesByCodeIdVersionByVersionByTypeLinkData>) => [Pick<Options<GetCodesByCodeIdVersionByVersionByTypeLinkData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get QR Code Version Link
 * Retrieves a link to the file representation of a specific QR Code version
 */
export declare const getCodesByCodeIdVersionByVersionByTypeLinkOptions: (options: Options<GetCodesByCodeIdVersionByVersionByTypeLinkData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").FileUrlResponse, Error, import("../types.gen").FileUrlResponse, [Pick<Options<GetCodesByCodeIdVersionByVersionByTypeLinkData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").FileUrlResponse, [Pick<Options<GetCodesByCodeIdVersionByVersionByTypeLinkData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetCodesByCodeIdVersionByVersionByTypeLinkData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").FileUrlResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Delete QR Code version links
 * Deletes all QR Code version links for a specific version of a QR Code
 */
export declare const deleteCodesByCodeIdVersionsByVersionLinksMutation: (options?: Partial<Options<DeleteCodesByCodeIdVersionsByVersionLinksData>>) => UseMutationOptions<DeleteCodesByCodeIdVersionsByVersionLinksResponse, DeleteCodesByCodeIdVersionsByVersionLinksError, Options<DeleteCodesByCodeIdVersionsByVersionLinksData>>;
/**
 * Delete QR Code version link by Type
 * Deletes a specific QR Code version link for a specific version of a QR Code
 */
export declare const deleteCodesByCodeIdVersionsByVersionLinksByTypeMutation: (options?: Partial<Options<DeleteCodesByCodeIdVersionsByVersionLinksByTypeData>>) => UseMutationOptions<DeleteCodesByCodeIdVersionsByVersionLinksByTypeResponse, DeleteCodesByCodeIdVersionsByVersionLinksByTypeError, Options<DeleteCodesByCodeIdVersionsByVersionLinksByTypeData>>;
/**
 * Delete All QR Code Versions Links
 * Deletes all file links for all versions of a QR Code
 */
export declare const deleteCodesByCodeIdVersionsLinksMutation: (options?: Partial<Options<DeleteCodesByCodeIdVersionsLinksData>>) => UseMutationOptions<DeleteCodesByCodeIdVersionsLinksResponse, DeleteCodesByCodeIdVersionsLinksError, Options<DeleteCodesByCodeIdVersionsLinksData>>;
/**
 * Delete All QR Code Versions Links by Type
 * Deletes a specific file type link for all versions of a QR Code
 */
export declare const deleteCodesByCodeIdVersionsLinksByTypeMutation: (options?: Partial<Options<DeleteCodesByCodeIdVersionsLinksByTypeData>>) => UseMutationOptions<DeleteCodesByCodeIdVersionsLinksByTypeResponse, DeleteCodesByCodeIdVersionsLinksByTypeError, Options<DeleteCodesByCodeIdVersionsLinksByTypeData>>;
export declare const getCodesByCodeIdByTypeQueryKey: (options: Options<GetCodesByCodeIdByTypeData>) => [Pick<Options<GetCodesByCodeIdByTypeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get QR Code File Content (SVG, PNG, PDF)
 * Retrieves the SVG, PNG, or PDF representation of a QR Code
 */
export declare const getCodesByCodeIdByTypeOptions: (options: Options<GetCodesByCodeIdByTypeData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<Blob | File, Error, Blob | File, [Pick<Options<GetCodesByCodeIdByTypeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<Blob | File, [Pick<Options<GetCodesByCodeIdByTypeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetCodesByCodeIdByTypeData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: Blob | File;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getCodesByCodeIdByTypeLinkQueryKey: (options: Options<GetCodesByCodeIdByTypeLinkData>) => [Pick<Options<GetCodesByCodeIdByTypeLinkData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get QR Code link
 * Retrieves a link to the SVG, PNG, or PDF representation of a QR Code
 */
export declare const getCodesByCodeIdByTypeLinkOptions: (options: Options<GetCodesByCodeIdByTypeLinkData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").FileUrlResponse, Error, import("../types.gen").FileUrlResponse, [Pick<Options<GetCodesByCodeIdByTypeLinkData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").FileUrlResponse, [Pick<Options<GetCodesByCodeIdByTypeLinkData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetCodesByCodeIdByTypeLinkData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").FileUrlResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Delete QR Code links
 * Deletes all links for the current version of a QR Code
 */
export declare const deleteCodesByCodeIdLinksMutation: (options?: Partial<Options<DeleteCodesByCodeIdLinksData>>) => UseMutationOptions<DeleteCodesByCodeIdLinksResponse, DeleteCodesByCodeIdLinksError, Options<DeleteCodesByCodeIdLinksData>>;
/**
 * Delete QR Code link by Type
 * Deletes a specific file type link for the current version of a QR Code
 */
export declare const deleteCodesByCodeIdLinksByTypeMutation: (options?: Partial<Options<DeleteCodesByCodeIdLinksByTypeData>>) => UseMutationOptions<DeleteCodesByCodeIdLinksByTypeResponse, DeleteCodesByCodeIdLinksByTypeError, Options<DeleteCodesByCodeIdLinksByTypeData>>;
export declare const getTemplatesQueryKey: (options?: Options<GetTemplatesData>) => [Pick<Options<GetTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List all templates
 * Retrieves all templates available to the user, grouped by organization and workspace.
 */
export declare const getTemplatesOptions: (options?: Options<GetTemplatesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GetTemplatesResponse, Error, import("../types.gen").GetTemplatesResponse, [Pick<Options<GetTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GetTemplatesResponse, [Pick<Options<GetTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GetTemplatesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const postTemplatesQueryKey: (options?: Options<PostTemplatesData>) => [Pick<Options<PostTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Create a new template
 * Creates a new QR code template for an organization or workspace.
 */
export declare const postTemplatesOptions: (options?: Options<PostTemplatesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").TemplateResponse, Error, import("../types.gen").TemplateResponse, [Pick<Options<PostTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").TemplateResponse, [Pick<Options<PostTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").TemplateResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Create a new template
 * Creates a new QR code template for an organization or workspace.
 */
export declare const postTemplatesMutation: (options?: Partial<Options<PostTemplatesData>>) => UseMutationOptions<PostTemplatesResponse, PostTemplatesError, Options<PostTemplatesData>>;
export declare const getTemplatesBaseQueryKey: (options?: Options<GetTemplatesBaseData>) => [Pick<Options<GetTemplatesBaseData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List base templates
 * Retrieves all base templates from the QRCodeJs library with optional name filtering.
 */
export declare const getTemplatesBaseOptions: (options?: Options<GetTemplatesBaseData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").BaseTemplates, Error, import("../types.gen").BaseTemplates, [Pick<Options<GetTemplatesBaseData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").BaseTemplates, [Pick<Options<GetTemplatesBaseData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetTemplatesBaseData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").BaseTemplates;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Delete template by ID
 * Deletes a template by its unique identifier. Fails if the template is used by codes.
 */
export declare const deleteTemplatesByTemplateIdMutation: (options?: Partial<Options<DeleteTemplatesByTemplateIdData>>) => UseMutationOptions<DeleteTemplatesByTemplateIdResponse, DeleteTemplatesByTemplateIdError, Options<DeleteTemplatesByTemplateIdData>>;
export declare const getTemplatesByTemplateIdQueryKey: (options: Options<GetTemplatesByTemplateIdData>) => [Pick<Options<GetTemplatesByTemplateIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get template by ID
 * Retrieves a template by its unique identifier.
 */
export declare const getTemplatesByTemplateIdOptions: (options: Options<GetTemplatesByTemplateIdData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").TemplateResponse, Error, import("../types.gen").TemplateResponse, [Pick<Options<GetTemplatesByTemplateIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").TemplateResponse, [Pick<Options<GetTemplatesByTemplateIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetTemplatesByTemplateIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").TemplateResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Update template by ID
 * Updates a template by its unique identifier.
 */
export declare const putTemplatesByTemplateIdMutation: (options?: Partial<Options<PutTemplatesByTemplateIdData>>) => UseMutationOptions<PutTemplatesByTemplateIdResponse, PutTemplatesByTemplateIdError, Options<PutTemplatesByTemplateIdData>>;
/**
 * Partially update template options by ID
 * Partially updates a template options by its unique identifier using a deep merge. Use null to delete a field.
 */
export declare const putTemplatesByTemplateIdOptionsMutation: (options?: Partial<Options<PutTemplatesByTemplateIdOptionsData>>) => UseMutationOptions<PutTemplatesByTemplateIdOptionsResponse, PutTemplatesByTemplateIdOptionsError, Options<PutTemplatesByTemplateIdOptionsData>>;
export declare const getTemplatesWorkspaceByWorkspaceIdQueryKey: (options: Options<GetTemplatesWorkspaceByWorkspaceIdData>) => [Pick<Options<GetTemplatesWorkspaceByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List templates for a workspace
 * Retrieves all templates for a specific workspace.
 */
export declare const getTemplatesWorkspaceByWorkspaceIdOptions: (options: Options<GetTemplatesWorkspaceByWorkspaceIdData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").TemplateArrayResponse, Error, import("../types.gen").TemplateArrayResponse, [Pick<Options<GetTemplatesWorkspaceByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").TemplateArrayResponse, [Pick<Options<GetTemplatesWorkspaceByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetTemplatesWorkspaceByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").TemplateArrayResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getStylesQueryKey: (options?: Options<GetStylesData>) => [Pick<Options<GetStylesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List all styles
 * Retrieves all styles available to the user.
 */
export declare const getStylesOptions: (options?: Options<GetStylesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GetStylesResponse, Error, import("../types.gen").GetStylesResponse, [Pick<Options<GetStylesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GetStylesResponse, [Pick<Options<GetStylesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetStylesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GetStylesResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const postStylesQueryKey: (options?: Options<PostStylesData>) => [Pick<Options<PostStylesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Create a new style
 * Creates a new style for an organization or workspace.
 */
export declare const postStylesOptions: (options?: Options<PostStylesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").StyleResponse, Error, import("../types.gen").StyleResponse, [Pick<Options<PostStylesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").StyleResponse, [Pick<Options<PostStylesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostStylesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").StyleResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Create a new style
 * Creates a new style for an organization or workspace.
 */
export declare const postStylesMutation: (options?: Partial<Options<PostStylesData>>) => UseMutationOptions<PostStylesResponse, PostStylesError, Options<PostStylesData>>;
export declare const getStylesBaseQueryKey: (options?: Options<GetStylesBaseData>) => [Pick<Options<GetStylesBaseData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List base styles
 * Retrieves all base styles from the QRCodeJs library with optional name filtering.
 */
export declare const getStylesBaseOptions: (options?: Options<GetStylesBaseData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").BaseStyles, Error, import("../types.gen").BaseStyles, [Pick<Options<GetStylesBaseData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").BaseStyles, [Pick<Options<GetStylesBaseData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetStylesBaseData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").BaseStyles;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Delete style by ID
 * Deletes a style by its unique identifier. Fails if the style is used by codes.
 */
export declare const deleteStylesByStyleIdMutation: (options?: Partial<Options<DeleteStylesByStyleIdData>>) => UseMutationOptions<DeleteStylesByStyleIdResponse, DeleteStylesByStyleIdError, Options<DeleteStylesByStyleIdData>>;
export declare const getStylesByStyleIdQueryKey: (options: Options<GetStylesByStyleIdData>) => [Pick<Options<GetStylesByStyleIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get style by ID
 * Retrieves a style by its unique identifier.
 */
export declare const getStylesByStyleIdOptions: (options: Options<GetStylesByStyleIdData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").StyleResponse, Error, import("../types.gen").StyleResponse, [Pick<Options<GetStylesByStyleIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").StyleResponse, [Pick<Options<GetStylesByStyleIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetStylesByStyleIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").StyleResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Update style by ID
 * Updates a style by its unique identifier.
 */
export declare const putStylesByStyleIdMutation: (options?: Partial<Options<PutStylesByStyleIdData>>) => UseMutationOptions<PutStylesByStyleIdResponse, PutStylesByStyleIdError, Options<PutStylesByStyleIdData>>;
/**
 * Partially update style options by ID
 * Partially updates a style options by its unique identifier using a deep merge. Use null to delete a field.
 */
export declare const putStylesByStyleIdOptionsMutation: (options?: Partial<Options<PutStylesByStyleIdOptionsData>>) => UseMutationOptions<PutStylesByStyleIdOptionsResponse, PutStylesByStyleIdOptionsError, Options<PutStylesByStyleIdOptionsData>>;
export declare const getStylesWorkspaceByWorkspaceIdQueryKey: (options: Options<GetStylesWorkspaceByWorkspaceIdData>) => [Pick<Options<GetStylesWorkspaceByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List styles for a workspace
 * Retrieves all styles for a specific workspace.
 */
export declare const getStylesWorkspaceByWorkspaceIdOptions: (options: Options<GetStylesWorkspaceByWorkspaceIdData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").StyleArray, Error, import("../types.gen").StyleArray, [Pick<Options<GetStylesWorkspaceByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").StyleArray, [Pick<Options<GetStylesWorkspaceByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetStylesWorkspaceByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").StyleArray;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getTextsQueryKey: (options?: Options<GetTextsData>) => [Pick<Options<GetTextsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List all texts
 * Retrieves all texts available to the user.
 */
export declare const getTextsOptions: (options?: Options<GetTextsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GetTextsResponse, Error, import("../types.gen").GetTextsResponse, [Pick<Options<GetTextsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GetTextsResponse, [Pick<Options<GetTextsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetTextsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GetTextsResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const postTextsQueryKey: (options?: Options<PostTextsData>) => [Pick<Options<PostTextsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Create a new text
 * Creates a new text for an organization or workspace.
 */
export declare const postTextsOptions: (options?: Options<PostTextsData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").TextResponse, Error, import("../types.gen").TextResponse, [Pick<Options<PostTextsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").TextResponse, [Pick<Options<PostTextsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostTextsData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").TextResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Create a new text
 * Creates a new text for an organization or workspace.
 */
export declare const postTextsMutation: (options?: Partial<Options<PostTextsData>>) => UseMutationOptions<PostTextsResponse, PostTextsError, Options<PostTextsData>>;
export declare const getTextsBaseQueryKey: (options?: Options<GetTextsBaseData>) => [Pick<Options<GetTextsBaseData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List base texts
 * Retrieves all base text templates from the QRCodeJs library with optional name filtering.
 */
export declare const getTextsBaseOptions: (options?: Options<GetTextsBaseData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").BaseTexts, Error, import("../types.gen").BaseTexts, [Pick<Options<GetTextsBaseData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").BaseTexts, [Pick<Options<GetTextsBaseData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetTextsBaseData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").BaseTexts;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Delete text by ID
 * Deletes a text by its unique identifier. Fails if the text is used by codes.
 */
export declare const deleteTextsByTextIdMutation: (options?: Partial<Options<DeleteTextsByTextIdData>>) => UseMutationOptions<DeleteTextsByTextIdResponse, DeleteTextsByTextIdError, Options<DeleteTextsByTextIdData>>;
export declare const getTextsByTextIdQueryKey: (options: Options<GetTextsByTextIdData>) => [Pick<Options<GetTextsByTextIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get text by ID
 * Retrieves a text by its unique identifier.
 */
export declare const getTextsByTextIdOptions: (options: Options<GetTextsByTextIdData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").TextResponse, Error, import("../types.gen").TextResponse, [Pick<Options<GetTextsByTextIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").TextResponse, [Pick<Options<GetTextsByTextIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetTextsByTextIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").TextResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Update text by ID
 * Updates a text by its unique identifier.
 */
export declare const putTextsByTextIdMutation: (options?: Partial<Options<PutTextsByTextIdData>>) => UseMutationOptions<PutTextsByTextIdResponse, PutTextsByTextIdError, Options<PutTextsByTextIdData>>;
/**
 * Partially update text options by ID
 * Partially updates a text options by its unique identifier using a deep merge. Use null to delete a field.
 */
export declare const putTextsByTextIdOptionsMutation: (options?: Partial<Options<PutTextsByTextIdOptionsData>>) => UseMutationOptions<PutTextsByTextIdOptionsResponse, PutTextsByTextIdOptionsError, Options<PutTextsByTextIdOptionsData>>;
export declare const getTextsWorkspaceByWorkspaceIdQueryKey: (options: Options<GetTextsWorkspaceByWorkspaceIdData>) => [Pick<Options<GetTextsWorkspaceByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List texts for a workspace
 * Retrieves all texts for a specific workspace.
 */
export declare const getTextsWorkspaceByWorkspaceIdOptions: (options: Options<GetTextsWorkspaceByWorkspaceIdData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").TextArray, Error, import("../types.gen").TextArray, [Pick<Options<GetTextsWorkspaceByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").TextArray, [Pick<Options<GetTextsWorkspaceByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetTextsWorkspaceByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").TextArray;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getBordersQueryKey: (options?: Options<GetBordersData>) => [Pick<Options<GetBordersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List all borders
 * Retrieves all borders available to the user.
 */
export declare const getBordersOptions: (options?: Options<GetBordersData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").GetBordersResponse, Error, import("../types.gen").GetBordersResponse, [Pick<Options<GetBordersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").GetBordersResponse, [Pick<Options<GetBordersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetBordersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").GetBordersResponse;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const postBordersQueryKey: (options?: Options<PostBordersData>) => [Pick<Options<PostBordersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Create a new border
 * Creates a new border for an organization or workspace.
 */
export declare const postBordersOptions: (options?: Options<PostBordersData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").BorderResponse, Error, import("../types.gen").BorderResponse, [Pick<Options<PostBordersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").BorderResponse, [Pick<Options<PostBordersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostBordersData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").BorderResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Create a new border
 * Creates a new border for an organization or workspace.
 */
export declare const postBordersMutation: (options?: Partial<Options<PostBordersData>>) => UseMutationOptions<PostBordersResponse, PostBordersError, Options<PostBordersData>>;
export declare const getBordersBaseQueryKey: (options?: Options<GetBordersBaseData>) => [Pick<Options<GetBordersBaseData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List base borders
 * Retrieves all base border templates from the QRCodeJs library with optional name filtering.
 */
export declare const getBordersBaseOptions: (options?: Options<GetBordersBaseData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").BaseBorders, Error, import("../types.gen").BaseBorders, [Pick<Options<GetBordersBaseData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").BaseBorders, [Pick<Options<GetBordersBaseData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetBordersBaseData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").BaseBorders;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Delete border by ID
 * Deletes a border by its unique identifier.
 */
export declare const deleteBordersByBorderIdMutation: (options?: Partial<Options<DeleteBordersByBorderIdData>>) => UseMutationOptions<DeleteBordersByBorderIdResponse, DeleteBordersByBorderIdError, Options<DeleteBordersByBorderIdData>>;
export declare const getBordersByBorderIdQueryKey: (options: Options<GetBordersByBorderIdData>) => [Pick<Options<GetBordersByBorderIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get border by ID
 * Retrieves a border by its unique identifier.
 */
export declare const getBordersByBorderIdOptions: (options: Options<GetBordersByBorderIdData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").BorderResponse, Error, import("../types.gen").BorderResponse, [Pick<Options<GetBordersByBorderIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").BorderResponse, [Pick<Options<GetBordersByBorderIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetBordersByBorderIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").BorderResponse;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Update border by ID
 * Updates a border by its unique identifier.
 */
export declare const putBordersByBorderIdMutation: (options?: Partial<Options<PutBordersByBorderIdData>>) => UseMutationOptions<PutBordersByBorderIdResponse, PutBordersByBorderIdError, Options<PutBordersByBorderIdData>>;
/**
 * Partially update border options by ID
 * Partially updates border options by its unique identifier using a deep merge. Use null to delete a field.
 */
export declare const putBordersByBorderIdOptionsMutation: (options?: Partial<Options<PutBordersByBorderIdOptionsData>>) => UseMutationOptions<PutBordersByBorderIdOptionsResponse, PutBordersByBorderIdOptionsError, Options<PutBordersByBorderIdOptionsData>>;
export declare const getBordersWorkspaceByWorkspaceIdQueryKey: (options: Options<GetBordersWorkspaceByWorkspaceIdData>) => [Pick<Options<GetBordersWorkspaceByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List borders for a workspace
 * Retrieves all borders for a specific workspace.
 */
export declare const getBordersWorkspaceByWorkspaceIdOptions: (options: Options<GetBordersWorkspaceByWorkspaceIdData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<import("../types.gen").BorderResponse[], Error, import("../types.gen").BorderResponse[], [Pick<Options<GetBordersWorkspaceByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<import("../types.gen").BorderResponse[], [Pick<Options<GetBordersWorkspaceByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetBordersWorkspaceByWorkspaceIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: import("../types.gen").BorderResponse[];
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getCountryCodesQueryKey: (options?: Options<GetCountryCodesData>) => [Pick<Options<GetCountryCodesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List All Country Codes
 * Retrieves a list of all available country codes with their names and full names
 */
export declare const getCountryCodesOptions: (options?: Options<GetCountryCodesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<{
    data: Array<{
        code: string;
        name: string;
        fullName: string;
    }>;
}, Error, {
    data: Array<{
        code: string;
        name: string;
        fullName: string;
    }>;
}, [Pick<Options<GetCountryCodesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<{
        data: Array<{
            code: string;
            name: string;
            fullName: string;
        }>;
    }, [Pick<Options<GetCountryCodesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetCountryCodesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: {
            data: Array<{
                code: string;
                name: string;
                fullName: string;
            }>;
        };
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getRouterRuleTemplatesQueryKey: (options?: Options<GetRouterRuleTemplatesData>) => [Pick<Options<GetRouterRuleTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List Router Rule Templates
 * Retrieves available router rule templates based on user access. Returns global templates (if includeGlobal=true), organization-level templates, and workspace-specific templates the user has access to.
 */
export declare const getRouterRuleTemplatesOptions: (options?: Options<GetRouterRuleTemplatesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<unknown, Error, unknown, [Pick<Options<GetRouterRuleTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<unknown, [Pick<Options<GetRouterRuleTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetRouterRuleTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: unknown;
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getRouterRuleTemplatesInfiniteQueryKey: (options?: Options<GetRouterRuleTemplatesData>) => QueryKey<Options<GetRouterRuleTemplatesData>>;
/**
 * List Router Rule Templates
 * Retrieves available router rule templates based on user access. Returns global templates (if includeGlobal=true), organization-level templates, and workspace-specific templates the user has access to.
 */
export declare const getRouterRuleTemplatesInfiniteOptions: (options?: Options<GetRouterRuleTemplatesData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<unknown, GetRouterRuleTemplatesError, InfiniteData<unknown, unknown>, QueryKey<Options<GetRouterRuleTemplatesData>>, number | Pick<Pick<Options<GetRouterRuleTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}, "query" | "body" | "headers" | "path">> & {
    initialData: InfiniteData<unknown, number | Pick<Pick<Options<GetRouterRuleTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }, "query" | "body" | "headers" | "path">> | (() => InfiniteData<unknown, number | Pick<Pick<Options<GetRouterRuleTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }, "query" | "body" | "headers" | "path">>) | undefined;
} & {
    queryKey: QueryKey<Options<GetRouterRuleTemplatesData>> & {
        [dataTagSymbol]: InfiniteData<unknown, unknown>;
        [dataTagErrorSymbol]: GetRouterRuleTemplatesError;
    };
};
export declare const postRouterRuleTemplatesQueryKey: (options?: Options<PostRouterRuleTemplatesData>) => [Pick<Options<PostRouterRuleTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Create Router Rule Template
 * Creates a new router rule template. The template can be organization-level (no workspaceId) or workspace-specific. Template names must be unique within the organization scope.
 */
export declare const postRouterRuleTemplatesOptions: (options?: Options<PostRouterRuleTemplatesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<unknown, Error, unknown, [Pick<Options<PostRouterRuleTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<unknown, [Pick<Options<PostRouterRuleTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostRouterRuleTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: unknown;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Create Router Rule Template
 * Creates a new router rule template. The template can be organization-level (no workspaceId) or workspace-specific. Template names must be unique within the organization scope.
 */
export declare const postRouterRuleTemplatesMutation: (options?: Partial<Options<PostRouterRuleTemplatesData>>) => UseMutationOptions<unknown, PostRouterRuleTemplatesError, Options<PostRouterRuleTemplatesData>>;
/**
 * Delete Router Rule Template
 * Deletes a router rule template. Templates that are currently being used by router rules cannot be deleted. Only organization templates can be deleted (not global templates).
 */
export declare const deleteRouterRuleTemplatesByRouterRuleTemplateIdMutation: (options?: Partial<Options<DeleteRouterRuleTemplatesByRouterRuleTemplateIdData>>) => UseMutationOptions<DeleteRouterRuleTemplatesByRouterRuleTemplateIdResponse, DeleteRouterRuleTemplatesByRouterRuleTemplateIdError, Options<DeleteRouterRuleTemplatesByRouterRuleTemplateIdData>>;
export declare const getRouterRuleTemplatesByRouterRuleTemplateIdQueryKey: (options: Options<GetRouterRuleTemplatesByRouterRuleTemplateIdData>) => [Pick<Options<GetRouterRuleTemplatesByRouterRuleTemplateIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Get Router Rule Template
 * Retrieves a specific router rule template by ID. Returns global templates and organization templates the user has access to.
 */
export declare const getRouterRuleTemplatesByRouterRuleTemplateIdOptions: (options: Options<GetRouterRuleTemplatesByRouterRuleTemplateIdData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<unknown, Error, unknown, [Pick<Options<GetRouterRuleTemplatesByRouterRuleTemplateIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<unknown, [Pick<Options<GetRouterRuleTemplatesByRouterRuleTemplateIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetRouterRuleTemplatesByRouterRuleTemplateIdData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: unknown;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Update Router Rule Template
 * Updates a router rule template. Only organization templates can be updated (not global templates). Users can only update templates within their organization.
 */
export declare const putRouterRuleTemplatesByRouterRuleTemplateIdMutation: (options?: Partial<Options<PutRouterRuleTemplatesByRouterRuleTemplateIdData>>) => UseMutationOptions<unknown, PutRouterRuleTemplatesByRouterRuleTemplateIdError, Options<PutRouterRuleTemplatesByRouterRuleTemplateIdData>>;
export declare const getRouterRulesQueryKey: (options?: Options<GetRouterRulesData>) => [Pick<Options<GetRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List Organization Router Rules
 * Retrieves all router rules across the organization. Users with organization-level access see all rules, while workspace-limited users see only rules from their permitted workspaces.
 */
export declare const getRouterRulesOptions: (options?: Options<GetRouterRulesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
}, Error, {
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
}, [Pick<Options<GetRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
    }, [Pick<Options<GetRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: {
            pagination: {
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
        };
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getRouterRulesInfiniteQueryKey: (options?: Options<GetRouterRulesData>) => QueryKey<Options<GetRouterRulesData>>;
/**
 * List Organization Router Rules
 * Retrieves all router rules across the organization. Users with organization-level access see all rules, while workspace-limited users see only rules from their permitted workspaces.
 */
export declare const getRouterRulesInfiniteOptions: (options?: Options<GetRouterRulesData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
}, GetRouterRulesError, InfiniteData<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
}, unknown>, QueryKey<Options<GetRouterRulesData>>, number | Pick<Pick<Options<GetRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}, "query" | "body" | "headers" | "path">> & {
    initialData: InfiniteData<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
    }, number | Pick<Pick<Options<GetRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }, "query" | "body" | "headers" | "path">> | (() => InfiniteData<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
    }, number | Pick<Pick<Options<GetRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }, "query" | "body" | "headers" | "path">>) | undefined;
} & {
    queryKey: QueryKey<Options<GetRouterRulesData>> & {
        [dataTagSymbol]: InfiniteData<{
            pagination: {
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
        }, unknown>;
        [dataTagErrorSymbol]: GetRouterRulesError;
    };
};
export declare const getWorkspacesByWorkspaceIdRouterRulesQueryKey: (options: Options<GetWorkspacesByWorkspaceIdRouterRulesData>) => [Pick<Options<GetWorkspacesByWorkspaceIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * List Workspace Router Rule Assignments
 * Retrieves all router rule assignments within a specific workspace with pagination and filtering options. Returns rules sorted by priority (highest first) with enriched template data and QR code context.
 */
export declare const getWorkspacesByWorkspaceIdRouterRulesOptions: (options: Options<GetWorkspacesByWorkspaceIdRouterRulesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
}, Error, {
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
}, [Pick<Options<GetWorkspacesByWorkspaceIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
    }, [Pick<Options<GetWorkspacesByWorkspaceIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<GetWorkspacesByWorkspaceIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: {
            pagination: {
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
        };
        [dataTagErrorSymbol]: Error;
    };
};
export declare const getWorkspacesByWorkspaceIdRouterRulesInfiniteQueryKey: (options: Options<GetWorkspacesByWorkspaceIdRouterRulesData>) => QueryKey<Options<GetWorkspacesByWorkspaceIdRouterRulesData>>;
/**
 * List Workspace Router Rule Assignments
 * Retrieves all router rule assignments within a specific workspace with pagination and filtering options. Returns rules sorted by priority (highest first) with enriched template data and QR code context.
 */
export declare const getWorkspacesByWorkspaceIdRouterRulesInfiniteOptions: (options: Options<GetWorkspacesByWorkspaceIdRouterRulesData>) => import("@tanstack/react-query").UseInfiniteQueryOptions<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
}, GetWorkspacesByWorkspaceIdRouterRulesError, InfiniteData<{
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
}, unknown>, QueryKey<Options<GetWorkspacesByWorkspaceIdRouterRulesData>>, number | Pick<Pick<Options<GetWorkspacesByWorkspaceIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}, "query" | "body" | "headers" | "path">> & {
    initialData: InfiniteData<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
    }, number | Pick<Pick<Options<GetWorkspacesByWorkspaceIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }, "query" | "body" | "headers" | "path">> | (() => InfiniteData<{
        pagination: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
    }, number | Pick<Pick<Options<GetWorkspacesByWorkspaceIdRouterRulesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }, "query" | "body" | "headers" | "path">>) | undefined;
} & {
    queryKey: QueryKey<Options<GetWorkspacesByWorkspaceIdRouterRulesData>> & {
        [dataTagSymbol]: InfiniteData<{
            pagination: {
                total: number;
                page: number;
                limit: number;
                totalPages: number;
            };
            data: Array<import("../types.gen").WorkspaceRouterRuleResponse>;
        }, unknown>;
        [dataTagErrorSymbol]: GetWorkspacesByWorkspaceIdRouterRulesError;
    };
};
export declare const postWorkspacesByWorkspaceIdRouterRuleTemplatesQueryKey: (options: Options<PostWorkspacesByWorkspaceIdRouterRuleTemplatesData>) => [Pick<Options<PostWorkspacesByWorkspaceIdRouterRuleTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}];
/**
 * Create Workspace Router Rule Template
 * Creates a new router rule template scoped to the specified workspace. Template names must be unique within the organization scope. The workspaceId from the URL path will be used to scope the template.
 */
export declare const postWorkspacesByWorkspaceIdRouterRuleTemplatesOptions: (options: Options<PostWorkspacesByWorkspaceIdRouterRuleTemplatesData>) => import("@tanstack/react-query").OmitKeyof<import("@tanstack/react-query").UseQueryOptions<unknown, Error, unknown, [Pick<Options<PostWorkspacesByWorkspaceIdRouterRuleTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
    _id: string;
    _infinite?: boolean;
}]>, "queryFn"> & {
    queryFn?: import("@tanstack/react-query").QueryFunction<unknown, [Pick<Options<PostWorkspacesByWorkspaceIdRouterRuleTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }], never> | undefined;
} & {
    queryKey: [Pick<Options<PostWorkspacesByWorkspaceIdRouterRuleTemplatesData>, "query" | "body" | "headers" | "path" | "baseUrl"> & {
        _id: string;
        _infinite?: boolean;
    }] & {
        [dataTagSymbol]: unknown;
        [dataTagErrorSymbol]: Error;
    };
};
/**
 * Create Workspace Router Rule Template
 * Creates a new router rule template scoped to the specified workspace. Template names must be unique within the organization scope. The workspaceId from the URL path will be used to scope the template.
 */
export declare const postWorkspacesByWorkspaceIdRouterRuleTemplatesMutation: (options?: Partial<Options<PostWorkspacesByWorkspaceIdRouterRuleTemplatesData>>) => UseMutationOptions<unknown, PostWorkspacesByWorkspaceIdRouterRuleTemplatesError, Options<PostWorkspacesByWorkspaceIdRouterRuleTemplatesData>>;
