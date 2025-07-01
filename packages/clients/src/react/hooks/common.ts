// generated with @7nohe/openapi-react-query-codegen@1.6.2

import { UseQueryResult } from "@tanstack/react-query";
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
export type AuthServiceGetAuthMeDefaultResponse = Awaited<
  ReturnType<typeof AuthService.getAuthMe>
>;
export type AuthServiceGetAuthMeQueryResult<
  TData = AuthServiceGetAuthMeDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAuthServiceGetAuthMeKey = "AuthServiceGetAuthMe";
export const UseAuthServiceGetAuthMeKeyFn = (queryKey?: Array<unknown>) => [
  useAuthServiceGetAuthMeKey,
  ...(queryKey ?? []),
];
export type AuthServiceGetAuthSignOutDefaultResponse = Awaited<
  ReturnType<typeof AuthService.getAuthSignOut>
>;
export type AuthServiceGetAuthSignOutQueryResult<
  TData = AuthServiceGetAuthSignOutDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useAuthServiceGetAuthSignOutKey = "AuthServiceGetAuthSignOut";
export const UseAuthServiceGetAuthSignOutKeyFn = (
  queryKey?: Array<unknown>
) => [useAuthServiceGetAuthSignOutKey, ...(queryKey ?? [])];
export type ApiKeysServiceGetApiKeysDefaultResponse = Awaited<
  ReturnType<typeof ApiKeysService.getApiKeys>
>;
export type ApiKeysServiceGetApiKeysQueryResult<
  TData = ApiKeysServiceGetApiKeysDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useApiKeysServiceGetApiKeysKey = "ApiKeysServiceGetApiKeys";
export const UseApiKeysServiceGetApiKeysKeyFn = (queryKey?: Array<unknown>) => [
  useApiKeysServiceGetApiKeysKey,
  ...(queryKey ?? []),
];
export type ApiKeysServiceGetApiKeysByApiKeyIdDefaultResponse = Awaited<
  ReturnType<typeof ApiKeysService.getApiKeysByApiKeyId>
>;
export type ApiKeysServiceGetApiKeysByApiKeyIdQueryResult<
  TData = ApiKeysServiceGetApiKeysByApiKeyIdDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useApiKeysServiceGetApiKeysByApiKeyIdKey =
  "ApiKeysServiceGetApiKeysByApiKeyId";
export const UseApiKeysServiceGetApiKeysByApiKeyIdKeyFn = (
  {
    apiKeyId,
  }: {
    apiKeyId: string;
  },
  queryKey?: Array<unknown>
) => [
  useApiKeysServiceGetApiKeysByApiKeyIdKey,
  ...(queryKey ?? [{ apiKeyId }]),
];
export type OrganizationsServiceGetOrgsCurrentDefaultResponse = Awaited<
  ReturnType<typeof OrganizationsService.getOrgsCurrent>
>;
export type OrganizationsServiceGetOrgsCurrentQueryResult<
  TData = OrganizationsServiceGetOrgsCurrentDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useOrganizationsServiceGetOrgsCurrentKey =
  "OrganizationsServiceGetOrgsCurrent";
export const UseOrganizationsServiceGetOrgsCurrentKeyFn = (
  queryKey?: Array<unknown>
) => [useOrganizationsServiceGetOrgsCurrentKey, ...(queryKey ?? [])];
export type InvitationsServiceGetInvitesDefaultResponse = Awaited<
  ReturnType<typeof InvitationsService.getInvites>
>;
export type InvitationsServiceGetInvitesQueryResult<
  TData = InvitationsServiceGetInvitesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useInvitationsServiceGetInvitesKey =
  "InvitationsServiceGetInvites";
export const UseInvitationsServiceGetInvitesKeyFn = (
  queryKey?: Array<unknown>
) => [useInvitationsServiceGetInvitesKey, ...(queryKey ?? [])];
export type InvitationsServiceGetInvitesMeDefaultResponse = Awaited<
  ReturnType<typeof InvitationsService.getInvitesMe>
>;
export type InvitationsServiceGetInvitesMeQueryResult<
  TData = InvitationsServiceGetInvitesMeDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useInvitationsServiceGetInvitesMeKey =
  "InvitationsServiceGetInvitesMe";
export const UseInvitationsServiceGetInvitesMeKeyFn = (
  queryKey?: Array<unknown>
) => [useInvitationsServiceGetInvitesMeKey, ...(queryKey ?? [])];
export type InvitationsServiceGetInvitesByTokenAcceptDefaultResponse = Awaited<
  ReturnType<typeof InvitationsService.getInvitesByTokenAccept>
>;
export type InvitationsServiceGetInvitesByTokenAcceptQueryResult<
  TData = InvitationsServiceGetInvitesByTokenAcceptDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useInvitationsServiceGetInvitesByTokenAcceptKey =
  "InvitationsServiceGetInvitesByTokenAccept";
export const UseInvitationsServiceGetInvitesByTokenAcceptKeyFn = (
  {
    token,
  }: {
    token: string;
  },
  queryKey?: Array<unknown>
) => [
  useInvitationsServiceGetInvitesByTokenAcceptKey,
  ...(queryKey ?? [{ token }]),
];
export type InvitationsServiceGetInvitesByTokenDeclineDefaultResponse = Awaited<
  ReturnType<typeof InvitationsService.getInvitesByTokenDecline>
>;
export type InvitationsServiceGetInvitesByTokenDeclineQueryResult<
  TData = InvitationsServiceGetInvitesByTokenDeclineDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useInvitationsServiceGetInvitesByTokenDeclineKey =
  "InvitationsServiceGetInvitesByTokenDecline";
export const UseInvitationsServiceGetInvitesByTokenDeclineKeyFn = (
  {
    token,
  }: {
    token: string;
  },
  queryKey?: Array<unknown>
) => [
  useInvitationsServiceGetInvitesByTokenDeclineKey,
  ...(queryKey ?? [{ token }]),
];
export type MembersServiceGetMembersDefaultResponse = Awaited<
  ReturnType<typeof MembersService.getMembers>
>;
export type MembersServiceGetMembersQueryResult<
  TData = MembersServiceGetMembersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useMembersServiceGetMembersKey = "MembersServiceGetMembers";
export const UseMembersServiceGetMembersKeyFn = (queryKey?: Array<unknown>) => [
  useMembersServiceGetMembersKey,
  ...(queryKey ?? []),
];
export type MembersServiceGetMembersByUserIdRolesDefaultResponse = Awaited<
  ReturnType<typeof MembersService.getMembersByUserIdRoles>
>;
export type MembersServiceGetMembersByUserIdRolesQueryResult<
  TData = MembersServiceGetMembersByUserIdRolesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useMembersServiceGetMembersByUserIdRolesKey =
  "MembersServiceGetMembersByUserIdRoles";
export const UseMembersServiceGetMembersByUserIdRolesKeyFn = (
  {
    userId,
  }: {
    userId: string;
  },
  queryKey?: Array<unknown>
) => [
  useMembersServiceGetMembersByUserIdRolesKey,
  ...(queryKey ?? [{ userId }]),
];
export type WorkspacesServiceGetWorkspacesDefaultResponse = Awaited<
  ReturnType<typeof WorkspacesService.getWorkspaces>
>;
export type WorkspacesServiceGetWorkspacesQueryResult<
  TData = WorkspacesServiceGetWorkspacesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useWorkspacesServiceGetWorkspacesKey =
  "WorkspacesServiceGetWorkspaces";
export const UseWorkspacesServiceGetWorkspacesKeyFn = (
  queryKey?: Array<unknown>
) => [useWorkspacesServiceGetWorkspacesKey, ...(queryKey ?? [])];
export type WorkspacesServiceGetWorkspacesByWorkspaceIdDefaultResponse =
  Awaited<ReturnType<typeof WorkspacesService.getWorkspacesByWorkspaceId>>;
export type WorkspacesServiceGetWorkspacesByWorkspaceIdQueryResult<
  TData = WorkspacesServiceGetWorkspacesByWorkspaceIdDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useWorkspacesServiceGetWorkspacesByWorkspaceIdKey =
  "WorkspacesServiceGetWorkspacesByWorkspaceId";
export const UseWorkspacesServiceGetWorkspacesByWorkspaceIdKeyFn = (
  {
    workspaceId,
  }: {
    workspaceId: string;
  },
  queryKey?: Array<unknown>
) => [
  useWorkspacesServiceGetWorkspacesByWorkspaceIdKey,
  ...(queryKey ?? [{ workspaceId }]),
];
export type WorkspacesServiceGetWorkspacesByWorkspaceIdMembersByUserIdRoleDefaultResponse =
  Awaited<
    ReturnType<
      typeof WorkspacesService.getWorkspacesByWorkspaceIdMembersByUserIdRole
    >
  >;
export type WorkspacesServiceGetWorkspacesByWorkspaceIdMembersByUserIdRoleQueryResult<
  TData = WorkspacesServiceGetWorkspacesByWorkspaceIdMembersByUserIdRoleDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useWorkspacesServiceGetWorkspacesByWorkspaceIdMembersByUserIdRoleKey =
  "WorkspacesServiceGetWorkspacesByWorkspaceIdMembersByUserIdRole";
export const UseWorkspacesServiceGetWorkspacesByWorkspaceIdMembersByUserIdRoleKeyFn =
  (
    {
      userId,
      workspaceId,
    }: {
      userId: string;
      workspaceId: string;
    },
    queryKey?: Array<unknown>
  ) => [
    useWorkspacesServiceGetWorkspacesByWorkspaceIdMembersByUserIdRoleKey,
    ...(queryKey ?? [{ userId, workspaceId }]),
  ];
export type WorkspacesServiceGetWorkspacesByWorkspaceIdMembersDefaultResponse =
  Awaited<
    ReturnType<typeof WorkspacesService.getWorkspacesByWorkspaceIdMembers>
  >;
export type WorkspacesServiceGetWorkspacesByWorkspaceIdMembersQueryResult<
  TData = WorkspacesServiceGetWorkspacesByWorkspaceIdMembersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useWorkspacesServiceGetWorkspacesByWorkspaceIdMembersKey =
  "WorkspacesServiceGetWorkspacesByWorkspaceIdMembers";
export const UseWorkspacesServiceGetWorkspacesByWorkspaceIdMembersKeyFn = (
  {
    workspaceId,
  }: {
    workspaceId: string;
  },
  queryKey?: Array<unknown>
) => [
  useWorkspacesServiceGetWorkspacesByWorkspaceIdMembersKey,
  ...(queryKey ?? [{ workspaceId }]),
];
export type RolesServiceGetRolesDefaultResponse = Awaited<
  ReturnType<typeof RolesService.getRoles>
>;
export type RolesServiceGetRolesQueryResult<
  TData = RolesServiceGetRolesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useRolesServiceGetRolesKey = "RolesServiceGetRoles";
export const UseRolesServiceGetRolesKeyFn = (
  {
    includeScopes,
  }: {
    includeScopes?: boolean;
  } = {},
  queryKey?: Array<unknown>
) => [useRolesServiceGetRolesKey, ...(queryKey ?? [{ includeScopes }])];
export type PlansServiceGetPlansDefaultResponse = Awaited<
  ReturnType<typeof PlansService.getPlans>
>;
export type PlansServiceGetPlansQueryResult<
  TData = PlansServiceGetPlansDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const usePlansServiceGetPlansKey = "PlansServiceGetPlans";
export const UsePlansServiceGetPlansKeyFn = (queryKey?: Array<unknown>) => [
  usePlansServiceGetPlansKey,
  ...(queryKey ?? []),
];
export type PlansServiceGetPlansCurrentDefaultResponse = Awaited<
  ReturnType<typeof PlansService.getPlansCurrent>
>;
export type PlansServiceGetPlansCurrentQueryResult<
  TData = PlansServiceGetPlansCurrentDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const usePlansServiceGetPlansCurrentKey = "PlansServiceGetPlansCurrent";
export const UsePlansServiceGetPlansCurrentKeyFn = (
  queryKey?: Array<unknown>
) => [usePlansServiceGetPlansCurrentKey, ...(queryKey ?? [])];
export type SettingsServiceGetSettingsDefaultResponse = Awaited<
  ReturnType<typeof SettingsService.getSettings>
>;
export type SettingsServiceGetSettingsQueryResult<
  TData = SettingsServiceGetSettingsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useSettingsServiceGetSettingsKey = "SettingsServiceGetSettings";
export const UseSettingsServiceGetSettingsKeyFn = (
  queryKey?: Array<unknown>
) => [useSettingsServiceGetSettingsKey, ...(queryKey ?? [])];
export type SettingsServiceGetSettingsCustomDefaultResponse = Awaited<
  ReturnType<typeof SettingsService.getSettingsCustom>
>;
export type SettingsServiceGetSettingsCustomQueryResult<
  TData = SettingsServiceGetSettingsCustomDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useSettingsServiceGetSettingsCustomKey =
  "SettingsServiceGetSettingsCustom";
export const UseSettingsServiceGetSettingsCustomKeyFn = (
  queryKey?: Array<unknown>
) => [useSettingsServiceGetSettingsCustomKey, ...(queryKey ?? [])];
export type SettingsServiceGetSettingsCustomBySettingSlugDefaultResponse =
  Awaited<ReturnType<typeof SettingsService.getSettingsCustomBySettingSlug>>;
export type SettingsServiceGetSettingsCustomBySettingSlugQueryResult<
  TData = SettingsServiceGetSettingsCustomBySettingSlugDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useSettingsServiceGetSettingsCustomBySettingSlugKey =
  "SettingsServiceGetSettingsCustomBySettingSlug";
export const UseSettingsServiceGetSettingsCustomBySettingSlugKeyFn = (
  {
    settingSlug,
  }: {
    settingSlug: string;
  },
  queryKey?: Array<unknown>
) => [
  useSettingsServiceGetSettingsCustomBySettingSlugKey,
  ...(queryKey ?? [{ settingSlug }]),
];
export type SettingsServiceGetSettingsCustomBySettingSlugValueDefaultResponse =
  Awaited<
    ReturnType<typeof SettingsService.getSettingsCustomBySettingSlugValue>
  >;
export type SettingsServiceGetSettingsCustomBySettingSlugValueQueryResult<
  TData = SettingsServiceGetSettingsCustomBySettingSlugValueDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useSettingsServiceGetSettingsCustomBySettingSlugValueKey =
  "SettingsServiceGetSettingsCustomBySettingSlugValue";
export const UseSettingsServiceGetSettingsCustomBySettingSlugValueKeyFn = (
  {
    settingSlug,
  }: {
    settingSlug: string;
  },
  queryKey?: Array<unknown>
) => [
  useSettingsServiceGetSettingsCustomBySettingSlugValueKey,
  ...(queryKey ?? [{ settingSlug }]),
];
export type SettingsServiceGetSettingsServiceDefaultResponse = Awaited<
  ReturnType<typeof SettingsService.getSettingsService>
>;
export type SettingsServiceGetSettingsServiceQueryResult<
  TData = SettingsServiceGetSettingsServiceDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useSettingsServiceGetSettingsServiceKey =
  "SettingsServiceGetSettingsService";
export const UseSettingsServiceGetSettingsServiceKeyFn = (
  queryKey?: Array<unknown>
) => [useSettingsServiceGetSettingsServiceKey, ...(queryKey ?? [])];
export type SettingsServiceGetSettingsServiceBySettingSlugDefaultResponse =
  Awaited<ReturnType<typeof SettingsService.getSettingsServiceBySettingSlug>>;
export type SettingsServiceGetSettingsServiceBySettingSlugQueryResult<
  TData = SettingsServiceGetSettingsServiceBySettingSlugDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useSettingsServiceGetSettingsServiceBySettingSlugKey =
  "SettingsServiceGetSettingsServiceBySettingSlug";
export const UseSettingsServiceGetSettingsServiceBySettingSlugKeyFn = (
  {
    settingSlug,
  }: {
    settingSlug: string;
  },
  queryKey?: Array<unknown>
) => [
  useSettingsServiceGetSettingsServiceBySettingSlugKey,
  ...(queryKey ?? [{ settingSlug }]),
];
export type SettingsServiceGetSettingsServiceBySettingSlugValueDefaultResponse =
  Awaited<
    ReturnType<typeof SettingsService.getSettingsServiceBySettingSlugValue>
  >;
export type SettingsServiceGetSettingsServiceBySettingSlugValueQueryResult<
  TData = SettingsServiceGetSettingsServiceBySettingSlugValueDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useSettingsServiceGetSettingsServiceBySettingSlugValueKey =
  "SettingsServiceGetSettingsServiceBySettingSlugValue";
export const UseSettingsServiceGetSettingsServiceBySettingSlugValueKeyFn = (
  {
    settingSlug,
  }: {
    settingSlug: string;
  },
  queryKey?: Array<unknown>
) => [
  useSettingsServiceGetSettingsServiceBySettingSlugValueKey,
  ...(queryKey ?? [{ settingSlug }]),
];
export type WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsDefaultResponse =
  Awaited<
    ReturnType<
      typeof WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettings
    >
  >;
export type WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsQueryResult<
  TData = WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsKey =
  "WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettings";
export const UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsKeyFn =
  (
    {
      workspaceId,
    }: {
      workspaceId: string;
    },
    queryKey?: Array<unknown>
  ) => [
    useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsKey,
    ...(queryKey ?? [{ workspaceId }]),
  ];
export type WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomDefaultResponse =
  Awaited<
    ReturnType<
      typeof WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsCustom
    >
  >;
export type WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomQueryResult<
  TData = WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomKey =
  "WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustom";
export const UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomKeyFn =
  (
    {
      workspaceId,
    }: {
      workspaceId: string;
    },
    queryKey?: Array<unknown>
  ) => [
    useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomKey,
    ...(queryKey ?? [{ workspaceId }]),
  ];
export type WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugDefaultResponse =
  Awaited<
    ReturnType<
      typeof WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsCustomBySettingSlug
    >
  >;
export type WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugQueryResult<
  TData = WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugKey =
  "WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlug";
export const UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugKeyFn =
  (
    {
      settingSlug,
      workspaceId,
    }: {
      settingSlug: string;
      workspaceId: string;
    },
    queryKey?: Array<unknown>
  ) => [
    useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugKey,
    ...(queryKey ?? [{ settingSlug, workspaceId }]),
  ];
export type WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueDefaultResponse =
  Awaited<
    ReturnType<
      typeof WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValue
    >
  >;
export type WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueQueryResult<
  TData = WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueKey =
  "WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValue";
export const UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueKeyFn =
  (
    {
      settingSlug,
      workspaceId,
    }: {
      settingSlug: string;
      workspaceId: string;
    },
    queryKey?: Array<unknown>
  ) => [
    useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueKey,
    ...(queryKey ?? [{ settingSlug, workspaceId }]),
  ];
export type WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceDefaultResponse =
  Awaited<
    ReturnType<
      typeof WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsService
    >
  >;
export type WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceQueryResult<
  TData = WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceKey =
  "WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsService";
export const UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceKeyFn =
  (
    {
      workspaceId,
    }: {
      workspaceId: string;
    },
    queryKey?: Array<unknown>
  ) => [
    useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceKey,
    ...(queryKey ?? [{ workspaceId }]),
  ];
export type WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugDefaultResponse =
  Awaited<
    ReturnType<
      typeof WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsServiceBySettingSlug
    >
  >;
export type WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugQueryResult<
  TData = WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugKey =
  "WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlug";
export const UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugKeyFn =
  (
    {
      settingSlug,
      workspaceId,
    }: {
      settingSlug: string;
      workspaceId: string;
    },
    queryKey?: Array<unknown>
  ) => [
    useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugKey,
    ...(queryKey ?? [{ settingSlug, workspaceId }]),
  ];
export type WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueDefaultResponse =
  Awaited<
    ReturnType<
      typeof WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValue
    >
  >;
export type WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueQueryResult<
  TData = WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueKey =
  "WorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValue";
export const UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueKeyFn =
  (
    {
      settingSlug,
      workspaceId,
    }: {
      settingSlug: string;
      workspaceId: string;
    },
    queryKey?: Array<unknown>
  ) => [
    useWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueKey,
    ...(queryKey ?? [{ settingSlug, workspaceId }]),
  ];
export type QrCodeScansServiceGetCodesByCodeIdScansDefaultResponse = Awaited<
  ReturnType<typeof QrCodeScansService.getCodesByCodeIdScans>
>;
export type QrCodeScansServiceGetCodesByCodeIdScansQueryResult<
  TData = QrCodeScansServiceGetCodesByCodeIdScansDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useQrCodeScansServiceGetCodesByCodeIdScansKey =
  "QrCodeScansServiceGetCodesByCodeIdScans";
export const UseQrCodeScansServiceGetCodesByCodeIdScansKeyFn = (
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
  queryKey?: Array<unknown>
) => [
  useQrCodeScansServiceGetCodesByCodeIdScansKey,
  ...(queryKey ?? [
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
  ]),
];
export type QrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesDefaultResponse =
  Awaited<
    ReturnType<typeof QrCodeRouterRulesService.getCodesByCodeIdRouterRules>
  >;
export type QrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesQueryResult<
  TData = QrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesKey =
  "QrCodeRouterRulesServiceGetCodesByCodeIdRouterRules";
export const UseQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesKeyFn = (
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
  queryKey?: Array<unknown>
) => [
  useQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesKey,
  ...(queryKey ?? [
    { codeId, dataType, includeDisabled, limit, page, priority, type },
  ]),
];
export type QrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesByRouterRuleIdDefaultResponse =
  Awaited<
    ReturnType<
      typeof QrCodeRouterRulesService.getCodesByCodeIdRouterRulesByRouterRuleId
    >
  >;
export type QrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesByRouterRuleIdQueryResult<
  TData = QrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesByRouterRuleIdDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesByRouterRuleIdKey =
  "QrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesByRouterRuleId";
export const UseQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesByRouterRuleIdKeyFn =
  (
    {
      codeId,
      routerRuleId,
    }: {
      codeId: string;
      routerRuleId: string;
    },
    queryKey?: Array<unknown>
  ) => [
    useQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesByRouterRuleIdKey,
    ...(queryKey ?? [{ codeId, routerRuleId }]),
  ];
export type QrCodeRouterRulesServiceGetRouterRulesDefaultResponse = Awaited<
  ReturnType<typeof QrCodeRouterRulesService.getRouterRules>
>;
export type QrCodeRouterRulesServiceGetRouterRulesQueryResult<
  TData = QrCodeRouterRulesServiceGetRouterRulesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useQrCodeRouterRulesServiceGetRouterRulesKey =
  "QrCodeRouterRulesServiceGetRouterRules";
export const UseQrCodeRouterRulesServiceGetRouterRulesKeyFn = (
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
  queryKey?: Array<unknown>
) => [
  useQrCodeRouterRulesServiceGetRouterRulesKey,
  ...(queryKey ?? [
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
  ]),
];
export type QrCodeRouterRulesServiceGetWorkspacesByWorkspaceIdRouterRulesDefaultResponse =
  Awaited<
    ReturnType<
      typeof QrCodeRouterRulesService.getWorkspacesByWorkspaceIdRouterRules
    >
  >;
export type QrCodeRouterRulesServiceGetWorkspacesByWorkspaceIdRouterRulesQueryResult<
  TData = QrCodeRouterRulesServiceGetWorkspacesByWorkspaceIdRouterRulesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useQrCodeRouterRulesServiceGetWorkspacesByWorkspaceIdRouterRulesKey =
  "QrCodeRouterRulesServiceGetWorkspacesByWorkspaceIdRouterRules";
export const UseQrCodeRouterRulesServiceGetWorkspacesByWorkspaceIdRouterRulesKeyFn =
  (
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
    queryKey?: Array<unknown>
  ) => [
    useQrCodeRouterRulesServiceGetWorkspacesByWorkspaceIdRouterRulesKey,
    ...(queryKey ?? [
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
    ]),
  ];
export type QrCodesServiceGetCodesDeletedDefaultResponse = Awaited<
  ReturnType<typeof QrCodesService.getCodesDeleted>
>;
export type QrCodesServiceGetCodesDeletedQueryResult<
  TData = QrCodesServiceGetCodesDeletedDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useQrCodesServiceGetCodesDeletedKey =
  "QrCodesServiceGetCodesDeleted";
export const UseQrCodesServiceGetCodesDeletedKeyFn = (
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
  queryKey?: Array<unknown>
) => [
  useQrCodesServiceGetCodesDeletedKey,
  ...(queryKey ?? [
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
  ]),
];
export type QrCodesServiceGetCodesByCodeIdDefaultResponse = Awaited<
  ReturnType<typeof QrCodesService.getCodesByCodeId>
>;
export type QrCodesServiceGetCodesByCodeIdQueryResult<
  TData = QrCodesServiceGetCodesByCodeIdDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useQrCodesServiceGetCodesByCodeIdKey =
  "QrCodesServiceGetCodesByCodeId";
export const UseQrCodesServiceGetCodesByCodeIdKeyFn = (
  {
    codeId,
  }: {
    codeId: string;
  },
  queryKey?: Array<unknown>
) => [useQrCodesServiceGetCodesByCodeIdKey, ...(queryKey ?? [{ codeId }])];
export type QrCodesServiceGetCodesDefaultResponse = Awaited<
  ReturnType<typeof QrCodesService.getCodes>
>;
export type QrCodesServiceGetCodesQueryResult<
  TData = QrCodesServiceGetCodesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useQrCodesServiceGetCodesKey = "QrCodesServiceGetCodes";
export const UseQrCodesServiceGetCodesKeyFn = (
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
  queryKey?: Array<unknown>
) => [
  useQrCodesServiceGetCodesKey,
  ...(queryKey ?? [
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
  ]),
];
export type QrCodeLinksServiceGetCodesLinksDefaultResponse = Awaited<
  ReturnType<typeof QrCodeLinksService.getCodesLinks>
>;
export type QrCodeLinksServiceGetCodesLinksQueryResult<
  TData = QrCodeLinksServiceGetCodesLinksDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useQrCodeLinksServiceGetCodesLinksKey =
  "QrCodeLinksServiceGetCodesLinks";
export const UseQrCodeLinksServiceGetCodesLinksKeyFn = (
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
  queryKey?: Array<unknown>
) => [
  useQrCodeLinksServiceGetCodesLinksKey,
  ...(queryKey ?? [
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
  ]),
];
export type QrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeDefaultResponse =
  Awaited<
    ReturnType<typeof QrCodeLinksService.getCodesByCodeIdVersionByVersionByType>
  >;
export type QrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeQueryResult<
  TData = QrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeKey =
  "QrCodeLinksServiceGetCodesByCodeIdVersionByVersionByType";
export const UseQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeKeyFn =
  (
    {
      codeId,
      type,
      version,
    }: {
      codeId: string;
      type: "svg" | "png" | "pdf";
      version: number;
    },
    queryKey?: Array<unknown>
  ) => [
    useQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeKey,
    ...(queryKey ?? [{ codeId, type, version }]),
  ];
export type QrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeLinkDefaultResponse =
  Awaited<
    ReturnType<
      typeof QrCodeLinksService.getCodesByCodeIdVersionByVersionByTypeLink
    >
  >;
export type QrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeLinkQueryResult<
  TData = QrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeLinkDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeLinkKey =
  "QrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeLink";
export const UseQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeLinkKeyFn =
  (
    {
      codeId,
      type,
      version,
    }: {
      codeId: string;
      type: "svg" | "png" | "pdf";
      version: number;
    },
    queryKey?: Array<unknown>
  ) => [
    useQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeLinkKey,
    ...(queryKey ?? [{ codeId, type, version }]),
  ];
export type QrCodeLinksServiceGetCodesByCodeIdByTypeDefaultResponse = Awaited<
  ReturnType<typeof QrCodeLinksService.getCodesByCodeIdByType>
>;
export type QrCodeLinksServiceGetCodesByCodeIdByTypeQueryResult<
  TData = QrCodeLinksServiceGetCodesByCodeIdByTypeDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useQrCodeLinksServiceGetCodesByCodeIdByTypeKey =
  "QrCodeLinksServiceGetCodesByCodeIdByType";
export const UseQrCodeLinksServiceGetCodesByCodeIdByTypeKeyFn = (
  {
    codeId,
    type,
  }: {
    codeId: string;
    type: "svg" | "png" | "pdf";
  },
  queryKey?: Array<unknown>
) => [
  useQrCodeLinksServiceGetCodesByCodeIdByTypeKey,
  ...(queryKey ?? [{ codeId, type }]),
];
export type QrCodeLinksServiceGetCodesByCodeIdByTypeLinkDefaultResponse =
  Awaited<ReturnType<typeof QrCodeLinksService.getCodesByCodeIdByTypeLink>>;
export type QrCodeLinksServiceGetCodesByCodeIdByTypeLinkQueryResult<
  TData = QrCodeLinksServiceGetCodesByCodeIdByTypeLinkDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useQrCodeLinksServiceGetCodesByCodeIdByTypeLinkKey =
  "QrCodeLinksServiceGetCodesByCodeIdByTypeLink";
export const UseQrCodeLinksServiceGetCodesByCodeIdByTypeLinkKeyFn = (
  {
    codeId,
    type,
  }: {
    codeId: string;
    type: "svg" | "png" | "pdf";
  },
  queryKey?: Array<unknown>
) => [
  useQrCodeLinksServiceGetCodesByCodeIdByTypeLinkKey,
  ...(queryKey ?? [{ codeId, type }]),
];
export type QrCodeVersionsServiceGetCodesByCodeIdVersionByVersionDefaultResponse =
  Awaited<
    ReturnType<typeof QrCodeVersionsService.getCodesByCodeIdVersionByVersion>
  >;
export type QrCodeVersionsServiceGetCodesByCodeIdVersionByVersionQueryResult<
  TData = QrCodeVersionsServiceGetCodesByCodeIdVersionByVersionDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useQrCodeVersionsServiceGetCodesByCodeIdVersionByVersionKey =
  "QrCodeVersionsServiceGetCodesByCodeIdVersionByVersion";
export const UseQrCodeVersionsServiceGetCodesByCodeIdVersionByVersionKeyFn = (
  {
    codeId,
    version,
  }: {
    codeId: string;
    version: number;
  },
  queryKey?: Array<unknown>
) => [
  useQrCodeVersionsServiceGetCodesByCodeIdVersionByVersionKey,
  ...(queryKey ?? [{ codeId, version }]),
];
export type QrCodeVersionsServiceGetCodesByCodeIdVersionsDefaultResponse =
  Awaited<ReturnType<typeof QrCodeVersionsService.getCodesByCodeIdVersions>>;
export type QrCodeVersionsServiceGetCodesByCodeIdVersionsQueryResult<
  TData = QrCodeVersionsServiceGetCodesByCodeIdVersionsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useQrCodeVersionsServiceGetCodesByCodeIdVersionsKey =
  "QrCodeVersionsServiceGetCodesByCodeIdVersions";
export const UseQrCodeVersionsServiceGetCodesByCodeIdVersionsKeyFn = (
  {
    codeId,
  }: {
    codeId: string;
  },
  queryKey?: Array<unknown>
) => [
  useQrCodeVersionsServiceGetCodesByCodeIdVersionsKey,
  ...(queryKey ?? [{ codeId }]),
];
export type TemplatesServiceGetTemplatesDefaultResponse = Awaited<
  ReturnType<typeof TemplatesService.getTemplates>
>;
export type TemplatesServiceGetTemplatesQueryResult<
  TData = TemplatesServiceGetTemplatesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useTemplatesServiceGetTemplatesKey =
  "TemplatesServiceGetTemplates";
export const UseTemplatesServiceGetTemplatesKeyFn = (
  {
    name,
  }: {
    name?: string;
  } = {},
  queryKey?: Array<unknown>
) => [useTemplatesServiceGetTemplatesKey, ...(queryKey ?? [{ name }])];
export type TemplatesServiceGetTemplatesBaseDefaultResponse = Awaited<
  ReturnType<typeof TemplatesService.getTemplatesBase>
>;
export type TemplatesServiceGetTemplatesBaseQueryResult<
  TData = TemplatesServiceGetTemplatesBaseDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useTemplatesServiceGetTemplatesBaseKey =
  "TemplatesServiceGetTemplatesBase";
export const UseTemplatesServiceGetTemplatesBaseKeyFn = (
  {
    name,
  }: {
    name?: string;
  } = {},
  queryKey?: Array<unknown>
) => [useTemplatesServiceGetTemplatesBaseKey, ...(queryKey ?? [{ name }])];
export type TemplatesServiceGetTemplatesByTemplateIdDefaultResponse = Awaited<
  ReturnType<typeof TemplatesService.getTemplatesByTemplateId>
>;
export type TemplatesServiceGetTemplatesByTemplateIdQueryResult<
  TData = TemplatesServiceGetTemplatesByTemplateIdDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useTemplatesServiceGetTemplatesByTemplateIdKey =
  "TemplatesServiceGetTemplatesByTemplateId";
export const UseTemplatesServiceGetTemplatesByTemplateIdKeyFn = (
  {
    templateId,
  }: {
    templateId: string;
  },
  queryKey?: Array<unknown>
) => [
  useTemplatesServiceGetTemplatesByTemplateIdKey,
  ...(queryKey ?? [{ templateId }]),
];
export type TemplatesServiceGetTemplatesWorkspaceByWorkspaceIdDefaultResponse =
  Awaited<
    ReturnType<typeof TemplatesService.getTemplatesWorkspaceByWorkspaceId>
  >;
export type TemplatesServiceGetTemplatesWorkspaceByWorkspaceIdQueryResult<
  TData = TemplatesServiceGetTemplatesWorkspaceByWorkspaceIdDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useTemplatesServiceGetTemplatesWorkspaceByWorkspaceIdKey =
  "TemplatesServiceGetTemplatesWorkspaceByWorkspaceId";
export const UseTemplatesServiceGetTemplatesWorkspaceByWorkspaceIdKeyFn = (
  {
    name,
    workspaceId,
  }: {
    name?: string;
    workspaceId: string;
  },
  queryKey?: Array<unknown>
) => [
  useTemplatesServiceGetTemplatesWorkspaceByWorkspaceIdKey,
  ...(queryKey ?? [{ name, workspaceId }]),
];
export type StylesServiceGetStylesDefaultResponse = Awaited<
  ReturnType<typeof StylesService.getStyles>
>;
export type StylesServiceGetStylesQueryResult<
  TData = StylesServiceGetStylesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useStylesServiceGetStylesKey = "StylesServiceGetStyles";
export const UseStylesServiceGetStylesKeyFn = (
  {
    name,
  }: {
    name?: string;
  } = {},
  queryKey?: Array<unknown>
) => [useStylesServiceGetStylesKey, ...(queryKey ?? [{ name }])];
export type StylesServiceGetStylesBaseDefaultResponse = Awaited<
  ReturnType<typeof StylesService.getStylesBase>
>;
export type StylesServiceGetStylesBaseQueryResult<
  TData = StylesServiceGetStylesBaseDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useStylesServiceGetStylesBaseKey = "StylesServiceGetStylesBase";
export const UseStylesServiceGetStylesBaseKeyFn = (
  {
    name,
  }: {
    name?: string;
  } = {},
  queryKey?: Array<unknown>
) => [useStylesServiceGetStylesBaseKey, ...(queryKey ?? [{ name }])];
export type StylesServiceGetStylesByStyleIdDefaultResponse = Awaited<
  ReturnType<typeof StylesService.getStylesByStyleId>
>;
export type StylesServiceGetStylesByStyleIdQueryResult<
  TData = StylesServiceGetStylesByStyleIdDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useStylesServiceGetStylesByStyleIdKey =
  "StylesServiceGetStylesByStyleId";
export const UseStylesServiceGetStylesByStyleIdKeyFn = (
  {
    styleId,
  }: {
    styleId: string;
  },
  queryKey?: Array<unknown>
) => [useStylesServiceGetStylesByStyleIdKey, ...(queryKey ?? [{ styleId }])];
export type StylesServiceGetStylesWorkspaceByWorkspaceIdDefaultResponse =
  Awaited<ReturnType<typeof StylesService.getStylesWorkspaceByWorkspaceId>>;
export type StylesServiceGetStylesWorkspaceByWorkspaceIdQueryResult<
  TData = StylesServiceGetStylesWorkspaceByWorkspaceIdDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useStylesServiceGetStylesWorkspaceByWorkspaceIdKey =
  "StylesServiceGetStylesWorkspaceByWorkspaceId";
export const UseStylesServiceGetStylesWorkspaceByWorkspaceIdKeyFn = (
  {
    name,
    workspaceId,
  }: {
    name?: string;
    workspaceId: string;
  },
  queryKey?: Array<unknown>
) => [
  useStylesServiceGetStylesWorkspaceByWorkspaceIdKey,
  ...(queryKey ?? [{ name, workspaceId }]),
];
export type TextsServiceGetTextsDefaultResponse = Awaited<
  ReturnType<typeof TextsService.getTexts>
>;
export type TextsServiceGetTextsQueryResult<
  TData = TextsServiceGetTextsDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useTextsServiceGetTextsKey = "TextsServiceGetTexts";
export const UseTextsServiceGetTextsKeyFn = (
  {
    name,
  }: {
    name?: string;
  } = {},
  queryKey?: Array<unknown>
) => [useTextsServiceGetTextsKey, ...(queryKey ?? [{ name }])];
export type TextsServiceGetTextsBaseDefaultResponse = Awaited<
  ReturnType<typeof TextsService.getTextsBase>
>;
export type TextsServiceGetTextsBaseQueryResult<
  TData = TextsServiceGetTextsBaseDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useTextsServiceGetTextsBaseKey = "TextsServiceGetTextsBase";
export const UseTextsServiceGetTextsBaseKeyFn = (
  {
    name,
  }: {
    name?: string;
  } = {},
  queryKey?: Array<unknown>
) => [useTextsServiceGetTextsBaseKey, ...(queryKey ?? [{ name }])];
export type TextsServiceGetTextsByTextIdDefaultResponse = Awaited<
  ReturnType<typeof TextsService.getTextsByTextId>
>;
export type TextsServiceGetTextsByTextIdQueryResult<
  TData = TextsServiceGetTextsByTextIdDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useTextsServiceGetTextsByTextIdKey =
  "TextsServiceGetTextsByTextId";
export const UseTextsServiceGetTextsByTextIdKeyFn = (
  {
    textId,
  }: {
    textId: string;
  },
  queryKey?: Array<unknown>
) => [useTextsServiceGetTextsByTextIdKey, ...(queryKey ?? [{ textId }])];
export type TextsServiceGetTextsWorkspaceByWorkspaceIdDefaultResponse = Awaited<
  ReturnType<typeof TextsService.getTextsWorkspaceByWorkspaceId>
>;
export type TextsServiceGetTextsWorkspaceByWorkspaceIdQueryResult<
  TData = TextsServiceGetTextsWorkspaceByWorkspaceIdDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useTextsServiceGetTextsWorkspaceByWorkspaceIdKey =
  "TextsServiceGetTextsWorkspaceByWorkspaceId";
export const UseTextsServiceGetTextsWorkspaceByWorkspaceIdKeyFn = (
  {
    name,
    workspaceId,
  }: {
    name?: string;
    workspaceId: string;
  },
  queryKey?: Array<unknown>
) => [
  useTextsServiceGetTextsWorkspaceByWorkspaceIdKey,
  ...(queryKey ?? [{ name, workspaceId }]),
];
export type BordersServiceGetBordersDefaultResponse = Awaited<
  ReturnType<typeof BordersService.getBorders>
>;
export type BordersServiceGetBordersQueryResult<
  TData = BordersServiceGetBordersDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useBordersServiceGetBordersKey = "BordersServiceGetBorders";
export const UseBordersServiceGetBordersKeyFn = (
  {
    name,
  }: {
    name?: string;
  } = {},
  queryKey?: Array<unknown>
) => [useBordersServiceGetBordersKey, ...(queryKey ?? [{ name }])];
export type BordersServiceGetBordersBaseDefaultResponse = Awaited<
  ReturnType<typeof BordersService.getBordersBase>
>;
export type BordersServiceGetBordersBaseQueryResult<
  TData = BordersServiceGetBordersBaseDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useBordersServiceGetBordersBaseKey =
  "BordersServiceGetBordersBase";
export const UseBordersServiceGetBordersBaseKeyFn = (
  {
    name,
  }: {
    name?: string;
  } = {},
  queryKey?: Array<unknown>
) => [useBordersServiceGetBordersBaseKey, ...(queryKey ?? [{ name }])];
export type BordersServiceGetBordersByBorderIdDefaultResponse = Awaited<
  ReturnType<typeof BordersService.getBordersByBorderId>
>;
export type BordersServiceGetBordersByBorderIdQueryResult<
  TData = BordersServiceGetBordersByBorderIdDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useBordersServiceGetBordersByBorderIdKey =
  "BordersServiceGetBordersByBorderId";
export const UseBordersServiceGetBordersByBorderIdKeyFn = (
  {
    borderId,
  }: {
    borderId: string;
  },
  queryKey?: Array<unknown>
) => [
  useBordersServiceGetBordersByBorderIdKey,
  ...(queryKey ?? [{ borderId }]),
];
export type BordersServiceGetBordersWorkspaceByWorkspaceIdDefaultResponse =
  Awaited<ReturnType<typeof BordersService.getBordersWorkspaceByWorkspaceId>>;
export type BordersServiceGetBordersWorkspaceByWorkspaceIdQueryResult<
  TData = BordersServiceGetBordersWorkspaceByWorkspaceIdDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useBordersServiceGetBordersWorkspaceByWorkspaceIdKey =
  "BordersServiceGetBordersWorkspaceByWorkspaceId";
export const UseBordersServiceGetBordersWorkspaceByWorkspaceIdKeyFn = (
  {
    name,
    workspaceId,
  }: {
    name?: string;
    workspaceId: string;
  },
  queryKey?: Array<unknown>
) => [
  useBordersServiceGetBordersWorkspaceByWorkspaceIdKey,
  ...(queryKey ?? [{ name, workspaceId }]),
];
export type CountryCodesServiceGetCountryCodesDefaultResponse = Awaited<
  ReturnType<typeof CountryCodesService.getCountryCodes>
>;
export type CountryCodesServiceGetCountryCodesQueryResult<
  TData = CountryCodesServiceGetCountryCodesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useCountryCodesServiceGetCountryCodesKey =
  "CountryCodesServiceGetCountryCodes";
export const UseCountryCodesServiceGetCountryCodesKeyFn = (
  queryKey?: Array<unknown>
) => [useCountryCodesServiceGetCountryCodesKey, ...(queryKey ?? [])];
export type RouterRuleTemplatesServiceGetRouterRuleTemplatesDefaultResponse =
  Awaited<ReturnType<typeof RouterRuleTemplatesService.getRouterRuleTemplates>>;
export type RouterRuleTemplatesServiceGetRouterRuleTemplatesQueryResult<
  TData = RouterRuleTemplatesServiceGetRouterRuleTemplatesDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useRouterRuleTemplatesServiceGetRouterRuleTemplatesKey =
  "RouterRuleTemplatesServiceGetRouterRuleTemplates";
export const UseRouterRuleTemplatesServiceGetRouterRuleTemplatesKeyFn = (
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
  queryKey?: Array<unknown>
) => [
  useRouterRuleTemplatesServiceGetRouterRuleTemplatesKey,
  ...(queryKey ?? [{ includeGlobal, limit, page, type }]),
];
export type RouterRuleTemplatesServiceGetRouterRuleTemplatesByRouterRuleTemplateIdDefaultResponse =
  Awaited<
    ReturnType<
      typeof RouterRuleTemplatesService.getRouterRuleTemplatesByRouterRuleTemplateId
    >
  >;
export type RouterRuleTemplatesServiceGetRouterRuleTemplatesByRouterRuleTemplateIdQueryResult<
  TData = RouterRuleTemplatesServiceGetRouterRuleTemplatesByRouterRuleTemplateIdDefaultResponse,
  TError = unknown
> = UseQueryResult<TData, TError>;
export const useRouterRuleTemplatesServiceGetRouterRuleTemplatesByRouterRuleTemplateIdKey =
  "RouterRuleTemplatesServiceGetRouterRuleTemplatesByRouterRuleTemplateId";
export const UseRouterRuleTemplatesServiceGetRouterRuleTemplatesByRouterRuleTemplateIdKeyFn =
  (
    {
      routerRuleTemplateId,
      templateId,
    }: {
      routerRuleTemplateId: string;
      templateId: string;
    },
    queryKey?: Array<unknown>
  ) => [
    useRouterRuleTemplatesServiceGetRouterRuleTemplatesByRouterRuleTemplateIdKey,
    ...(queryKey ?? [{ routerRuleTemplateId, templateId }]),
  ];
export type AuthServicePostAuthRegisterMutationResult = Awaited<
  ReturnType<typeof AuthService.postAuthRegister>
>;
export type AuthServicePostAuthRegisterVerifyMutationResult = Awaited<
  ReturnType<typeof AuthService.postAuthRegisterVerify>
>;
export type AuthServicePostAuthRegisterVerifyResendMutationResult = Awaited<
  ReturnType<typeof AuthService.postAuthRegisterVerifyResend>
>;
export type AuthServicePostAuthSignInMutationResult = Awaited<
  ReturnType<typeof AuthService.postAuthSignIn>
>;
export type AuthServicePostAuthSignInVerifyMutationResult = Awaited<
  ReturnType<typeof AuthService.postAuthSignInVerify>
>;
export type AuthServicePostAuthEmailVerifySendMutationResult = Awaited<
  ReturnType<typeof AuthService.postAuthEmailVerifySend>
>;
export type AuthServicePostAuthEmailVerifyMutationResult = Awaited<
  ReturnType<typeof AuthService.postAuthEmailVerify>
>;
export type PasswordManagementServicePostAuthPasswordResetMutationResult =
  Awaited<ReturnType<typeof PasswordManagementService.postAuthPasswordReset>>;
export type PasswordManagementServicePostAuthPasswordResetVerifyMutationResult =
  Awaited<
    ReturnType<typeof PasswordManagementService.postAuthPasswordResetVerify>
  >;
export type PasswordManagementServicePostAuthPasswordChangeMutationResult =
  Awaited<ReturnType<typeof PasswordManagementService.postAuthPasswordChange>>;
export type ApiKeysServicePostApiKeysMutationResult = Awaited<
  ReturnType<typeof ApiKeysService.postApiKeys>
>;
export type OrganizationsServicePostOrgsFirstMutationResult = Awaited<
  ReturnType<typeof OrganizationsService.postOrgsFirst>
>;
export type OrganizationsServicePostOrgsCurrentByOrgIdMutationResult = Awaited<
  ReturnType<typeof OrganizationsService.postOrgsCurrentByOrgId>
>;
export type InvitationsServicePostInvitesMutationResult = Awaited<
  ReturnType<typeof InvitationsService.postInvites>
>;
export type MembersServicePostMembersMutationResult = Awaited<
  ReturnType<typeof MembersService.postMembers>
>;
export type MembersServicePostMembersByUserIdRoleMutationResult = Awaited<
  ReturnType<typeof MembersService.postMembersByUserIdRole>
>;
export type WorkspacesServicePostWorkspacesMutationResult = Awaited<
  ReturnType<typeof WorkspacesService.postWorkspaces>
>;
export type WorkspacesServicePostWorkspacesByWorkspaceIdMembersByUserIdRoleMutationResult =
  Awaited<
    ReturnType<
      typeof WorkspacesService.postWorkspacesByWorkspaceIdMembersByUserIdRole
    >
  >;
export type SettingsServicePostSettingsCustomMutationResult = Awaited<
  ReturnType<typeof SettingsService.postSettingsCustom>
>;
export type WorkspaceSettingsServicePostWorkspacesByWorkspaceIdSettingsCustomMutationResult =
  Awaited<
    ReturnType<
      typeof WorkspaceSettingsService.postWorkspacesByWorkspaceIdSettingsCustom
    >
  >;
export type QrCodeRouterRulesServicePostCodesByCodeIdRouterRulesMutationResult =
  Awaited<
    ReturnType<typeof QrCodeRouterRulesService.postCodesByCodeIdRouterRules>
  >;
export type QrCodesServicePostCodesMutationResult = Awaited<
  ReturnType<typeof QrCodesService.postCodes>
>;
export type QrCodesServicePostCodesByCodeIdRestoreMutationResult = Awaited<
  ReturnType<typeof QrCodesService.postCodesByCodeIdRestore>
>;
export type QrCodesServicePostCodesValidateMutationResult = Awaited<
  ReturnType<typeof QrCodesService.postCodesValidate>
>;
export type QrCodesServicePostCodesByCodeIdValidateMutationResult = Awaited<
  ReturnType<typeof QrCodesService.postCodesByCodeIdValidate>
>;
export type QrCodesServicePostCodesLinksRefreshMutationResult = Awaited<
  ReturnType<typeof QrCodesService.postCodesLinksRefresh>
>;
export type QrCodeLinksServicePostCodesGenerateByTypeMutationResult = Awaited<
  ReturnType<typeof QrCodeLinksService.postCodesGenerateByType>
>;
export type QrCodeVersionsServicePostCodesByCodeIdVersionByVersionRestoreMutationResult =
  Awaited<
    ReturnType<
      typeof QrCodeVersionsService.postCodesByCodeIdVersionByVersionRestore
    >
  >;
export type TemplatesServicePostTemplatesMutationResult = Awaited<
  ReturnType<typeof TemplatesService.postTemplates>
>;
export type StylesServicePostStylesMutationResult = Awaited<
  ReturnType<typeof StylesService.postStyles>
>;
export type TextsServicePostTextsMutationResult = Awaited<
  ReturnType<typeof TextsService.postTexts>
>;
export type BordersServicePostBordersMutationResult = Awaited<
  ReturnType<typeof BordersService.postBorders>
>;
export type RouterRuleTemplatesServicePostRouterRuleTemplatesMutationResult =
  Awaited<
    ReturnType<typeof RouterRuleTemplatesService.postRouterRuleTemplates>
  >;
export type RouterRuleTemplatesServicePostWorkspacesByWorkspaceIdRouterRuleTemplatesMutationResult =
  Awaited<
    ReturnType<
      typeof RouterRuleTemplatesService.postWorkspacesByWorkspaceIdRouterRuleTemplates
    >
  >;
export type ApiKeysServicePutApiKeysByApiKeyIdMutationResult = Awaited<
  ReturnType<typeof ApiKeysService.putApiKeysByApiKeyId>
>;
export type ApiKeysServicePutApiKeysByApiKeyIdStatusMutationResult = Awaited<
  ReturnType<typeof ApiKeysService.putApiKeysByApiKeyIdStatus>
>;
export type OrganizationsServicePutOrgsMutationResult = Awaited<
  ReturnType<typeof OrganizationsService.putOrgs>
>;
export type WorkspacesServicePutWorkspacesByWorkspaceIdMutationResult = Awaited<
  ReturnType<typeof WorkspacesService.putWorkspacesByWorkspaceId>
>;
export type SettingsServicePutSettingsCustomBySettingSlugMutationResult =
  Awaited<ReturnType<typeof SettingsService.putSettingsCustomBySettingSlug>>;
export type SettingsServicePutSettingsServiceBySettingSlugMutationResult =
  Awaited<ReturnType<typeof SettingsService.putSettingsServiceBySettingSlug>>;
export type WorkspaceSettingsServicePutWorkspacesByWorkspaceIdSettingsCustomBySettingSlugMutationResult =
  Awaited<
    ReturnType<
      typeof WorkspaceSettingsService.putWorkspacesByWorkspaceIdSettingsCustomBySettingSlug
    >
  >;
export type WorkspaceSettingsServicePutWorkspacesByWorkspaceIdSettingsServiceBySettingSlugMutationResult =
  Awaited<
    ReturnType<
      typeof WorkspaceSettingsService.putWorkspacesByWorkspaceIdSettingsServiceBySettingSlug
    >
  >;
export type QrCodeRouterRulesServicePutCodesByCodeIdRouterRulesByRouterRuleIdMutationResult =
  Awaited<
    ReturnType<
      typeof QrCodeRouterRulesService.putCodesByCodeIdRouterRulesByRouterRuleId
    >
  >;
export type QrCodesServicePutCodesByCodeIdMutationResult = Awaited<
  ReturnType<typeof QrCodesService.putCodesByCodeId>
>;
export type QrCodesServicePutCodesByCodeIdOptionsMutationResult = Awaited<
  ReturnType<typeof QrCodesService.putCodesByCodeIdOptions>
>;
export type TemplatesServicePutTemplatesByTemplateIdMutationResult = Awaited<
  ReturnType<typeof TemplatesService.putTemplatesByTemplateId>
>;
export type TemplatesServicePutTemplatesByTemplateIdOptionsMutationResult =
  Awaited<ReturnType<typeof TemplatesService.putTemplatesByTemplateIdOptions>>;
export type StylesServicePutStylesByStyleIdMutationResult = Awaited<
  ReturnType<typeof StylesService.putStylesByStyleId>
>;
export type StylesServicePutStylesByStyleIdOptionsMutationResult = Awaited<
  ReturnType<typeof StylesService.putStylesByStyleIdOptions>
>;
export type TextsServicePutTextsByTextIdMutationResult = Awaited<
  ReturnType<typeof TextsService.putTextsByTextId>
>;
export type TextsServicePutTextsByTextIdOptionsMutationResult = Awaited<
  ReturnType<typeof TextsService.putTextsByTextIdOptions>
>;
export type BordersServicePutBordersByBorderIdMutationResult = Awaited<
  ReturnType<typeof BordersService.putBordersByBorderId>
>;
export type BordersServicePutBordersByBorderIdOptionsMutationResult = Awaited<
  ReturnType<typeof BordersService.putBordersByBorderIdOptions>
>;
export type RouterRuleTemplatesServicePutRouterRuleTemplatesByRouterRuleTemplateIdMutationResult =
  Awaited<
    ReturnType<
      typeof RouterRuleTemplatesService.putRouterRuleTemplatesByRouterRuleTemplateId
    >
  >;
export type ApiKeysServiceDeleteApiKeysByApiKeyIdMutationResult = Awaited<
  ReturnType<typeof ApiKeysService.deleteApiKeysByApiKeyId>
>;
export type InvitationsServiceDeleteInvitesByInvitationIdMutationResult =
  Awaited<ReturnType<typeof InvitationsService.deleteInvitesByInvitationId>>;
export type MembersServiceDeleteMembersByUserIdMutationResult = Awaited<
  ReturnType<typeof MembersService.deleteMembersByUserId>
>;
export type MembersServiceDeleteMembersByUserIdRoleByRoleNameMutationResult =
  Awaited<
    ReturnType<typeof MembersService.deleteMembersByUserIdRoleByRoleName>
  >;
export type WorkspacesServiceDeleteWorkspacesByWorkspaceIdMutationResult =
  Awaited<ReturnType<typeof WorkspacesService.deleteWorkspacesByWorkspaceId>>;
export type WorkspacesServiceDeleteWorkspacesByWorkspaceIdMembersByUserIdRoleMutationResult =
  Awaited<
    ReturnType<
      typeof WorkspacesService.deleteWorkspacesByWorkspaceIdMembersByUserIdRole
    >
  >;
export type SettingsServiceDeleteSettingsCustomBySettingSlugMutationResult =
  Awaited<ReturnType<typeof SettingsService.deleteSettingsCustomBySettingSlug>>;
export type WorkspaceSettingsServiceDeleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlugMutationResult =
  Awaited<
    ReturnType<
      typeof WorkspaceSettingsService.deleteWorkspacesByWorkspaceIdSettingsCustomBySettingSlug
    >
  >;
export type WorkspaceSettingsServiceDeleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlugMutationResult =
  Awaited<
    ReturnType<
      typeof WorkspaceSettingsService.deleteWorkspacesByWorkspaceIdSettingsServiceBySettingSlug
    >
  >;
export type QrCodeRouterRulesServiceDeleteCodesByCodeIdRouterRulesByRouterRuleIdMutationResult =
  Awaited<
    ReturnType<
      typeof QrCodeRouterRulesService.deleteCodesByCodeIdRouterRulesByRouterRuleId
    >
  >;
export type QrCodesServiceDeleteCodesByCodeIdMutationResult = Awaited<
  ReturnType<typeof QrCodesService.deleteCodesByCodeId>
>;
export type QrCodesServiceDeleteCodesMutationResult = Awaited<
  ReturnType<typeof QrCodesService.deleteCodes>
>;
export type QrCodesServiceDeleteCodesPermanentMutationResult = Awaited<
  ReturnType<typeof QrCodesService.deleteCodesPermanent>
>;
export type QrCodesServiceDeleteCodesByCodeIdPermanentMutationResult = Awaited<
  ReturnType<typeof QrCodesService.deleteCodesByCodeIdPermanent>
>;
export type QrCodeLinksServiceDeleteCodesByCodeIdVersionsByVersionLinksMutationResult =
  Awaited<
    ReturnType<
      typeof QrCodeLinksService.deleteCodesByCodeIdVersionsByVersionLinks
    >
  >;
export type QrCodeLinksServiceDeleteCodesByCodeIdVersionsByVersionLinksByTypeMutationResult =
  Awaited<
    ReturnType<
      typeof QrCodeLinksService.deleteCodesByCodeIdVersionsByVersionLinksByType
    >
  >;
export type QrCodeLinksServiceDeleteCodesByCodeIdVersionsLinksMutationResult =
  Awaited<
    ReturnType<typeof QrCodeLinksService.deleteCodesByCodeIdVersionsLinks>
  >;
export type QrCodeLinksServiceDeleteCodesByCodeIdVersionsLinksByTypeMutationResult =
  Awaited<
    ReturnType<typeof QrCodeLinksService.deleteCodesByCodeIdVersionsLinksByType>
  >;
export type QrCodeLinksServiceDeleteCodesByCodeIdLinksMutationResult = Awaited<
  ReturnType<typeof QrCodeLinksService.deleteCodesByCodeIdLinks>
>;
export type QrCodeLinksServiceDeleteCodesByCodeIdLinksByTypeMutationResult =
  Awaited<ReturnType<typeof QrCodeLinksService.deleteCodesByCodeIdLinksByType>>;
export type QrCodeVersionsServiceDeleteCodesByCodeIdVersionsMutationResult =
  Awaited<ReturnType<typeof QrCodeVersionsService.deleteCodesByCodeIdVersions>>;
export type TemplatesServiceDeleteTemplatesByTemplateIdMutationResult = Awaited<
  ReturnType<typeof TemplatesService.deleteTemplatesByTemplateId>
>;
export type StylesServiceDeleteStylesByStyleIdMutationResult = Awaited<
  ReturnType<typeof StylesService.deleteStylesByStyleId>
>;
export type TextsServiceDeleteTextsByTextIdMutationResult = Awaited<
  ReturnType<typeof TextsService.deleteTextsByTextId>
>;
export type BordersServiceDeleteBordersByBorderIdMutationResult = Awaited<
  ReturnType<typeof BordersService.deleteBordersByBorderId>
>;
export type RouterRuleTemplatesServiceDeleteRouterRuleTemplatesByRouterRuleTemplateIdMutationResult =
  Awaited<
    ReturnType<
      typeof RouterRuleTemplatesService.deleteRouterRuleTemplatesByRouterRuleTemplateId
    >
  >;
