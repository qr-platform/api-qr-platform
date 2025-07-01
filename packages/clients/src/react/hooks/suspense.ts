// generated with @7nohe/openapi-react-query-codegen@1.6.2

import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";
import {
  ApiKeysService,
  AuthService,
  BordersService,
  CountryCodesService,
  InvitationsService,
  MembersService,
  OrganizationsService,
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
import * as Common from "./common";
export const useAuthServiceGetAuthMeSuspense = <
  TData = Common.AuthServiceGetAuthMeDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseAuthServiceGetAuthMeKeyFn(queryKey),
    queryFn: () => AuthService.getAuthMe() as TData,
    ...options,
  });
export const useAuthServiceGetAuthSignOutSuspense = <
  TData = Common.AuthServiceGetAuthSignOutDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseAuthServiceGetAuthSignOutKeyFn(queryKey),
    queryFn: () => AuthService.getAuthSignOut() as TData,
    ...options,
  });
export const useApiKeysServiceGetApiKeysSuspense = <
  TData = Common.ApiKeysServiceGetApiKeysDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseApiKeysServiceGetApiKeysKeyFn(queryKey),
    queryFn: () => ApiKeysService.getApiKeys() as TData,
    ...options,
  });
export const useApiKeysServiceGetApiKeysByApiKeyIdSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseApiKeysServiceGetApiKeysByApiKeyIdKeyFn(
      { apiKeyId },
      queryKey
    ),
    queryFn: () => ApiKeysService.getApiKeysByApiKeyId({ apiKeyId }) as TData,
    ...options,
  });
export const useOrganizationsServiceGetOrgsCurrentSuspense = <
  TData = Common.OrganizationsServiceGetOrgsCurrentDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseOrganizationsServiceGetOrgsCurrentKeyFn(queryKey),
    queryFn: () => OrganizationsService.getOrgsCurrent() as TData,
    ...options,
  });
export const useInvitationsServiceGetInvitesSuspense = <
  TData = Common.InvitationsServiceGetInvitesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseInvitationsServiceGetInvitesKeyFn(queryKey),
    queryFn: () => InvitationsService.getInvites() as TData,
    ...options,
  });
export const useInvitationsServiceGetInvitesMeSuspense = <
  TData = Common.InvitationsServiceGetInvitesMeDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseInvitationsServiceGetInvitesMeKeyFn(queryKey),
    queryFn: () => InvitationsService.getInvitesMe() as TData,
    ...options,
  });
export const useInvitationsServiceGetInvitesByTokenAcceptSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseInvitationsServiceGetInvitesByTokenAcceptKeyFn(
      { token },
      queryKey
    ),
    queryFn: () =>
      InvitationsService.getInvitesByTokenAccept({ token }) as TData,
    ...options,
  });
export const useInvitationsServiceGetInvitesByTokenDeclineSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseInvitationsServiceGetInvitesByTokenDeclineKeyFn(
      { token },
      queryKey
    ),
    queryFn: () =>
      InvitationsService.getInvitesByTokenDecline({ token }) as TData,
    ...options,
  });
export const useMembersServiceGetMembersSuspense = <
  TData = Common.MembersServiceGetMembersDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseMembersServiceGetMembersKeyFn(queryKey),
    queryFn: () => MembersService.getMembers() as TData,
    ...options,
  });
export const useMembersServiceGetMembersByUserIdRolesSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseMembersServiceGetMembersByUserIdRolesKeyFn(
      { userId },
      queryKey
    ),
    queryFn: () => MembersService.getMembersByUserIdRoles({ userId }) as TData,
    ...options,
  });
export const useWorkspacesServiceGetWorkspacesSuspense = <
  TData = Common.WorkspacesServiceGetWorkspacesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseWorkspacesServiceGetWorkspacesKeyFn(queryKey),
    queryFn: () => WorkspacesService.getWorkspaces() as TData,
    ...options,
  });
export const useWorkspacesServiceGetWorkspacesByWorkspaceIdSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseWorkspacesServiceGetWorkspacesByWorkspaceIdKeyFn(
      { workspaceId },
      queryKey
    ),
    queryFn: () =>
      WorkspacesService.getWorkspacesByWorkspaceId({ workspaceId }) as TData,
    ...options,
  });
export const useWorkspacesServiceGetWorkspacesByWorkspaceIdMembersByUserIdRoleSuspense =
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
    useSuspenseQuery<TData, TError>({
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
export const useWorkspacesServiceGetWorkspacesByWorkspaceIdMembersSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useRolesServiceGetRolesSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseRolesServiceGetRolesKeyFn({ includeScopes }, queryKey),
    queryFn: () => RolesService.getRoles({ includeScopes }) as TData,
    ...options,
  });
export const usePlansServiceGetPlansSuspense = <
  TData = Common.PlansServiceGetPlansDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UsePlansServiceGetPlansKeyFn(queryKey),
    queryFn: () => PlansService.getPlans() as TData,
    ...options,
  });
export const usePlansServiceGetPlansCurrentSuspense = <
  TData = Common.PlansServiceGetPlansCurrentDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UsePlansServiceGetPlansCurrentKeyFn(queryKey),
    queryFn: () => PlansService.getPlansCurrent() as TData,
    ...options,
  });
export const useSettingsServiceGetSettingsSuspense = <
  TData = Common.SettingsServiceGetSettingsDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseSettingsServiceGetSettingsKeyFn(queryKey),
    queryFn: () => SettingsService.getSettings() as TData,
    ...options,
  });
export const useSettingsServiceGetSettingsCustomSuspense = <
  TData = Common.SettingsServiceGetSettingsCustomDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseSettingsServiceGetSettingsCustomKeyFn(queryKey),
    queryFn: () => SettingsService.getSettingsCustom() as TData,
    ...options,
  });
export const useSettingsServiceGetSettingsCustomBySettingSlugSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseSettingsServiceGetSettingsCustomBySettingSlugKeyFn(
      { settingSlug },
      queryKey
    ),
    queryFn: () =>
      SettingsService.getSettingsCustomBySettingSlug({ settingSlug }) as TData,
    ...options,
  });
export const useSettingsServiceGetSettingsCustomBySettingSlugValueSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useSettingsServiceGetSettingsServiceSuspense = <
  TData = Common.SettingsServiceGetSettingsServiceDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseSettingsServiceGetSettingsServiceKeyFn(queryKey),
    queryFn: () => SettingsService.getSettingsService() as TData,
    ...options,
  });
export const useSettingsServiceGetSettingsServiceBySettingSlugSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseSettingsServiceGetSettingsServiceBySettingSlugKeyFn(
      { settingSlug },
      queryKey
    ),
    queryFn: () =>
      SettingsService.getSettingsServiceBySettingSlug({ settingSlug }) as TData,
    ...options,
  });
export const useSettingsServiceGetSettingsServiceBySettingSlugValueSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsSuspense =
  <
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
    useSuspenseQuery<TData, TError>({
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
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomSuspense =
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
    useSuspenseQuery<TData, TError>({
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
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugSuspense =
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
    useSuspenseQuery<TData, TError>({
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
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueSuspense =
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
    useSuspenseQuery<TData, TError>({
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
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceSuspense =
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
    useSuspenseQuery<TData, TError>({
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
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugSuspense =
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
    useSuspenseQuery<TData, TError>({
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
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueSuspense =
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
    useSuspenseQuery<TData, TError>({
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
export const useQrCodeScansServiceGetCodesByCodeIdScansSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesByRouterRuleIdSuspense =
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
    useSuspenseQuery<TData, TError>({
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
export const useQrCodeRouterRulesServiceGetRouterRulesSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useQrCodeRouterRulesServiceGetWorkspacesByWorkspaceIdRouterRulesSuspense =
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
    useSuspenseQuery<TData, TError>({
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
export const useQrCodesServiceGetCodesDeletedSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useQrCodesServiceGetCodesByCodeIdSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseQrCodesServiceGetCodesByCodeIdKeyFn(
      { codeId },
      queryKey
    ),
    queryFn: () => QrCodesService.getCodesByCodeId({ codeId }) as TData,
    ...options,
  });
export const useQrCodesServiceGetCodesSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useQrCodeLinksServiceGetCodesLinksSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeSuspense =
  <
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
    useSuspenseQuery<TData, TError>({
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
export const useQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeLinkSuspense =
  <
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
    useSuspenseQuery<TData, TError>({
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
export const useQrCodeLinksServiceGetCodesByCodeIdByTypeSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseQrCodeLinksServiceGetCodesByCodeIdByTypeKeyFn(
      { codeId, type },
      queryKey
    ),
    queryFn: () =>
      QrCodeLinksService.getCodesByCodeIdByType({ codeId, type }) as TData,
    ...options,
  });
export const useQrCodeLinksServiceGetCodesByCodeIdByTypeLinkSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseQrCodeLinksServiceGetCodesByCodeIdByTypeLinkKeyFn(
      { codeId, type },
      queryKey
    ),
    queryFn: () =>
      QrCodeLinksService.getCodesByCodeIdByTypeLink({ codeId, type }) as TData,
    ...options,
  });
export const useQrCodeVersionsServiceGetCodesByCodeIdVersionByVersionSuspense =
  <
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
    useSuspenseQuery<TData, TError>({
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
export const useQrCodeVersionsServiceGetCodesByCodeIdVersionsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseQrCodeVersionsServiceGetCodesByCodeIdVersionsKeyFn(
      { codeId },
      queryKey
    ),
    queryFn: () =>
      QrCodeVersionsService.getCodesByCodeIdVersions({ codeId }) as TData,
    ...options,
  });
export const useTemplatesServiceGetTemplatesSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTemplatesServiceGetTemplatesKeyFn({ name }, queryKey),
    queryFn: () => TemplatesService.getTemplates({ name }) as TData,
    ...options,
  });
export const useTemplatesServiceGetTemplatesBaseSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTemplatesServiceGetTemplatesBaseKeyFn(
      { name },
      queryKey
    ),
    queryFn: () => TemplatesService.getTemplatesBase({ name }) as TData,
    ...options,
  });
export const useTemplatesServiceGetTemplatesByTemplateIdSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTemplatesServiceGetTemplatesByTemplateIdKeyFn(
      { templateId },
      queryKey
    ),
    queryFn: () =>
      TemplatesService.getTemplatesByTemplateId({ templateId }) as TData,
    ...options,
  });
export const useTemplatesServiceGetTemplatesWorkspaceByWorkspaceIdSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useStylesServiceGetStylesSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseStylesServiceGetStylesKeyFn({ name }, queryKey),
    queryFn: () => StylesService.getStyles({ name }) as TData,
    ...options,
  });
export const useStylesServiceGetStylesBaseSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseStylesServiceGetStylesBaseKeyFn({ name }, queryKey),
    queryFn: () => StylesService.getStylesBase({ name }) as TData,
    ...options,
  });
export const useStylesServiceGetStylesByStyleIdSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseStylesServiceGetStylesByStyleIdKeyFn(
      { styleId },
      queryKey
    ),
    queryFn: () => StylesService.getStylesByStyleId({ styleId }) as TData,
    ...options,
  });
export const useStylesServiceGetStylesWorkspaceByWorkspaceIdSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useTextsServiceGetTextsSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTextsServiceGetTextsKeyFn({ name }, queryKey),
    queryFn: () => TextsService.getTexts({ name }) as TData,
    ...options,
  });
export const useTextsServiceGetTextsBaseSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTextsServiceGetTextsBaseKeyFn({ name }, queryKey),
    queryFn: () => TextsService.getTextsBase({ name }) as TData,
    ...options,
  });
export const useTextsServiceGetTextsByTextIdSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseTextsServiceGetTextsByTextIdKeyFn({ textId }, queryKey),
    queryFn: () => TextsService.getTextsByTextId({ textId }) as TData,
    ...options,
  });
export const useTextsServiceGetTextsWorkspaceByWorkspaceIdSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useBordersServiceGetBordersSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseBordersServiceGetBordersKeyFn({ name }, queryKey),
    queryFn: () => BordersService.getBorders({ name }) as TData,
    ...options,
  });
export const useBordersServiceGetBordersBaseSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseBordersServiceGetBordersBaseKeyFn({ name }, queryKey),
    queryFn: () => BordersService.getBordersBase({ name }) as TData,
    ...options,
  });
export const useBordersServiceGetBordersByBorderIdSuspense = <
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
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseBordersServiceGetBordersByBorderIdKeyFn(
      { borderId },
      queryKey
    ),
    queryFn: () => BordersService.getBordersByBorderId({ borderId }) as TData,
    ...options,
  });
export const useBordersServiceGetBordersWorkspaceByWorkspaceIdSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useCountryCodesServiceGetCountryCodesSuspense = <
  TData = Common.CountryCodesServiceGetCountryCodesDefaultResponse,
  TError = unknown,
  TQueryKey extends Array<unknown> = unknown[]
>(
  queryKey?: TQueryKey,
  options?: Omit<UseQueryOptions<TData, TError>, "queryKey" | "queryFn">
) =>
  useSuspenseQuery<TData, TError>({
    queryKey: Common.UseCountryCodesServiceGetCountryCodesKeyFn(queryKey),
    queryFn: () => CountryCodesService.getCountryCodes() as TData,
    ...options,
  });
export const useRouterRuleTemplatesServiceGetRouterRuleTemplatesSuspense = <
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
  useSuspenseQuery<TData, TError>({
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
export const useRouterRuleTemplatesServiceGetRouterRuleTemplatesByRouterRuleTemplateIdSuspense =
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
    useSuspenseQuery<TData, TError>({
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
