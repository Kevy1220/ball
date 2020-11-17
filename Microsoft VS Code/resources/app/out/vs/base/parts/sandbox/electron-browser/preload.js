/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
!function(){"use strict";const{ipcRenderer:e,webFrame:n,crashReporter:r,contextBridge:o}=require("electron"),t={ipcRenderer:{send(n,...r){c(n)&&e.send(n,...r)},on(n,r){c(n)&&e.on(n,r)},once(n,r){c(n)&&e.once(n,r)},removeListener(n,r){c(n)&&e.removeListener(n,r)}},webFrame:{setZoomLevel(e){"number"==typeof e&&n.setZoomLevel(e)}},crashReporter:{addExtraParameter(e,n){r.addExtraParameter(e,n)}},process:{get platform(){return process.platform},get env(){return process.env},get versions(){return process.versions},get type(){return"renderer"},_whenEnvResolved:void 0,whenEnvResolved:function(){return this._whenEnvResolved||(this._whenEnvResolved=new Promise((function(n){const r=setTimeout((function(){console.warn("Preload: Unable to resolve shell environment in a reasonable time"),n()}),3e3);e.once("vscode:acceptShellEnv",(function(e,o){clearTimeout(r),Object.assign(process.env,o),n()})),e.send("vscode:fetchShellEnv")}))),this._whenEnvResolved},nextTick:function(e,...n){return process.nextTick(e,...n)},
cwd:function(){return process.cwd()},getuid:function(){return process.getuid()},getProcessMemoryInfo:function(){return process.getProcessMemoryInfo()},on:function(e,n){(function(e){if("uncaughtException"!==e)throw new Error(`Unsupported process event '${e}'`);return!0})(e)&&process.on(e,n)}},context:{get sandbox(){return process.argv.includes("--enable-sandbox")}}};let s=process.argv.includes("--context-isolation");if(s)try{o.exposeInMainWorld("vscode",t)}catch(e){console.error(e),s=!1}function c(e){if(!e||!e.startsWith("vscode:"))throw new Error(`Unsupported event IPC channel '${e}'`);return!0}s||(window.vscode=t)}();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/d2e414d9e4239a252d1ab117bd7067f125afd80a/core/vs/base/parts/sandbox/electron-browser/preload.js.map