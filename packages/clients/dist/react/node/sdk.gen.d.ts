import type { Options as ClientOptions, TDataShape, Client } from './client';
import type { PostAuthRegisterData, PostAuthRegisterResponses, PostAuthRegisterErrors, PostAuthRegisterVerifyData, PostAuthRegisterVerifyResponses, PostAuthRegisterVerifyErrors, PostAuthRegisterVerifyResendData, PostAuthRegisterVerifyResendResponses, PostAuthRegisterVerifyResendErrors, PostAuthSignInData, PostAuthSignInResponses, PostAuthSignInErrors, PostAuthSignInVerifyData, PostAuthSignInVerifyResponses, PostAuthSignInVerifyErrors, PostAuthEmailVerifySendData, PostAuthEmailVerifySendResponses, PostAuthEmailVerifySendErrors, PostAuthEmailVerifyData, PostAuthEmailVerifyResponses, PostAuthEmailVerifyErrors, GetAuthMeData, GetAuthMeResponses, GetAuthMeErrors, GetAuthSignOutData, GetAuthSignOutResponses, GetAuthSignOutErrors, PostAuthPasswordResetData, PostAuthPasswordResetResponses, PostAuthPasswordResetErrors, PostAuthPasswordResetVerifyData, PostAuthPasswordResetVerifyResponses, PostAuthPasswordResetVerifyErrors, PostAuthPasswordChangeData, PostAuthPasswordChangeResponses, PostAuthPasswordChangeErrors, GetApiKeysData, GetApiKeysResponses, GetApiKeysErrors, PostApiKeysData, PostApiKeysResponses, PostApiKeysErrors, DeleteApiKeysByApiKeyIdData, DeleteApiKeysByApiKeyIdResponses, DeleteApiKeysByApiKeyIdErrors, GetApiKeysByApiKeyIdData, GetApiKeysByApiKeyIdResponses, GetApiKeysByApiKeyIdErrors, PutApiKeysByApiKeyIdData, PutApiKeysByApiKeyIdResponses, PutApiKeysByApiKeyIdErrors, PutApiKeysByApiKeyIdStatusData, PutApiKeysByApiKeyIdStatusResponses, PutApiKeysByApiKeyIdStatusErrors, GetOrgsCurrentData, GetOrgsCurrentResponses, GetOrgsCurrentErrors, PutOrgsData, PutOrgsResponses, PutOrgsErrors, PostOrgsFirstData, PostOrgsFirstResponses, PostOrgsFirstErrors, PostOrgsCurrentByOrgIdData, PostOrgsCurrentByOrgIdResponses, PostOrgsCurrentByOrgIdErrors, GetInvitesData, GetInvitesResponses, GetInvitesErrors, PostInvitesData, PostInvitesResponses, PostInvitesErrors, GetInvitesMeData, GetInvitesMeResponses, GetInvitesMeErrors, DeleteInvitesByInvitationIdData, DeleteInvitesByInvitationIdResponses, DeleteInvitesByInvitationIdErrors, GetInvitesByTokenAcceptData, GetInvitesByTokenAcceptResponses, GetInvitesByTokenAcceptErrors, GetInvitesByTokenDeclineData, GetInvitesByTokenDeclineResponses, GetInvitesByTokenDeclineErrors, GetMembersData, GetMembersResponses, GetMembersErrors, PostMembersData, PostMembersResponses, PostMembersErrors, DeleteMembersByUserIdData, DeleteMembersByUserIdResponses, DeleteMembersByUserIdErrors, GetMembersByUserIdRolesData, GetMembersByUserIdRolesResponses, GetMembersByUserIdRolesErrors, PostMembersByUserIdRoleData, PostMembersByUserIdRoleResponses, PostMembersByUserIdRoleErrors, DeleteMembersByUserIdRoleByRoleNameData, DeleteMembersByUserIdRoleByRoleNameResponses, DeleteMembersByUserIdRoleByRoleNameErrors, GetWorkspacesData, GetWorkspacesResponses, GetWorkspacesErrors, PostWorkspacesData, PostWorkspacesResponses, PostWorkspacesErrors, DeleteWorkspacesByWorkspaceIdData, DeleteWorkspacesByWorkspaceIdResponses, DeleteWorkspacesByWorkspaceIdErrors, GetWorkspacesByWorkspaceIdData, GetWorkspacesByWorkspaceIdResponses, GetWorkspacesByWorkspaceIdErrors, PutWorkspacesByWorkspaceIdData, PutWorkspacesByWorkspaceIdResponses, PutWorkspacesByWorkspaceIdErrors, DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleData, DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleResponses, DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleErrors, GetWorkspacesByWorkspaceIdMembersByUserIdRoleData, GetWorkspacesByWorkspaceIdMembersByUserIdRoleResponses, GetWorkspacesByWorkspaceIdMembersByUserIdRoleErrors, PostWorkspacesByWorkspaceIdMembersByUserIdRoleData, PostWorkspacesByWorkspaceIdMembersByUserIdRoleResponses, PostWorkspacesByWorkspaceIdMembersByUserIdRoleErrors, GetWorkspacesByWorkspaceIdMembersData, GetWorkspacesByWorkspaceIdMembersResponses, GetWorkspacesByWorkspaceIdMembersErrors, GetRolesData, GetRolesResponses, GetRolesErrors, GetPlansData, GetPlansResponses, GetPlansErrors, GetPlansCurrentData, GetPlansCurrentResponses, GetPlansCurrentErrors, GetSettingsData, GetSettingsResponses, GetSettingsErrors, GetSettingsCustomData, GetSettingsCustomResponses, GetSettingsCustomErrors, PostSettingsCustomData, PostSettingsCustomResponses, PostSettingsCustomErrors, DeleteSettingsCustomBySettingSlugData, DeleteSettingsCustomBySettingSlugResponses, DeleteSettingsCustomBySettingSlugErrors, GetSettingsCustomBySettingSlugData, GetSettingsCustomBySettingSlugResponses, GetSettingsCustomBySettingSlugErrors, PutSettingsCustomBySettingSlugData, PutSettingsCustomBySettingSlugResponses, PutSettingsCustomBySettingSlugErrors, GetSettingsCustomBySettingSlugValueData, GetSettingsCustomBySettingSlugValueResponses, GetSettingsCustomBySettingSlugValueErrors, GetSettingsServiceData, GetSettingsServiceResponses, GetSettingsServiceErrors, GetSettingsServiceBySettingSlugData, GetSettingsServiceBySettingSlugResponses, GetSettingsServiceBySettingSlugErrors, PutSettingsServiceBySettingSlugData, PutSettingsServiceBySettingSlugResponses, PutSettingsServiceBySettingSlugErrors, GetSettingsServiceBySettingSlugValueData, GetSettingsServiceBySettingSlugValueResponses, GetSettingsServiceBySettingSlugValueErrors, GetWorkspacesByWorkspaceIdSettingsData, GetWorkspacesByWorkspaceIdSettingsResponses, GetWorkspacesByWorkspaceIdSettingsErrors, GetWorkspacesByWorkspaceIdSettingsCustomData, GetWorkspacesByWorkspaceIdSettingsCustomResponses, GetWorkspacesByWorkspaceIdSettingsCustomErrors, PostWorkspacesByWorkspaceIdSettingsCustomData, PostWorkspacesByWorkspaceIdSettingsCustomResponses, PostWorkspacesByWorkspaceIdSettingsCustomErrors, DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData, DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponses, DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugErrors, GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData, GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponses, GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugErrors, PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData, PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponses, PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugErrors, GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueData, GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueResponses, GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueErrors, GetWorkspacesByWorkspaceIdSettingsServiceData, GetWorkspacesByWorkspaceIdSettingsServiceResponses, GetWorkspacesByWorkspaceIdSettingsServiceErrors, DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData, DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponses, DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugErrors, GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData, GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponses, GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugErrors, PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData, PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponses, PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugErrors, GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueData, GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueResponses, GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueErrors, GetCodesByCodeIdScansData, GetCodesByCodeIdScansResponses, GetCodesByCodeIdScansErrors, GetCodesByCodeIdRouterRulesData, GetCodesByCodeIdRouterRulesResponses, GetCodesByCodeIdRouterRulesErrors, PostCodesByCodeIdRouterRulesData, PostCodesByCodeIdRouterRulesResponses, PostCodesByCodeIdRouterRulesErrors, DeleteCodesByCodeIdRouterRulesByRouterRuleIdData, DeleteCodesByCodeIdRouterRulesByRouterRuleIdResponses, DeleteCodesByCodeIdRouterRulesByRouterRuleIdErrors, GetCodesByCodeIdRouterRulesByRouterRuleIdData, GetCodesByCodeIdRouterRulesByRouterRuleIdResponses, GetCodesByCodeIdRouterRulesByRouterRuleIdErrors, PutCodesByCodeIdRouterRulesByRouterRuleIdData, PutCodesByCodeIdRouterRulesByRouterRuleIdResponses, PutCodesByCodeIdRouterRulesByRouterRuleIdErrors, GetCodesDeletedData, GetCodesDeletedResponses, GetCodesDeletedErrors, GetCodesLinksData, GetCodesLinksResponses, GetCodesLinksErrors, DeleteCodesByCodeIdData, DeleteCodesByCodeIdResponses, DeleteCodesByCodeIdErrors, GetCodesByCodeIdData, GetCodesByCodeIdResponses, GetCodesByCodeIdErrors, PutCodesByCodeIdData, PutCodesByCodeIdResponses, PutCodesByCodeIdErrors, DeleteCodesData, DeleteCodesResponses, DeleteCodesErrors, GetCodesData, GetCodesResponses, GetCodesErrors, PostCodesData, PostCodesResponses, PostCodesErrors, PutCodesByCodeIdOptionsData, PutCodesByCodeIdOptionsResponses, PutCodesByCodeIdOptionsErrors, DeleteCodesPermanentData, DeleteCodesPermanentResponses, DeleteCodesPermanentErrors, DeleteCodesByCodeIdPermanentData, DeleteCodesByCodeIdPermanentResponses, DeleteCodesByCodeIdPermanentErrors, PostCodesByCodeIdRestoreData, PostCodesByCodeIdRestoreResponses, PostCodesByCodeIdRestoreErrors, PostCodesBulkGetData, PostCodesBulkGetResponses, PostCodesBulkGetErrors, PostCodesGenerateByTypeData, PostCodesGenerateByTypeResponses, PostCodesGenerateByTypeErrors, PostCodesValidateData, PostCodesValidateResponses, PostCodesValidateErrors, PostCodesByCodeIdValidateData, PostCodesByCodeIdValidateResponses, PostCodesByCodeIdValidateErrors, PostCodesLinksRefreshData, PostCodesLinksRefreshResponses, PostCodesLinksRefreshErrors, GetCodesByCodeIdVersionByVersionData, GetCodesByCodeIdVersionByVersionResponses, GetCodesByCodeIdVersionByVersionErrors, DeleteCodesByCodeIdVersionsData, DeleteCodesByCodeIdVersionsResponses, DeleteCodesByCodeIdVersionsErrors, GetCodesByCodeIdVersionsData, GetCodesByCodeIdVersionsResponses, GetCodesByCodeIdVersionsErrors, PostCodesByCodeIdVersionByVersionRestoreData, PostCodesByCodeIdVersionByVersionRestoreResponses, PostCodesByCodeIdVersionByVersionRestoreErrors, GetCodesByCodeIdVersionByVersionByTypeData, GetCodesByCodeIdVersionByVersionByTypeResponses, GetCodesByCodeIdVersionByVersionByTypeErrors, GetCodesByCodeIdVersionByVersionByTypeLinkData, GetCodesByCodeIdVersionByVersionByTypeLinkResponses, GetCodesByCodeIdVersionByVersionByTypeLinkErrors, DeleteCodesByCodeIdVersionsByVersionLinksData, DeleteCodesByCodeIdVersionsByVersionLinksResponses, DeleteCodesByCodeIdVersionsByVersionLinksErrors, DeleteCodesByCodeIdVersionsByVersionLinksByTypeData, DeleteCodesByCodeIdVersionsByVersionLinksByTypeResponses, DeleteCodesByCodeIdVersionsByVersionLinksByTypeErrors, DeleteCodesByCodeIdVersionsLinksData, DeleteCodesByCodeIdVersionsLinksResponses, DeleteCodesByCodeIdVersionsLinksErrors, DeleteCodesByCodeIdVersionsLinksByTypeData, DeleteCodesByCodeIdVersionsLinksByTypeResponses, DeleteCodesByCodeIdVersionsLinksByTypeErrors, GetCodesByCodeIdByTypeData, GetCodesByCodeIdByTypeResponses, GetCodesByCodeIdByTypeErrors, GetCodesByCodeIdByTypeLinkData, GetCodesByCodeIdByTypeLinkResponses, GetCodesByCodeIdByTypeLinkErrors, DeleteCodesByCodeIdLinksData, DeleteCodesByCodeIdLinksResponses, DeleteCodesByCodeIdLinksErrors, DeleteCodesByCodeIdLinksByTypeData, DeleteCodesByCodeIdLinksByTypeResponses, DeleteCodesByCodeIdLinksByTypeErrors, GetTemplatesData, GetTemplatesResponses, GetTemplatesErrors, PostTemplatesData, PostTemplatesResponses, PostTemplatesErrors, GetTemplatesBaseData, GetTemplatesBaseResponses, GetTemplatesBaseErrors, DeleteTemplatesByTemplateIdData, DeleteTemplatesByTemplateIdResponses, DeleteTemplatesByTemplateIdErrors, GetTemplatesByTemplateIdData, GetTemplatesByTemplateIdResponses, GetTemplatesByTemplateIdErrors, PutTemplatesByTemplateIdData, PutTemplatesByTemplateIdResponses, PutTemplatesByTemplateIdErrors, PutTemplatesByTemplateIdOptionsData, PutTemplatesByTemplateIdOptionsResponses, PutTemplatesByTemplateIdOptionsErrors, GetTemplatesWorkspaceByWorkspaceIdData, GetTemplatesWorkspaceByWorkspaceIdResponses, GetTemplatesWorkspaceByWorkspaceIdErrors, GetStylesData, GetStylesResponses, GetStylesErrors, PostStylesData, PostStylesResponses, PostStylesErrors, GetStylesBaseData, GetStylesBaseResponses, GetStylesBaseErrors, DeleteStylesByStyleIdData, DeleteStylesByStyleIdResponses, DeleteStylesByStyleIdErrors, GetStylesByStyleIdData, GetStylesByStyleIdResponses, GetStylesByStyleIdErrors, PutStylesByStyleIdData, PutStylesByStyleIdResponses, PutStylesByStyleIdErrors, PutStylesByStyleIdOptionsData, PutStylesByStyleIdOptionsResponses, PutStylesByStyleIdOptionsErrors, GetStylesWorkspaceByWorkspaceIdData, GetStylesWorkspaceByWorkspaceIdResponses, GetStylesWorkspaceByWorkspaceIdErrors, GetTextsData, GetTextsResponses, GetTextsErrors, PostTextsData, PostTextsResponses, PostTextsErrors, GetTextsBaseData, GetTextsBaseResponses, GetTextsBaseErrors, DeleteTextsByTextIdData, DeleteTextsByTextIdResponses, DeleteTextsByTextIdErrors, GetTextsByTextIdData, GetTextsByTextIdResponses, GetTextsByTextIdErrors, PutTextsByTextIdData, PutTextsByTextIdResponses, PutTextsByTextIdErrors, PutTextsByTextIdOptionsData, PutTextsByTextIdOptionsResponses, PutTextsByTextIdOptionsErrors, GetTextsWorkspaceByWorkspaceIdData, GetTextsWorkspaceByWorkspaceIdResponses, GetTextsWorkspaceByWorkspaceIdErrors, GetBordersData, GetBordersResponses, GetBordersErrors, PostBordersData, PostBordersResponses, PostBordersErrors, GetBordersBaseData, GetBordersBaseResponses, GetBordersBaseErrors, DeleteBordersByBorderIdData, DeleteBordersByBorderIdResponses, DeleteBordersByBorderIdErrors, GetBordersByBorderIdData, GetBordersByBorderIdResponses, GetBordersByBorderIdErrors, PutBordersByBorderIdData, PutBordersByBorderIdResponses, PutBordersByBorderIdErrors, PutBordersByBorderIdOptionsData, PutBordersByBorderIdOptionsResponses, PutBordersByBorderIdOptionsErrors, GetBordersWorkspaceByWorkspaceIdData, GetBordersWorkspaceByWorkspaceIdResponses, GetBordersWorkspaceByWorkspaceIdErrors, GetCountryCodesData, GetCountryCodesResponses, GetRouterRuleTemplatesData, GetRouterRuleTemplatesResponses, GetRouterRuleTemplatesErrors, PostRouterRuleTemplatesData, PostRouterRuleTemplatesResponses, PostRouterRuleTemplatesErrors, DeleteRouterRuleTemplatesByRouterRuleTemplateIdData, DeleteRouterRuleTemplatesByRouterRuleTemplateIdResponses, DeleteRouterRuleTemplatesByRouterRuleTemplateIdErrors, GetRouterRuleTemplatesByRouterRuleTemplateIdData, GetRouterRuleTemplatesByRouterRuleTemplateIdResponses, GetRouterRuleTemplatesByRouterRuleTemplateIdErrors, PutRouterRuleTemplatesByRouterRuleTemplateIdData, PutRouterRuleTemplatesByRouterRuleTemplateIdResponses, PutRouterRuleTemplatesByRouterRuleTemplateIdErrors, GetRouterRulesData, GetRouterRulesResponses, GetRouterRulesErrors, GetWorkspacesByWorkspaceIdRouterRulesData, GetWorkspacesByWorkspaceIdRouterRulesResponses, GetWorkspacesByWorkspaceIdRouterRulesErrors, PostWorkspacesByWorkspaceIdRouterRuleTemplatesData, PostWorkspacesByWorkspaceIdRouterRuleTemplatesResponses, PostWorkspacesByWorkspaceIdRouterRuleTemplatesErrors } from './types.gen';
export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean> = ClientOptions<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};
/**
 * Register New User
 * Registers a new user and organization. Sends a verification code and token via email
 */
export declare const postAuthRegister: <ThrowOnError extends boolean = false>(options?: Options<PostAuthRegisterData, ThrowOnError>) => import("./client").RequestResult<PostAuthRegisterResponses, PostAuthRegisterErrors, ThrowOnError, "fields">;
/**
 * Verify Registration Code or Token
 * Verifies the 6-digit code or token sent via email after registration
 */
export declare const postAuthRegisterVerify: <ThrowOnError extends boolean = false>(options?: Options<PostAuthRegisterVerifyData, ThrowOnError>) => import("./client").RequestResult<PostAuthRegisterVerifyResponses, PostAuthRegisterVerifyErrors, ThrowOnError, "fields">;
/**
 * Resend Registration Verification Code and Token
 * Resends the 6-digit verification code or token to the user's email.
 */
export declare const postAuthRegisterVerifyResend: <ThrowOnError extends boolean = false>(options?: Options<PostAuthRegisterVerifyResendData, ThrowOnError>) => import("./client").RequestResult<PostAuthRegisterVerifyResendResponses, PostAuthRegisterVerifyResendErrors, ThrowOnError, "fields">;
/**
 * Sign In User
 * Initiates user sign-in. Returns an access token if password is provided and correct, otherwise indicates if passwordless verification is needed
 */
export declare const postAuthSignIn: <ThrowOnError extends boolean = false>(options?: Options<PostAuthSignInData, ThrowOnError>) => import("./client").RequestResult<PostAuthSignInResponses, PostAuthSignInErrors, ThrowOnError, "fields">;
/**
 * Verify Sign In Code or Token
 * Verifies the 6-digit code or token sent via email for passwordless sign-in
 */
export declare const postAuthSignInVerify: <ThrowOnError extends boolean = false>(options?: Options<PostAuthSignInVerifyData, ThrowOnError>) => import("./client").RequestResult<PostAuthSignInVerifyResponses, PostAuthSignInVerifyErrors, ThrowOnError, "fields">;
/**
 * Send Email Verification Code and Token
 * Sends a verification code and token to the user's email if it's not already verified.
 */
export declare const postAuthEmailVerifySend: <ThrowOnError extends boolean = false>(options?: Options<PostAuthEmailVerifySendData, ThrowOnError>) => import("./client").RequestResult<PostAuthEmailVerifySendResponses, PostAuthEmailVerifySendErrors, ThrowOnError, "fields">;
/**
 * Verify Email Address
 * Verifies the user's email address using the provided code or token.
 */
export declare const postAuthEmailVerify: <ThrowOnError extends boolean = false>(options?: Options<PostAuthEmailVerifyData, ThrowOnError>) => import("./client").RequestResult<PostAuthEmailVerifyResponses, PostAuthEmailVerifyErrors, ThrowOnError, "fields">;
/**
 * Get Current User
 * Retrieves the details of the currently authenticated user
 */
export declare const getAuthMe: <ThrowOnError extends boolean = false>(options?: Options<GetAuthMeData, ThrowOnError>) => import("./client").RequestResult<GetAuthMeResponses, GetAuthMeErrors, ThrowOnError, "fields">;
/**
 * Sign Out User
 * Signs out the current user by clearing relevant cookies/session data
 */
export declare const getAuthSignOut: <ThrowOnError extends boolean = false>(options?: Options<GetAuthSignOutData, ThrowOnError>) => import("./client").RequestResult<GetAuthSignOutResponses, GetAuthSignOutErrors, ThrowOnError, "fields">;
/**
 * Request Password Reset
 * Sends a password reset email with a verification token
 */
export declare const postAuthPasswordReset: <ThrowOnError extends boolean = false>(options?: Options<PostAuthPasswordResetData, ThrowOnError>) => import("./client").RequestResult<PostAuthPasswordResetResponses, PostAuthPasswordResetErrors, ThrowOnError, "fields">;
/**
 * Verify Password Reset
 * Verifies the password reset token and sets a new password
 */
export declare const postAuthPasswordResetVerify: <ThrowOnError extends boolean = false>(options?: Options<PostAuthPasswordResetVerifyData, ThrowOnError>) => import("./client").RequestResult<PostAuthPasswordResetVerifyResponses, PostAuthPasswordResetVerifyErrors, ThrowOnError, "fields">;
/**
 * Change Password
 * Changes the password for the authenticated user
 */
export declare const postAuthPasswordChange: <ThrowOnError extends boolean = false>(options?: Options<PostAuthPasswordChangeData, ThrowOnError>) => import("./client").RequestResult<PostAuthPasswordChangeResponses, PostAuthPasswordChangeErrors, ThrowOnError, "fields">;
/**
 * List API keys
 * Retrieves all API keys for the current organization.
 */
export declare const getApiKeys: <ThrowOnError extends boolean = false>(options?: Options<GetApiKeysData, ThrowOnError>) => import("./client").RequestResult<GetApiKeysResponses, GetApiKeysErrors, ThrowOnError, "fields">;
/**
 * Create API key
 * Creates a new API key for the current organization.
 */
export declare const postApiKeys: <ThrowOnError extends boolean = false>(options?: Options<PostApiKeysData, ThrowOnError>) => import("./client").RequestResult<PostApiKeysResponses, PostApiKeysErrors, ThrowOnError, "fields">;
/**
 * Delete API key
 * Deletes an API key by its ID.
 */
export declare const deleteApiKeysByApiKeyId: <ThrowOnError extends boolean = false>(options: Options<DeleteApiKeysByApiKeyIdData, ThrowOnError>) => import("./client").RequestResult<DeleteApiKeysByApiKeyIdResponses, DeleteApiKeysByApiKeyIdErrors, ThrowOnError, "fields">;
/**
 * Get API key details
 * Retrieves details of a specific API key by its ID.
 */
export declare const getApiKeysByApiKeyId: <ThrowOnError extends boolean = false>(options: Options<GetApiKeysByApiKeyIdData, ThrowOnError>) => import("./client").RequestResult<GetApiKeysByApiKeyIdResponses, GetApiKeysByApiKeyIdErrors, ThrowOnError, "fields">;
/**
 * Update API key
 * Updates an existing API key by its ID.
 */
export declare const putApiKeysByApiKeyId: <ThrowOnError extends boolean = false>(options: Options<PutApiKeysByApiKeyIdData, ThrowOnError>) => import("./client").RequestResult<PutApiKeysByApiKeyIdResponses, PutApiKeysByApiKeyIdErrors, ThrowOnError, "fields">;
/**
 * Change API key status
 * Changes the status of an API key (activate or disable).
 */
export declare const putApiKeysByApiKeyIdStatus: <ThrowOnError extends boolean = false>(options: Options<PutApiKeysByApiKeyIdStatusData, ThrowOnError>) => import("./client").RequestResult<PutApiKeysByApiKeyIdStatusResponses, PutApiKeysByApiKeyIdStatusErrors, ThrowOnError, "fields">;
/**
 * Get current organization
 * Retrieves details of the current active organization for the authenticated user.
 */
export declare const getOrgsCurrent: <ThrowOnError extends boolean = false>(options?: Options<GetOrgsCurrentData, ThrowOnError>) => import("./client").RequestResult<GetOrgsCurrentResponses, GetOrgsCurrentErrors, ThrowOnError, "fields">;
/**
 * Update current organization
 * Updates the details of the current active organization.
 */
export declare const putOrgs: <ThrowOnError extends boolean = false>(options?: Options<PutOrgsData, ThrowOnError>) => import("./client").RequestResult<PutOrgsResponses, PutOrgsErrors, ThrowOnError, "fields">;
/**
 * Create first organization
 * Creates the first organization for a new user. Only works when the user has no organizations.
 */
export declare const postOrgsFirst: <ThrowOnError extends boolean = false>(options?: Options<PostOrgsFirstData, ThrowOnError>) => import("./client").RequestResult<PostOrgsFirstResponses, PostOrgsFirstErrors, ThrowOnError, "fields">;
/**
 * Switch current organization
 * Switches the current active organization for the authenticated user.
 */
export declare const postOrgsCurrentByOrgId: <ThrowOnError extends boolean = false>(options: Options<PostOrgsCurrentByOrgIdData, ThrowOnError>) => import("./client").RequestResult<PostOrgsCurrentByOrgIdResponses, PostOrgsCurrentByOrgIdErrors, ThrowOnError, "fields">;
/**
 * List organization invitations
 * Retrieves all invitations for the current organization.
 */
export declare const getInvites: <ThrowOnError extends boolean = false>(options?: Options<GetInvitesData, ThrowOnError>) => import("./client").RequestResult<GetInvitesResponses, GetInvitesErrors, ThrowOnError, "fields">;
/**
 * Create invitation
 * Creates a new invitation to join the organization with a specified role.
 */
export declare const postInvites: <ThrowOnError extends boolean = false>(options?: Options<PostInvitesData, ThrowOnError>) => import("./client").RequestResult<PostInvitesResponses, PostInvitesErrors, ThrowOnError, "fields">;
/**
 * List my invitations
 * Retrieves all invitations sent by the current user.
 */
export declare const getInvitesMe: <ThrowOnError extends boolean = false>(options?: Options<GetInvitesMeData, ThrowOnError>) => import("./client").RequestResult<GetInvitesMeResponses, GetInvitesMeErrors, ThrowOnError, "fields">;
/**
 * Delete invitation
 * Deletes an invitation by its ID.
 */
export declare const deleteInvitesByInvitationId: <ThrowOnError extends boolean = false>(options: Options<DeleteInvitesByInvitationIdData, ThrowOnError>) => import("./client").RequestResult<DeleteInvitesByInvitationIdResponses, DeleteInvitesByInvitationIdErrors, ThrowOnError, "fields">;
/**
 * Accept invitation
 * Accepts an invitation using the provided token. Creates a user account if needed.
 */
export declare const getInvitesByTokenAccept: <ThrowOnError extends boolean = false>(options: Options<GetInvitesByTokenAcceptData, ThrowOnError>) => import("./client").RequestResult<GetInvitesByTokenAcceptResponses, GetInvitesByTokenAcceptErrors, ThrowOnError, "fields">;
/**
 * Decline invitation
 * Declines an invitation using the provided token.
 */
export declare const getInvitesByTokenDecline: <ThrowOnError extends boolean = false>(options: Options<GetInvitesByTokenDeclineData, ThrowOnError>) => import("./client").RequestResult<GetInvitesByTokenDeclineResponses, GetInvitesByTokenDeclineErrors, ThrowOnError, "fields">;
/**
 * List organization members
 * Retrieves all members of the current organization.
 */
export declare const getMembers: <ThrowOnError extends boolean = false>(options?: Options<GetMembersData, ThrowOnError>) => import("./client").RequestResult<GetMembersResponses, GetMembersErrors, ThrowOnError, "fields">;
/**
 * Add a member to organization
 * Adds a new member to the current organization with the specified role.
 */
export declare const postMembers: <ThrowOnError extends boolean = false>(options?: Options<PostMembersData, ThrowOnError>) => import("./client").RequestResult<PostMembersResponses, PostMembersErrors, ThrowOnError, "fields">;
/**
 * Remove member from organization
 * Removes a member from the current organization.
 */
export declare const deleteMembersByUserId: <ThrowOnError extends boolean = false>(options: Options<DeleteMembersByUserIdData, ThrowOnError>) => import("./client").RequestResult<DeleteMembersByUserIdResponses, DeleteMembersByUserIdErrors, ThrowOnError, "fields">;
/**
 * Get member roles
 * Retrieves all roles assigned to a member in the current organization.
 */
export declare const getMembersByUserIdRoles: <ThrowOnError extends boolean = false>(options: Options<GetMembersByUserIdRolesData, ThrowOnError>) => import("./client").RequestResult<GetMembersByUserIdRolesResponses, GetMembersByUserIdRolesErrors, ThrowOnError, "fields">;
/**
 * Add role to member
 * Assigns a new role to a member in the current organization.
 */
export declare const postMembersByUserIdRole: <ThrowOnError extends boolean = false>(options: Options<PostMembersByUserIdRoleData, ThrowOnError>) => import("./client").RequestResult<PostMembersByUserIdRoleResponses, PostMembersByUserIdRoleErrors, ThrowOnError, "fields">;
/**
 * Remove role from member
 * Removes a role from a member in the current organization.
 */
export declare const deleteMembersByUserIdRoleByRoleName: <ThrowOnError extends boolean = false>(options: Options<DeleteMembersByUserIdRoleByRoleNameData, ThrowOnError>) => import("./client").RequestResult<DeleteMembersByUserIdRoleByRoleNameResponses, DeleteMembersByUserIdRoleByRoleNameErrors, ThrowOnError, "fields">;
/**
 * List workspaces
 * Retrieves all workspaces for the current organization.
 */
export declare const getWorkspaces: <ThrowOnError extends boolean = false>(options?: Options<GetWorkspacesData, ThrowOnError>) => import("./client").RequestResult<GetWorkspacesResponses, GetWorkspacesErrors, ThrowOnError, "fields">;
/**
 * Create a new workspace
 * Creates a new workspace in the current organization.
 */
export declare const postWorkspaces: <ThrowOnError extends boolean = false>(options?: Options<PostWorkspacesData, ThrowOnError>) => import("./client").RequestResult<PostWorkspacesResponses, PostWorkspacesErrors, ThrowOnError, "fields">;
/**
 * Delete workspace
 * Deletes a workspace by its unique identifier.
 */
export declare const deleteWorkspacesByWorkspaceId: <ThrowOnError extends boolean = false>(options: Options<DeleteWorkspacesByWorkspaceIdData, ThrowOnError>) => import("./client").RequestResult<DeleteWorkspacesByWorkspaceIdResponses, DeleteWorkspacesByWorkspaceIdErrors, ThrowOnError, "fields">;
/**
 * Get workspace by ID
 * Retrieves a specific workspace by its unique identifier.
 */
export declare const getWorkspacesByWorkspaceId: <ThrowOnError extends boolean = false>(options: Options<GetWorkspacesByWorkspaceIdData, ThrowOnError>) => import("./client").RequestResult<GetWorkspacesByWorkspaceIdResponses, GetWorkspacesByWorkspaceIdErrors, ThrowOnError, "fields">;
/**
 * Update workspace
 * Updates an existing workspace by its unique identifier.
 */
export declare const putWorkspacesByWorkspaceId: <ThrowOnError extends boolean = false>(options: Options<PutWorkspacesByWorkspaceIdData, ThrowOnError>) => import("./client").RequestResult<PutWorkspacesByWorkspaceIdResponses, PutWorkspacesByWorkspaceIdErrors, ThrowOnError, "fields">;
/**
 * Remove role from workspace member
 * Removes a role from a user in a specific workspace.
 */
export declare const deleteWorkspacesByWorkspaceIdMembersByUserIdRole: <ThrowOnError extends boolean = false>(options: Options<DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleData, ThrowOnError>) => import("./client").RequestResult<DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleResponses, DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleErrors, ThrowOnError, "fields">;
/**
 * Get user roles in workspace
 * Retrieves the roles assigned to a specific user in a workspace.
 */
export declare const getWorkspacesByWorkspaceIdMembersByUserIdRole: <ThrowOnError extends boolean = false>(options: Options<GetWorkspacesByWorkspaceIdMembersByUserIdRoleData, ThrowOnError>) => import("./client").RequestResult<GetWorkspacesByWorkspaceIdMembersByUserIdRoleResponses, GetWorkspacesByWorkspaceIdMembersByUserIdRoleErrors, ThrowOnError, "fields">;
/**
 * Add role to workspace member
 * Assigns a role to a user in a specific workspace.
 */
export declare const postWorkspacesByWorkspaceIdMembersByUserIdRole: <ThrowOnError extends boolean = false>(options: Options<PostWorkspacesByWorkspaceIdMembersByUserIdRoleData, ThrowOnError>) => import("./client").RequestResult<PostWorkspacesByWorkspaceIdMembersByUserIdRoleResponses, PostWorkspacesByWorkspaceIdMembersByUserIdRoleErrors, ThrowOnError, "fields">;
/**
 * List workspace members
 * Retrieves all members in a specific workspace.
 */
export declare const getWorkspacesByWorkspaceIdMembers: <ThrowOnError extends boolean = false>(options: Options<GetWorkspacesByWorkspaceIdMembersData, ThrowOnError>) => import("./client").RequestResult<GetWorkspacesByWorkspaceIdMembersResponses, GetWorkspacesByWorkspaceIdMembersErrors, ThrowOnError, "fields">;
/**
 * List all roles
 * Retrieves all system roles with their associated permission scopes.
 */
export declare const getRoles: <ThrowOnError extends boolean = false>(options?: Options<GetRolesData, ThrowOnError>) => import("./client").RequestResult<GetRolesResponses, GetRolesErrors, ThrowOnError, "fields">;
/**
 * List available plans
 * Retrieves all available plans. If authenticated, the current plan will be marked.
 */
export declare const getPlans: <ThrowOnError extends boolean = false>(options?: Options<GetPlansData, ThrowOnError>) => import("./client").RequestResult<GetPlansResponses, GetPlansErrors, ThrowOnError, "fields">;
/**
 * Get current plan
 * Retrieves the current plan for the authenticated organization with usage details.
 */
export declare const getPlansCurrent: <ThrowOnError extends boolean = false>(options?: Options<GetPlansCurrentData, ThrowOnError>) => import("./client").RequestResult<GetPlansCurrentResponses, GetPlansCurrentErrors, ThrowOnError, "fields">;
/**
 * Get all organization settings
 * Retrieves all settings (custom and service) for the organization.
 */
export declare const getSettings: <ThrowOnError extends boolean = false>(options?: Options<GetSettingsData, ThrowOnError>) => import("./client").RequestResult<GetSettingsResponses, GetSettingsErrors, ThrowOnError, "fields">;
/**
 * Get all custom settings
 * Retrieves all custom settings for the organization.
 */
export declare const getSettingsCustom: <ThrowOnError extends boolean = false>(options?: Options<GetSettingsCustomData, ThrowOnError>) => import("./client").RequestResult<GetSettingsCustomResponses, GetSettingsCustomErrors, ThrowOnError, "fields">;
/**
 * Create custom setting
 * Creates a new custom setting for the organization.
 */
export declare const postSettingsCustom: <ThrowOnError extends boolean = false>(options?: Options<PostSettingsCustomData, ThrowOnError>) => import("./client").RequestResult<PostSettingsCustomResponses, PostSettingsCustomErrors, ThrowOnError, "fields">;
/**
 * Delete custom setting
 * Deletes a custom setting by its slug.
 */
export declare const deleteSettingsCustomBySettingSlug: <ThrowOnError extends boolean = false>(options: Options<DeleteSettingsCustomBySettingSlugData, ThrowOnError>) => import("./client").RequestResult<DeleteSettingsCustomBySettingSlugResponses, DeleteSettingsCustomBySettingSlugErrors, ThrowOnError, "fields">;
/**
 * Get custom setting by slug
 * Retrieves a specific custom setting by its slug.
 */
export declare const getSettingsCustomBySettingSlug: <ThrowOnError extends boolean = false>(options: Options<GetSettingsCustomBySettingSlugData, ThrowOnError>) => import("./client").RequestResult<GetSettingsCustomBySettingSlugResponses, GetSettingsCustomBySettingSlugErrors, ThrowOnError, "fields">;
/**
 * Update custom setting
 * Updates an existing custom setting by its slug.
 */
export declare const putSettingsCustomBySettingSlug: <ThrowOnError extends boolean = false>(options: Options<PutSettingsCustomBySettingSlugData, ThrowOnError>) => import("./client").RequestResult<PutSettingsCustomBySettingSlugResponses, PutSettingsCustomBySettingSlugErrors, ThrowOnError, "fields">;
/**
 * Get custom setting value
 * Retrieves only the value of a specific custom setting by its slug.
 */
export declare const getSettingsCustomBySettingSlugValue: <ThrowOnError extends boolean = false>(options: Options<GetSettingsCustomBySettingSlugValueData, ThrowOnError>) => import("./client").RequestResult<GetSettingsCustomBySettingSlugValueResponses, GetSettingsCustomBySettingSlugValueErrors, ThrowOnError, "fields">;
/**
 * Get all service settings
 * Retrieves all service settings for the organization.
 */
export declare const getSettingsService: <ThrowOnError extends boolean = false>(options?: Options<GetSettingsServiceData, ThrowOnError>) => import("./client").RequestResult<GetSettingsServiceResponses, GetSettingsServiceErrors, ThrowOnError, "fields">;
/**
 * Get service setting by slug
 * Retrieves a specific service setting by its slug.
 */
export declare const getSettingsServiceBySettingSlug: <ThrowOnError extends boolean = false>(options: Options<GetSettingsServiceBySettingSlugData, ThrowOnError>) => import("./client").RequestResult<GetSettingsServiceBySettingSlugResponses, GetSettingsServiceBySettingSlugErrors, ThrowOnError, "fields">;
/**
 * Upsert service setting
 * Updates an existing service setting or creates it if it does not exist.
 */
export declare const putSettingsServiceBySettingSlug: <ThrowOnError extends boolean = false>(options: Options<PutSettingsServiceBySettingSlugData, ThrowOnError>) => import("./client").RequestResult<PutSettingsServiceBySettingSlugResponses, PutSettingsServiceBySettingSlugErrors, ThrowOnError, "fields">;
/**
 * Get service setting value
 * Retrieves only the value of a specific service setting by its slug.
 */
export declare const getSettingsServiceBySettingSlugValue: <ThrowOnError extends boolean = false>(options: Options<GetSettingsServiceBySettingSlugValueData, ThrowOnError>) => import("./client").RequestResult<GetSettingsServiceBySettingSlugValueResponses, GetSettingsServiceBySettingSlugValueErrors, ThrowOnError, "fields">;
/**
 * Get all workspace settings
 * Retrieves all settings (custom and service) for the workspace.
 */
export declare const getWorkspacesByWorkspaceIdSettings: <ThrowOnError extends boolean = false>(options: Options<GetWorkspacesByWorkspaceIdSettingsData, ThrowOnError>) => import("./client").RequestResult<GetWorkspacesByWorkspaceIdSettingsResponses, GetWorkspacesByWorkspaceIdSettingsErrors, ThrowOnError, "fields">;
/**
 * Get all workspace custom settings
 * Retrieves all custom settings for the workspace.
 */
export declare const getWorkspacesByWorkspaceIdSettingsCustom: <ThrowOnError extends boolean = false>(options: Options<GetWorkspacesByWorkspaceIdSettingsCustomData, ThrowOnError>) => import("./client").RequestResult<GetWorkspacesByWorkspaceIdSettingsCustomResponses, GetWorkspacesByWorkspaceIdSettingsCustomErrors, ThrowOnError, "fields">;
/**
 * Create workspace custom setting
 * Creates a new custom setting for the workspace.
 */
export declare const postWorkspacesByWorkspaceIdSettingsCustom: <ThrowOnError extends boolean = false>(options: Options<PostWorkspacesByWorkspaceIdSettingsCustomData, ThrowOnError>) => import("./client").RequestResult<PostWorkspacesByWorkspaceIdSettingsCustomResponses, PostWorkspacesByWorkspaceIdSettingsCustomErrors, ThrowOnError, "fields">;
/**
 * Delete workspace custom setting
 * Deletes a workspace custom setting by its slug.
 */
export declare const deleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlug: <ThrowOnError extends boolean = false>(options: Options<DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData, ThrowOnError>) => import("./client").RequestResult<DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponses, DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugErrors, ThrowOnError, "fields">;
/**
 * Get workspace custom setting by slug
 * Retrieves a specific workspace custom setting by its slug.
 */
export declare const getWorkspacesByWorkspaceIdSettingsCustomBySettingSlug: <ThrowOnError extends boolean = false>(options: Options<GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData, ThrowOnError>) => import("./client").RequestResult<GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponses, GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugErrors, ThrowOnError, "fields">;
/**
 * Update workspace custom setting
 * Updates an existing workspace custom setting by its slug.
 */
export declare const putWorkspacesByWorkspaceIdSettingsCustomBySettingSlug: <ThrowOnError extends boolean = false>(options: Options<PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData, ThrowOnError>) => import("./client").RequestResult<PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponses, PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugErrors, ThrowOnError, "fields">;
/**
 * Get workspace custom setting value
 * Retrieves only the value of a specific workspace custom setting by its slug.
 */
export declare const getWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValue: <ThrowOnError extends boolean = false>(options: Options<GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueData, ThrowOnError>) => import("./client").RequestResult<GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueResponses, GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueErrors, ThrowOnError, "fields">;
/**
 * Get all workspace service settings
 * Retrieves all service settings for the workspace.
 */
export declare const getWorkspacesByWorkspaceIdSettingsService: <ThrowOnError extends boolean = false>(options: Options<GetWorkspacesByWorkspaceIdSettingsServiceData, ThrowOnError>) => import("./client").RequestResult<GetWorkspacesByWorkspaceIdSettingsServiceResponses, GetWorkspacesByWorkspaceIdSettingsServiceErrors, ThrowOnError, "fields">;
/**
 * Delete workspace service setting override
 * Deletes a workspace-level override for a service setting, reverting to organization defaults.
 */
export declare const deleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlug: <ThrowOnError extends boolean = false>(options: Options<DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData, ThrowOnError>) => import("./client").RequestResult<DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponses, DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugErrors, ThrowOnError, "fields">;
/**
 * Get workspace service setting by slug
 * Retrieves a specific workspace service setting by its slug.
 */
export declare const getWorkspacesByWorkspaceIdSettingsServiceBySettingSlug: <ThrowOnError extends boolean = false>(options: Options<GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData, ThrowOnError>) => import("./client").RequestResult<GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponses, GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugErrors, ThrowOnError, "fields">;
/**
 * Upsert workspace service setting
 * Updates an existing workspace service setting or creates it if it does not exist.
 */
export declare const putWorkspacesByWorkspaceIdSettingsServiceBySettingSlug: <ThrowOnError extends boolean = false>(options: Options<PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData, ThrowOnError>) => import("./client").RequestResult<PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponses, PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugErrors, ThrowOnError, "fields">;
/**
 * Get workspace service setting value
 * Retrieves only the value of a specific workspace service setting by its slug.
 */
export declare const getWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValue: <ThrowOnError extends boolean = false>(options: Options<GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueData, ThrowOnError>) => import("./client").RequestResult<GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueResponses, GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueErrors, ThrowOnError, "fields">;
/**
 * List QR Code Scans
 * Retrieves a paginated list of scans for a specific QR Code with optional filtering
 */
export declare const getCodesByCodeIdScans: <ThrowOnError extends boolean = false>(options: Options<GetCodesByCodeIdScansData, ThrowOnError>) => import("./client").RequestResult<GetCodesByCodeIdScansResponses, GetCodesByCodeIdScansErrors, ThrowOnError, "fields">;
/**
 * List Router Rule Assignments
 * Retrieves all router rule assignments for a specific QR code with pagination and filtering options. Returns rules sorted by priority (highest first) with enriched template data.
 */
export declare const getCodesByCodeIdRouterRules: <ThrowOnError extends boolean = false>(options: Options<GetCodesByCodeIdRouterRulesData, ThrowOnError>) => import("./client").RequestResult<GetCodesByCodeIdRouterRulesResponses, GetCodesByCodeIdRouterRulesErrors, ThrowOnError, "fields">;
/**
 * Create Router Rule Assignment
 * Assigns a router rule to a QR code. You can reference an existing template by ID/name or create an inline custom rule. Rules with the same priority are evaluated in creation order. Scan limits and loop functionality are supported.
 */
export declare const postCodesByCodeIdRouterRules: <ThrowOnError extends boolean = false>(options: Options<PostCodesByCodeIdRouterRulesData, ThrowOnError>) => import("./client").RequestResult<PostCodesByCodeIdRouterRulesResponses, PostCodesByCodeIdRouterRulesErrors, ThrowOnError, "fields">;
/**
 * Delete Router Rule Assignment
 * Deletes a router rule assignment. Rules that have been used (totalScans > 0) cannot be deleted to preserve analytics data. Consider disabling the rule instead.
 */
export declare const deleteCodesByCodeIdRouterRulesByRouterRuleId: <ThrowOnError extends boolean = false>(options: Options<DeleteCodesByCodeIdRouterRulesByRouterRuleIdData, ThrowOnError>) => import("./client").RequestResult<DeleteCodesByCodeIdRouterRulesByRouterRuleIdResponses, DeleteCodesByCodeIdRouterRulesByRouterRuleIdErrors, ThrowOnError, "fields">;
/**
 * Get Router Rule Assignment
 * Retrieves a specific router rule assignment for a QR code. Returns the rule with enriched template data, usage statistics, and audit information.
 */
export declare const getCodesByCodeIdRouterRulesByRouterRuleId: <ThrowOnError extends boolean = false>(options: Options<GetCodesByCodeIdRouterRulesByRouterRuleIdData, ThrowOnError>) => import("./client").RequestResult<GetCodesByCodeIdRouterRulesByRouterRuleIdResponses, GetCodesByCodeIdRouterRulesByRouterRuleIdErrors, ThrowOnError, "fields">;
/**
 * Update Router Rule Assignment
 * Updates a router rule assignment. You can change the rule source (template vs inline), priority, data configuration, and other settings. Validation is context-aware and will validate dynamicData against the existing or provided dataType. Priority conflicts are checked.
 */
export declare const putCodesByCodeIdRouterRulesByRouterRuleId: <ThrowOnError extends boolean = false>(options: Options<PutCodesByCodeIdRouterRulesByRouterRuleIdData, ThrowOnError>) => import("./client").RequestResult<PutCodesByCodeIdRouterRulesByRouterRuleIdResponses, PutCodesByCodeIdRouterRulesByRouterRuleIdErrors, ThrowOnError, "fields">;
/**
 * List Soft Deleted QR Codes
 * Retrieves a paginated list of soft deleted QR Codes with optional filtering
 */
export declare const getCodesDeleted: <ThrowOnError extends boolean = false>(options?: Options<GetCodesDeletedData, ThrowOnError>) => import("./client").RequestResult<GetCodesDeletedResponses, GetCodesDeletedErrors, ThrowOnError, "fields">;
/**
 * List QR Code Links
 * Retrieves a paginated list of all QR Code links with optional filtering
 */
export declare const getCodesLinks: <ThrowOnError extends boolean = false>(options?: Options<GetCodesLinksData, ThrowOnError>) => import("./client").RequestResult<GetCodesLinksResponses, GetCodesLinksErrors, ThrowOnError, "fields">;
/**
 * Soft Delete QR Code
 * Marks a QR Code as deleted without permanently removing it from the system. Usage limits are not affected and the code can potentially be restored.
 */
export declare const deleteCodesByCodeId: <ThrowOnError extends boolean = false>(options: Options<DeleteCodesByCodeIdData, ThrowOnError>) => import("./client").RequestResult<DeleteCodesByCodeIdResponses, DeleteCodesByCodeIdErrors, ThrowOnError, "fields">;
/**
 * Get QR Code
 * Retrieves a QR Code by its unique identifier
 */
export declare const getCodesByCodeId: <ThrowOnError extends boolean = false>(options: Options<GetCodesByCodeIdData, ThrowOnError>) => import("./client").RequestResult<GetCodesByCodeIdResponses, GetCodesByCodeIdErrors, ThrowOnError, "fields">;
/**
 * Update QR Code
 * Updates an existing QR Code with new data and options. Supports changing dataType for dynamic codes (e.g., from URL to WiFi configuration). When changing dataType, ensure metadata structure matches the new dataType requirements. This operation creates a new version of the QR code.
 */
export declare const putCodesByCodeId: <ThrowOnError extends boolean = false>(options: Options<PutCodesByCodeIdData, ThrowOnError>) => import("./client").RequestResult<PutCodesByCodeIdResponses, PutCodesByCodeIdErrors, ThrowOnError, "fields">;
/**
 * Bulk Soft Delete QR Codes
 * Soft deletes multiple QR codes by their IDs. The codes are marked as deleted but not permanently removed from the system.
 */
export declare const deleteCodes: <ThrowOnError extends boolean = false>(options?: Options<DeleteCodesData, ThrowOnError>) => import("./client").RequestResult<DeleteCodesResponses, DeleteCodesErrors, ThrowOnError, "fields">;
/**
 * List QR Codes
 * Retrieves a paginated list of QR Codes with optional filtering
 */
export declare const getCodes: <ThrowOnError extends boolean = false>(options?: Options<GetCodesData, ThrowOnError>) => import("./client").RequestResult<GetCodesResponses, GetCodesErrors, ThrowOnError, "fields">;
/**
 * Create QR Code
 * Creates a new QR Code with the specified data and options. Supports different dataTypes for dynamic codes including WiFi configuration, contact cards (vCard), plain text, email composition, calendar events, file downloads, and custom JSON data. Each dataType has specific metadata requirements that determine how the QR code is processed when scanned.
 */
export declare const postCodes: <ThrowOnError extends boolean = false>(options?: Options<PostCodesData, ThrowOnError>) => import("./client").RequestResult<PostCodesResponses, PostCodesErrors, ThrowOnError, "fields">;
/**
 * Partially update QR Code Options
 * Partially updates an existing QR Code's options using a deep merge. This will create a new version of the QR Code. Supports updating dataType for dynamic codes, which changes how the QR code content is processed when scanned (e.g., returning WiFi configuration instead of URL redirect).
 */
export declare const putCodesByCodeIdOptions: <ThrowOnError extends boolean = false>(options: Options<PutCodesByCodeIdOptionsData, ThrowOnError>) => import("./client").RequestResult<PutCodesByCodeIdOptionsResponses, PutCodesByCodeIdOptionsErrors, ThrowOnError, "fields">;
/**
 * Bulk Permanent Delete QR Codes
 * Permanently deletes multiple QR codes by their IDs. This operation is irreversible and will remove all associated data including versions, files, and scans.
 */
export declare const deleteCodesPermanent: <ThrowOnError extends boolean = false>(options?: Options<DeleteCodesPermanentData, ThrowOnError>) => import("./client").RequestResult<DeleteCodesPermanentResponses, DeleteCodesPermanentErrors, ThrowOnError, "fields">;
/**
 * Delete QR Code
 * Deletes a QR Code by its unique identifier
 */
export declare const deleteCodesByCodeIdPermanent: <ThrowOnError extends boolean = false>(options: Options<DeleteCodesByCodeIdPermanentData, ThrowOnError>) => import("./client").RequestResult<DeleteCodesByCodeIdPermanentResponses, DeleteCodesByCodeIdPermanentErrors, ThrowOnError, "fields">;
/**
 * Restore QR Code
 * Restores a soft-deleted QR Code by setting its deleted status to false. The code becomes active again and accessible through regular endpoints.
 */
export declare const postCodesByCodeIdRestore: <ThrowOnError extends boolean = false>(options: Options<PostCodesByCodeIdRestoreData, ThrowOnError>) => import("./client").RequestResult<PostCodesByCodeIdRestoreResponses, PostCodesByCodeIdRestoreErrors, ThrowOnError, "fields">;
/**
 * Bulk Get QR Codes by ID List
 * Retrieves multiple QR codes by their IDs in a single request with access control and detailed error reporting.
 */
export declare const postCodesBulkGet: <ThrowOnError extends boolean = false>(options?: Options<PostCodesBulkGetData, ThrowOnError>) => import("./client").RequestResult<PostCodesBulkGetResponses, PostCodesBulkGetErrors, ThrowOnError, "fields">;
/**
 * Generate QR Code File Content
 * Generates a file content for a QR Code
 */
export declare const postCodesGenerateByType: <ThrowOnError extends boolean = false>(options: Options<PostCodesGenerateByTypeData, ThrowOnError>) => import("./client").RequestResult<PostCodesGenerateByTypeResponses, PostCodesGenerateByTypeErrors, ThrowOnError, "fields">;
/**
 * Validate QR Code Options
 * Validates QR Code styling options without generating or saving the QR Code
 */
export declare const postCodesValidate: <ThrowOnError extends boolean = false>(options?: Options<PostCodesValidateData, ThrowOnError>) => import("./client").RequestResult<PostCodesValidateResponses, PostCodesValidateErrors, ThrowOnError, "fields">;
/**
 * Validate Existing QR Code
 * Validates an existing QR Code and updates its validation status in the database
 */
export declare const postCodesByCodeIdValidate: <ThrowOnError extends boolean = false>(options: Options<PostCodesByCodeIdValidateData, ThrowOnError>) => import("./client").RequestResult<PostCodesByCodeIdValidateResponses, PostCodesByCodeIdValidateErrors, ThrowOnError, "fields">;
/**
 * Bulk Refresh QR Code Links
 * Refreshes QR code links/files for all code versions matching the specified design element filters
 */
export declare const postCodesLinksRefresh: <ThrowOnError extends boolean = false>(options?: Options<PostCodesLinksRefreshData, ThrowOnError>) => import("./client").RequestResult<PostCodesLinksRefreshResponses, PostCodesLinksRefreshErrors, ThrowOnError, "fields">;
/**
 * Get QR Code version
 * Retrieves a specific version of a QR Code by ID and version number
 */
export declare const getCodesByCodeIdVersionByVersion: <ThrowOnError extends boolean = false>(options: Options<GetCodesByCodeIdVersionByVersionData, ThrowOnError>) => import("./client").RequestResult<GetCodesByCodeIdVersionByVersionResponses, GetCodesByCodeIdVersionByVersionErrors, ThrowOnError, "fields">;
/**
 * Delete All QR Code Versions
 * Deletes all versions of a QR Code except the current one
 */
export declare const deleteCodesByCodeIdVersions: <ThrowOnError extends boolean = false>(options: Options<DeleteCodesByCodeIdVersionsData, ThrowOnError>) => import("./client").RequestResult<DeleteCodesByCodeIdVersionsResponses, DeleteCodesByCodeIdVersionsErrors, ThrowOnError, "fields">;
/**
 * List QR Code versions
 * Retrieves all versions of a QR Code by its unique identifier
 */
export declare const getCodesByCodeIdVersions: <ThrowOnError extends boolean = false>(options: Options<GetCodesByCodeIdVersionsData, ThrowOnError>) => import("./client").RequestResult<GetCodesByCodeIdVersionsResponses, GetCodesByCodeIdVersionsErrors, ThrowOnError, "fields">;
/**
 * Restore QR Code Version
 * Restores a specific version of a QR Code as the current version
 */
export declare const postCodesByCodeIdVersionByVersionRestore: <ThrowOnError extends boolean = false>(options: Options<PostCodesByCodeIdVersionByVersionRestoreData, ThrowOnError>) => import("./client").RequestResult<PostCodesByCodeIdVersionByVersionRestoreResponses, PostCodesByCodeIdVersionByVersionRestoreErrors, ThrowOnError, "fields">;
/**
 * Get QR Code Version File Content
 * Retrieves the file content of a specific QR Code version
 */
export declare const getCodesByCodeIdVersionByVersionByType: <ThrowOnError extends boolean = false>(options: Options<GetCodesByCodeIdVersionByVersionByTypeData, ThrowOnError>) => import("./client").RequestResult<GetCodesByCodeIdVersionByVersionByTypeResponses, GetCodesByCodeIdVersionByVersionByTypeErrors, ThrowOnError, "fields">;
/**
 * Get QR Code Version Link
 * Retrieves a link to the file representation of a specific QR Code version
 */
export declare const getCodesByCodeIdVersionByVersionByTypeLink: <ThrowOnError extends boolean = false>(options: Options<GetCodesByCodeIdVersionByVersionByTypeLinkData, ThrowOnError>) => import("./client").RequestResult<GetCodesByCodeIdVersionByVersionByTypeLinkResponses, GetCodesByCodeIdVersionByVersionByTypeLinkErrors, ThrowOnError, "fields">;
/**
 * Delete QR Code version links
 * Deletes all QR Code version links for a specific version of a QR Code
 */
export declare const deleteCodesByCodeIdVersionsByVersionLinks: <ThrowOnError extends boolean = false>(options: Options<DeleteCodesByCodeIdVersionsByVersionLinksData, ThrowOnError>) => import("./client").RequestResult<DeleteCodesByCodeIdVersionsByVersionLinksResponses, DeleteCodesByCodeIdVersionsByVersionLinksErrors, ThrowOnError, "fields">;
/**
 * Delete QR Code version link by Type
 * Deletes a specific QR Code version link for a specific version of a QR Code
 */
export declare const deleteCodesByCodeIdVersionsByVersionLinksByType: <ThrowOnError extends boolean = false>(options: Options<DeleteCodesByCodeIdVersionsByVersionLinksByTypeData, ThrowOnError>) => import("./client").RequestResult<DeleteCodesByCodeIdVersionsByVersionLinksByTypeResponses, DeleteCodesByCodeIdVersionsByVersionLinksByTypeErrors, ThrowOnError, "fields">;
/**
 * Delete All QR Code Versions Links
 * Deletes all file links for all versions of a QR Code
 */
export declare const deleteCodesByCodeIdVersionsLinks: <ThrowOnError extends boolean = false>(options: Options<DeleteCodesByCodeIdVersionsLinksData, ThrowOnError>) => import("./client").RequestResult<DeleteCodesByCodeIdVersionsLinksResponses, DeleteCodesByCodeIdVersionsLinksErrors, ThrowOnError, "fields">;
/**
 * Delete All QR Code Versions Links by Type
 * Deletes a specific file type link for all versions of a QR Code
 */
export declare const deleteCodesByCodeIdVersionsLinksByType: <ThrowOnError extends boolean = false>(options: Options<DeleteCodesByCodeIdVersionsLinksByTypeData, ThrowOnError>) => import("./client").RequestResult<DeleteCodesByCodeIdVersionsLinksByTypeResponses, DeleteCodesByCodeIdVersionsLinksByTypeErrors, ThrowOnError, "fields">;
/**
 * Get QR Code File Content (SVG, PNG, PDF)
 * Retrieves the SVG, PNG, or PDF representation of a QR Code
 */
export declare const getCodesByCodeIdByType: <ThrowOnError extends boolean = false>(options: Options<GetCodesByCodeIdByTypeData, ThrowOnError>) => import("./client").RequestResult<GetCodesByCodeIdByTypeResponses, GetCodesByCodeIdByTypeErrors, ThrowOnError, "fields">;
/**
 * Get QR Code link
 * Retrieves a link to the SVG, PNG, or PDF representation of a QR Code
 */
export declare const getCodesByCodeIdByTypeLink: <ThrowOnError extends boolean = false>(options: Options<GetCodesByCodeIdByTypeLinkData, ThrowOnError>) => import("./client").RequestResult<GetCodesByCodeIdByTypeLinkResponses, GetCodesByCodeIdByTypeLinkErrors, ThrowOnError, "fields">;
/**
 * Delete QR Code links
 * Deletes all links for the current version of a QR Code
 */
export declare const deleteCodesByCodeIdLinks: <ThrowOnError extends boolean = false>(options: Options<DeleteCodesByCodeIdLinksData, ThrowOnError>) => import("./client").RequestResult<DeleteCodesByCodeIdLinksResponses, DeleteCodesByCodeIdLinksErrors, ThrowOnError, "fields">;
/**
 * Delete QR Code link by Type
 * Deletes a specific file type link for the current version of a QR Code
 */
export declare const deleteCodesByCodeIdLinksByType: <ThrowOnError extends boolean = false>(options: Options<DeleteCodesByCodeIdLinksByTypeData, ThrowOnError>) => import("./client").RequestResult<DeleteCodesByCodeIdLinksByTypeResponses, DeleteCodesByCodeIdLinksByTypeErrors, ThrowOnError, "fields">;
/**
 * List all templates
 * Retrieves all templates available to the user, grouped by organization and workspace.
 */
export declare const getTemplates: <ThrowOnError extends boolean = false>(options?: Options<GetTemplatesData, ThrowOnError>) => import("./client").RequestResult<GetTemplatesResponses, GetTemplatesErrors, ThrowOnError, "fields">;
/**
 * Create a new template
 * Creates a new QR code template for an organization or workspace.
 */
export declare const postTemplates: <ThrowOnError extends boolean = false>(options?: Options<PostTemplatesData, ThrowOnError>) => import("./client").RequestResult<PostTemplatesResponses, PostTemplatesErrors, ThrowOnError, "fields">;
/**
 * List base templates
 * Retrieves all base templates from the QRCodeJs library with optional name filtering.
 */
export declare const getTemplatesBase: <ThrowOnError extends boolean = false>(options?: Options<GetTemplatesBaseData, ThrowOnError>) => import("./client").RequestResult<GetTemplatesBaseResponses, GetTemplatesBaseErrors, ThrowOnError, "fields">;
/**
 * Delete template by ID
 * Deletes a template by its unique identifier. Fails if the template is used by codes.
 */
export declare const deleteTemplatesByTemplateId: <ThrowOnError extends boolean = false>(options: Options<DeleteTemplatesByTemplateIdData, ThrowOnError>) => import("./client").RequestResult<DeleteTemplatesByTemplateIdResponses, DeleteTemplatesByTemplateIdErrors, ThrowOnError, "fields">;
/**
 * Get template by ID
 * Retrieves a template by its unique identifier.
 */
export declare const getTemplatesByTemplateId: <ThrowOnError extends boolean = false>(options: Options<GetTemplatesByTemplateIdData, ThrowOnError>) => import("./client").RequestResult<GetTemplatesByTemplateIdResponses, GetTemplatesByTemplateIdErrors, ThrowOnError, "fields">;
/**
 * Update template by ID
 * Updates a template by its unique identifier.
 */
export declare const putTemplatesByTemplateId: <ThrowOnError extends boolean = false>(options: Options<PutTemplatesByTemplateIdData, ThrowOnError>) => import("./client").RequestResult<PutTemplatesByTemplateIdResponses, PutTemplatesByTemplateIdErrors, ThrowOnError, "fields">;
/**
 * Partially update template options by ID
 * Partially updates a template options by its unique identifier using a deep merge. Use null to delete a field.
 */
export declare const putTemplatesByTemplateIdOptions: <ThrowOnError extends boolean = false>(options: Options<PutTemplatesByTemplateIdOptionsData, ThrowOnError>) => import("./client").RequestResult<PutTemplatesByTemplateIdOptionsResponses, PutTemplatesByTemplateIdOptionsErrors, ThrowOnError, "fields">;
/**
 * List templates for a workspace
 * Retrieves all templates for a specific workspace.
 */
export declare const getTemplatesWorkspaceByWorkspaceId: <ThrowOnError extends boolean = false>(options: Options<GetTemplatesWorkspaceByWorkspaceIdData, ThrowOnError>) => import("./client").RequestResult<GetTemplatesWorkspaceByWorkspaceIdResponses, GetTemplatesWorkspaceByWorkspaceIdErrors, ThrowOnError, "fields">;
/**
 * List all styles
 * Retrieves all styles available to the user.
 */
export declare const getStyles: <ThrowOnError extends boolean = false>(options?: Options<GetStylesData, ThrowOnError>) => import("./client").RequestResult<GetStylesResponses, GetStylesErrors, ThrowOnError, "fields">;
/**
 * Create a new style
 * Creates a new style for an organization or workspace.
 */
export declare const postStyles: <ThrowOnError extends boolean = false>(options?: Options<PostStylesData, ThrowOnError>) => import("./client").RequestResult<PostStylesResponses, PostStylesErrors, ThrowOnError, "fields">;
/**
 * List base styles
 * Retrieves all base styles from the QRCodeJs library with optional name filtering.
 */
export declare const getStylesBase: <ThrowOnError extends boolean = false>(options?: Options<GetStylesBaseData, ThrowOnError>) => import("./client").RequestResult<GetStylesBaseResponses, GetStylesBaseErrors, ThrowOnError, "fields">;
/**
 * Delete style by ID
 * Deletes a style by its unique identifier. Fails if the style is used by codes.
 */
export declare const deleteStylesByStyleId: <ThrowOnError extends boolean = false>(options: Options<DeleteStylesByStyleIdData, ThrowOnError>) => import("./client").RequestResult<DeleteStylesByStyleIdResponses, DeleteStylesByStyleIdErrors, ThrowOnError, "fields">;
/**
 * Get style by ID
 * Retrieves a style by its unique identifier.
 */
export declare const getStylesByStyleId: <ThrowOnError extends boolean = false>(options: Options<GetStylesByStyleIdData, ThrowOnError>) => import("./client").RequestResult<GetStylesByStyleIdResponses, GetStylesByStyleIdErrors, ThrowOnError, "fields">;
/**
 * Update style by ID
 * Updates a style by its unique identifier.
 */
export declare const putStylesByStyleId: <ThrowOnError extends boolean = false>(options: Options<PutStylesByStyleIdData, ThrowOnError>) => import("./client").RequestResult<PutStylesByStyleIdResponses, PutStylesByStyleIdErrors, ThrowOnError, "fields">;
/**
 * Partially update style options by ID
 * Partially updates a style options by its unique identifier using a deep merge. Use null to delete a field.
 */
export declare const putStylesByStyleIdOptions: <ThrowOnError extends boolean = false>(options: Options<PutStylesByStyleIdOptionsData, ThrowOnError>) => import("./client").RequestResult<PutStylesByStyleIdOptionsResponses, PutStylesByStyleIdOptionsErrors, ThrowOnError, "fields">;
/**
 * List styles for a workspace
 * Retrieves all styles for a specific workspace.
 */
export declare const getStylesWorkspaceByWorkspaceId: <ThrowOnError extends boolean = false>(options: Options<GetStylesWorkspaceByWorkspaceIdData, ThrowOnError>) => import("./client").RequestResult<GetStylesWorkspaceByWorkspaceIdResponses, GetStylesWorkspaceByWorkspaceIdErrors, ThrowOnError, "fields">;
/**
 * List all texts
 * Retrieves all texts available to the user.
 */
export declare const getTexts: <ThrowOnError extends boolean = false>(options?: Options<GetTextsData, ThrowOnError>) => import("./client").RequestResult<GetTextsResponses, GetTextsErrors, ThrowOnError, "fields">;
/**
 * Create a new text
 * Creates a new text for an organization or workspace.
 */
export declare const postTexts: <ThrowOnError extends boolean = false>(options?: Options<PostTextsData, ThrowOnError>) => import("./client").RequestResult<PostTextsResponses, PostTextsErrors, ThrowOnError, "fields">;
/**
 * List base texts
 * Retrieves all base text templates from the QRCodeJs library with optional name filtering.
 */
export declare const getTextsBase: <ThrowOnError extends boolean = false>(options?: Options<GetTextsBaseData, ThrowOnError>) => import("./client").RequestResult<GetTextsBaseResponses, GetTextsBaseErrors, ThrowOnError, "fields">;
/**
 * Delete text by ID
 * Deletes a text by its unique identifier. Fails if the text is used by codes.
 */
export declare const deleteTextsByTextId: <ThrowOnError extends boolean = false>(options: Options<DeleteTextsByTextIdData, ThrowOnError>) => import("./client").RequestResult<DeleteTextsByTextIdResponses, DeleteTextsByTextIdErrors, ThrowOnError, "fields">;
/**
 * Get text by ID
 * Retrieves a text by its unique identifier.
 */
export declare const getTextsByTextId: <ThrowOnError extends boolean = false>(options: Options<GetTextsByTextIdData, ThrowOnError>) => import("./client").RequestResult<GetTextsByTextIdResponses, GetTextsByTextIdErrors, ThrowOnError, "fields">;
/**
 * Update text by ID
 * Updates a text by its unique identifier.
 */
export declare const putTextsByTextId: <ThrowOnError extends boolean = false>(options: Options<PutTextsByTextIdData, ThrowOnError>) => import("./client").RequestResult<PutTextsByTextIdResponses, PutTextsByTextIdErrors, ThrowOnError, "fields">;
/**
 * Partially update text options by ID
 * Partially updates a text options by its unique identifier using a deep merge. Use null to delete a field.
 */
export declare const putTextsByTextIdOptions: <ThrowOnError extends boolean = false>(options: Options<PutTextsByTextIdOptionsData, ThrowOnError>) => import("./client").RequestResult<PutTextsByTextIdOptionsResponses, PutTextsByTextIdOptionsErrors, ThrowOnError, "fields">;
/**
 * List texts for a workspace
 * Retrieves all texts for a specific workspace.
 */
export declare const getTextsWorkspaceByWorkspaceId: <ThrowOnError extends boolean = false>(options: Options<GetTextsWorkspaceByWorkspaceIdData, ThrowOnError>) => import("./client").RequestResult<GetTextsWorkspaceByWorkspaceIdResponses, GetTextsWorkspaceByWorkspaceIdErrors, ThrowOnError, "fields">;
/**
 * List all borders
 * Retrieves all borders available to the user.
 */
export declare const getBorders: <ThrowOnError extends boolean = false>(options?: Options<GetBordersData, ThrowOnError>) => import("./client").RequestResult<GetBordersResponses, GetBordersErrors, ThrowOnError, "fields">;
/**
 * Create a new border
 * Creates a new border for an organization or workspace.
 */
export declare const postBorders: <ThrowOnError extends boolean = false>(options?: Options<PostBordersData, ThrowOnError>) => import("./client").RequestResult<PostBordersResponses, PostBordersErrors, ThrowOnError, "fields">;
/**
 * List base borders
 * Retrieves all base border templates from the QRCodeJs library with optional name filtering.
 */
export declare const getBordersBase: <ThrowOnError extends boolean = false>(options?: Options<GetBordersBaseData, ThrowOnError>) => import("./client").RequestResult<GetBordersBaseResponses, GetBordersBaseErrors, ThrowOnError, "fields">;
/**
 * Delete border by ID
 * Deletes a border by its unique identifier.
 */
export declare const deleteBordersByBorderId: <ThrowOnError extends boolean = false>(options: Options<DeleteBordersByBorderIdData, ThrowOnError>) => import("./client").RequestResult<DeleteBordersByBorderIdResponses, DeleteBordersByBorderIdErrors, ThrowOnError, "fields">;
/**
 * Get border by ID
 * Retrieves a border by its unique identifier.
 */
export declare const getBordersByBorderId: <ThrowOnError extends boolean = false>(options: Options<GetBordersByBorderIdData, ThrowOnError>) => import("./client").RequestResult<GetBordersByBorderIdResponses, GetBordersByBorderIdErrors, ThrowOnError, "fields">;
/**
 * Update border by ID
 * Updates a border by its unique identifier.
 */
export declare const putBordersByBorderId: <ThrowOnError extends boolean = false>(options: Options<PutBordersByBorderIdData, ThrowOnError>) => import("./client").RequestResult<PutBordersByBorderIdResponses, PutBordersByBorderIdErrors, ThrowOnError, "fields">;
/**
 * Partially update border options by ID
 * Partially updates border options by its unique identifier using a deep merge. Use null to delete a field.
 */
export declare const putBordersByBorderIdOptions: <ThrowOnError extends boolean = false>(options: Options<PutBordersByBorderIdOptionsData, ThrowOnError>) => import("./client").RequestResult<PutBordersByBorderIdOptionsResponses, PutBordersByBorderIdOptionsErrors, ThrowOnError, "fields">;
/**
 * List borders for a workspace
 * Retrieves all borders for a specific workspace.
 */
export declare const getBordersWorkspaceByWorkspaceId: <ThrowOnError extends boolean = false>(options: Options<GetBordersWorkspaceByWorkspaceIdData, ThrowOnError>) => import("./client").RequestResult<GetBordersWorkspaceByWorkspaceIdResponses, GetBordersWorkspaceByWorkspaceIdErrors, ThrowOnError, "fields">;
/**
 * List All Country Codes
 * Retrieves a list of all available country codes with their names and full names
 */
export declare const getCountryCodes: <ThrowOnError extends boolean = false>(options?: Options<GetCountryCodesData, ThrowOnError>) => import("./client").RequestResult<GetCountryCodesResponses, unknown, ThrowOnError, "fields">;
/**
 * List Router Rule Templates
 * Retrieves available router rule templates based on user access. Returns global templates (if includeGlobal=true), organization-level templates, and workspace-specific templates the user has access to.
 */
export declare const getRouterRuleTemplates: <ThrowOnError extends boolean = false>(options?: Options<GetRouterRuleTemplatesData, ThrowOnError>) => import("./client").RequestResult<GetRouterRuleTemplatesResponses, GetRouterRuleTemplatesErrors, ThrowOnError, "fields">;
/**
 * Create Router Rule Template
 * Creates a new router rule template. The template can be organization-level (no workspaceId) or workspace-specific. Template names must be unique within the organization scope.
 */
export declare const postRouterRuleTemplates: <ThrowOnError extends boolean = false>(options?: Options<PostRouterRuleTemplatesData, ThrowOnError>) => import("./client").RequestResult<PostRouterRuleTemplatesResponses, PostRouterRuleTemplatesErrors, ThrowOnError, "fields">;
/**
 * Delete Router Rule Template
 * Deletes a router rule template. Templates that are currently being used by router rules cannot be deleted. Only organization templates can be deleted (not global templates).
 */
export declare const deleteRouterRuleTemplatesByRouterRuleTemplateId: <ThrowOnError extends boolean = false>(options: Options<DeleteRouterRuleTemplatesByRouterRuleTemplateIdData, ThrowOnError>) => import("./client").RequestResult<DeleteRouterRuleTemplatesByRouterRuleTemplateIdResponses, DeleteRouterRuleTemplatesByRouterRuleTemplateIdErrors, ThrowOnError, "fields">;
/**
 * Get Router Rule Template
 * Retrieves a specific router rule template by ID. Returns global templates and organization templates the user has access to.
 */
export declare const getRouterRuleTemplatesByRouterRuleTemplateId: <ThrowOnError extends boolean = false>(options: Options<GetRouterRuleTemplatesByRouterRuleTemplateIdData, ThrowOnError>) => import("./client").RequestResult<GetRouterRuleTemplatesByRouterRuleTemplateIdResponses, GetRouterRuleTemplatesByRouterRuleTemplateIdErrors, ThrowOnError, "fields">;
/**
 * Update Router Rule Template
 * Updates a router rule template. Only organization templates can be updated (not global templates). Users can only update templates within their organization.
 */
export declare const putRouterRuleTemplatesByRouterRuleTemplateId: <ThrowOnError extends boolean = false>(options: Options<PutRouterRuleTemplatesByRouterRuleTemplateIdData, ThrowOnError>) => import("./client").RequestResult<PutRouterRuleTemplatesByRouterRuleTemplateIdResponses, PutRouterRuleTemplatesByRouterRuleTemplateIdErrors, ThrowOnError, "fields">;
/**
 * List Organization Router Rules
 * Retrieves all router rules across the organization. Users with organization-level access see all rules, while workspace-limited users see only rules from their permitted workspaces.
 */
export declare const getRouterRules: <ThrowOnError extends boolean = false>(options?: Options<GetRouterRulesData, ThrowOnError>) => import("./client").RequestResult<GetRouterRulesResponses, GetRouterRulesErrors, ThrowOnError, "fields">;
/**
 * List Workspace Router Rule Assignments
 * Retrieves all router rule assignments within a specific workspace with pagination and filtering options. Returns rules sorted by priority (highest first) with enriched template data and QR code context.
 */
export declare const getWorkspacesByWorkspaceIdRouterRules: <ThrowOnError extends boolean = false>(options: Options<GetWorkspacesByWorkspaceIdRouterRulesData, ThrowOnError>) => import("./client").RequestResult<GetWorkspacesByWorkspaceIdRouterRulesResponses, GetWorkspacesByWorkspaceIdRouterRulesErrors, ThrowOnError, "fields">;
/**
 * Create Workspace Router Rule Template
 * Creates a new router rule template scoped to the specified workspace. Template names must be unique within the organization scope. The workspaceId from the URL path will be used to scope the template.
 */
export declare const postWorkspacesByWorkspaceIdRouterRuleTemplates: <ThrowOnError extends boolean = false>(options: Options<PostWorkspacesByWorkspaceIdRouterRuleTemplatesData, ThrowOnError>) => import("./client").RequestResult<PostWorkspacesByWorkspaceIdRouterRuleTemplatesResponses, PostWorkspacesByWorkspaceIdRouterRuleTemplatesErrors, ThrowOnError, "fields">;
