export type RegisterResponse = {
    /**
     * Indicates if passwordless registration was used
     */
    passwordless?: boolean;
    /**
     * Indicates if a verification email was sent
     */
    emailSent?: boolean;
    /**
     * Informational message
     */
    message?: string;
    /**
     * ID of the created organization
     */
    orgId?: string;
    /**
     * Name of the organization
     */
    organizationName?: string;
    /**
     * Redirect URL of the organization
     */
    organizationRedirectUrl?: string;
    /**
     * Description of the organization
     */
    organizationDescription?: string;
};
/**
 * Error response for validation failures
 */
export type ValidationErrorMessage = {
    message: string;
    /**
     * Detailed list of validation issues
     */
    errors?: Array<ErrorIssueDetail>;
};
/**
 * Details of a specific error issue
 */
export type ErrorIssueDetail = {
    /**
     * Path to the field causing the issue
     */
    path?: Array<string | number>;
    /**
     * Specific message for this issue
     */
    message: string;
    /**
     * Optional specific code for this issue (e.g., Zod issue code)
     */
    code?: string;
};
/**
 * Error response when an email address is already registered
 */
export type EmailAlreadyInUseMessage = {
    message: string;
};
/**
 * Error response when an email fails to send
 */
export type EmailSendFailureMessage = {
    message: string;
};
/**
 * Error response when organization creation fails during registration
 */
export type OrganizationCreationFailureMessage = {
    message: string;
};
export type RegisterRequest = {
    /**
     * User email address
     */
    email: string;
    /**
     * User password (optional for passwordless)
     */
    password?: string;
    /**
     * Name of the initial organization
     */
    organizationName?: string;
    /**
     * Description of the organization
     */
    organizationDescription?: string;
    /**
     * Redirect URL of the organization
     */
    organizationRedirectUrl?: string;
};
export type RegisterVerifyResponse = {
    /**
     * JWT access token upon successful registration verification
     */
    access_token?: string;
};
/**
 * Error response when an email has already been verified
 */
export type EmailAlreadyVerifiedMessage = {
    message: string;
};
/**
 * Unauthorized response message
 */
export type UnauthorizedResponseMessage = {
    message: string;
};
/**
 * Indicates that the specified user was not found
 */
export type UserNotFoundMessage = {
    /**
     * The specified user could not be found
     */
    message: string;
};
/**
 * Indicates that the organization context was not found or is invalid
 */
export type OrganizationNotFoundMessage = {
    /**
     * The specified organization could not be found or is not accessible
     */
    message: string;
};
export type RegisterVerifyRequest = {
    /**
     * User email address (optional)
     */
    email?: string;
    /**
     * 6-digit verification code (for email/MFA)
     */
    code?: string;
    /**
     * Verification token (for email links)
     */
    token?: string;
    /**
     * User password (if setting during verification)
     */
    password?: string;
};
export type RegisterVerifyResendResponse = {
    /**
     * Indicates if the verification email was resent
     */
    emailSent?: boolean;
};
/**
 * Error response for invalid credentials for an operation (not login)
 */
export type InvalidCredentialsForOperationMessage = {
    message: string;
};
export type SignInResponse = {
    /**
     * JWT access token (if password provided)
     */
    access_token?: string;
    /**
     * Indicates if passwordless sign-in is required
     */
    passwordless?: boolean;
    /**
     * Indicates if a sign-in verification email was sent
     */
    emailSent?: boolean;
    /**
     * Details of the organization the user signed into
     */
    organization?: {
        /**
         * Unique identifier for the organization
         */
        id: string;
        /**
         * Name of the organization
         */
        name?: string;
    };
};
export type SignInRequest = {
    /**
     * User email address
     */
    email: string;
    /**
     * User password (optional for passwordless)
     */
    password?: string;
};
export type SignInVerifyResponse = {
    /**
     * JWT access token upon successful sign-in verification
     */
    access_token?: string;
};
export type SignInVerifyRequest = {
    /**
     * User email address (optional)
     */
    email?: string;
    /**
     * 6-digit verification code (for email/MFA)
     */
    code?: string;
    /**
     * Verification token (for email links)
     */
    token?: string;
    /**
     * User password (if setting during verification)
     */
    password?: string;
};
export type EmailVerifySendResponse = {
    /**
     * Indicates if the verification email was sent
     */
    emailSent?: boolean;
};
export type EmailVerifyResponse = {
    /**
     * Indicates if the email was successfully verified
     */
    verified?: boolean;
    /**
     * JWT access token upon successful verification
     */
    access_token?: string;
};
export type EmailVerifyRequest = {
    /**
     * User email address (optional)
     */
    email?: string;
    /**
     * 6-digit verification code (for email/MFA)
     */
    code?: string;
    /**
     * Verification token (for email links)
     */
    token?: string;
    /**
     * User password (if setting during verification)
     */
    password?: string;
};
/**
 * Basic user response information
 */
export type BaseUserResponse = {
    /**
     * Unique identifier for the user
     */
    id: string;
    /**
     * User's full name
     */
    name: string;
    /**
     * User's email address
     */
    email: string;
    /**
     * Whether the user's email address has been verified
     */
    isEmailVerified: boolean;
    /**
     * Whether the user account is disabled
     */
    isDisabled: boolean;
};
/**
 * User information with audit details
 */
export type UserResponseWithAudit = BaseUserResponse & {
    /**
     * User who created the resource
     */
    createdByUser?: AuditInfoMember | null;
    /**
     * User who last updated the resource
     */
    updatedByUser?: AuditInfoMember | null;
    /**
     * API key used to create the resource
     */
    createdByApiKey?: AuditInfoApiKey | null;
    /**
     * API key used to last update the resource
     */
    updatedByApiKey?: AuditInfoApiKey | null;
    /**
     * When the resource was created
     */
    createdAt?: string | null;
    /**
     * When the resource was last updated
     */
    updatedAt?: string | null;
};
/**
 * User information in audit trail
 */
export type AuditInfoMember = {
    /**
     * Unique identifier of the user
     */
    id: string;
    /**
     * Name of the user
     */
    name: string;
    /**
     * Email address of the user
     */
    email: string;
};
/**
 * API key information in audit trail
 */
export type AuditInfoApiKey = {
    /**
     * Unique identifier of the API key
     */
    id: string;
    /**
     * Name of the API key
     */
    name: string;
    /**
     * Role associated with the API key
     */
    roleName: string;
};
export type MeResponse = UserResponseWithAudit & {
    /**
     * List of organizations the user belongs to
     */
    organizations?: Array<MeOrganizationResponse>;
};
/**
 * Organization information for ME endpoint
 */
export type MeOrganizationResponse = {
    /**
     * Unique identifier for the organization
     */
    id: string;
    /**
     * Name of the organization
     */
    name: string;
    /**
     * Redirect URL of the organization
     */
    redirectUrl?: string | null;
    /**
     * Whether this is the current active organization for the user
     */
    isCurrent?: boolean;
    /**
     * Roles assigned to the user in this organization
     */
    roles?: Array<{
        /**
         * Name of the role
         */
        name: string;
        scopes?: Array<string>;
    }>;
    /**
     * Workspaces within this organization
     */
    workspaces?: Array<{
        /**
         * Unique identifier for the workspace
         */
        id: string;
        /**
         * Name of the workspace
         */
        name: string;
        /**
         * Whether access to this workspace is restricted
         */
        isRestricted: boolean;
        /**
         * Roles assigned to the user in this workspace
         */
        roles?: Array<{
            /**
             * Name of the role
             */
            name: string;
            scopes?: Array<string>;
        }>;
    }>;
};
export type SignOutResponse = {
    /**
     * Confirmation message
     */
    message: string;
};
/**
 * Error response when the user is not signed in or session has expired
 */
export type NotSignedInMessage = {
    message: string;
};
export type PasswordResetResponse = {
    /**
     * Success message
     */
    message?: string;
};
export type PasswordResetRequest = {
    /**
     * User email address
     */
    email: string;
    /**
     * User password (required for authentication)
     */
    password?: string;
};
export type PasswordResetVerifyResponse = {
    /**
     * Success message
     */
    message?: string;
};
/**
 * Error response when changing the password fails for an unspecified reason
 */
export type PasswordChangeFailedMessage = {
    message: 'Failed to change password';
};
export type PasswordResetVerifyRequest = {
    /**
     * User email address
     */
    email: string;
    /**
     * Password reset token received via email
     */
    token: string;
    /**
     * New password to set
     */
    newPassword: string;
};
export type PasswordChangeResponse = {
    /**
     * Success message
     */
    message?: string;
};
export type PasswordChangeRequest = {
    /**
     * Current user password
     */
    currentPassword: string;
    /**
     * New password to set
     */
    newPassword: string;
};
/**
 * API key information with organization details
 */
export type ApiKeyResponse = {
    /**
     * Unique identifier for the API key
     */
    id: string;
    /**
     * ID of the organization this API key belongs to
     */
    orgId: string;
    /**
     * Name of the role assigned to this API key
     */
    roleName: string;
    /**
     * Descriptive name for the API key
     */
    name: string;
    /**
     * Current status of the API key
     */
    status: 'active' | 'deleted' | 'disabled';
    /**
     * Timestamp when the API key expires
     */
    expiresAt?: string | null;
    /**
     * Organization information
     */
    organization: {
        /**
         * Name of the organization this API key belongs to
         */
        name?: string;
    };
    /**
     * User who created the resource
     */
    createdByUser?: AuditInfoMember | null;
    /**
     * User who last updated the resource
     */
    updatedByUser?: AuditInfoMember | null;
    /**
     * API key used to create the resource
     */
    createdByApiKey?: AuditInfoApiKey | null;
    /**
     * API key used to last update the resource
     */
    updatedByApiKey?: AuditInfoApiKey | null;
    /**
     * When the resource was created
     */
    createdAt?: string | null;
    /**
     * When the resource was last updated
     */
    updatedAt?: string | null;
};
/**
 * Response after creating an API key, including the key value
 */
export type ApiKeyCreateResponse = ApiKeyResponse & {
    /**
     * The actual API key value (only returned once upon creation)
     */
    key: string;
};
/**
 * Error response when an API key name is already taken within the organization
 */
export type ApiKeyNameTakenMessage = {
    message: string;
};
/**
 * Error response when the role specified for an API key is invalid or not permitted
 */
export type InvalidApiKeyRoleMessage = {
    message: string;
};
/**
 * Error response when the API key lifetime format is invalid (e.g., use "30d", "1y")
 */
export type InvalidApiKeyLifetimeFormatMessage = {
    message: string;
};
/**
 * Error response when an operation cannot be completed due to a usage limit
 */
export type LimitReachedMessage = {
    message: string;
};
/**
 * Forbidden response message
 */
export type ForbiddenResponseMessage = {
    message: string;
};
/**
 * Data required to create a new API key
 */
export type CreateApiKeyRequest = {
    /**
     * Name of the role assigned to this API key
     */
    roleName: string;
    /**
     * Duration for which the key is valid (e.g., "30d", "1y")
     */
    lifetime?: string;
    /**
     * Descriptive name for the API key
     */
    name: string;
};
/**
 * List of API keys
 */
export type ApiKeyList = Array<ApiKeyResponse>;
/**
 * Empty array response
 */
export type EmptyArrayResponse = null;
/**
 * Indicates that the specified API Key was not found
 */
export type ApiKeyNotFoundMessage = {
    /**
     * The specified API Key could not be found
     */
    message: string;
};
/**
 * Data for updating an API key
 */
export type UpdateApiKeyRequest = {
    /**
     * New name for the API key
     */
    name: string;
    /**
     * New expiration date for the API key
     */
    expiresAt?: string | null;
};
/**
 * Data for changing the status of an API key
 */
export type StatusChangeApiKeyRequest = {
    /**
     * New status for the API key
     */
    status: 'active' | 'disabled';
};
/**
 * Generic success response
 */
export type SuccessResponse = {
    /**
     * Success message
     */
    message: string;
};
/**
 * Error response when at least one field is required for an update operation
 */
export type UpdateFieldRequiredMessage = {
    message: string;
};
/**
 * Data for updating an organization
 */
export type UpdateOrganizationRequest = {
    /**
     * Name of the organization
     */
    name?: string;
    /**
     * Description of the organization
     */
    description?: string | null;
    /**
     * Redirect URL of the organization
     */
    redirectUrl?: string | null;
};
/**
 * Response after creating an organization
 */
export type OrganizationCreateResponse = {
    /**
     * Unique identifier for the organization
     */
    id: string;
    /**
     * Name of the organization
     */
    name: string;
    /**
     * Description of the organization
     */
    description?: string | null;
    /**
     * Redirect URL of the organization
     */
    redirectUrl?: string | null;
};
/**
 * Data required to create a new organization
 */
export type CreateOrganizationRequest = {
    /**
     * Name of the organization
     */
    name: string;
    /**
     * Description of the organization
     */
    description?: string;
    /**
     * Redirect URL of the organization
     */
    redirectUrl?: string | null;
};
/**
 * Response after successfully switching organizations
 */
export type OrganizationSwitchResponse = {
    /**
     * JWT access token for the switched organization
     */
    access_token: string;
};
/**
 * Indicates that the organization was not found or is disabled
 */
export type OrganizationNotFoundOrDisabledMessage = {
    /**
     * The specified organization could not be found, or it is currently disabled
     */
    message: string;
};
/**
 * Invitation details with audit information
 */
export type InvitationResponse = {
    /**
     * Unique identifier for the invitation
     */
    id: string;
    /**
     * Email address of the invited user
     */
    email: string;
    /**
     * ID of the organization sending the invitation
     */
    orgId: string;
    /**
     * ID of the specific workspace (if applicable)
     */
    workspaceId?: string | null;
    /**
     * Role to be assigned upon acceptance
     */
    roleName: string;
    /**
     * Current status of the invitation
     */
    status: 'pending' | 'accepted' | 'expired' | 'declined';
    /**
     * Personalized message included in the invitation
     */
    message?: string | null;
    /**
     * When the invitation expires
     */
    expiresAt: string;
    /**
     * Organization information
     */
    organization: {
        /**
         * Name of the organization sending the invitation
         */
        name: string;
    };
    /**
     * Workspace information (if invitation is for a specific workspace)
     */
    workspace?: {
        /**
         * Name of the workspace
         */
        name: string;
    } | null;
    /**
     * User who created the resource
     */
    createdByUser?: AuditInfoMember | null;
    /**
     * User who last updated the resource
     */
    updatedByUser?: AuditInfoMember | null;
    /**
     * API key used to create the resource
     */
    createdByApiKey?: AuditInfoApiKey | null;
    /**
     * API key used to last update the resource
     */
    updatedByApiKey?: AuditInfoApiKey | null;
    /**
     * When the resource was created
     */
    createdAt?: string | null;
    /**
     * When the resource was last updated
     */
    updatedAt?: string | null;
};
/**
 * Response after creating an invitation
 */
export type CreateInvitationResponse = InvitationResponse;
/**
 * Error response when a user already has the specified role in the organization
 */
export type UserAlreadyHasRoleInOrganizationMessage = {
    message: 'User already has this role';
};
/**
 * Data required to create a new invitation
 */
export type CreateInvitationRequest = {
    /**
     * Email address of the person to invite
     */
    email: string;
    /**
     * Role to assign to the invited user
     */
    roleName: string;
    /**
     * Optional workspace ID to invite user to a specific workspace
     */
    workspaceId?: string;
    /**
     * Optional personalized message to include in the invitation
     */
    message?: string | null;
};
/**
 * List of invitations sent by the organization
 */
export type OrganizationInvitationsResponse = Array<InvitationResponse>;
/**
 * List of invitations sent by the current user
 */
export type UserInvitationsResponse = Array<{
    /**
     * Unique identifier for the invitation
     */
    id: string;
    /**
     * ID of the organization sending the invitation
     */
    orgId: string;
    /**
     * ID of the specific workspace (if applicable)
     */
    workspaceId?: string | null;
    /**
     * Role to be assigned upon acceptance
     */
    roleName: string;
    /**
     * Current status of the invitation
     */
    status: 'pending' | 'accepted' | 'expired' | 'declined';
    /**
     * Personalized message included in the invitation
     */
    message?: string | null;
    /**
     * When the invitation expires
     */
    expiresAt: string;
    /**
     * Organization information
     */
    organization: {
        /**
         * Name of the organization sending the invitation
         */
        name: string;
    };
    /**
     * Workspace information (if invitation is for a specific workspace)
     */
    workspace?: {
        /**
         * Name of the workspace
         */
        name: string;
    } | null;
    /**
     * User who created the resource
     */
    createdByUser?: AuditInfoMember | null;
    /**
     * User who last updated the resource
     */
    updatedByUser?: AuditInfoMember | null;
    /**
     * API key used to create the resource
     */
    createdByApiKey?: AuditInfoApiKey | null;
    /**
     * API key used to last update the resource
     */
    updatedByApiKey?: AuditInfoApiKey | null;
    /**
     * When the resource was created
     */
    createdAt?: string | null;
    /**
     * When the resource was last updated
     */
    updatedAt?: string | null;
}>;
/**
 * Error response when attempting to delete an accepted invitation
 */
export type CannotDeleteAcceptedInvitationMessage = {
    message: 'Cannot delete accepted invitation';
};
/**
 * Indicates that the invitation was not found or is invalid
 */
export type InvitationNotFoundMessage = {
    /**
     * The specified invitation could not be found or is invalid or the organization is disabled or deleted
     */
    message: string;
};
/**
 * Response after accepting an invitation
 */
export type AcceptInvitationResponse = {
    /**
     * User ID of the newly registered or existing user
     */
    id: string;
    /**
     * Email address of the user
     */
    email: string;
    /**
     * Whether the email has been verified
     */
    isEmailVerified: boolean;
    /**
     * JWT access token for authentication
     */
    access_token: string;
};
/**
 * Error response when an invitation has expired
 */
export type InvitationExpiredMessage = {
    message: 'Invitation expired';
};
/**
 * Error response when an invitation has already been accepted
 */
export type InvitationAlreadyAcceptedMessage = {
    message: 'Invitation already accepted';
};
/**
 * Error response when an invitation has already been declined
 */
export type InvitationAlreadyDeclinedMessage = {
    message: 'Invitation already declined';
};
/**
 * Role information with organization details
 */
export type UserRoleWithOrganization = {
    /**
     * Name of the role
     */
    name: string;
    /**
     * Permissions associated with the role
     */
    scopes?: Array<string>;
    /**
     * Organization the role is associated with
     */
    organization: {
        /**
         * Unique identifier for the organization
         */
        id: string;
        /**
         * Name of the organization
         */
        name?: string;
        /**
         * Description of the organization
         */
        description?: string | null;
    };
};
/**
 * Indicates that the specified member was not found
 */
export type MemberNotFoundMessage = {
    /**
     * The specified member could not be found
     */
    message: string;
};
/**
 * Indicates that the member or role was not found
 */
export type MemberOrRoleNotFoundMessage = {
    /**
     * The specified member (user) or role could not be found
     */
    message: string;
};
/**
 * Data required to add a member to an organization
 */
export type AddOrganizationMember = {
    /**
     * Email address of the user to add
     */
    email: string;
    /**
     * Name of the role to assign to the member
     */
    roleName: string;
    /**
     * Whether to send an invitation email
     */
    sendInvitation?: boolean;
};
/**
 * List of members in the organization with their roles
 */
export type OrganizationMembers = Array<OrganizationMember>;
/**
 * Member information with roles
 */
export type OrganizationMember = UserResponseWithAudit & {
    /**
     * Roles the member has in the organization
     */
    organizationRoles: Array<Role & {
        /**
         * ID of the organization this role is associated with
         */
        orgId: string;
    }>;
    /**
     * Roles the member has in workspaces
     */
    workspaceRoles: Array<Role & {
        /**
         * ID of the workspace this role is associated with
         */
        workspaceId: string;
    }>;
};
/**
 * Role information
 */
export type Role = {
    /**
     * Name of the role
     */
    name: string;
    /**
     * Permissions associated with the role
     */
    scopes?: Array<string>;
};
/**
 * Grouped roles for a member
 */
export type GroupedMemberRoles = {
    /**
     * Roles the member has in organizations
     */
    organizationRoles: Array<{
        /**
         * Name of the role
         */
        name: string;
        /**
         * Permissions associated with the role
         */
        scopes?: Array<string>;
        /**
         * ID of the organization this role is associated with
         */
        orgId: string;
    }>;
    /**
     * Roles the member has in workspaces
     */
    workspaceRoles: Array<{
        /**
         * Name of the role
         */
        name: string;
        /**
         * Permissions associated with the role
         */
        scopes?: Array<string>;
        /**
         * ID of the workspace this role is associated with
         */
        workspaceId: string;
    }>;
};
/**
 * Response body when a member is found but has no roles in the given context, resulting in a 404 for the roles list
 */
export type EmptyRolesListResponse = {
    /**
     * Array of organization roles, empty in this case
     */
    organizationRoles?: Array<unknown>;
    /**
     * Array of workspace roles, empty in this case
     */
    workspaceRoles?: Array<unknown>;
};
/**
 * Data required to add a role to a member
 */
export type AddMemberRole = {
    /**
     * Name of the role to assign
     */
    roleName: string;
};
/**
 * Error response when a user attempts to remove their own owner role
 */
export type CannotRemoveOwnOwnerRoleMessage = {
    message: 'You cannot remove your own owner role';
};
/**
 * Workspace information with audit details
 */
export type WorkspaceResponse = {
    /**
     * Unique identifier for the workspace
     */
    id: string;
    /**
     * Name of the workspace
     */
    name: string;
    /**
     * Description of the workspace
     */
    description?: string | null;
    /**
     * Whether access to this workspace is isRestricted
     */
    isRestricted: boolean;
    /**
     * ID of the organization this workspace belongs to
     */
    orgId: string;
    /**
     * User who created the resource
     */
    createdByUser?: AuditInfoMember | null;
    /**
     * User who last updated the resource
     */
    updatedByUser?: AuditInfoMember | null;
    /**
     * API key used to create the resource
     */
    createdByApiKey?: AuditInfoApiKey | null;
    /**
     * API key used to last update the resource
     */
    updatedByApiKey?: AuditInfoApiKey | null;
    /**
     * When the resource was created
     */
    createdAt?: string | null;
    /**
     * When the resource was last updated
     */
    updatedAt?: string | null;
};
/**
 * Error response when a workspace name is already taken within the organization
 */
export type WorkspaceNameTakenMessage = {
    message: 'Workspace name is already taken';
};
/**
 * Data required to create a new workspace
 */
export type CreateWorkspaceRequest = {
    /**
     * Name of the workspace
     */
    name: string;
    /**
     * Description of the workspace
     */
    description?: string;
    /**
     * Whether access to this workspace is isRestricted
     */
    isRestricted?: boolean;
};
/**
 * Indicates that the specified workspace was not found
 */
export type WorkspaceNotFoundMessage = {
    /**
     * The specified workspace could not be found
     */
    message: string;
};
/**
 * Data for updating a workspace
 */
export type UpdateWorkspaceRequest = {
    /**
     * New name for the workspace
     */
    name?: string;
    /**
     * New description for the workspace
     */
    description?: string;
    /**
     * Whether access to this workspace is isRestricted
     */
    isRestricted?: boolean;
};
/**
 * Response after deleting a workspace
 */
export type WorkspaceDeleteResponse = {
    /**
     * Success message
     */
    message: string;
};
/**
 * Error response when a workspace is not empty
 */
export type WorkspaceNotEmptyMessage = {
    message: 'Workspace is not empty';
};
/**
 * List of roles assigned to a workspace member
 */
export type WorkspaceMemberRoles = Array<{
    /**
     * Name of the role
     */
    name: string;
}>;
/**
 * Result of assigning a role to a workspace member
 */
export type AddWorkspaceMemberRoleResponse = {
    /**
     * Name of the assigned role
     */
    name: string;
};
/**
 * Error response when a user already has the specified role in the workspace
 */
export type UserAlreadyHasRoleInWorkspaceMessage = {
    message: 'User already has this role in the workspace';
};
/**
 * Indicates that the specified role was not found
 */
export type RoleNotFoundMessage = {
    /**
     * The specified role could not be found
     */
    message: string;
};
/**
 * Role to assign to a workspace member
 */
export type WorkspaceMemberRole = {
    /**
     * Name of the role to assign
     */
    roleName: string;
};
/**
 * List of members in a workspace
 */
export type WorkspaceMembers = Array<WorkspaceMember>;
/**
 * Workspace member information
 */
export type WorkspaceMember = {
    /**
     * Unique identifier of the member
     */
    id: string;
    /**
     * Name of the member
     */
    name: string;
    /**
     * Email address of the member
     */
    email: string;
    /**
     * Roles assigned to the member in this workspace
     */
    roles: Array<{
        /**
         * Name of the role
         */
        name: string;
        /**
         * Whether the role is inherited from organization level
         */
        isInherited: boolean;
    }>;
    /**
     * User who created the resource
     */
    createdByUser?: AuditInfoMember | null;
    /**
     * User who last updated the resource
     */
    updatedByUser?: AuditInfoMember | null;
    /**
     * API key used to create the resource
     */
    createdByApiKey?: AuditInfoApiKey | null;
    /**
     * API key used to last update the resource
     */
    updatedByApiKey?: AuditInfoApiKey | null;
    /**
     * When the resource was created
     */
    createdAt?: string | null;
    /**
     * When the resource was last updated
     */
    updatedAt?: string | null;
};
/**
 * List of roles with their associated scopes
 */
export type RolesWithScopesResponse = Array<RoleWithScopesResponse>;
/**
 * Role with detailed scope information
 */
export type RoleWithScopesResponse = {
    /**
     * Name of the role
     */
    name: string;
    scopes: Array<string>;
};
/**
 * List of available plans
 */
export type PlansResponse = Array<Plan>;
/**
 * Plan information
 */
export type Plan = {
    /**
     * Unique identifier of the plan
     */
    name: 'plan-free' | 'plan-startup' | 'plan-business' | 'plan-enterprise';
    /**
     * Human-readable name of the plan
     */
    displayName: string;
    /**
     * Brief description of the plan
     */
    description: string;
    /**
     * Plan limits by limit type
     */
    limits: {
        [key: string]: number;
    };
    /**
     * Whether this is the current plan for the authenticated organization
     */
    isCurrent?: boolean;
    /**
     * When the next limit reset will occur for this plan
     */
    nextResetAt?: string;
};
/**
 * Plan with detailed usage information
 */
export type PlanWithLimits = {
    /**
     * Unique identifier of the plan
     */
    name: 'plan-free' | 'plan-startup' | 'plan-business' | 'plan-enterprise';
    /**
     * Detailed limits with current usage
     */
    limits: {
        [key: string]: LimitDetail;
    };
    /**
     * Whether this is the current plan
     */
    isCurrent?: boolean;
    /**
     * When the next limit reset will occur
     */
    nextResetAt?: string;
};
/**
 * Limit details with current usage
 */
export type LimitDetail = {
    /**
     * Maximum allowed value for this limit
     */
    limit: number;
    /**
     * Current usage count against this limit
     */
    usage: number;
};
/**
 * Current organization plan with usage details
 */
export type OrganizationPlanResponse = PlanWithLimits;
/**
 * Indicates that the plan was not found
 */
export type PlanNotFoundMessage = {
    /**
     * The specified plan or the plan for the organization could not be found
     */
    message: string;
};
/**
 * List of settings with group information
 */
export type SettingsWithGroupResponse = Array<SettingWithGroup>;
/**
 * Setting response data
 */
export type SettingResponse = {
    /**
     * Name of the setting
     */
    name: string;
    /**
     * URL-friendly identifier for the setting
     */
    slug: string;
    /**
     * Description of what the setting does
     */
    description?: string | null;
    /**
     * Value of the setting, can be any type depending on the setting
     */
    value?: unknown;
};
/**
 * Setting with group information
 */
export type SettingWithGroup = SettingResponse & {
    /**
     * Type of setting (service or custom)
     */
    group: 'service' | 'custom';
};
/**
 * List of settings
 */
export type SettingsResponse = Array<SettingResponse>;
/**
 * Indicates that the specified setting was not found
 */
export type SettingNotFoundMessage = {
    /**
     * The specified setting could not be found
     */
    message: string;
};
/**
 * Error response when a setting value is required but not provided
 */
export type SettingValueRequiredMessage = {
    message: 'Setting value is required';
};
/**
 * Error response when attempting to create a setting with a reserved name
 */
export type SettingReservedNameMessage = {
    message: 'Cannot create setting with a reserved name';
};
/**
 * Error response when attempting to operate on a service setting as if it were workspace-overridable, but it is not
 */
export type SettingNotWorkspaceOverridableMessageSchema = {
    message: 'This setting is not a workspace-overridable service setting';
};
/**
 * Data required to create a new setting
 */
export type CreateSetting = {
    /**
     * Name of the setting
     */
    name: string;
    /**
     * Description of what the setting does
     */
    description?: string | null;
    /**
     * Value of the setting, can be any type depending on the setting
     */
    value?: unknown;
};
/**
 * Data required to update an existing setting
 */
export type UpdateSetting = {
    /**
     * Description of what the setting does
     */
    description?: string | null;
    /**
     * Value of the setting, can be any type depending on the setting
     */
    value?: unknown;
};
/**
 * Generic success response
 */
export type SettingSuccessResponse = {
    /**
     * Success message
     */
    message: string;
};
/**
 * Error response when attempting to delete a non-deletable service setting
 */
export type CannotDeleteServiceSettingMessage = {
    message: 'Service settings cannot be deleted';
};
/**
 * Error response when an invalid service setting slug is provided
 */
export type InvalidServiceSettingSlugMessage = {
    message: 'The provided slug does not correspond to a valid service setting';
};
/**
 * Error response when a service setting value has an incorrect data type
 */
export type InvalidServiceSettingValueTypeMessage = {
    message: 'The provided value has an incorrect type for this service setting';
};
/**
 * Error response when a service setting value is invalid (e.g., not in allowed list)
 */
export type InvalidServiceSettingValueMessage = {
    message: 'The provided value is invalid for this service setting (e.g., not in allowed list)';
};
/**
 * Error response when attempting to override a non-overridable setting at the workspace level
 */
export type CannotOverrideSettingAtWorkspaceLevelMessage = {
    message: 'This service setting cannot be overridden at the workspace level';
};
/**
 * Error response when a workspace ID is required for an operation but not provided
 */
export type WorkspaceIdRequiredMessageSchema = {
    message: 'Workspace ID is required for this operation';
};
export type EmptyResponseWithPagination = {
    data?: Array<unknown>;
    /**
     * Pagination metadata
     */
    pagination: {
        /**
         * Total number of items matching the filter criteria
         */
        total: number;
        /**
         * Current page number
         */
        page: number;
        /**
         * Number of items per page
         */
        limit: number;
        /**
         * Total number of pages
         */
        totalPages: number;
    };
};
/**
 * Indicates that the specified QR code was not found
 */
export type CodeNotFoundMessage = {
    /**
     * The specified QR code could not be found
     */
    message: string;
};
/**
 * Code router rule assignment response object
 */
export type CodeRouterRuleResponse = {
    /**
     * Unique rule assignment identifier
     */
    id: string;
    /**
     * Parent QR code ID
     */
    codeId: string;
    /**
     * Template ID or null for inline
     */
    templateId: string | null;
    /**
     * Denormalized rule type for filtering
     */
    ruleType: string;
    /**
     * Resolved rule object
     */
    rule: {
        /**
         * Template ID (only for template rules)
         */
        id?: string;
        /**
         * Rule name
         */
        name: string | null;
        /**
         * Rule description
         */
        description: string | null;
        /**
         * Rule type
         */
        type: string;
        /**
         * Rule conditions (null for scanLimit)
         */
        conditions: {
            [key: string]: unknown;
        } | null;
        /**
         * Is global template
         */
        isGlobal?: boolean;
        /**
         * Organization ID
         */
        orgId?: string | null;
        /**
         * Workspace ID
         */
        workspaceId?: string | null;
        /**
         * Total template scans
         */
        totalScans?: number;
        /**
         * Template creation date
         */
        createdAt?: string;
        /**
         * Template update date
         */
        updatedAt?: string;
    };
    priority: number;
    /**
     * The type of data the QR code contains. Only applies to dynamic codes. Determines how the QR code data is processed and what content type is returned when scanned. Available options: url (default, standard web redirect), wifi (WiFi configuration), vcard (contact card), text (plain text), email (mailto format), event (calendar event), json (custom JSON), file (file download).
     */
    dataType: 'url' | 'wifi' | 'vcard' | 'text' | 'email' | 'event' | 'json' | 'file';
    dynamicData: {
        [key: string]: unknown;
    };
    maxScans: number | null;
    loop: boolean;
    expiresAt: string | null;
    disabled: boolean;
    currentScans: number;
    totalScans: number;
    /**
     * User who created the resource
     */
    createdByUser?: AuditInfoMember | null;
    /**
     * User who last updated the resource
     */
    updatedByUser?: AuditInfoMember | null;
    /**
     * API key used to create the resource
     */
    createdByApiKey?: AuditInfoApiKey | null;
    /**
     * API key used to last update the resource
     */
    updatedByApiKey?: AuditInfoApiKey | null;
    /**
     * When the resource was created
     */
    createdAt?: string | null;
    /**
     * When the resource was last updated
     */
    updatedAt?: string | null;
};
/**
 * Error response when a router rule with the specified priority already exists
 */
export type RouterRulePriorityAlreadyExistsMessage = {
    message: 'A router rule with this priority already exists for this QR code';
};
/**
 * Error response when router rule conditions are invalid for the specified rule type
 */
export type RouterRuleInvalidConditionsMessage = {
    message: 'Invalid conditions for the specified rule type';
};
/**
 * Error response when scanLimit rule is missing required maxScans field
 */
export type RouterRuleMaxScansRequiredMessage = {
    message: 'scanLimit rules require maxScans to be specified';
};
/**
 * Error response when an invalid country code is provided for router rule
 */
export type RouterRuleInvalidCountryCodeMessage = {
    message: 'Invalid country code provided for router rule';
};
/**
 * Indicates that the specified router rule assignment was not found
 */
export type RouterRuleNotFoundMessage = {
    /**
     * The specified router rule assignment could not be found
     */
    message: string;
};
/**
 * Base QR code response schema
 */
export type BaseCodeResponse = {
    /**
     * Unique identifier for the QR code
     */
    id: string;
    /**
     * Name of the QR code
     */
    name: string;
    /**
     * Type of the QR code
     */
    type?: 'static' | 'dynamic';
    /**
     * The type of data the QR code contains. Only applies to dynamic codes.
     */
    dataType?: 'url' | 'wifi' | 'vcard' | 'text' | 'email' | 'event' | 'json' | 'file' | null;
    /**
     * Short alias for the QR code
     */
    shortAlias?: string | null;
    /**
     * Functional content for dynamic QR codes. Structure depends on dataType.
     */
    dynamicData?: {
        [key: string]: unknown;
    } | null;
    /**
     * Data encoded in the QR code
     */
    data: string;
    /**
     * Description of the QR code
     */
    description: string | null;
    /**
     * Number of times the QR code has been scanned
     */
    totalScans: number | null;
    /**
     * Custom user metadata for the QR code as JSON object. This is separate from the dynamicData field and stores additional information that is not part of the functional content.
     */
    metadata: {
        [key: string]: unknown;
    } | null;
    options: QrCodeOptions;
    /**
     * ID of the style applied to the QR code
     */
    styleId: string | null;
    /**
     * ID of the template applied to the QR code
     */
    templateId: string | null;
    /**
     * ID of the border applied to the QR code
     */
    borderId: string | null;
    /**
     * ID of the text applied to the QR code
     */
    textId: string | null;
    /**
     * Style object with its configuration
     */
    style?: {
        id?: string | null;
        name?: string | null;
        options: StyleOptions;
    };
    /**
     * Template object with its configuration
     */
    template?: {
        id?: string | null;
        name?: string | null;
        options?: QrCodeOptionsWithOptionalData;
    };
    /**
     * Border object with its configuration
     */
    border?: {
        id?: string | null;
        name?: string | null;
        options: BorderOptions;
    };
    /**
     * Text object with its configuration
     */
    text?: {
        id?: string | null;
        name?: string | null;
        options: TextOptions;
    };
    /**
     * ID of the workspace the QR code belongs to
     */
    workspaceId: string | null;
    /**
     * Whether the QR code is valid
     */
    isValid: boolean | null;
    /**
     * When the QR code was last validated
     */
    validatedAt: string | null;
    /**
     * Version number of the QR code
     */
    version: number;
    /**
     * Whether the QR code is deleted
     */
    isDeleted?: boolean;
};
/**
 * Complete configuration for QR code generation
 */
export type QrCodeOptions = {
    /**
     * Data to encode in the QR code (required)
     */
    data: string;
    /**
     * Overall shape of the QR code
     */
    shape?: 'square' | 'circle' | null;
    /**
     * Margin around the QR code in pixels
     */
    margin?: number | null;
    /**
     * Whether QR code is responsive
     */
    isResponsive?: boolean | null;
    /**
     * Scale factor for QR code (0-1.5)
     */
    scale?: number | null;
    /**
     * General offset in pixels
     */
    offset?: number | null;
    /**
     * Vertical offset in pixels
     */
    verticalOffset?: number | null;
    /**
     * Horizontal offset in pixels
     */
    horizontalOffset?: number | null;
    /**
     * QR code specific options
     */
    qrOptions?: {
        /**
         * QR code type number (0-40)
         */
        typeNumber?: number | null;
        /**
         * QR code encoding mode
         */
        mode?: 'numeric' | 'alphanumeric' | 'byte' | 'kanji' | 'unicode';
        /**
         * Error correction level
         */
        errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H' | null;
    } | null;
    /**
     * Options for QR code dots
     */
    dotsOptions?: {
        /**
         * Type of dots
         */
        type?: 'dot' | 'square' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'vertical-line' | 'horizontal-line' | 'random-dot' | 'small-square' | 'tiny-square' | 'star' | 'plus' | 'diamond' | null;
        /**
         * Color of dots in CSS format
         */
        color?: string | null;
        /**
         * Size of dots relative to module size (0-1)
         */
        size?: number | null;
        /**
         * Gradient for dots
         */
        gradient?: Gradient | null;
    } | null;
    /**
     * Options for QR code corner squares
     */
    cornersSquareOptions?: {
        /**
         * Type of corner squares
         */
        type?: 'dot' | 'square' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
        /**
         * Color of corner squares in CSS format
         */
        color?: string | null;
        /**
         * Gradient for corner squares
         */
        gradient?: Gradient | null;
    } | null;
    /**
     * Options for QR code corner dots
     */
    cornersDotOptions?: {
        /**
         * Type of corner dots
         */
        type?: 'dot' | 'square' | 'heart' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
        /**
         * Color of corner dots in CSS format
         */
        color?: string | null;
        /**
         * Gradient for corner dots
         */
        gradient?: Gradient | null;
    } | null;
    /**
     * Options for QR code background or false to disable
     */
    backgroundOptions?: {
        /**
         * Background color in CSS format
         */
        color?: string | null;
        /**
         * Background corner rounding (0-1 or CSS value)
         */
        round?: number | string | null;
        /**
         * Gradient for background
         */
        gradient?: Gradient | null;
    } | false;
    /**
     * Image to embed in the QR code (URL, Buffer, or Blob)
     */
    image?: string | unknown | null;
    /**
     * Options for embedded image
     */
    imageOptions?: {
        /**
         * Mode for embedded image
         */
        mode?: 'center' | 'overlay' | 'background' | null;
        /**
         * Size of image relative to QR code (0-1)
         */
        imageSize?: number | null;
        /**
         * Margin around the image in pixels
         */
        margin?: number | null;
        /**
         * Cross-origin attribute for image
         */
        crossOrigin?: string | null;
        /**
         * Fill options for image area
         */
        fill?: {
            /**
             * Fill color in CSS format
             */
            color?: string | null;
            /**
             * Gradient for fill
             */
            gradient?: Gradient | null;
        } | null;
    } | null;
    /**
     * Border configuration options
     */
    borderOptions?: {
        /**
         * Whether to show border
         */
        hasBorder?: boolean | null;
        /**
         * Border thickness in pixels
         */
        thickness?: number | null;
        /**
         * Border color in CSS format
         */
        color?: string | null;
        /**
         * Border radius in CSS format
         */
        radius?: string | null;
        /**
         * Thickness when no border is shown
         */
        noBorderThickness?: number | null;
        /**
         * Border background color in CSS format
         */
        background?: string | null;
        /**
         * Inner border configuration
         */
        inner?: {
            /**
             * Inner radius in CSS format
             */
            radius?: string | null;
            /**
             * Inner scale factor (0-1.5)
             */
            scale?: number | null;
            /**
             * Inner horizontal offset in pixels
             */
            horizontalOffset?: number | null;
            /**
             * Inner vertical offset in pixels
             */
            verticalOffset?: number | null;
        } | null;
        /**
         * Outer border configuration
         */
        borderOuter?: BorderInnerOuter | null;
        /**
         * Inner border configuration
         */
        borderInner?: BorderInnerOuter | null;
        /**
         * Border decorations configuration
         */
        decorations?: {
            /**
             * Top decoration configuration
             */
            top?: DecorationOptions | null;
            /**
             * Right decoration configuration
             */
            right?: DecorationOptions | null;
            /**
             * Bottom decoration configuration
             */
            bottom?: DecorationOptions | null;
            /**
             * Left decoration configuration
             */
            left?: DecorationOptions | null;
        } | null;
    } | null;
};
/**
 * Gradient definition
 */
export type Gradient = {
    /**
     * Type of gradient
     */
    type?: 'linear' | 'radial';
    /**
     * Rotation angle of gradient in degrees
     */
    rotation?: number;
    /**
     * Array of color stops in the gradient (min 2)
     */
    colorStops?: Array<{
        /**
         * Position of the color stop (0-1)
         */
        offset?: number;
        /**
         * Color in CSS format
         */
        color?: string;
    }>;
};
/**
 * Inner or outer border configuration
 */
export type BorderInnerOuter = {
    /**
     * Border color in CSS format
     */
    color?: string;
    /**
     * Border thickness in pixels
     */
    thickness?: number;
};
/**
 * Options for QR code decoration
 */
export type DecorationOptions = {
    /**
     * Whether decoration is disabled
     */
    disabled?: boolean;
    /**
     * Whether text is enabled
     */
    enableText?: boolean;
    /**
     * Offset position in pixels
     */
    offset?: number;
    /**
     * Curve adjustment value
     */
    curveAdjustment?: number;
    /**
     * Whether curve is disabled
     */
    curveDisabled?: boolean;
    /**
     * Curve radius value (CSS format)
     */
    curveRadius?: string;
    /**
     * Type of decoration
     */
    type?: 'text' | 'image';
    /**
     * Content value for decoration
     */
    value?: string;
    /**
     * Style for text decoration
     */
    style?: TextDecorationStyle;
};
/**
 * Text decoration style
 */
export type TextDecorationStyle = {
    /**
     * Font face for the text
     */
    fontFace?: string;
    /**
     * Font size in pixels
     */
    fontSize?: number;
    /**
     * Font color in CSS format
     */
    fontColor?: string;
    /**
     * Letter spacing in pixels
     */
    letterSpacing?: number;
    /**
     * Font weight
     */
    fontWeight?: 'normal' | 'bold';
};
/**
 * Configuration options for QR code styling
 */
export type StyleOptions = {
    /**
     * Primary color for QR code elements in CSS format
     */
    primaryColor?: string | null;
    /**
     * Secondary color for QR code elements in CSS format
     */
    secondaryColor?: string | null;
    /**
     * Tertiary color for QR code elements in CSS format
     */
    thirdColor?: string | null;
    /**
     * Background color of the QR code in CSS format
     */
    backgroundColor?: string | null;
    /**
     * Gradient configuration for QR code dots
     */
    dotsGradient?: Gradient | null;
    /**
     * Gradient configuration for corner dots
     */
    cornersDotGradient?: Gradient | null;
    /**
     * Gradient configuration for corners
     */
    cornersGradient?: Gradient | null;
    /**
     * Gradient configuration for QR code background
     */
    backgroundGradient?: Gradient | null;
    /**
     * Shape style for the QR code dots
     */
    dotShape?: 'dot' | 'square' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'vertical-line' | 'horizontal-line' | 'random-dot' | 'small-square' | 'tiny-square' | 'star' | 'plus' | 'diamond' | null;
    /**
     * Shape style for the QR code corner squares
     */
    cornerSquareShape?: 'dot' | 'square' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
    /**
     * Shape style for the QR code corner dots
     */
    cornerDotShape?: 'dot' | 'square' | 'heart' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
    /**
     * Logo to be placed on the QR code (URL, Base64, Buffer, or Blob)
     */
    logo?: string | unknown | null;
    /**
     * Size of the logo relative to QR code (0-1)
     */
    logoSize?: number | null;
    /**
     * Placement mode for the logo
     */
    logoMode?: 'center' | 'overlay' | 'background' | null;
    /**
     * Margin around the logo in pixels
     */
    logoMargin?: number | null;
    /**
     * Background color for logo in CSS format
     */
    logoBackgroundColor?: string | null;
    /**
     * Padding around the logo in pixels
     */
    logoPadding?: number | null;
    /**
     * Border radius for logo in pixels or CSS format
     */
    logoRadius?: string | number | null;
    /**
     * Color of the QR code border in CSS format
     */
    borderColor?: string | null;
    /**
     * Thickness of the border in pixels
     */
    borderThickness?: number | null;
    /**
     * Border radius in pixels or CSS format
     */
    borderRadius?: string | number | null;
    /**
     * Color of the inner border in CSS format
     */
    borderInnerColor?: string | null;
    /**
     * Thickness of the inner border in pixels
     */
    borderInnerThickness?: number | null;
    /**
     * Inner border radius in pixels or CSS format
     */
    borderInnerRadius?: string | number | null;
    /**
     * Color of the outer border in CSS format
     */
    borderOuterColor?: string | null;
    /**
     * Thickness of the outer border in pixels
     */
    borderOuterThickness?: number | null;
    /**
     * Text to display on top border
     */
    borderTextTop?: string | null;
    /**
     * Text to display on right border
     */
    borderTextRight?: string | null;
    /**
     * Text to display on bottom border
     */
    borderTextBottom?: string | null;
    /**
     * Text to display on left border
     */
    borderTextLeft?: string | null;
    /**
     * Font family for border text
     */
    borderFontFace?: string | null;
    /**
     * Font size for border text in pixels
     */
    borderFontSize?: number | null;
    /**
     * Font color for border text in CSS format
     */
    borderFontColor?: string | null;
    /**
     * Letter spacing for border text in pixels
     */
    borderLetterSpacing?: number | null;
    /**
     * Text transformation for border text
     */
    borderTextTransform?: 'uppercase' | 'lowercase' | 'capitalize' | null;
    /**
     * Font weight for border text
     */
    borderFontWeight?: string;
};
/**
 * QR code configuration with optional data field
 */
export type QrCodeOptionsWithOptionalData = {
    /**
     * Overall shape of the QR code
     */
    shape?: 'square' | 'circle' | null;
    /**
     * Margin around the QR code in pixels
     */
    margin?: number | null;
    /**
     * Whether QR code is responsive
     */
    isResponsive?: boolean | null;
    /**
     * Scale factor for QR code (0-1.5)
     */
    scale?: number | null;
    /**
     * General offset in pixels
     */
    offset?: number | null;
    /**
     * Vertical offset in pixels
     */
    verticalOffset?: number | null;
    /**
     * Horizontal offset in pixels
     */
    horizontalOffset?: number | null;
    /**
     * QR code specific options
     */
    qrOptions?: {
        /**
         * QR code type number (0-40)
         */
        typeNumber?: number | null;
        /**
         * QR code encoding mode
         */
        mode?: 'numeric' | 'alphanumeric' | 'byte' | 'kanji' | 'unicode';
        /**
         * Error correction level
         */
        errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H' | null;
    } | null;
    /**
     * Options for QR code dots
     */
    dotsOptions?: {
        /**
         * Type of dots
         */
        type?: 'dot' | 'square' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'vertical-line' | 'horizontal-line' | 'random-dot' | 'small-square' | 'tiny-square' | 'star' | 'plus' | 'diamond' | null;
        /**
         * Color of dots in CSS format
         */
        color?: string | null;
        /**
         * Size of dots relative to module size (0-1)
         */
        size?: number | null;
        /**
         * Gradient for dots
         */
        gradient?: Gradient | null;
    } | null;
    /**
     * Options for QR code corner squares
     */
    cornersSquareOptions?: {
        /**
         * Type of corner squares
         */
        type?: 'dot' | 'square' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
        /**
         * Color of corner squares in CSS format
         */
        color?: string | null;
        /**
         * Gradient for corner squares
         */
        gradient?: Gradient | null;
    } | null;
    /**
     * Options for QR code corner dots
     */
    cornersDotOptions?: {
        /**
         * Type of corner dots
         */
        type?: 'dot' | 'square' | 'heart' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
        /**
         * Color of corner dots in CSS format
         */
        color?: string | null;
        /**
         * Gradient for corner dots
         */
        gradient?: Gradient | null;
    } | null;
    /**
     * Options for QR code background or false to disable
     */
    backgroundOptions?: {
        /**
         * Background color in CSS format
         */
        color?: string | null;
        /**
         * Background corner rounding (0-1 or CSS value)
         */
        round?: number | string | null;
        /**
         * Gradient for background
         */
        gradient?: Gradient | null;
    } | false;
    /**
     * Image to embed in the QR code (URL, Buffer, or Blob)
     */
    image?: string | unknown | null;
    /**
     * Options for embedded image
     */
    imageOptions?: {
        /**
         * Mode for embedded image
         */
        mode?: 'center' | 'overlay' | 'background' | null;
        /**
         * Size of image relative to QR code (0-1)
         */
        imageSize?: number | null;
        /**
         * Margin around the image in pixels
         */
        margin?: number | null;
        /**
         * Cross-origin attribute for image
         */
        crossOrigin?: string | null;
        /**
         * Fill options for image area
         */
        fill?: {
            /**
             * Fill color in CSS format
             */
            color?: string | null;
            /**
             * Gradient for fill
             */
            gradient?: Gradient | null;
        } | null;
    } | null;
    /**
     * Border configuration options
     */
    borderOptions?: {
        /**
         * Whether to show border
         */
        hasBorder?: boolean | null;
        /**
         * Border thickness in pixels
         */
        thickness?: number | null;
        /**
         * Border color in CSS format
         */
        color?: string | null;
        /**
         * Border radius in CSS format
         */
        radius?: string | null;
        /**
         * Thickness when no border is shown
         */
        noBorderThickness?: number | null;
        /**
         * Border background color in CSS format
         */
        background?: string | null;
        /**
         * Inner border configuration
         */
        inner?: {
            /**
             * Inner radius in CSS format
             */
            radius?: string | null;
            /**
             * Inner scale factor (0-1.5)
             */
            scale?: number | null;
            /**
             * Inner horizontal offset in pixels
             */
            horizontalOffset?: number | null;
            /**
             * Inner vertical offset in pixels
             */
            verticalOffset?: number | null;
        } | null;
        /**
         * Outer border configuration
         */
        borderOuter?: BorderInnerOuter | null;
        /**
         * Inner border configuration
         */
        borderInner?: BorderInnerOuter | null;
        /**
         * Border decorations configuration
         */
        decorations?: {
            /**
             * Top decoration configuration
             */
            top?: DecorationOptions | null;
            /**
             * Right decoration configuration
             */
            right?: DecorationOptions | null;
            /**
             * Bottom decoration configuration
             */
            bottom?: DecorationOptions | null;
            /**
             * Left decoration configuration
             */
            left?: DecorationOptions | null;
        } | null;
    } | null;
    /**
     * Data to encode in the QR code (optional in this context)
     */
    data?: string;
};
/**
 * Border options configuration
 */
export type BorderOptions = {
    /**
     * Overall shape of the QR code
     */
    shape?: 'square' | 'circle' | null;
    /**
     * Margin around the QR code in pixels
     */
    margin?: number | null;
    /**
     * Whether QR code is responsive
     */
    isResponsive?: boolean | null;
    /**
     * Scale factor for QR code (0-1.5)
     */
    scale?: number | null;
    /**
     * General offset in pixels
     */
    offset?: number | null;
    /**
     * Vertical offset in pixels
     */
    verticalOffset?: number | null;
    /**
     * Horizontal offset in pixels
     */
    horizontalOffset?: number | null;
    /**
     * QR code specific options
     */
    qrOptions?: {
        /**
         * QR code type number (0-40)
         */
        typeNumber?: number | null;
        /**
         * QR code encoding mode
         */
        mode?: 'numeric' | 'alphanumeric' | 'byte' | 'kanji' | 'unicode';
        /**
         * Error correction level
         */
        errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H' | null;
    } | null;
    /**
     * Options for QR code dots
     */
    dotsOptions?: {
        /**
         * Type of dots
         */
        type?: 'dot' | 'square' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'vertical-line' | 'horizontal-line' | 'random-dot' | 'small-square' | 'tiny-square' | 'star' | 'plus' | 'diamond' | null;
        /**
         * Color of dots in CSS format
         */
        color?: string | null;
        /**
         * Size of dots relative to module size (0-1)
         */
        size?: number | null;
        /**
         * Gradient for dots
         */
        gradient?: Gradient | null;
    } | null;
    /**
     * Options for QR code corner squares
     */
    cornersSquareOptions?: {
        /**
         * Type of corner squares
         */
        type?: 'dot' | 'square' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
        /**
         * Color of corner squares in CSS format
         */
        color?: string | null;
        /**
         * Gradient for corner squares
         */
        gradient?: Gradient | null;
    } | null;
    /**
     * Options for QR code corner dots
     */
    cornersDotOptions?: {
        /**
         * Type of corner dots
         */
        type?: 'dot' | 'square' | 'heart' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
        /**
         * Color of corner dots in CSS format
         */
        color?: string | null;
        /**
         * Gradient for corner dots
         */
        gradient?: Gradient | null;
    } | null;
    /**
     * Options for QR code background or false to disable
     */
    backgroundOptions?: {
        /**
         * Background color in CSS format
         */
        color?: string | null;
        /**
         * Background corner rounding (0-1 or CSS value)
         */
        round?: number | string | null;
        /**
         * Gradient for background
         */
        gradient?: Gradient | null;
    } | false;
    /**
     * Image to embed in the QR code (URL, Buffer, or Blob)
     */
    image?: string | unknown | null;
    /**
     * Options for embedded image
     */
    imageOptions?: {
        /**
         * Mode for embedded image
         */
        mode?: 'center' | 'overlay' | 'background' | null;
        /**
         * Size of image relative to QR code (0-1)
         */
        imageSize?: number | null;
        /**
         * Margin around the image in pixels
         */
        margin?: number | null;
        /**
         * Cross-origin attribute for image
         */
        crossOrigin?: string | null;
        /**
         * Fill options for image area
         */
        fill?: {
            /**
             * Fill color in CSS format
             */
            color?: string | null;
            /**
             * Gradient for fill
             */
            gradient?: Gradient | null;
        } | null;
    } | null;
    borderOptions: {
        /**
         * Whether to show border
         */
        hasBorder?: boolean | null;
        /**
         * Border thickness in pixels
         */
        thickness?: number | null;
        /**
         * Border color in CSS format
         */
        color?: string | null;
        /**
         * Border radius in CSS format
         */
        radius?: string | null;
        /**
         * Thickness when no border is shown
         */
        noBorderThickness?: number | null;
        /**
         * Border background color in CSS format
         */
        background?: string | null;
        /**
         * Inner border configuration
         */
        inner?: {
            /**
             * Inner radius in CSS format
             */
            radius?: string | null;
            /**
             * Inner scale factor (0-1.5)
             */
            scale?: number | null;
            /**
             * Inner horizontal offset in pixels
             */
            horizontalOffset?: number | null;
            /**
             * Inner vertical offset in pixels
             */
            verticalOffset?: number | null;
        } | null;
        /**
         * Outer border configuration
         */
        borderOuter?: BorderInnerOuter | null;
        /**
         * Inner border configuration
         */
        borderInner?: BorderInnerOuter | null;
        /**
         * Border decorations configuration
         */
        decorations?: {
            /**
             * Top decoration configuration
             */
            top?: DecorationOptions | null;
            /**
             * Right decoration configuration
             */
            right?: DecorationOptions | null;
            /**
             * Bottom decoration configuration
             */
            bottom?: DecorationOptions | null;
            /**
             * Left decoration configuration
             */
            left?: DecorationOptions | null;
        } | null;
    };
};
/**
 * Text options configuration
 */
export type TextOptions = {
    /**
     * Text value for all positions
     */
    value?: string | null;
    /**
     * Text value for the top position
     */
    topValue?: string | null;
    /**
     * Text value for the bottom position
     */
    bottomValue?: string | null;
    /**
     * Text value for the right position
     */
    rightValue?: string | null;
    /**
     * Text value for the left position
     */
    leftValue?: string | null;
};
/**
 * QR code response with audit information
 */
export type BaseCodeResponseWithAudit = BaseCodeResponse & {
    /**
     * User who created the resource
     */
    createdByUser?: AuditInfoMember | null;
    /**
     * User who last updated the resource
     */
    updatedByUser?: AuditInfoMember | null;
    /**
     * API key used to create the resource
     */
    createdByApiKey?: AuditInfoApiKey | null;
    /**
     * API key used to last update the resource
     */
    updatedByApiKey?: AuditInfoApiKey | null;
    /**
     * When the resource was created
     */
    createdAt?: string | null;
    /**
     * When the resource was last updated
     */
    updatedAt?: string | null;
};
/**
 * QR code response with audit information and file links
 */
export type BaseCodeResponseWithAuditAndLinks = BaseCodeResponseWithAudit & {
    /**
     * Array of links to the QR code in different formats
     */
    links?: Array<CodeFileLink>;
};
/**
 * QR code file link
 */
export type CodeFileLink = {
    /**
     * Format of the QR code file
     */
    format: string;
    /**
     * URL to access the QR code file
     */
    url: string;
};
/**
 * QR code response with audit information and file links
 */
export type CodeResponse = BaseCodeResponseWithAuditAndLinks;
export type CodeLinksResponse = {
    /**
     * Unique identifier for the code link
     */
    id: string;
    /**
     * Type of the link file
     */
    type: string;
    /**
     * Name of the link
     */
    name: string;
    /**
     * URL to access the file
     */
    url: string;
    /**
     * When the resource was created
     */
    createdAt?: string | null;
    /**
     * When the resource was last updated
     */
    updatedAt?: string | null;
    /**
     * ID of the user who created the link
     */
    createdByUserId: string | null;
    /**
     * ID of the API key used to create the link
     */
    createdByApiKeyId: string | null;
    /**
     * Associated QR code information
     */
    code: {
        /**
         * ID of the related code
         */
        id: string;
        /**
         * Name of the related code
         */
        name: string | null;
        /**
         * Data encoded in the QR code
         */
        data: string;
        /**
         * Description of the related code
         */
        description: string | null;
    };
    /**
     * Version number of the code
     */
    version?: number;
    /**
     * Whether this link is for the current version
     */
    isCurrentVersion?: boolean;
    /**
     * User who created the resource
     */
    createdByUser?: AuditInfoMember | null;
    /**
     * User who last updated the resource
     */
    updatedByUser?: AuditInfoMember | null;
    /**
     * API key used to create the resource
     */
    createdByApiKey?: AuditInfoApiKey | null;
    /**
     * API key used to last update the resource
     */
    updatedByApiKey?: AuditInfoApiKey | null;
};
/**
 * Error response when the data for QR Code is missing
 */
export type CodeDataRequiredMessage = {
    message: 'QR code data is required';
};
/**
 * Error response when the QR Code configuration is invalid
 */
export type CodeIsInvalidMessage = {
    message: 'QR Code is invalid';
};
/**
 * Error response when an invalid code type is provided
 */
export type InvalidCodeTypeMessage = {
    message: 'Invalid code type provided';
};
/**
 * Error response when a dynamic data is provided for a new static QR code
 */
export type DynamicDataForNewStaticCodeMessage = {
    message: 'Dynamic data is not allowed for static QR codes, you must explicitly set dynamicData to null or remove the dynamicData field from the request body';
};
/**
 * Error response when a dynamic data is required for a dynamic QR code
 */
export type DynamicDataRequiredMessage = {
    message: 'Dynamic QR codes require a dynamicData field to be set';
};
/**
 * Error response when a QR Code with the specified short alias already exists
 */
export type ShortAliasAlreadyTakenMessage = {
    message: 'QR Code with same shortAlias already exists';
};
/**
 * Error response when a short alias is provided for a static QR code
 */
export type ShortAliasForStaticCodeMessage = {
    message: 'Short alias is not allowed for static QR codes, you must explicitly set shortAlias to null or remove the shortAlias field from the request body';
};
/**
 * Error response when a dynamic data points to the redirect domain
 */
export type InfiniteRedirectLoopDetectedMessage = {
    message: 'Dynamic data URL cannot point to the redirect domain. Please use an external domain for the dynamicData URL';
};
/**
 * Error response when a dataType is provided for a static QR code
 */
export type DataTypeForStaticCodeMessage = {
    message: 'Data type is not allowed for static QR codes, you must explicitly set dataType to null or remove the dataType field from the request body';
};
/**
 * Error response when a dataType is provided for a dynamic to static QR code
 */
export type DataTypeForDynamicToStaticCodeMessage = {
    message: 'To convert from dynamic to static QR code, you must explicitly set dataType to null or remove the dataType field from the request body';
};
/**
 * Error response when a data is provided for a dynamic QR code
 */
export type DataForDynamicCodeMessage = {
    message: 'Data is not allowed for dynamic QR codes, you must explicitly set data to null or remove the data field from the request body';
};
/**
 * Indicates that the specified style was not found
 */
export type StyleNotFoundMessage = {
    /**
     * The specified style could not be found
     */
    message: string;
};
/**
 * Indicates that the specified template was not found
 */
export type TemplateNotFoundMessage = {
    /**
     * The specified template could not be found
     */
    message: string;
};
/**
 * Indicates that the specified border entity was not found
 */
export type BorderNotFoundMessage = {
    /**
     * The specified border entity could not be found
     */
    message: string;
};
/**
 * Indicates that the specified text entity was not found
 */
export type TextNotFoundMessage = {
    /**
     * The specified text entity could not be found
     */
    message: string;
};
export type CreateCodeRequest = {
    /**
     * Type of QR code
     */
    type?: 'static' | 'dynamic';
    /**
     * The type of data the QR code contains. Only applies to dynamic codes. Defaults to "url" for dynamic codes. Each dataType has specific content structure requirements. url: {url}, wifi: {ssid, password?, security?, hidden?}, vcard: {fullName?, email?, phone?, organization?}, text: {text}, email: {to, subject?, body?}, event: {eventTitle, startDate, endDate?, location?}, file: {fileName, fileUrl, mimeType?}, json: any valid JSON.
     */
    dataType?: 'url' | 'wifi' | 'vcard' | 'text' | 'email' | 'event' | 'json' | 'file';
    /**
     * Functional content for dynamic QR codes. Structure depends on dataType. url: {url}, wifi: {ssid, password?, security?, hidden?}, vcard: {fullName?, email?, phone?, organization?}, text: {text}, email: {to, subject?, body?}, event: {eventTitle, startDate, endDate?, location?}, file: {fileName, fileUrl, mimeType?}, json: any valid JSON.
     */
    dynamicData?: {
        [key: string]: unknown;
    };
    /**
     * Short alias for the QR code link (URL-safe characters only)
     */
    shortAlias?: string;
    /**
     * QR code data content
     */
    data?: string;
    /**
     * Name of the QR code
     */
    name: string;
    /**
     * Optional description for the QR code
     */
    description?: string;
    /**
     * Custom user metadata for the QR code as JSON object. This is separate from the dynamicData field and can store any additional information about the QR code that is not part of the functional content (e.g., campaign info, tags, internal references).
     */
    metadata?: {
        [key: string]: unknown;
    } | null;
    /**
     * Format for the generated QR code link
     */
    linkFormat?: 'svg' | 'png' | 'pdf';
    /**
     * Whether to validate the QR code during creation
     */
    validate?: boolean;
    /**
     * QR code generation options
     */
    options?: QrCodeOptionsWithOptionalData | null;
    /**
     * Style ID to apply to the QR code
     */
    styleId?: string | null;
    /**
     * Style object with options or style name string
     */
    style?: ({
        id?: string | null;
        options?: StyleOptions | null;
    } | null) | string | null;
    /**
     * Template ID to apply to the QR code
     */
    templateId?: string | null;
    /**
     * Template object with options or template name string
     */
    template?: ({
        id?: string | null;
        options?: QrCodeOptionsWithOptionalData | null;
    } | null) | string | null;
    /**
     * Border ID to apply to the QR code
     */
    borderId?: string | null;
    /**
     * Border object with options or border name string
     */
    border?: ({
        id?: string | null;
        options?: BorderOptions | null;
    } | null) | string | null;
    /**
     * Text ID to apply to the QR code
     */
    textId?: string | null;
    /**
     * Text object with options or text name string
     */
    text?: {
        id?: string | null;
        options?: TextOptions | null;
    } | string | null;
};
/**
 * Error response when attempting to update a soft-deleted code
 */
export type CodeIsSoftDeletedMessage = {
    message: 'Cannot update a soft-deleted code. Please restore the code first';
};
/**
 * Error response when a dynamic data is provided for a static QR code
 */
export type DynamicDataForStaticCodeMessage = {
    message: 'To convert from dynamic to static QR code, you must explicitly set dynamicData to null or remove the dynamicData field from the request body';
};
/**
 * Error response when a short alias is provided for a dynamic to static QR code
 */
export type ShortAliasForDynamicToStaticCodeMessage = {
    message: 'To convert from dynamic to static QR code, you must explicitly set shortAlias to null or remove the shortAlias field from the request body';
};
export type UpdateCodeRequest = {
    /**
     * Type of QR code
     */
    type?: 'static' | 'dynamic';
    /**
     * The type of data the QR code contains. Only applies to dynamic codes. Determines how the QR code data is processed and what content type is returned when scanned. Each dataType has specific content structure requirements.
     */
    dataType?: 'url' | 'wifi' | 'vcard' | 'text' | 'email' | 'event' | 'json' | 'file' | null;
    /**
     * Functional content for dynamic QR codes. Structure depends on dataType. url: {url}, wifi: {ssid, password?, security?, hidden?}, vcard: {fullName?, email?, phone?, organization?}, text: {text}, email: {to, subject?, body?}, event: {eventTitle, startDate, endDate?, location?}, file: {fileName, fileUrl, mimeType?}, json: any valid JSON.
     */
    dynamicData?: {
        [key: string]: unknown;
    } | null;
    /**
     * Short alias for the QR code link (URL-safe characters only)
     */
    shortAlias?: string | null;
    /**
     * QR code data content
     */
    data?: string | null;
    /**
     * QR code generation options
     */
    options?: QrCodeOptionsWithOptionalData | null;
    /**
     * Name of the QR code
     */
    name?: string;
    /**
     * Description for the QR code
     */
    description?: string;
    /**
     * Custom user metadata for the QR code as JSON object. This is separate from the dynamicData field and can store any additional information about the QR code that is not part of the functional content (e.g., campaign info, tags, internal references).
     */
    metadata?: {
        [key: string]: unknown;
    } | null;
    /**
     * Style ID to apply to the QR code
     */
    styleId?: string | null;
    /**
     * Style object with options or style name string
     */
    style?: {
        id?: string | null;
        name?: string | null;
        options?: StyleOptions | null;
    } | string | null;
    /**
     * Template ID to apply to the QR code
     */
    templateId?: string | null;
    /**
     * Template object with options or template name string
     */
    template?: {
        id?: string | null;
        name?: string | null;
        options?: QrCodeOptionsWithOptionalData | null;
    } | string | null;
    /**
     * Border ID to apply to the QR code
     */
    borderId?: string | null;
    /**
     * Border object with options or border name string
     */
    border?: {
        id?: string | null;
        name?: string | null;
        options?: BorderOptions | null;
    } | string | null;
    /**
     * Text ID to apply to the QR code
     */
    textId?: string | null;
    /**
     * Text object with options or text name string
     */
    text?: {
        id?: string | null;
        name?: string | null;
        options?: TextOptions | null;
    } | string | null;
    /**
     * Format for the generated QR code link. Return existing link if generated before or create new link with provided format.
     */
    linkFormat?: 'svg' | 'png' | 'pdf';
    /**
     * Whether to validate the QR code during update
     */
    validate?: boolean;
};
/**
 * Error response when at least one field within options is required for an update operation
 */
export type UpdateOptionsFieldRequiredMessage = {
    message: string;
};
export type UpdateCodeOptionsRequest = {
    /**
     * The type of data the QR code contains. Only applies to dynamic codes. Determines how the QR code data is processed and what content type is returned when scanned.
     */
    dataType?: 'url' | 'wifi' | 'vcard' | 'text' | 'email' | 'event' | 'json' | 'file';
    /**
     * Partial QR code generation options to update. All fields are optional. At least one option field must be provided.
     */
    options: {
        /**
         * Data to encode in the QR code (required)
         */
        data?: string;
        /**
         * Shape of the QR code
         */
        shape?: 'square' | 'circle' | null;
        margin?: number | null;
        isResponsive?: boolean | null;
        scale?: number | null;
        offset?: number | null;
        verticalOffset?: number | null;
        horizontalOffset?: number | null;
        qrOptions?: {
            typeNumber?: number | null;
            /**
             * QR code encoding mode
             */
            mode?: 'numeric' | 'alphanumeric' | 'byte' | 'kanji' | 'unicode';
            /**
             * Error correction level (L: 7%, M: 15%, Q: 25%, H: 30%)
             */
            errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H' | null;
        } | null;
        dotsOptions?: {
            /**
             * Type of dots in QR code
             */
            type?: 'dot' | 'square' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'vertical-line' | 'horizontal-line' | 'random-dot' | 'small-square' | 'tiny-square' | 'star' | 'plus' | 'diamond' | null;
            color?: string | null;
            size?: number | null;
            /**
             * Gradient definition
             */
            gradient?: {
                type?: 'linear' | 'radial';
                rotation?: number;
                colorStops?: Array<{
                    offset?: number;
                    color?: string;
                }>;
            } | null;
        } | null;
        cornersSquareOptions?: {
            /**
             * Type of corner squares in QR code
             */
            type?: 'dot' | 'square' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
            color?: string | null;
            /**
             * Gradient definition
             */
            gradient?: {
                type?: 'linear' | 'radial';
                rotation?: number;
                colorStops?: Array<{
                    offset?: number;
                    color?: string;
                }>;
            } | null;
        } | null;
        cornersDotOptions?: {
            /**
             * Type of corner dots in QR code
             */
            type?: 'dot' | 'square' | 'heart' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
            color?: string | null;
            /**
             * Gradient definition
             */
            gradient?: {
                type?: 'linear' | 'radial';
                rotation?: number;
                colorStops?: Array<{
                    offset?: number;
                    color?: string;
                }>;
            } | null;
        } | null;
        backgroundOptions?: {
            /**
             * Background color in CSS format
             */
            color?: string | null;
            /**
             * Background corner rounding (0-1 or CSS value)
             */
            round?: number | string | null;
            /**
             * Gradient for background
             */
            gradient?: Gradient | null;
        } | false;
        image?: string | unknown | null;
        imageOptions?: {
            /**
             * Mode for embedding images in QR code
             */
            mode?: 'center' | 'overlay' | 'background' | null;
            imageSize?: number | null;
            margin?: number | null;
            crossOrigin?: string | null;
            fill?: {
                color?: string | null;
                /**
                 * Gradient definition
                 */
                gradient?: {
                    type?: 'linear' | 'radial';
                    rotation?: number;
                    colorStops?: Array<{
                        offset?: number;
                        color?: string;
                    }>;
                } | null;
            } | null;
        } | null;
        borderOptions?: {
            hasBorder?: boolean | null;
            thickness?: number | null;
            color?: string | null;
            radius?: string | null;
            noBorderThickness?: number | null;
            background?: string | null;
            inner?: {
                radius?: string | null;
                scale?: number | null;
                horizontalOffset?: number | null;
                verticalOffset?: number | null;
            } | null;
            /**
             * Inner or outer border configuration
             */
            borderOuter?: {
                color?: string;
                thickness?: number;
            } | null;
            /**
             * Inner or outer border configuration
             */
            borderInner?: {
                color?: string;
                thickness?: number;
            } | null;
            decorations?: {
                /**
                 * Options for QR code decoration
                 */
                top?: {
                    disabled?: boolean;
                    enableText?: boolean;
                    offset?: number;
                    curveAdjustment?: number;
                    curveDisabled?: boolean;
                    curveRadius?: string;
                    type?: 'text' | 'image';
                    value?: string;
                    /**
                     * Text decoration style
                     */
                    style?: {
                        fontFace?: string;
                        fontSize?: number;
                        fontColor?: string;
                        letterSpacing?: number;
                        fontWeight?: 'normal' | 'bold';
                    };
                } | null;
                /**
                 * Options for QR code decoration
                 */
                right?: {
                    disabled?: boolean;
                    enableText?: boolean;
                    offset?: number;
                    curveAdjustment?: number;
                    curveDisabled?: boolean;
                    curveRadius?: string;
                    type?: 'text' | 'image';
                    value?: string;
                    /**
                     * Text decoration style
                     */
                    style?: {
                        fontFace?: string;
                        fontSize?: number;
                        fontColor?: string;
                        letterSpacing?: number;
                        fontWeight?: 'normal' | 'bold';
                    };
                } | null;
                /**
                 * Options for QR code decoration
                 */
                bottom?: {
                    disabled?: boolean;
                    enableText?: boolean;
                    offset?: number;
                    curveAdjustment?: number;
                    curveDisabled?: boolean;
                    curveRadius?: string;
                    type?: 'text' | 'image';
                    value?: string;
                    /**
                     * Text decoration style
                     */
                    style?: {
                        fontFace?: string;
                        fontSize?: number;
                        fontColor?: string;
                        letterSpacing?: number;
                        fontWeight?: 'normal' | 'bold';
                    };
                } | null;
                /**
                 * Options for QR code decoration
                 */
                left?: {
                    disabled?: boolean;
                    enableText?: boolean;
                    offset?: number;
                    curveAdjustment?: number;
                    curveDisabled?: boolean;
                    curveRadius?: string;
                    type?: 'text' | 'image';
                    value?: string;
                    /**
                     * Text decoration style
                     */
                    style?: {
                        fontFace?: string;
                        fontSize?: number;
                        fontColor?: string;
                        letterSpacing?: number;
                        fontWeight?: 'normal' | 'bold';
                    };
                } | null;
            } | null;
        } | null;
    };
    /**
     * Format for the generated QR code link. Return existing link if generated before or create new link with provided format.
     */
    linkFormat?: 'svg' | 'png' | 'pdf';
    /**
     * Whether to validate the QR code after updating options.
     */
    validate?: boolean;
};
export type BulkPermanentDeleteCodesResponse = {
    /**
     * Success message for the bulk permanent deletion operation
     */
    message: string;
    /**
     * Detailed results categorized by outcome (only included when showDetails=true)
     */
    details?: {
        /**
         * Array of code IDs that were successfully permanently deleted
         */
        deleted: Array<string>;
        /**
         * Array of code IDs that were not found
         */
        notFound: Array<string>;
        /**
         * Array of code IDs that user has no access to
         */
        forbidden: Array<string>;
        /**
         * Array of code IDs that encountered errors during permanent deletion
         */
        failed: Array<string>;
    };
};
export type CodeSoftDeleteResponse = {
    /**
     * Confirmation message
     */
    message: string;
};
/**
 * Error response when a code is already deleted
 */
export type CodeAlreadyDeletedMessage = {
    message: 'QR Code is already deleted';
};
export type FileDeleteResponse = {
    /**
     * Confirmation message
     */
    message: string;
};
/**
 * Error response when a code is not soft deleted
 */
export type CodeNotSoftDeletedMessage = {
    message: 'QR Code is not soft deleted';
};
/**
 * Error response when a code is not deleted
 */
export type CodeNotDeletedMessage = {
    message: 'QR Code is not deleted';
};
export type BulkSoftDeleteCodesResponse = {
    /**
     * Success message for the bulk operation
     */
    message: string;
    /**
     * Detailed results categorized by outcome (only included when showDetails=true)
     */
    details?: {
        /**
         * Array of code IDs that were successfully soft deleted
         */
        deleted: Array<string>;
        /**
         * Array of code IDs that were already soft deleted
         */
        alreadyDeleted: Array<string>;
        /**
         * Array of code IDs that were not found
         */
        notFound: Array<string>;
        /**
         * Array of code IDs that user has no access to
         */
        forbidden: Array<string>;
        /**
         * Array of code IDs that encountered errors during deletion
         */
        failed: Array<string>;
    };
};
export type BulkGetCodesResponse = {
    /**
     * Array of successfully retrieved QR codes
     */
    data: Array<CodeResponse>;
    /**
     * Summary statistics of the bulk get operation
     */
    summary: {
        /**
         * Total number of code IDs requested
         */
        requested: number;
        /**
         * Number of codes successfully retrieved
         */
        found: number;
        /**
         * Number of codes that were not found
         */
        notFound: number;
        /**
         * Number of codes user has no access to
         */
        forbidden: number;
        /**
         * Number of codes that encountered errors during retrieval
         */
        failed: number;
    };
    /**
     * Detailed error information categorized by error type (only included when showDetails=true)
     */
    errors?: {
        /**
         * Array of code IDs that were not found
         */
        notFound: Array<string>;
        /**
         * Array of code IDs that user has no access to
         */
        forbidden: Array<string>;
        /**
         * Array of code IDs that encountered errors during retrieval
         */
        failed: Array<string>;
    };
};
/**
 * Validation error response message
 */
export type ValidationErrorResponseMessage = {
    message: string;
    errors?: Array<unknown>;
};
export type GenerateCodeRequest = {
    /**
     * QR code data content
     */
    data?: string;
    /**
     * QR code generation options
     */
    options?: {
        /**
         * Overall shape of the QR code
         */
        shape?: 'square' | 'circle' | null;
        /**
         * Margin around the QR code in pixels
         */
        margin?: number | null;
        /**
         * Whether QR code is responsive
         */
        isResponsive?: boolean | null;
        /**
         * Scale factor for QR code (0-1.5)
         */
        scale?: number | null;
        /**
         * General offset in pixels
         */
        offset?: number | null;
        /**
         * Vertical offset in pixels
         */
        verticalOffset?: number | null;
        /**
         * Horizontal offset in pixels
         */
        horizontalOffset?: number | null;
        /**
         * QR code specific options
         */
        qrOptions?: {
            /**
             * QR code type number (0-40)
             */
            typeNumber?: number | null;
            /**
             * QR code encoding mode
             */
            mode?: 'numeric' | 'alphanumeric' | 'byte' | 'kanji' | 'unicode';
            /**
             * Error correction level
             */
            errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H' | null;
        } | null;
        /**
         * Options for QR code dots
         */
        dotsOptions?: {
            /**
             * Type of dots
             */
            type?: 'dot' | 'square' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'vertical-line' | 'horizontal-line' | 'random-dot' | 'small-square' | 'tiny-square' | 'star' | 'plus' | 'diamond' | null;
            /**
             * Color of dots in CSS format
             */
            color?: string | null;
            /**
             * Size of dots relative to module size (0-1)
             */
            size?: number | null;
            /**
             * Gradient for dots
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code corner squares
         */
        cornersSquareOptions?: {
            /**
             * Type of corner squares
             */
            type?: 'dot' | 'square' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
            /**
             * Color of corner squares in CSS format
             */
            color?: string | null;
            /**
             * Gradient for corner squares
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code corner dots
         */
        cornersDotOptions?: {
            /**
             * Type of corner dots
             */
            type?: 'dot' | 'square' | 'heart' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
            /**
             * Color of corner dots in CSS format
             */
            color?: string | null;
            /**
             * Gradient for corner dots
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code background or false to disable
         */
        backgroundOptions?: {
            /**
             * Background color in CSS format
             */
            color?: string | null;
            /**
             * Background corner rounding (0-1 or CSS value)
             */
            round?: number | string | null;
            /**
             * Gradient for background
             */
            gradient?: Gradient | null;
        } | false;
        /**
         * Image to embed in the QR code (URL, Buffer, or Blob)
         */
        image?: string | unknown | null;
        /**
         * Options for embedded image
         */
        imageOptions?: {
            /**
             * Mode for embedded image
             */
            mode?: 'center' | 'overlay' | 'background' | null;
            /**
             * Size of image relative to QR code (0-1)
             */
            imageSize?: number | null;
            /**
             * Margin around the image in pixels
             */
            margin?: number | null;
            /**
             * Cross-origin attribute for image
             */
            crossOrigin?: string | null;
            /**
             * Fill options for image area
             */
            fill?: {
                /**
                 * Fill color in CSS format
                 */
                color?: string | null;
                /**
                 * Gradient for fill
                 */
                gradient?: Gradient | null;
            } | null;
        } | null;
        /**
         * Border configuration options
         */
        borderOptions?: {
            /**
             * Whether to show border
             */
            hasBorder?: boolean | null;
            /**
             * Border thickness in pixels
             */
            thickness?: number | null;
            /**
             * Border color in CSS format
             */
            color?: string | null;
            /**
             * Border radius in CSS format
             */
            radius?: string | null;
            /**
             * Thickness when no border is shown
             */
            noBorderThickness?: number | null;
            /**
             * Border background color in CSS format
             */
            background?: string | null;
            /**
             * Inner border configuration
             */
            inner?: {
                /**
                 * Inner radius in CSS format
                 */
                radius?: string | null;
                /**
                 * Inner scale factor (0-1.5)
                 */
                scale?: number | null;
                /**
                 * Inner horizontal offset in pixels
                 */
                horizontalOffset?: number | null;
                /**
                 * Inner vertical offset in pixels
                 */
                verticalOffset?: number | null;
            } | null;
            /**
             * Outer border configuration
             */
            borderOuter?: BorderInnerOuter | null;
            /**
             * Inner border configuration
             */
            borderInner?: BorderInnerOuter | null;
            /**
             * Border decorations configuration
             */
            decorations?: {
                /**
                 * Top decoration configuration
                 */
                top?: DecorationOptions | null;
                /**
                 * Right decoration configuration
                 */
                right?: DecorationOptions | null;
                /**
                 * Bottom decoration configuration
                 */
                bottom?: DecorationOptions | null;
                /**
                 * Left decoration configuration
                 */
                left?: DecorationOptions | null;
            } | null;
        } | null;
        /**
         * Data to encode in the QR code (optional in this context)
         */
        data?: string;
    };
    /**
     * Style ID to apply to the QR code
     */
    styleId?: string | null;
    /**
     * Style object with options or style name string
     */
    style?: ({
        options?: StyleOptions | null;
    } | null) | string | null;
    /**
     * Template ID to apply to the QR code
     */
    templateId?: string | null;
    /**
     * Template object with options or template ID string
     */
    template?: ({
        /**
         * Complete configuration for QR code generation
         */
        options?: {
            /**
             * Overall shape of the QR code
             */
            shape?: 'square' | 'circle' | null;
            /**
             * Margin around the QR code in pixels
             */
            margin?: number | null;
            /**
             * Whether QR code is responsive
             */
            isResponsive?: boolean | null;
            /**
             * Scale factor for QR code (0-1.5)
             */
            scale?: number | null;
            /**
             * General offset in pixels
             */
            offset?: number | null;
            /**
             * Vertical offset in pixels
             */
            verticalOffset?: number | null;
            /**
             * Horizontal offset in pixels
             */
            horizontalOffset?: number | null;
            /**
             * QR code specific options
             */
            qrOptions?: {
                /**
                 * QR code type number (0-40)
                 */
                typeNumber?: number | null;
                /**
                 * QR code encoding mode
                 */
                mode?: 'numeric' | 'alphanumeric' | 'byte' | 'kanji' | 'unicode';
                /**
                 * Error correction level
                 */
                errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H' | null;
            } | null;
            /**
             * Options for QR code dots
             */
            dotsOptions?: {
                /**
                 * Type of dots
                 */
                type?: 'dot' | 'square' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'vertical-line' | 'horizontal-line' | 'random-dot' | 'small-square' | 'tiny-square' | 'star' | 'plus' | 'diamond' | null;
                /**
                 * Color of dots in CSS format
                 */
                color?: string | null;
                /**
                 * Size of dots relative to module size (0-1)
                 */
                size?: number | null;
                /**
                 * Gradient for dots
                 */
                gradient?: Gradient | null;
            } | null;
            /**
             * Options for QR code corner squares
             */
            cornersSquareOptions?: {
                /**
                 * Type of corner squares
                 */
                type?: 'dot' | 'square' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
                /**
                 * Color of corner squares in CSS format
                 */
                color?: string | null;
                /**
                 * Gradient for corner squares
                 */
                gradient?: Gradient | null;
            } | null;
            /**
             * Options for QR code corner dots
             */
            cornersDotOptions?: {
                /**
                 * Type of corner dots
                 */
                type?: 'dot' | 'square' | 'heart' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
                /**
                 * Color of corner dots in CSS format
                 */
                color?: string | null;
                /**
                 * Gradient for corner dots
                 */
                gradient?: Gradient | null;
            } | null;
            /**
             * Options for QR code background or false to disable
             */
            backgroundOptions?: {
                /**
                 * Background color in CSS format
                 */
                color?: string | null;
                /**
                 * Background corner rounding (0-1 or CSS value)
                 */
                round?: number | string | null;
                /**
                 * Gradient for background
                 */
                gradient?: Gradient | null;
            } | false;
            /**
             * Image to embed in the QR code (URL, Buffer, or Blob)
             */
            image?: string | unknown | null;
            /**
             * Options for embedded image
             */
            imageOptions?: {
                /**
                 * Mode for embedded image
                 */
                mode?: 'center' | 'overlay' | 'background' | null;
                /**
                 * Size of image relative to QR code (0-1)
                 */
                imageSize?: number | null;
                /**
                 * Margin around the image in pixels
                 */
                margin?: number | null;
                /**
                 * Cross-origin attribute for image
                 */
                crossOrigin?: string | null;
                /**
                 * Fill options for image area
                 */
                fill?: {
                    /**
                     * Fill color in CSS format
                     */
                    color?: string | null;
                    /**
                     * Gradient for fill
                     */
                    gradient?: Gradient | null;
                } | null;
            } | null;
            /**
             * Border configuration options
             */
            borderOptions?: {
                /**
                 * Whether to show border
                 */
                hasBorder?: boolean | null;
                /**
                 * Border thickness in pixels
                 */
                thickness?: number | null;
                /**
                 * Border color in CSS format
                 */
                color?: string | null;
                /**
                 * Border radius in CSS format
                 */
                radius?: string | null;
                /**
                 * Thickness when no border is shown
                 */
                noBorderThickness?: number | null;
                /**
                 * Border background color in CSS format
                 */
                background?: string | null;
                /**
                 * Inner border configuration
                 */
                inner?: {
                    /**
                     * Inner radius in CSS format
                     */
                    radius?: string | null;
                    /**
                     * Inner scale factor (0-1.5)
                     */
                    scale?: number | null;
                    /**
                     * Inner horizontal offset in pixels
                     */
                    horizontalOffset?: number | null;
                    /**
                     * Inner vertical offset in pixels
                     */
                    verticalOffset?: number | null;
                } | null;
                /**
                 * Outer border configuration
                 */
                borderOuter?: BorderInnerOuter | null;
                /**
                 * Inner border configuration
                 */
                borderInner?: BorderInnerOuter | null;
                /**
                 * Border decorations configuration
                 */
                decorations?: {
                    /**
                     * Top decoration configuration
                     */
                    top?: DecorationOptions | null;
                    /**
                     * Right decoration configuration
                     */
                    right?: DecorationOptions | null;
                    /**
                     * Bottom decoration configuration
                     */
                    bottom?: DecorationOptions | null;
                    /**
                     * Left decoration configuration
                     */
                    left?: DecorationOptions | null;
                } | null;
            } | null;
        } | null;
    } | null) | string | null;
    /**
     * Border ID to apply to the QR code
     */
    borderId?: string | null;
    /**
     * Border object with options or border ID string
     */
    border?: ({
        options?: BorderOptions | null;
    } | null) | string | null;
    /**
     * Text ID to apply to the QR code
     */
    textId?: string | null;
    /**
     * Text object with options or text ID string
     */
    text?: ({
        options?: TextOptions | null;
    } | null) | string | null;
};
export type CodeValidationResponse = {
    /**
     * Whether the QR code options are valid
     */
    isValid: boolean;
};
export type ExistingCodeValidationResponse = {
    /**
     * Unique identifier for the QR code
     */
    id: string;
    /**
     * Whether the QR code is valid
     */
    isValid: boolean;
    /**
     * Detailed validation results
     */
    validationDetails: {
        /**
         * Boolean indicating if the QR code uses inverted colors
         */
        isInverted: boolean;
        /**
         * The decoded data from the QR code
         */
        data?: string | null;
        /**
         * Validation message explaining the result
         */
        message: string;
        /**
         * Number of decoding attempts made
         */
        attempts?: number | null;
        /**
         * Identifier of the validation method used
         */
        validator: string;
    };
};
export type RefreshCodeLinksResponse = {
    /**
     * Whether the operation was successful
     */
    success: boolean;
    /**
     * Summary of the regeneration operation
     */
    summary: {
        /**
         * Number of code versions processed
         */
        codeVersionsProcessed: number;
        /**
         * Number of files regenerated
         */
        filesRegenerated: number;
        /**
         * Number of errors encountered
         */
        errors: number;
    };
};
/**
 * QR code response with audit information and file links
 */
export type CodeVersionResponse = BaseCodeResponseWithAuditAndLinks;
/**
 * Indicates that the specified QR code version was not found
 */
export type VersionNotFoundMessage = {
    /**
     * The specified QR code version could not be found
     */
    message: string;
};
export type CodeVersionsDeleteResponse = {
    /**
     * Confirmation message
     */
    message: string;
};
export type FileUrlResponse = {
    /**
     * URL to access the generated file
     */
    url: string;
};
/**
 * Indicates that the specified QR code link was not found
 */
export type LinkNotFoundMessage = {
    /**
     * The specified QR code link could not be found
     */
    message: string;
};
/**
 * Error response when no link is found for a specified file type for a code version
 */
export type CodeVersionLinkNotFoundForTypeMessage = {
    message: 'No link found for the specified file type for this code version';
};
/**
 * Error response when no code versions are found to delete links from
 */
export type CodeNoVersionsFoundForLinkDeletionMessage = {
    message: 'No code versions found to delete links from';
};
/**
 * Error response when no links of a specified type are found for any code version
 */
export type CodeNoLinksOfTypeFoundForAnyVersionMessage = {
    message: 'No links of the specified file type found for any code version';
};
/**
 * Response schema for a template
 */
export type TemplateResponse = {
    /**
     * Unique identifier for the template
     */
    id: string;
    /**
     * Name of the template
     */
    name: string;
    /**
     * Description of the template
     */
    description?: string | null;
    /**
     * QR code options for the template (without data field)
     */
    options: {
        /**
         * Overall shape of the QR code
         */
        shape?: 'square' | 'circle' | null;
        /**
         * Margin around the QR code in pixels
         */
        margin?: number | null;
        /**
         * Whether QR code is responsive
         */
        isResponsive?: boolean | null;
        /**
         * Scale factor for QR code (0-1.5)
         */
        scale?: number | null;
        /**
         * General offset in pixels
         */
        offset?: number | null;
        /**
         * Vertical offset in pixels
         */
        verticalOffset?: number | null;
        /**
         * Horizontal offset in pixels
         */
        horizontalOffset?: number | null;
        /**
         * QR code specific options
         */
        qrOptions?: {
            /**
             * QR code type number (0-40)
             */
            typeNumber?: number | null;
            /**
             * QR code encoding mode
             */
            mode?: 'numeric' | 'alphanumeric' | 'byte' | 'kanji' | 'unicode';
            /**
             * Error correction level
             */
            errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H' | null;
        } | null;
        /**
         * Options for QR code dots
         */
        dotsOptions?: {
            /**
             * Type of dots
             */
            type?: 'dot' | 'square' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'vertical-line' | 'horizontal-line' | 'random-dot' | 'small-square' | 'tiny-square' | 'star' | 'plus' | 'diamond' | null;
            /**
             * Color of dots in CSS format
             */
            color?: string | null;
            /**
             * Size of dots relative to module size (0-1)
             */
            size?: number | null;
            /**
             * Gradient for dots
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code corner squares
         */
        cornersSquareOptions?: {
            /**
             * Type of corner squares
             */
            type?: 'dot' | 'square' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
            /**
             * Color of corner squares in CSS format
             */
            color?: string | null;
            /**
             * Gradient for corner squares
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code corner dots
         */
        cornersDotOptions?: {
            /**
             * Type of corner dots
             */
            type?: 'dot' | 'square' | 'heart' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
            /**
             * Color of corner dots in CSS format
             */
            color?: string | null;
            /**
             * Gradient for corner dots
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code background or false to disable
         */
        backgroundOptions?: {
            /**
             * Background color in CSS format
             */
            color?: string | null;
            /**
             * Background corner rounding (0-1 or CSS value)
             */
            round?: number | string | null;
            /**
             * Gradient for background
             */
            gradient?: Gradient | null;
        } | false;
        /**
         * Image to embed in the QR code (URL, Buffer, or Blob)
         */
        image?: string | unknown | null;
        /**
         * Options for embedded image
         */
        imageOptions?: {
            /**
             * Mode for embedded image
             */
            mode?: 'center' | 'overlay' | 'background' | null;
            /**
             * Size of image relative to QR code (0-1)
             */
            imageSize?: number | null;
            /**
             * Margin around the image in pixels
             */
            margin?: number | null;
            /**
             * Cross-origin attribute for image
             */
            crossOrigin?: string | null;
            /**
             * Fill options for image area
             */
            fill?: {
                /**
                 * Fill color in CSS format
                 */
                color?: string | null;
                /**
                 * Gradient for fill
                 */
                gradient?: Gradient | null;
            } | null;
        } | null;
        /**
         * Border configuration options
         */
        borderOptions?: {
            /**
             * Whether to show border
             */
            hasBorder?: boolean | null;
            /**
             * Border thickness in pixels
             */
            thickness?: number | null;
            /**
             * Border color in CSS format
             */
            color?: string | null;
            /**
             * Border radius in CSS format
             */
            radius?: string | null;
            /**
             * Thickness when no border is shown
             */
            noBorderThickness?: number | null;
            /**
             * Border background color in CSS format
             */
            background?: string | null;
            /**
             * Inner border configuration
             */
            inner?: {
                /**
                 * Inner radius in CSS format
                 */
                radius?: string | null;
                /**
                 * Inner scale factor (0-1.5)
                 */
                scale?: number | null;
                /**
                 * Inner horizontal offset in pixels
                 */
                horizontalOffset?: number | null;
                /**
                 * Inner vertical offset in pixels
                 */
                verticalOffset?: number | null;
            } | null;
            /**
             * Outer border configuration
             */
            borderOuter?: BorderInnerOuter | null;
            /**
             * Inner border configuration
             */
            borderInner?: BorderInnerOuter | null;
            /**
             * Border decorations configuration
             */
            decorations?: {
                /**
                 * Top decoration configuration
                 */
                top?: DecorationOptions | null;
                /**
                 * Right decoration configuration
                 */
                right?: DecorationOptions | null;
                /**
                 * Bottom decoration configuration
                 */
                bottom?: DecorationOptions | null;
                /**
                 * Left decoration configuration
                 */
                left?: DecorationOptions | null;
            } | null;
        } | null;
    };
    /**
     * Custom metadata for the template as JSON object
     */
    metadata: {
        [key: string]: unknown;
    } | null;
    /**
     * Workspace ID if the template is workspace-specific
     */
    workspaceId?: string | null;
    /**
     * User who created the resource
     */
    createdByUser?: AuditInfoMember | null;
    /**
     * User who last updated the resource
     */
    updatedByUser?: AuditInfoMember | null;
    /**
     * API key used to create the resource
     */
    createdByApiKey?: AuditInfoApiKey | null;
    /**
     * API key used to last update the resource
     */
    updatedByApiKey?: AuditInfoApiKey | null;
    /**
     * When the resource was created
     */
    createdAt?: string | null;
    /**
     * When the resource was last updated
     */
    updatedAt?: string | null;
};
/**
 * Error response when required options are missing for an operation
 */
export type OptionsRequiredMessage = {
    message: string;
};
/**
 * Error response when a template entity name is already taken within the scope (organization/workspace)
 */
export type TemplateNameTakenMessage = {
    message: 'Template name is already taken';
};
/**
 * Base template schema
 */
export type TemplateBase = {
    /**
     * Name of the template
     */
    name: string;
    /**
     * Description of the template
     */
    description?: string;
    /**
     * QR code options for the template (without data field)
     */
    options: {
        /**
         * Overall shape of the QR code
         */
        shape?: 'square' | 'circle' | null;
        /**
         * Margin around the QR code in pixels
         */
        margin?: number | null;
        /**
         * Whether QR code is responsive
         */
        isResponsive?: boolean | null;
        /**
         * Scale factor for QR code (0-1.5)
         */
        scale?: number | null;
        /**
         * General offset in pixels
         */
        offset?: number | null;
        /**
         * Vertical offset in pixels
         */
        verticalOffset?: number | null;
        /**
         * Horizontal offset in pixels
         */
        horizontalOffset?: number | null;
        /**
         * QR code specific options
         */
        qrOptions?: {
            /**
             * QR code type number (0-40)
             */
            typeNumber?: number | null;
            /**
             * QR code encoding mode
             */
            mode?: 'numeric' | 'alphanumeric' | 'byte' | 'kanji' | 'unicode';
            /**
             * Error correction level
             */
            errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H' | null;
        } | null;
        /**
         * Options for QR code dots
         */
        dotsOptions?: {
            /**
             * Type of dots
             */
            type?: 'dot' | 'square' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'vertical-line' | 'horizontal-line' | 'random-dot' | 'small-square' | 'tiny-square' | 'star' | 'plus' | 'diamond' | null;
            /**
             * Color of dots in CSS format
             */
            color?: string | null;
            /**
             * Size of dots relative to module size (0-1)
             */
            size?: number | null;
            /**
             * Gradient for dots
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code corner squares
         */
        cornersSquareOptions?: {
            /**
             * Type of corner squares
             */
            type?: 'dot' | 'square' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
            /**
             * Color of corner squares in CSS format
             */
            color?: string | null;
            /**
             * Gradient for corner squares
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code corner dots
         */
        cornersDotOptions?: {
            /**
             * Type of corner dots
             */
            type?: 'dot' | 'square' | 'heart' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
            /**
             * Color of corner dots in CSS format
             */
            color?: string | null;
            /**
             * Gradient for corner dots
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code background or false to disable
         */
        backgroundOptions?: {
            /**
             * Background color in CSS format
             */
            color?: string | null;
            /**
             * Background corner rounding (0-1 or CSS value)
             */
            round?: number | string | null;
            /**
             * Gradient for background
             */
            gradient?: Gradient | null;
        } | false;
        /**
         * Image to embed in the QR code (URL, Buffer, or Blob)
         */
        image?: string | unknown | null;
        /**
         * Options for embedded image
         */
        imageOptions?: {
            /**
             * Mode for embedded image
             */
            mode?: 'center' | 'overlay' | 'background' | null;
            /**
             * Size of image relative to QR code (0-1)
             */
            imageSize?: number | null;
            /**
             * Margin around the image in pixels
             */
            margin?: number | null;
            /**
             * Cross-origin attribute for image
             */
            crossOrigin?: string | null;
            /**
             * Fill options for image area
             */
            fill?: {
                /**
                 * Fill color in CSS format
                 */
                color?: string | null;
                /**
                 * Gradient for fill
                 */
                gradient?: Gradient | null;
            } | null;
        } | null;
        /**
         * Border configuration options
         */
        borderOptions?: {
            /**
             * Whether to show border
             */
            hasBorder?: boolean | null;
            /**
             * Border thickness in pixels
             */
            thickness?: number | null;
            /**
             * Border color in CSS format
             */
            color?: string | null;
            /**
             * Border radius in CSS format
             */
            radius?: string | null;
            /**
             * Thickness when no border is shown
             */
            noBorderThickness?: number | null;
            /**
             * Border background color in CSS format
             */
            background?: string | null;
            /**
             * Inner border configuration
             */
            inner?: {
                /**
                 * Inner radius in CSS format
                 */
                radius?: string | null;
                /**
                 * Inner scale factor (0-1.5)
                 */
                scale?: number | null;
                /**
                 * Inner horizontal offset in pixels
                 */
                horizontalOffset?: number | null;
                /**
                 * Inner vertical offset in pixels
                 */
                verticalOffset?: number | null;
            } | null;
            /**
             * Outer border configuration
             */
            borderOuter?: BorderInnerOuter | null;
            /**
             * Inner border configuration
             */
            borderInner?: BorderInnerOuter | null;
            /**
             * Border decorations configuration
             */
            decorations?: {
                /**
                 * Top decoration configuration
                 */
                top?: DecorationOptions | null;
                /**
                 * Right decoration configuration
                 */
                right?: DecorationOptions | null;
                /**
                 * Bottom decoration configuration
                 */
                bottom?: DecorationOptions | null;
                /**
                 * Left decoration configuration
                 */
                left?: DecorationOptions | null;
            } | null;
        } | null;
    };
    /**
     * Custom metadata for the template as JSON object
     */
    metadata?: {
        [key: string]: unknown;
    } | null;
    /**
     * Workspace ID if the template is workspace-specific
     */
    workspaceId?: string | null;
};
/**
 * Schema for creating a new template
 */
export type CreateTemplate = TemplateBase;
/**
 * Response schema for getting templates
 */
export type GetTemplatesResponse = {
    /**
     * Templates available at the organization level
     */
    organizations: Array<TemplateResponse>;
    /**
     * Templates available at the workspace level
     */
    workspaces: Array<TemplateResponse>;
};
/**
 * Response body when no templates are found for the organization context
 */
export type EmptyTemplatesOrgContextResponse = {
    /**
     * Should be empty or not present
     */
    organizations: Array<unknown>;
    /**
     * Should be empty or not present
     */
    workspaces: Array<unknown>;
};
/**
 * A list of predefined base templates
 */
export type BaseTemplates = Array<BaseTemplate>;
/**
 * A predefined base template that can be used as a template
 */
export type BaseTemplate = {
    /**
     * Unique identifier of the base template
     */
    id: string;
    /**
     * Name of the base template
     */
    name: string;
    /**
     * QR code options for the template (without data field)
     */
    options: {
        /**
         * Overall shape of the QR code
         */
        shape?: 'square' | 'circle' | null;
        /**
         * Margin around the QR code in pixels
         */
        margin?: number | null;
        /**
         * Whether QR code is responsive
         */
        isResponsive?: boolean | null;
        /**
         * Scale factor for QR code (0-1.5)
         */
        scale?: number | null;
        /**
         * General offset in pixels
         */
        offset?: number | null;
        /**
         * Vertical offset in pixels
         */
        verticalOffset?: number | null;
        /**
         * Horizontal offset in pixels
         */
        horizontalOffset?: number | null;
        /**
         * QR code specific options
         */
        qrOptions?: {
            /**
             * QR code type number (0-40)
             */
            typeNumber?: number | null;
            /**
             * QR code encoding mode
             */
            mode?: 'numeric' | 'alphanumeric' | 'byte' | 'kanji' | 'unicode';
            /**
             * Error correction level
             */
            errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H' | null;
        } | null;
        /**
         * Options for QR code dots
         */
        dotsOptions?: {
            /**
             * Type of dots
             */
            type?: 'dot' | 'square' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'vertical-line' | 'horizontal-line' | 'random-dot' | 'small-square' | 'tiny-square' | 'star' | 'plus' | 'diamond' | null;
            /**
             * Color of dots in CSS format
             */
            color?: string | null;
            /**
             * Size of dots relative to module size (0-1)
             */
            size?: number | null;
            /**
             * Gradient for dots
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code corner squares
         */
        cornersSquareOptions?: {
            /**
             * Type of corner squares
             */
            type?: 'dot' | 'square' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
            /**
             * Color of corner squares in CSS format
             */
            color?: string | null;
            /**
             * Gradient for corner squares
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code corner dots
         */
        cornersDotOptions?: {
            /**
             * Type of corner dots
             */
            type?: 'dot' | 'square' | 'heart' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
            /**
             * Color of corner dots in CSS format
             */
            color?: string | null;
            /**
             * Gradient for corner dots
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code background or false to disable
         */
        backgroundOptions?: {
            /**
             * Background color in CSS format
             */
            color?: string | null;
            /**
             * Background corner rounding (0-1 or CSS value)
             */
            round?: number | string | null;
            /**
             * Gradient for background
             */
            gradient?: Gradient | null;
        } | false;
        /**
         * Image to embed in the QR code (URL, Buffer, or Blob)
         */
        image?: string | unknown | null;
        /**
         * Options for embedded image
         */
        imageOptions?: {
            /**
             * Mode for embedded image
             */
            mode?: 'center' | 'overlay' | 'background' | null;
            /**
             * Size of image relative to QR code (0-1)
             */
            imageSize?: number | null;
            /**
             * Margin around the image in pixels
             */
            margin?: number | null;
            /**
             * Cross-origin attribute for image
             */
            crossOrigin?: string | null;
            /**
             * Fill options for image area
             */
            fill?: {
                /**
                 * Fill color in CSS format
                 */
                color?: string | null;
                /**
                 * Gradient for fill
                 */
                gradient?: Gradient | null;
            } | null;
        } | null;
        /**
         * Border configuration options
         */
        borderOptions?: {
            /**
             * Whether to show border
             */
            hasBorder?: boolean | null;
            /**
             * Border thickness in pixels
             */
            thickness?: number | null;
            /**
             * Border color in CSS format
             */
            color?: string | null;
            /**
             * Border radius in CSS format
             */
            radius?: string | null;
            /**
             * Thickness when no border is shown
             */
            noBorderThickness?: number | null;
            /**
             * Border background color in CSS format
             */
            background?: string | null;
            /**
             * Inner border configuration
             */
            inner?: {
                /**
                 * Inner radius in CSS format
                 */
                radius?: string | null;
                /**
                 * Inner scale factor (0-1.5)
                 */
                scale?: number | null;
                /**
                 * Inner horizontal offset in pixels
                 */
                horizontalOffset?: number | null;
                /**
                 * Inner vertical offset in pixels
                 */
                verticalOffset?: number | null;
            } | null;
            /**
             * Outer border configuration
             */
            borderOuter?: BorderInnerOuter | null;
            /**
             * Inner border configuration
             */
            borderInner?: BorderInnerOuter | null;
            /**
             * Border decorations configuration
             */
            decorations?: {
                /**
                 * Top decoration configuration
                 */
                top?: DecorationOptions | null;
                /**
                 * Right decoration configuration
                 */
                right?: DecorationOptions | null;
                /**
                 * Bottom decoration configuration
                 */
                bottom?: DecorationOptions | null;
                /**
                 * Left decoration configuration
                 */
                left?: DecorationOptions | null;
            } | null;
        } | null;
    };
};
/**
 * Schema for updating a template
 */
export type UpdateTemplate = {
    /**
     * Name of the template
     */
    name?: string;
    /**
     * Description of the template
     */
    description?: string;
    /**
     * QR code options for the template (without data field)
     */
    options?: {
        /**
         * Overall shape of the QR code
         */
        shape?: 'square' | 'circle' | null;
        /**
         * Margin around the QR code in pixels
         */
        margin?: number | null;
        /**
         * Whether QR code is responsive
         */
        isResponsive?: boolean | null;
        /**
         * Scale factor for QR code (0-1.5)
         */
        scale?: number | null;
        /**
         * General offset in pixels
         */
        offset?: number | null;
        /**
         * Vertical offset in pixels
         */
        verticalOffset?: number | null;
        /**
         * Horizontal offset in pixels
         */
        horizontalOffset?: number | null;
        /**
         * QR code specific options
         */
        qrOptions?: {
            /**
             * QR code type number (0-40)
             */
            typeNumber?: number | null;
            /**
             * QR code encoding mode
             */
            mode?: 'numeric' | 'alphanumeric' | 'byte' | 'kanji' | 'unicode';
            /**
             * Error correction level
             */
            errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H' | null;
        } | null;
        /**
         * Options for QR code dots
         */
        dotsOptions?: {
            /**
             * Type of dots
             */
            type?: 'dot' | 'square' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'vertical-line' | 'horizontal-line' | 'random-dot' | 'small-square' | 'tiny-square' | 'star' | 'plus' | 'diamond' | null;
            /**
             * Color of dots in CSS format
             */
            color?: string | null;
            /**
             * Size of dots relative to module size (0-1)
             */
            size?: number | null;
            /**
             * Gradient for dots
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code corner squares
         */
        cornersSquareOptions?: {
            /**
             * Type of corner squares
             */
            type?: 'dot' | 'square' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
            /**
             * Color of corner squares in CSS format
             */
            color?: string | null;
            /**
             * Gradient for corner squares
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code corner dots
         */
        cornersDotOptions?: {
            /**
             * Type of corner dots
             */
            type?: 'dot' | 'square' | 'heart' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
            /**
             * Color of corner dots in CSS format
             */
            color?: string | null;
            /**
             * Gradient for corner dots
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code background or false to disable
         */
        backgroundOptions?: {
            /**
             * Background color in CSS format
             */
            color?: string | null;
            /**
             * Background corner rounding (0-1 or CSS value)
             */
            round?: number | string | null;
            /**
             * Gradient for background
             */
            gradient?: Gradient | null;
        } | false;
        /**
         * Image to embed in the QR code (URL, Buffer, or Blob)
         */
        image?: string | unknown | null;
        /**
         * Options for embedded image
         */
        imageOptions?: {
            /**
             * Mode for embedded image
             */
            mode?: 'center' | 'overlay' | 'background' | null;
            /**
             * Size of image relative to QR code (0-1)
             */
            imageSize?: number | null;
            /**
             * Margin around the image in pixels
             */
            margin?: number | null;
            /**
             * Cross-origin attribute for image
             */
            crossOrigin?: string | null;
            /**
             * Fill options for image area
             */
            fill?: {
                /**
                 * Fill color in CSS format
                 */
                color?: string | null;
                /**
                 * Gradient for fill
                 */
                gradient?: Gradient | null;
            } | null;
        } | null;
        /**
         * Border configuration options
         */
        borderOptions?: {
            /**
             * Whether to show border
             */
            hasBorder?: boolean | null;
            /**
             * Border thickness in pixels
             */
            thickness?: number | null;
            /**
             * Border color in CSS format
             */
            color?: string | null;
            /**
             * Border radius in CSS format
             */
            radius?: string | null;
            /**
             * Thickness when no border is shown
             */
            noBorderThickness?: number | null;
            /**
             * Border background color in CSS format
             */
            background?: string | null;
            /**
             * Inner border configuration
             */
            inner?: {
                /**
                 * Inner radius in CSS format
                 */
                radius?: string | null;
                /**
                 * Inner scale factor (0-1.5)
                 */
                scale?: number | null;
                /**
                 * Inner horizontal offset in pixels
                 */
                horizontalOffset?: number | null;
                /**
                 * Inner vertical offset in pixels
                 */
                verticalOffset?: number | null;
            } | null;
            /**
             * Outer border configuration
             */
            borderOuter?: BorderInnerOuter | null;
            /**
             * Inner border configuration
             */
            borderInner?: BorderInnerOuter | null;
            /**
             * Border decorations configuration
             */
            decorations?: {
                /**
                 * Top decoration configuration
                 */
                top?: DecorationOptions | null;
                /**
                 * Right decoration configuration
                 */
                right?: DecorationOptions | null;
                /**
                 * Bottom decoration configuration
                 */
                bottom?: DecorationOptions | null;
                /**
                 * Left decoration configuration
                 */
                left?: DecorationOptions | null;
            } | null;
        } | null;
    };
    /**
     * Updated custom metadata for the template as JSON object
     */
    metadata?: {
        [key: string]: unknown;
    } | null;
};
export type UpdateTemplateOptionsRequest = {
    /**
     * Partial QR code options for the template (without data field) to update. All fields are optional. Use null as a value to delete a field. At least one option field must be provided.
     */
    options: {
        /**
         * Shape of the QR code
         */
        shape?: 'square' | 'circle' | null;
        margin?: number | null;
        isResponsive?: boolean | null;
        scale?: number | null;
        offset?: number | null;
        verticalOffset?: number | null;
        horizontalOffset?: number | null;
        qrOptions?: {
            typeNumber?: number | null;
            /**
             * QR code encoding mode
             */
            mode?: 'numeric' | 'alphanumeric' | 'byte' | 'kanji' | 'unicode';
            /**
             * Error correction level (L: 7%, M: 15%, Q: 25%, H: 30%)
             */
            errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H' | null;
        } | null;
        dotsOptions?: {
            /**
             * Type of dots in QR code
             */
            type?: 'dot' | 'square' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'vertical-line' | 'horizontal-line' | 'random-dot' | 'small-square' | 'tiny-square' | 'star' | 'plus' | 'diamond' | null;
            color?: string | null;
            size?: number | null;
            /**
             * Gradient definition
             */
            gradient?: {
                type?: 'linear' | 'radial';
                rotation?: number;
                colorStops?: Array<{
                    offset?: number;
                    color?: string;
                }>;
            } | null;
        } | null;
        cornersSquareOptions?: {
            /**
             * Type of corner squares in QR code
             */
            type?: 'dot' | 'square' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
            color?: string | null;
            /**
             * Gradient definition
             */
            gradient?: {
                type?: 'linear' | 'radial';
                rotation?: number;
                colorStops?: Array<{
                    offset?: number;
                    color?: string;
                }>;
            } | null;
        } | null;
        cornersDotOptions?: {
            /**
             * Type of corner dots in QR code
             */
            type?: 'dot' | 'square' | 'heart' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
            color?: string | null;
            /**
             * Gradient definition
             */
            gradient?: {
                type?: 'linear' | 'radial';
                rotation?: number;
                colorStops?: Array<{
                    offset?: number;
                    color?: string;
                }>;
            } | null;
        } | null;
        backgroundOptions?: {
            /**
             * Background color in CSS format
             */
            color?: string | null;
            /**
             * Background corner rounding (0-1 or CSS value)
             */
            round?: number | string | null;
            /**
             * Gradient for background
             */
            gradient?: Gradient | null;
        } | false;
        image?: string | unknown | null;
        imageOptions?: {
            /**
             * Mode for embedding images in QR code
             */
            mode?: 'center' | 'overlay' | 'background' | null;
            imageSize?: number | null;
            margin?: number | null;
            crossOrigin?: string | null;
            fill?: {
                color?: string | null;
                /**
                 * Gradient definition
                 */
                gradient?: {
                    type?: 'linear' | 'radial';
                    rotation?: number;
                    colorStops?: Array<{
                        offset?: number;
                        color?: string;
                    }>;
                } | null;
            } | null;
        } | null;
        borderOptions?: {
            hasBorder?: boolean | null;
            thickness?: number | null;
            color?: string | null;
            radius?: string | null;
            noBorderThickness?: number | null;
            background?: string | null;
            inner?: {
                radius?: string | null;
                scale?: number | null;
                horizontalOffset?: number | null;
                verticalOffset?: number | null;
            } | null;
            /**
             * Inner or outer border configuration
             */
            borderOuter?: {
                color?: string;
                thickness?: number;
            } | null;
            /**
             * Inner or outer border configuration
             */
            borderInner?: {
                color?: string;
                thickness?: number;
            } | null;
            decorations?: {
                /**
                 * Options for QR code decoration
                 */
                top?: {
                    disabled?: boolean;
                    enableText?: boolean;
                    offset?: number;
                    curveAdjustment?: number;
                    curveDisabled?: boolean;
                    curveRadius?: string;
                    type?: 'text' | 'image';
                    value?: string;
                    /**
                     * Text decoration style
                     */
                    style?: {
                        fontFace?: string;
                        fontSize?: number;
                        fontColor?: string;
                        letterSpacing?: number;
                        fontWeight?: 'normal' | 'bold';
                    };
                } | null;
                /**
                 * Options for QR code decoration
                 */
                right?: {
                    disabled?: boolean;
                    enableText?: boolean;
                    offset?: number;
                    curveAdjustment?: number;
                    curveDisabled?: boolean;
                    curveRadius?: string;
                    type?: 'text' | 'image';
                    value?: string;
                    /**
                     * Text decoration style
                     */
                    style?: {
                        fontFace?: string;
                        fontSize?: number;
                        fontColor?: string;
                        letterSpacing?: number;
                        fontWeight?: 'normal' | 'bold';
                    };
                } | null;
                /**
                 * Options for QR code decoration
                 */
                bottom?: {
                    disabled?: boolean;
                    enableText?: boolean;
                    offset?: number;
                    curveAdjustment?: number;
                    curveDisabled?: boolean;
                    curveRadius?: string;
                    type?: 'text' | 'image';
                    value?: string;
                    /**
                     * Text decoration style
                     */
                    style?: {
                        fontFace?: string;
                        fontSize?: number;
                        fontColor?: string;
                        letterSpacing?: number;
                        fontWeight?: 'normal' | 'bold';
                    };
                } | null;
                /**
                 * Options for QR code decoration
                 */
                left?: {
                    disabled?: boolean;
                    enableText?: boolean;
                    offset?: number;
                    curveAdjustment?: number;
                    curveDisabled?: boolean;
                    curveRadius?: string;
                    type?: 'text' | 'image';
                    value?: string;
                    /**
                     * Text decoration style
                     */
                    style?: {
                        fontFace?: string;
                        fontSize?: number;
                        fontColor?: string;
                        letterSpacing?: number;
                        fontWeight?: 'normal' | 'bold';
                    };
                } | null;
            } | null;
        } | null;
    };
};
/**
 * Error response when a resource cannot be modified/deleted because it is in use
 */
export type ResourceInUseMessage = {
    message: string;
};
/**
 * Array of template responses
 */
export type TemplateArrayResponse = Array<TemplateResponse>;
/**
 * Style data returned in API responses
 */
export type StyleResponse = {
    /**
     * Unique identifier of the style
     */
    id: string;
    /**
     * Name of the style
     */
    name: string;
    /**
     * Description of the style
     */
    description?: string | null;
    /**
     * Style configuration options
     */
    options: {
        /**
         * Primary color for QR code elements in CSS format
         */
        primaryColor?: string | null;
        /**
         * Secondary color for QR code elements in CSS format
         */
        secondaryColor?: string | null;
        /**
         * Tertiary color for QR code elements in CSS format
         */
        thirdColor?: string | null;
        /**
         * Background color of the QR code in CSS format
         */
        backgroundColor?: string | null;
        /**
         * Gradient configuration for QR code dots
         */
        dotsGradient?: Gradient | null;
        /**
         * Gradient configuration for corner dots
         */
        cornersDotGradient?: Gradient | null;
        /**
         * Gradient configuration for corners
         */
        cornersGradient?: Gradient | null;
        /**
         * Gradient configuration for QR code background
         */
        backgroundGradient?: Gradient | null;
        /**
         * Shape style for the QR code dots
         */
        dotShape?: 'dot' | 'square' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'vertical-line' | 'horizontal-line' | 'random-dot' | 'small-square' | 'tiny-square' | 'star' | 'plus' | 'diamond' | null;
        /**
         * Shape style for the QR code corner squares
         */
        cornerSquareShape?: 'dot' | 'square' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
        /**
         * Shape style for the QR code corner dots
         */
        cornerDotShape?: 'dot' | 'square' | 'heart' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
        /**
         * Logo to be placed on the QR code (URL, Base64, Buffer, or Blob)
         */
        logo?: string | unknown | null;
        /**
         * Size of the logo relative to QR code (0-1)
         */
        logoSize?: number | null;
        /**
         * Placement mode for the logo
         */
        logoMode?: 'center' | 'overlay' | 'background' | null;
        /**
         * Margin around the logo in pixels
         */
        logoMargin?: number | null;
        /**
         * Background color for logo in CSS format
         */
        logoBackgroundColor?: string | null;
        /**
         * Padding around the logo in pixels
         */
        logoPadding?: number | null;
        /**
         * Border radius for logo in pixels or CSS format
         */
        logoRadius?: string | number | null;
        /**
         * Color of the QR code border in CSS format
         */
        borderColor?: string | null;
        /**
         * Thickness of the border in pixels
         */
        borderThickness?: number | null;
        /**
         * Border radius in pixels or CSS format
         */
        borderRadius?: string | number | null;
        /**
         * Color of the inner border in CSS format
         */
        borderInnerColor?: string | null;
        /**
         * Thickness of the inner border in pixels
         */
        borderInnerThickness?: number | null;
        /**
         * Inner border radius in pixels or CSS format
         */
        borderInnerRadius?: string | number | null;
        /**
         * Color of the outer border in CSS format
         */
        borderOuterColor?: string | null;
        /**
         * Thickness of the outer border in pixels
         */
        borderOuterThickness?: number | null;
        /**
         * Text to display on top border
         */
        borderTextTop?: string | null;
        /**
         * Text to display on right border
         */
        borderTextRight?: string | null;
        /**
         * Text to display on bottom border
         */
        borderTextBottom?: string | null;
        /**
         * Text to display on left border
         */
        borderTextLeft?: string | null;
        /**
         * Font family for border text
         */
        borderFontFace?: string | null;
        /**
         * Font size for border text in pixels
         */
        borderFontSize?: number | null;
        /**
         * Font color for border text in CSS format
         */
        borderFontColor?: string | null;
        /**
         * Letter spacing for border text in pixels
         */
        borderLetterSpacing?: number | null;
        /**
         * Text transformation for border text
         */
        borderTextTransform?: 'uppercase' | 'lowercase' | 'capitalize' | null;
        /**
         * Font weight for border text
         */
        borderFontWeight?: string;
    };
    /**
     * Custom metadata for the style as JSON object
     */
    metadata: {
        [key: string]: unknown;
    } | null;
    /**
     * ID of the workspace this style belongs to (null for organization-level styles)
     */
    workspaceId?: string | null;
    /**
     * User who created the resource
     */
    createdByUser?: AuditInfoMember | null;
    /**
     * User who last updated the resource
     */
    updatedByUser?: AuditInfoMember | null;
    /**
     * API key used to create the resource
     */
    createdByApiKey?: AuditInfoApiKey | null;
    /**
     * API key used to last update the resource
     */
    updatedByApiKey?: AuditInfoApiKey | null;
    /**
     * When the resource was created
     */
    createdAt?: string | null;
    /**
     * When the resource was last updated
     */
    updatedAt?: string | null;
};
/**
 * Error response when a style entity name is already taken within the scope (organization/workspace)
 */
export type StyleNameTakenMessage = {
    message: 'Style name is already taken';
};
/**
 * Base schema for style definitions
 */
export type StyleBase = {
    /**
     * Name of the style
     */
    name: string;
    /**
     * Description of the style
     */
    description?: string;
    /**
     * Style configuration options
     */
    options: StyleOptions;
    /**
     * Custom metadata for the style as JSON object
     */
    metadata?: {
        [key: string]: unknown;
    } | null;
    /**
     * ID of the workspace this style belongs to (null for organization-level styles)
     */
    workspaceId?: string | null;
};
/**
 * Schema for creating a new style
 */
export type CreateStyle = StyleBase;
/**
 * A list of predefined base styles
 */
export type BaseStyles = Array<BaseStyle>;
/**
 * A predefined base style that can be used as a template
 */
export type BaseStyle = {
    /**
     * Unique identifier of the base style
     */
    id: string;
    /**
     * Name of the base style
     */
    name: string;
    /**
     * Style configuration options
     */
    options: {
        /**
         * Primary color for QR code elements in CSS format
         */
        primaryColor?: string | null;
        /**
         * Secondary color for QR code elements in CSS format
         */
        secondaryColor?: string | null;
        /**
         * Tertiary color for QR code elements in CSS format
         */
        thirdColor?: string | null;
        /**
         * Background color of the QR code in CSS format
         */
        backgroundColor?: string | null;
        /**
         * Gradient configuration for QR code dots
         */
        dotsGradient?: Gradient | null;
        /**
         * Gradient configuration for corner dots
         */
        cornersDotGradient?: Gradient | null;
        /**
         * Gradient configuration for corners
         */
        cornersGradient?: Gradient | null;
        /**
         * Gradient configuration for QR code background
         */
        backgroundGradient?: Gradient | null;
        /**
         * Shape style for the QR code dots
         */
        dotShape?: 'dot' | 'square' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'vertical-line' | 'horizontal-line' | 'random-dot' | 'small-square' | 'tiny-square' | 'star' | 'plus' | 'diamond' | null;
        /**
         * Shape style for the QR code corner squares
         */
        cornerSquareShape?: 'dot' | 'square' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
        /**
         * Shape style for the QR code corner dots
         */
        cornerDotShape?: 'dot' | 'square' | 'heart' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
        /**
         * Logo to be placed on the QR code (URL, Base64, Buffer, or Blob)
         */
        logo?: string | unknown | null;
        /**
         * Size of the logo relative to QR code (0-1)
         */
        logoSize?: number | null;
        /**
         * Placement mode for the logo
         */
        logoMode?: 'center' | 'overlay' | 'background' | null;
        /**
         * Margin around the logo in pixels
         */
        logoMargin?: number | null;
        /**
         * Background color for logo in CSS format
         */
        logoBackgroundColor?: string | null;
        /**
         * Padding around the logo in pixels
         */
        logoPadding?: number | null;
        /**
         * Border radius for logo in pixels or CSS format
         */
        logoRadius?: string | number | null;
        /**
         * Color of the QR code border in CSS format
         */
        borderColor?: string | null;
        /**
         * Thickness of the border in pixels
         */
        borderThickness?: number | null;
        /**
         * Border radius in pixels or CSS format
         */
        borderRadius?: string | number | null;
        /**
         * Color of the inner border in CSS format
         */
        borderInnerColor?: string | null;
        /**
         * Thickness of the inner border in pixels
         */
        borderInnerThickness?: number | null;
        /**
         * Inner border radius in pixels or CSS format
         */
        borderInnerRadius?: string | number | null;
        /**
         * Color of the outer border in CSS format
         */
        borderOuterColor?: string | null;
        /**
         * Thickness of the outer border in pixels
         */
        borderOuterThickness?: number | null;
        /**
         * Text to display on top border
         */
        borderTextTop?: string | null;
        /**
         * Text to display on right border
         */
        borderTextRight?: string | null;
        /**
         * Text to display on bottom border
         */
        borderTextBottom?: string | null;
        /**
         * Text to display on left border
         */
        borderTextLeft?: string | null;
        /**
         * Font family for border text
         */
        borderFontFace?: string | null;
        /**
         * Font size for border text in pixels
         */
        borderFontSize?: number | null;
        /**
         * Font color for border text in CSS format
         */
        borderFontColor?: string | null;
        /**
         * Letter spacing for border text in pixels
         */
        borderLetterSpacing?: number | null;
        /**
         * Text transformation for border text
         */
        borderTextTransform?: 'uppercase' | 'lowercase' | 'capitalize' | null;
        /**
         * Font weight for border text
         */
        borderFontWeight?: string;
    };
};
/**
 * Response containing organization and workspace styles
 */
export type GetStylesResponse = {
    /**
     * Organization-level styles
     */
    organizations: Array<StyleResponse>;
    /**
     * Workspace-level styles
     */
    workspaces: Array<StyleResponse>;
};
/**
 * Response body when no styles are found for the organization context
 */
export type EmptyStylesOrgContextResponse = {
    /**
     * Should be empty or not present
     */
    organizations: Array<unknown>;
    /**
     * Should be empty or not present
     */
    workspaces: Array<unknown>;
};
/**
 * Schema for updating an existing style
 */
export type UpdateStyle = {
    /**
     * Updated name of the style
     */
    name?: string;
    /**
     * Updated description of the style
     */
    description?: string;
    /**
     * Updated style configuration options
     */
    options?: StyleOptions;
    /**
     * Updated custom metadata for the style as JSON object
     */
    metadata?: {
        [key: string]: unknown;
    } | null;
};
export type UpdateStyleOptionsRequest = {
    /**
     * Partial style options to update. All fields are optional. Use null as a value to delete a field. At least one option field must be provided.
     */
    options: {
        primaryColor?: string | null;
        secondaryColor?: string | null;
        thirdColor?: string | null;
        backgroundColor?: string | null;
        /**
         * Gradient definition
         */
        dotsGradient?: {
            type?: 'linear' | 'radial';
            rotation?: number;
            colorStops?: Array<{
                offset?: number;
                color?: string;
            }>;
        } | null;
        /**
         * Gradient definition
         */
        cornersDotGradient?: {
            type?: 'linear' | 'radial';
            rotation?: number;
            colorStops?: Array<{
                offset?: number;
                color?: string;
            }>;
        } | null;
        /**
         * Gradient definition
         */
        cornersGradient?: {
            type?: 'linear' | 'radial';
            rotation?: number;
            colorStops?: Array<{
                offset?: number;
                color?: string;
            }>;
        } | null;
        /**
         * Gradient definition
         */
        backgroundGradient?: {
            type?: 'linear' | 'radial';
            rotation?: number;
            colorStops?: Array<{
                offset?: number;
                color?: string;
            }>;
        } | null;
        /**
         * Type of dots in QR code
         */
        dotShape?: 'dot' | 'square' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'vertical-line' | 'horizontal-line' | 'random-dot' | 'small-square' | 'tiny-square' | 'star' | 'plus' | 'diamond' | null;
        /**
         * Type of corner squares in QR code
         */
        cornerSquareShape?: 'dot' | 'square' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
        /**
         * Type of corner dots in QR code
         */
        cornerDotShape?: 'dot' | 'square' | 'heart' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
        logo?: string | unknown | null;
        logoSize?: number | null;
        /**
         * Mode for embedding images in QR code
         */
        logoMode?: 'center' | 'overlay' | 'background' | null;
        logoMargin?: number | null;
        logoBackgroundColor?: string | null;
        logoPadding?: number | null;
        logoRadius?: string | number | null;
        borderColor?: string | null;
        borderThickness?: number | null;
        borderRadius?: string | number | null;
        borderInnerColor?: string | null;
        borderInnerThickness?: number | null;
        borderInnerRadius?: string | number | null;
        borderOuterColor?: string | null;
        borderOuterThickness?: number | null;
        borderTextTop?: string | null;
        borderTextRight?: string | null;
        borderTextBottom?: string | null;
        borderTextLeft?: string | null;
        borderFontFace?: string | null;
        borderFontSize?: number | null;
        borderFontColor?: string | null;
        borderLetterSpacing?: number | null;
        borderTextTransform?: 'uppercase' | 'lowercase' | 'capitalize' | null;
        borderFontWeight?: string;
    };
};
/**
 * Array of style objects
 */
export type StyleArray = Array<StyleResponse>;
/**
 * Text data returned in API responses
 */
export type TextResponse = {
    /**
     * Unique identifier for the text
     */
    id: string;
    /**
     * Name of the text
     */
    name: string;
    /**
     * Description of the text
     */
    description?: string | null;
    /**
     * Text configuration options
     */
    options: {
        /**
         * Text value for all positions
         */
        value?: string | null;
        /**
         * Text value for the top position
         */
        topValue?: string | null;
        /**
         * Text value for the bottom position
         */
        bottomValue?: string | null;
        /**
         * Text value for the right position
         */
        rightValue?: string | null;
        /**
         * Text value for the left position
         */
        leftValue?: string | null;
    };
    /**
     * Custom metadata for the text as JSON object
     */
    metadata: {
        [key: string]: unknown;
    } | null;
    /**
     * ID of the workspace this text belongs to, if any
     */
    workspaceId?: string | null;
    /**
     * User who created the resource
     */
    createdByUser?: AuditInfoMember | null;
    /**
     * User who last updated the resource
     */
    updatedByUser?: AuditInfoMember | null;
    /**
     * API key used to create the resource
     */
    createdByApiKey?: AuditInfoApiKey | null;
    /**
     * API key used to last update the resource
     */
    updatedByApiKey?: AuditInfoApiKey | null;
    /**
     * When the resource was created
     */
    createdAt?: string | null;
    /**
     * When the resource was last updated
     */
    updatedAt?: string | null;
};
/**
 * Error response when a text entity name is already taken within the scope (organization/workspace)
 */
export type TextNameTakenMessage = {
    message: string;
};
/**
 * Base schema for text definitions
 */
export type TextBase = {
    /**
     * Name of the text
     */
    name: string;
    /**
     * Description of the text
     */
    description?: string;
    /**
     * Text configuration options
     */
    options: TextOptions;
    /**
     * Custom metadata for the text as JSON object
     */
    metadata?: {
        [key: string]: unknown;
    } | null;
    /**
     * ID of the workspace this text belongs to, if any
     */
    workspaceId?: string | null;
};
/**
 * Schema for creating a new text
 */
export type CreateText = TextBase;
/**
 * List of texts grouped by organization and workspace
 */
export type GetTextsResponse = {
    /**
     * Texts available at the organization level
     */
    organizations: Array<TextResponse>;
    /**
     * Texts available in specific workspaces
     */
    workspaces: Array<TextResponse>;
};
/**
 * Response body when no text entities are found for the organization context
 */
export type EmptyTextsOrgContextResponse = {
    /**
     * Should be empty or not present
     */
    organizations: Array<unknown>;
    /**
     * Should be empty or not present
     */
    workspaces: Array<unknown>;
};
/**
 * A list of predefined base texts
 */
export type BaseTexts = Array<BaseText>;
/**
 * A predefined base text that can be used as a template
 */
export type BaseText = {
    /**
     * Unique identifier of the base text
     */
    id: string;
    /**
     * Name of the base text
     */
    name: string;
    /**
     * Text configuration options
     */
    options: {
        /**
         * Text value for all positions
         */
        value?: string | null;
        /**
         * Text value for the top position
         */
        topValue?: string | null;
        /**
         * Text value for the bottom position
         */
        bottomValue?: string | null;
        /**
         * Text value for the right position
         */
        rightValue?: string | null;
        /**
         * Text value for the left position
         */
        leftValue?: string | null;
    };
};
/**
 * Schema for updating an existing text
 */
export type UpdateText = {
    /**
     * Name of the text
     */
    name?: string;
    /**
     * Description of the text
     */
    description?: string;
    /**
     * Updated text configuration options
     */
    options?: TextOptions;
    /**
     * Updated custom metadata for the text as JSON object
     */
    metadata?: {
        [key: string]: unknown;
    } | null;
    /**
     * ID of the workspace this text belongs to, if any
     */
    workspaceId?: string | null;
};
export type UpdateTextOptionsRequest = {
    /**
     * Partial text options to update. All fields are optional. Use null as a value to delete a field. At least one option field must be provided.
     */
    options: {
        value?: string | null;
        topValue?: string | null;
        bottomValue?: string | null;
        rightValue?: string | null;
        leftValue?: string | null;
    };
};
/**
 * Response for successful text deletion
 */
export type DeleteTextResponse = {
    /**
     * Success message
     */
    message: string;
};
/**
 * Array of text objects
 */
export type TextArray = Array<TextResponse>;
/**
 * Border Response Schema
 */
export type BorderResponse = {
    /**
     * Unique identifier for the border
     */
    id: string;
    /**
     * Name of the border
     */
    name: string;
    /**
     * Description of the border
     */
    description?: string | null;
    options: BorderOptions;
    /**
     * Custom metadata for the border as JSON object
     */
    metadata: {
        [key: string]: unknown;
    } | null;
    /**
     * ID of the workspace this border belongs to, if any
     */
    workspaceId?: string | null;
    /**
     * User who created the resource
     */
    createdByUser?: AuditInfoMember | null;
    /**
     * User who last updated the resource
     */
    updatedByUser?: AuditInfoMember | null;
    /**
     * API key used to create the resource
     */
    createdByApiKey?: AuditInfoApiKey | null;
    /**
     * API key used to last update the resource
     */
    updatedByApiKey?: AuditInfoApiKey | null;
    /**
     * When the resource was created
     */
    createdAt?: string | null;
    /**
     * When the resource was last updated
     */
    updatedAt?: string | null;
};
/**
 * Error response when a border name is already taken within the scope (organization/workspace)
 */
export type BorderNameTakenMessage = {
    message: string;
};
/**
 * Border Base Schema
 */
export type BorderBase = {
    /**
     * Name of the border
     */
    name: string;
    /**
     * Description of the border
     */
    description?: string;
    options: BorderOptions;
    /**
     * Custom metadata for the border as JSON object
     */
    metadata?: {
        [key: string]: unknown;
    } | null;
    /**
     * ID of the workspace this border belongs to, if any
     */
    workspaceId?: string | null;
};
/**
 * List of borders grouped by organization and workspace
 */
export type GetBordersResponse = {
    /**
     * Borders available at the organization level
     */
    organizations: Array<BorderResponse>;
    /**
     * Borders available in specific workspaces
     */
    workspaces: Array<BorderResponse>;
};
/**
 * Response body when no border entities are found for the organization context
 */
export type EmptyBordersOrgContextResponseMessage = {
    /**
     * No borders found for the specified organization and workspace
     */
    message: string;
};
/**
 * A list of predefined base borders
 */
export type BaseBorders = Array<BaseBorder>;
/**
 * A predefined base border that can be used as a template
 */
export type BaseBorder = {
    /**
     * Unique identifier of the base border
     */
    id: string;
    /**
     * Name of the base border
     */
    name: string;
    /**
     * Border configuration options
     */
    options: BorderOptions;
};
/**
 * Update Border Schema
 */
export type UpdateBorder = {
    /**
     * Name of the border
     */
    name?: string;
    /**
     * Description of the border
     */
    description?: string;
    options?: BorderOptions;
    /**
     * Updated custom metadata for the border as JSON object
     */
    metadata?: {
        [key: string]: unknown;
    } | null;
};
/**
 * Delete Border Response Schema
 */
export type DeleteBorderResponse = {
    /**
     * Success message
     */
    message: string;
};
export type UpdateBorderOptionsRequest = {
    /**
     * Partial border options to update. borderOptions is required and must contain at least one field (can be nullable). Other top-level options are optional. Use null as a value to delete a field.
     */
    options: {
        borderOptions: {
            hasBorder?: boolean | null;
            thickness?: number | null;
            color?: string | null;
            radius?: string | null;
            noBorderThickness?: number | null;
            background?: string | null;
            inner?: {
                radius?: string | null;
                scale?: number | null;
                horizontalOffset?: number | null;
                verticalOffset?: number | null;
            } | null;
            /**
             * Inner or outer border configuration
             */
            borderOuter?: {
                color?: string;
                thickness?: number;
            } | null;
            /**
             * Inner or outer border configuration
             */
            borderInner?: {
                color?: string;
                thickness?: number;
            } | null;
            decorations?: {
                /**
                 * Options for QR code decoration
                 */
                top?: {
                    disabled?: boolean;
                    enableText?: boolean;
                    offset?: number;
                    curveAdjustment?: number;
                    curveDisabled?: boolean;
                    curveRadius?: string;
                    type?: 'text' | 'image';
                    value?: string;
                    /**
                     * Text decoration style
                     */
                    style?: {
                        fontFace?: string;
                        fontSize?: number;
                        fontColor?: string;
                        letterSpacing?: number;
                        fontWeight?: 'normal' | 'bold';
                    };
                } | null;
                /**
                 * Options for QR code decoration
                 */
                right?: {
                    disabled?: boolean;
                    enableText?: boolean;
                    offset?: number;
                    curveAdjustment?: number;
                    curveDisabled?: boolean;
                    curveRadius?: string;
                    type?: 'text' | 'image';
                    value?: string;
                    /**
                     * Text decoration style
                     */
                    style?: {
                        fontFace?: string;
                        fontSize?: number;
                        fontColor?: string;
                        letterSpacing?: number;
                        fontWeight?: 'normal' | 'bold';
                    };
                } | null;
                /**
                 * Options for QR code decoration
                 */
                bottom?: {
                    disabled?: boolean;
                    enableText?: boolean;
                    offset?: number;
                    curveAdjustment?: number;
                    curveDisabled?: boolean;
                    curveRadius?: string;
                    type?: 'text' | 'image';
                    value?: string;
                    /**
                     * Text decoration style
                     */
                    style?: {
                        fontFace?: string;
                        fontSize?: number;
                        fontColor?: string;
                        letterSpacing?: number;
                        fontWeight?: 'normal' | 'bold';
                    };
                } | null;
                /**
                 * Options for QR code decoration
                 */
                left?: {
                    disabled?: boolean;
                    enableText?: boolean;
                    offset?: number;
                    curveAdjustment?: number;
                    curveDisabled?: boolean;
                    curveRadius?: string;
                    type?: 'text' | 'image';
                    value?: string;
                    /**
                     * Text decoration style
                     */
                    style?: {
                        fontFace?: string;
                        fontSize?: number;
                        fontColor?: string;
                        letterSpacing?: number;
                        fontWeight?: 'normal' | 'bold';
                    };
                } | null;
            } | null;
        };
        /**
         * Overall shape of the QR code
         */
        shape?: 'square' | 'circle' | null;
        /**
         * Margin around the QR code in pixels
         */
        margin?: number | null;
        /**
         * Whether QR code is responsive
         */
        isResponsive?: boolean | null;
        /**
         * Scale factor for QR code (0-1.5)
         */
        scale?: number | null;
        /**
         * General offset in pixels
         */
        offset?: number | null;
        /**
         * Vertical offset in pixels
         */
        verticalOffset?: number | null;
        /**
         * Horizontal offset in pixels
         */
        horizontalOffset?: number | null;
        /**
         * QR code specific options
         */
        qrOptions?: {
            /**
             * QR code type number (0-40)
             */
            typeNumber?: number | null;
            /**
             * QR code encoding mode
             */
            mode?: 'numeric' | 'alphanumeric' | 'byte' | 'kanji' | 'unicode';
            /**
             * Error correction level
             */
            errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H' | null;
        } | null;
        /**
         * Options for QR code dots
         */
        dotsOptions?: {
            /**
             * Type of dots
             */
            type?: 'dot' | 'square' | 'rounded' | 'extra-rounded' | 'classy' | 'classy-rounded' | 'vertical-line' | 'horizontal-line' | 'random-dot' | 'small-square' | 'tiny-square' | 'star' | 'plus' | 'diamond' | null;
            /**
             * Color of dots in CSS format
             */
            color?: string | null;
            /**
             * Size of dots relative to module size (0-1)
             */
            size?: number | null;
            /**
             * Gradient for dots
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code corner squares
         */
        cornersSquareOptions?: {
            /**
             * Type of corner squares
             */
            type?: 'dot' | 'square' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
            /**
             * Color of corner squares in CSS format
             */
            color?: string | null;
            /**
             * Gradient for corner squares
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code corner dots
         */
        cornersDotOptions?: {
            /**
             * Type of corner dots
             */
            type?: 'dot' | 'square' | 'heart' | 'rounded' | 'classy' | 'outpoint' | 'inpoint' | null;
            /**
             * Color of corner dots in CSS format
             */
            color?: string | null;
            /**
             * Gradient for corner dots
             */
            gradient?: Gradient | null;
        } | null;
        /**
         * Options for QR code background or false to disable
         */
        backgroundOptions?: {
            /**
             * Background color in CSS format
             */
            color?: string | null;
            /**
             * Background corner rounding (0-1 or CSS value)
             */
            round?: number | string | null;
            /**
             * Gradient for background
             */
            gradient?: Gradient | null;
        } | false;
        /**
         * Image to embed in the QR code (URL, Buffer, or Blob)
         */
        image?: string | unknown | null;
        /**
         * Options for embedded image
         */
        imageOptions?: {
            /**
             * Mode for embedded image
             */
            mode?: 'center' | 'overlay' | 'background' | null;
            /**
             * Size of image relative to QR code (0-1)
             */
            imageSize?: number | null;
            /**
             * Margin around the image in pixels
             */
            margin?: number | null;
            /**
             * Cross-origin attribute for image
             */
            crossOrigin?: string | null;
            /**
             * Fill options for image area
             */
            fill?: {
                /**
                 * Fill color in CSS format
                 */
                color?: string | null;
                /**
                 * Gradient for fill
                 */
                gradient?: Gradient | null;
            } | null;
        } | null;
    };
};
/**
 * Indicates that the specified router rule template was not found
 */
export type RouterRuleTemplateNotFoundMessage = {
    /**
     * The specified router rule template could not be found
     */
    message: string;
};
/**
 * Workspace router rule assignment response object with code context
 */
export type WorkspaceRouterRuleResponse = CodeRouterRuleResponse & {
    /**
     * Associated QR code information
     */
    code: {
        /**
         * QR code ID
         */
        id: string;
        /**
         * QR code name
         */
        name: string;
        /**
         * QR code type
         */
        type?: string | null;
        /**
         * QR code short alias
         */
        shortAlias?: string | null;
        /**
         * Workspace ID
         */
        workspaceId?: string | null;
    };
};
export type PostAuthRegisterData = {
    body?: RegisterRequest;
    path?: never;
    query?: never;
    url: '/auth/register';
};
export type PostAuthRegisterErrors = {
    /**
     * Bad Request on registration
     */
    400: ValidationErrorMessage | EmailAlreadyInUseMessage | EmailSendFailureMessage | OrganizationCreationFailureMessage;
};
export type PostAuthRegisterError = PostAuthRegisterErrors[keyof PostAuthRegisterErrors];
export type PostAuthRegisterResponses = {
    /**
     * Registration initiated. Check email for verification
     */
    200: RegisterResponse;
};
export type PostAuthRegisterResponse = PostAuthRegisterResponses[keyof PostAuthRegisterResponses];
export type PostAuthRegisterVerifyData = {
    body?: RegisterVerifyRequest;
    path?: never;
    query?: never;
    url: '/auth/register-verify';
};
export type PostAuthRegisterVerifyErrors = {
    /**
     * Bad Request on registration verification
     */
    400: ValidationErrorMessage | EmailAlreadyVerifiedMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * User or organization not found
     */
    404: UserNotFoundMessage | OrganizationNotFoundMessage;
};
export type PostAuthRegisterVerifyError = PostAuthRegisterVerifyErrors[keyof PostAuthRegisterVerifyErrors];
export type PostAuthRegisterVerifyResponses = {
    /**
     * Registration verification successful
     */
    200: RegisterVerifyResponse;
};
export type PostAuthRegisterVerifyResponse = PostAuthRegisterVerifyResponses[keyof PostAuthRegisterVerifyResponses];
export type PostAuthRegisterVerifyResendData = {
    body?: RegisterRequest;
    path?: never;
    query?: never;
    url: '/auth/register-verify-resend';
};
export type PostAuthRegisterVerifyResendErrors = {
    /**
     * Bad Request on resending registration verification
     */
    400: ValidationErrorMessage | InvalidCredentialsForOperationMessage | EmailAlreadyVerifiedMessage | EmailSendFailureMessage;
    /**
     * User or organization not found
     */
    404: UserNotFoundMessage | OrganizationNotFoundMessage;
};
export type PostAuthRegisterVerifyResendError = PostAuthRegisterVerifyResendErrors[keyof PostAuthRegisterVerifyResendErrors];
export type PostAuthRegisterVerifyResendResponses = {
    /**
     * Verification email resent successfully
     */
    200: RegisterVerifyResendResponse;
};
export type PostAuthRegisterVerifyResendResponse = PostAuthRegisterVerifyResendResponses[keyof PostAuthRegisterVerifyResendResponses];
export type PostAuthSignInData = {
    body?: SignInRequest;
    path?: never;
    query?: never;
    url: '/auth/sign-in';
};
export type PostAuthSignInErrors = {
    /**
     * Bad Request on sign-in
     */
    400: ValidationErrorMessage | EmailSendFailureMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * User or organization not found
     */
    404: UserNotFoundMessage | OrganizationNotFoundMessage;
};
export type PostAuthSignInError = PostAuthSignInErrors[keyof PostAuthSignInErrors];
export type PostAuthSignInResponses = {
    /**
     * Sign-in successful or verification initiated
     */
    200: SignInResponse;
};
export type PostAuthSignInResponse = PostAuthSignInResponses[keyof PostAuthSignInResponses];
export type PostAuthSignInVerifyData = {
    body?: SignInVerifyRequest;
    path?: never;
    query?: never;
    url: '/auth/sign-in-verify';
};
export type PostAuthSignInVerifyErrors = {
    /**
     * Bad Request on sign-in verification
     */
    400: ValidationErrorMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * User or organization not found
     */
    404: UserNotFoundMessage | OrganizationNotFoundMessage;
};
export type PostAuthSignInVerifyError = PostAuthSignInVerifyErrors[keyof PostAuthSignInVerifyErrors];
export type PostAuthSignInVerifyResponses = {
    /**
     * Sign-in verification successful
     */
    200: SignInVerifyResponse;
};
export type PostAuthSignInVerifyResponse = PostAuthSignInVerifyResponses[keyof PostAuthSignInVerifyResponses];
export type PostAuthEmailVerifySendData = {
    body?: RegisterRequest;
    path?: never;
    query?: never;
    url: '/auth/email-verify-send';
};
export type PostAuthEmailVerifySendErrors = {
    /**
     * Bad Request on sending email verification
     */
    400: ValidationErrorMessage | InvalidCredentialsForOperationMessage | EmailAlreadyVerifiedMessage | EmailSendFailureMessage;
    /**
     * User or organization not found
     */
    404: UserNotFoundMessage | OrganizationNotFoundMessage;
};
export type PostAuthEmailVerifySendError = PostAuthEmailVerifySendErrors[keyof PostAuthEmailVerifySendErrors];
export type PostAuthEmailVerifySendResponses = {
    /**
     * Verification email sent successfully
     */
    200: EmailVerifySendResponse;
};
export type PostAuthEmailVerifySendResponse = PostAuthEmailVerifySendResponses[keyof PostAuthEmailVerifySendResponses];
export type PostAuthEmailVerifyData = {
    body?: EmailVerifyRequest;
    path?: never;
    query?: never;
    url: '/auth/email-verify';
};
export type PostAuthEmailVerifyErrors = {
    /**
     * Bad Request on email verification
     */
    400: ValidationErrorMessage | EmailAlreadyVerifiedMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * User or organization not found
     */
    404: UserNotFoundMessage | OrganizationNotFoundMessage;
};
export type PostAuthEmailVerifyError = PostAuthEmailVerifyErrors[keyof PostAuthEmailVerifyErrors];
export type PostAuthEmailVerifyResponses = {
    /**
     * Email verification successful
     */
    200: EmailVerifyResponse;
};
export type PostAuthEmailVerifyResponse = PostAuthEmailVerifyResponses[keyof PostAuthEmailVerifyResponses];
export type GetAuthMeData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/auth/me';
};
export type GetAuthMeErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Member not found, Organization context not found, or Member has no organizations.
     */
    404: UserNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetAuthMeError = GetAuthMeErrors[keyof GetAuthMeErrors];
export type GetAuthMeResponses = {
    /**
     * Successfully retrieved user details
     */
    200: MeResponse;
};
export type GetAuthMeResponse = GetAuthMeResponses[keyof GetAuthMeResponses];
export type GetAuthSignOutData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/auth/sign-out';
};
export type GetAuthSignOutErrors = {
    /**
     * Bad Request on sign-out
     */
    400: NotSignedInMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
};
export type GetAuthSignOutError = GetAuthSignOutErrors[keyof GetAuthSignOutErrors];
export type GetAuthSignOutResponses = {
    /**
     * Successfully signed out
     */
    200: SignOutResponse;
};
export type GetAuthSignOutResponse = GetAuthSignOutResponses[keyof GetAuthSignOutResponses];
export type PostAuthPasswordResetData = {
    body?: PasswordResetRequest;
    path?: never;
    query?: never;
    url: '/auth/password/reset';
};
export type PostAuthPasswordResetErrors = {
    /**
     * Invalid request to reset password.
     */
    400: ValidationErrorMessage | EmailSendFailureMessage;
    /**
     * User or organization not found
     */
    404: UserNotFoundMessage | OrganizationNotFoundMessage;
};
export type PostAuthPasswordResetError = PostAuthPasswordResetErrors[keyof PostAuthPasswordResetErrors];
export type PostAuthPasswordResetResponses = {
    /**
     * Password reset email sent
     */
    200: PasswordResetResponse;
};
export type PostAuthPasswordResetResponse = PostAuthPasswordResetResponses[keyof PostAuthPasswordResetResponses];
export type PostAuthPasswordResetVerifyData = {
    body?: PasswordResetVerifyRequest;
    path?: never;
    query?: never;
    url: '/auth/password/reset-verify';
};
export type PostAuthPasswordResetVerifyErrors = {
    /**
     * Invalid request to verify password reset.
     */
    400: ValidationErrorMessage | PasswordChangeFailedMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * User or organization not found
     */
    404: UserNotFoundMessage | OrganizationNotFoundMessage;
};
export type PostAuthPasswordResetVerifyError = PostAuthPasswordResetVerifyErrors[keyof PostAuthPasswordResetVerifyErrors];
export type PostAuthPasswordResetVerifyResponses = {
    /**
     * Password reset successful
     */
    200: PasswordResetVerifyResponse;
};
export type PostAuthPasswordResetVerifyResponse = PostAuthPasswordResetVerifyResponses[keyof PostAuthPasswordResetVerifyResponses];
export type PostAuthPasswordChangeData = {
    body?: PasswordChangeRequest;
    path?: never;
    query?: never;
    url: '/auth/password/change';
};
export type PostAuthPasswordChangeErrors = {
    /**
     * Invalid request to change password.
     */
    400: ValidationErrorMessage | PasswordChangeFailedMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * User or organization not found
     */
    404: UserNotFoundMessage | OrganizationNotFoundMessage;
};
export type PostAuthPasswordChangeError = PostAuthPasswordChangeErrors[keyof PostAuthPasswordChangeErrors];
export type PostAuthPasswordChangeResponses = {
    /**
     * Password changed successfully
     */
    200: PasswordChangeResponse;
};
export type PostAuthPasswordChangeResponse = PostAuthPasswordChangeResponses[keyof PostAuthPasswordChangeResponses];
export type GetApiKeysData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/api-keys';
};
export type GetApiKeysErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found or no API keys found for the organization.
     */
    404: EmptyArrayResponse | OrganizationNotFoundMessage;
};
export type GetApiKeysError = GetApiKeysErrors[keyof GetApiKeysErrors];
export type GetApiKeysResponses = {
    /**
     * List of API keys
     */
    200: ApiKeyList;
};
export type GetApiKeysResponse = GetApiKeysResponses[keyof GetApiKeysResponses];
export type PostApiKeysData = {
    body?: CreateApiKeyRequest;
    path?: never;
    query?: never;
    url: '/api-keys';
};
export type PostApiKeysErrors = {
    /**
     * Bad Request when creating API key
     */
    400: ValidationErrorMessage | ApiKeyNameTakenMessage | InvalidApiKeyRoleMessage | InvalidApiKeyLifetimeFormatMessage | LimitReachedMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found.
     */
    404: OrganizationNotFoundMessage;
    /**
     * Conflict response message
     */
    409: {
        message: string;
    };
    /**
     * Limit reached response message
     */
    429: {
        message: string;
    };
};
export type PostApiKeysError = PostApiKeysErrors[keyof PostApiKeysErrors];
export type PostApiKeysResponses = {
    /**
     * API key created successfully
     */
    201: ApiKeyCreateResponse;
};
export type PostApiKeysResponse = PostApiKeysResponses[keyof PostApiKeysResponses];
export type DeleteApiKeysByApiKeyIdData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the API key
         */
        apiKeyId: string;
    };
    query?: never;
    url: '/api-keys/{apiKeyId}';
};
export type DeleteApiKeysByApiKeyIdErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * API key to delete not found or its organization not found.
     */
    404: ApiKeyNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteApiKeysByApiKeyIdError = DeleteApiKeysByApiKeyIdErrors[keyof DeleteApiKeysByApiKeyIdErrors];
export type DeleteApiKeysByApiKeyIdResponses = {
    /**
     * API key deleted successfully
     */
    200: SuccessResponse;
};
export type DeleteApiKeysByApiKeyIdResponse = DeleteApiKeysByApiKeyIdResponses[keyof DeleteApiKeysByApiKeyIdResponses];
export type GetApiKeysByApiKeyIdData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the API key
         */
        apiKeyId: string;
    };
    query?: never;
    url: '/api-keys/{apiKeyId}';
};
export type GetApiKeysByApiKeyIdErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * API key not found or its organization not found.
     */
    404: ApiKeyNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetApiKeysByApiKeyIdError = GetApiKeysByApiKeyIdErrors[keyof GetApiKeysByApiKeyIdErrors];
export type GetApiKeysByApiKeyIdResponses = {
    /**
     * API key details
     */
    200: ApiKeyResponse;
};
export type GetApiKeysByApiKeyIdResponse = GetApiKeysByApiKeyIdResponses[keyof GetApiKeysByApiKeyIdResponses];
export type PutApiKeysByApiKeyIdData = {
    body?: UpdateApiKeyRequest;
    path: {
        /**
         * Unique identifier of the API key
         */
        apiKeyId: string;
    };
    query?: never;
    url: '/api-keys/{apiKeyId}';
};
export type PutApiKeysByApiKeyIdErrors = {
    /**
     * Bad Request when updating API key
     */
    400: ValidationErrorMessage | ApiKeyNameTakenMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * API key to update not found or its organization not found.
     */
    404: ApiKeyNotFoundMessage | OrganizationNotFoundMessage;
};
export type PutApiKeysByApiKeyIdError = PutApiKeysByApiKeyIdErrors[keyof PutApiKeysByApiKeyIdErrors];
export type PutApiKeysByApiKeyIdResponses = {
    /**
     * API key updated successfully
     */
    200: ApiKeyResponse;
};
export type PutApiKeysByApiKeyIdResponse = PutApiKeysByApiKeyIdResponses[keyof PutApiKeysByApiKeyIdResponses];
export type PutApiKeysByApiKeyIdStatusData = {
    body?: StatusChangeApiKeyRequest;
    path: {
        /**
         * Unique identifier of the API key
         */
        apiKeyId: string;
    };
    query?: never;
    url: '/api-keys/{apiKeyId}/status';
};
export type PutApiKeysByApiKeyIdStatusErrors = {
    /**
     * Bad Request when changing API key status
     */
    400: ValidationErrorMessage | LimitReachedMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * API key to change status not found or its organization not found.
     */
    404: ApiKeyNotFoundMessage | OrganizationNotFoundMessage;
};
export type PutApiKeysByApiKeyIdStatusError = PutApiKeysByApiKeyIdStatusErrors[keyof PutApiKeysByApiKeyIdStatusErrors];
export type PutApiKeysByApiKeyIdStatusResponses = {
    /**
     * API key status changed successfully
     */
    200: ApiKeyResponse;
};
export type PutApiKeysByApiKeyIdStatusResponse = PutApiKeysByApiKeyIdStatusResponses[keyof PutApiKeysByApiKeyIdStatusResponses];
export type GetOrgsCurrentData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/orgs/current';
};
export type GetOrgsCurrentErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * The current organization was not found.
     */
    404: OrganizationNotFoundMessage;
};
export type GetOrgsCurrentError = GetOrgsCurrentErrors[keyof GetOrgsCurrentErrors];
export type GetOrgsCurrentResponses = {
    /**
     * Organization information with related details
     */
    200: {
        /**
         * Unique identifier for the organization
         */
        id: string;
        /**
         * Name of the organization
         */
        name: string;
        /**
         * Current plan of the organization
         */
        planName?: string | null;
        /**
         * Description of the organization
         */
        description?: string | null;
        /**
         * Redirect URL of the organization
         */
        redirectUrl?: string | null;
        /**
         * Whether the organization is disabled
         */
        isDisabled?: boolean;
        /**
         * ID of the user or API key that disabled the organization
         */
        disabledBy?: string | null;
        /**
         * Timestamp when the organization was disabled
         */
        disabledAt?: string | null;
        /**
         * Whether the organization is deleted
         */
        isDeleted?: boolean;
        /**
         * ID of the user or API key that deleted the organization
         */
        deletedBy?: string | null;
        /**
         * Timestamp when the organization was deleted
         */
        deletedAt?: string | null;
        /**
         * Whether this is the current active organization for the user
         */
        isCurrent?: boolean;
        /**
         * Roles assigned to the user in this organization
         */
        roles?: Array<{
            /**
             * Name of the role
             */
            name: string;
            scopes?: Array<string>;
        }>;
        /**
         * Workspaces within this organization
         */
        workspaces?: Array<{
            /**
             * Unique identifier for the workspace
             */
            id: string;
            /**
             * Name of the workspace
             */
            name: string;
            /**
             * Whether access to this workspace is isRestricted
             */
            isRestricted: boolean;
            /**
             * Roles assigned to the user in this workspace
             */
            roles?: Array<{
                /**
                 * Name of the role
                 */
                name: string;
                scopes?: Array<string>;
            }>;
        }>;
        /**
         * User who created the resource
         */
        createdByUser?: AuditInfoMember | null;
        /**
         * User who last updated the resource
         */
        updatedByUser?: AuditInfoMember | null;
        /**
         * API key used to create the resource
         */
        createdByApiKey?: AuditInfoApiKey | null;
        /**
         * API key used to last update the resource
         */
        updatedByApiKey?: AuditInfoApiKey | null;
        /**
         * When the resource was created
         */
        createdAt?: string | null;
        /**
         * When the resource was last updated
         */
        updatedAt?: string | null;
    };
};
export type GetOrgsCurrentResponse = GetOrgsCurrentResponses[keyof GetOrgsCurrentResponses];
export type PutOrgsData = {
    body?: UpdateOrganizationRequest;
    path?: never;
    query?: never;
    url: '/orgs';
};
export type PutOrgsErrors = {
    /**
     * Invalid request to update organization. Check data, permissions, or ensure at least one field is provided for update.
     */
    400: ValidationErrorMessage | UpdateFieldRequiredMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * The organization to update was not found.
     */
    404: OrganizationNotFoundMessage;
};
export type PutOrgsError = PutOrgsErrors[keyof PutOrgsErrors];
export type PutOrgsResponses = {
    /**
     * Organization information with related details
     */
    200: {
        /**
         * Unique identifier for the organization
         */
        id: string;
        /**
         * Name of the organization
         */
        name: string;
        /**
         * Current plan of the organization
         */
        planName?: string | null;
        /**
         * Description of the organization
         */
        description?: string | null;
        /**
         * Redirect URL of the organization
         */
        redirectUrl?: string | null;
        /**
         * Whether the organization is disabled
         */
        isDisabled?: boolean;
        /**
         * ID of the user or API key that disabled the organization
         */
        disabledBy?: string | null;
        /**
         * Timestamp when the organization was disabled
         */
        disabledAt?: string | null;
        /**
         * Whether the organization is deleted
         */
        isDeleted?: boolean;
        /**
         * ID of the user or API key that deleted the organization
         */
        deletedBy?: string | null;
        /**
         * Timestamp when the organization was deleted
         */
        deletedAt?: string | null;
        /**
         * Whether this is the current active organization for the user
         */
        isCurrent?: boolean;
        /**
         * Roles assigned to the user in this organization
         */
        roles?: Array<{
            /**
             * Name of the role
             */
            name: string;
            scopes?: Array<string>;
        }>;
        /**
         * Workspaces within this organization
         */
        workspaces?: Array<{
            /**
             * Unique identifier for the workspace
             */
            id: string;
            /**
             * Name of the workspace
             */
            name: string;
            /**
             * Whether access to this workspace is isRestricted
             */
            isRestricted: boolean;
            /**
             * Roles assigned to the user in this workspace
             */
            roles?: Array<{
                /**
                 * Name of the role
                 */
                name: string;
                scopes?: Array<string>;
            }>;
        }>;
        /**
         * User who created the resource
         */
        createdByUser?: AuditInfoMember | null;
        /**
         * User who last updated the resource
         */
        updatedByUser?: AuditInfoMember | null;
        /**
         * API key used to create the resource
         */
        createdByApiKey?: AuditInfoApiKey | null;
        /**
         * API key used to last update the resource
         */
        updatedByApiKey?: AuditInfoApiKey | null;
        /**
         * When the resource was created
         */
        createdAt?: string | null;
        /**
         * When the resource was last updated
         */
        updatedAt?: string | null;
    };
};
export type PutOrgsResponse = PutOrgsResponses[keyof PutOrgsResponses];
export type PostOrgsFirstData = {
    body?: CreateOrganizationRequest;
    path?: never;
    query?: never;
    url: '/orgs/first';
};
export type PostOrgsFirstErrors = {
    /**
     * Invalid request to create first organization.
     */
    400: ValidationErrorMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Conflict response message
     */
    409: {
        message: string;
    };
};
export type PostOrgsFirstError = PostOrgsFirstErrors[keyof PostOrgsFirstErrors];
export type PostOrgsFirstResponses = {
    /**
     * First organization created successfully
     */
    201: OrganizationCreateResponse;
};
export type PostOrgsFirstResponse = PostOrgsFirstResponses[keyof PostOrgsFirstResponses];
export type PostOrgsCurrentByOrgIdData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the organization
         */
        orgId: string;
    };
    query?: never;
    url: '/orgs/current/{orgId}';
};
export type PostOrgsCurrentByOrgIdErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Target organization for switching not found or is disabled.
     */
    404: OrganizationNotFoundMessage | OrganizationNotFoundOrDisabledMessage;
};
export type PostOrgsCurrentByOrgIdError = PostOrgsCurrentByOrgIdErrors[keyof PostOrgsCurrentByOrgIdErrors];
export type PostOrgsCurrentByOrgIdResponses = {
    /**
     * Organization switched successfully
     */
    200: OrganizationSwitchResponse;
};
export type PostOrgsCurrentByOrgIdResponse = PostOrgsCurrentByOrgIdResponses[keyof PostOrgsCurrentByOrgIdResponses];
export type GetInvitesData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/invites';
};
export type GetInvitesErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization context not found.
     */
    404: EmptyArrayResponse | OrganizationNotFoundMessage;
};
export type GetInvitesError = GetInvitesErrors[keyof GetInvitesErrors];
export type GetInvitesResponses = {
    /**
     * List of invitations
     */
    200: OrganizationInvitationsResponse;
};
export type GetInvitesResponse = GetInvitesResponses[keyof GetInvitesResponses];
export type PostInvitesData = {
    body?: CreateInvitationRequest;
    path?: never;
    query?: never;
    url: '/invites';
};
export type PostInvitesErrors = {
    /**
     * Invalid request to create invitation.
     */
    400: ValidationErrorMessage | UserAlreadyHasRoleInOrganizationMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found.
     */
    404: OrganizationNotFoundMessage;
    /**
     * Conflict response message
     */
    409: {
        message: string;
    };
    /**
     * Limit reached response message
     */
    429: {
        message: string;
    };
};
export type PostInvitesError = PostInvitesErrors[keyof PostInvitesErrors];
export type PostInvitesResponses = {
    /**
     * Invitation created successfully
     */
    201: CreateInvitationResponse;
};
export type PostInvitesResponse = PostInvitesResponses[keyof PostInvitesResponses];
export type GetInvitesMeData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/invites/me';
};
export type GetInvitesMeErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * No invitations found for the current user, or the organization context is invalid.
     */
    404: EmptyArrayResponse | OrganizationNotFoundMessage;
};
export type GetInvitesMeError = GetInvitesMeErrors[keyof GetInvitesMeErrors];
export type GetInvitesMeResponses = {
    /**
     * List of invitations sent by the current user
     */
    200: UserInvitationsResponse;
};
export type GetInvitesMeResponse = GetInvitesMeResponses[keyof GetInvitesMeResponses];
export type DeleteInvitesByInvitationIdData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the invitation
         */
        invitationId: string;
    };
    query?: never;
    url: '/invites/{invitationId}';
};
export type DeleteInvitesByInvitationIdErrors = {
    /**
     * Cannot delete invitation due to invalid parameters or business rules.
     */
    400: ValidationErrorMessage | CannotDeleteAcceptedInvitationMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Invitation to delete not found, or its organization not found.
     */
    404: InvitationNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteInvitesByInvitationIdError = DeleteInvitesByInvitationIdErrors[keyof DeleteInvitesByInvitationIdErrors];
export type DeleteInvitesByInvitationIdResponses = {
    /**
     * Success response message
     */
    200: {
        message: string;
    };
};
export type DeleteInvitesByInvitationIdResponse = DeleteInvitesByInvitationIdResponses[keyof DeleteInvitesByInvitationIdResponses];
export type GetInvitesByTokenAcceptData = {
    body?: never;
    path: {
        token: string;
    };
    query?: never;
    url: '/invites/{token}/accept';
};
export type GetInvitesByTokenAcceptErrors = {
    /**
     * Cannot accept invitation due to invalid token, status, or parameters.
     */
    400: ValidationErrorMessage | InvitationExpiredMessage | InvitationAlreadyAcceptedMessage | InvitationAlreadyDeclinedMessage;
    /**
     * Invitation to accept not found or has an invalid status (e.g., already accepted/declined/expired).
     */
    404: InvitationNotFoundMessage;
};
export type GetInvitesByTokenAcceptError = GetInvitesByTokenAcceptErrors[keyof GetInvitesByTokenAcceptErrors];
export type GetInvitesByTokenAcceptResponses = {
    /**
     * Invitation accepted successfully
     */
    200: AcceptInvitationResponse;
};
export type GetInvitesByTokenAcceptResponse = GetInvitesByTokenAcceptResponses[keyof GetInvitesByTokenAcceptResponses];
export type GetInvitesByTokenDeclineData = {
    body?: never;
    path: {
        /**
         * Invitation token
         */
        token: string;
    };
    query?: never;
    url: '/invites/{token}/decline';
};
export type GetInvitesByTokenDeclineErrors = {
    /**
     * Cannot decline invitation due to invalid token, status, or parameters.
     */
    400: ValidationErrorMessage | InvitationExpiredMessage | InvitationAlreadyAcceptedMessage | InvitationAlreadyDeclinedMessage;
    /**
     * Invitation to decline not found or has an invalid status (e.g., already accepted/declined/expired).
     */
    404: InvitationNotFoundMessage;
};
export type GetInvitesByTokenDeclineError = GetInvitesByTokenDeclineErrors[keyof GetInvitesByTokenDeclineErrors];
export type GetInvitesByTokenDeclineResponses = {
    /**
     * Success response message
     */
    200: {
        message: string;
    };
};
export type GetInvitesByTokenDeclineResponse = GetInvitesByTokenDeclineResponses[keyof GetInvitesByTokenDeclineResponses];
export type GetMembersData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/members';
};
export type GetMembersErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found, or no members in organization.
     */
    404: EmptyArrayResponse | OrganizationNotFoundMessage;
};
export type GetMembersError = GetMembersErrors[keyof GetMembersErrors];
export type GetMembersResponses = {
    /**
     * List of organization members
     */
    200: OrganizationMembers;
};
export type GetMembersResponse = GetMembersResponses[keyof GetMembersResponses];
export type PostMembersData = {
    body?: AddOrganizationMember;
    path?: never;
    query?: never;
    url: '/members';
};
export type PostMembersErrors = {
    /**
     * Invalid request to add member.
     */
    400: ValidationErrorMessage | UserAlreadyHasRoleInOrganizationMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Member to be added not found (and invitation not sent), or Organization not found.
     */
    404: MemberNotFoundMessage | MemberOrRoleNotFoundMessage | OrganizationNotFoundMessage;
    /**
     * Conflict response message
     */
    409: {
        message: string;
    };
};
export type PostMembersError = PostMembersErrors[keyof PostMembersErrors];
export type PostMembersResponses = {
    /**
     * Member added successfully
     */
    201: UserRoleWithOrganization;
};
export type PostMembersResponse = PostMembersResponses[keyof PostMembersResponses];
export type DeleteMembersByUserIdData = {
    body?: never;
    path: {
        userId: string;
    };
    query?: never;
    url: '/members/{userId}';
};
export type DeleteMembersByUserIdErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Member to remove not found in the organization, or Organization not found.
     */
    404: MemberNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteMembersByUserIdError = DeleteMembersByUserIdErrors[keyof DeleteMembersByUserIdErrors];
export type DeleteMembersByUserIdResponses = {
    /**
     * Success response message
     */
    200: {
        message: string;
    };
};
export type DeleteMembersByUserIdResponse = DeleteMembersByUserIdResponses[keyof DeleteMembersByUserIdResponses];
export type GetMembersByUserIdRolesData = {
    body?: never;
    path: {
        userId: string;
    };
    query?: never;
    url: '/members/{userId}/roles';
};
export type GetMembersByUserIdRolesErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Member not found, Organization not found, or member found but has no roles in this context.
     */
    404: EmptyRolesListResponse | MemberNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetMembersByUserIdRolesError = GetMembersByUserIdRolesErrors[keyof GetMembersByUserIdRolesErrors];
export type GetMembersByUserIdRolesResponses = {
    /**
     * Member roles
     */
    200: GroupedMemberRoles;
};
export type GetMembersByUserIdRolesResponse = GetMembersByUserIdRolesResponses[keyof GetMembersByUserIdRolesResponses];
export type PostMembersByUserIdRoleData = {
    body?: AddMemberRole;
    path: {
        userId: string;
    };
    query?: never;
    url: '/members/{userId}/role';
};
export type PostMembersByUserIdRoleErrors = {
    /**
     * Invalid request to add role to member.
     */
    400: ValidationErrorMessage | UserAlreadyHasRoleInOrganizationMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Member, Role, or Organization not found.
     */
    404: MemberNotFoundMessage | MemberOrRoleNotFoundMessage | OrganizationNotFoundMessage;
};
export type PostMembersByUserIdRoleError = PostMembersByUserIdRoleErrors[keyof PostMembersByUserIdRoleErrors];
export type PostMembersByUserIdRoleResponses = {
    /**
     * Role added successfully
     */
    200: UserRoleWithOrganization;
};
export type PostMembersByUserIdRoleResponse = PostMembersByUserIdRoleResponses[keyof PostMembersByUserIdRoleResponses];
export type DeleteMembersByUserIdRoleByRoleNameData = {
    body?: never;
    path: {
        userId: string;
        /**
         * Name of the role
         */
        roleName: string;
    };
    query?: never;
    url: '/members/{userId}/role/{roleName}';
};
export type DeleteMembersByUserIdRoleByRoleNameErrors = {
    /**
     * Cannot remove member role due to business rules or invalid parameters.
     */
    400: ValidationErrorMessage | CannotRemoveOwnOwnerRoleMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Member, Role, or Organization not found.
     */
    404: MemberNotFoundMessage | MemberOrRoleNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteMembersByUserIdRoleByRoleNameError = DeleteMembersByUserIdRoleByRoleNameErrors[keyof DeleteMembersByUserIdRoleByRoleNameErrors];
export type DeleteMembersByUserIdRoleByRoleNameResponses = {
    /**
     * Success response message
     */
    200: {
        message: string;
    };
};
export type DeleteMembersByUserIdRoleByRoleNameResponse = DeleteMembersByUserIdRoleByRoleNameResponses[keyof DeleteMembersByUserIdRoleByRoleNameResponses];
export type GetWorkspacesData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/workspaces';
};
export type GetWorkspacesErrors = {
    /**
     * Invalid request for listing workspaces.
     */
    400: ValidationErrorMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found or no workspaces exist.
     */
    404: EmptyArrayResponse | OrganizationNotFoundMessage;
};
export type GetWorkspacesError = GetWorkspacesErrors[keyof GetWorkspacesErrors];
export type GetWorkspacesResponses = {
    /**
     * List of workspaces
     */
    200: Array<WorkspaceResponse>;
};
export type GetWorkspacesResponse = GetWorkspacesResponses[keyof GetWorkspacesResponses];
export type PostWorkspacesData = {
    body?: CreateWorkspaceRequest;
    path?: never;
    query?: never;
    url: '/workspaces';
};
export type PostWorkspacesErrors = {
    /**
     * Invalid input for creating a workspace.
     */
    400: ValidationErrorMessage | WorkspaceNameTakenMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found.
     */
    404: OrganizationNotFoundMessage;
    /**
     * Limit reached response message
     */
    429: {
        message: string;
    };
};
export type PostWorkspacesError = PostWorkspacesErrors[keyof PostWorkspacesErrors];
export type PostWorkspacesResponses = {
    /**
     * Workspace created successfully
     */
    201: WorkspaceResponse;
};
export type PostWorkspacesResponse = PostWorkspacesResponses[keyof PostWorkspacesResponses];
export type DeleteWorkspacesByWorkspaceIdData = {
    body?: never;
    path: {
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}';
};
export type DeleteWorkspacesByWorkspaceIdErrors = {
    /**
     * Invalid request for deleting a workspace.
     */
    400: ValidationErrorMessage | WorkspaceNotEmptyMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Workspace or Organization not found.
     */
    404: WorkspaceNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteWorkspacesByWorkspaceIdError = DeleteWorkspacesByWorkspaceIdErrors[keyof DeleteWorkspacesByWorkspaceIdErrors];
export type DeleteWorkspacesByWorkspaceIdResponses = {
    /**
     * Workspace deleted successfully
     */
    200: WorkspaceDeleteResponse;
};
export type DeleteWorkspacesByWorkspaceIdResponse = DeleteWorkspacesByWorkspaceIdResponses[keyof DeleteWorkspacesByWorkspaceIdResponses];
export type GetWorkspacesByWorkspaceIdData = {
    body?: never;
    path: {
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}';
};
export type GetWorkspacesByWorkspaceIdErrors = {
    /**
     * Invalid request for getting a workspace.
     */
    400: ValidationErrorMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Workspace or Organization not found.
     */
    404: WorkspaceNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetWorkspacesByWorkspaceIdError = GetWorkspacesByWorkspaceIdErrors[keyof GetWorkspacesByWorkspaceIdErrors];
export type GetWorkspacesByWorkspaceIdResponses = {
    /**
     * Workspace details
     */
    200: WorkspaceResponse;
};
export type GetWorkspacesByWorkspaceIdResponse = GetWorkspacesByWorkspaceIdResponses[keyof GetWorkspacesByWorkspaceIdResponses];
export type PutWorkspacesByWorkspaceIdData = {
    body?: UpdateWorkspaceRequest;
    path: {
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}';
};
export type PutWorkspacesByWorkspaceIdErrors = {
    /**
     * Invalid input for updating a workspace.
     */
    400: ValidationErrorMessage | WorkspaceNameTakenMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Workspace or Organization not found.
     */
    404: WorkspaceNotFoundMessage | OrganizationNotFoundMessage;
};
export type PutWorkspacesByWorkspaceIdError = PutWorkspacesByWorkspaceIdErrors[keyof PutWorkspacesByWorkspaceIdErrors];
export type PutWorkspacesByWorkspaceIdResponses = {
    /**
     * Workspace updated successfully
     */
    200: WorkspaceResponse;
};
export type PutWorkspacesByWorkspaceIdResponse = PutWorkspacesByWorkspaceIdResponses[keyof PutWorkspacesByWorkspaceIdResponses];
export type DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleData = {
    body?: never;
    path: {
        workspaceId: string;
        userId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/members/{userId}/role';
};
export type DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleErrors = {
    /**
     * Invalid input for removing a role from a workspace member.
     */
    400: ValidationErrorMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Workspace, Member, Role or Organization not found.
     */
    404: WorkspaceNotFoundMessage | MemberNotFoundMessage | RoleNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleError = DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleErrors[keyof DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleErrors];
export type DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleResponses = {
    /**
     * Success response message
     */
    200: {
        message: string;
    };
};
export type DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleResponse = DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleResponses[keyof DeleteWorkspacesByWorkspaceIdMembersByUserIdRoleResponses];
export type GetWorkspacesByWorkspaceIdMembersByUserIdRoleData = {
    body?: never;
    path: {
        workspaceId: string;
        /**
         * Unique identifier of the user
         */
        userId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/members/{userId}/role';
};
export type GetWorkspacesByWorkspaceIdMembersByUserIdRoleErrors = {
    /**
     * Invalid request for getting user roles in a workspace.
     */
    400: ValidationErrorMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Workspace, Member, or Organization not found.
     */
    404: WorkspaceNotFoundMessage | MemberNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetWorkspacesByWorkspaceIdMembersByUserIdRoleError = GetWorkspacesByWorkspaceIdMembersByUserIdRoleErrors[keyof GetWorkspacesByWorkspaceIdMembersByUserIdRoleErrors];
export type GetWorkspacesByWorkspaceIdMembersByUserIdRoleResponses = {
    /**
     * User roles in the workspace
     */
    200: WorkspaceMemberRoles;
};
export type GetWorkspacesByWorkspaceIdMembersByUserIdRoleResponse = GetWorkspacesByWorkspaceIdMembersByUserIdRoleResponses[keyof GetWorkspacesByWorkspaceIdMembersByUserIdRoleResponses];
export type PostWorkspacesByWorkspaceIdMembersByUserIdRoleData = {
    body?: WorkspaceMemberRole;
    path: {
        workspaceId: string;
        userId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/members/{userId}/role';
};
export type PostWorkspacesByWorkspaceIdMembersByUserIdRoleErrors = {
    /**
     * Invalid input for adding a role to a workspace member.
     */
    400: ValidationErrorMessage | UserAlreadyHasRoleInWorkspaceMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Workspace, Member, Role or Organization not found.
     */
    404: WorkspaceNotFoundMessage | MemberNotFoundMessage | RoleNotFoundMessage | OrganizationNotFoundMessage;
};
export type PostWorkspacesByWorkspaceIdMembersByUserIdRoleError = PostWorkspacesByWorkspaceIdMembersByUserIdRoleErrors[keyof PostWorkspacesByWorkspaceIdMembersByUserIdRoleErrors];
export type PostWorkspacesByWorkspaceIdMembersByUserIdRoleResponses = {
    /**
     * Role added successfully
     */
    201: AddWorkspaceMemberRoleResponse;
};
export type PostWorkspacesByWorkspaceIdMembersByUserIdRoleResponse = PostWorkspacesByWorkspaceIdMembersByUserIdRoleResponses[keyof PostWorkspacesByWorkspaceIdMembersByUserIdRoleResponses];
export type GetWorkspacesByWorkspaceIdMembersData = {
    body?: never;
    path: {
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/members';
};
export type GetWorkspacesByWorkspaceIdMembersErrors = {
    /**
     * Invalid request for listing workspace members.
     */
    400: ValidationErrorMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Workspace or Organization not found, or workspace has no members.
     */
    404: EmptyArrayResponse | WorkspaceNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetWorkspacesByWorkspaceIdMembersError = GetWorkspacesByWorkspaceIdMembersErrors[keyof GetWorkspacesByWorkspaceIdMembersErrors];
export type GetWorkspacesByWorkspaceIdMembersResponses = {
    /**
     * List of workspace members
     */
    200: WorkspaceMembers;
};
export type GetWorkspacesByWorkspaceIdMembersResponse = GetWorkspacesByWorkspaceIdMembersResponses[keyof GetWorkspacesByWorkspaceIdMembersResponses];
export type GetRolesData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Whether to include detailed scope information
         */
        includeScopes?: boolean;
    };
    url: '/roles';
};
export type GetRolesErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found or no roles defined (system roles should always exist).
     */
    404: EmptyArrayResponse | OrganizationNotFoundMessage;
};
export type GetRolesError = GetRolesErrors[keyof GetRolesErrors];
export type GetRolesResponses = {
    /**
     * List of roles with their scopes
     */
    200: RolesWithScopesResponse;
};
export type GetRolesResponse = GetRolesResponses[keyof GetRolesResponses];
export type GetPlansData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/plans';
};
export type GetPlansErrors = {
    /**
     * No plans found globally (returns empty array if successful but no plans exist), or the organization context was not found if authenticated.
     */
    404: EmptyArrayResponse | OrganizationNotFoundMessage;
};
export type GetPlansError = GetPlansErrors[keyof GetPlansErrors];
export type GetPlansResponses = {
    /**
     * List of available plans
     */
    200: PlansResponse;
};
export type GetPlansResponse = GetPlansResponses[keyof GetPlansResponses];
export type GetPlansCurrentData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/plans/current';
};
export type GetPlansCurrentErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Plan for the current organization not found (this usually implies the organization itself was not found or has no plan).
     */
    404: PlanNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetPlansCurrentError = GetPlansCurrentErrors[keyof GetPlansCurrentErrors];
export type GetPlansCurrentResponses = {
    /**
     * Current organization plan with usage details
     */
    200: OrganizationPlanResponse;
};
export type GetPlansCurrentResponse = GetPlansCurrentResponses[keyof GetPlansCurrentResponses];
export type GetSettingsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/settings';
};
export type GetSettingsErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found, or no settings available.
     */
    404: EmptyArrayResponse | OrganizationNotFoundMessage;
};
export type GetSettingsError = GetSettingsErrors[keyof GetSettingsErrors];
export type GetSettingsResponses = {
    /**
     * List of all settings with group information
     */
    200: SettingsWithGroupResponse;
};
export type GetSettingsResponse = GetSettingsResponses[keyof GetSettingsResponses];
export type GetSettingsCustomData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/settings/custom';
};
export type GetSettingsCustomErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found, or no custom settings available.
     */
    404: EmptyArrayResponse | OrganizationNotFoundMessage;
};
export type GetSettingsCustomError = GetSettingsCustomErrors[keyof GetSettingsCustomErrors];
export type GetSettingsCustomResponses = {
    /**
     * List of custom settings
     */
    200: SettingsResponse;
};
export type GetSettingsCustomResponse = GetSettingsCustomResponses[keyof GetSettingsCustomResponses];
export type PostSettingsCustomData = {
    body?: CreateSetting;
    path?: never;
    query?: never;
    url: '/settings/custom';
};
export type PostSettingsCustomErrors = {
    /**
     * Bad Request when creating custom setting
     */
    400: ValidationErrorMessage | SettingValueRequiredMessage | SettingReservedNameMessage | SettingNotWorkspaceOverridableMessageSchema;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found.
     */
    404: OrganizationNotFoundMessage;
};
export type PostSettingsCustomError = PostSettingsCustomErrors[keyof PostSettingsCustomErrors];
export type PostSettingsCustomResponses = {
    /**
     * Custom setting created successfully
     */
    201: SettingResponse;
};
export type PostSettingsCustomResponse = PostSettingsCustomResponses[keyof PostSettingsCustomResponses];
export type DeleteSettingsCustomBySettingSlugData = {
    body?: never;
    path: {
        settingSlug: string;
    };
    query?: never;
    url: '/settings/custom/{settingSlug}';
};
export type DeleteSettingsCustomBySettingSlugErrors = {
    /**
     * Bad Request when deleting custom setting
     */
    400: CannotDeleteServiceSettingMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or Setting not found.
     */
    404: SettingNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteSettingsCustomBySettingSlugError = DeleteSettingsCustomBySettingSlugErrors[keyof DeleteSettingsCustomBySettingSlugErrors];
export type DeleteSettingsCustomBySettingSlugResponses = {
    /**
     * Custom setting deleted successfully
     */
    200: SettingSuccessResponse;
};
export type DeleteSettingsCustomBySettingSlugResponse = DeleteSettingsCustomBySettingSlugResponses[keyof DeleteSettingsCustomBySettingSlugResponses];
export type GetSettingsCustomBySettingSlugData = {
    body?: never;
    path: {
        settingSlug: string;
    };
    query?: never;
    url: '/settings/custom/{settingSlug}';
};
export type GetSettingsCustomBySettingSlugErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or Setting not found.
     */
    404: SettingNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetSettingsCustomBySettingSlugError = GetSettingsCustomBySettingSlugErrors[keyof GetSettingsCustomBySettingSlugErrors];
export type GetSettingsCustomBySettingSlugResponses = {
    /**
     * Custom setting details
     */
    200: SettingResponse;
};
export type GetSettingsCustomBySettingSlugResponse = GetSettingsCustomBySettingSlugResponses[keyof GetSettingsCustomBySettingSlugResponses];
export type PutSettingsCustomBySettingSlugData = {
    body?: UpdateSetting;
    path: {
        settingSlug: string;
    };
    query?: never;
    url: '/settings/custom/{settingSlug}';
};
export type PutSettingsCustomBySettingSlugErrors = {
    /**
     * Bad Request when updating custom setting
     */
    400: ValidationErrorMessage | SettingValueRequiredMessage | SettingNotWorkspaceOverridableMessageSchema;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or Setting not found.
     */
    404: SettingNotFoundMessage | OrganizationNotFoundMessage;
};
export type PutSettingsCustomBySettingSlugError = PutSettingsCustomBySettingSlugErrors[keyof PutSettingsCustomBySettingSlugErrors];
export type PutSettingsCustomBySettingSlugResponses = {
    /**
     * Custom setting updated successfully
     */
    200: SettingResponse;
};
export type PutSettingsCustomBySettingSlugResponse = PutSettingsCustomBySettingSlugResponses[keyof PutSettingsCustomBySettingSlugResponses];
export type GetSettingsCustomBySettingSlugValueData = {
    body?: never;
    path: {
        settingSlug: string;
    };
    query?: never;
    url: '/settings/custom/{settingSlug}/value';
};
export type GetSettingsCustomBySettingSlugValueErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or Setting not found.
     */
    404: SettingNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetSettingsCustomBySettingSlugValueError = GetSettingsCustomBySettingSlugValueErrors[keyof GetSettingsCustomBySettingSlugValueErrors];
export type GetSettingsCustomBySettingSlugValueResponses = {
    /**
     * Custom setting value (any type)
     */
    200: string;
};
export type GetSettingsCustomBySettingSlugValueResponse = GetSettingsCustomBySettingSlugValueResponses[keyof GetSettingsCustomBySettingSlugValueResponses];
export type GetSettingsServiceData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/settings/service';
};
export type GetSettingsServiceErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found, or no service settings available.
     */
    404: EmptyArrayResponse | OrganizationNotFoundMessage;
};
export type GetSettingsServiceError = GetSettingsServiceErrors[keyof GetSettingsServiceErrors];
export type GetSettingsServiceResponses = {
    /**
     * List of service settings
     */
    200: SettingsResponse;
};
export type GetSettingsServiceResponse = GetSettingsServiceResponses[keyof GetSettingsServiceResponses];
export type GetSettingsServiceBySettingSlugData = {
    body?: never;
    path: {
        settingSlug: string;
    };
    query?: never;
    url: '/settings/service/{settingSlug}';
};
export type GetSettingsServiceBySettingSlugErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or Service Setting not found.
     */
    404: SettingNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetSettingsServiceBySettingSlugError = GetSettingsServiceBySettingSlugErrors[keyof GetSettingsServiceBySettingSlugErrors];
export type GetSettingsServiceBySettingSlugResponses = {
    /**
     * Service setting details
     */
    200: SettingResponse;
};
export type GetSettingsServiceBySettingSlugResponse = GetSettingsServiceBySettingSlugResponses[keyof GetSettingsServiceBySettingSlugResponses];
export type PutSettingsServiceBySettingSlugData = {
    body?: UpdateSetting;
    path: {
        settingSlug: string;
    };
    query?: never;
    url: '/settings/service/{settingSlug}';
};
export type PutSettingsServiceBySettingSlugErrors = {
    /**
     * Bad Request when upserting service setting
     */
    400: ValidationErrorMessage | SettingValueRequiredMessage | InvalidServiceSettingSlugMessage | InvalidServiceSettingValueTypeMessage | InvalidServiceSettingValueMessage | CannotOverrideSettingAtWorkspaceLevelMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or Setting not found.
     */
    404: SettingNotFoundMessage | OrganizationNotFoundMessage;
};
export type PutSettingsServiceBySettingSlugError = PutSettingsServiceBySettingSlugErrors[keyof PutSettingsServiceBySettingSlugErrors];
export type PutSettingsServiceBySettingSlugResponses = {
    /**
     * Service setting updated successfully
     */
    200: SettingResponse;
};
export type PutSettingsServiceBySettingSlugResponse = PutSettingsServiceBySettingSlugResponses[keyof PutSettingsServiceBySettingSlugResponses];
export type GetSettingsServiceBySettingSlugValueData = {
    body?: never;
    path: {
        settingSlug: string;
    };
    query?: never;
    url: '/settings/service/{settingSlug}/value';
};
export type GetSettingsServiceBySettingSlugValueErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or Service Setting not found.
     */
    404: SettingNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetSettingsServiceBySettingSlugValueError = GetSettingsServiceBySettingSlugValueErrors[keyof GetSettingsServiceBySettingSlugValueErrors];
export type GetSettingsServiceBySettingSlugValueResponses = {
    /**
     * Service setting value (any type)
     */
    200: {
        [key: string]: unknown;
    };
};
export type GetSettingsServiceBySettingSlugValueResponse = GetSettingsServiceBySettingSlugValueResponses[keyof GetSettingsServiceBySettingSlugValueResponses];
export type GetWorkspacesByWorkspaceIdSettingsData = {
    body?: never;
    path: {
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/settings';
};
export type GetWorkspacesByWorkspaceIdSettingsErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found, or no workspace settings found for any workspace in the org.
     */
    404: EmptyArrayResponse | OrganizationNotFoundMessage;
};
export type GetWorkspacesByWorkspaceIdSettingsError = GetWorkspacesByWorkspaceIdSettingsErrors[keyof GetWorkspacesByWorkspaceIdSettingsErrors];
export type GetWorkspacesByWorkspaceIdSettingsResponses = {
    /**
     * List of all workspace settings with group information
     */
    200: SettingsWithGroupResponse;
};
export type GetWorkspacesByWorkspaceIdSettingsResponse = GetWorkspacesByWorkspaceIdSettingsResponses[keyof GetWorkspacesByWorkspaceIdSettingsResponses];
export type GetWorkspacesByWorkspaceIdSettingsCustomData = {
    body?: never;
    path: {
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/settings/custom';
};
export type GetWorkspacesByWorkspaceIdSettingsCustomErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found, or no custom settings available.
     */
    404: EmptyArrayResponse | OrganizationNotFoundMessage;
};
export type GetWorkspacesByWorkspaceIdSettingsCustomError = GetWorkspacesByWorkspaceIdSettingsCustomErrors[keyof GetWorkspacesByWorkspaceIdSettingsCustomErrors];
export type GetWorkspacesByWorkspaceIdSettingsCustomResponses = {
    /**
     * List of workspace custom settings
     */
    200: SettingsResponse;
};
export type GetWorkspacesByWorkspaceIdSettingsCustomResponse = GetWorkspacesByWorkspaceIdSettingsCustomResponses[keyof GetWorkspacesByWorkspaceIdSettingsCustomResponses];
export type PostWorkspacesByWorkspaceIdSettingsCustomData = {
    body?: CreateSetting;
    path: {
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/settings/custom';
};
export type PostWorkspacesByWorkspaceIdSettingsCustomErrors = {
    /**
     * Bad Request when creating custom setting
     */
    400: ValidationErrorMessage | SettingValueRequiredMessage | SettingReservedNameMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or Workspace not found.
     */
    404: WorkspaceNotFoundMessage | OrganizationNotFoundMessage;
};
export type PostWorkspacesByWorkspaceIdSettingsCustomError = PostWorkspacesByWorkspaceIdSettingsCustomErrors[keyof PostWorkspacesByWorkspaceIdSettingsCustomErrors];
export type PostWorkspacesByWorkspaceIdSettingsCustomResponses = {
    /**
     * Workspace custom setting created successfully
     */
    201: SettingResponse;
};
export type PostWorkspacesByWorkspaceIdSettingsCustomResponse = PostWorkspacesByWorkspaceIdSettingsCustomResponses[keyof PostWorkspacesByWorkspaceIdSettingsCustomResponses];
export type DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData = {
    body?: never;
    path: {
        settingSlug: string;
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/settings/custom/{settingSlug}';
};
export type DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugErrors = {
    /**
     * Bad Request when deleting custom setting
     */
    400: CannotDeleteServiceSettingMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization, Workspace, or Setting not found.
     */
    404: SettingNotFoundMessage | WorkspaceNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugError = DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugErrors[keyof DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugErrors];
export type DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponses = {
    /**
     * Workspace custom setting deleted successfully
     */
    200: SettingSuccessResponse;
};
export type DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponse = DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponses[keyof DeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponses];
export type GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData = {
    body?: never;
    path: {
        settingSlug: string;
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/settings/custom/{settingSlug}';
};
export type GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or Setting not found.
     */
    404: SettingNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugError = GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugErrors[keyof GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugErrors];
export type GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponses = {
    /**
     * Workspace custom setting details
     */
    200: SettingResponse;
};
export type GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponse = GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponses[keyof GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponses];
export type PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData = {
    body?: UpdateSetting;
    path: {
        settingSlug: string;
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/settings/custom/{settingSlug}';
};
export type PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugErrors = {
    /**
     * Bad Request when updating custom setting
     */
    400: ValidationErrorMessage | SettingValueRequiredMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization, Workspace, or Setting not found.
     */
    404: SettingNotFoundMessage | WorkspaceNotFoundMessage | OrganizationNotFoundMessage;
};
export type PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugError = PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugErrors[keyof PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugErrors];
export type PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponses = {
    /**
     * Workspace custom setting updated successfully
     */
    200: SettingResponse;
};
export type PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponse = PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponses[keyof PutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugResponses];
export type GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueData = {
    body?: never;
    path: {
        settingSlug: string;
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/settings/custom/{settingSlug}/value';
};
export type GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or Setting not found.
     */
    404: SettingNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueError = GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueErrors[keyof GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueErrors];
export type GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueResponses = {
    /**
     * Workspace custom setting value (any type)
     */
    200: {
        [key: string]: unknown;
    };
};
export type GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueResponse = GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueResponses[keyof GetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueResponses];
export type GetWorkspacesByWorkspaceIdSettingsServiceData = {
    body?: never;
    path: {
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/settings/service';
};
export type GetWorkspacesByWorkspaceIdSettingsServiceErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found, or no service settings available.
     */
    404: EmptyArrayResponse | OrganizationNotFoundMessage;
};
export type GetWorkspacesByWorkspaceIdSettingsServiceError = GetWorkspacesByWorkspaceIdSettingsServiceErrors[keyof GetWorkspacesByWorkspaceIdSettingsServiceErrors];
export type GetWorkspacesByWorkspaceIdSettingsServiceResponses = {
    /**
     * List of workspace service settings
     */
    200: SettingsResponse;
};
export type GetWorkspacesByWorkspaceIdSettingsServiceResponse = GetWorkspacesByWorkspaceIdSettingsServiceResponses[keyof GetWorkspacesByWorkspaceIdSettingsServiceResponses];
export type DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData = {
    body?: never;
    path: {
        settingSlug: string;
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/settings/service/{settingSlug}';
};
export type DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugErrors = {
    /**
     * Bad Request when deleting overridden workspace service setting
     */
    400: WorkspaceIdRequiredMessageSchema | InvalidServiceSettingSlugMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization, Workspace, or Setting not found.
     */
    404: WorkspaceNotFoundMessage | SettingNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugError = DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugErrors[keyof DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugErrors];
export type DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponses = {
    /**
     * Overridden workspace service setting deleted successfully
     */
    200: SettingSuccessResponse;
};
export type DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponse = DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponses[keyof DeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponses];
export type GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData = {
    body?: never;
    path: {
        settingSlug: string;
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/settings/service/{settingSlug}';
};
export type GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization, Workspace, or Service Setting not found.
     */
    404: SettingNotFoundMessage | WorkspaceNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugError = GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugErrors[keyof GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugErrors];
export type GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponses = {
    /**
     * Workspace service setting details
     */
    200: SettingResponse;
};
export type GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponse = GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponses[keyof GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponses];
export type PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData = {
    body?: UpdateSetting;
    path: {
        settingSlug: string;
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/settings/service/{settingSlug}';
};
export type PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugErrors = {
    /**
     * Bad Request when upserting service setting
     */
    400: ValidationErrorMessage | SettingValueRequiredMessage | InvalidServiceSettingSlugMessage | InvalidServiceSettingValueTypeMessage | InvalidServiceSettingValueMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization, Workspace, or Setting not found.
     */
    404: WorkspaceNotFoundMessage | SettingNotFoundMessage | OrganizationNotFoundMessage;
};
export type PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugError = PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugErrors[keyof PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugErrors];
export type PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponses = {
    /**
     * Workspace service setting updated successfully
     */
    200: SettingResponse;
};
export type PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponse = PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponses[keyof PutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugResponses];
export type GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueData = {
    body?: never;
    path: {
        settingSlug: string;
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/settings/service/{settingSlug}/value';
};
export type GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization, Workspace, or Service Setting not found.
     */
    404: SettingNotFoundMessage | WorkspaceNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueError = GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueErrors[keyof GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueErrors];
export type GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueResponses = {
    /**
     * Workspace service setting value (any type)
     */
    200: {
        [key: string]: unknown;
    };
};
export type GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueResponse = GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueResponses[keyof GetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueResponses];
export type GetCodesByCodeIdScansData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
    };
    query?: {
        /**
         * Page number for pagination
         */
        page?: number;
        /**
         * Number of items per page
         */
        limit?: number;
        /**
         * Field to order results by
         */
        orderBy?: 'scannedAt' | 'browser' | 'countryCode' | 'status';
        /**
         * Direction of ordering
         */
        orderDirection?: 'asc' | 'desc';
        /**
         * Filter by browser name
         */
        browser?: string;
        /**
         * Filter by operating system
         */
        os?: string;
        /**
         * Filter by country code (ISO 3166-1 alpha-2)
         */
        countryCode?: string;
        /**
         * Filter by city name
         */
        city?: string;
        /**
         * Filter by region/state name
         */
        region?: string;
        /**
         * Filter by continent
         */
        continent?: string;
        /**
         * Filter by AS organization
         */
        asOrganization?: string;
        /**
         * Filter by scan status (SUCCESS or LIMIT_REACHED)
         */
        status?: 'success' | 'limit_reached';
        /**
         * Filter by scan date range
         */
        scannedAt?: {
            [key: string]: unknown;
        };
    };
    url: '/codes/{codeId}/scans';
};
export type GetCodesByCodeIdScansErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization, code, or scans not found.
     */
    404: EmptyResponseWithPagination | CodeNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetCodesByCodeIdScansError = GetCodesByCodeIdScansErrors[keyof GetCodesByCodeIdScansErrors];
export type GetCodesByCodeIdScansResponses = {
    /**
     * A paginated list of QR Code Scans
     */
    200: unknown;
};
export type GetCodesByCodeIdRouterRulesData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR code
         */
        codeId: string;
    };
    query?: {
        /**
         * Page number for pagination
         */
        page?: number;
        /**
         * Number of items to return (1-100)
         */
        limit?: number;
        /**
         * Include disabled rules in results
         */
        includeDisabled?: boolean;
        /**
         * Filter rules by router rule type
         */
        type?: 'location' | 'continent' | 'geo' | 'time' | 'date' | 'timezone' | 'language' | 'browser' | 'os' | 'deviceVendor' | 'deviceModel' | 'scanLimit';
        /**
         * Filter rules by specific priority value
         */
        priority?: number;
        /**
         * Filter rules by data type
         */
        dataType?: 'url' | 'text' | 'email' | 'phone' | 'sms' | 'wifi' | 'vcard' | 'event';
    };
    url: '/codes/{codeId}/router-rules';
};
export type GetCodesByCodeIdRouterRulesErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * QR code not found
     */
    404: {
        error?: string;
    };
};
export type GetCodesByCodeIdRouterRulesError = GetCodesByCodeIdRouterRulesErrors[keyof GetCodesByCodeIdRouterRulesErrors];
export type GetCodesByCodeIdRouterRulesResponses = {
    /**
     * Paginated list response
     */
    200: {
        /**
         * Pagination metadata
         */
        pagination: {
            /**
             * Total number of items matching the filter criteria
             */
            total: number;
            /**
             * Current page number
             */
            page: number;
            /**
             * Number of items per page
             */
            limit: number;
            /**
             * Total number of pages
             */
            totalPages: number;
        };
        /**
         * Array of items in the result
         */
        data: Array<CodeRouterRuleResponse>;
    };
};
export type GetCodesByCodeIdRouterRulesResponse = GetCodesByCodeIdRouterRulesResponses[keyof GetCodesByCodeIdRouterRulesResponses];
export type PostCodesByCodeIdRouterRulesData = {
    /**
     * Router Rule assignment creation data
     */
    body?: unknown;
    path: {
        /**
         * Unique identifier of the QR code
         */
        codeId: string;
    };
    query?: never;
    url: '/codes/{codeId}/router-rules';
};
export type PostCodesByCodeIdRouterRulesErrors = {
    /**
     * Invalid request data, priority conflict, or template not found
     */
    400: ValidationErrorMessage | RouterRulePriorityAlreadyExistsMessage | RouterRuleInvalidConditionsMessage | RouterRuleMaxScansRequiredMessage | RouterRuleInvalidCountryCodeMessage | {
        error: 'COMPOSITE_RULE_NESTING_DEPTH_EXCEEDED';
        message: string;
        maxDepth: number;
        actualDepth: number;
    } | {
        error: 'COMPOSITE_RULE_CONDITION_COUNT_EXCEEDED';
        message: string;
        maxConditions: number;
        actualConditions: number;
    } | {
        error: 'COMPOSITE_RULE_INVALID_LOGICAL_OPERATOR';
        message: string;
        validOperators: Array<string>;
    } | {
        error: 'COMPOSITE_RULE_CONDITIONS_REQUIRED';
        message: string;
        ruleType: string;
    } | {
        error: 'RULE_MERGED_VALIDATION_ERROR';
        message: string;
        field: string;
        ruleType: string;
        requiredAction: string;
    } | {
        error: 'RULE_TYPE_CONDITION_MISMATCH_ERROR';
        message: string;
        requestedType: string;
        existingConditions: boolean;
        requiredAction: string;
    };
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Limit reached response message
     */
    429: {
        message: string;
    };
};
export type PostCodesByCodeIdRouterRulesError = PostCodesByCodeIdRouterRulesErrors[keyof PostCodesByCodeIdRouterRulesErrors];
export type PostCodesByCodeIdRouterRulesResponses = {
    /**
     * Router Rule assignment created successfully
     */
    201: CodeRouterRuleResponse;
};
export type PostCodesByCodeIdRouterRulesResponse = PostCodesByCodeIdRouterRulesResponses[keyof PostCodesByCodeIdRouterRulesResponses];
export type DeleteCodesByCodeIdRouterRulesByRouterRuleIdData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR code
         */
        codeId: string;
        /**
         * Unique identifier of the router rule assignment
         */
        routerRuleId: string;
    };
    query?: never;
    url: '/codes/{codeId}/router-rules/{routerRuleId}';
};
export type DeleteCodesByCodeIdRouterRulesByRouterRuleIdErrors = {
    /**
     * Rule has been used and cannot be deleted
     */
    400: {
        error?: string;
        details?: {
            /**
             * Number of times this rule has been used
             */
            totalScans?: number;
        };
    };
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Router rule assignment not found, or QR code/organization/workspace context not found.
     */
    404: RouterRuleNotFoundMessage | CodeNotFoundMessage | OrganizationNotFoundMessage | WorkspaceNotFoundMessage;
};
export type DeleteCodesByCodeIdRouterRulesByRouterRuleIdError = DeleteCodesByCodeIdRouterRulesByRouterRuleIdErrors[keyof DeleteCodesByCodeIdRouterRulesByRouterRuleIdErrors];
export type DeleteCodesByCodeIdRouterRulesByRouterRuleIdResponses = {
    /**
     * Router Rule assignment deleted successfully
     */
    200: {
        message?: string;
    };
};
export type DeleteCodesByCodeIdRouterRulesByRouterRuleIdResponse = DeleteCodesByCodeIdRouterRulesByRouterRuleIdResponses[keyof DeleteCodesByCodeIdRouterRulesByRouterRuleIdResponses];
export type GetCodesByCodeIdRouterRulesByRouterRuleIdData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR code
         */
        codeId: string;
        /**
         * Unique identifier of the router rule
         */
        routerRuleId: string;
    };
    query?: never;
    url: '/codes/{codeId}/router-rules/{routerRuleId}';
};
export type GetCodesByCodeIdRouterRulesByRouterRuleIdErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Router rule or QR code not found
     */
    404: {
        error?: string;
    };
};
export type GetCodesByCodeIdRouterRulesByRouterRuleIdError = GetCodesByCodeIdRouterRulesByRouterRuleIdErrors[keyof GetCodesByCodeIdRouterRulesByRouterRuleIdErrors];
export type GetCodesByCodeIdRouterRulesByRouterRuleIdResponses = {
    /**
     * Router Rule assignment details with enriched template data
     */
    200: CodeRouterRuleResponse;
};
export type GetCodesByCodeIdRouterRulesByRouterRuleIdResponse = GetCodesByCodeIdRouterRulesByRouterRuleIdResponses[keyof GetCodesByCodeIdRouterRulesByRouterRuleIdResponses];
export type PutCodesByCodeIdRouterRulesByRouterRuleIdData = {
    /**
     * Router Rule assignment update data
     */
    body?: unknown;
    path: {
        /**
         * Unique identifier of the QR code
         */
        codeId: string;
        /**
         * Unique identifier of the router rule assignment
         */
        routerRuleId: string;
    };
    query?: never;
    url: '/codes/{codeId}/router-rules/{routerRuleId}';
};
export type PutCodesByCodeIdRouterRulesByRouterRuleIdErrors = {
    /**
     * Invalid request data, priority conflict, or validation error
     */
    400: ValidationErrorMessage | RouterRulePriorityAlreadyExistsMessage | RouterRuleInvalidConditionsMessage | RouterRuleMaxScansRequiredMessage | RouterRuleInvalidCountryCodeMessage | {
        error: 'COMPOSITE_RULE_NESTING_DEPTH_EXCEEDED';
        message: string;
        maxDepth: number;
        actualDepth: number;
    } | {
        error: 'COMPOSITE_RULE_CONDITION_COUNT_EXCEEDED';
        message: string;
        maxConditions: number;
        actualConditions: number;
    } | {
        error: 'COMPOSITE_RULE_INVALID_LOGICAL_OPERATOR';
        message: string;
        validOperators: Array<string>;
    } | {
        error: 'COMPOSITE_RULE_CONDITIONS_REQUIRED';
        message: string;
        ruleType: string;
    } | {
        error: 'RULE_MERGED_VALIDATION_ERROR';
        message: string;
        field: string;
        ruleType: string;
        requiredAction: string;
    } | {
        error: 'RULE_TYPE_CONDITION_MISMATCH_ERROR';
        message: string;
        requestedType: string;
        existingConditions: boolean;
        requiredAction: string;
    };
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Router rule assignment not found, or QR code/organization/workspace context not found.
     */
    404: RouterRuleNotFoundMessage | CodeNotFoundMessage | OrganizationNotFoundMessage | WorkspaceNotFoundMessage;
};
export type PutCodesByCodeIdRouterRulesByRouterRuleIdError = PutCodesByCodeIdRouterRulesByRouterRuleIdErrors[keyof PutCodesByCodeIdRouterRulesByRouterRuleIdErrors];
export type PutCodesByCodeIdRouterRulesByRouterRuleIdResponses = {
    /**
     * Router Rule assignment updated successfully
     */
    200: CodeRouterRuleResponse;
};
export type PutCodesByCodeIdRouterRulesByRouterRuleIdResponse = PutCodesByCodeIdRouterRulesByRouterRuleIdResponses[keyof PutCodesByCodeIdRouterRulesByRouterRuleIdResponses];
export type GetCodesDeletedData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Page number for pagination
         */
        page?: number;
        /**
         * Number of items per page
         */
        limit?: number;
        /**
         * Field to order results by
         */
        orderBy?: 'createdAt' | 'updatedAt' | 'name';
        /**
         * Direction of ordering
         */
        orderDirection?: 'asc' | 'desc';
        /**
         * Filter by QR code name
         */
        name?: string;
        /**
         * Filter by workspace ID
         */
        workspaceId?: string;
        /**
         * Filter by validation status
         */
        isValid?: 'true' | 'false' | 'null';
        /**
         * Filter by QR code data content
         */
        data?: string;
        /**
         * Filter by creation date range
         */
        createdAt?: {
            [key: string]: unknown;
        };
        /**
         * Filter by update date range
         */
        updatedAt?: {
            [key: string]: unknown;
        };
    };
    url: '/codes/deleted';
};
export type GetCodesDeletedErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found, or the list of codes is empty (returned as an empty paginated response).
     */
    404: EmptyResponseWithPagination | OrganizationNotFoundMessage;
};
export type GetCodesDeletedError = GetCodesDeletedErrors[keyof GetCodesDeletedErrors];
export type GetCodesDeletedResponses = {
    /**
     * Paginated list response
     */
    200: {
        /**
         * Pagination metadata
         */
        pagination: {
            /**
             * Total number of items matching the filter criteria
             */
            total: number;
            /**
             * Current page number
             */
            page: number;
            /**
             * Number of items per page
             */
            limit: number;
            /**
             * Total number of pages
             */
            totalPages: number;
        };
        /**
         * Array of items in the result
         */
        data: Array<CodeResponse>;
    };
};
export type GetCodesDeletedResponse = GetCodesDeletedResponses[keyof GetCodesDeletedResponses];
export type GetCodesLinksData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Page number for pagination
         */
        page?: number;
        /**
         * Number of items per page
         */
        limit?: number;
        /**
         * Field to order results by
         */
        orderBy?: 'createdAt' | 'updatedAt' | 'type';
        /**
         * Direction of ordering
         */
        orderDirection?: 'asc' | 'desc';
        /**
         * Filter by QR code ID
         */
        codeId?: string;
        /**
         * Filter by file type
         */
        type?: 'svg' | 'png' | 'pdf';
        /**
         * Filter by QR code name
         */
        codeName?: string;
        /**
         * Filter by QR code version
         */
        codeVersion?: number;
        /**
         * Filter by QR code data content
         */
        codeData?: string;
        /**
         * Filter by QR code type
         */
        codeType?: string;
        /**
         * Filter by QR code validation status
         */
        codeIsValid?: 'true' | 'false' | 'null';
        /**
         * Filter by style name
         */
        styleName?: string;
        /**
         * Filter by template name
         */
        templateName?: string;
        /**
         * Filter by border name
         */
        borderName?: string;
        /**
         * Filter by whether this is the current version
         */
        isCurrentVersion?: 'true' | 'false';
        /**
         * Filter by creator user ID
         */
        createdByUserId?: string;
        /**
         * Filter by creator API key ID
         */
        createdByApiKeyId?: string;
        /**
         * Filter by creation date range
         */
        createdAt?: {
            [key: string]: unknown;
        };
        /**
         * Filter by update date range
         */
        updatedAt?: {
            [key: string]: unknown;
        };
        /**
         * Filter by workspace ID
         */
        workspaceId?: string;
    };
    url: '/codes/links';
};
export type GetCodesLinksErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * QR Code links not found
     */
    404: EmptyResponseWithPagination | OrganizationNotFoundMessage;
};
export type GetCodesLinksError = GetCodesLinksErrors[keyof GetCodesLinksErrors];
export type GetCodesLinksResponses = {
    /**
     * Paginated list response
     */
    200: {
        /**
         * Pagination metadata
         */
        pagination: {
            /**
             * Total number of items matching the filter criteria
             */
            total: number;
            /**
             * Current page number
             */
            page: number;
            /**
             * Number of items per page
             */
            limit: number;
            /**
             * Total number of pages
             */
            totalPages: number;
        };
        /**
         * Array of items in the result
         */
        data: Array<CodeLinksResponse>;
    };
};
export type GetCodesLinksResponse = GetCodesLinksResponses[keyof GetCodesLinksResponses];
export type DeleteCodesByCodeIdData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
    };
    query?: never;
    url: '/codes/{codeId}';
};
export type DeleteCodesByCodeIdErrors = {
    /**
     * QR Code is already deleted.
     */
    400: CodeAlreadyDeletedMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or code not found.
     */
    404: CodeNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteCodesByCodeIdError = DeleteCodesByCodeIdErrors[keyof DeleteCodesByCodeIdErrors];
export type DeleteCodesByCodeIdResponses = {
    /**
     * QR Code soft deleted successfully.
     */
    200: CodeSoftDeleteResponse;
};
export type DeleteCodesByCodeIdResponse = DeleteCodesByCodeIdResponses[keyof DeleteCodesByCodeIdResponses];
export type GetCodesByCodeIdData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
    };
    query?: never;
    url: '/codes/{codeId}';
};
export type GetCodesByCodeIdErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or code not found.
     */
    404: CodeNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetCodesByCodeIdError = GetCodesByCodeIdErrors[keyof GetCodesByCodeIdErrors];
export type GetCodesByCodeIdResponses = {
    /**
     * The requested QR Code
     */
    200: CodeResponse;
};
export type GetCodesByCodeIdResponse = GetCodesByCodeIdResponses[keyof GetCodesByCodeIdResponses];
export type PutCodesByCodeIdData = {
    body?: UpdateCodeRequest;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
    };
    query?: never;
    url: '/codes/{codeId}';
};
export type PutCodesByCodeIdErrors = {
    /**
     * Invalid request to update QR Code.
     */
    400: ValidationErrorMessage | UpdateFieldRequiredMessage | CodeIsInvalidMessage | InvalidCodeTypeMessage | CodeIsSoftDeletedMessage | DynamicDataForStaticCodeMessage | DynamicDataRequiredMessage | ShortAliasAlreadyTakenMessage | ShortAliasForDynamicToStaticCodeMessage | InfiniteRedirectLoopDetectedMessage | DataTypeForDynamicToStaticCodeMessage | DataTypeForStaticCodeMessage | DataForDynamicCodeMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Could not update code due to missing resources.
     */
    404: CodeNotFoundMessage | StyleNotFoundMessage | TemplateNotFoundMessage | BorderNotFoundMessage | TextNotFoundMessage | OrganizationNotFoundMessage;
    /**
     * Not found response message
     */
    409: {
        message: string;
    };
};
export type PutCodesByCodeIdError = PutCodesByCodeIdErrors[keyof PutCodesByCodeIdErrors];
export type PutCodesByCodeIdResponses = {
    /**
     * QR Code updated successfully
     */
    200: CodeResponse;
};
export type PutCodesByCodeIdResponse = PutCodesByCodeIdResponses[keyof PutCodesByCodeIdResponses];
export type DeleteCodesData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/codes';
};
export type DeleteCodesErrors = {
    /**
     * Invalid request for bulk soft delete.
     */
    400: ValidationErrorMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found.
     */
    404: OrganizationNotFoundMessage;
};
export type DeleteCodesError = DeleteCodesErrors[keyof DeleteCodesErrors];
export type DeleteCodesResponses = {
    /**
     * Bulk soft delete completed with detailed results
     */
    200: BulkSoftDeleteCodesResponse;
};
export type DeleteCodesResponse = DeleteCodesResponses[keyof DeleteCodesResponses];
export type GetCodesData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Page number for pagination
         */
        page?: number;
        /**
         * Number of items per page
         */
        limit?: number;
        /**
         * Field to order results by
         */
        orderBy?: 'createdAt' | 'updatedAt' | 'name';
        /**
         * Direction of ordering
         */
        orderDirection?: 'asc' | 'desc';
        /**
         * Filter by QR code name
         */
        name?: string;
        /**
         * Filter by workspace ID
         */
        workspaceId?: string;
        /**
         * Filter by validation status
         */
        isValid?: 'true' | 'false' | 'null';
        /**
         * Filter by QR code data content
         */
        data?: string;
        /**
         * Filter by creation date range
         */
        createdAt?: {
            [key: string]: unknown;
        };
        /**
         * Filter by update date range
         */
        updatedAt?: {
            [key: string]: unknown;
        };
    };
    url: '/codes';
};
export type GetCodesErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found, or the list of codes is empty (returned as an empty paginated response).
     */
    404: EmptyResponseWithPagination | OrganizationNotFoundMessage;
};
export type GetCodesError = GetCodesErrors[keyof GetCodesErrors];
export type GetCodesResponses = {
    /**
     * Paginated list response
     */
    200: {
        /**
         * Pagination metadata
         */
        pagination: {
            /**
             * Total number of items matching the filter criteria
             */
            total: number;
            /**
             * Current page number
             */
            page: number;
            /**
             * Number of items per page
             */
            limit: number;
            /**
             * Total number of pages
             */
            totalPages: number;
        };
        /**
         * Array of items in the result
         */
        data: Array<CodeResponse>;
    };
};
export type GetCodesResponse = GetCodesResponses[keyof GetCodesResponses];
export type PostCodesData = {
    body?: CreateCodeRequest;
    path?: never;
    query?: never;
    url: '/codes';
};
export type PostCodesErrors = {
    /**
     * Invalid request to create QR Code.
     */
    400: ValidationErrorMessage | CodeDataRequiredMessage | CodeIsInvalidMessage | InvalidCodeTypeMessage | DynamicDataForNewStaticCodeMessage | DynamicDataRequiredMessage | ShortAliasAlreadyTakenMessage | ShortAliasForStaticCodeMessage | InfiniteRedirectLoopDetectedMessage | DataTypeForStaticCodeMessage | DataTypeForDynamicToStaticCodeMessage | DataForDynamicCodeMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Could not create code due to missing resources.
     */
    404: OrganizationNotFoundMessage | WorkspaceNotFoundMessage | StyleNotFoundMessage | TemplateNotFoundMessage | BorderNotFoundMessage | TextNotFoundMessage;
    /**
     * Not found response message
     */
    409: {
        message: string;
    };
    /**
     * Limit reached response message
     */
    429: {
        message: string;
    };
};
export type PostCodesError = PostCodesErrors[keyof PostCodesErrors];
export type PostCodesResponses = {
    /**
     * QR Code created successfully
     */
    200: CodeResponse;
};
export type PostCodesResponse = PostCodesResponses[keyof PostCodesResponses];
export type PutCodesByCodeIdOptionsData = {
    body?: UpdateCodeOptionsRequest;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
    };
    query?: never;
    url: '/codes/{codeId}/options';
};
export type PutCodesByCodeIdOptionsErrors = {
    /**
     * Invalid request to update QR Code Options.
     */
    400: ValidationErrorMessage | UpdateFieldRequiredMessage | UpdateOptionsFieldRequiredMessage | CodeIsInvalidMessage | InvalidCodeTypeMessage | CodeIsSoftDeletedMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or code not found.
     */
    404: CodeNotFoundMessage | OrganizationNotFoundMessage;
};
export type PutCodesByCodeIdOptionsError = PutCodesByCodeIdOptionsErrors[keyof PutCodesByCodeIdOptionsErrors];
export type PutCodesByCodeIdOptionsResponses = {
    /**
     * QR Code options updated successfully, new version created.
     */
    200: CodeResponse;
};
export type PutCodesByCodeIdOptionsResponse = PutCodesByCodeIdOptionsResponses[keyof PutCodesByCodeIdOptionsResponses];
export type DeleteCodesPermanentData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/codes/permanent';
};
export type DeleteCodesPermanentErrors = {
    /**
     * Invalid request for bulk permanent delete.
     */
    400: ValidationErrorMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found.
     */
    404: OrganizationNotFoundMessage;
};
export type DeleteCodesPermanentError = DeleteCodesPermanentErrors[keyof DeleteCodesPermanentErrors];
export type DeleteCodesPermanentResponses = {
    /**
     * Bulk permanent delete completed with detailed results
     */
    200: BulkPermanentDeleteCodesResponse;
};
export type DeleteCodesPermanentResponse = DeleteCodesPermanentResponses[keyof DeleteCodesPermanentResponses];
export type DeleteCodesByCodeIdPermanentData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
    };
    query?: never;
    url: '/codes/{codeId}/permanent';
};
export type DeleteCodesByCodeIdPermanentErrors = {
    /**
     * QR Code is not soft deleted.
     */
    400: CodeNotSoftDeletedMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or code not found.
     */
    404: CodeNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteCodesByCodeIdPermanentError = DeleteCodesByCodeIdPermanentErrors[keyof DeleteCodesByCodeIdPermanentErrors];
export type DeleteCodesByCodeIdPermanentResponses = {
    /**
     * QR Code deleted successfully.
     */
    200: FileDeleteResponse;
};
export type DeleteCodesByCodeIdPermanentResponse = DeleteCodesByCodeIdPermanentResponses[keyof DeleteCodesByCodeIdPermanentResponses];
export type PostCodesByCodeIdRestoreData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
    };
    query?: never;
    url: '/codes/{codeId}/restore';
};
export type PostCodesByCodeIdRestoreErrors = {
    /**
     * QR Code is not deleted.
     */
    400: CodeNotDeletedMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or code not found.
     */
    404: CodeNotFoundMessage | OrganizationNotFoundMessage;
};
export type PostCodesByCodeIdRestoreError = PostCodesByCodeIdRestoreErrors[keyof PostCodesByCodeIdRestoreErrors];
export type PostCodesByCodeIdRestoreResponses = {
    /**
     * QR Code restored successfully.
     */
    200: CodeResponse;
};
export type PostCodesByCodeIdRestoreResponse = PostCodesByCodeIdRestoreResponses[keyof PostCodesByCodeIdRestoreResponses];
export type PostCodesBulkGetData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/codes/bulk-get';
};
export type PostCodesBulkGetErrors = {
    /**
     * Invalid request for bulk get.
     */
    400: ValidationErrorMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found.
     */
    404: OrganizationNotFoundMessage;
};
export type PostCodesBulkGetError = PostCodesBulkGetErrors[keyof PostCodesBulkGetErrors];
export type PostCodesBulkGetResponses = {
    /**
     * Bulk get completed with results and detailed information
     */
    200: BulkGetCodesResponse;
};
export type PostCodesBulkGetResponse = PostCodesBulkGetResponses[keyof PostCodesBulkGetResponses];
export type PostCodesGenerateByTypeData = {
    body?: GenerateCodeRequest;
    path: {
        /**
         * File type to generate
         */
        type: 'svg' | 'png' | 'pdf';
    };
    query?: never;
    url: '/codes/generate/{type}';
};
export type PostCodesGenerateByTypeErrors = {
    /**
     * Invalid input data
     */
    400: ValidationErrorResponseMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or code not found.
     */
    404: CodeNotFoundMessage | OrganizationNotFoundMessage;
};
export type PostCodesGenerateByTypeError = PostCodesGenerateByTypeErrors[keyof PostCodesGenerateByTypeErrors];
export type PostCodesGenerateByTypeResponses = {
    /**
     * Generated QR Code file content
     */
    200: Blob | File;
};
export type PostCodesGenerateByTypeResponse = PostCodesGenerateByTypeResponses[keyof PostCodesGenerateByTypeResponses];
export type PostCodesValidateData = {
    body?: GenerateCodeRequest;
    path?: never;
    query?: never;
    url: '/codes/validate';
};
export type PostCodesValidateErrors = {
    /**
     * Invalid request to validate QR Code options.
     */
    400: ValidationErrorMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * QR Codeor Organization not found.
     */
    404: OrganizationNotFoundMessage | CodeNotFoundMessage;
};
export type PostCodesValidateError = PostCodesValidateErrors[keyof PostCodesValidateErrors];
export type PostCodesValidateResponses = {
    /**
     * Validation result
     */
    200: CodeValidationResponse;
};
export type PostCodesValidateResponse = PostCodesValidateResponses[keyof PostCodesValidateResponses];
export type PostCodesByCodeIdValidateData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
    };
    query?: never;
    url: '/codes/{codeId}/validate';
};
export type PostCodesByCodeIdValidateErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or code not found.
     */
    404: CodeNotFoundMessage | OrganizationNotFoundMessage;
};
export type PostCodesByCodeIdValidateError = PostCodesByCodeIdValidateErrors[keyof PostCodesByCodeIdValidateErrors];
export type PostCodesByCodeIdValidateResponses = {
    /**
     * Validation result with detailed information
     */
    200: ExistingCodeValidationResponse;
};
export type PostCodesByCodeIdValidateResponse = PostCodesByCodeIdValidateResponses[keyof PostCodesByCodeIdValidateResponses];
export type PostCodesLinksRefreshData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/codes/links/refresh';
};
export type PostCodesLinksRefreshErrors = {
    /**
     * Invalid request to refresh links.
     */
    400: ValidationErrorMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found.
     */
    404: OrganizationNotFoundMessage;
};
export type PostCodesLinksRefreshError = PostCodesLinksRefreshErrors[keyof PostCodesLinksRefreshErrors];
export type PostCodesLinksRefreshResponses = {
    /**
     * Bulk link refresh completed
     */
    200: RefreshCodeLinksResponse;
};
export type PostCodesLinksRefreshResponse = PostCodesLinksRefreshResponses[keyof PostCodesLinksRefreshResponses];
export type GetCodesByCodeIdVersionByVersionData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
        version: number;
    };
    query?: never;
    url: '/codes/{codeId}/version/{version}';
};
export type GetCodesByCodeIdVersionByVersionErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Code, version or Organization not found.
     */
    404: CodeNotFoundMessage | VersionNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetCodesByCodeIdVersionByVersionError = GetCodesByCodeIdVersionByVersionErrors[keyof GetCodesByCodeIdVersionByVersionErrors];
export type GetCodesByCodeIdVersionByVersionResponses = {
    /**
     * The requested QR Code version version
     */
    200: CodeVersionResponse;
};
export type GetCodesByCodeIdVersionByVersionResponse = GetCodesByCodeIdVersionByVersionResponses[keyof GetCodesByCodeIdVersionByVersionResponses];
export type DeleteCodesByCodeIdVersionsData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
    };
    query?: never;
    url: '/codes/{codeId}/versions';
};
export type DeleteCodesByCodeIdVersionsErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or code not found.
     */
    404: CodeNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteCodesByCodeIdVersionsError = DeleteCodesByCodeIdVersionsErrors[keyof DeleteCodesByCodeIdVersionsErrors];
export type DeleteCodesByCodeIdVersionsResponses = {
    /**
     * All versions deleted successfully
     */
    200: CodeVersionsDeleteResponse;
};
export type DeleteCodesByCodeIdVersionsResponse = DeleteCodesByCodeIdVersionsResponses[keyof DeleteCodesByCodeIdVersionsResponses];
export type GetCodesByCodeIdVersionsData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
    };
    query?: never;
    url: '/codes/{codeId}/versions';
};
export type GetCodesByCodeIdVersionsErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or code not found, or code has no versions.
     */
    404: EmptyArrayResponse | CodeNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetCodesByCodeIdVersionsError = GetCodesByCodeIdVersionsErrors[keyof GetCodesByCodeIdVersionsErrors];
export type GetCodesByCodeIdVersionsResponses = {
    /**
     * Paginated list response
     */
    200: {
        /**
         * Pagination metadata
         */
        pagination: {
            /**
             * Total number of items matching the filter criteria
             */
            total: number;
            /**
             * Current page number
             */
            page: number;
            /**
             * Number of items per page
             */
            limit: number;
            /**
             * Total number of pages
             */
            totalPages: number;
        };
        /**
         * Array of items in the result
         */
        data: Array<CodeVersionResponse>;
    };
};
export type GetCodesByCodeIdVersionsResponse = GetCodesByCodeIdVersionsResponses[keyof GetCodesByCodeIdVersionsResponses];
export type PostCodesByCodeIdVersionByVersionRestoreData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
        version: number;
    };
    query?: never;
    url: '/codes/{codeId}/version/{version}/restore';
};
export type PostCodesByCodeIdVersionByVersionRestoreErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization, code, or version not found.
     */
    404: CodeNotFoundMessage | VersionNotFoundMessage | OrganizationNotFoundMessage;
};
export type PostCodesByCodeIdVersionByVersionRestoreError = PostCodesByCodeIdVersionByVersionRestoreErrors[keyof PostCodesByCodeIdVersionByVersionRestoreErrors];
export type PostCodesByCodeIdVersionByVersionRestoreResponses = {
    /**
     * QR Code version restored successfully
     */
    200: CodeVersionResponse;
};
export type PostCodesByCodeIdVersionByVersionRestoreResponse = PostCodesByCodeIdVersionByVersionRestoreResponses[keyof PostCodesByCodeIdVersionByVersionRestoreResponses];
export type GetCodesByCodeIdVersionByVersionByTypeData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
        version: number;
        /**
         * File type to generate
         */
        type: 'svg' | 'png' | 'pdf';
    };
    query?: never;
    url: '/codes/{codeId}/version/{version}/{type}';
};
export type GetCodesByCodeIdVersionByVersionByTypeErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Code, version or Organization not found.
     */
    404: CodeNotFoundMessage | VersionNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetCodesByCodeIdVersionByVersionByTypeError = GetCodesByCodeIdVersionByVersionByTypeErrors[keyof GetCodesByCodeIdVersionByVersionByTypeErrors];
export type GetCodesByCodeIdVersionByVersionByTypeResponses = {
    /**
     * File content for the QR Code version
     */
    200: Blob | File;
};
export type GetCodesByCodeIdVersionByVersionByTypeResponse = GetCodesByCodeIdVersionByVersionByTypeResponses[keyof GetCodesByCodeIdVersionByVersionByTypeResponses];
export type GetCodesByCodeIdVersionByVersionByTypeLinkData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
        version: number;
        /**
         * File type to generate
         */
        type: 'svg' | 'png' | 'pdf';
    };
    query?: never;
    url: '/codes/{codeId}/version/{version}/{type}/link';
};
export type GetCodesByCodeIdVersionByVersionByTypeLinkErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization, code, version, or link not found.
     */
    404: CodeNotFoundMessage | VersionNotFoundMessage | LinkNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetCodesByCodeIdVersionByVersionByTypeLinkError = GetCodesByCodeIdVersionByVersionByTypeLinkErrors[keyof GetCodesByCodeIdVersionByVersionByTypeLinkErrors];
export type GetCodesByCodeIdVersionByVersionByTypeLinkResponses = {
    /**
     * Link to the file for the QR Code version
     */
    200: FileUrlResponse;
};
export type GetCodesByCodeIdVersionByVersionByTypeLinkResponse = GetCodesByCodeIdVersionByVersionByTypeLinkResponses[keyof GetCodesByCodeIdVersionByVersionByTypeLinkResponses];
export type DeleteCodesByCodeIdVersionsByVersionLinksData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
        version: number;
    };
    query?: never;
    url: '/codes/{codeId}/versions/{version}/links';
};
export type DeleteCodesByCodeIdVersionsByVersionLinksErrors = {
    /**
     * Invalid request to delete code version links.
     */
    400: ValidationErrorMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization, code, or version not found.
     */
    404: CodeNotFoundMessage | VersionNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteCodesByCodeIdVersionsByVersionLinksError = DeleteCodesByCodeIdVersionsByVersionLinksErrors[keyof DeleteCodesByCodeIdVersionsByVersionLinksErrors];
export type DeleteCodesByCodeIdVersionsByVersionLinksResponses = {
    /**
     * Success response message
     */
    200: {
        message: string;
    };
};
export type DeleteCodesByCodeIdVersionsByVersionLinksResponse = DeleteCodesByCodeIdVersionsByVersionLinksResponses[keyof DeleteCodesByCodeIdVersionsByVersionLinksResponses];
export type DeleteCodesByCodeIdVersionsByVersionLinksByTypeData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
        version: number;
        /**
         * File type to generate
         */
        type: 'svg' | 'png' | 'pdf';
    };
    query?: never;
    url: '/codes/{codeId}/versions/{version}/links/{type}';
};
export type DeleteCodesByCodeIdVersionsByVersionLinksByTypeErrors = {
    /**
     * Invalid request to delete code version link by type.
     */
    400: ValidationErrorMessage | CodeVersionLinkNotFoundForTypeMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization, code, version, or link not found.
     */
    404: CodeNotFoundMessage | VersionNotFoundMessage | LinkNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteCodesByCodeIdVersionsByVersionLinksByTypeError = DeleteCodesByCodeIdVersionsByVersionLinksByTypeErrors[keyof DeleteCodesByCodeIdVersionsByVersionLinksByTypeErrors];
export type DeleteCodesByCodeIdVersionsByVersionLinksByTypeResponses = {
    /**
     * Success response message
     */
    200: {
        message: string;
    };
};
export type DeleteCodesByCodeIdVersionsByVersionLinksByTypeResponse = DeleteCodesByCodeIdVersionsByVersionLinksByTypeResponses[keyof DeleteCodesByCodeIdVersionsByVersionLinksByTypeResponses];
export type DeleteCodesByCodeIdVersionsLinksData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
    };
    query?: never;
    url: '/codes/{codeId}/versions/links';
};
export type DeleteCodesByCodeIdVersionsLinksErrors = {
    /**
     * Invalid request to delete all code versions links.
     */
    400: CodeNoVersionsFoundForLinkDeletionMessage | CodeNoLinksOfTypeFoundForAnyVersionMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or code not found.
     */
    404: CodeNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteCodesByCodeIdVersionsLinksError = DeleteCodesByCodeIdVersionsLinksErrors[keyof DeleteCodesByCodeIdVersionsLinksErrors];
export type DeleteCodesByCodeIdVersionsLinksResponses = {
    /**
     * Success response message
     */
    200: {
        message: string;
    };
};
export type DeleteCodesByCodeIdVersionsLinksResponse = DeleteCodesByCodeIdVersionsLinksResponses[keyof DeleteCodesByCodeIdVersionsLinksResponses];
export type DeleteCodesByCodeIdVersionsLinksByTypeData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
        /**
         * File type to generate
         */
        type: 'svg' | 'png' | 'pdf';
    };
    query?: never;
    url: '/codes/{codeId}/versions/links/{type}';
};
export type DeleteCodesByCodeIdVersionsLinksByTypeErrors = {
    /**
     * Invalid request to delete all code versions links by type.
     */
    400: ValidationErrorMessage | CodeNoVersionsFoundForLinkDeletionMessage | CodeNoLinksOfTypeFoundForAnyVersionMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or code not found.
     */
    404: CodeNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteCodesByCodeIdVersionsLinksByTypeError = DeleteCodesByCodeIdVersionsLinksByTypeErrors[keyof DeleteCodesByCodeIdVersionsLinksByTypeErrors];
export type DeleteCodesByCodeIdVersionsLinksByTypeResponses = {
    /**
     * Success response message
     */
    200: {
        message: string;
    };
};
export type DeleteCodesByCodeIdVersionsLinksByTypeResponse = DeleteCodesByCodeIdVersionsLinksByTypeResponses[keyof DeleteCodesByCodeIdVersionsLinksByTypeResponses];
export type GetCodesByCodeIdByTypeData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
        /**
         * File type to generate
         */
        type: 'svg' | 'png' | 'pdf';
    };
    query?: never;
    url: '/codes/{codeId}/{type}';
};
export type GetCodesByCodeIdByTypeErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or code not found.
     */
    404: CodeNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetCodesByCodeIdByTypeError = GetCodesByCodeIdByTypeErrors[keyof GetCodesByCodeIdByTypeErrors];
export type GetCodesByCodeIdByTypeResponses = {
    /**
     * SVG, PNG, or PDF content for the QR Code
     */
    200: Blob | File;
};
export type GetCodesByCodeIdByTypeResponse = GetCodesByCodeIdByTypeResponses[keyof GetCodesByCodeIdByTypeResponses];
export type GetCodesByCodeIdByTypeLinkData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
        /**
         * File type to generate
         */
        type: 'svg' | 'png' | 'pdf';
    };
    query?: never;
    url: '/codes/{codeId}/{type}/link';
};
export type GetCodesByCodeIdByTypeLinkErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or code not found.
     */
    404: CodeNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetCodesByCodeIdByTypeLinkError = GetCodesByCodeIdByTypeLinkErrors[keyof GetCodesByCodeIdByTypeLinkErrors];
export type GetCodesByCodeIdByTypeLinkResponses = {
    /**
     * Link to the SVG, PNG, or PDF file for the QR Code
     */
    200: FileUrlResponse;
};
export type GetCodesByCodeIdByTypeLinkResponse = GetCodesByCodeIdByTypeLinkResponses[keyof GetCodesByCodeIdByTypeLinkResponses];
export type DeleteCodesByCodeIdLinksData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
    };
    query?: never;
    url: '/codes/{codeId}/links';
};
export type DeleteCodesByCodeIdLinksErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or code not found.
     */
    404: CodeNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteCodesByCodeIdLinksError = DeleteCodesByCodeIdLinksErrors[keyof DeleteCodesByCodeIdLinksErrors];
export type DeleteCodesByCodeIdLinksResponses = {
    /**
     * Success response message
     */
    200: {
        message: string;
    };
};
export type DeleteCodesByCodeIdLinksResponse = DeleteCodesByCodeIdLinksResponses[keyof DeleteCodesByCodeIdLinksResponses];
export type DeleteCodesByCodeIdLinksByTypeData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the QR Code
         */
        codeId: string;
        /**
         * File type to generate
         */
        type: 'svg' | 'png' | 'pdf';
    };
    query?: never;
    url: '/codes/{codeId}/links/{type}';
};
export type DeleteCodesByCodeIdLinksByTypeErrors = {
    /**
     * Invalid input data
     */
    400: ValidationErrorResponseMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization, code, or link not found.
     */
    404: CodeNotFoundMessage | LinkNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteCodesByCodeIdLinksByTypeError = DeleteCodesByCodeIdLinksByTypeErrors[keyof DeleteCodesByCodeIdLinksByTypeErrors];
export type DeleteCodesByCodeIdLinksByTypeResponses = {
    /**
     * Success response message
     */
    200: {
        message: string;
    };
};
export type DeleteCodesByCodeIdLinksByTypeResponse = DeleteCodesByCodeIdLinksByTypeResponses[keyof DeleteCodesByCodeIdLinksByTypeResponses];
export type GetTemplatesData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter by template name
         */
        name?: string;
    };
    url: '/templates';
};
export type GetTemplatesErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found, no templates available, or the list of templates is empty.
     */
    404: EmptyTemplatesOrgContextResponse | OrganizationNotFoundMessage;
};
export type GetTemplatesError = GetTemplatesErrors[keyof GetTemplatesErrors];
export type GetTemplatesResponses = {
    /**
     * List of templates
     */
    200: GetTemplatesResponse;
};
export type GetTemplatesResponse2 = GetTemplatesResponses[keyof GetTemplatesResponses];
export type PostTemplatesData = {
    body?: CreateTemplate;
    path?: never;
    query?: never;
    url: '/templates';
};
export type PostTemplatesErrors = {
    /**
     * Bad Request when creating template
     */
    400: ValidationErrorMessage | OptionsRequiredMessage | TemplateNameTakenMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Could not create template due to missing resources.
     */
    404: OrganizationNotFoundMessage | WorkspaceNotFoundMessage;
};
export type PostTemplatesError = PostTemplatesErrors[keyof PostTemplatesErrors];
export type PostTemplatesResponses = {
    /**
     * Template created successfully
     */
    201: TemplateResponse;
};
export type PostTemplatesResponse = PostTemplatesResponses[keyof PostTemplatesResponses];
export type GetTemplatesBaseData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter templates by name (partial match)
         */
        name?: string;
    };
    url: '/templates/base';
};
export type GetTemplatesBaseErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
};
export type GetTemplatesBaseError = GetTemplatesBaseErrors[keyof GetTemplatesBaseErrors];
export type GetTemplatesBaseResponses = {
    /**
     * List of base templates
     */
    200: BaseTemplates;
};
export type GetTemplatesBaseResponse = GetTemplatesBaseResponses[keyof GetTemplatesBaseResponses];
export type DeleteTemplatesByTemplateIdData = {
    body?: never;
    path: {
        templateId: string;
    };
    query?: never;
    url: '/templates/{templateId}';
};
export type DeleteTemplatesByTemplateIdErrors = {
    /**
     * Bad Request when deleting template
     */
    400: ResourceInUseMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or template not found.
     */
    404: TemplateNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteTemplatesByTemplateIdError = DeleteTemplatesByTemplateIdErrors[keyof DeleteTemplatesByTemplateIdErrors];
export type DeleteTemplatesByTemplateIdResponses = {
    /**
     * Template deleted successfully
     */
    200: {
        message: string;
    };
};
export type DeleteTemplatesByTemplateIdResponse = DeleteTemplatesByTemplateIdResponses[keyof DeleteTemplatesByTemplateIdResponses];
export type GetTemplatesByTemplateIdData = {
    body?: never;
    path: {
        templateId: string;
    };
    query?: never;
    url: '/templates/{templateId}';
};
export type GetTemplatesByTemplateIdErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or template not found.
     */
    404: TemplateNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetTemplatesByTemplateIdError = GetTemplatesByTemplateIdErrors[keyof GetTemplatesByTemplateIdErrors];
export type GetTemplatesByTemplateIdResponses = {
    /**
     * Template details
     */
    200: TemplateResponse;
};
export type GetTemplatesByTemplateIdResponse = GetTemplatesByTemplateIdResponses[keyof GetTemplatesByTemplateIdResponses];
export type PutTemplatesByTemplateIdData = {
    body?: UpdateTemplate;
    path: {
        templateId: string;
    };
    query?: never;
    url: '/templates/{templateId}';
};
export type PutTemplatesByTemplateIdErrors = {
    /**
     * Bad Request when updating template
     */
    400: ValidationErrorMessage | UpdateFieldRequiredMessage | TemplateNameTakenMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or template not found.
     */
    404: TemplateNotFoundMessage | OrganizationNotFoundMessage;
};
export type PutTemplatesByTemplateIdError = PutTemplatesByTemplateIdErrors[keyof PutTemplatesByTemplateIdErrors];
export type PutTemplatesByTemplateIdResponses = {
    /**
     * Template updated successfully
     */
    200: TemplateResponse;
};
export type PutTemplatesByTemplateIdResponse = PutTemplatesByTemplateIdResponses[keyof PutTemplatesByTemplateIdResponses];
export type PutTemplatesByTemplateIdOptionsData = {
    body?: UpdateTemplateOptionsRequest;
    path: {
        templateId: string;
    };
    query?: never;
    url: '/templates/{templateId}/options';
};
export type PutTemplatesByTemplateIdOptionsErrors = {
    /**
     * Bad Request when updating template options
     */
    400: ValidationErrorMessage | UpdateOptionsFieldRequiredMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or template not found.
     */
    404: TemplateNotFoundMessage | OrganizationNotFoundMessage;
};
export type PutTemplatesByTemplateIdOptionsError = PutTemplatesByTemplateIdOptionsErrors[keyof PutTemplatesByTemplateIdOptionsErrors];
export type PutTemplatesByTemplateIdOptionsResponses = {
    /**
     * Template options updated successfully
     */
    200: TemplateResponse;
};
export type PutTemplatesByTemplateIdOptionsResponse = PutTemplatesByTemplateIdOptionsResponses[keyof PutTemplatesByTemplateIdOptionsResponses];
export type GetTemplatesWorkspaceByWorkspaceIdData = {
    body?: never;
    path: {
        workspaceId: string;
    };
    query?: {
        /**
         * Filter by template name
         */
        name?: string;
    };
    url: '/templates/workspace/{workspaceId}';
};
export type GetTemplatesWorkspaceByWorkspaceIdErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or workspace not found, or no templates in workspace.
     */
    404: EmptyArrayResponse | WorkspaceNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetTemplatesWorkspaceByWorkspaceIdError = GetTemplatesWorkspaceByWorkspaceIdErrors[keyof GetTemplatesWorkspaceByWorkspaceIdErrors];
export type GetTemplatesWorkspaceByWorkspaceIdResponses = {
    /**
     * List of templates for the workspace
     */
    200: TemplateArrayResponse;
};
export type GetTemplatesWorkspaceByWorkspaceIdResponse = GetTemplatesWorkspaceByWorkspaceIdResponses[keyof GetTemplatesWorkspaceByWorkspaceIdResponses];
export type GetStylesData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter by style name
         */
        name?: string;
    };
    url: '/styles';
};
export type GetStylesErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * No styles found for the organization context, or organization context invalid.
     */
    404: EmptyStylesOrgContextResponse | OrganizationNotFoundMessage;
};
export type GetStylesError = GetStylesErrors[keyof GetStylesErrors];
export type GetStylesResponses = {
    /**
     * List of styles
     */
    200: GetStylesResponse;
};
export type GetStylesResponse2 = GetStylesResponses[keyof GetStylesResponses];
export type PostStylesData = {
    body?: CreateStyle;
    path?: never;
    query?: never;
    url: '/styles';
};
export type PostStylesErrors = {
    /**
     * Bad Request when creating style
     */
    400: ValidationErrorMessage | OptionsRequiredMessage | StyleNameTakenMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or Workspace context not found during style creation.
     */
    404: OrganizationNotFoundMessage | WorkspaceNotFoundMessage;
};
export type PostStylesError = PostStylesErrors[keyof PostStylesErrors];
export type PostStylesResponses = {
    /**
     * Style created successfully
     */
    201: StyleResponse;
};
export type PostStylesResponse = PostStylesResponses[keyof PostStylesResponses];
export type GetStylesBaseData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter styles by name (partial match)
         */
        name?: string;
    };
    url: '/styles/base';
};
export type GetStylesBaseErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
};
export type GetStylesBaseError = GetStylesBaseErrors[keyof GetStylesBaseErrors];
export type GetStylesBaseResponses = {
    /**
     * List of base styles
     */
    200: BaseStyles;
};
export type GetStylesBaseResponse = GetStylesBaseResponses[keyof GetStylesBaseResponses];
export type DeleteStylesByStyleIdData = {
    body?: never;
    path: {
        styleId: string;
    };
    query?: never;
    url: '/styles/{styleId}';
};
export type DeleteStylesByStyleIdErrors = {
    /**
     * Bad Request when deleting style
     */
    400: ResourceInUseMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Style to delete not found, or its parent organization context is invalid.
     */
    404: StyleNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteStylesByStyleIdError = DeleteStylesByStyleIdErrors[keyof DeleteStylesByStyleIdErrors];
export type DeleteStylesByStyleIdResponses = {
    /**
     * Style deleted successfully
     */
    200: {
        /**
         * Success message
         */
        message: string;
    };
};
export type DeleteStylesByStyleIdResponse = DeleteStylesByStyleIdResponses[keyof DeleteStylesByStyleIdResponses];
export type GetStylesByStyleIdData = {
    body?: never;
    path: {
        styleId: string;
    };
    query?: never;
    url: '/styles/{styleId}';
};
export type GetStylesByStyleIdErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Style not found, or its parent organization context is invalid.
     */
    404: StyleNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetStylesByStyleIdError = GetStylesByStyleIdErrors[keyof GetStylesByStyleIdErrors];
export type GetStylesByStyleIdResponses = {
    /**
     * Style details
     */
    200: StyleResponse;
};
export type GetStylesByStyleIdResponse = GetStylesByStyleIdResponses[keyof GetStylesByStyleIdResponses];
export type PutStylesByStyleIdData = {
    body?: UpdateStyle;
    path: {
        styleId: string;
    };
    query?: never;
    url: '/styles/{styleId}';
};
export type PutStylesByStyleIdErrors = {
    /**
     * Bad Request when updating style
     */
    400: ValidationErrorMessage | UpdateFieldRequiredMessage | StyleNameTakenMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Style to update not found, or its parent organization context is invalid.
     */
    404: StyleNotFoundMessage | OrganizationNotFoundMessage;
};
export type PutStylesByStyleIdError = PutStylesByStyleIdErrors[keyof PutStylesByStyleIdErrors];
export type PutStylesByStyleIdResponses = {
    /**
     * Style updated successfully
     */
    200: StyleResponse;
};
export type PutStylesByStyleIdResponse = PutStylesByStyleIdResponses[keyof PutStylesByStyleIdResponses];
export type PutStylesByStyleIdOptionsData = {
    body?: UpdateStyleOptionsRequest;
    path: {
        styleId: string;
    };
    query?: never;
    url: '/styles/{styleId}/options';
};
export type PutStylesByStyleIdOptionsErrors = {
    /**
     * Bad Request when updating style options
     */
    400: ValidationErrorMessage | UpdateOptionsFieldRequiredMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or style not found.
     */
    404: StyleNotFoundMessage | OrganizationNotFoundMessage;
};
export type PutStylesByStyleIdOptionsError = PutStylesByStyleIdOptionsErrors[keyof PutStylesByStyleIdOptionsErrors];
export type PutStylesByStyleIdOptionsResponses = {
    /**
     * Style options updated successfully
     */
    200: StyleResponse;
};
export type PutStylesByStyleIdOptionsResponse = PutStylesByStyleIdOptionsResponses[keyof PutStylesByStyleIdOptionsResponses];
export type GetStylesWorkspaceByWorkspaceIdData = {
    body?: never;
    path: {
        workspaceId: string;
    };
    query?: {
        /**
         * Filter by style name
         */
        name?: string;
    };
    url: '/styles/workspace/{workspaceId}';
};
export type GetStylesWorkspaceByWorkspaceIdErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * No styles found for the workspace (returns empty array), or workspace itself not found.
     */
    404: EmptyArrayResponse | WorkspaceNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetStylesWorkspaceByWorkspaceIdError = GetStylesWorkspaceByWorkspaceIdErrors[keyof GetStylesWorkspaceByWorkspaceIdErrors];
export type GetStylesWorkspaceByWorkspaceIdResponses = {
    /**
     * List of styles for the workspace
     */
    200: StyleArray;
};
export type GetStylesWorkspaceByWorkspaceIdResponse = GetStylesWorkspaceByWorkspaceIdResponses[keyof GetStylesWorkspaceByWorkspaceIdResponses];
export type GetTextsData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter by text name
         */
        name?: string;
    };
    url: '/texts';
};
export type GetTextsErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found or no text entities available.
     */
    404: EmptyTextsOrgContextResponse | OrganizationNotFoundMessage;
};
export type GetTextsError = GetTextsErrors[keyof GetTextsErrors];
export type GetTextsResponses = {
    /**
     * List of texts
     */
    200: GetTextsResponse;
};
export type GetTextsResponse2 = GetTextsResponses[keyof GetTextsResponses];
export type PostTextsData = {
    body?: CreateText;
    path?: never;
    query?: never;
    url: '/texts';
};
export type PostTextsErrors = {
    /**
     * Bad Request when creating text
     */
    400: ValidationErrorMessage | OptionsRequiredMessage | TextNameTakenMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Could not create text entity due to missing resources.
     */
    404: OrganizationNotFoundMessage | WorkspaceNotFoundMessage;
};
export type PostTextsError = PostTextsErrors[keyof PostTextsErrors];
export type PostTextsResponses = {
    /**
     * Text created successfully
     */
    201: TextResponse;
};
export type PostTextsResponse = PostTextsResponses[keyof PostTextsResponses];
export type GetTextsBaseData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter texts by name (partial match)
         */
        name?: string;
    };
    url: '/texts/base';
};
export type GetTextsBaseErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
};
export type GetTextsBaseError = GetTextsBaseErrors[keyof GetTextsBaseErrors];
export type GetTextsBaseResponses = {
    /**
     * List of base texts
     */
    200: BaseTexts;
};
export type GetTextsBaseResponse = GetTextsBaseResponses[keyof GetTextsBaseResponses];
export type DeleteTextsByTextIdData = {
    body?: never;
    path: {
        textId: string;
    };
    query?: never;
    url: '/texts/{textId}';
};
export type DeleteTextsByTextIdErrors = {
    /**
     * Bad Request when deleting text
     */
    400: ResourceInUseMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or text entity not found.
     */
    404: TextNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteTextsByTextIdError = DeleteTextsByTextIdErrors[keyof DeleteTextsByTextIdErrors];
export type DeleteTextsByTextIdResponses = {
    /**
     * Text deleted successfully
     */
    200: DeleteTextResponse;
};
export type DeleteTextsByTextIdResponse = DeleteTextsByTextIdResponses[keyof DeleteTextsByTextIdResponses];
export type GetTextsByTextIdData = {
    body?: never;
    path: {
        textId: string;
    };
    query?: never;
    url: '/texts/{textId}';
};
export type GetTextsByTextIdErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or text entity not found.
     */
    404: TextNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetTextsByTextIdError = GetTextsByTextIdErrors[keyof GetTextsByTextIdErrors];
export type GetTextsByTextIdResponses = {
    /**
     * Text details
     */
    200: TextResponse;
};
export type GetTextsByTextIdResponse = GetTextsByTextIdResponses[keyof GetTextsByTextIdResponses];
export type PutTextsByTextIdData = {
    body?: UpdateText;
    path: {
        textId: string;
    };
    query?: never;
    url: '/texts/{textId}';
};
export type PutTextsByTextIdErrors = {
    /**
     * Bad Request when updating text
     */
    400: ValidationErrorMessage | UpdateFieldRequiredMessage | TextNameTakenMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or text entity not found.
     */
    404: TextNotFoundMessage | OrganizationNotFoundMessage;
};
export type PutTextsByTextIdError = PutTextsByTextIdErrors[keyof PutTextsByTextIdErrors];
export type PutTextsByTextIdResponses = {
    /**
     * Text updated successfully
     */
    200: TextResponse;
};
export type PutTextsByTextIdResponse = PutTextsByTextIdResponses[keyof PutTextsByTextIdResponses];
export type PutTextsByTextIdOptionsData = {
    body?: UpdateTextOptionsRequest;
    path: {
        textId: string;
    };
    query?: never;
    url: '/texts/{textId}/options';
};
export type PutTextsByTextIdOptionsErrors = {
    /**
     * Bad Request when updating text options
     */
    400: ValidationErrorMessage | UpdateFieldRequiredMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or text not found.
     */
    404: TextNotFoundMessage | OrganizationNotFoundMessage;
};
export type PutTextsByTextIdOptionsError = PutTextsByTextIdOptionsErrors[keyof PutTextsByTextIdOptionsErrors];
export type PutTextsByTextIdOptionsResponses = {
    /**
     * Text options updated successfully
     */
    200: TextResponse;
};
export type PutTextsByTextIdOptionsResponse = PutTextsByTextIdOptionsResponses[keyof PutTextsByTextIdOptionsResponses];
export type GetTextsWorkspaceByWorkspaceIdData = {
    body?: never;
    path: {
        workspaceId: string;
    };
    query?: {
        /**
         * Filter by text name
         */
        name?: string;
    };
    url: '/texts/workspace/{workspaceId}';
};
export type GetTextsWorkspaceByWorkspaceIdErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or workspace not found, or no text entities in workspace.
     */
    404: WorkspaceNotFoundMessage | EmptyArrayResponse | OrganizationNotFoundMessage;
};
export type GetTextsWorkspaceByWorkspaceIdError = GetTextsWorkspaceByWorkspaceIdErrors[keyof GetTextsWorkspaceByWorkspaceIdErrors];
export type GetTextsWorkspaceByWorkspaceIdResponses = {
    /**
     * List of texts for the workspace
     */
    200: TextArray;
};
export type GetTextsWorkspaceByWorkspaceIdResponse = GetTextsWorkspaceByWorkspaceIdResponses[keyof GetTextsWorkspaceByWorkspaceIdResponses];
export type GetBordersData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter by border name
         */
        name?: string;
    };
    url: '/borders';
};
export type GetBordersErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization not found or no border entities available.
     */
    404: EmptyBordersOrgContextResponseMessage | OrganizationNotFoundMessage;
};
export type GetBordersError = GetBordersErrors[keyof GetBordersErrors];
export type GetBordersResponses = {
    /**
     * List of borders
     */
    200: GetBordersResponse;
};
export type GetBordersResponse2 = GetBordersResponses[keyof GetBordersResponses];
export type PostBordersData = {
    body?: BorderBase;
    path?: never;
    query?: never;
    url: '/borders';
};
export type PostBordersErrors = {
    /**
     * Bad Request when creating a border
     */
    400: ValidationErrorMessage | BorderNameTakenMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Could not create border entity due to missing resources.
     */
    404: OrganizationNotFoundMessage | WorkspaceNotFoundMessage;
};
export type PostBordersError = PostBordersErrors[keyof PostBordersErrors];
export type PostBordersResponses = {
    /**
     * Border created successfully
     */
    201: BorderResponse;
};
export type PostBordersResponse = PostBordersResponses[keyof PostBordersResponses];
export type GetBordersBaseData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Filter borders by name (partial match)
         */
        name?: string;
    };
    url: '/borders/base';
};
export type GetBordersBaseErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
};
export type GetBordersBaseError = GetBordersBaseErrors[keyof GetBordersBaseErrors];
export type GetBordersBaseResponses = {
    /**
     * List of base borders
     */
    200: BaseBorders;
};
export type GetBordersBaseResponse = GetBordersBaseResponses[keyof GetBordersBaseResponses];
export type DeleteBordersByBorderIdData = {
    body?: never;
    path: {
        borderId: string;
    };
    query?: never;
    url: '/borders/{borderId}';
};
export type DeleteBordersByBorderIdErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or border entity not found.
     */
    404: BorderNotFoundMessage | OrganizationNotFoundMessage;
};
export type DeleteBordersByBorderIdError = DeleteBordersByBorderIdErrors[keyof DeleteBordersByBorderIdErrors];
export type DeleteBordersByBorderIdResponses = {
    /**
     * Border deleted successfully
     */
    200: DeleteBorderResponse;
};
export type DeleteBordersByBorderIdResponse = DeleteBordersByBorderIdResponses[keyof DeleteBordersByBorderIdResponses];
export type GetBordersByBorderIdData = {
    body?: never;
    path: {
        borderId: string;
    };
    query?: never;
    url: '/borders/{borderId}';
};
export type GetBordersByBorderIdErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or border entity not found.
     */
    404: BorderNotFoundMessage | OrganizationNotFoundMessage;
};
export type GetBordersByBorderIdError = GetBordersByBorderIdErrors[keyof GetBordersByBorderIdErrors];
export type GetBordersByBorderIdResponses = {
    /**
     * Border details
     */
    200: BorderResponse;
};
export type GetBordersByBorderIdResponse = GetBordersByBorderIdResponses[keyof GetBordersByBorderIdResponses];
export type PutBordersByBorderIdData = {
    body?: UpdateBorder;
    path: {
        borderId: string;
    };
    query?: never;
    url: '/borders/{borderId}';
};
export type PutBordersByBorderIdErrors = {
    /**
     * Bad Request when updating a border
     */
    400: ValidationErrorMessage | UpdateFieldRequiredMessage | BorderNameTakenMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or border entity not found.
     */
    404: BorderNotFoundMessage | OrganizationNotFoundMessage;
};
export type PutBordersByBorderIdError = PutBordersByBorderIdErrors[keyof PutBordersByBorderIdErrors];
export type PutBordersByBorderIdResponses = {
    /**
     * Border updated successfully
     */
    200: BorderResponse;
};
export type PutBordersByBorderIdResponse = PutBordersByBorderIdResponses[keyof PutBordersByBorderIdResponses];
export type PutBordersByBorderIdOptionsData = {
    body?: UpdateBorderOptionsRequest;
    path: {
        borderId: string;
    };
    query?: never;
    url: '/borders/{borderId}/options';
};
export type PutBordersByBorderIdOptionsErrors = {
    /**
     * Bad Request when updating border options
     */
    400: ValidationErrorMessage | UpdateOptionsFieldRequiredMessage;
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or border not found.
     */
    404: BorderNotFoundMessage | OrganizationNotFoundMessage;
};
export type PutBordersByBorderIdOptionsError = PutBordersByBorderIdOptionsErrors[keyof PutBordersByBorderIdOptionsErrors];
export type PutBordersByBorderIdOptionsResponses = {
    /**
     * Border options updated successfully
     */
    200: BorderResponse;
};
export type PutBordersByBorderIdOptionsResponse = PutBordersByBorderIdOptionsResponses[keyof PutBordersByBorderIdOptionsResponses];
export type GetBordersWorkspaceByWorkspaceIdData = {
    body?: never;
    path: {
        workspaceId: string;
    };
    query?: {
        /**
         * Filter by border name
         */
        name?: string;
    };
    url: '/borders/workspace/{workspaceId}';
};
export type GetBordersWorkspaceByWorkspaceIdErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Organization or workspace not found, or no border entities in workspace.
     */
    404: WorkspaceNotFoundMessage | EmptyArrayResponse | OrganizationNotFoundMessage;
};
export type GetBordersWorkspaceByWorkspaceIdError = GetBordersWorkspaceByWorkspaceIdErrors[keyof GetBordersWorkspaceByWorkspaceIdErrors];
export type GetBordersWorkspaceByWorkspaceIdResponses = {
    /**
     * List of borders for the workspace
     */
    200: Array<BorderResponse>;
};
export type GetBordersWorkspaceByWorkspaceIdResponse = GetBordersWorkspaceByWorkspaceIdResponses[keyof GetBordersWorkspaceByWorkspaceIdResponses];
export type GetCountryCodesData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/country-codes';
};
export type GetCountryCodesResponses = {
    /**
     * A list of all country codes
     */
    200: {
        data: Array<{
            /**
             * ISO 3166-1 alpha-2 country code
             */
            code: string;
            /**
             * Short country name
             */
            name: string;
            /**
             * Full official country name
             */
            fullName: string;
        }>;
    };
};
export type GetCountryCodesResponse = GetCountryCodesResponses[keyof GetCountryCodesResponses];
export type GetRouterRuleTemplatesData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Page number for pagination
         */
        page?: number;
        /**
         * Number of items to return (1-100)
         */
        limit?: number;
        /**
         * Include global platform templates in results
         */
        includeGlobal?: boolean;
        /**
         * Filter templates by router rule type
         */
        type?: 'location' | 'continent' | 'geo' | 'time' | 'date' | 'timezone' | 'language' | 'browser' | 'os' | 'deviceVendor' | 'deviceModel' | 'scanLimit';
    };
    url: '/router-rule-templates';
};
export type GetRouterRuleTemplatesErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
};
export type GetRouterRuleTemplatesError = GetRouterRuleTemplatesErrors[keyof GetRouterRuleTemplatesErrors];
export type GetRouterRuleTemplatesResponses = {
    /**
     * A paginated list of router rule templates with metadata
     */
    200: unknown;
};
export type PostRouterRuleTemplatesData = {
    /**
     * Router rule template creation data
     */
    body?: unknown;
    path?: never;
    query?: never;
    url: '/router-rule-templates';
};
export type PostRouterRuleTemplatesErrors = {
    /**
     * Invalid request data or template name already exists
     */
    400: ValidationErrorMessage | {
        error: 'TEMPLATE_COMPOSITE_RULE_NESTING_DEPTH_EXCEEDED';
        message: string;
        maxDepth: number;
        actualDepth: number;
    } | {
        error: 'TEMPLATE_COMPOSITE_RULE_CONDITION_COUNT_EXCEEDED';
        message: string;
        maxConditions: number;
        actualConditions: number;
    } | {
        error: 'TEMPLATE_COMPOSITE_RULE_CONDITIONS_REQUIRED';
        message: string;
        ruleType: string;
    };
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Limit reached response message
     */
    429: {
        message: string;
    };
};
export type PostRouterRuleTemplatesError = PostRouterRuleTemplatesErrors[keyof PostRouterRuleTemplatesErrors];
export type PostRouterRuleTemplatesResponses = {
    /**
     * Router rule template created successfully
     */
    201: unknown;
};
export type DeleteRouterRuleTemplatesByRouterRuleTemplateIdData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the router rule template
         */
        templateId: string;
        routerRuleTemplateId: string;
    };
    query?: never;
    url: '/router-rule-templates/{routerRuleTemplateId}';
};
export type DeleteRouterRuleTemplatesByRouterRuleTemplateIdErrors = {
    /**
     * Template is in use and cannot be deleted
     */
    400: {
        error?: string;
    };
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Router rule template not found, or organization/workspace context not found.
     */
    404: RouterRuleTemplateNotFoundMessage | OrganizationNotFoundMessage | WorkspaceNotFoundMessage;
};
export type DeleteRouterRuleTemplatesByRouterRuleTemplateIdError = DeleteRouterRuleTemplatesByRouterRuleTemplateIdErrors[keyof DeleteRouterRuleTemplatesByRouterRuleTemplateIdErrors];
export type DeleteRouterRuleTemplatesByRouterRuleTemplateIdResponses = {
    /**
     * Router rule template deleted successfully
     */
    200: {
        message?: string;
    };
};
export type DeleteRouterRuleTemplatesByRouterRuleTemplateIdResponse = DeleteRouterRuleTemplatesByRouterRuleTemplateIdResponses[keyof DeleteRouterRuleTemplatesByRouterRuleTemplateIdResponses];
export type GetRouterRuleTemplatesByRouterRuleTemplateIdData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the router rule template
         */
        templateId: string;
        routerRuleTemplateId: string;
    };
    query?: never;
    url: '/router-rule-templates/{routerRuleTemplateId}';
};
export type GetRouterRuleTemplatesByRouterRuleTemplateIdErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Router rule template not found, or organization/workspace context not found.
     */
    404: RouterRuleTemplateNotFoundMessage | OrganizationNotFoundMessage | WorkspaceNotFoundMessage;
};
export type GetRouterRuleTemplatesByRouterRuleTemplateIdError = GetRouterRuleTemplatesByRouterRuleTemplateIdErrors[keyof GetRouterRuleTemplatesByRouterRuleTemplateIdErrors];
export type GetRouterRuleTemplatesByRouterRuleTemplateIdResponses = {
    /**
     * Router rule template details
     */
    200: unknown;
};
export type PutRouterRuleTemplatesByRouterRuleTemplateIdData = {
    /**
     * Router rule template update data
     */
    body?: unknown;
    path: {
        /**
         * Unique identifier of the router rule template
         */
        templateId: string;
        routerRuleTemplateId: string;
    };
    query?: never;
    url: '/router-rule-templates/{routerRuleTemplateId}';
};
export type PutRouterRuleTemplatesByRouterRuleTemplateIdErrors = {
    /**
     * Invalid request data for template update
     */
    400: ValidationErrorMessage | {
        error: 'TEMPLATE_COMPOSITE_RULE_NESTING_DEPTH_EXCEEDED';
        message: string;
        maxDepth: number;
        actualDepth: number;
    } | {
        error: 'TEMPLATE_COMPOSITE_RULE_CONDITION_COUNT_EXCEEDED';
        message: string;
        maxConditions: number;
        actualConditions: number;
    } | {
        error: 'TEMPLATE_COMPOSITE_RULE_CONDITIONS_REQUIRED';
        message: string;
        ruleType: string;
    };
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Router rule template not found, or organization/workspace context not found.
     */
    404: RouterRuleTemplateNotFoundMessage | OrganizationNotFoundMessage | WorkspaceNotFoundMessage;
};
export type PutRouterRuleTemplatesByRouterRuleTemplateIdError = PutRouterRuleTemplatesByRouterRuleTemplateIdErrors[keyof PutRouterRuleTemplatesByRouterRuleTemplateIdErrors];
export type PutRouterRuleTemplatesByRouterRuleTemplateIdResponses = {
    /**
     * Router rule template updated successfully
     */
    200: unknown;
};
export type GetRouterRulesData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Page number for pagination
         */
        page?: number;
        /**
         * Number of items to return (1-100)
         */
        limit?: number;
        /**
         * Include disabled rules in results
         */
        includeDisabled?: boolean;
        /**
         * Filter rules by router rule type
         */
        type?: 'location' | 'continent' | 'geo' | 'time' | 'date' | 'timezone' | 'language' | 'browser' | 'os' | 'deviceVendor' | 'deviceModel' | 'scanLimit';
        /**
         * Filter rules by specific priority value
         */
        priority?: number;
        /**
         * Filter rules by data type
         */
        dataType?: 'url' | 'text' | 'email' | 'wifi' | 'vcard' | 'event' | 'json' | 'file';
        /**
         * Filter by specific workspace ID
         */
        workspaceId?: string;
        /**
         * Filter by specific QR code ID
         */
        codeId?: string;
    };
    url: '/router-rules';
};
export type GetRouterRulesErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
};
export type GetRouterRulesError = GetRouterRulesErrors[keyof GetRouterRulesErrors];
export type GetRouterRulesResponses = {
    /**
     * Paginated list response
     */
    200: {
        /**
         * Pagination metadata
         */
        pagination: {
            /**
             * Total number of items matching the filter criteria
             */
            total: number;
            /**
             * Current page number
             */
            page: number;
            /**
             * Number of items per page
             */
            limit: number;
            /**
             * Total number of pages
             */
            totalPages: number;
        };
        /**
         * Array of items in the result
         */
        data: Array<WorkspaceRouterRuleResponse>;
    };
};
export type GetRouterRulesResponse = GetRouterRulesResponses[keyof GetRouterRulesResponses];
export type GetWorkspacesByWorkspaceIdRouterRulesData = {
    body?: never;
    path: {
        /**
         * Unique identifier of the workspace
         */
        workspaceId: string;
    };
    query?: {
        /**
         * Page number for pagination
         */
        page?: number;
        /**
         * Number of items to return (1-100)
         */
        limit?: number;
        /**
         * Include disabled rules in results
         */
        includeDisabled?: boolean;
        /**
         * Filter rules by router rule type
         */
        type?: 'location' | 'continent' | 'geo' | 'time' | 'date' | 'timezone' | 'language' | 'browser' | 'os' | 'deviceVendor' | 'deviceModel' | 'scanLimit';
        /**
         * Filter rules by specific priority value
         */
        priority?: number;
        /**
         * Filter rules by data type
         */
        dataType?: 'url' | 'text' | 'email' | 'phone' | 'sms' | 'wifi' | 'vcard' | 'event';
        /**
         * Filter rules by specific QR code ID within the workspace
         */
        codeId?: string;
    };
    url: '/workspaces/{workspaceId}/router-rules';
};
export type GetWorkspacesByWorkspaceIdRouterRulesErrors = {
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Workspace not found or no access
     */
    404: {
        error?: string;
    };
};
export type GetWorkspacesByWorkspaceIdRouterRulesError = GetWorkspacesByWorkspaceIdRouterRulesErrors[keyof GetWorkspacesByWorkspaceIdRouterRulesErrors];
export type GetWorkspacesByWorkspaceIdRouterRulesResponses = {
    /**
     * Paginated list response
     */
    200: {
        /**
         * Pagination metadata
         */
        pagination: {
            /**
             * Total number of items matching the filter criteria
             */
            total: number;
            /**
             * Current page number
             */
            page: number;
            /**
             * Number of items per page
             */
            limit: number;
            /**
             * Total number of pages
             */
            totalPages: number;
        };
        /**
         * Array of items in the result
         */
        data: Array<WorkspaceRouterRuleResponse>;
    };
};
export type GetWorkspacesByWorkspaceIdRouterRulesResponse = GetWorkspacesByWorkspaceIdRouterRulesResponses[keyof GetWorkspacesByWorkspaceIdRouterRulesResponses];
export type PostWorkspacesByWorkspaceIdRouterRuleTemplatesData = {
    /**
     * Workspace router rule template creation data (workspaceId will be taken from URL)
     */
    body?: unknown;
    path: {
        /**
         * Unique identifier of the workspace to scope the template to
         */
        workspaceId: string;
    };
    query?: never;
    url: '/workspaces/{workspaceId}/router-rule-templates';
};
export type PostWorkspacesByWorkspaceIdRouterRuleTemplatesErrors = {
    /**
     * Invalid request data, template name already exists, or insufficient workspace permissions
     */
    400: ValidationErrorMessage | {
        error: 'TEMPLATE_COMPOSITE_RULE_NESTING_DEPTH_EXCEEDED';
        message: string;
        maxDepth: number;
        actualDepth: number;
    } | {
        error: 'TEMPLATE_COMPOSITE_RULE_CONDITION_COUNT_EXCEEDED';
        message: string;
        maxConditions: number;
        actualConditions: number;
    } | {
        error: 'TEMPLATE_COMPOSITE_RULE_CONDITIONS_REQUIRED';
        message: string;
        ruleType: string;
    };
    /**
     * Unauthorized
     */
    401: UnauthorizedResponseMessage;
    /**
     * Forbidden
     */
    403: ForbiddenResponseMessage;
    /**
     * Limit reached response message
     */
    429: {
        message: string;
    };
};
export type PostWorkspacesByWorkspaceIdRouterRuleTemplatesError = PostWorkspacesByWorkspaceIdRouterRuleTemplatesErrors[keyof PostWorkspacesByWorkspaceIdRouterRuleTemplatesErrors];
export type PostWorkspacesByWorkspaceIdRouterRuleTemplatesResponses = {
    /**
     * Workspace router rule template created successfully
     */
    201: unknown;
};
export type ClientOptions = {
    baseUrl: 'https://api.qr-platform.com/v1' | (string & {});
};
