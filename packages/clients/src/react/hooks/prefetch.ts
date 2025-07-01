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
export const prefetchUseAuthServiceGetAuthMe = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseAuthServiceGetAuthMeKeyFn(),
    queryFn: () => AuthService.getAuthMe(),
  });
export const prefetchUseAuthServiceGetAuthSignOut = (
  queryClient: QueryClient
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseAuthServiceGetAuthSignOutKeyFn(),
    queryFn: () => AuthService.getAuthSignOut(),
  });
export const prefetchUseApiKeysServiceGetApiKeys = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseApiKeysServiceGetApiKeysKeyFn(),
    queryFn: () => ApiKeysService.getApiKeys(),
  });
export const prefetchUseApiKeysServiceGetApiKeysByApiKeyId = (
  queryClient: QueryClient,
  {
    apiKeyId,
  }: {
    apiKeyId: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseApiKeysServiceGetApiKeysByApiKeyIdKeyFn({ apiKeyId }),
    queryFn: () => ApiKeysService.getApiKeysByApiKeyId({ apiKeyId }),
  });
export const prefetchUseOrganizationsServiceGetOrgsCurrent = (
  queryClient: QueryClient
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseOrganizationsServiceGetOrgsCurrentKeyFn(),
    queryFn: () => OrganizationsService.getOrgsCurrent(),
  });
export const prefetchUseInvitationsServiceGetInvites = (
  queryClient: QueryClient
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseInvitationsServiceGetInvitesKeyFn(),
    queryFn: () => InvitationsService.getInvites(),
  });
export const prefetchUseInvitationsServiceGetInvitesMe = (
  queryClient: QueryClient
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseInvitationsServiceGetInvitesMeKeyFn(),
    queryFn: () => InvitationsService.getInvitesMe(),
  });
export const prefetchUseInvitationsServiceGetInvitesByTokenAccept = (
  queryClient: QueryClient,
  {
    token,
  }: {
    token: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseInvitationsServiceGetInvitesByTokenAcceptKeyFn({
      token,
    }),
    queryFn: () => InvitationsService.getInvitesByTokenAccept({ token }),
  });
export const prefetchUseInvitationsServiceGetInvitesByTokenDecline = (
  queryClient: QueryClient,
  {
    token,
  }: {
    token: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseInvitationsServiceGetInvitesByTokenDeclineKeyFn({
      token,
    }),
    queryFn: () => InvitationsService.getInvitesByTokenDecline({ token }),
  });
export const prefetchUseMembersServiceGetMembers = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMembersServiceGetMembersKeyFn(),
    queryFn: () => MembersService.getMembers(),
  });
export const prefetchUseMembersServiceGetMembersByUserIdRoles = (
  queryClient: QueryClient,
  {
    userId,
  }: {
    userId: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseMembersServiceGetMembersByUserIdRolesKeyFn({ userId }),
    queryFn: () => MembersService.getMembersByUserIdRoles({ userId }),
  });
export const prefetchUseWorkspacesServiceGetWorkspaces = (
  queryClient: QueryClient
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseWorkspacesServiceGetWorkspacesKeyFn(),
    queryFn: () => WorkspacesService.getWorkspaces(),
  });
export const prefetchUseWorkspacesServiceGetWorkspacesByWorkspaceId = (
  queryClient: QueryClient,
  {
    workspaceId,
  }: {
    workspaceId: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseWorkspacesServiceGetWorkspacesByWorkspaceIdKeyFn({
      workspaceId,
    }),
    queryFn: () =>
      WorkspacesService.getWorkspacesByWorkspaceId({ workspaceId }),
  });
export const prefetchUseWorkspacesServiceGetWorkspacesByWorkspaceIdMembersByUserIdRole =
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
    queryClient.prefetchQuery({
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
export const prefetchUseWorkspacesServiceGetWorkspacesByWorkspaceIdMembers = (
  queryClient: QueryClient,
  {
    workspaceId,
  }: {
    workspaceId: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseWorkspacesServiceGetWorkspacesByWorkspaceIdMembersKeyFn(
      { workspaceId }
    ),
    queryFn: () =>
      WorkspacesService.getWorkspacesByWorkspaceIdMembers({ workspaceId }),
  });
export const prefetchUseRolesServiceGetRoles = (
  queryClient: QueryClient,
  {
    includeScopes,
  }: {
    includeScopes?: boolean;
  } = {}
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseRolesServiceGetRolesKeyFn({ includeScopes }),
    queryFn: () => RolesService.getRoles({ includeScopes }),
  });
export const prefetchUsePlansServiceGetPlans = (queryClient: QueryClient) =>
  queryClient.prefetchQuery({
    queryKey: Common.UsePlansServiceGetPlansKeyFn(),
    queryFn: () => PlansService.getPlans(),
  });
export const prefetchUsePlansServiceGetPlansCurrent = (
  queryClient: QueryClient
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UsePlansServiceGetPlansCurrentKeyFn(),
    queryFn: () => PlansService.getPlansCurrent(),
  });
export const prefetchUseSettingsServiceGetSettings = (
  queryClient: QueryClient
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseSettingsServiceGetSettingsKeyFn(),
    queryFn: () => SettingsService.getSettings(),
  });
export const prefetchUseSettingsServiceGetSettingsCustom = (
  queryClient: QueryClient
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseSettingsServiceGetSettingsCustomKeyFn(),
    queryFn: () => SettingsService.getSettingsCustom(),
  });
export const prefetchUseSettingsServiceGetSettingsCustomBySettingSlug = (
  queryClient: QueryClient,
  {
    settingSlug,
  }: {
    settingSlug: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseSettingsServiceGetSettingsCustomBySettingSlugKeyFn({
      settingSlug,
    }),
    queryFn: () =>
      SettingsService.getSettingsCustomBySettingSlug({ settingSlug }),
  });
export const prefetchUseSettingsServiceGetSettingsCustomBySettingSlugValue = (
  queryClient: QueryClient,
  {
    settingSlug,
  }: {
    settingSlug: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseSettingsServiceGetSettingsCustomBySettingSlugValueKeyFn(
      { settingSlug }
    ),
    queryFn: () =>
      SettingsService.getSettingsCustomBySettingSlugValue({ settingSlug }),
  });
export const prefetchUseSettingsServiceGetSettingsService = (
  queryClient: QueryClient
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseSettingsServiceGetSettingsServiceKeyFn(),
    queryFn: () => SettingsService.getSettingsService(),
  });
export const prefetchUseSettingsServiceGetSettingsServiceBySettingSlug = (
  queryClient: QueryClient,
  {
    settingSlug,
  }: {
    settingSlug: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseSettingsServiceGetSettingsServiceBySettingSlugKeyFn({
      settingSlug,
    }),
    queryFn: () =>
      SettingsService.getSettingsServiceBySettingSlug({ settingSlug }),
  });
export const prefetchUseSettingsServiceGetSettingsServiceBySettingSlugValue = (
  queryClient: QueryClient,
  {
    settingSlug,
  }: {
    settingSlug: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey:
      Common.UseSettingsServiceGetSettingsServiceBySettingSlugValueKeyFn({
        settingSlug,
      }),
    queryFn: () =>
      SettingsService.getSettingsServiceBySettingSlugValue({ settingSlug }),
  });
export const prefetchUseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettings =
  (
    queryClient: QueryClient,
    {
      workspaceId,
    }: {
      workspaceId: string;
    }
  ) =>
    queryClient.prefetchQuery({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsKeyFn(
          { workspaceId }
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettings({
          workspaceId,
        }),
    });
export const prefetchUseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustom =
  (
    queryClient: QueryClient,
    {
      workspaceId,
    }: {
      workspaceId: string;
    }
  ) =>
    queryClient.prefetchQuery({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomKeyFn(
          { workspaceId }
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsCustom({
          workspaceId,
        }),
    });
export const prefetchUseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlug =
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
    queryClient.prefetchQuery({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugKeyFn(
          { settingSlug, workspaceId }
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsCustomBySettingSlug(
          { settingSlug, workspaceId }
        ),
    });
export const prefetchUseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValue =
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
    queryClient.prefetchQuery({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValueKeyFn(
          { settingSlug, workspaceId }
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsCustomBySettingSlugValue(
          { settingSlug, workspaceId }
        ),
    });
export const prefetchUseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsService =
  (
    queryClient: QueryClient,
    {
      workspaceId,
    }: {
      workspaceId: string;
    }
  ) =>
    queryClient.prefetchQuery({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceKeyFn(
          { workspaceId }
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsService({
          workspaceId,
        }),
    });
export const prefetchUseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlug =
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
    queryClient.prefetchQuery({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugKeyFn(
          { settingSlug, workspaceId }
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsServiceBySettingSlug(
          { settingSlug, workspaceId }
        ),
    });
export const prefetchUseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValue =
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
    queryClient.prefetchQuery({
      queryKey:
        Common.UseWorkspaceSettingsServiceGetWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValueKeyFn(
          { settingSlug, workspaceId }
        ),
      queryFn: () =>
        WorkspaceSettingsService.getWorkspacesByWorkspaceIdSettingsServiceBySettingSlugValue(
          { settingSlug, workspaceId }
        ),
    });
export const prefetchUseQrCodeScansServiceGetCodesByCodeIdScans = (
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
  queryClient.prefetchQuery({
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
export const prefetchUseQrCodeRouterRulesServiceGetCodesByCodeIdRouterRules = (
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
  queryClient.prefetchQuery({
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
export const prefetchUseQrCodeRouterRulesServiceGetCodesByCodeIdRouterRulesByRouterRuleId =
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
    queryClient.prefetchQuery({
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
export const prefetchUseQrCodeRouterRulesServiceGetRouterRules = (
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
  queryClient.prefetchQuery({
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
export const prefetchUseQrCodeRouterRulesServiceGetWorkspacesByWorkspaceIdRouterRules =
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
    queryClient.prefetchQuery({
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
export const prefetchUseQrCodesServiceGetCodesDeleted = (
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
  queryClient.prefetchQuery({
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
export const prefetchUseQrCodesServiceGetCodesByCodeId = (
  queryClient: QueryClient,
  {
    codeId,
  }: {
    codeId: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseQrCodesServiceGetCodesByCodeIdKeyFn({ codeId }),
    queryFn: () => QrCodesService.getCodesByCodeId({ codeId }),
  });
export const prefetchUseQrCodesServiceGetCodes = (
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
  queryClient.prefetchQuery({
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
export const prefetchUseQrCodeLinksServiceGetCodesLinks = (
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
  queryClient.prefetchQuery({
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
export const prefetchUseQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByType =
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
    queryClient.prefetchQuery({
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
export const prefetchUseQrCodeLinksServiceGetCodesByCodeIdVersionByVersionByTypeLink =
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
    queryClient.prefetchQuery({
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
export const prefetchUseQrCodeLinksServiceGetCodesByCodeIdByType = (
  queryClient: QueryClient,
  {
    codeId,
    type,
  }: {
    codeId: string;
    type: "svg" | "png" | "pdf";
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseQrCodeLinksServiceGetCodesByCodeIdByTypeKeyFn({
      codeId,
      type,
    }),
    queryFn: () => QrCodeLinksService.getCodesByCodeIdByType({ codeId, type }),
  });
export const prefetchUseQrCodeLinksServiceGetCodesByCodeIdByTypeLink = (
  queryClient: QueryClient,
  {
    codeId,
    type,
  }: {
    codeId: string;
    type: "svg" | "png" | "pdf";
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseQrCodeLinksServiceGetCodesByCodeIdByTypeLinkKeyFn({
      codeId,
      type,
    }),
    queryFn: () =>
      QrCodeLinksService.getCodesByCodeIdByTypeLink({ codeId, type }),
  });
export const prefetchUseQrCodeVersionsServiceGetCodesByCodeIdVersionByVersion =
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
    queryClient.prefetchQuery({
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
export const prefetchUseQrCodeVersionsServiceGetCodesByCodeIdVersions = (
  queryClient: QueryClient,
  {
    codeId,
  }: {
    codeId: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseQrCodeVersionsServiceGetCodesByCodeIdVersionsKeyFn({
      codeId,
    }),
    queryFn: () => QrCodeVersionsService.getCodesByCodeIdVersions({ codeId }),
  });
export const prefetchUseTemplatesServiceGetTemplates = (
  queryClient: QueryClient,
  {
    name,
  }: {
    name?: string;
  } = {}
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTemplatesServiceGetTemplatesKeyFn({ name }),
    queryFn: () => TemplatesService.getTemplates({ name }),
  });
export const prefetchUseTemplatesServiceGetTemplatesBase = (
  queryClient: QueryClient,
  {
    name,
  }: {
    name?: string;
  } = {}
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTemplatesServiceGetTemplatesBaseKeyFn({ name }),
    queryFn: () => TemplatesService.getTemplatesBase({ name }),
  });
export const prefetchUseTemplatesServiceGetTemplatesByTemplateId = (
  queryClient: QueryClient,
  {
    templateId,
  }: {
    templateId: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTemplatesServiceGetTemplatesByTemplateIdKeyFn({
      templateId,
    }),
    queryFn: () => TemplatesService.getTemplatesByTemplateId({ templateId }),
  });
export const prefetchUseTemplatesServiceGetTemplatesWorkspaceByWorkspaceId = (
  queryClient: QueryClient,
  {
    name,
    workspaceId,
  }: {
    name?: string;
    workspaceId: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTemplatesServiceGetTemplatesWorkspaceByWorkspaceIdKeyFn(
      { name, workspaceId }
    ),
    queryFn: () =>
      TemplatesService.getTemplatesWorkspaceByWorkspaceId({
        name,
        workspaceId,
      }),
  });
export const prefetchUseStylesServiceGetStyles = (
  queryClient: QueryClient,
  {
    name,
  }: {
    name?: string;
  } = {}
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseStylesServiceGetStylesKeyFn({ name }),
    queryFn: () => StylesService.getStyles({ name }),
  });
export const prefetchUseStylesServiceGetStylesBase = (
  queryClient: QueryClient,
  {
    name,
  }: {
    name?: string;
  } = {}
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseStylesServiceGetStylesBaseKeyFn({ name }),
    queryFn: () => StylesService.getStylesBase({ name }),
  });
export const prefetchUseStylesServiceGetStylesByStyleId = (
  queryClient: QueryClient,
  {
    styleId,
  }: {
    styleId: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseStylesServiceGetStylesByStyleIdKeyFn({ styleId }),
    queryFn: () => StylesService.getStylesByStyleId({ styleId }),
  });
export const prefetchUseStylesServiceGetStylesWorkspaceByWorkspaceId = (
  queryClient: QueryClient,
  {
    name,
    workspaceId,
  }: {
    name?: string;
    workspaceId: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseStylesServiceGetStylesWorkspaceByWorkspaceIdKeyFn({
      name,
      workspaceId,
    }),
    queryFn: () =>
      StylesService.getStylesWorkspaceByWorkspaceId({ name, workspaceId }),
  });
export const prefetchUseTextsServiceGetTexts = (
  queryClient: QueryClient,
  {
    name,
  }: {
    name?: string;
  } = {}
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTextsServiceGetTextsKeyFn({ name }),
    queryFn: () => TextsService.getTexts({ name }),
  });
export const prefetchUseTextsServiceGetTextsBase = (
  queryClient: QueryClient,
  {
    name,
  }: {
    name?: string;
  } = {}
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTextsServiceGetTextsBaseKeyFn({ name }),
    queryFn: () => TextsService.getTextsBase({ name }),
  });
export const prefetchUseTextsServiceGetTextsByTextId = (
  queryClient: QueryClient,
  {
    textId,
  }: {
    textId: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTextsServiceGetTextsByTextIdKeyFn({ textId }),
    queryFn: () => TextsService.getTextsByTextId({ textId }),
  });
export const prefetchUseTextsServiceGetTextsWorkspaceByWorkspaceId = (
  queryClient: QueryClient,
  {
    name,
    workspaceId,
  }: {
    name?: string;
    workspaceId: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseTextsServiceGetTextsWorkspaceByWorkspaceIdKeyFn({
      name,
      workspaceId,
    }),
    queryFn: () =>
      TextsService.getTextsWorkspaceByWorkspaceId({ name, workspaceId }),
  });
export const prefetchUseBordersServiceGetBorders = (
  queryClient: QueryClient,
  {
    name,
  }: {
    name?: string;
  } = {}
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseBordersServiceGetBordersKeyFn({ name }),
    queryFn: () => BordersService.getBorders({ name }),
  });
export const prefetchUseBordersServiceGetBordersBase = (
  queryClient: QueryClient,
  {
    name,
  }: {
    name?: string;
  } = {}
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseBordersServiceGetBordersBaseKeyFn({ name }),
    queryFn: () => BordersService.getBordersBase({ name }),
  });
export const prefetchUseBordersServiceGetBordersByBorderId = (
  queryClient: QueryClient,
  {
    borderId,
  }: {
    borderId: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseBordersServiceGetBordersByBorderIdKeyFn({ borderId }),
    queryFn: () => BordersService.getBordersByBorderId({ borderId }),
  });
export const prefetchUseBordersServiceGetBordersWorkspaceByWorkspaceId = (
  queryClient: QueryClient,
  {
    name,
    workspaceId,
  }: {
    name?: string;
    workspaceId: string;
  }
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseBordersServiceGetBordersWorkspaceByWorkspaceIdKeyFn({
      name,
      workspaceId,
    }),
    queryFn: () =>
      BordersService.getBordersWorkspaceByWorkspaceId({ name, workspaceId }),
  });
export const prefetchUseCountryCodesServiceGetCountryCodes = (
  queryClient: QueryClient
) =>
  queryClient.prefetchQuery({
    queryKey: Common.UseCountryCodesServiceGetCountryCodesKeyFn(),
    queryFn: () => CountryCodesService.getCountryCodes(),
  });
export const prefetchUseRouterRuleTemplatesServiceGetRouterRuleTemplates = (
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
  queryClient.prefetchQuery({
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
export const prefetchUseRouterRuleTemplatesServiceGetRouterRuleTemplatesByRouterRuleTemplateId =
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
    queryClient.prefetchQuery({
      queryKey:
        Common.UseRouterRuleTemplatesServiceGetRouterRuleTemplatesByRouterRuleTemplateIdKeyFn(
          { routerRuleTemplateId, templateId }
        ),
      queryFn: () =>
        RouterRuleTemplatesService.getRouterRuleTemplatesByRouterRuleTemplateId(
          { routerRuleTemplateId, templateId }
        ),
    });
