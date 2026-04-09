// @ts-nocheck
import * as __fd_glob_18 from "../content/docs/integrations/index.mdx?collection=docs"
import * as __fd_glob_17 from "../content/docs/getting-started/index.mdx?collection=docs"
import * as __fd_glob_16 from "../content/docs/getting-started/environment-setup.mdx?collection=docs"
import * as __fd_glob_15 from "../content/docs/getting-started/database-setup.mdx?collection=docs"
import * as __fd_glob_14 from "../content/docs/guides/index.mdx?collection=docs"
import * as __fd_glob_13 from "../content/docs/features/shipping-guide.mdx?collection=docs"
import * as __fd_glob_12 from "../content/docs/features/payment-integration.mdx?collection=docs"
import * as __fd_glob_11 from "../content/docs/features/payment-architecture.mdx?collection=docs"
import * as __fd_glob_10 from "../content/docs/features/password-reset.mdx?collection=docs"
import * as __fd_glob_9 from "../content/docs/features/order-lifecycle.mdx?collection=docs"
import * as __fd_glob_8 from "../content/docs/features/location-map.mdx?collection=docs"
import * as __fd_glob_7 from "../content/docs/features/index.mdx?collection=docs"
import * as __fd_glob_6 from "../content/docs/features/checkout-flow.mdx?collection=docs"
import * as __fd_glob_5 from "../content/docs/features/battle-arena.mdx?collection=docs"
import * as __fd_glob_4 from "../content/docs/deployment/index.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/configuration/index.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/api/rest-api.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/api/index.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/index.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {}, {"index.mdx": __fd_glob_0, "api/index.mdx": __fd_glob_1, "api/rest-api.mdx": __fd_glob_2, "configuration/index.mdx": __fd_glob_3, "deployment/index.mdx": __fd_glob_4, "features/battle-arena.mdx": __fd_glob_5, "features/checkout-flow.mdx": __fd_glob_6, "features/index.mdx": __fd_glob_7, "features/location-map.mdx": __fd_glob_8, "features/order-lifecycle.mdx": __fd_glob_9, "features/password-reset.mdx": __fd_glob_10, "features/payment-architecture.mdx": __fd_glob_11, "features/payment-integration.mdx": __fd_glob_12, "features/shipping-guide.mdx": __fd_glob_13, "guides/index.mdx": __fd_glob_14, "getting-started/database-setup.mdx": __fd_glob_15, "getting-started/environment-setup.mdx": __fd_glob_16, "getting-started/index.mdx": __fd_glob_17, "integrations/index.mdx": __fd_glob_18, });