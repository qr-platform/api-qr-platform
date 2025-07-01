// generated with @7nohe/openapi-react-query-codegen@1.6.2

import { type QueryClient } from "@tanstack/react-query";
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
export const ensureUseAuthServiceGetAuthMeData = (queryClient: QueryClient) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseAuthServiceGetAuthMeKeyFn(),
    queryFn: () => AuthService.getAuthMe(),
  });
export const ensureUseAuthServiceGetAuthSignOutData = (
  queryClient: QueryClient
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseAuthServiceGetAuthSignOutKeyFn(),
    queryFn: () => AuthService.getAuthSignOut(),
  });
export const ensureUseApiKeysServiceGetApiKeysData = (
  queryClient: QueryClient
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseApiKeysServiceGetApiKeysKeyFn(),
    queryFn: () => ApiKeysService.getApiKeys(),
  });
export const ensureUseApiKeysServiceGetApiKeysByApiKeyIdData = (
  queryClient: QueryClient,
  {
    apiKeyId,
  }: {
    apiKeyId: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseApiKeysServiceGetApiKeysByApiKeyIdKeyFn({ apiKeyId }),
    queryFn: () => ApiKeysService.getApiKeysByApiKeyId({ apiKeyId }),
  });
export const ensureUseOrganizationsServiceGetOrgsCurrentData = (
  queryClient: QueryClient
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseOrganizationsServiceGetOrgsCurrentKeyFn(),
    queryFn: () => OrganizationsService.getOrgsCurrent(),
  });
export const ensureUseInvitationsServiceGetInvitesData = (
  queryClient: QueryClient
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseInvitationsServiceGetInvitesKeyFn(),
    queryFn: () => InvitationsService.getInvites(),
  });
export const ensureUseInvitationsServiceGetInvitesMeData = (
  queryClient: QueryClient
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseInvitationsServiceGetInvitesMeKeyFn(),
    queryFn: () => InvitationsService.getInvitesMe(),
  });
export const ensureUseInvitationsServiceGetInvitesByTokenAcceptData = (
  queryClient: QueryClient,
  {
    token,
  }: {
    token: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseInvitationsServiceGetInvitesByTokenAcceptKeyFn({
      token,
    }),
    queryFn: () => InvitationsService.getInvitesByTokenAccept({ token }),
  });
export const ensureUseInvitationsServiceGetInvitesByTokenDeclineData = (
  queryClient: QueryClient,
  {
    token,
  }: {
    token: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseInvitationsServiceGetInvitesByTokenDeclineKeyFn({
      token,
    }),
    queryFn: () => InvitationsService.getInvitesByTokenDecline({ token }),
  });
export const ensureUseMembersServiceGetMembersData = (
  queryClient: QueryClient
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseMembersServiceGetMembersKeyFn(),
    queryFn: () => MembersService.getMembers(),
  });
export const ensureUseMembersServiceGetMembersByUserIdRolesData = (
  queryClient: QueryClient,
  {
    userId,
  }: {
    userId: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseMembersServiceGetMembersByUserIdRolesKeyFn({ userId }),
    queryFn: () => MembersService.getMembersByUserIdRoles({ userId }),
  });
export const ensureUseWorkspacesServiceGetWorkspacesData = (
  queryClient: QueryClient
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseWorkspacesServiceGetWorkspacesKeyFn(),
    queryFn: () => WorkspacesService.getWorkspaces(),
  });
export const ensureUseWorkspacesServiceGetWorkspacesByWorkspaceIdData = (
  queryClient: QueryClient,
  {
    workspaceId,
  }: {
    workspaceId: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseWorkspacesServiceGetWorkspacesByWorkspaceIdKeyFn({
      workspaceId,
    }),
    queryFn: () =>
      WorkspacesService.getWorkspacesByWorkspaceId({ workspaceId }),
  });
export const ensureUseWorkspacesServiceGetWorkspacesByWorkspaceIdMembersByUserIdRoleData =
  (
    queryClient: QueryClient,
    {
      userId,
      workspaceId,
    }: {
      userId: string;
      workspaceId: string;
    }
  ) =>
    queryClient.ensureQueryData({
      queryKey:
        Common.UseWorkspacesServiceGetWorkspacesByWorkspaceIdMembersByUserIdRoleKeyFn(
          { userId, workspaceId }
        ),
      queryFn: () =>
        WorkspacesService.getWorkspacesByWorkspaceIdMembersByUserIdRole({
          userId,
          workspaceId,
        }),
    });
export const ensureUseWorkspacesServiceGetWorkspacesByWorkspaceIdMembersData = (
  queryClient: QueryClient,
  {
    workspaceId,
  }: {
    workspaceId: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseWorkspacesServiceGetWorkspacesByWorkspaceIdMembersKeyFn(
      { workspaceId }
    ),
    queryFn: () =>
      WorkspacesService.getWorkspacesByWorkspaceIdMembers({ workspaceId }),
  });
export const ensureUseRolesServiceGetRolesData = (
  queryClient: QueryClient,
  {
    includeScopes,
  }: {
    includeScopes?: boolean;
  } = {}
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseRolesServiceGetRolesKeyFn({ includeScopes }),
    queryFn: () => RolesService.getRoles({ includeScopes }),
  });
export const ensureUsePlansServiceGetPlansData = (queryClient: QueryClient) =>
  queryClient.ensureQueryData({
    queryKey: Common.UsePlansServiceGetPlansKeyFn(),
    queryFn: () => PlansService.getPlans(),
  });
export const ensureUsePlansServiceGetPlansCurrentData = (
  queryClient: QueryClient
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UsePlansServiceGetPlansCurrentKeyFn(),
    queryFn: () => PlansService.getPlansCurrent(),
  });
export const ensureUseSettingsServiceGetSettingsData = (
  queryClient: QueryClient
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseSettingsServiceGetSettingsKeyFn(),
    queryFn: () => SettingsService.getSettings(),
  });
export const ensureUseSettingsServiceGetSettingsCustomData = (
  queryClient: QueryClient
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseSettingsServiceGetSettingsCustomKeyFn(),
    queryFn: () => SettingsService.getSettingsCustom(),
  });
export const ensureUseSettingsServiceGetSettingsCustomBySettingSlugData = (
  queryClient: QueryClient,
  {
    settingSlug,
  }: {
    settingSlug: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseSettingsServiceGetSettingsCustomBySettingSlugKeyFn({
      settingSlug,
    }),
    queryFn: () =>
      SettingsService.getSettingsCustomBySettingSlug({ settingSlug }),
  });
export const ensureUseSettingsServiceGetSettingsCustomBySettingSlugValueData = (
  queryClient: QueryClient,
  {
    settingSlug,
  }: {
    settingSlug: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseSettingsServiceGetSettingsCustomBySettingSlugValueKeyFn(
      { settingSlug }
    ),
    queryFn: () =>
      SettingsService.getSettingsCustomBySettingSlugValue({ settingSlug }),
  });
export const ensureUseSettingsServiceGetSettingsServiceData = (
  queryClient: QueryClient
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseSettingsServiceGetSettingsServiceKeyFn(),
    queryFn: () => SettingsService.getSettingsService(),
  });
export const ensureUseSettingsServiceGetSettingsServiceBySettingSlugData = (
  queryClient: QueryClient,
  {
    settingSlug,
  }: {
    settingSlug: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseSettingsServiceGetSettingsServiceBySettingSlugKeyFn({
      settingSlug,
    }),
    queryFn: () =>
      SettingsService.getSettingsServiceBySettingSlug({ settingSlug }),
  });
export const ensureUseSettingsServiceGetSettingsServiceBySettingSlugValueData =
  (
    queryClient: QueryClient,
    {
      settingSlug,
    }: {
      settingSlug: string;
    }
  ) =>
    queryClient.ensureQueryData({
      queryKey:
        Common.UseSettingsServiceGetSettingsServiceBySettingSlugValueKeyFn({
          settingSlug,
        }),
      queryFn: () =>
        SettingsService.getSettingsServiceBySettingSlugValue({ settingSlug }),
    });
export const ensureUseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsData =
  (
    queryClient: QueryClient,
    {
      workspaceId,
    }: {
      workspaceId: string;
    }
  ) =>
    queryClient.ensureQueryData({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsKeyFn(
          { workspaceId }
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettings({
          workspaceId,
        }),
    });
export const ensureUseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomData =
  (
    queryClient: QueryClient,
    {
      workspaceId,
    }: {
      workspaceId: string;
    }
  ) =>
    queryClient.ensureQueryData({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomKeyFn(
          { workspaceId }
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsCustom({
          workspaceId,
        }),
    });
export const ensureUseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugData =
  (
    queryClient: QueryClient,
    {
      settingSlug,
      workspaceId,
    }: {
      settingSlug: string;
      workspaceId: string;
    }
  ) =>
    queryClient.ensureQueryData({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugKeyFn(
          { settingSlug, workspaceId }
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsCustomBySettingSlug(
          { settingSlug, workspaceId }
        ),
    });
export const ensureUseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueData =
  (
    queryClient: QueryClient,
    {
      settingSlug,
      workspaceId,
    }: {
      settingSlug: string;
      workspaceId: string;
    }
  ) =>
    queryClient.ensureQueryData({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueKeyFn(
          { settingSlug, workspaceId }
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValue(
          { settingSlug, workspaceId }
        ),
    });
export const ensureUseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceData =
  (
    queryClient: QueryClient,
    {
      workspaceId,
    }: {
      workspaceId: string;
    }
  ) =>
    queryClient.ensureQueryData({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceKeyFn(
          { workspaceId }
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsService({
          workspaceId,
        }),
    });
export const ensureUseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugData =
  (
    queryClient: QueryClient,
    {
      settingSlug,
      workspaceId,
    }: {
      settingSlug: string;
      workspaceId: string;
    }
  ) =>
    queryClient.ensureQueryData({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugKeyFn(
          { settingSlug, workspaceId }
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsServiceBySettingSlug(
          { settingSlug, workspaceId }
        ),
    });
export const ensureUseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueData =
  (
    queryClient: QueryClient,
    {
      settingSlug,
      workspaceId,
    }: {
      settingSlug: string;
      workspaceId: string;
    }
  ) =>
    queryClient.ensureQueryData({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueKeyFn(
          { settingSlug, workspaceId }
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValue(
          { settingSlug, workspaceId }
        ),
    });
export const ensureUseQrCodeScansServiceGetCodesByCodeIdScansData = (
  queryClient: QueryClient,
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
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseQrCodeScansServiceGetCodesByCodeIdScansKeyFn({
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
    }),
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
      }),
  });
export const ensureUseQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesData =
  (
    queryClient: QueryClient,
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
    }
  ) =>
    queryClient.ensureQueryData({
      queryKey:
        Common.UseQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesKeyFn({
          codeId,
          dataType,
          includeDisabled,
          limit,
          page,
          priority,
          type,
        }),
      queryFn: () =>
        QrCodeRouterRulesService.getCodesByCodeIdRouterRules({
          codeId,
          dataType,
          includeDisabled,
          limit,
          page,
          priority,
          type,
        }),
    });
export const ensureUseQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesByRouterRuleIdData =
  (
    queryClient: QueryClient,
    {
      codeId,
      routerRuleId,
    }: {
      codeId: string;
      routerRuleId: string;
    }
  ) =>
    queryClient.ensureQueryData({
      queryKey:
        Common.UseQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesByRouterRuleIdKeyFn(
          { codeId, routerRuleId }
        ),
      queryFn: () =>
        QrCodeRouterRulesService.getCodesByCodeIdRouterRulesByRouterRuleId({
          codeId,
          routerRuleId,
        }),
    });
export const ensureUseQrCodeRouterRulesServiceGetRouterRulesData = (
  queryClient: QueryClient,
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
  } = {}
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseQrCodeRouterRulesServiceGetRouterRulesKeyFn({
      codeId,
      dataType,
      includeDisabled,
      limit,
      page,
      priority,
      type,
      workspaceId,
    }),
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
      }),
  });
export const ensureUseQrCodeRouterRulesServiceGetWorkspacesByWorkspaceIdRouterRulesData =
  (
    queryClient: QueryClient,
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
    }
  ) =>
    queryClient.ensureQueryData({
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
          }
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
        }),
    });
export const ensureUseQrCodesServiceGetCodesDeletedData = (
  queryClient: QueryClient,
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
  } = {}
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseQrCodesServiceGetCodesDeletedKeyFn({
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
    }),
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
      }),
  });
export const ensureUseQrCodesServiceGetCodesByCodeIdData = (
  queryClient: QueryClient,
  {
    codeId,
  }: {
    codeId: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseQrCodesServiceGetCodesByCodeIdKeyFn({ codeId }),
    queryFn: () => QrCodesService.getCodesByCodeId({ codeId }),
  });
export const ensureUseQrCodesServiceGetCodesData = (
  queryClient: QueryClient,
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
  } = {}
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseQrCodesServiceGetCodesKeyFn({
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
    }),
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
      }),
  });
export const ensureUseQrCodeLinksServiceGetCodesLinksData = (
  queryClient: QueryClient,
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
  } = {}
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseQrCodeLinksServiceGetCodesLinksKeyFn({
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
    }),
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
      }),
  });
export const ensureUseQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeData =
  (
    queryClient: QueryClient,
    {
      codeId,
      type,
      version,
    }: {
      codeId: string;
      type: "svg" | "png" | "pdf";
      version: number;
    }
  ) =>
    queryClient.ensureQueryData({
      queryKey:
        Common.UseQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeKeyFn(
          { codeId, type, version }
        ),
      queryFn: () =>
        QrCodeLinksService.getCodesByCodeIdVersionByVersionByType({
          codeId,
          type,
          version,
        }),
    });
export const ensureUseQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeLinkData =
  (
    queryClient: QueryClient,
    {
      codeId,
      type,
      version,
    }: {
      codeId: string;
      type: "svg" | "png" | "pdf";
      version: number;
    }
  ) =>
    queryClient.ensureQueryData({
      queryKey:
        Common.UseQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeLinkKeyFn(
          { codeId, type, version }
        ),
      queryFn: () =>
        QrCodeLinksService.getCodesByCodeIdVersionByVersionByTypeLink({
          codeId,
          type,
          version,
        }),
    });
export const ensureUseQrCodeLinksServiceGetCodesByCodeIdByTypeData = (
  queryClient: QueryClient,
  {
    codeId,
    type,
  }: {
    codeId: string;
    type: "svg" | "png" | "pdf";
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseQrCodeLinksServiceGetCodesByCodeIdByTypeKeyFn({
      codeId,
      type,
    }),
    queryFn: () => QrCodeLinksService.getCodesByCodeIdByType({ codeId, type }),
  });
export const ensureUseQrCodeLinksServiceGetCodesByCodeIdByTypeLinkData = (
  queryClient: QueryClient,
  {
    codeId,
    type,
  }: {
    codeId: string;
    type: "svg" | "png" | "pdf";
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseQrCodeLinksServiceGetCodesByCodeIdByTypeLinkKeyFn({
      codeId,
      type,
    }),
    queryFn: () =>
      QrCodeLinksService.getCodesByCodeIdByTypeLink({ codeId, type }),
  });
export const ensureUseQrCodeVersionsServiceGetCodesByCodeIdVersionByVersionData =
  (
    queryClient: QueryClient,
    {
      codeId,
      version,
    }: {
      codeId: string;
      version: number;
    }
  ) =>
    queryClient.ensureQueryData({
      queryKey:
        Common.UseQrCodeVersionsServiceGetCodesByCodeIdVersionByVersionKeyFn({
          codeId,
          version,
        }),
      queryFn: () =>
        QrCodeVersionsService.getCodesByCodeIdVersionByVersion({
          codeId,
          version,
        }),
    });
export const ensureUseQrCodeVersionsServiceGetCodesByCodeIdVersionsData = (
  queryClient: QueryClient,
  {
    codeId,
  }: {
    codeId: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseQrCodeVersionsServiceGetCodesByCodeIdVersionsKeyFn({
      codeId,
    }),
    queryFn: () => QrCodeVersionsService.getCodesByCodeIdVersions({ codeId }),
  });
export const ensureUseTemplatesServiceGetTemplatesData = (
  queryClient: QueryClient,
  {
    name,
  }: {
    name?: string;
  } = {}
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseTemplatesServiceGetTemplatesKeyFn({ name }),
    queryFn: () => TemplatesService.getTemplates({ name }),
  });
export const ensureUseTemplatesServiceGetTemplatesBaseData = (
  queryClient: QueryClient,
  {
    name,
  }: {
    name?: string;
  } = {}
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseTemplatesServiceGetTemplatesBaseKeyFn({ name }),
    queryFn: () => TemplatesService.getTemplatesBase({ name }),
  });
export const ensureUseTemplatesServiceGetTemplatesByTemplateIdData = (
  queryClient: QueryClient,
  {
    templateId,
  }: {
    templateId: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseTemplatesServiceGetTemplatesByTemplateIdKeyFn({
      templateId,
    }),
    queryFn: () => TemplatesService.getTemplatesByTemplateId({ templateId }),
  });
export const ensureUseTemplatesServiceGetTemplatesWorkspaceByWorkspaceIdData = (
  queryClient: QueryClient,
  {
    name,
    workspaceId,
  }: {
    name?: string;
    workspaceId: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseTemplatesServiceGetTemplatesWorkspaceByWorkspaceIdKeyFn(
      { name, workspaceId }
    ),
    queryFn: () =>
      TemplatesService.getTemplatesWorkspaceByWorkspaceId({
        name,
        workspaceId,
      }),
  });
export const ensureUseStylesServiceGetStylesData = (
  queryClient: QueryClient,
  {
    name,
  }: {
    name?: string;
  } = {}
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseStylesServiceGetStylesKeyFn({ name }),
    queryFn: () => StylesService.getStyles({ name }),
  });
export const ensureUseStylesServiceGetStylesBaseData = (
  queryClient: QueryClient,
  {
    name,
  }: {
    name?: string;
  } = {}
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseStylesServiceGetStylesBaseKeyFn({ name }),
    queryFn: () => StylesService.getStylesBase({ name }),
  });
export const ensureUseStylesServiceGetStylesByStyleIdData = (
  queryClient: QueryClient,
  {
    styleId,
  }: {
    styleId: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseStylesServiceGetStylesByStyleIdKeyFn({ styleId }),
    queryFn: () => StylesService.getStylesByStyleId({ styleId }),
  });
export const ensureUseStylesServiceGetStylesWorkspaceByWorkspaceIdData = (
  queryClient: QueryClient,
  {
    name,
    workspaceId,
  }: {
    name?: string;
    workspaceId: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseStylesServiceGetStylesWorkspaceByWorkspaceIdKeyFn({
      name,
      workspaceId,
    }),
    queryFn: () =>
      StylesService.getStylesWorkspaceByWorkspaceId({ name, workspaceId }),
  });
export const ensureUseTextsServiceGetTextsData = (
  queryClient: QueryClient,
  {
    name,
  }: {
    name?: string;
  } = {}
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseTextsServiceGetTextsKeyFn({ name }),
    queryFn: () => TextsService.getTexts({ name }),
  });
export const ensureUseTextsServiceGetTextsBaseData = (
  queryClient: QueryClient,
  {
    name,
  }: {
    name?: string;
  } = {}
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseTextsServiceGetTextsBaseKeyFn({ name }),
    queryFn: () => TextsService.getTextsBase({ name }),
  });
export const ensureUseTextsServiceGetTextsByTextIdData = (
  queryClient: QueryClient,
  {
    textId,
  }: {
    textId: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseTextsServiceGetTextsByTextIdKeyFn({ textId }),
    queryFn: () => TextsService.getTextsByTextId({ textId }),
  });
export const ensureUseTextsServiceGetTextsWorkspaceByWorkspaceIdData = (
  queryClient: QueryClient,
  {
    name,
    workspaceId,
  }: {
    name?: string;
    workspaceId: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseTextsServiceGetTextsWorkspaceByWorkspaceIdKeyFn({
      name,
      workspaceId,
    }),
    queryFn: () =>
      TextsService.getTextsWorkspaceByWorkspaceId({ name, workspaceId }),
  });
export const ensureUseBordersServiceGetBordersData = (
  queryClient: QueryClient,
  {
    name,
  }: {
    name?: string;
  } = {}
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseBordersServiceGetBordersKeyFn({ name }),
    queryFn: () => BordersService.getBorders({ name }),
  });
export const ensureUseBordersServiceGetBordersBaseData = (
  queryClient: QueryClient,
  {
    name,
  }: {
    name?: string;
  } = {}
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseBordersServiceGetBordersBaseKeyFn({ name }),
    queryFn: () => BordersService.getBordersBase({ name }),
  });
export const ensureUseBordersServiceGetBordersByBorderIdData = (
  queryClient: QueryClient,
  {
    borderId,
  }: {
    borderId: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseBordersServiceGetBordersByBorderIdKeyFn({ borderId }),
    queryFn: () => BordersService.getBordersByBorderId({ borderId }),
  });
export const ensureUseBordersServiceGetBordersWorkspaceByWorkspaceIdData = (
  queryClient: QueryClient,
  {
    name,
    workspaceId,
  }: {
    name?: string;
    workspaceId: string;
  }
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseBordersServiceGetBordersWorkspaceByWorkspaceIdKeyFn({
      name,
      workspaceId,
    }),
    queryFn: () =>
      BordersService.getBordersWorkspaceByWorkspaceId({ name, workspaceId }),
  });
export const ensureUseCountryCodesServiceGetCountryCodesData = (
  queryClient: QueryClient
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseCountryCodesServiceGetCountryCodesKeyFn(),
    queryFn: () => CountryCodesService.getCountryCodes(),
  });
export const ensureUseRouterRuleTemplatesServiceGetRouterRuleTemplatesData = (
  queryClient: QueryClient,
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
  } = {}
) =>
  queryClient.ensureQueryData({
    queryKey: Common.UseRouterRuleTemplatesServiceGetRouterRuleTemplatesKeyFn({
      includeGlobal,
      limit,
      page,
      type,
    }),
    queryFn: () =>
      RouterRuleTemplatesService.getRouterRuleTemplates({
        includeGlobal,
        limit,
        page,
        type,
      }),
  });
export const ensureUseRouterRuleTemplatesServiceGetRouterRuleTemplatesByRouterRuleTemplateIdData =
  (
    queryClient: QueryClient,
    {
      routerRuleTemplateId,
      templateId,
    }: {
      routerRuleTemplateId: string;
      templateId: string;
    }
  ) =>
    queryClient.ensureQueryData({
      queryKey:
        Common.UseRouterRuleTemplatesServiceGetRouterRuleTemplatesByRouterRuleTemplateIdKeyFn(
          { routerRuleTemplateId, templateId }
        ),
      queryFn: () =>
        RouterRuleTemplatesService.getRouterRuleTemplatesByRouterRuleTemplateId(
          { routerRuleTemplateId, templateId }
        ),
    });
