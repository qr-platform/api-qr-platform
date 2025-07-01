// generated with @7nohe/openapi-react-query-codegen@1.6.2

import {
  UseMutationOptions,
  UseQueryOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import {
  ApiKeysService,
  AuthService,
  BordersService,
  CountryCodesService,
  InvitationsService,
  MembersService,
  OrganizationsService,
  PasswordManagementService,
  PlansService,
  QrCodeLinksService,
  QrCodeRouterRulesService,
  QrCodeScansService,
  QrCodeVersionsService,
  QrCodesService,
  RolesService,
  RouterRuleTemplatesService,
  SettingsService,
  StylesService,
  TemplatesService,
  TextsService,
  WorkspaceSettingsService,
  WorkspacesService,
} from "../../node/services.gen";
import {
  AddMemberRole,
  AddOrganizationMember,
  BorderBase,
  CreateApiKeyRequest,
  CreateCodeRequest,
  CreateInvitationRequest,
  CreateOrganizationRequest,
  CreateSetting,
  CreateWorkspaceRequest,
  EmailVerifyRequest,
  GenerateCodeRequest,
  PasswordChangeRequest,
  PasswordResetRequest,
  PasswordResetVerifyRequest,
  RegisterRequest,
  RegisterVerifyRequest,
  SignInRequest,
  SignInVerifyRequest,
  StatusChangeApiKeyRequest,
  StyleBase,
  TemplateBase,
  TextBase,
  UpdateApiKeyRequest,
  UpdateBorder,
  UpdateBorderOptionsRequest,
  UpdateCodeOptionsRequest,
  UpdateCodeRequest,
  UpdateOrganizationRequest,
  UpdateSetting,
  UpdateStyle,
  UpdateStyleOptionsRequest,
  UpdateTemplate,
  UpdateTemplateOptionsRequest,
  UpdateText,
  UpdateTextOptionsRequest,
  UpdateWorkspaceRequest,
  WorkspaceMemberRole,
} from "../../node/types.gen";
import * as Common from "./common";
export const useAuthServiceGetAuthMe = <
  TData = Common.AuthServiceGetAuthMeDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseAuthServiceGetAuthMeKeyFn(queryKey),
    queryFn: () => AuthService.getAuthMe() as TData,
    ...options,
  });
export const useAuthServiceGetAuthSignOut = <
  TData = Common.AuthServiceGetAuthSignOutDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseAuthServiceGetAuthSignOutKeyFn(queryKey),
    queryFn: () => AuthService.getAuthSignOut() as TData,
    ...options,
  });
export const useApiKeysServiceGetApiKeys = <
  TData = Common.ApiKeysServiceGetApiKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseApiKeysServiceGetApiKeysKeyFn(queryKey),
    queryFn: () => ApiKeysService.getApiKeys() as TData,
    ...options,
  });
export const useApiKeysServiceGetApiKeysByApiKeyId = <
  TData = Common.ApiKeysServiceGetApiKeysByApiKeyIdDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    apiKeyId,
  }: {
    apiKeyId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseApiKeysServiceGetApiKeysByApiKeyIdKeyFn(
      { apiKeyId },
      queryKey
    ),
    queryFn: () => ApiKeysService.getApiKeysByApiKeyId({ apiKeyId }) as TData,
    ...options,
  });
export const useOrganizationsServiceGetOrgsCurrent = <
  TData = Common.OrganizationsServiceGetOrgsCurrentDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseOrganizationsServiceGetOrgsCurrentKeyFn(queryKey),
    queryFn: () => OrganizationsService.getOrgsCurrent() as TData,
    ...options,
  });
export const useInvitationsServiceGetInvites = <
  TData = Common.InvitationsServiceGetInvitesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseInvitationsServiceGetInvitesKeyFn(queryKey),
    queryFn: () => InvitationsService.getInvites() as TData,
    ...options,
  });
export const useInvitationsServiceGetInvitesMe = <
  TData = Common.InvitationsServiceGetInvitesMeDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseInvitationsServiceGetInvitesMeKeyFn(queryKey),
    queryFn: () => InvitationsService.getInvitesMe() as TData,
    ...options,
  });
export const useInvitationsServiceGetInvitesByTokenAccept = <
  TData = Common.InvitationsServiceGetInvitesByTokenAcceptDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    token,
  }: {
    token: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseInvitationsServiceGetInvitesByTokenAcceptKeyFn(
      { token },
      queryKey
    ),
    queryFn: () =>
      InvitationsService.getInvitesByTokenAccept({ token }) as TData,
    ...options,
  });
export const useInvitationsServiceGetInvitesByTokenDecline = <
  TData = Common.InvitationsServiceGetInvitesByTokenDeclineDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    token,
  }: {
    token: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseInvitationsServiceGetInvitesByTokenDeclineKeyFn(
      { token },
      queryKey
    ),
    queryFn: () =>
      InvitationsService.getInvitesByTokenDecline({ token }) as TData,
    ...options,
  });
export const useMembersServiceGetMembers = <
  TData = Common.MembersServiceGetMembersDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMembersServiceGetMembersKeyFn(queryKey),
    queryFn: () => MembersService.getMembers() as TData,
    ...options,
  });
export const useMembersServiceGetMembersByUserIdRoles = <
  TData = Common.MembersServiceGetMembersByUserIdRolesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    userId,
  }: {
    userId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseMembersServiceGetMembersByUserIdRolesKeyFn(
      { userId },
      queryKey
    ),
    queryFn: () => MembersService.getMembersByUserIdRoles({ userId }) as TData,
    ...options,
  });
export const useWorkspacesServiceGetWorkspaces = <
  TData = Common.WorkspacesServiceGetWorkspacesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseWorkspacesServiceGetWorkspacesKeyFn(queryKey),
    queryFn: () => WorkspacesService.getWorkspaces() as TData,
    ...options,
  });
export const useWorkspacesServiceGetWorkspacesByWorkspaceId = <
  TData = Common.WorkspacesServiceGetWorkspacesByWorkspaceIdDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    workspaceId,
  }: {
    workspaceId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseWorkspacesServiceGetWorkspacesByWorkspaceIdKeyFn(
      { workspaceId },
      queryKey
    ),
    queryFn: () =>
      WorkspacesService.getWorkspacesByWorkspaceId({ workspaceId }) as TData,
    ...options,
  });
export const useWorkspacesServiceGetWorkspacesByWorkspaceIdMembersByUserIdRole =
  <
    TData = Common.WorkspacesServiceGetWorkspacesByWorkspaceIdMembersByUserIdRoleDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[]
  >(
    {
      userId,
      workspaceId,
    }: {
      userId: string;
      workspaceId: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
  ) =>
    useQuery<TData, TError>({
      queryKey:
        Common.UseWorkspacesServiceGetWorkspacesByWorkspaceIdMembersByUserIdRoleKeyFn(
          { userId, workspaceId },
          queryKey
        ),
      queryFn: () =>
        WorkspacesService.getWorkspacesByWorkspaceIdMembersByUserIdRole({
          userId,
          workspaceId,
        }) as TData,
      ...options,
    });
export const useWorkspacesServiceGetWorkspacesByWorkspaceIdMembers = <
  TData = Common.WorkspacesServiceGetWorkspacesByWorkspaceIdMembersDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    workspaceId,
  }: {
    workspaceId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseWorkspacesServiceGetWorkspacesByWorkspaceIdMembersKeyFn(
      { workspaceId },
      queryKey
    ),
    queryFn: () =>
      WorkspacesService.getWorkspacesByWorkspaceIdMembers({
        workspaceId,
      }) as TData,
    ...options,
  });
export const useRolesServiceGetRoles = <
  TData = Common.RolesServiceGetRolesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    includeScopes,
  }: {
    includeScopes?: boolean;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseRolesServiceGetRolesKeyFn({ includeScopes }, queryKey),
    queryFn: () => RolesService.getRoles({ includeScopes }) as TData,
    ...options,
  });
export const usePlansServiceGetPlans = <
  TData = Common.PlansServiceGetPlansDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UsePlansServiceGetPlansKeyFn(queryKey),
    queryFn: () => PlansService.getPlans() as TData,
    ...options,
  });
export const usePlansServiceGetPlansCurrent = <
  TData = Common.PlansServiceGetPlansCurrentDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UsePlansServiceGetPlansCurrentKeyFn(queryKey),
    queryFn: () => PlansService.getPlansCurrent() as TData,
    ...options,
  });
export const useSettingsServiceGetSettings = <
  TData = Common.SettingsServiceGetSettingsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseSettingsServiceGetSettingsKeyFn(queryKey),
    queryFn: () => SettingsService.getSettings() as TData,
    ...options,
  });
export const useSettingsServiceGetSettingsCustom = <
  TData = Common.SettingsServiceGetSettingsCustomDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseSettingsServiceGetSettingsCustomKeyFn(queryKey),
    queryFn: () => SettingsService.getSettingsCustom() as TData,
    ...options,
  });
export const useSettingsServiceGetSettingsCustomBySettingSlug = <
  TData = Common.SettingsServiceGetSettingsCustomBySettingSlugDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    settingSlug,
  }: {
    settingSlug: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseSettingsServiceGetSettingsCustomBySettingSlugKeyFn(
      { settingSlug },
      queryKey
    ),
    queryFn: () =>
      SettingsService.getSettingsCustomBySettingSlug({ settingSlug }) as TData,
    ...options,
  });
export const useSettingsServiceGetSettingsCustomBySettingSlugValue = <
  TData = Common.SettingsServiceGetSettingsCustomBySettingSlugValueDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    settingSlug,
  }: {
    settingSlug: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseSettingsServiceGetSettingsCustomBySettingSlugValueKeyFn(
      { settingSlug },
      queryKey
    ),
    queryFn: () =>
      SettingsService.getSettingsCustomBySettingSlugValue({
        settingSlug,
      }) as TData,
    ...options,
  });
export const useSettingsServiceGetSettingsService = <
  TData = Common.SettingsServiceGetSettingsServiceDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseSettingsServiceGetSettingsServiceKeyFn(queryKey),
    queryFn: () => SettingsService.getSettingsService() as TData,
    ...options,
  });
export const useSettingsServiceGetSettingsServiceBySettingSlug = <
  TData = Common.SettingsServiceGetSettingsServiceBySettingSlugDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    settingSlug,
  }: {
    settingSlug: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseSettingsServiceGetSettingsServiceBySettingSlugKeyFn(
      { settingSlug },
      queryKey
    ),
    queryFn: () =>
      SettingsService.getSettingsServiceBySettingSlug({ settingSlug }) as TData,
    ...options,
  });
export const useSettingsServiceGetSettingsServiceBySettingSlugValue = <
  TData = Common.SettingsServiceGetSettingsServiceBySettingSlugValueDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    settingSlug,
  }: {
    settingSlug: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey:
      Common.UseSettingsServiceGetSettingsServiceBySettingSlugValueKeyFn(
        { settingSlug },
        queryKey
      ),
    queryFn: () =>
      SettingsService.getSettingsServiceBySettingSlugValue({
        settingSlug,
      }) as TData,
    ...options,
  });
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettings = <
  TData = Common.WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    workspaceId,
  }: {
    workspaceId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey:
      Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsKeyFn(
        { workspaceId },
        queryKey
      ),
    queryFn: () =>
      WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettings({
        workspaceId,
      }) as TData,
    ...options,
  });
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustom =
  <
    TData = Common.WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[]
  >(
    {
      workspaceId,
    }: {
      workspaceId: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
  ) =>
    useQuery<TData, TError>({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomKeyFn(
          { workspaceId },
          queryKey
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsCustom({
          workspaceId,
        }) as TData,
      ...options,
    });
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlug =
  <
    TData = Common.WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[]
  >(
    {
      settingSlug,
      workspaceId,
    }: {
      settingSlug: string;
      workspaceId: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
  ) =>
    useQuery<TData, TError>({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugKeyFn(
          { settingSlug, workspaceId },
          queryKey
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsCustomBySettingSlug(
          { settingSlug, workspaceId }
        ) as TData,
      ...options,
    });
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValue =
  <
    TData = Common.WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[]
  >(
    {
      settingSlug,
      workspaceId,
    }: {
      settingSlug: string;
      workspaceId: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
  ) =>
    useQuery<TData, TError>({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueKeyFn(
          { settingSlug, workspaceId },
          queryKey
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValue(
          { settingSlug, workspaceId }
        ) as TData,
      ...options,
    });
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsService =
  <
    TData = Common.WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[]
  >(
    {
      workspaceId,
    }: {
      workspaceId: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
  ) =>
    useQuery<TData, TError>({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceKeyFn(
          { workspaceId },
          queryKey
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsService({
          workspaceId,
        }) as TData,
      ...options,
    });
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlug =
  <
    TData = Common.WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[]
  >(
    {
      settingSlug,
      workspaceId,
    }: {
      settingSlug: string;
      workspaceId: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
  ) =>
    useQuery<TData, TError>({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugKeyFn(
          { settingSlug, workspaceId },
          queryKey
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsServiceBySettingSlug(
          { settingSlug, workspaceId }
        ) as TData,
      ...options,
    });
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValue =
  <
    TData = Common.WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[]
  >(
    {
      settingSlug,
      workspaceId,
    }: {
      settingSlug: string;
      workspaceId: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
  ) =>
    useQuery<TData, TError>({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueKeyFn(
          { settingSlug, workspaceId },
          queryKey
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValue(
          { settingSlug, workspaceId }
        ) as TData,
      ...options,
    });
export const useQrCodeScansServiceGetCodesByCodeIdScans = <
  TData = Common.QrCodeScansServiceGetCodesByCodeIdScansDefaultResponse,
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
    page,
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
    page?: number;
    region?: string;
    scannedAt?: { [key: string]: unknown };
    status?: "success" | "limit_reached";
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
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
        page,
        region,
        scannedAt,
        status,
      },
      queryKey
    ),
    queryFn: () =>
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
        page,
        region,
        scannedAt,
        status,
      }) as TData,
    ...options,
  });
export const useQrCodeRouterRulesServiceGetCodesByCodeIdRouterRules = <
  TData = Common.QrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    codeId,
    dataType,
    includeDisabled,
    limit,
    page,
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
    page?: number;
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
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey:
      Common.UseQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesKeyFn(
        { codeId, dataType, includeDisabled, limit, page, priority, type },
        queryKey
      ),
    queryFn: () =>
      QrCodeRouterRulesService.getCodesByCodeIdRouterRules({
        codeId,
        dataType,
        includeDisabled,
        limit,
        page,
        priority,
        type,
      }) as TData,
    ...options,
  });
export const useQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesByRouterRuleId =
  <
    TData = Common.QrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesByRouterRuleIdDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[]
  >(
    {
      codeId,
      routerRuleId,
    }: {
      codeId: string;
      routerRuleId: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
  ) =>
    useQuery<TData, TError>({
      queryKey:
        Common.UseQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesByRouterRuleIdKeyFn(
          { codeId, routerRuleId },
          queryKey
        ),
      queryFn: () =>
        QrCodeRouterRulesService.getCodesByCodeIdRouterRulesByRouterRuleId({
          codeId,
          routerRuleId,
        }) as TData,
      ...options,
    });
export const useQrCodeRouterRulesServiceGetRouterRules = <
  TData = Common.QrCodeRouterRulesServiceGetRouterRulesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    codeId,
    dataType,
    includeDisabled,
    limit,
    page,
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
    page?: number;
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
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseQrCodeRouterRulesServiceGetRouterRulesKeyFn(
      {
        codeId,
        dataType,
        includeDisabled,
        limit,
        page,
        priority,
        type,
        workspaceId,
      },
      queryKey
    ),
    queryFn: () =>
      QrCodeRouterRulesService.getRouterRules({
        codeId,
        dataType,
        includeDisabled,
        limit,
        page,
        priority,
        type,
        workspaceId,
      }) as TData,
    ...options,
  });
export const useQrCodeRouterRulesServiceGetWorkspacesByWorkspaceIdRouterRules =
  <
    TData = Common.QrCodeRouterRulesServiceGetWorkspacesByWorkspaceIdRouterRulesDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[]
  >(
    {
      codeId,
      dataType,
      includeDisabled,
      limit,
      page,
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
      page?: number;
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
    options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
  ) =>
    useQuery<TData, TError>({
      queryKey:
        Common.UseQrCodeRouterRulesServiceGetWorkspacesByWorkspaceIdRouterRulesKeyFn(
          {
            codeId,
            dataType,
            includeDisabled,
            limit,
            page,
            priority,
            type,
            workspaceId,
          },
          queryKey
        ),
      queryFn: () =>
        QrCodeRouterRulesService.getWorkspacesByWorkspaceIdRouterRules({
          codeId,
          dataType,
          includeDisabled,
          limit,
          page,
          priority,
          type,
          workspaceId,
        }) as TData,
      ...options,
    });
export const useQrCodesServiceGetCodesDeleted = <
  TData = Common.QrCodesServiceGetCodesDeletedDefaultResponse,
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
    page,
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
    page?: number;
    updatedAt?: { [key: string]: unknown };
    workspaceId?: string;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseQrCodesServiceGetCodesDeletedKeyFn(
      {
        createdAt,
        data,
        isValid,
        limit,
        name,
        orderBy,
        orderDirection,
        page,
        updatedAt,
        workspaceId,
      },
      queryKey
    ),
    queryFn: () =>
      QrCodesService.getCodesDeleted({
        createdAt,
        data,
        isValid,
        limit,
        name,
        orderBy,
        orderDirection,
        page,
        updatedAt,
        workspaceId,
      }) as TData,
    ...options,
  });
export const useQrCodesServiceGetCodesByCodeId = <
  TData = Common.QrCodesServiceGetCodesByCodeIdDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    codeId,
  }: {
    codeId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseQrCodesServiceGetCodesByCodeIdKeyFn(
      { codeId },
      queryKey
    ),
    queryFn: () => QrCodesService.getCodesByCodeId({ codeId }) as TData,
    ...options,
  });
export const useQrCodesServiceGetCodes = <
  TData = Common.QrCodesServiceGetCodesDefaultResponse,
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
    page,
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
    page?: number;
    updatedAt?: { [key: string]: unknown };
    workspaceId?: string;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseQrCodesServiceGetCodesKeyFn(
      {
        createdAt,
        data,
        isValid,
        limit,
        name,
        orderBy,
        orderDirection,
        page,
        updatedAt,
        workspaceId,
      },
      queryKey
    ),
    queryFn: () =>
      QrCodesService.getCodes({
        createdAt,
        data,
        isValid,
        limit,
        name,
        orderBy,
        orderDirection,
        page,
        updatedAt,
        workspaceId,
      }) as TData,
    ...options,
  });
export const useQrCodeLinksServiceGetCodesLinks = <
  TData = Common.QrCodeLinksServiceGetCodesLinksDefaultResponse,
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
    page,
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
    page?: number;
    styleName?: string;
    templateName?: string;
    type?: "svg" | "png" | "pdf";
    updatedAt?: { [key: string]: unknown };
    workspaceId?: string;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
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
        page,
        styleName,
        templateName,
        type,
        updatedAt,
        workspaceId,
      },
      queryKey
    ),
    queryFn: () =>
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
        page,
        styleName,
        templateName,
        type,
        updatedAt,
        workspaceId,
      }) as TData,
    ...options,
  });
export const useQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByType = <
  TData = Common.QrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    codeId,
    type,
    version,
  }: {
    codeId: string;
    type: "svg" | "png" | "pdf";
    version: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey:
      Common.UseQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeKeyFn(
        { codeId, type, version },
        queryKey
      ),
    queryFn: () =>
      QrCodeLinksService.getCodesByCodeIdVersionByVersionByType({
        codeId,
        type,
        version,
      }) as TData,
    ...options,
  });
export const useQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeLink = <
  TData = Common.QrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeLinkDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    codeId,
    type,
    version,
  }: {
    codeId: string;
    type: "svg" | "png" | "pdf";
    version: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey:
      Common.UseQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeLinkKeyFn(
        { codeId, type, version },
        queryKey
      ),
    queryFn: () =>
      QrCodeLinksService.getCodesByCodeIdVersionByVersionByTypeLink({
        codeId,
        type,
        version,
      }) as TData,
    ...options,
  });
export const useQrCodeLinksServiceGetCodesByCodeIdByType = <
  TData = Common.QrCodeLinksServiceGetCodesByCodeIdByTypeDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    codeId,
    type,
  }: {
    codeId: string;
    type: "svg" | "png" | "pdf";
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseQrCodeLinksServiceGetCodesByCodeIdByTypeKeyFn(
      { codeId, type },
      queryKey
    ),
    queryFn: () =>
      QrCodeLinksService.getCodesByCodeIdByType({ codeId, type }) as TData,
    ...options,
  });
export const useQrCodeLinksServiceGetCodesByCodeIdByTypeLink = <
  TData = Common.QrCodeLinksServiceGetCodesByCodeIdByTypeLinkDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    codeId,
    type,
  }: {
    codeId: string;
    type: "svg" | "png" | "pdf";
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseQrCodeLinksServiceGetCodesByCodeIdByTypeLinkKeyFn(
      { codeId, type },
      queryKey
    ),
    queryFn: () =>
      QrCodeLinksService.getCodesByCodeIdByTypeLink({ codeId, type }) as TData,
    ...options,
  });
export const useQrCodeVersionsServiceGetCodesByCodeIdVersionByVersion = <
  TData = Common.QrCodeVersionsServiceGetCodesByCodeIdVersionByVersionDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    codeId,
    version,
  }: {
    codeId: string;
    version: number;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey:
      Common.UseQrCodeVersionsServiceGetCodesByCodeIdVersionByVersionKeyFn(
        { codeId, version },
        queryKey
      ),
    queryFn: () =>
      QrCodeVersionsService.getCodesByCodeIdVersionByVersion({
        codeId,
        version,
      }) as TData,
    ...options,
  });
export const useQrCodeVersionsServiceGetCodesByCodeIdVersions = <
  TData = Common.QrCodeVersionsServiceGetCodesByCodeIdVersionsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    codeId,
  }: {
    codeId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseQrCodeVersionsServiceGetCodesByCodeIdVersionsKeyFn(
      { codeId },
      queryKey
    ),
    queryFn: () =>
      QrCodeVersionsService.getCodesByCodeIdVersions({ codeId }) as TData,
    ...options,
  });
export const useTemplatesServiceGetTemplates = <
  TData = Common.TemplatesServiceGetTemplatesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    name,
  }: {
    name?: string;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTemplatesServiceGetTemplatesKeyFn({ name }, queryKey),
    queryFn: () => TemplatesService.getTemplates({ name }) as TData,
    ...options,
  });
export const useTemplatesServiceGetTemplatesBase = <
  TData = Common.TemplatesServiceGetTemplatesBaseDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    name,
  }: {
    name?: string;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTemplatesServiceGetTemplatesBaseKeyFn(
      { name },
      queryKey
    ),
    queryFn: () => TemplatesService.getTemplatesBase({ name }) as TData,
    ...options,
  });
export const useTemplatesServiceGetTemplatesByTemplateId = <
  TData = Common.TemplatesServiceGetTemplatesByTemplateIdDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    templateId,
  }: {
    templateId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTemplatesServiceGetTemplatesByTemplateIdKeyFn(
      { templateId },
      queryKey
    ),
    queryFn: () =>
      TemplatesService.getTemplatesByTemplateId({ templateId }) as TData,
    ...options,
  });
export const useTemplatesServiceGetTemplatesWorkspaceByWorkspaceId = <
  TData = Common.TemplatesServiceGetTemplatesWorkspaceByWorkspaceIdDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    name,
    workspaceId,
  }: {
    name?: string;
    workspaceId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTemplatesServiceGetTemplatesWorkspaceByWorkspaceIdKeyFn(
      { name, workspaceId },
      queryKey
    ),
    queryFn: () =>
      TemplatesService.getTemplatesWorkspaceByWorkspaceId({
        name,
        workspaceId,
      }) as TData,
    ...options,
  });
export const useStylesServiceGetStyles = <
  TData = Common.StylesServiceGetStylesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    name,
  }: {
    name?: string;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseStylesServiceGetStylesKeyFn({ name }, queryKey),
    queryFn: () => StylesService.getStyles({ name }) as TData,
    ...options,
  });
export const useStylesServiceGetStylesBase = <
  TData = Common.StylesServiceGetStylesBaseDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    name,
  }: {
    name?: string;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseStylesServiceGetStylesBaseKeyFn({ name }, queryKey),
    queryFn: () => StylesService.getStylesBase({ name }) as TData,
    ...options,
  });
export const useStylesServiceGetStylesByStyleId = <
  TData = Common.StylesServiceGetStylesByStyleIdDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    styleId,
  }: {
    styleId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseStylesServiceGetStylesByStyleIdKeyFn(
      { styleId },
      queryKey
    ),
    queryFn: () => StylesService.getStylesByStyleId({ styleId }) as TData,
    ...options,
  });
export const useStylesServiceGetStylesWorkspaceByWorkspaceId = <
  TData = Common.StylesServiceGetStylesWorkspaceByWorkspaceIdDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    name,
    workspaceId,
  }: {
    name?: string;
    workspaceId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseStylesServiceGetStylesWorkspaceByWorkspaceIdKeyFn(
      { name, workspaceId },
      queryKey
    ),
    queryFn: () =>
      StylesService.getStylesWorkspaceByWorkspaceId({
        name,
        workspaceId,
      }) as TData,
    ...options,
  });
export const useTextsServiceGetTexts = <
  TData = Common.TextsServiceGetTextsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    name,
  }: {
    name?: string;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTextsServiceGetTextsKeyFn({ name }, queryKey),
    queryFn: () => TextsService.getTexts({ name }) as TData,
    ...options,
  });
export const useTextsServiceGetTextsBase = <
  TData = Common.TextsServiceGetTextsBaseDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    name,
  }: {
    name?: string;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTextsServiceGetTextsBaseKeyFn({ name }, queryKey),
    queryFn: () => TextsService.getTextsBase({ name }) as TData,
    ...options,
  });
export const useTextsServiceGetTextsByTextId = <
  TData = Common.TextsServiceGetTextsByTextIdDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    textId,
  }: {
    textId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTextsServiceGetTextsByTextIdKeyFn({ textId }, queryKey),
    queryFn: () => TextsService.getTextsByTextId({ textId }) as TData,
    ...options,
  });
export const useTextsServiceGetTextsWorkspaceByWorkspaceId = <
  TData = Common.TextsServiceGetTextsWorkspaceByWorkspaceIdDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    name,
    workspaceId,
  }: {
    name?: string;
    workspaceId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseTextsServiceGetTextsWorkspaceByWorkspaceIdKeyFn(
      { name, workspaceId },
      queryKey
    ),
    queryFn: () =>
      TextsService.getTextsWorkspaceByWorkspaceId({
        name,
        workspaceId,
      }) as TData,
    ...options,
  });
export const useBordersServiceGetBorders = <
  TData = Common.BordersServiceGetBordersDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    name,
  }: {
    name?: string;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseBordersServiceGetBordersKeyFn({ name }, queryKey),
    queryFn: () => BordersService.getBorders({ name }) as TData,
    ...options,
  });
export const useBordersServiceGetBordersBase = <
  TData = Common.BordersServiceGetBordersBaseDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    name,
  }: {
    name?: string;
  } = {},
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseBordersServiceGetBordersBaseKeyFn({ name }, queryKey),
    queryFn: () => BordersService.getBordersBase({ name }) as TData,
    ...options,
  });
export const useBordersServiceGetBordersByBorderId = <
  TData = Common.BordersServiceGetBordersByBorderIdDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    borderId,
  }: {
    borderId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseBordersServiceGetBordersByBorderIdKeyFn(
      { borderId },
      queryKey
    ),
    queryFn: () => BordersService.getBordersByBorderId({ borderId }) as TData,
    ...options,
  });
export const useBordersServiceGetBordersWorkspaceByWorkspaceId = <
  TData = Common.BordersServiceGetBordersWorkspaceByWorkspaceIdDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    name,
    workspaceId,
  }: {
    name?: string;
    workspaceId: string;
  },
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseBordersServiceGetBordersWorkspaceByWorkspaceIdKeyFn(
      { name, workspaceId },
      queryKey
    ),
    queryFn: () =>
      BordersService.getBordersWorkspaceByWorkspaceId({
        name,
        workspaceId,
      }) as TData,
    ...options,
  });
export const useCountryCodesServiceGetCountryCodes = <
  TData = Common.CountryCodesServiceGetCountryCodesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseCountryCodesServiceGetCountryCodesKeyFn(queryKey),
    queryFn: () => CountryCodesService.getCountryCodes() as TData,
    ...options,
  });
export const useRouterRuleTemplatesServiceGetRouterRuleTemplates = <
  TData = Common.RouterRuleTemplatesServiceGetRouterRuleTemplatesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  {
    includeGlobal,
    limit,
    page,
    type,
  }: {
    includeGlobal?: boolean;
    limit?: number;
    page?: number;
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
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useQuery<TData, TError>({
    queryKey: Common.UseRouterRuleTemplatesServiceGetRouterRuleTemplatesKeyFn(
      { includeGlobal, limit, page, type },
      queryKey
    ),
    queryFn: () =>
      RouterRuleTemplatesService.getRouterRuleTemplates({
        includeGlobal,
        limit,
        page,
        type,
      }) as TData,
    ...options,
  });
export const useRouterRuleTemplatesServiceGetRouterRuleTemplatesByRouterRuleTemplateId =
  <
    TData = Common.RouterRuleTemplatesServiceGetRouterRuleTemplatesByRouterRuleTemplateIdDefaultResponse,
    TError = unknown,
    TQueryKey extends Array<unknown> = unknown[]
  >(
    {
      routerRuleTemplateId,
      templateId,
    }: {
      routerRuleTemplateId: string;
      templateId: string;
    },
    queryKey?: TQueryKey,
    options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
  ) =>
    useQuery<TData, TError>({
      queryKey:
        Common.UseRouterRuleTemplatesServiceGetRouterRuleTemplatesByRouterRuleTemplateIdKeyFn(
          { routerRuleTemplateId, templateId },
          queryKey
        ),
      queryFn: () =>
        RouterRuleTemplatesService.getRouterRuleTemplatesByRouterRuleTemplateId(
          { routerRuleTemplateId, templateId }
        ) as TData,
      ...options,
    });
export const useAuthServicePostAuthRegister = <
  TData = Common.AuthServicePostAuthRegisterMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: RegisterRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: RegisterRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      AuthService.postAuthRegister({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useAuthServicePostAuthRegisterVerify = <
  TData = Common.AuthServicePostAuthRegisterVerifyMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: RegisterVerifyRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: RegisterVerifyRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      AuthService.postAuthRegisterVerify({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useAuthServicePostAuthRegisterVerifyResend = <
  TData = Common.AuthServicePostAuthRegisterVerifyResendMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: RegisterRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: RegisterRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      AuthService.postAuthRegisterVerifyResend({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useAuthServicePostAuthSignIn = <
  TData = Common.AuthServicePostAuthSignInMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: SignInRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: SignInRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      AuthService.postAuthSignIn({ requestBody }) as unknown as Promise<TData>,
    ...options,
  });
export const useAuthServicePostAuthSignInVerify = <
  TData = Common.AuthServicePostAuthSignInVerifyMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: SignInVerifyRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: SignInVerifyRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      AuthService.postAuthSignInVerify({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useAuthServicePostAuthEmailVerifySend = <
  TData = Common.AuthServicePostAuthEmailVerifySendMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: RegisterRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: RegisterRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      AuthService.postAuthEmailVerifySend({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useAuthServicePostAuthEmailVerify = <
  TData = Common.AuthServicePostAuthEmailVerifyMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: EmailVerifyRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: EmailVerifyRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      AuthService.postAuthEmailVerify({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const usePasswordManagementServicePostAuthPasswordReset = <
  TData = Common.PasswordManagementServicePostAuthPasswordResetMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: PasswordResetRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: PasswordResetRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      PasswordManagementService.postAuthPasswordReset({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const usePasswordManagementServicePostAuthPasswordResetVerify = <
  TData = Common.PasswordManagementServicePostAuthPasswordResetVerifyMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: PasswordResetVerifyRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: PasswordResetVerifyRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      PasswordManagementService.postAuthPasswordResetVerify({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const usePasswordManagementServicePostAuthPasswordChange = <
  TData = Common.PasswordManagementServicePostAuthPasswordChangeMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: PasswordChangeRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: PasswordChangeRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      PasswordManagementService.postAuthPasswordChange({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useApiKeysServicePostApiKeys = <
  TData = Common.ApiKeysServicePostApiKeysMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: CreateApiKeyRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: CreateApiKeyRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      ApiKeysService.postApiKeys({ requestBody }) as unknown as Promise<TData>,
    ...options,
  });
export const useOrganizationsServicePostOrgsFirst = <
  TData = Common.OrganizationsServicePostOrgsFirstMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: CreateOrganizationRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: CreateOrganizationRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      OrganizationsService.postOrgsFirst({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useOrganizationsServicePostOrgsCurrentByOrgId = <
  TData = Common.OrganizationsServicePostOrgsCurrentByOrgIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        orgId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      orgId: string;
    },
    TContext
  >({
    mutationFn: ({ orgId }) =>
      OrganizationsService.postOrgsCurrentByOrgId({
        orgId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useInvitationsServicePostInvites = <
  TData = Common.InvitationsServicePostInvitesMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: CreateInvitationRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: CreateInvitationRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      InvitationsService.postInvites({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useMembersServicePostMembers = <
  TData = Common.MembersServicePostMembersMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: AddOrganizationMember;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: AddOrganizationMember;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      MembersService.postMembers({ requestBody }) as unknown as Promise<TData>,
    ...options,
  });
export const useMembersServicePostMembersByUserIdRole = <
  TData = Common.MembersServicePostMembersByUserIdRoleMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: AddMemberRole;
        userId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: AddMemberRole;
      userId: string;
    },
    TContext
  >({
    mutationFn: ({ requestBody, userId }) =>
      MembersService.postMembersByUserIdRole({
        requestBody,
        userId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useWorkspacesServicePostWorkspaces = <
  TData = Common.WorkspacesServicePostWorkspacesMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: CreateWorkspaceRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: CreateWorkspaceRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      WorkspacesService.postWorkspaces({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useWorkspacesServicePostWorkspacesByWorkspaceIdMembersByUserIdRole =
  <
    TData = Common.WorkspacesServicePostWorkspacesByWorkspaceIdMembersByUserIdRoleMutationResult,
    TError = unknown,
    TContext = unknown
  >(
    options?: Omit<
      UseMutationOptions<
        TData,
        TError,
        {
          requestBody?: WorkspaceMemberRole;
          userId: string;
          workspaceId: string;
        },
        TContext
      >,
      "mutationFn"
    >
  ) =>
    useMutation<
      TData,
      TError,
      {
        requestBody?: WorkspaceMemberRole;
        userId: string;
        workspaceId: string;
      },
      TContext
    >({
      mutationFn: ({ requestBody, userId, workspaceId }) =>
        WorkspacesService.postWorkspacesByWorkspaceIdMembersByUserIdRole({
          requestBody,
          userId,
          workspaceId,
        }) as unknown as Promise<TData>,
      ...options,
    });
export const useSettingsServicePostSettingsCustom = <
  TData = Common.SettingsServicePostSettingsCustomMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: CreateSetting;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: CreateSetting;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      SettingsService.postSettingsCustom({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useWorkspaceSettingsServicePostWorkspacesByWorkspaceIdSettingsCustom =
  <
    TData = Common.WorkspaceSettingsServicePostWorkspacesByWorkspaceIdSettingsCustomMutationResult,
    TError = unknown,
    TContext = unknown
  >(
    options?: Omit<
      UseMutationOptions<
        TData,
        TError,
        {
          requestBody?: CreateSetting;
          workspaceId: string;
        },
        TContext
      >,
      "mutationFn"
    >
  ) =>
    useMutation<
      TData,
      TError,
      {
        requestBody?: CreateSetting;
        workspaceId: string;
      },
      TContext
    >({
      mutationFn: ({ requestBody, workspaceId }) =>
        WorkspaceSettingsService.postWorkspacesByWorkspaceIdSettingsCustom({
          requestBody,
          workspaceId,
        }) as unknown as Promise<TData>,
      ...options,
    });
export const useQrCodeRouterRulesServicePostCodesByCodeIdRouterRules = <
  TData = Common.QrCodeRouterRulesServicePostCodesByCodeIdRouterRulesMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        codeId: string;
        requestBody?: unknown;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      codeId: string;
      requestBody?: unknown;
    },
    TContext
  >({
    mutationFn: ({ codeId, requestBody }) =>
      QrCodeRouterRulesService.postCodesByCodeIdRouterRules({
        codeId,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodesServicePostCodes = <
  TData = Common.QrCodesServicePostCodesMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: CreateCodeRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: CreateCodeRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      QrCodesService.postCodes({ requestBody }) as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodesServicePostCodesByCodeIdRestore = <
  TData = Common.QrCodesServicePostCodesByCodeIdRestoreMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        codeId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      codeId: string;
    },
    TContext
  >({
    mutationFn: ({ codeId }) =>
      QrCodesService.postCodesByCodeIdRestore({
        codeId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodesServicePostCodesValidate = <
  TData = Common.QrCodesServicePostCodesValidateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: GenerateCodeRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: GenerateCodeRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      QrCodesService.postCodesValidate({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodesServicePostCodesByCodeIdValidate = <
  TData = Common.QrCodesServicePostCodesByCodeIdValidateMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        codeId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      codeId: string;
    },
    TContext
  >({
    mutationFn: ({ codeId }) =>
      QrCodesService.postCodesByCodeIdValidate({
        codeId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodesServicePostCodesLinksRefresh = <
  TData = Common.QrCodesServicePostCodesLinksRefreshMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<TData, TError, void, TContext>,
    "mutationFn"
  >
) =>
  useMutation<TData, TError, void, TContext>({
    mutationFn: () =>
      QrCodesService.postCodesLinksRefresh() as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodeLinksServicePostCodesGenerateByType = <
  TData = Common.QrCodeLinksServicePostCodesGenerateByTypeMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: GenerateCodeRequest;
        type: "svg" | "png" | "pdf";
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: GenerateCodeRequest;
      type: "svg" | "png" | "pdf";
    },
    TContext
  >({
    mutationFn: ({ requestBody, type }) =>
      QrCodeLinksService.postCodesGenerateByType({
        requestBody,
        type,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodeVersionsServicePostCodesByCodeIdVersionByVersionRestore =
  <
    TData = Common.QrCodeVersionsServicePostCodesByCodeIdVersionByVersionRestoreMutationResult,
    TError = unknown,
    TContext = unknown
  >(
    options?: Omit<
      UseMutationOptions<
        TData,
        TError,
        {
          codeId: string;
          version: number;
        },
        TContext
      >,
      "mutationFn"
    >
  ) =>
    useMutation<
      TData,
      TError,
      {
        codeId: string;
        version: number;
      },
      TContext
    >({
      mutationFn: ({ codeId, version }) =>
        QrCodeVersionsService.postCodesByCodeIdVersionByVersionRestore({
          codeId,
          version,
        }) as unknown as Promise<TData>,
      ...options,
    });
export const useTemplatesServicePostTemplates = <
  TData = Common.TemplatesServicePostTemplatesMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: TemplateBase;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: TemplateBase;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      TemplatesService.postTemplates({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useStylesServicePostStyles = <
  TData = Common.StylesServicePostStylesMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: StyleBase;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: StyleBase;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      StylesService.postStyles({ requestBody }) as unknown as Promise<TData>,
    ...options,
  });
export const useTextsServicePostTexts = <
  TData = Common.TextsServicePostTextsMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: TextBase;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: TextBase;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      TextsService.postTexts({ requestBody }) as unknown as Promise<TData>,
    ...options,
  });
export const useBordersServicePostBorders = <
  TData = Common.BordersServicePostBordersMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: BorderBase;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: BorderBase;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      BordersService.postBorders({ requestBody }) as unknown as Promise<TData>,
    ...options,
  });
export const useRouterRuleTemplatesServicePostRouterRuleTemplates = <
  TData = Common.RouterRuleTemplatesServicePostRouterRuleTemplatesMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: unknown;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: unknown;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      RouterRuleTemplatesService.postRouterRuleTemplates({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useRouterRuleTemplatesServicePostWorkspacesByWorkspaceIdRouterRuleTemplates =
  <
    TData = Common.RouterRuleTemplatesServicePostWorkspacesByWorkspaceIdRouterRuleTemplatesMutationResult,
    TError = unknown,
    TContext = unknown
  >(
    options?: Omit<
      UseMutationOptions<
        TData,
        TError,
        {
          requestBody?: unknown;
          workspaceId: string;
        },
        TContext
      >,
      "mutationFn"
    >
  ) =>
    useMutation<
      TData,
      TError,
      {
        requestBody?: unknown;
        workspaceId: string;
      },
      TContext
    >({
      mutationFn: ({ requestBody, workspaceId }) =>
        RouterRuleTemplatesService.postWorkspacesByWorkspaceIdRouterRuleTemplates(
          { requestBody, workspaceId }
        ) as unknown as Promise<TData>,
      ...options,
    });
export const useApiKeysServicePutApiKeysByApiKeyId = <
  TData = Common.ApiKeysServicePutApiKeysByApiKeyIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        apiKeyId: string;
        requestBody?: UpdateApiKeyRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      apiKeyId: string;
      requestBody?: UpdateApiKeyRequest;
    },
    TContext
  >({
    mutationFn: ({ apiKeyId, requestBody }) =>
      ApiKeysService.putApiKeysByApiKeyId({
        apiKeyId,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useApiKeysServicePutApiKeysByApiKeyIdStatus = <
  TData = Common.ApiKeysServicePutApiKeysByApiKeyIdStatusMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        apiKeyId: string;
        requestBody?: StatusChangeApiKeyRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      apiKeyId: string;
      requestBody?: StatusChangeApiKeyRequest;
    },
    TContext
  >({
    mutationFn: ({ apiKeyId, requestBody }) =>
      ApiKeysService.putApiKeysByApiKeyIdStatus({
        apiKeyId,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useOrganizationsServicePutOrgs = <
  TData = Common.OrganizationsServicePutOrgsMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: UpdateOrganizationRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: UpdateOrganizationRequest;
    },
    TContext
  >({
    mutationFn: ({ requestBody }) =>
      OrganizationsService.putOrgs({
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useWorkspacesServicePutWorkspacesByWorkspaceId = <
  TData = Common.WorkspacesServicePutWorkspacesByWorkspaceIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: UpdateWorkspaceRequest;
        workspaceId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: UpdateWorkspaceRequest;
      workspaceId: string;
    },
    TContext
  >({
    mutationFn: ({ requestBody, workspaceId }) =>
      WorkspacesService.putWorkspacesByWorkspaceId({
        requestBody,
        workspaceId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useSettingsServicePutSettingsCustomBySettingSlug = <
  TData = Common.SettingsServicePutSettingsCustomBySettingSlugMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: UpdateSetting;
        settingSlug: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: UpdateSetting;
      settingSlug: string;
    },
    TContext
  >({
    mutationFn: ({ requestBody, settingSlug }) =>
      SettingsService.putSettingsCustomBySettingSlug({
        requestBody,
        settingSlug,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useSettingsServicePutSettingsServiceBySettingSlug = <
  TData = Common.SettingsServicePutSettingsServiceBySettingSlugMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: UpdateSetting;
        settingSlug: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: UpdateSetting;
      settingSlug: string;
    },
    TContext
  >({
    mutationFn: ({ requestBody, settingSlug }) =>
      SettingsService.putSettingsServiceBySettingSlug({
        requestBody,
        settingSlug,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useWorkspaceSettingsServicePutWorkspacesByWorkspaceIdSettingsCustomBySettingSlug =
  <
    TData = Common.WorkspaceSettingsServicePutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugMutationResult,
    TError = unknown,
    TContext = unknown
  >(
    options?: Omit<
      UseMutationOptions<
        TData,
        TError,
        {
          requestBody?: UpdateSetting;
          settingSlug: string;
          workspaceId: string;
        },
        TContext
      >,
      "mutationFn"
    >
  ) =>
    useMutation<
      TData,
      TError,
      {
        requestBody?: UpdateSetting;
        settingSlug: string;
        workspaceId: string;
      },
      TContext
    >({
      mutationFn: ({ requestBody, settingSlug, workspaceId }) =>
        WorkspaceSettingsService.putWorkspacesByWorkspaceIdSettingsCustomBySettingSlug(
          { requestBody, settingSlug, workspaceId }
        ) as unknown as Promise<TData>,
      ...options,
    });
export const useWorkspaceSettingsServicePutWorkspacesByWorkspaceIdSettingsServiceBySettingSlug =
  <
    TData = Common.WorkspaceSettingsServicePutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugMutationResult,
    TError = unknown,
    TContext = unknown
  >(
    options?: Omit<
      UseMutationOptions<
        TData,
        TError,
        {
          requestBody?: UpdateSetting;
          settingSlug: string;
          workspaceId: string;
        },
        TContext
      >,
      "mutationFn"
    >
  ) =>
    useMutation<
      TData,
      TError,
      {
        requestBody?: UpdateSetting;
        settingSlug: string;
        workspaceId: string;
      },
      TContext
    >({
      mutationFn: ({ requestBody, settingSlug, workspaceId }) =>
        WorkspaceSettingsService.putWorkspacesByWorkspaceIdSettingsServiceBySettingSlug(
          { requestBody, settingSlug, workspaceId }
        ) as unknown as Promise<TData>,
      ...options,
    });
export const useQrCodeRouterRulesServicePutCodesByCodeIdRouterRulesByRouterRuleId =
  <
    TData = Common.QrCodeRouterRulesServicePutCodesByCodeIdRouterRulesByRouterRuleIdMutationResult,
    TError = unknown,
    TContext = unknown
  >(
    options?: Omit<
      UseMutationOptions<
        TData,
        TError,
        {
          codeId: string;
          requestBody?: unknown;
          routerRuleId: string;
        },
        TContext
      >,
      "mutationFn"
    >
  ) =>
    useMutation<
      TData,
      TError,
      {
        codeId: string;
        requestBody?: unknown;
        routerRuleId: string;
      },
      TContext
    >({
      mutationFn: ({ codeId, requestBody, routerRuleId }) =>
        QrCodeRouterRulesService.putCodesByCodeIdRouterRulesByRouterRuleId({
          codeId,
          requestBody,
          routerRuleId,
        }) as unknown as Promise<TData>,
      ...options,
    });
export const useQrCodesServicePutCodesByCodeId = <
  TData = Common.QrCodesServicePutCodesByCodeIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        codeId: string;
        requestBody?: UpdateCodeRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      codeId: string;
      requestBody?: UpdateCodeRequest;
    },
    TContext
  >({
    mutationFn: ({ codeId, requestBody }) =>
      QrCodesService.putCodesByCodeId({
        codeId,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodesServicePutCodesByCodeIdOptions = <
  TData = Common.QrCodesServicePutCodesByCodeIdOptionsMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        codeId: string;
        requestBody?: UpdateCodeOptionsRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      codeId: string;
      requestBody?: UpdateCodeOptionsRequest;
    },
    TContext
  >({
    mutationFn: ({ codeId, requestBody }) =>
      QrCodesService.putCodesByCodeIdOptions({
        codeId,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useTemplatesServicePutTemplatesByTemplateId = <
  TData = Common.TemplatesServicePutTemplatesByTemplateIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: UpdateTemplate;
        templateId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: UpdateTemplate;
      templateId: string;
    },
    TContext
  >({
    mutationFn: ({ requestBody, templateId }) =>
      TemplatesService.putTemplatesByTemplateId({
        requestBody,
        templateId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useTemplatesServicePutTemplatesByTemplateIdOptions = <
  TData = Common.TemplatesServicePutTemplatesByTemplateIdOptionsMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: UpdateTemplateOptionsRequest;
        templateId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: UpdateTemplateOptionsRequest;
      templateId: string;
    },
    TContext
  >({
    mutationFn: ({ requestBody, templateId }) =>
      TemplatesService.putTemplatesByTemplateIdOptions({
        requestBody,
        templateId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useStylesServicePutStylesByStyleId = <
  TData = Common.StylesServicePutStylesByStyleIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: UpdateStyle;
        styleId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: UpdateStyle;
      styleId: string;
    },
    TContext
  >({
    mutationFn: ({ requestBody, styleId }) =>
      StylesService.putStylesByStyleId({
        requestBody,
        styleId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useStylesServicePutStylesByStyleIdOptions = <
  TData = Common.StylesServicePutStylesByStyleIdOptionsMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: UpdateStyleOptionsRequest;
        styleId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: UpdateStyleOptionsRequest;
      styleId: string;
    },
    TContext
  >({
    mutationFn: ({ requestBody, styleId }) =>
      StylesService.putStylesByStyleIdOptions({
        requestBody,
        styleId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useTextsServicePutTextsByTextId = <
  TData = Common.TextsServicePutTextsByTextIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: UpdateText;
        textId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: UpdateText;
      textId: string;
    },
    TContext
  >({
    mutationFn: ({ requestBody, textId }) =>
      TextsService.putTextsByTextId({
        requestBody,
        textId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useTextsServicePutTextsByTextIdOptions = <
  TData = Common.TextsServicePutTextsByTextIdOptionsMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        requestBody?: UpdateTextOptionsRequest;
        textId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      requestBody?: UpdateTextOptionsRequest;
      textId: string;
    },
    TContext
  >({
    mutationFn: ({ requestBody, textId }) =>
      TextsService.putTextsByTextIdOptions({
        requestBody,
        textId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useBordersServicePutBordersByBorderId = <
  TData = Common.BordersServicePutBordersByBorderIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        borderId: string;
        requestBody?: UpdateBorder;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      borderId: string;
      requestBody?: UpdateBorder;
    },
    TContext
  >({
    mutationFn: ({ borderId, requestBody }) =>
      BordersService.putBordersByBorderId({
        borderId,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useBordersServicePutBordersByBorderIdOptions = <
  TData = Common.BordersServicePutBordersByBorderIdOptionsMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        borderId: string;
        requestBody?: UpdateBorderOptionsRequest;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      borderId: string;
      requestBody?: UpdateBorderOptionsRequest;
    },
    TContext
  >({
    mutationFn: ({ borderId, requestBody }) =>
      BordersService.putBordersByBorderIdOptions({
        borderId,
        requestBody,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useRouterRuleTemplatesServicePutRouterRuleTemplatesByRouterRuleTemplateId =
  <
    TData = Common.RouterRuleTemplatesServicePutRouterRuleTemplatesByRouterRuleTemplateIdMutationResult,
    TError = unknown,
    TContext = unknown
  >(
    options?: Omit<
      UseMutationOptions<
        TData,
        TError,
        {
          requestBody?: unknown;
          routerRuleTemplateId: string;
          templateId: string;
        },
        TContext
      >,
      "mutationFn"
    >
  ) =>
    useMutation<
      TData,
      TError,
      {
        requestBody?: unknown;
        routerRuleTemplateId: string;
        templateId: string;
      },
      TContext
    >({
      mutationFn: ({ requestBody, routerRuleTemplateId, templateId }) =>
        RouterRuleTemplatesService.putRouterRuleTemplatesByRouterRuleTemplateId(
          { requestBody, routerRuleTemplateId, templateId }
        ) as unknown as Promise<TData>,
      ...options,
    });
export const useApiKeysServiceDeleteApiKeysByApiKeyId = <
  TData = Common.ApiKeysServiceDeleteApiKeysByApiKeyIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        apiKeyId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      apiKeyId: string;
    },
    TContext
  >({
    mutationFn: ({ apiKeyId }) =>
      ApiKeysService.deleteApiKeysByApiKeyId({
        apiKeyId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useInvitationsServiceDeleteInvitesByInvitationId = <
  TData = Common.InvitationsServiceDeleteInvitesByInvitationIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        invitationId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      invitationId: string;
    },
    TContext
  >({
    mutationFn: ({ invitationId }) =>
      InvitationsService.deleteInvitesByInvitationId({
        invitationId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useMembersServiceDeleteMembersByUserId = <
  TData = Common.MembersServiceDeleteMembersByUserIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        userId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      userId: string;
    },
    TContext
  >({
    mutationFn: ({ userId }) =>
      MembersService.deleteMembersByUserId({
        userId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useMembersServiceDeleteMembersByUserIdRoleByRoleName = <
  TData = Common.MembersServiceDeleteMembersByUserIdRoleByRoleNameMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        roleName: string;
        userId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      roleName: string;
      userId: string;
    },
    TContext
  >({
    mutationFn: ({ roleName, userId }) =>
      MembersService.deleteMembersByUserIdRoleByRoleName({
        roleName,
        userId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useWorkspacesServiceDeleteWorkspacesByWorkspaceId = <
  TData = Common.WorkspacesServiceDeleteWorkspacesByWorkspaceIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        workspaceId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      workspaceId: string;
    },
    TContext
  >({
    mutationFn: ({ workspaceId }) =>
      WorkspacesService.deleteWorkspacesByWorkspaceId({
        workspaceId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useWorkspacesServiceDeleteWorkspacesByWorkspaceIdMembersByUserIdRole =
  <
    TData = Common.WorkspacesServiceDeleteWorkspacesByWorkspaceIdMembersByUserIdRoleMutationResult,
    TError = unknown,
    TContext = unknown
  >(
    options?: Omit<
      UseMutationOptions<
        TData,
        TError,
        {
          userId: string;
          workspaceId: string;
        },
        TContext
      >,
      "mutationFn"
    >
  ) =>
    useMutation<
      TData,
      TError,
      {
        userId: string;
        workspaceId: string;
      },
      TContext
    >({
      mutationFn: ({ userId, workspaceId }) =>
        WorkspacesService.deleteWorkspacesByWorkspaceIdMembersByUserIdRole({
          userId,
          workspaceId,
        }) as unknown as Promise<TData>,
      ...options,
    });
export const useSettingsServiceDeleteSettingsCustomBySettingSlug = <
  TData = Common.SettingsServiceDeleteSettingsCustomBySettingSlugMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        settingSlug: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      settingSlug: string;
    },
    TContext
  >({
    mutationFn: ({ settingSlug }) =>
      SettingsService.deleteSettingsCustomBySettingSlug({
        settingSlug,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useWorkspaceSettingsServiceDeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlug =
  <
    TData = Common.WorkspaceSettingsServiceDeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugMutationResult,
    TError = unknown,
    TContext = unknown
  >(
    options?: Omit<
      UseMutationOptions<
        TData,
        TError,
        {
          settingSlug: string;
          workspaceId: string;
        },
        TContext
      >,
      "mutationFn"
    >
  ) =>
    useMutation<
      TData,
      TError,
      {
        settingSlug: string;
        workspaceId: string;
      },
      TContext
    >({
      mutationFn: ({ settingSlug, workspaceId }) =>
        WorkspaceSettingsService.deleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlug(
          { settingSlug, workspaceId }
        ) as unknown as Promise<TData>,
      ...options,
    });
export const useWorkspaceSettingsServiceDeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlug =
  <
    TData = Common.WorkspaceSettingsServiceDeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugMutationResult,
    TError = unknown,
    TContext = unknown
  >(
    options?: Omit<
      UseMutationOptions<
        TData,
        TError,
        {
          settingSlug: string;
          workspaceId: string;
        },
        TContext
      >,
      "mutationFn"
    >
  ) =>
    useMutation<
      TData,
      TError,
      {
        settingSlug: string;
        workspaceId: string;
      },
      TContext
    >({
      mutationFn: ({ settingSlug, workspaceId }) =>
        WorkspaceSettingsService.deleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlug(
          { settingSlug, workspaceId }
        ) as unknown as Promise<TData>,
      ...options,
    });
export const useQrCodeRouterRulesServiceDeleteCodesByCodeIdRouterRulesByRouterRuleId =
  <
    TData = Common.QrCodeRouterRulesServiceDeleteCodesByCodeIdRouterRulesByRouterRuleIdMutationResult,
    TError = unknown,
    TContext = unknown
  >(
    options?: Omit<
      UseMutationOptions<
        TData,
        TError,
        {
          codeId: string;
          routerRuleId: string;
        },
        TContext
      >,
      "mutationFn"
    >
  ) =>
    useMutation<
      TData,
      TError,
      {
        codeId: string;
        routerRuleId: string;
      },
      TContext
    >({
      mutationFn: ({ codeId, routerRuleId }) =>
        QrCodeRouterRulesService.deleteCodesByCodeIdRouterRulesByRouterRuleId({
          codeId,
          routerRuleId,
        }) as unknown as Promise<TData>,
      ...options,
    });
export const useQrCodesServiceDeleteCodesByCodeId = <
  TData = Common.QrCodesServiceDeleteCodesByCodeIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        codeId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      codeId: string;
    },
    TContext
  >({
    mutationFn: ({ codeId }) =>
      QrCodesService.deleteCodesByCodeId({
        codeId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodesServiceDeleteCodes = <
  TData = Common.QrCodesServiceDeleteCodesMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<TData, TError, void, TContext>,
    "mutationFn"
  >
) =>
  useMutation<TData, TError, void, TContext>({
    mutationFn: () => QrCodesService.deleteCodes() as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodesServiceDeleteCodesPermanent = <
  TData = Common.QrCodesServiceDeleteCodesPermanentMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<TData, TError, void, TContext>,
    "mutationFn"
  >
) =>
  useMutation<TData, TError, void, TContext>({
    mutationFn: () =>
      QrCodesService.deleteCodesPermanent() as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodesServiceDeleteCodesByCodeIdPermanent = <
  TData = Common.QrCodesServiceDeleteCodesByCodeIdPermanentMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        codeId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      codeId: string;
    },
    TContext
  >({
    mutationFn: ({ codeId }) =>
      QrCodesService.deleteCodesByCodeIdPermanent({
        codeId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodeLinksServiceDeleteCodesByCodeIdVersionsByVersionLinks = <
  TData = Common.QrCodeLinksServiceDeleteCodesByCodeIdVersionsByVersionLinksMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        codeId: string;
        version: number;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      codeId: string;
      version: number;
    },
    TContext
  >({
    mutationFn: ({ codeId, version }) =>
      QrCodeLinksService.deleteCodesByCodeIdVersionsByVersionLinks({
        codeId,
        version,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodeLinksServiceDeleteCodesByCodeIdVersionsByVersionLinksByType =
  <
    TData = Common.QrCodeLinksServiceDeleteCodesByCodeIdVersionsByVersionLinksByTypeMutationResult,
    TError = unknown,
    TContext = unknown
  >(
    options?: Omit<
      UseMutationOptions<
        TData,
        TError,
        {
          codeId: string;
          type: "svg" | "png" | "pdf";
          version: number;
        },
        TContext
      >,
      "mutationFn"
    >
  ) =>
    useMutation<
      TData,
      TError,
      {
        codeId: string;
        type: "svg" | "png" | "pdf";
        version: number;
      },
      TContext
    >({
      mutationFn: ({ codeId, type, version }) =>
        QrCodeLinksService.deleteCodesByCodeIdVersionsByVersionLinksByType({
          codeId,
          type,
          version,
        }) as unknown as Promise<TData>,
      ...options,
    });
export const useQrCodeLinksServiceDeleteCodesByCodeIdVersionsLinks = <
  TData = Common.QrCodeLinksServiceDeleteCodesByCodeIdVersionsLinksMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        codeId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      codeId: string;
    },
    TContext
  >({
    mutationFn: ({ codeId }) =>
      QrCodeLinksService.deleteCodesByCodeIdVersionsLinks({
        codeId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodeLinksServiceDeleteCodesByCodeIdVersionsLinksByType = <
  TData = Common.QrCodeLinksServiceDeleteCodesByCodeIdVersionsLinksByTypeMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        codeId: string;
        type: "svg" | "png" | "pdf";
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      codeId: string;
      type: "svg" | "png" | "pdf";
    },
    TContext
  >({
    mutationFn: ({ codeId, type }) =>
      QrCodeLinksService.deleteCodesByCodeIdVersionsLinksByType({
        codeId,
        type,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodeLinksServiceDeleteCodesByCodeIdLinks = <
  TData = Common.QrCodeLinksServiceDeleteCodesByCodeIdLinksMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        codeId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      codeId: string;
    },
    TContext
  >({
    mutationFn: ({ codeId }) =>
      QrCodeLinksService.deleteCodesByCodeIdLinks({
        codeId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodeLinksServiceDeleteCodesByCodeIdLinksByType = <
  TData = Common.QrCodeLinksServiceDeleteCodesByCodeIdLinksByTypeMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        codeId: string;
        type: "svg" | "png" | "pdf";
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      codeId: string;
      type: "svg" | "png" | "pdf";
    },
    TContext
  >({
    mutationFn: ({ codeId, type }) =>
      QrCodeLinksService.deleteCodesByCodeIdLinksByType({
        codeId,
        type,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useQrCodeVersionsServiceDeleteCodesByCodeIdVersions = <
  TData = Common.QrCodeVersionsServiceDeleteCodesByCodeIdVersionsMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        codeId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      codeId: string;
    },
    TContext
  >({
    mutationFn: ({ codeId }) =>
      QrCodeVersionsService.deleteCodesByCodeIdVersions({
        codeId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useTemplatesServiceDeleteTemplatesByTemplateId = <
  TData = Common.TemplatesServiceDeleteTemplatesByTemplateIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        templateId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      templateId: string;
    },
    TContext
  >({
    mutationFn: ({ templateId }) =>
      TemplatesService.deleteTemplatesByTemplateId({
        templateId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useStylesServiceDeleteStylesByStyleId = <
  TData = Common.StylesServiceDeleteStylesByStyleIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        styleId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      styleId: string;
    },
    TContext
  >({
    mutationFn: ({ styleId }) =>
      StylesService.deleteStylesByStyleId({
        styleId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useTextsServiceDeleteTextsByTextId = <
  TData = Common.TextsServiceDeleteTextsByTextIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        textId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      textId: string;
    },
    TContext
  >({
    mutationFn: ({ textId }) =>
      TextsService.deleteTextsByTextId({ textId }) as unknown as Promise<TData>,
    ...options,
  });
export const useBordersServiceDeleteBordersByBorderId = <
  TData = Common.BordersServiceDeleteBordersByBorderIdMutationResult,
  TError = unknown,
  TContext = unknown
>(
  options?: Omit<
    UseMutationOptions<
      TData,
      TError,
      {
        borderId: string;
      },
      TContext
    >,
    "mutationFn"
  >
) =>
  useMutation<
    TData,
    TError,
    {
      borderId: string;
    },
    TContext
  >({
    mutationFn: ({ borderId }) =>
      BordersService.deleteBordersByBorderId({
        borderId,
      }) as unknown as Promise<TData>,
    ...options,
  });
export const useRouterRuleTemplatesServiceDeleteRouterRuleTemplatesByRouterRuleTemplateId =
  <
    TData = Common.RouterRuleTemplatesServiceDeleteRouterRuleTemplatesByRouterRuleTemplateIdMutationResult,
    TError = unknown,
    TContext = unknown
  >(
    options?: Omit<
      UseMutationOptions<
        TData,
        TError,
        {
          routerRuleTemplateId: string;
          templateId: string;
        },
        TContext
      >,
      "mutationFn"
    >
  ) =>
    useMutation<
      TData,
      TError,
      {
        routerRuleTemplateId: string;
        templateId: string;
      },
      TContext
    >({
      mutationFn: ({ routerRuleTemplateId, templateId }) =>
        RouterRuleTemplatesService.deleteRouterRuleTemplatesByRouterRuleTemplateId(
          { routerRuleTemplateId, templateId }
        ) as unknown as Promise<TData>,
      ...options,
    });
