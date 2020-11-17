/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";const bootstrap=require("./bootstrap"),product=require("../product.json");bootstrap.avoidMonkeyPatchFromAppInsights(),bootstrap.configurePortable(product),bootstrap.enableASARSupport(),require("./bootstrap-amd").load("vs/code/node/cli");
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/d2e414d9e4239a252d1ab117bd7067f125afd80a/core/cli.js.map
