!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t){e.exports=require("fs")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),s=r(6),i=Buffer.from("(function (exports, require, module, __filename, __dirname) { "),o=Buffer.from("\n});"),a=Buffer.from("(function (exports, require, module, __filename, __dirname, process, global, Buffer) { return function (exports, require, module, __filename, __dirname) { "),c=Buffer.from("\n}.call(this, exports, require, module, __filename, __dirname); });"),u=Buffer.from("#!"),l=Buffer.from("\r")[0],f=Buffer.from("\n")[0],d=(e,t,r)=>{if(n.hash(e)===t)return!0;if(r){if(s=u,e.slice(0,s.length).equals(s)){let r=e.indexOf(f);return e[r-1]===l&&r--,n.hash(e.slice(r))===t}if(n.hash(Buffer.concat([i,e,o]))===t)return!0}var s;return n.hash(Buffer.concat([a,e,c]))===t},h=e=>e instanceof Buffer?e:Buffer.from(e,"utf-8");var m;process.send&&(m=process.send.bind(process),process.on("message",e=>{(async function(e){switch(e.type){case 0:try{const t=await s.readFileRaw(e.file);return{id:e.id,hash:n.hash(t)}}catch(t){return{id:e.id}}case 1:try{return{id:e.id,hash:n.hash(h(e.data))}}catch(t){return{id:e.id}}case 2:try{const t=await s.readFileRaw(e.file);return{id:e.id,matches:d(t,e.expected,e.checkNode)}}catch(t){return{id:e.id,matches:!1}}case 3:try{return{id:e.id,matches:d(h(e.data),e.expected,e.checkNode)}}catch(t){return{id:e.id,matches:!1}}}})(e).then(m)}))},function(e,t,r){const{hash:n}=r(3),s=Buffer.alloc(20);t.hash=e=>(n(i(e),s),s.toString("hex"));const i=e=>(e=>e.length>=3&&239===e[0]&&187===e[1]&&191===e[2])(e)?o(e.slice(3)):(e=>e.length>=2&&255===e[0]&&254===e[1])(e)?e.slice(2):(e=>e.length>=2&&254===e[0]&&255===e[1])(e)?e.slice(2).swap16():o(e),o=e=>Buffer.from(e.toString("utf8"),"utf16le")},function(e,t,r){let n,s=null;function i(){return null!==s&&s.buffer===n.memory.buffer||(s=new Uint8Array(n.memory.buffer)),s}let o=0;function a(e,t){const r=t(1*e.length);return i().set(e,r/1),o=e.length,r}e.exports.hash=function(e,t){try{var r=a(e,n.__wbindgen_malloc),s=o,c=a(t,n.__wbindgen_malloc),u=o;n.hash(r,s,c,u)}finally{t.set(i().subarray(c/1,c/1+u)),n.__wbindgen_free(c,1*u)}},n=r(4)},function(e,t,r){const n=r(5).join(__dirname,"chromehash_bg.wasm"),s=r(0).readFileSync(n);const i=new WebAssembly.Module(s),o=new WebAssembly.Instance(i,{});e.exports=o.exports},function(e,t){e.exports=require("path")},function(e,t,r){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});const s=n(r(0)),i=n(r(7));t.fsModule=s,t.canAccess=async function({access:e},t){if(!t)return!1;try{return await e(t),!0}catch(e){return!1}},t.existsInjected=async function({stat:e},t){if(t)try{return await e(t)}catch(e){return}},t.existsWithoutDeref=async function({lstat:e},t){if(t)try{return await e(t)}catch(e){return}},t.moveFile=async function({copyFile:e,rename:t,unlink:r},n,s){try{await t(n,s)}catch(t){await e(n,s),await r(n)}},t.stat=function(e){return new Promise(t=>{s.stat(e,(e,r)=>t(e?void 0:r))})},t.readdir=function(e){return new Promise(t=>{s.readdir(e,"utf8",async(e,r)=>{t(e?[]:r)})})},t.readfile=function(e){return new Promise(t=>{s.readFile(e,"utf8",async(e,r)=>{t(e?"":r)})})},t.writeFile=i.promisify(s.writeFile),t.readFileRaw=function(e){return s.promises.readFile(e).catch(()=>Buffer.alloc(0))},t.IFsUtils=Symbol("FsUtils");class o{constructor(e){this.fs=e}async exists(e){try{return await this.fs.access(e,s.constants.F_OK),!0}catch(e){return!1}}readFile(e){return this.fs.readFile(e)}}t.LocalFsUtils=o;class a{constructor(e){this.dap=e}async exists(e){try{const{doesExists:t}=await this.dap.remoteFileExistsRequest({localFilePath:e});return t}catch(e){return!1}}readFile(){throw new Error("not implemented")}}t.RemoteFsThroughDapUtils=a;t.LocalAndRemoteFsUtils=class{constructor(e,t,r){this.remoteFilePrefix=e,this.localFsUtils=t,this.remoteFsUtils=r}static create(e,t,r){const n=new o(t);return void 0!==e?new this(e,n,new a(r)):n}async exists(e){return(this.shouldUseRemoteFileSystem(e)?this.remoteFsUtils:this.localFsUtils).exists(e)}async readFile(e){return(this.shouldUseRemoteFileSystem(e)?this.remoteFsUtils:this.localFsUtils).readFile(e)}shouldUseRemoteFileSystem(e){return e.startsWith(this.remoteFilePrefix)}}},function(e,t){e.exports=require("util")}]);