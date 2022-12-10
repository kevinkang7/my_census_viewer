(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/@arcgis/core/identity/IdentityForm.js":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/IdentityForm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _intl_substitute_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../intl/substitute.js */ "./node_modules/@arcgis/core/intl/substitute.js");
/* harmony import */ var _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/Widget.js */ "./node_modules/@arcgis/core/widgets/Widget.js");
/* harmony import */ var _widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/support/widgetUtils.js */ "./node_modules/@arcgis/core/widgets/support/widgetUtils.js");
/* harmony import */ var _widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../widgets/support/decorators/messageBundle.js */ "./node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js");
/* harmony import */ var _widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/support/jsxFactory.js */ "./node_modules/@arcgis/core/widgets/support/jsxFactory.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const l={base:"esri-identity-form",group:"esri-identity-form__group",label:"esri-identity-form__label",footer:"esri-identity-form__footer",esriInput:"esri-input",esriButton:"esri-button",esriButtonSecondary:"esri-button--secondary"},p="ArcGIS Online";let a=class extends _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(s,e){super(s,e),this._usernameInputNode=null,this._passwordInputNode=null,this.messages=null,this.signingIn=!1,this.server=null,this.resource=null,this.error=null,this.oAuthPrompt=!1}render(){const{error:s,server:e,resource:t,signingIn:o,oAuthPrompt:n,messages:a}=this,d=Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{class:l.group},Object(_intl_substitute_js__WEBPACK_IMPORTED_MODULE_6__["substitute"])(n?a.oAuthInfo:a.info,{server:/\.arcgis\.com/i.test(e)?p:e,resource:`(${t||a.lblItem})`})),c=n?null:Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{class:l.group,key:"username"},Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("label",{class:l.label},a.lblUser,Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("input",{value:"",required:!0,autocomplete:"off",spellcheck:!1,type:"text",bind:this,afterCreate:_widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_8__["storeNode"],"data-node-ref":"_usernameInputNode",class:l.esriInput}))),m=n?null:Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{class:l.group,key:"password"},Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("label",{class:l.label},a.lblPwd,Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("input",{value:"",required:!0,type:"password",bind:this,afterCreate:_widgets_support_widgetUtils_js__WEBPACK_IMPORTED_MODULE_8__["storeNode"],"data-node-ref":"_passwordInputNode",class:l.esriInput}))),h=Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{class:this.classes(l.group,l.footer)},Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("input",{type:"submit",disabled:!!o,value:o?a.lblSigning:a.lblOk,class:l.esriButton}),Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("input",{type:"button",value:a.lblCancel,bind:this,onclick:this._cancel,class:this.classes(l.esriButton,l.esriButtonSecondary)})),g=s?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",null,s.details&&s.details.httpStatus?a.invalidUser:a.noAuthService):null;return Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("form",{class:l.base,bind:this,onsubmit:this._submit},d,g,c,m,h)}_cancel(){this._set("signingIn",!1),this._usernameInputNode&&(this._usernameInputNode.value=""),this._passwordInputNode&&(this._passwordInputNode.value=""),this.emit("cancel")}_submit(s){s.preventDefault(),this._set("signingIn",!0);const e=this.oAuthPrompt?{}:{username:this._usernameInputNode&&this._usernameInputNode.value,password:this._passwordInputNode&&this._passwordInputNode.value};this.emit("submit",e)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])(),Object(_widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_9__["messageBundle"])("esri/identity/t9n/identity")],a.prototype,"messages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],a.prototype,"signingIn",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],a.prototype,"server",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],a.prototype,"resource",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],a.prototype,"error",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__["property"])()],a.prototype,"oAuthPrompt",void 0),a=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_5__["subclass"])("esri.identity.IdentityForm")],a);var d=a;/* harmony default export */ __webpack_exports__["default"] = (d);


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/IdentityManager.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/IdentityManager.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _IdentityManagerBase_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IdentityManagerBase.js */ "./node_modules/@arcgis/core/identity/IdentityManagerBase.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
class r extends _IdentityManagerBase_js__WEBPACK_IMPORTED_MODULE_1__["IdentityManagerBase"]{}r.prototype.declaredClass="esri.identity.IdentityManager";const s=new r;Object(_kernel_js__WEBPACK_IMPORTED_MODULE_0__["setId"])(s);/* harmony default export */ __webpack_exports__["default"] = (s);


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/IdentityManagerBase.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/IdentityManagerBase.js ***!
  \*******************************************************************/
/*! exports provided: Credential, IdentityManagerBase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Credential", function() { return j; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityManagerBase", function() { return q; });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.js */ "./node_modules/@arcgis/core/config.js");
/* harmony import */ var _kernel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../kernel.js */ "./node_modules/@arcgis/core/kernel.js");
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../request.js */ "./node_modules/@arcgis/core/request.js");
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/Error.js */ "./node_modules/@arcgis/core/core/Error.js");
/* harmony import */ var _core_Evented_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Evented.js */ "./node_modules/@arcgis/core/core/Evented.js");
/* harmony import */ var _core_events_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/events.js */ "./node_modules/@arcgis/core/core/events.js");
/* harmony import */ var _core_global_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/global.js */ "./node_modules/@arcgis/core/core/global.js");
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../core/lang.js */ "./node_modules/@arcgis/core/core/lang.js");
/* harmony import */ var _core_object_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/object.js */ "./node_modules/@arcgis/core/core/object.js");
/* harmony import */ var _core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/promiseUtils.js */ "./node_modules/@arcgis/core/core/promiseUtils.js");
/* harmony import */ var _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../core/urlUtils.js */ "./node_modules/@arcgis/core/core/urlUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _IdentityForm_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./IdentityForm.js */ "./node_modules/@arcgis/core/identity/IdentityForm.js");
/* harmony import */ var _IdentityModal_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./IdentityModal.js */ "./node_modules/@arcgis/core/identity/IdentityModal.js");
/* harmony import */ var _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./OAuthCredential.js */ "./node_modules/@arcgis/core/identity/OAuthCredential.js");
/* harmony import */ var _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./OAuthInfo.js */ "./node_modules/@arcgis/core/identity/OAuthInfo.js");
/* harmony import */ var _ServerInfo_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ServerInfo.js */ "./node_modules/@arcgis/core/identity/ServerInfo.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const R={},b=e=>{const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["Url"](e.owningSystemUrl).host,s=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["Url"](e.server).host,r=/.+\.arcgis\.com$/i;return r.test(t)&&r.test(s)},P=(e,t)=>!!(b(e)&&t&&t.some((t=>t.test(e.server))));let C=null,D=null;try{C=window.localStorage,D=window.sessionStorage}catch{}class q extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_5__["default"]{constructor(){super(),this._portalConfig=_core_global_js__WEBPACK_IMPORTED_MODULE_7__["default"].esriGeowConfig,this.serverInfos=[],this.oAuthInfos=[],this.credentials=[],this._soReqs=[],this._xoReqs=[],this._portals=[],this.defaultOAuthInfo=null,this.defaultTokenValidity=60,this.dialog=null,this.formConstructor=_IdentityForm_js__WEBPACK_IMPORTED_MODULE_17__["default"],this.tokenValidity=null,this.normalizeWebTierAuth=!1,this._appOrigin="null"!==window.origin?window.origin:window.location.origin,this._appUrlObj=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["urlToObject"])(window.location.href),this._busy=null,this._rejectOnPersistedPageShow=!1,this._oAuthHash=null,this._gwTokenUrl="/sharing/rest/generateToken",this._agsRest="/rest/services",this._agsPortal=/\/sharing(\/|$)/i,this._agsAdmin=/(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i,this._adminSvcs=/\/rest\/admin\/services(\/|$)/i,this._gwDomains=[{regex:/^https?:\/\/www\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:dev|[a-z\d-]+\.mapsdev)\.arcgis\.com/i,customBaseUrl:"mapsdev.arcgis.com",tokenServiceUrl:"https://dev.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:devext|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,customBaseUrl:"mapsdevext.arcgis.com",tokenServiceUrl:"https://devext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/(?:qaext|[a-z\d-]+\.mapsqa)\.arcgis\.com/i,customBaseUrl:"mapsqa.arcgis.com",tokenServiceUrl:"https://qaext.arcgis.com/sharing/rest/generateToken"},{regex:/^https?:\/\/[a-z\d-]+\.maps\.arcgis\.com/i,customBaseUrl:"maps.arcgis.com",tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"}],this._legacyFed=[],this._regexSDirUrl=/http.+\/rest\/services\/?/gi,this._regexServerType=/(\/(FeatureServer|GPServer|GeoDataServer|GeocodeServer|GeoenrichmentServer|GeometryServer|GlobeServer|ImageServer|MapServer|MobileServer|NAServer|NetworkDiagramServer|OGCFeatureServer|ParcelFabricServer|RelationalCatalogServer|SceneServer|StreamServer|UtilityNetworkServer|ValidationServer|VectorTileServer|VersionManagementServer)).*/gi,this._gwUser=/http.+\/users\/([^\/]+)\/?.*/i,this._gwItem=/http.+\/items\/([^\/]+)\/?.*/i,this._gwGroup=/http.+\/groups\/([^\/]+)\/?.*/i,this._rePortalTokenSvc=/\/sharing(\/rest)?\/generatetoken/i,this._createDefaultOAuthInfo=!0,this._hasTestedIfAppIsOnPortal=!1,this._getOAuthHash(),window.addEventListener("pageshow",(e=>{this._pageShowHandler(e)}))}registerServers(e){const t=this.serverInfos;t?(e=e.filter((e=>!this.findServerInfo(e.server))),this.serverInfos=t.concat(e)):this.serverInfos=e,e.forEach((e=>{e.owningSystemUrl&&this._portals.push(e.owningSystemUrl),e.hasPortal&&this._portals.push(e.server)}))}registerOAuthInfos(e){const t=this.oAuthInfos;if(t){for(const s of e){const e=this.findOAuthInfo(s.portalUrl);e&&t.splice(t.indexOf(e),1)}this.oAuthInfos=t.concat(e)}else this.oAuthInfos=e}registerToken(e){e={...e};const t=this._sanitizeUrl(e.server),s=this._isServerRsrc(t);let r,i=this.findServerInfo(t),n=!0;i||(i=new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"],i.server=this._getServerInstanceRoot(t),s?i.hasServer=!0:(i.tokenServiceUrl=this._getTokenSvcUrl(t),i.hasPortal=!0),this.registerServers([i])),r=this._findCredential(t),r?(delete e.server,Object.assign(r,e),n=!1):(r=new j({userId:e.userId,server:i.server,token:e.token,expires:e.expires,ssl:e.ssl,scope:s?"server":"portal"}),r.resources=[t],this.credentials.push(r)),r.emitTokenChange(!1),n||r.refreshServerTokens()}toJSON(){return Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_8__["fixJson"])({serverInfos:this.serverInfos.map((e=>e.toJSON())),oAuthInfos:this.oAuthInfos.map((e=>e.toJSON())),credentials:this.credentials.map((e=>e.toJSON()))})}initialize(e){if(!e)return;"string"==typeof e&&(e=JSON.parse(e));const t=e.serverInfos,s=e.oAuthInfos,r=e.credentials;if(t){const e=[];t.forEach((t=>{t.server&&t.tokenServiceUrl&&e.push(t.declaredClass?t:new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"](t))})),e.length&&this.registerServers(e)}if(s){const e=[];s.forEach((t=>{t.appId&&e.push(t.declaredClass?t:new _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_20__["default"](t))})),e.length&&this.registerOAuthInfos(e)}r&&r.forEach((e=>{e.server&&e.token&&e.expires&&e.expires>Date.now()&&((e=e.declaredClass?e:new j(e)).emitTokenChange(),this.credentials.push(e))}))}findServerInfo(e){let t;e=this._sanitizeUrl(e);for(const s of this.serverInfos)if(this._hasSameServerInstance(s.server,e)){t=s;break}return t}findOAuthInfo(e){let t;e=this._sanitizeUrl(e);for(const s of this.oAuthInfos)if(this._hasSameServerInstance(s.portalUrl,e)){t=s;break}return t}findCredential(e,t){let s;e=this._sanitizeUrl(e);const r=this._isServerRsrc(e)?"server":"portal";if(t){for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&t===i.userId&&i.scope===r){s=i;break}}else for(const i of this.credentials)if(this._hasSameServerInstance(i.server,e)&&-1!==this._getIdenticalSvcIdx(e,i)&&i.scope===r){s=i;break}return s}getCredential(e,t){let s,r,n=!0;t&&(s=!!t.token,r=t.error,n=!1!==t.prompt),t={...t},e=this._sanitizeUrl(e);const o=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createAbortController"])(),a=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createResolver"])();if(t.signal&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["onAbort"])(t.signal,(()=>{o.abort()})),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["onAbort"])(o,(()=>{a.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED"))})),Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["isAborted"])(o))return a.promise;t.signal=o.signal;const h=this._isAdminResource(e),l=s?this.findCredential(e):null;let _;if(l&&r&&r.details&&498===r.details.httpStatus)l.destroy();else if(l)return _=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authorized","You are currently signed in as: '"+l.userId+"'. You do not have access to this resource: "+e,{error:r}),a.reject(_),a.promise;const f=this._findCredential(e,t);if(f)return a.resolve(f),a.promise;let m=this.findServerInfo(e);if(m)!m.hasServer&&this._isServerRsrc(e)&&(m._restInfoPms=this._getTokenSvcUrl(e),m.hasServer=!0);else{const t=this._getTokenSvcUrl(e);if(!t)return _=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:unknown-resource","Unknown resource - could not find token service endpoint."),a.reject(_),a.promise;m=new _ServerInfo_js__WEBPACK_IMPORTED_MODULE_21__["default"],m.server=this._getServerInstanceRoot(e),"string"==typeof t?(m.tokenServiceUrl=t,m.hasPortal=!0):(m._restInfoPms=t,m.hasServer=!0),this.registerServers([m])}return m.hasPortal&&void 0===m._selfReq&&(n||Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasSameOrigin"])(m.tokenServiceUrl,this._appOrigin)||this._gwDomains.some((e=>e.tokenServiceUrl===m.tokenServiceUrl)))&&(m._selfReq={owningTenant:t&&t.owningTenant,selfDfd:this._getPortalSelf(m.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),e)}),this._enqueue(e,m,t,a,h)}getResourceName(e){return this._isRESTService(e)?e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(e)&&e.replace(this._gwUser,"$1")||this._gwItem.test(e)&&e.replace(this._gwItem,"$1")||this._gwGroup.test(e)&&e.replace(this._gwGroup,"$1")||""}generateToken(e,t,s){const n=this._rePortalTokenSvc.test(e.tokenServiceUrl),o=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["Url"](this._appOrigin),a=e.shortLivedTokenValidity;let h,l,c,d,u,p,_,m;t&&(m=this.tokenValidity||a||this.defaultTokenValidity,m>a&&a>0&&(m=a)),s&&(h=s.isAdmin,l=s.serverUrl,c=s.token,p=s.signal,_=s.ssl,e.customParameters=s.customParameters),h?d=e.adminTokenServiceUrl:(d=e.tokenServiceUrl,u=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["Url"](d.toLowerCase()),e.webTierAuth&&null!=s&&s.serverUrl&&!_&&"http"===o.scheme&&(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasSameOrigin"])(o.uri,d,!0)||"https"===u.scheme&&o.host===u.host&&"7080"===o.port&&"7443"===u.port)&&(d=d.replace(/^https:/i,"http:").replace(/:7443/i,":7080")));const v={query:{request:"getToken",username:null==t?void 0:t.username,password:null==t?void 0:t.password,serverUrl:l,token:c,expiration:m,referer:h||n?this._appOrigin:null,client:h?"referer":null,f:"json",...e.customParameters},method:"post",authMode:"anonymous",useProxy:this._useProxy(e,s),signal:p,...null==s?void 0:s.ioArgs};n||(v.withCredentials=!1);return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(d,v).then((s=>{const r=s.data;if(!r||!r.token)return new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:authentication-failed","Unable to generate token");const n=e.server;return R[n]||(R[n]={}),t&&(R[n][t.username]=t.password),r.validity=m,r}))}isBusy(){return!!this._busy}checkSignInStatus(e){return this.checkAppAccess(e,"").then((e=>e.credential))}checkAppAccess(e,t,s){let n=!1;return this.getCredential(e,{prompt:!1}).then((o=>{let a;const h={f:"json"};if("portal"===o.scope)if(t&&(this._doPortalSignIn(e)||s&&s.force))a=o.server+"/sharing/rest/oauth2/validateAppAccess",h.client_id=t;else{if(!o.token)return{credential:o};a=o.server+"/sharing/rest"}else{if(!o.token)return{credential:o};a=o.server+"/rest/services"}return o.token&&(h.token=o.token),Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(a,{query:h,authMode:"anonymous"}).then((e=>{if(!1===e.data.valid)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authorized",`You are currently signed in as: '${o.userId}'.`,e.data);return n=!!e.data.viewOnlyUserTypeApp,{credential:o}})).catch((e=>{if("identity-manager:not-authorized"===e.name)throw e;const t=e.details&&e.details.httpStatus;if(498===t)throw o.destroy(),new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authenticated","User is not signed in.");if(400===t)throw new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:invalid-request");return{credential:o}}))})).then((e=>({credential:e.credential,viewOnly:n})))}setOAuthResponseHash(e){var t;const s=this._oAuthDfd;if(this._oAuthDfd=null,!s||!e)return;clearInterval(this._oAuthIntervalId),null==(t=this._oAuthOnHashHandle)||t.remove(),"#"===e.charAt(0)&&(e=e.substring(1));const r=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["queryToObject"])(e);if(r.error){const e="access_denied"===r.error,t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"](e?"identity-manager:user-aborted":"identity-manager:authentication-failed",e?"ABORTED":"OAuth: "+r.error+" - "+r.error_description);s.reject(t)}else{const e=s.sinfo_,t=s.oinfo_,i=t._oAuthCred,n=new j({userId:r.username,server:e.server,token:r.access_token,expires:Date.now()+1e3*Number(r.expires_in),ssl:"true"===r.ssl,_oAuthCred:i});t.userId=n.userId,i.storage=r.persist?C:D,i.token=n.token,i.expires=n.expires,i.userId=n.userId,i.ssl=n.ssl,i.save(),s.resolve(n)}}setOAuthRedirectionHandler(e){this._oAuthRedirectFunc=e}setProtocolErrorHandler(e){this._protocolFunc=e}signIn(e,t,s={}){const r=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createResolver"])(),n=()=>{var e,t,s,r,i;null==(e=h)||e.remove(),null==(t=l)||t.remove(),null==(s=c)||s.remove(),null==(r=a)||r.destroy(),null==(i=this.dialog)||i.destroy(),this.dialog=a=h=l=c=null},o=()=>{n(),this._oAuthDfd=null,r.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED"))};s.signal&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["onAbort"])(s.signal,(()=>{o()}));let a=new this.formConstructor;a.resource=this.getResourceName(e),a.server=t.server,this.dialog=new _IdentityModal_js__WEBPACK_IMPORTED_MODULE_18__["default"],this.dialog.content=a,this.dialog.open=!0,this.emit("dialog-create");let h=a.on("cancel",o),l=this.dialog.watch("open",o),c=a.on("submit",(e=>{this.generateToken(t,e,{isAdmin:s.isAdmin,signal:s.signal}).then((i=>{n();const o=new j({userId:e.username,server:t.server,token:i.token,expires:null!=i.expires?Number(i.expires):null,ssl:!!i.ssl,isAdmin:s.isAdmin,validity:i.validity});r.resolve(o)})).catch((e=>{a.error=e,a.signingIn=!1}))}));return r.promise}oAuthSignIn(e,t,s,r){this._oAuthDfd=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createResolver"])();const n=this._oAuthDfd;null!=r&&r.signal&&Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["onAbort"])(r.signal,(()=>{const e=this._oAuthDfd&&this._oAuthDfd.oAuthWin_;e&&!e.closed?e.close():this.dialog&&h()})),n.resUrl_=e,n.sinfo_=t,n.oinfo_=s;const o=!r||!1!==r.oAuthPopupConfirmation;if(!s.popup||!o)return this._doOAuthSignIn(e,t,s),n.promise;const a=new this.formConstructor;a.oAuthPrompt=!0,a.server=t.server,this.dialog=new _IdentityModal_js__WEBPACK_IMPORTED_MODULE_18__["default"],this.dialog.content=a,this.dialog.open=!0,this.emit("dialog-create");const h=()=>{_(),this._oAuthDfd=null,n.reject(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED"))},l=a.on("cancel",h),c=this.dialog.watch("open",h),p=a.on("submit",(()=>{_(),this._doOAuthSignIn(e,t,s)})),_=()=>{l.remove(),c.remove(),p.remove(),a.destroy(),this.dialog.destroy(),this.dialog=null};return n.promise}destroyCredentials(){if(this.credentials){this.credentials.slice().forEach((e=>{e.destroy()}))}this.emit("credentials-destroy")}enablePostMessageAuth(e="https://www.arcgis.com/sharing/rest"){this._postMessageAuthHandle&&this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=Object(_core_events_js__WEBPACK_IMPORTED_MODULE_6__["on"])(window,"message",(t=>{var s;if((t.origin===this._appOrigin||t.origin.endsWith(".arcgis.com"))&&"arcgis:auth:requestCredential"===(null==(s=t.data)?void 0:s.type)){const s=t.source;this.getCredential(e).then((e=>{s.postMessage({type:"arcgis:auth:credential",credential:{expires:e.expires,server:e.server,ssl:e.ssl,token:e.token,userId:e.userId}},t.origin)})).catch((e=>{s.postMessage({type:"arcgis:auth:error",error:{name:e.name,message:e.message}},t.origin)}))}}))}disablePostMessageAuth(){this._postMessageAuthHandle&&(this._postMessageAuthHandle.remove(),this._postMessageAuthHandle=null)}_getOAuthHash(){let e=window.location.hash;if(e){"#"===e.charAt(0)&&(e=e.substring(1));const t=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["queryToObject"])(e);let s=!1;if(t.access_token&&t.expires_in&&t.state&&t.hasOwnProperty("username"))try{t.state=JSON.parse(t.state),"object"==typeof t.state&&t.state.portalUrl&&(this._oAuthHash=t,s=!0)}catch{}else t.error&&t.error_description&&(console.log("IdentityManager OAuth Error: ",t.error," - ",t.error_description),"access_denied"===t.error&&(s=!0));s&&(window.location.hash="object"==typeof t.state&&t.state.hash||"")}}_pageShowHandler(e){if(e.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow){const e=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED");this._errbackFunc(e)}}_findCredential(e,t){let s,r,i,n,o=-1;const a=t&&t.token,h=t&&t.resource,l=this._isServerRsrc(e)?"server":"portal",c=this.credentials.filter((t=>this._hasSameServerInstance(t.server,e)&&t.scope===l));if(e=h||e,c.length)if(1===c.length){if(s=c[0],n=this.findServerInfo(s.server),r=n&&n.owningSystemUrl,i=r&&this.findCredential(r,s.userId),o=this._getIdenticalSvcIdx(e,s),!a)return-1===o&&s.resources.push(e),this._addResource(e,i),s;-1!==o&&(s.resources.splice(o,1),this._removeResource(e,i))}else{let t,s;if(c.some((a=>(s=this._getIdenticalSvcIdx(e,a),-1!==s&&(t=a,n=this.findServerInfo(t.server),r=n&&n.owningSystemUrl,i=r&&this.findCredential(r,t.userId),o=s,!0)))),a)t&&(t.resources.splice(o,1),this._removeResource(e,i));else if(t)return this._addResource(e,i),t}}_findOAuthInfo(e){let t=this.findOAuthInfo(e);if(!t)for(const s of this.oAuthInfos)if(this._isIdProvider(s.portalUrl,e)){t=s;break}return t}_addResource(e,t){t&&-1===this._getIdenticalSvcIdx(e,t)&&t.resources.push(e)}_removeResource(e,t){let s=-1;t&&(s=this._getIdenticalSvcIdx(e,t),s>-1&&t.resources.splice(s,1))}_useProxy(e,t){return t&&t.isAdmin&&!Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasSameOrigin"])(e.adminTokenServiceUrl,this._appOrigin)||!this._isPortalDomain(e.tokenServiceUrl)&&"10.1"===String(e.currentVersion)&&!Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasSameOrigin"])(e.tokenServiceUrl,this._appOrigin)}_getOrigin(e){const t=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["Url"](e);return t.scheme+"://"+t.host+(null!=t.port?":"+t.port:"")}_getServerInstanceRoot(e){const t=e.toLowerCase();let s=t.indexOf(this._agsRest);return-1===s&&this._isAdminResource(e)&&(s=this._agsAdmin.test(e)?e.replace(this._agsAdmin,"$1").length:e.search(this._adminSvcs)),-1===s&&(s=t.indexOf("/sharing")),-1===s&&"/"===t.substr(-1)&&(s=t.length-1),s>-1?e.substring(0,s):e}_hasSameServerInstance(e,t){return"/"===e.substr(-1)&&(e=e.slice(0,-1)),e=e.toLowerCase(),t=this._getServerInstanceRoot(t).toLowerCase(),e=this._normalizeAGOLorgDomain(e),t=this._normalizeAGOLorgDomain(t),(e=e.substr(e.indexOf(":")))===(t=t.substr(t.indexOf(":")))}_normalizeAGOLorgDomain(e){const t=/^https?:\/\/(?:cdn|[a-z\d-]+\.maps)\.arcgis\.com/i,s=/^https?:\/\/(?:cdndev|[a-z\d-]+\.mapsdevext)\.arcgis\.com/i,r=/^https?:\/\/(?:cdnqa|[a-z\d-]+\.mapsqa)\.arcgis\.com/i;return t.test(e)?e=e.replace(t,"https://www.arcgis.com"):s.test(e)?e=e.replace(s,"https://devext.arcgis.com"):r.test(e)&&(e=e.replace(r,"https://qaext.arcgis.com")),e}_sanitizeUrl(e){const s=(_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].request.proxyUrl||"").toLowerCase(),r=s?e.toLowerCase().indexOf(s+"?"):-1;return-1!==r&&(e=e.substring(r+s.length+1)),e=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["normalize"])(e),Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["urlToObject"])(e).path}_isRESTService(e){return e.indexOf(this._agsRest)>-1}_isAdminResource(e){return this._agsAdmin.test(e)||this._adminSvcs.test(e)}_isServerRsrc(e){return this._isRESTService(e)||this._isAdminResource(e)}_isIdenticalService(e,t){let s;if(this._isRESTService(e)&&this._isRESTService(t)){const r=this._getSuffix(e).toLowerCase(),i=this._getSuffix(t).toLowerCase();if(s=r===i,!s){const e=/(.*)\/(MapServer|FeatureServer|UtilityNetworkServer).*/gi;s=r.replace(e,"$1")===i.replace(e,"$1")}}else this._isAdminResource(e)&&this._isAdminResource(t)?s=!0:this._isServerRsrc(e)||this._isServerRsrc(t)||!this._isPortalDomain(e)||(s=!0);return s}_isPortalDomain(e){const s=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["Url"](e.toLowerCase()),r=this._portalConfig;let i=this._gwDomains.some((e=>e.regex.test(s.uri)));return!i&&r&&(i=this._hasSameServerInstance(this._getServerInstanceRoot(r.restBaseUrl),s.uri)),i||_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].portalUrl&&(i=Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasSameOrigin"])(s,_config_js__WEBPACK_IMPORTED_MODULE_1__["default"].portalUrl,!0)),i||(i=this._portals.some((e=>this._hasSameServerInstance(e,s.uri)))),i=i||this._agsPortal.test(s.path),i}_isIdProvider(e,t){let s=-1,r=-1;this._gwDomains.forEach(((i,n)=>{-1===s&&i.regex.test(e)&&(s=n),-1===r&&i.regex.test(t)&&(r=n)}));let i=!1;if(s>-1&&r>-1&&(0===s||4===s?0!==r&&4!==r||(i=!0):1===s?1!==r&&2!==r||(i=!0):2===s?2===r&&(i=!0):3===s&&3===r&&(i=!0)),!i){const s=this.findServerInfo(t),r=s&&s.owningSystemUrl;r&&b(s)&&this._isPortalDomain(r)&&this._isIdProvider(e,r)&&(i=!0)}return i}_getIdenticalSvcIdx(e,t){let s=-1;for(let r=0;r<t.resources.length;r++){const i=t.resources[r];if(this._isIdenticalService(e,i)){s=r;break}}return s}_getSuffix(e){return e.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")}_getTokenSvcUrl(e){let t,s,i;if(this._isRESTService(e)||this._isAdminResource(e)){const i=this._getServerInstanceRoot(e);return t=i+"/admin/generateToken",s=Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e=i+"/rest/info",{query:{f:"json"}}).then((e=>e.data)),{adminUrl:t,promise:s}}if(this._isPortalDomain(e)){let t="";if(this._gwDomains.some((s=>(s.regex.test(e)&&(t=s.tokenServiceUrl),!!t))),t||this._portals.some((s=>(this._hasSameServerInstance(s,e)&&(t=s+this._gwTokenUrl),!!t))),t||(i=e.toLowerCase().indexOf("/sharing"),-1!==i&&(t=e.substring(0,i)+this._gwTokenUrl)),t||(t=this._getOrigin(e)+this._gwTokenUrl),t){const s=new _core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["Url"](e).port;/^http:\/\//i.test(e)&&"7080"===s&&(t=t.replace(/:7080/i,":7443")),t=t.replace(/http:/i,"https:")}return t}if(-1!==e.toLowerCase().indexOf("premium.arcgisonline.com"))return"https://premium.arcgisonline.com/server/tokens"}_exchangeToken(e,t,s){return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(`${e}/sharing/rest/oauth2/exchangeToken`,{authMode:"anonymous",method:"post",query:{f:"json",client_id:t,token:s}}).then((e=>e.data.token))}_getPlatformSelf(e,t){return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(`${e}/sharing/rest/oauth2/platformSelf`,{authMode:"anonymous",headers:{"X-Esri-Auth-Client-Id":t,"X-Esri-Auth-Redirect-Uri":window.location.href.replace(/#.*$/,"")},method:"post",query:{f:"json"},withCredentials:!0}).then((e=>e.data))}_getPortalSelf(e,t){let s;if(this._gwDomains.some((t=>(t.regex.test(e)&&(s=t.customBaseUrl),!!s))),s)return Promise.resolve({allSSL:!0,currentVersion:"4.4",customBaseUrl:s,portalMode:"multitenant",supportsOAuth:!0});this._appOrigin.startsWith("https:")?e=e.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(t)&&(e=e.replace(/^https:/i,"http:").replace(/:7443/i,":7080"));return Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(e,{query:{f:"json"},authMode:"anonymous",withCredentials:!0}).then((e=>e.data))}_doPortalSignIn(e){const t=this._portalConfig,s=window.location.href,r=this.findServerInfo(e);return!(!t&&!this._isPortalDomain(s)||!(r?r.hasPortal||r.owningSystemUrl&&this._isPortalDomain(r.owningSystemUrl):this._isPortalDomain(e))||!(this._isIdProvider(s,e)||t&&(this._hasSameServerInstance(this._getServerInstanceRoot(t.restBaseUrl),e)||this._isIdProvider(t.restBaseUrl,e))||Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasSameOrigin"])(s,e,!0)))}_checkProtocol(e,t,s,r){let n=!0;const o=r?t.adminTokenServiceUrl:t.tokenServiceUrl;if(o.trim().toLowerCase().startsWith("https:")&&!this._appOrigin.startsWith("https:")&&Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["getProxyRule"])(o)&&(n=!!this._protocolFunc&&!!this._protocolFunc({resourceUrl:e,serverInfo:t}),!n)){s(new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:aborted","Aborted the Sign-In process to avoid sending password over insecure connection."))}return n}_enqueue(e,t,s,r,i,n){return r||(r=Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["createResolver"])()),r.resUrl_=e,r.sinfo_=t,r.options_=s,r.admin_=i,r.refresh_=n,this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(e),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(r)):this._xoReqs.push(r):this._doSignIn(r),r.promise}_doSignIn(e){this._busy=e,this._rejectOnPersistedPageShow=!1;const t=t=>{const s=e.options_&&e.options_.resource,r=e.resUrl_,i=e.refresh_;let n=!1;-1===this.credentials.indexOf(t)&&(i&&-1!==this.credentials.indexOf(i)?(i.userId=t.userId,i.token=t.token,i.expires=t.expires,i.validity=t.validity,i.ssl=t.ssl,i.creationTime=t.creationTime,n=!0,t=i):this.credentials.push(t)),t.resources||(t.resources=[]),t.resources.push(s||r),t.scope=this._isServerRsrc(r)?"server":"portal",t.emitTokenChange();const o=this._soReqs,a={};this._soReqs=[],o.forEach((e=>{if(!this._isIdenticalService(r,e.resUrl_)){const s=this._getSuffix(e.resUrl_);a[s]||(a[s]=!0,t.resources.push(e.resUrl_))}})),e.resolve(t),o.forEach((e=>{this._hasSameServerInstance(this._getServerInstanceRoot(r),e.resUrl_)?e.resolve(t):this._soReqs.push(e)})),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,n||this.emit("credential-create",{credential:t}),this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},s=t=>{e.reject(t),this._busy=e.resUrl_=e.sinfo_=e.refresh_=null,this._soReqs.length?this._doSignIn(this._soReqs.shift()):this._xoReqs.length&&this._doSignIn(this._xoReqs.shift())},r=(r,n,a,h)=>{var l,c;const d=e.sinfo_,p=!e.options_||!1!==e.options_.prompt,_=d.hasPortal&&this._findOAuthInfo(e.resUrl_);let f,m;if(r)t(new j({userId:r,server:d.server,token:a||null,expires:null!=h?Number(h):null,ssl:!!n}));else if(window!==window.parent&&null!=(l=this._appUrlObj.query)&&l["arcgis-auth-origin"]&&null!=(c=this._appUrlObj.query)&&c["arcgis-auth-portal"]&&this._hasSameServerInstance(this._getServerInstanceRoot(this._appUrlObj.query["arcgis-auth-portal"]),e.resUrl_)){var v;window.parent.postMessage({type:"arcgis:auth:requestCredential"},this._appUrlObj.query["arcgis-auth-origin"]);const r=Object(_core_events_js__WEBPACK_IMPORTED_MODULE_6__["on"])(window,"message",(e=>{e.source===window.parent&&e.data&&("arcgis:auth:credential"===e.data.type?(r.remove(),t(new j(e.data.credential))):"arcgis:auth:error"===e.data.type&&(r.remove(),s(_core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"].fromJSON(e.data.error))))}));Object(_core_promiseUtils_js__WEBPACK_IMPORTED_MODULE_10__["onAbort"])(null==(v=e.options_)?void 0:v.signal,(()=>{r.remove()}))}else if(_){let r=_._oAuthCred;if(!r){const e=new _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_19__["default"](_,C),t=new _OAuthCredential_js__WEBPACK_IMPORTED_MODULE_19__["default"](_,D);e.isValid()&&t.isValid()?e.expires>t.expires?(r=e,t.destroy()):(r=t,e.destroy()):r=e.isValid()?e:t,_._oAuthCred=r}if(r.isValid())f=new j({userId:r.userId,server:d.server,token:r.token,expires:r.expires,ssl:r.ssl,_oAuthCred:r}),_.appId!==r.appId&&this._doPortalSignIn(e.resUrl_)?e._pendingDfd=this._exchangeToken(f.server,_.appId,f.token).then((e=>{f.token=e,r.token=e,r.save(),t(f)})).catch((()=>{t(f)})):t(f);else if(this._oAuthHash&&this._hasSameServerInstance(_.portalUrl,this._oAuthHash.state.portalUrl)){const e=this._oAuthHash;f=new j({userId:e.username,server:d.server,token:e.access_token,expires:Date.now()+1e3*Number(e.expires_in),ssl:"true"===e.ssl,oAuthState:e.state,_oAuthCred:r}),_.userId=f.userId,r.storage=e.persist?C:D,r.token=f.token,r.expires=f.expires,r.userId=f.userId,r.ssl=f.ssl,r.save(),this._oAuthHash=null,t(f)}else{const r=()=>{p?e._pendingDfd=this.oAuthSignIn(e.resUrl_,d,_,e.options_).then(t,s):(m=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authenticated","User is not signed in."),s(m))};this._doPortalSignIn(e.resUrl_)?e._pendingDfd=this._getPlatformSelf(d.server,_.appId).then((({portalUrl:e,token:s,username:i})=>{!e||Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasSameOrigin"])(e,this._appOrigin,!0)?(f=new j({server:d.server,userId:i,token:s}),t(f)):r()})).catch(r):r()}}else if(p){if(this._checkProtocol(e.resUrl_,d,s,e.admin_)){let r=e.options_;e.admin_&&(r=r||{},r.isAdmin=!0),e._pendingDfd=this.signIn(e.resUrl_,d,r).then(t,s)}}else m=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:not-authenticated","User is not signed in."),s(m)},n=()=>{const r=e.sinfo_,i=r.owningSystemUrl,n=e.options_;let o,a,h,l;if(n&&(o=n.token,a=n.error,h=n.prompt),l=this._findCredential(i,{token:o,resource:e.resUrl_}),!l)for(const e of this.credentials)if(this._isIdProvider(i,e.server)){l=e;break}if(l){const i=this.findCredential(e.resUrl_,l.userId);if(i)t(i);else if(P(r,this._legacyFed)){const e=l.toJSON();e.server=r.server,e.resources=null,t(new j(e))}else{(e._pendingDfd=this.generateToken(this.findServerInfo(l.server),null,{serverUrl:e.resUrl_,token:l.token,signal:e.options_.signal,ssl:l.ssl})).then((s=>{t(new j({userId:l.userId,server:r.server,token:s.token,expires:null!=s.expires?Number(s.expires):null,ssl:!!s.ssl,isAdmin:e.admin_,validity:s.validity}))}),s)}}else{this._busy=null,o&&(e.options_.token=null);(e._pendingDfd=this.getCredential(i.replace(/\/?$/,"/sharing"),{resource:e.resUrl_,owningTenant:r.owningTenant,signal:e.options_.signal,token:o,error:a,prompt:h})).then((()=>{this._enqueue(e.resUrl_,e.sinfo_,e.options_,e,e.admin_)}),(e=>{s(e)}))}};this._errbackFunc=s;const a=e.sinfo_.owningSystemUrl,h=this._isServerRsrc(e.resUrl_),c=e.sinfo_._restInfoPms;c?c.promise.then((t=>{const s=e.sinfo_;if(s._restInfoPms){s.adminTokenServiceUrl=s._restInfoPms.adminUrl,s._restInfoPms=null,s.tokenServiceUrl=Object(_core_object_js__WEBPACK_IMPORTED_MODULE_9__["getDeepValue"])("authInfo.tokenServicesUrl",t)||Object(_core_object_js__WEBPACK_IMPORTED_MODULE_9__["getDeepValue"])("authInfo.tokenServiceUrl",t)||Object(_core_object_js__WEBPACK_IMPORTED_MODULE_9__["getDeepValue"])("tokenServiceUrl",t),s.shortLivedTokenValidity=Object(_core_object_js__WEBPACK_IMPORTED_MODULE_9__["getDeepValue"])("authInfo.shortLivedTokenValidity",t),s.currentVersion=t.currentVersion,s.owningTenant=t.owningTenant;const e=s.owningSystemUrl=t.owningSystemUrl;e&&this._portals.push(e)}h&&s.owningSystemUrl?n():r()}),(()=>{e.sinfo_._restInfoPms=null;const t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:server-identification-failed","Unknown resource - could not find token service endpoint.");s(t)})):h&&a?n():e.sinfo_._selfReq?e.sinfo_._selfReq.selfDfd.then((t=>{const s={};let r,i,n,o;return t&&(r=t.user&&t.user.username,s.username=r,s.allSSL=t.allSSL,i=t.supportsOAuth,n=t.currentVersion,"multitenant"===t.portalMode&&(o=t.customBaseUrl)),e.sinfo_.webTierAuth=!!r,r&&this.normalizeWebTierAuth?this.generateToken(e.sinfo_,null,{ssl:s.allSSL}).catch((()=>null)).then((e=>(s.portalToken=e&&e.token,s.tokenExpiration=e&&e.expires,s))):!r&&i&&parseFloat(n)>=4.4&&!this._findOAuthInfo(e.resUrl_)?this._generateOAuthInfo({portalUrl:e.sinfo_.server,customBaseUrl:o,owningTenant:e.sinfo_._selfReq.owningTenant}).catch((()=>null)).then((()=>s)):s})).catch((()=>null)).then((t=>{e.sinfo_._selfReq=null,t?r(t.username,t.allSSL,t.portalToken,t.tokenExpiration):r()})):r()}_generateOAuthInfo(e){let t,s,i=e.portalUrl;const n=e.customBaseUrl,o=e.owningTenant,a=!this.defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal;if(a){s=window.location.href;let e=s.indexOf("?");e>-1&&(s=s.slice(0,e)),e=s.search(/\/(apps|home)\//),s=e>-1?s.slice(0,e):null}return a&&s?(this._hasTestedIfAppIsOnPortal=!0,t=Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(s+"/sharing/rest",{query:{f:"json"}}).then((()=>{this.defaultOAuthInfo=new _OAuthInfo_js__WEBPACK_IMPORTED_MODULE_20__["default"]({appId:"arcgisonline",popupCallbackUrl:s+"/home/oauth-callback.html"})}))):t=Promise.resolve(),t.then((()=>{if(this.defaultOAuthInfo)return i=i.replace(/^http:/i,"https:"),Object(_request_js__WEBPACK_IMPORTED_MODULE_3__["default"])(i+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:o,client_id:this.defaultOAuthInfo.appId,redirect_uri:Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["makeAbsolute"])(this.defaultOAuthInfo.popupCallbackUrl),f:"json"}}).then((e=>{if(e.data.valid){const t=this.defaultOAuthInfo.clone();e.data.urlKey&&n?t.portalUrl="https://"+e.data.urlKey.toLowerCase()+"."+n:t.portalUrl=i,t.popup=window!==window.top||!(Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["hasSameOrigin"])(i,this._appOrigin)||this._gwDomains.some((e=>e.regex.test(i)&&e.regex.test(this._appOrigin)))),this.oAuthInfos.push(t)}}))}))}_doOAuthSignIn(e,t,s){const r={portalUrl:s.portalUrl};!s.popup&&s.preserveUrlHash&&window.location.hash&&(r.hash=window.location.hash);const n={client_id:s.appId,response_type:"token",state:JSON.stringify(r),expiration:s.expiration,locale:s.locale,redirect_uri:s.popup?Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["makeAbsolute"])(s.popupCallbackUrl):window.location.href.replace(/#.*$/,"")};s.forceLogin&&(n.force_login=!0),s.forceUserId&&s.userId&&(n.prepopulatedusername=s.userId),!s.popup&&this._doPortalSignIn(e)&&(n.redirectToUserOrgUrl=!0);const h=s.portalUrl.replace(/^http:/i,"https:")+"/sharing/oauth2/authorize",l=h+"?"+Object(_core_urlUtils_js__WEBPACK_IMPORTED_MODULE_11__["objectToQuery"])(n);if(s.popup){const e=window.open(l,"esriJSAPIOAuth",s.popupWindowFeatures);if(e)e.focus(),this._oAuthDfd.oAuthWin_=e,this._oAuthIntervalId=setInterval((()=>{if(e.closed){clearInterval(this._oAuthIntervalId),this._oAuthOnHashHandle.remove();const e=this._oAuthDfd;if(e){const t=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:user-aborted","ABORTED");e.reject(t)}}}),500),this._oAuthOnHashHandle=Object(_core_events_js__WEBPACK_IMPORTED_MODULE_6__["on"])(_core_global_js__WEBPACK_IMPORTED_MODULE_7__["default"],"arcgis:auth:hash",(e=>{this.setOAuthResponseHash(e.detail)}));else{const e=new _core_Error_js__WEBPACK_IMPORTED_MODULE_4__["default"]("identity-manager:popup-blocked","ABORTED");this._oAuthDfd.reject(e)}}else this._rejectOnPersistedPageShow=!0,this._oAuthRedirectFunc?this._oAuthRedirectFunc({authorizeParams:n,authorizeUrl:h,resourceUrl:e,serverInfo:t,oAuthInfo:s}):window.location.href=l}}q.prototype.declaredClass="esri.identity.IdentityManagerBase";let j=class extends _core_Evented_js__WEBPACK_IMPORTED_MODULE_5__["default"].EventedAccessor{constructor(e){super(e),this._oAuthCred=null,this.tokenRefreshBuffer=2,e&&e._oAuthCred&&(this._oAuthCred=e._oAuthCred)}initialize(){this.resources=this.resources||[],null==this.creationTime&&(this.creationTime=Date.now())}refreshToken(){const e=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findServerInfo(this.server),t=e&&e.owningSystemUrl,r=!!t&&"server"===this.scope,i=r&&P(e,_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._legacyFed),n=e.webTierAuth,o=n&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].normalizeWebTierAuth,a=R[this.server],h=a&&a[this.userId];let l,c=this.resources&&this.resources[0],d=r&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findServerInfo(t),u={username:this.userId,password:h};if(n&&!o)return;r&&!d&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].serverInfos.some((e=>(_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._isIdProvider(t,e.server)&&(d=e),!!d)));const p=d&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findCredential(d.server,this.userId);if(!r||p){if(!i){if(r)l={serverUrl:c,token:p&&p.token,ssl:p&&p.ssl};else if(o)u=null,l={ssl:this.ssl};else{if(!h){let t;return c&&(c=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._sanitizeUrl(c),this._enqueued=1,t=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._enqueue(c,e,null,null,this.isAdmin,this),t.then((()=>{this._enqueued=0,this.refreshServerTokens()})).catch((()=>{this._enqueued=0}))),t}this.isAdmin&&(l={isAdmin:!0})}return _kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].generateToken(r?d:e,r?null:u,l).then((e=>{this.token=e.token,this.expires=null!=e.expires?Number(e.expires):null,this.creationTime=Date.now(),this.validity=e.validity,this.emitTokenChange(),this.refreshServerTokens()})).catch((()=>{}))}p.refreshToken()}}refreshServerTokens(){"portal"===this.scope&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].credentials.forEach((e=>{const t=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findServerInfo(e.server),r=t&&t.owningSystemUrl;e!==this&&e.userId===this.userId&&r&&"server"===e.scope&&(_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._hasSameServerInstance(this.server,r)||_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._isIdProvider(r,this.server))&&(P(t,_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"]._legacyFed)?(e.token=this.token,e.expires=this.expires,e.creationTime=this.creationTime,e.validity=this.validity,e.emitTokenChange()):e.refreshToken())}))}emitTokenChange(e){clearTimeout(this._refreshTimer);const t=this.server&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findServerInfo(this.server),r=t&&t.owningSystemUrl,i=r&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].findServerInfo(r);!1===e||r&&"portal"!==this.scope&&(!i||!i.webTierAuth||_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].normalizeWebTierAuth)||null==this.expires&&null==this.validity||this._startRefreshTimer(),this.emit("token-change")}destroy(){this.userId=this.server=this.token=this.expires=this.validity=this.resources=this.creationTime=null,this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);const e=_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].credentials.indexOf(this);e>-1&&_kernel_js__WEBPACK_IMPORTED_MODULE_2__["id"].credentials.splice(e,1),this.emitTokenChange(),this.emit("destroy")}toJSON(){const e=Object(_core_lang_js__WEBPACK_IMPORTED_MODULE_8__["fixJson"])({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),t=this.resources;return t&&t.length>0&&(e.resources=t.slice()),e}_startRefreshTimer(){clearTimeout(this._refreshTimer);const e=6e4*this.tokenRefreshBuffer,t=2**31-1;let s=(this.validity?this.creationTime+6e4*this.validity:this.expires)-Date.now();s<0?s=0:s>t&&(s=t),this._refreshTimer=setTimeout(this.refreshToken.bind(this),s>e?s-e:s)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"creationTime",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"expires",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"isAdmin",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"oAuthState",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"resources",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"scope",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"server",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"ssl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"token",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"tokenRefreshBuffer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"userId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_12__["property"])()],j.prototype,"validity",void 0),j=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_16__["subclass"])("esri.identity.Credential")],j);


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/IdentityModal.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/IdentityModal.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/handleUtils.js */ "./node_modules/@arcgis/core/core/handleUtils.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/* harmony import */ var _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../widgets/Widget.js */ "./node_modules/@arcgis/core/widgets/Widget.js");
/* harmony import */ var _widgets_support_widget_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../widgets/support/widget.js */ "./node_modules/@arcgis/core/widgets/support/widget.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* harmony import */ var _widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../widgets/support/jsxFactory.js */ "./node_modules/@arcgis/core/widgets/support/jsxFactory.js");
/* harmony import */ var _widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../widgets/support/decorators/messageBundle.js */ "./node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const d={base:"esri-identity-modal",open:"esri-identity-modal--open",closed:"esri-identity-modal--closed",title:"esri-identity-modal__title",dialog:"esri-identity-modal__dialog",content:"esri-identity-modal__content",closeButton:"esri-identity-modal__close-button",iconClose:"esri-icon-close"};let l=class extends _widgets_Widget_js__WEBPACK_IMPORTED_MODULE_7__["default"]{constructor(t,e){super(t,e),this.container=document.createElement("div"),this.content=null,this.open=!1,this._close=()=>{this.open=!1},document.body.appendChild(this.container),this.own(this.watch("open",(()=>this._toggleFocusTrap())))}destroy(){this._destroyFocusTrap()}render(){const t=this.id,{open:e,content:o,title:s,messages:i}=this,r=e&&!!o,n={[d.open]:r,[d.closed]:!r},c=Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("button",{class:d.closeButton,"aria-label":i.close,title:i.close,bind:this,onclick:this._close},Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("span",{"aria-hidden":"true",class:d.iconClose})),l=`${t}_title`,p=`${t}_content`,u=s?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("h1",{id:l,class:d.title},s):null,m=r?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{bind:this,class:d.dialog,role:"dialog","aria-labelledby":l,"aria-describedby":p,afterCreate:this._createFocusTrap},c,u,this._renderContent(p)):null;return Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{tabIndex:-1,class:this.classes(d.base,n)},m)}_destroyFocusTrap(){var t;null==(t=this._focusTrap)||t.deactivate({onDeactivate:null}),this._focusTrap=null}_toggleFocusTrap(){const{_focusTrap:t,open:e}=this;t&&(e?t.activate():t.deactivate())}_createFocusTrap(t){this._destroyFocusTrap();const o=requestAnimationFrame((()=>{this._focusTrap=Object(focus_trap__WEBPACK_IMPORTED_MODULE_9__["createFocusTrap"])(t,{initialFocus:"input",onDeactivate:this._close}),this._toggleFocusTrap()}));this.own(Object(_core_handleUtils_js__WEBPACK_IMPORTED_MODULE_1__["makeHandle"])((()=>cancelAnimationFrame(o))))}_renderContent(t){const e=this.content;return"string"==typeof e?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{class:d.content,id:t,innerHTML:e}):Object(_widgets_support_widget_js__WEBPACK_IMPORTED_MODULE_8__["isWidget"])(e)?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{class:d.content,id:t},e.render()):e instanceof HTMLElement?Object(_widgets_support_jsxFactory_js__WEBPACK_IMPORTED_MODULE_10__["tsx"])("div",{class:d.content,id:t,bind:e,afterCreate:this._attachToNode}):null}_attachToNode(t){const e=this;t.appendChild(e)}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({readOnly:!0})],l.prototype,"container",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],l.prototype,"content",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])()],l.prototype,"open",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])(),Object(_widgets_support_decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_11__["messageBundle"])("esri/t9n/common")],l.prototype,"messages",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({aliasOf:"messages.auth.signIn"})],l.prototype,"title",void 0),l=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.identity.IdentityModal")],l);var p=l;/* harmony default export */ __webpack_exports__["default"] = (p);


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/OAuthCredential.js":
/*!***************************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/OAuthCredential.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
const t="esriJSAPIOAuth";class s{constructor(t,s){this.oAuthInfo=null,this.storage=null,this.appId=null,this.expires=null,this.ssl=null,this.token=null,this.userId=null,this.oAuthInfo=t,this.storage=s,this._init()}isValid(){let t=!1;if(this.oAuthInfo&&this.token&&this.userId){const s=Date.now();if(this.expires>s){(this.expires-s)/1e3>60*this.oAuthInfo.minTimeUntilExpiration&&(t=!0)}}return t}save(){if(!this.storage)return;const s=this._load(),e=this.oAuthInfo;if(e&&e.authNamespace&&e.portalUrl){let o=s[e.authNamespace];o||(o=s[e.authNamespace]={}),o[e.portalUrl]={appId:this.appId=e.appId,expires:this.expires,ssl:this.ssl,token:this.token,userId:this.userId};try{this.storage.setItem(t,JSON.stringify(s))}catch(i){console.log(i)}}}destroy(){const s=this._load(),e=this.oAuthInfo;if(e&&e.appId&&e.portalUrl&&this.token&&this.expires>Date.now()){const t=e.portalUrl.replace(/^http:/i,"https:")+"/sharing/rest/oauth2/revokeToken",s=new FormData;if(s.append("f","json"),s.append("auth_token",this.token),s.append("client_id",e.appId),s.append("token_type_hint","access_token"),"function"==typeof navigator.sendBeacon)navigator.sendBeacon(t,s);else{const e=new XMLHttpRequest;e.open("POST",t),e.send(s)}}if(e&&e.authNamespace&&e.portalUrl&&this.storage){const o=s[e.authNamespace];if(o){delete o[e.portalUrl];try{this.storage.setItem(t,JSON.stringify(s))}catch(i){console.log(i)}}}e&&(e._oAuthCred=null,this.oAuthInfo=null)}_init(){const t=this._load(),s=this.oAuthInfo;if(s&&s.authNamespace&&s.portalUrl){let e=t[s.authNamespace];e&&(e=e[s.portalUrl],e&&(this.appId=e.appId,this.expires=e.expires,this.ssl=e.ssl,this.token=e.token,this.userId=e.userId))}}_load(){let s={};if(this.storage){const i=this.storage.getItem(t);if(i)try{s=JSON.parse(i)}catch(e){console.log(e)}}return s}}s.prototype.declaredClass="esri.identity.OAuthCredential";/* harmony default export */ __webpack_exports__["default"] = (s);


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/OAuthInfo.js":
/*!*********************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/OAuthInfo.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
var p;let s=p=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(o){super(o),this._oAuthCred=null,this.appId=null,this.authNamespace="/",this.expiration=20160,this.forceLogin=!1,this.forceUserId=!1,this.locale=null,this.minTimeUntilExpiration=30,this.popup=!1,this.popupCallbackUrl="oauth-callback.html",this.popupWindowFeatures="height=490,width=800,resizable,scrollbars,status",this.portalUrl="https://www.arcgis.com",this.preserveUrlHash=!1,this.userId=null}clone(){return p.fromJSON(this.toJSON())}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"appId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"authNamespace",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"expiration",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"forceLogin",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"forceUserId",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"locale",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"minTimeUntilExpiration",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"popup",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"popupCallbackUrl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"popupWindowFeatures",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"portalUrl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"preserveUrlHash",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"userId",void 0),s=p=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.identity.OAuthInfo")],s);var i=s;/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "./node_modules/@arcgis/core/identity/ServerInfo.js":
/*!**********************************************************!*\
  !*** ./node_modules/@arcgis/core/identity/ServerInfo.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chunks/tslib.es6.js */ "./node_modules/@arcgis/core/chunks/tslib.es6.js");
/* harmony import */ var _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/JSONSupport.js */ "./node_modules/@arcgis/core/core/JSONSupport.js");
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/accessorSupport/decorators/property.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/accessorSupport/ensureType.js */ "./node_modules/@arcgis/core/core/accessorSupport/ensureType.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../core/accessorSupport/decorators/subclass.js */ "./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
let s=class extends _core_JSONSupport_js__WEBPACK_IMPORTED_MODULE_1__["JSONSupport"]{constructor(o){super(o),this.adminTokenServiceUrl=null,this.currentVersion=null,this.hasPortal=null,this.hasServer=null,this.owningSystemUrl=null,this.owningTenant=null,this.server=null,this.shortLivedTokenValidity=null,this.tokenServiceUrl=null,this.webTierAuth=null}};Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"adminTokenServiceUrl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"currentVersion",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"hasPortal",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"hasServer",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"owningSystemUrl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"owningTenant",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"server",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"shortLivedTokenValidity",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"tokenServiceUrl",void 0),Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_2__["property"])({json:{write:!0}})],s.prototype,"webTierAuth",void 0),s=Object(_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_0__["_"])([Object(_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_6__["subclass"])("esri.identity.ServerInfo")],s);var i=s;/* harmony default export */ __webpack_exports__["default"] = (i);


/***/ }),

/***/ "./node_modules/@arcgis/core/widgets/support/decorators/renderable.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@arcgis/core/widgets/support/decorators/renderable.js ***!
  \****************************************************************************/
/*! exports provided: renderable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderable", function() { return c; });
/* harmony import */ var _core_deprecate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/deprecate.js */ "./node_modules/@arcgis/core/core/deprecate.js");
/* harmony import */ var _core_has_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/has.js */ "./node_modules/@arcgis/core/core/has.js");
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/Logger.js */ "./node_modules/@arcgis/core/core/Logger.js");
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function c(c){return function(c,t){Object(_core_has_js__WEBPACK_IMPORTED_MODULE_1__["default"])("esri-deprecation-warnings")&&Object(_core_deprecate_js__WEBPACK_IMPORTED_MODULE_0__["deprecated"])(_core_Logger_js__WEBPACK_IMPORTED_MODULE_2__["default"].getLogger("esri.core.accessorSupport.decorators"),"'@renderable()' decorator",{version:"4.19",warnOnce:!0})}}


/***/ }),

/***/ "./node_modules/@arcgis/core/widgets/support/widget.js":
/*!*************************************************************!*\
  !*** ./node_modules/@arcgis/core/widgets/support/widget.js ***!
  \*************************************************************/
/*! exports provided: accessibleHandler, messageBundle, renderable, vmEvent, tsx, additionalAllowedTags, classes, cssTransition, discardNode, getCalciteThemeClass, getThemeName, isActivationKey, isDarkTheme, isRTL, keepMenuItemWithinView, renderingSanitizer, safeAttrs, storeNode, hasDomNode, isWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasDomNode", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWidget", function() { return e; });
/* harmony import */ var _decorators_accessibleHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decorators/accessibleHandler.js */ "./node_modules/@arcgis/core/widgets/support/decorators/accessibleHandler.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "accessibleHandler", function() { return _decorators_accessibleHandler_js__WEBPACK_IMPORTED_MODULE_0__["accessibleHandler"]; });

/* harmony import */ var _decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decorators/messageBundle.js */ "./node_modules/@arcgis/core/widgets/support/decorators/messageBundle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "messageBundle", function() { return _decorators_messageBundle_js__WEBPACK_IMPORTED_MODULE_1__["messageBundle"]; });

/* harmony import */ var _decorators_renderable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./decorators/renderable.js */ "./node_modules/@arcgis/core/widgets/support/decorators/renderable.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderable", function() { return _decorators_renderable_js__WEBPACK_IMPORTED_MODULE_2__["renderable"]; });

/* harmony import */ var _decorators_vmEvent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./decorators/vmEvent.js */ "./node_modules/@arcgis/core/widgets/support/decorators/vmEvent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vmEvent", function() { return _decorators_vmEvent_js__WEBPACK_IMPORTED_MODULE_3__["vmEvent"]; });

/* harmony import */ var _jsxFactory_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jsxFactory.js */ "./node_modules/@arcgis/core/widgets/support/jsxFactory.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tsx", function() { return _jsxFactory_js__WEBPACK_IMPORTED_MODULE_4__["tsx"]; });

/* harmony import */ var _widgetUtils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgetUtils.js */ "./node_modules/@arcgis/core/widgets/support/widgetUtils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "additionalAllowedTags", function() { return _widgetUtils_js__WEBPACK_IMPORTED_MODULE_5__["additionalAllowedTags"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classes", function() { return _widgetUtils_js__WEBPACK_IMPORTED_MODULE_5__["classes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cssTransition", function() { return _widgetUtils_js__WEBPACK_IMPORTED_MODULE_5__["cssTransition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "discardNode", function() { return _widgetUtils_js__WEBPACK_IMPORTED_MODULE_5__["discardNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCalciteThemeClass", function() { return _widgetUtils_js__WEBPACK_IMPORTED_MODULE_5__["getCalciteThemeClass"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getThemeName", function() { return _widgetUtils_js__WEBPACK_IMPORTED_MODULE_5__["getThemeName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isActivationKey", function() { return _widgetUtils_js__WEBPACK_IMPORTED_MODULE_5__["isActivationKey"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDarkTheme", function() { return _widgetUtils_js__WEBPACK_IMPORTED_MODULE_5__["isDarkTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRTL", function() { return _widgetUtils_js__WEBPACK_IMPORTED_MODULE_5__["isRTL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keepMenuItemWithinView", function() { return _widgetUtils_js__WEBPACK_IMPORTED_MODULE_5__["keepMenuItemWithinView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "renderingSanitizer", function() { return _widgetUtils_js__WEBPACK_IMPORTED_MODULE_5__["renderingSanitizer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "safeAttrs", function() { return _widgetUtils_js__WEBPACK_IMPORTED_MODULE_5__["safeAttrs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "storeNode", function() { return _widgetUtils_js__WEBPACK_IMPORTED_MODULE_5__["storeNode"]; });

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
function e(e){return e&&"function"==typeof e.render}function t(e){return e&&"function"==typeof e.postMixInProperties&&"function"==typeof e.buildRendering&&"function"==typeof e.postCreate&&"function"==typeof e.startup}


/***/ }),

/***/ "./node_modules/focus-trap/dist/focus-trap.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/focus-trap/dist/focus-trap.esm.js ***!
  \********************************************************/
/*! exports provided: createFocusTrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFocusTrap", function() { return createFocusTrap; });
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/dist/index.esm.js");
/*!
* focus-trap 6.5.1
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/


function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var activeFocusDelay;

var activeFocusTraps = function () {
  var trapQueue = [];
  return {
    activateTrap: function activateTrap(trap) {
      if (trapQueue.length > 0) {
        var activeTrap = trapQueue[trapQueue.length - 1];

        if (activeTrap !== trap) {
          activeTrap.pause();
        }
      }

      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex === -1) {
        trapQueue.push(trap);
      } else {
        // move this existing trap to the front of the queue
        trapQueue.splice(trapIndex, 1);
        trapQueue.push(trap);
      }
    },
    deactivateTrap: function deactivateTrap(trap) {
      var trapIndex = trapQueue.indexOf(trap);

      if (trapIndex !== -1) {
        trapQueue.splice(trapIndex, 1);
      }

      if (trapQueue.length > 0) {
        trapQueue[trapQueue.length - 1].unpause();
      }
    }
  };
}();

var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};

var isEscapeEvent = function isEscapeEvent(e) {
  return e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27;
};

var isTabEvent = function isTabEvent(e) {
  return e.key === 'Tab' || e.keyCode === 9;
};

var delay = function delay(fn) {
  return setTimeout(fn, 0);
}; // Array.find/findIndex() are not supported on IE; this replicates enough
//  of Array.findIndex() for our needs


var findIndex = function findIndex(arr, fn) {
  var idx = -1;
  arr.every(function (value, i) {
    if (fn(value)) {
      idx = i;
      return false; // break
    }

    return true; // next
  });
  return idx;
};
/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
 * @returns {*} The `value`, or the handler's returned value.
 */


var valueOrHandler = function valueOrHandler(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  return typeof value === 'function' ? value.apply(void 0, params) : value;
};

var createFocusTrap = function createFocusTrap(elements, userOptions) {
  var doc = document;

  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true
  }, userOptions);

  var state = {
    // @type {Array<HTMLElement>}
    containers: [],
    // list of objects identifying the first and last tabbable nodes in all containers/groups in
    //  the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    // @type {Array<{ container: HTMLElement, firstTabbableNode: HTMLElement|null, lastTabbableNode: HTMLElement|null }>}
    tabbableGroups: [],
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };

  var containersContain = function containersContain(element) {
    return state.containers.some(function (container) {
      return container.contains(element);
    });
  };

  var getNodeForOption = function getNodeForOption(optionName) {
    var optionValue = config[optionName];

    if (!optionValue) {
      return null;
    }

    var node = optionValue;

    if (typeof optionValue === 'string') {
      node = doc.querySelector(optionValue);

      if (!node) {
        throw new Error("`".concat(optionName, "` refers to no known node"));
      }
    }

    if (typeof optionValue === 'function') {
      node = optionValue();

      if (!node) {
        throw new Error("`".concat(optionName, "` did not return a node"));
      }
    }

    return node;
  };

  var getInitialFocusNode = function getInitialFocusNode() {
    var node;

    if (getNodeForOption('initialFocus') !== null) {
      node = getNodeForOption('initialFocus');
    } else if (containersContain(doc.activeElement)) {
      node = doc.activeElement;
    } else {
      var firstTabbableGroup = state.tabbableGroups[0];
      var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;
      node = firstTabbableNode || getNodeForOption('fallbackFocus');
    }

    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }

    return node;
  };

  var updateTabbableNodes = function updateTabbableNodes() {
    state.tabbableGroups = state.containers.map(function (container) {
      var tabbableNodes = Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["tabbable"])(container);

      if (tabbableNodes.length > 0) {
        return {
          container: container,
          firstTabbableNode: tabbableNodes[0],
          lastTabbableNode: tabbableNodes[tabbableNodes.length - 1]
        };
      }

      return undefined;
    }).filter(function (group) {
      return !!group;
    }); // remove groups with no tabbable nodes
    // throw if no groups have tabbable nodes and we don't have a fallback focus node either

    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus')) {
      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    }
  };

  var tryFocus = function tryFocus(node) {
    if (node === doc.activeElement) {
      return;
    }

    if (!node || !node.focus) {
      tryFocus(getInitialFocusNode());
      return;
    }

    node.focus({
      preventScroll: !!config.preventScroll
    });
    state.mostRecentlyFocusedNode = node;

    if (isSelectableInput(node)) {
      node.select();
    }
  };

  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus');
    return node ? node : previousActiveElement;
  }; // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.


  var checkPointerDown = function checkPointerDown(e) {
    if (containersContain(e.target)) {
      // allow the click since it ocurred inside the trap
      return;
    }

    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      // immediately deactivate the trap
      trap.deactivate({
        // if, on deactivation, we should return focus to the node originally-focused
        //  when the trap was activated (or the configured `setReturnFocus` node),
        //  then assume it's also OK to return focus to the outside node that was
        //  just clicked, causing deactivation, as long as that node is focusable;
        //  if it isn't focusable, then return focus to the original node focused
        //  on activation (or the configured `setReturnFocus` node)
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked, whether it's focusable or not; by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node)
        returnFocus: config.returnFocusOnDeactivate && !Object(tabbable__WEBPACK_IMPORTED_MODULE_0__["isFocusable"])(e.target)
      });
      return;
    } // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)


    if (valueOrHandler(config.allowOutsideClick, e)) {
      // allow the click outside the trap to take place
      return;
    } // otherwise, prevent the click


    e.preventDefault();
  }; // In case focus escapes the trap for some strange reason, pull it back in.


  var checkFocusIn = function checkFocusIn(e) {
    var targetContained = containersContain(e.target); // In Firefox when you Tab out of an iframe the Document is briefly focused.

    if (targetContained || e.target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = e.target;
      }
    } else {
      // escaped! pull it back in to where it just left
      e.stopImmediatePropagation();
      tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
    }
  }; // Hijack Tab events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.


  var checkTab = function checkTab(e) {
    updateTabbableNodes();
    var destinationNode = null;

    if (state.tabbableGroups.length > 0) {
      // make sure the target is actually contained in a group
      // NOTE: the target may also be the container itself if it's tabbable
      //  with tabIndex='-1' and was given initial focus
      var containerIndex = findIndex(state.tabbableGroups, function (_ref) {
        var container = _ref.container;
        return container.contains(e.target);
      });

      if (containerIndex < 0) {
        // target not found in any group: quite possible focus has escaped the trap,
        //  so bring it back in to...
        if (e.shiftKey) {
          // ...the last node in the last group
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          // ...the first node in the first group
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (e.shiftKey) {
        // REVERSE
        // is the target the first tabbable node in a group?
        var startOfGroupIndex = findIndex(state.tabbableGroups, function (_ref2) {
          var firstTabbableNode = _ref2.firstTabbableNode;
          return e.target === firstTabbableNode;
        });

        if (startOfGroupIndex < 0 && state.tabbableGroups[containerIndex].container === e.target) {
          // an exception case where the target is the container itself, in which
          //  case, we should handle shift+tab as if focus were on the container's
          //  first tabbable node, and go to the last tabbable node of the LAST group
          startOfGroupIndex = containerIndex;
        }

        if (startOfGroupIndex >= 0) {
          // YES: then shift+tab should go to the last tabbable node in the
          //  previous group (and wrap around to the last tabbable node of
          //  the LAST group if it's the first tabbable node of the FIRST group)
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = destinationGroup.lastTabbableNode;
        }
      } else {
        // FORWARD
        // is the target the last tabbable node in a group?
        var lastOfGroupIndex = findIndex(state.tabbableGroups, function (_ref3) {
          var lastTabbableNode = _ref3.lastTabbableNode;
          return e.target === lastTabbableNode;
        });

        if (lastOfGroupIndex < 0 && state.tabbableGroups[containerIndex].container === e.target) {
          // an exception case where the target is the container itself, in which
          //  case, we should handle tab as if focus were on the container's
          //  last tabbable node, and go to the first tabbable node of the FIRST group
          lastOfGroupIndex = containerIndex;
        }

        if (lastOfGroupIndex >= 0) {
          // YES: then tab should go to the first tabbable node in the next
          //  group (and wrap around to the first tabbable node of the FIRST
          //  group if it's the last tabbable node of the LAST group)
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;

          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = _destinationGroup.firstTabbableNode;
        }
      }
    } else {
      destinationNode = getNodeForOption('fallbackFocus');
    }

    if (destinationNode) {
      e.preventDefault();
      tryFocus(destinationNode);
    } // else, let the browser take care of [shift+]tab and move the focus

  };

  var checkKey = function checkKey(e) {
    if (config.escapeDeactivates !== false && isEscapeEvent(e)) {
      e.preventDefault();
      trap.deactivate();
      return;
    }

    if (isTabEvent(e)) {
      checkTab(e);
      return;
    }
  };

  var checkClick = function checkClick(e) {
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }

    if (containersContain(e.target)) {
      return;
    }

    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();
  }; //
  // EVENT LISTENERS
  //


  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    } // There can be only one listening focus trap at a time


    activeFocusTraps.activateTrap(trap); // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.

    activeFocusDelay = config.delayInitialFocus ? delay(function () {
      tryFocus(getInitialFocusNode());
    }) : tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkKey, {
      capture: true,
      passive: false
    });
    return trap;
  };

  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }

    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkKey, true);
    return trap;
  }; //
  // TRAP DEFINITION
  //


  trap = {
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }

      var onActivate = getOption(activateOptions, 'onActivate');
      var onPostActivate = getOption(activateOptions, 'onPostActivate');
      var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');

      if (!checkCanFocusTrap) {
        updateTabbableNodes();
      }

      state.active = true;
      state.paused = false;
      state.nodeFocusedBeforeActivation = doc.activeElement;

      if (onActivate) {
        onActivate();
      }

      var finishActivation = function finishActivation() {
        if (checkCanFocusTrap) {
          updateTabbableNodes();
        }

        addListeners();

        if (onPostActivate) {
          onPostActivate();
        }
      };

      if (checkCanFocusTrap) {
        checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
        return this;
      }

      finishActivation();
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }

      clearTimeout(activeFocusDelay);
      removeListeners();
      state.active = false;
      state.paused = false;
      activeFocusTraps.deactivateTrap(trap);
      var onDeactivate = getOption(deactivateOptions, 'onDeactivate');
      var onPostDeactivate = getOption(deactivateOptions, 'onPostDeactivate');
      var checkCanReturnFocus = getOption(deactivateOptions, 'checkCanReturnFocus');

      if (onDeactivate) {
        onDeactivate();
      }

      var returnFocus = getOption(deactivateOptions, 'returnFocus', 'returnFocusOnDeactivate');

      var finishDeactivation = function finishDeactivation() {
        delay(function () {
          if (returnFocus) {
            tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }

          if (onPostDeactivate) {
            onPostDeactivate();
          }
        });
      };

      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }

      finishDeactivation();
      return this;
    },
    pause: function pause() {
      if (state.paused || !state.active) {
        return this;
      }

      state.paused = true;
      removeListeners();
      return this;
    },
    unpause: function unpause() {
      if (!state.paused || !state.active) {
        return this;
      }

      state.paused = false;
      updateTabbableNodes();
      addListeners();
      return this;
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });

      if (state.active) {
        updateTabbableNodes();
      }

      return this;
    }
  }; // initialize container elements

  trap.updateContainerElements(elements);
  return trap;
};


//# sourceMappingURL=focus-trap.esm.js.map


/***/ }),

/***/ "./node_modules/tabbable/dist/index.esm.js":
/*!*************************************************!*\
  !*** ./node_modules/tabbable/dist/index.esm.js ***!
  \*************************************************/
/*! exports provided: focusable, isFocusable, isTabbable, tabbable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "focusable", function() { return focusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFocusable", function() { return isFocusable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTabbable", function() { return isTabbable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabbable", function() { return tabbable; });
/*!
* tabbable 5.2.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
var candidateSelectors = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])', 'details>summary:first-of-type', 'details'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var matches = typeof Element === 'undefined' ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;

var getCandidates = function getCandidates(el, includeContainer, filter) {
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));

  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }

  candidates = candidates.filter(filter);
  return candidates;
};

var isContentEditable = function isContentEditable(node) {
  return node.contentEditable === 'true';
};

var getTabindex = function getTabindex(node) {
  var tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

  if (!isNaN(tabindexAttr)) {
    return tabindexAttr;
  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // so if they don't have a tabindex attribute specifically set, assume it's 0.


  if (isContentEditable(node)) {
    return 0;
  } // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.


  if ((node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }

  return node.tabIndex;
};

var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};

var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};

var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};

var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};

var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};

var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }

  var radioScope = node.form || node.ownerDocument;

  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };

  var radioSet;

  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }

  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};

var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};

var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

var isHidden = function isHidden(node, displayCheck) {
  if (getComputedStyle(node).visibility === 'hidden') {
    return true;
  }

  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;

  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }

  if (!displayCheck || displayCheck === 'full') {
    while (node) {
      if (getComputedStyle(node).display === 'none') {
        return true;
      }

      node = node.parentElement;
    }
  } else if (displayCheck === 'non-zero-area') {
    var _node$getBoundingClie = node.getBoundingClientRect(),
        width = _node$getBoundingClie.width,
        height = _node$getBoundingClie.height;

    return width === 0 && height === 0;
  }

  return false;
}; // form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset


var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (isInput(node) || node.tagName === 'SELECT' || node.tagName === 'TEXTAREA' || node.tagName === 'BUTTON') {
    var parentNode = node.parentElement;

    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> as an immediate child of the disabled
        //  <fieldset>: if the node is in that legend, it'll be enabled even
        //  though the fieldset is disabled; otherwise, the node is in a
        //  secondary/subsequent legend, or somewhere else within the fieldset
        //  (however deep nested) and it'll be disabled
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);

          if (child.tagName === 'LEGEND') {
            if (child.contains(node)) {
              return false;
            } // the node isn't in the first legend (in doc order), so no matter
            //  where it is now, it'll be disabled


            return true;
          }
        } // the node isn't in a legend, so no matter where it is now, it'll be disabled


        return true;
      }

      parentNode = parentNode.parentElement;
    }
  } // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state


  return false;
};

var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node, options.displayCheck) || // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }

  return true;
};

var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (!isNodeMatchingSelectorFocusable(options, node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
    return false;
  }

  return true;
};

var tabbable = function tabbable(el, options) {
  options = options || {};
  var regularTabbables = [];
  var orderedTabbables = [];
  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  candidates.forEach(function (candidate, i) {
    var candidateTabindex = getTabindex(candidate);

    if (candidateTabindex === 0) {
      regularTabbables.push(candidate);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        node: candidate
      });
    }
  });
  var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function (a) {
    return a.node;
  }).concat(regularTabbables);
  return tabbableNodes;
};

var focusable = function focusable(el, options) {
  options = options || {};
  var candidates = getCandidates(el, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  return candidates;
};

var isTabbable = function isTabbable(node, options) {
  options = options || {};

  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, candidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorTabbable(options, node);
};

var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe').join(',');

var isFocusable = function isFocusable(node, options) {
  options = options || {};

  if (!node) {
    throw new Error('No node provided');
  }

  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }

  return isNodeMatchingSelectorFocusable(options, node);
};


//# sourceMappingURL=index.esm.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL2lkZW50aXR5L0lkZW50aXR5Rm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL2lkZW50aXR5L0lkZW50aXR5TWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL2lkZW50aXR5L0lkZW50aXR5TWFuYWdlckJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS9pZGVudGl0eS9JZGVudGl0eU1vZGFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvaWRlbnRpdHkvT0F1dGhDcmVkZW50aWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvaWRlbnRpdHkvT0F1dGhJbmZvLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYXJjZ2lzL2NvcmUvaWRlbnRpdHkvU2VydmVySW5mby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGFyY2dpcy9jb3JlL3dpZGdldHMvc3VwcG9ydC9kZWNvcmF0b3JzL3JlbmRlcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BhcmNnaXMvY29yZS93aWRnZXRzL3N1cHBvcnQvd2lkZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb2N1cy10cmFwL2Rpc3QvZm9jdXMtdHJhcC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RhYmJhYmxlL2Rpc3QvaW5kZXguZXNtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUN5akIsU0FBUywrTkFBK04sbUJBQW1CLG9CQUFvQiwwREFBQyxDQUFDLGlCQUFpQixrTEFBa0wsU0FBUyxNQUFNLGlFQUFpRSxRQUFRLDJFQUFDLFFBQVEsY0FBYyxDQUFDLHNFQUFDLHVCQUF1QixpREFBaUQsYUFBYSxHQUFHLFlBQVksMkVBQUMsUUFBUSw2QkFBNkIsQ0FBQywyRUFBQyxVQUFVLGNBQWMsV0FBVywyRUFBQyxVQUFVLHdGQUF3Rix5RUFBQyx3REFBd0QsYUFBYSwyRUFBQyxRQUFRLDZCQUE2QixDQUFDLDJFQUFDLFVBQVUsY0FBYyxVQUFVLDJFQUFDLFVBQVUsMkRBQTJELHlFQUFDLHdEQUF3RCxNQUFNLDJFQUFDLFFBQVEscUNBQXFDLENBQUMsMkVBQUMsVUFBVSwyRUFBMkUsRUFBRSwyRUFBQyxVQUFVLHNIQUFzSCxPQUFPLDJFQUFDLGdGQUFnRixPQUFPLDJFQUFDLFNBQVMsNkNBQTZDLFlBQVksVUFBVSxzS0FBc0ssV0FBVyw2Q0FBNkMsMkJBQTJCLEVBQUUsaUlBQWlJLHdCQUF3Qiw4REFBQyxFQUFFLDZGQUFDLEdBQUcsa0dBQUMsK0RBQStELDhEQUFDLEVBQUUsNkZBQUMsb0NBQW9DLDhEQUFDLEVBQUUsNkZBQUMsaUNBQWlDLDhEQUFDLEVBQUUsNkZBQUMsbUNBQW1DLDhEQUFDLEVBQUUsNkZBQUMsZ0NBQWdDLDhEQUFDLEVBQUUsNkZBQUMsd0NBQXdDLDhEQUFDLEVBQUUsNkZBQUMsbUNBQW1DLFFBQXVCLGdFQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNKeHpGO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ29HLGdCQUFnQiwyRUFBQyxFQUFFLDBEQUEwRCxjQUFjLHdEQUFDLElBQW1CLGdFQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNKck47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUN5aEMsVUFBVSxPQUFPLFlBQVksc0RBQUMsK0JBQStCLHNEQUFDLHNDQUFzQyw0QkFBNEIscURBQXFELGtCQUFrQixJQUFJLDhDQUE4QyxPQUFPLGdCQUFnQix3REFBQyxDQUFDLGNBQWMsMkJBQTJCLHVEQUFDLDBOQUEwTix5REFBQyxrSkFBa0osc0VBQUMsbVZBQW1WLDBJQUEwSSxFQUFFLG9LQUFvSyxFQUFFLGdMQUFnTCxFQUFFLHNLQUFzSyxFQUFFLHNKQUFzSixtdkJBQW12Qix5QkFBeUIsR0FBRyxtQkFBbUIseUJBQXlCLG1IQUFtSCxtR0FBbUcsR0FBRyxzQkFBc0Isd0JBQXdCLE1BQU0sa0JBQWtCLHdDQUF3Qyw0QkFBNEIsNEJBQTRCLHVCQUF1QixpQkFBaUIsR0FBRyxNQUFNLDREQUE0RCxvQ0FBb0MsVUFBVSx1REFBQyxnT0FBZ08sb0dBQW9HLDZGQUE2RixTQUFTLE9BQU8sNkRBQUMsRUFBRSxvSkFBb0osRUFBRSxjQUFjLGFBQWEsc0NBQXNDLHFEQUFxRCxNQUFNLFdBQVcsZUFBZSwwREFBMEQsdURBQUMsS0FBSyxxQ0FBcUMsTUFBTSxXQUFXLGVBQWUsc0NBQXNDLHNEQUFDLEtBQUssd0NBQXdDLGtCQUFrQixnSUFBZ0ksR0FBRyxrQkFBa0IsTUFBTSx1QkFBdUIsNEVBQTRFLElBQUksTUFBTSxTQUFTLGlCQUFpQixNQUFNLHVCQUF1Qiw4RUFBOEUsSUFBSSxNQUFNLFNBQVMsb0JBQW9CLE1BQU0sdUJBQXVCLGdEQUFnRCxNQUFNLHVHQUF1RyxJQUFJLE9BQU8sa0lBQWtJLElBQUksTUFBTSxTQUFTLG1CQUFtQixhQUFhLDhDQUE4QyxLQUFLLHdCQUF3QixRQUFRLG9GQUFDLEtBQUssNkVBQUMsR0FBRyxhQUFhLHNFQUFDLGdCQUFnQixVQUFVLEdBQUcsc0VBQUMsU0FBUyxhQUFhLHNEQUFDLDZDQUE2QyxHQUFHLHdFQUFDLHFCQUFxQixrQkFBa0IsaUVBQWlFLE1BQU0sMkRBQTJELHVCQUF1QixzREFBQyxrSUFBa0ksUUFBUSx3QkFBd0Isa0NBQWtDLG1DQUFtQyw2QkFBNkIsa0dBQWtHLEtBQUssZ0NBQWdDLG1CQUFtQixzREFBQyx3SEFBd0gsTUFBTSx1REFBQyw2SkFBNkosNkNBQTZDLHdFQUFDLHFIQUFxSCw2SUFBNkksMkJBQTJCLG1CQUFtQixzUUFBc1EscUJBQXFCLDZEQUE2RCxzREFBQyw4Q0FBOEMsb0JBQW9CLGdPQUFnTyxzREFBQywrRUFBK0Usd0VBQUMsbUpBQW1KLFNBQVMsT0FBTyxtTkFBbU4sc0dBQXNHLDBCQUEwQixPQUFPLDJEQUFDLGdCQUFnQixlQUFlLDJCQUEyQixzREFBQyxzRUFBc0UsaUJBQWlCLHFCQUFxQixrREFBa0QsR0FBRyxTQUFTLG1CQUFtQixxQkFBcUIseURBQXlELHNCQUFzQixTQUFTLDZCQUE2QixVQUFVLFlBQVksTUFBTSxTQUFTLFVBQVUsb0lBQW9JLEtBQUssbUJBQW1CLGNBQWMsMkJBQTJCLEtBQUssbUJBQW1CLGNBQWMsNEJBQTRCLGtDQUFrQywyREFBQyxJQUFJLDZCQUE2QixZQUFZLCtCQUErQixzREFBQyx1RUFBdUUsU0FBUyxZQUFZLHVDQUF1QyxjQUFjLGNBQWMsc0RBQXNELHdDQUF3QyxpQ0FBaUMsc0RBQUMsZ0VBQWdFLHFCQUFxQixzREFBQyxxQ0FBcUMsT0FBTyxjQUFjLEdBQUcsY0FBYyxtQ0FBbUMsSUFBSSx3QkFBd0IsTUFBTSx1QkFBdUIscUNBQXFDLHlIQUF5SCxRQUFRLHdFQUFDLElBQUksWUFBWSx3Q0FBd0Msc0RBQUMscUlBQXFJLFlBQVksS0FBSyxvREFBb0QsbUlBQW1JLEVBQUUsbUlBQW1JLDhCQUE4QiwwQkFBMEIsMkJBQTJCLHFCQUFxQixlQUFlLEVBQUUsUUFBUSw2RUFBQyxVQUFVLGNBQWMsNkpBQTZKLFFBQVEscUNBQXFDLHNEQUFDLDhDQUE4QyxVQUFVLHNFQUFDLGdCQUFnQixJQUFJLEdBQUcsK0JBQStCLHFFQUFxRSwwREFBQyxzRUFBc0UsMEVBQTBFLHdCQUF3QixrQ0FBa0MsWUFBWSxJQUFJLGVBQWUsaUpBQWlKLEVBQUUsYUFBYSxjQUFjLHlCQUF5QixHQUFHLEdBQUcsaUJBQWlCLHFCQUFxQixlQUFlLDZFQUFDLEdBQUcsdUJBQXVCLG1CQUFtQixzRUFBQyxnQkFBZ0IsaURBQWlELHdDQUF3QyxxQ0FBcUMsMENBQTBDLDREQUE0RCxpQ0FBaUMsbURBQW1ELDBEQUFDLHNFQUFzRSxhQUFhLHFDQUFxQyxzREFBQyw2Q0FBNkMsd0VBQXdFLCtCQUErQixVQUFVLHFGQUFxRixpQkFBaUIscUJBQXFCLHFCQUFxQixzQ0FBc0MsWUFBWSxHQUFHLGlDQUFpQywrREFBK0QsOEZBQThGLDBEQUFDLHVCQUF1QixNQUFNLHVJQUF1SSxpQkFBaUIsZ0NBQWdDLGVBQWUsMENBQTBDLDJFQUEyRSxXQUFXLGNBQWMsZUFBZSxnQ0FBZ0MsK0JBQStCLFdBQVcsSUFBSSxHQUFHLHlCQUF5QixxR0FBcUcsZ0JBQWdCLDJCQUEyQixNQUFNLHNDQUFzQyxRQUFRLHdFQUFDLElBQUksU0FBUywyRUFBMkUsa0dBQWtHLE9BQU8sc0pBQXNKLHNFQUFzRSxvQkFBb0IsZ0VBQWdFLFlBQVksc0RBQUMsNENBQTRDLHNCQUFzQixxQkFBcUIsaUJBQWlCLGtLQUFrSyxvQ0FBb0Msb01BQW9NLDREQUE0RCxLQUFLLFFBQVEsNE5BQTROLDJDQUEyQyxrQkFBa0IsNEJBQTRCLDJFQUEyRSxJQUFJLE1BQU0sU0FBUyxrQkFBa0IsMkRBQTJELHFCQUFxQixTQUFTLG1FQUFtRSxlQUFlLHNCQUFzQix3RUFBQyx3SEFBd0gsd0VBQUMsb0NBQW9DLGNBQWMsWUFBWSxzREFBQyxJQUFJLDBEQUEwRCwwQkFBMEIsd0JBQXdCLCtCQUErQix3T0FBd08sNEJBQTRCLDZPQUE2TywyQkFBMkIscUxBQXFMLHVLQUF1SyxnQkFBZ0IsU0FBUyxrREFBQywyRUFBMkUsOENBQThDLG9FQUFDLElBQUksc0VBQUMsU0FBUyxrQkFBa0IsbUNBQW1DLG9CQUFvQix1REFBdUQsaUJBQWlCLHdEQUF3RCx5QkFBeUIsTUFBTSxtREFBbUQsNEVBQTRFLGVBQWUsbUVBQW1FLHlDQUF5Qyw0SUFBNEksU0FBUyxtQkFBbUIsWUFBWSxzREFBQyx1Q0FBdUMscURBQXFELGtHQUFrRyxrREFBQyxlQUFlLHdFQUFDLEdBQUcsa0RBQUMseUhBQXlILG1CQUFtQixjQUFjLGlDQUFpQyw4REFBOEQsR0FBRyxTQUFTLDJIQUEySCxzREFBc0Qsa0VBQWtFLFNBQVMseUJBQXlCLFNBQVMsWUFBWSxxQkFBcUIsS0FBSyx1QkFBdUIsa0NBQWtDLElBQUksT0FBTyxTQUFTLGNBQWMsNEVBQTRFLG1CQUFtQixVQUFVLHFEQUFxRCx1Q0FBdUMsb0NBQW9DLDJEQUFDLG1CQUFtQixPQUFPLFVBQVUscUJBQXFCLHNCQUFzQiw0QkFBNEIsU0FBUyw2U0FBNlMsWUFBWSxzREFBQyxTQUFTLGtHQUFrRyxTQUFTLG1IQUFtSCxzQkFBc0IsT0FBTywyREFBQyxJQUFJLEVBQUUscUNBQXFDLDBDQUEwQyw4QkFBOEIsMEJBQTBCLHNCQUFzQixPQUFPLDJEQUFDLElBQUksRUFBRSxvQ0FBb0MsOEJBQThCLDZGQUE2RixzQkFBc0IsU0FBUyxvQkFBb0Isb0JBQW9CLG9CQUFvQixNQUFNLG1HQUFtRyx5RkFBeUYsRUFBRSw4S0FBOEssT0FBTywyREFBQyxJQUFJLE9BQU8sU0FBUyx5Q0FBeUMsb0JBQW9CLG1CQUFtQiwyRUFBMkUsNFJBQTRSLHdFQUFDLFdBQVcsd0JBQXdCLFNBQVMsbURBQW1ELHVGQUF1Rix1RUFBQyxvREFBb0QsMkJBQTJCLE9BQU8sTUFBTSxzREFBQyxnSEFBZ0gsU0FBUyxzQkFBc0IsYUFBYSw2RUFBQyw2U0FBNlMsYUFBYSxnREFBZ0QsWUFBWSxpRUFBaUUsU0FBUywyVkFBMlYsMEJBQTBCLCtCQUErQiwyQ0FBMkMsbUNBQW1DLDZDQUE2QywrQkFBK0Isd0dBQXdHLG1GQUFtRixhQUFhLHFIQUFxSCxPQUFPLDZLQUE2SyxlQUFlLFFBQVEscUdBQXFHLFFBQVEsY0FBYyw4RUFBOEUsR0FBRyxxUUFBcVEsTUFBTSwyQkFBMkIscUNBQXFDLDhDQUE4QyxRQUFRLDBEQUFDLHVCQUF1QixvS0FBb0ssc0RBQUMsMkJBQTJCLEdBQUcsc0VBQUMsNENBQTRDLFdBQVcsR0FBRyxXQUFXLG1CQUFtQixPQUFPLFlBQVksNERBQUMsWUFBWSw0REFBQyxNQUFNLGtIQUFrSCx3QkFBd0IsdUZBQXVGLDJIQUEySCxrQ0FBa0MsZUFBZSxLQUFLLFFBQVEsbUdBQW1HLHdCQUF3QixTQUFTLHNKQUFzSixpSkFBaUosS0FBSyxhQUFhLDRFQUE0RSxzREFBQyx1RUFBdUUsOEZBQThGLCtCQUErQixJQUFJLElBQUksd0VBQUMsaUNBQWlDLGlDQUFpQyxZQUFZLGlCQUFpQixXQUFXLGdEQUFnRCxpQkFBaUIsa0JBQWtCLG1FQUFtRSxXQUFXLHNEQUFDLHFFQUFxRSxRQUFRLGtEQUFrRCxZQUFZLGlFQUFpRSwyQkFBMkIsd0VBQXdFLElBQUksTUFBTSxNQUFNLGdEQUFnRCxVQUFVLDhCQUE4QixtQkFBbUIsK0NBQStDLEtBQUssc0VBQXNFLHFFQUFxRSxhQUFhLFNBQVMsOElBQThJLEdBQUcsTUFBTSxLQUFLLDJDQUEyQyxnRUFBZ0UsaUdBQWlHLGNBQWMsd0RBQXdELE9BQU8sS0FBSyxLQUFLLG9CQUFvQix5RkFBeUYsc0JBQXNCLGlCQUFpQixtQkFBbUIscUZBQXFGLG9FQUFDLGlDQUFpQyxvRUFBQyxnQ0FBZ0Msb0VBQUMsZ0RBQWdELG9FQUFDLHVHQUF1Ryw0Q0FBNEMseUJBQXlCLDZCQUE2QixRQUFRLDJCQUEyQixZQUFZLHNEQUFDLDhHQUE4RyxLQUFLLGtFQUFrRSxXQUFXLFlBQVksb1BBQW9QLGFBQWEsK0tBQStLLHNGQUFzRixvQ0FBb0MsK0JBQStCLG9GQUFvRixPQUFPLHNCQUFzQixzQkFBc0IsaUlBQWlJLE1BQU0sdUJBQXVCLHFCQUFxQiw4RUFBOEUsaURBQWlELDJEQUFDLG9CQUFvQixPQUFPLFVBQVUsYUFBYSwwQkFBMEIsc0RBQUMsRUFBRSxvRUFBb0UsRUFBRSxxQ0FBcUMsZ0VBQWdFLDJEQUFDLCtDQUErQyxPQUFPLCtEQUErRCx1RUFBQyxtREFBbUQsWUFBWSxpQkFBaUIsc0NBQXNDLHVIQUF1SCx3RUFBQyx5SEFBeUgsR0FBRyxHQUFHLHNCQUFzQixTQUFTLHVCQUF1QixpRkFBaUYsU0FBUyw2SEFBNkgsdUVBQUMsOERBQThELDJKQUEySixvRkFBb0Ysd0VBQUMsSUFBSSxZQUFZLDhEQUE4RCxrRkFBa0YsYUFBYSxzRUFBc0UsdUJBQXVCLE1BQU0sWUFBWSxzREFBQyw0Q0FBNEMsY0FBYywrQkFBK0IsMERBQUMsQ0FBQyx1REFBQyx5QkFBeUIsb0NBQW9DLEdBQUcsS0FBSyxZQUFZLHNEQUFDLDZDQUE2QywwQkFBMEIseUZBQXlGLHdFQUF3RSwwQkFBMEIsOERBQThELG9CQUFvQix3REFBQyxpQkFBaUIsZUFBZSx3R0FBd0csYUFBYSwwRkFBMEYsZUFBZSxRQUFRLDZDQUFDLDBGQUEwRiw2Q0FBQyxrQ0FBa0MsNkNBQUMsMkRBQTJELCtDQUErQyw2Q0FBQyxzQkFBc0IsaUNBQWlDLGdCQUFnQixPQUFPLDZDQUFDLHVCQUF1Qiw2Q0FBQyx5Q0FBeUMsV0FBVyw2Q0FBQyxzQ0FBc0MsVUFBVSxPQUFPLFFBQVEsMkNBQTJDLG9CQUFvQixjQUFjLEtBQUssT0FBTyxNQUFNLGFBQWEsNkNBQUMsb0NBQW9DLDZDQUFDLHdEQUF3RCw0Q0FBNEMsZUFBZSxpQkFBaUIsTUFBTSxrQkFBa0IsV0FBVyxFQUFFLE9BQU8sNkNBQUMsMkNBQTJDLCtLQUErSyxnQkFBZ0IsR0FBRyxrQkFBa0Isc0JBQXNCLHVCQUF1Qiw2Q0FBQywwQkFBMEIsUUFBUSw2Q0FBQyxpREFBaUQsMERBQTBELDZDQUFDLHdDQUF3Qyw2Q0FBQyxxQ0FBcUMsNkNBQUMseUpBQXlKLEdBQUcsbUJBQW1CLGlDQUFpQyxxQkFBcUIsNkNBQUMseURBQXlELDZDQUFDLG1CQUFtQix1REFBdUQsNkNBQUMscUhBQXFILFVBQVUsc0tBQXNLLFFBQVEsNkNBQUMsMkJBQTJCLE1BQU0sNkNBQUMscUVBQXFFLFNBQVMsUUFBUSw2REFBQyxFQUFFLHFMQUFxTCxtQkFBbUIsZ0RBQWdELHFCQUFxQixpQ0FBaUMsOENBQThDLGtGQUFrRiwyRkFBMkYsOERBQUMsRUFBRSw4RkFBQyx1Q0FBdUMsOERBQUMsRUFBRSw4RkFBQyxrQ0FBa0MsOERBQUMsRUFBRSw4RkFBQyxrQ0FBa0MsOERBQUMsRUFBRSw4RkFBQyxxQ0FBcUMsOERBQUMsRUFBRSw4RkFBQyxvQ0FBb0MsOERBQUMsRUFBRSw4RkFBQyxnQ0FBZ0MsOERBQUMsRUFBRSw4RkFBQyxpQ0FBaUMsOERBQUMsRUFBRSw4RkFBQyw4QkFBOEIsOERBQUMsRUFBRSw4RkFBQyxnQ0FBZ0MsOERBQUMsRUFBRSw4RkFBQyw2Q0FBNkMsOERBQUMsRUFBRSw4RkFBQyxpQ0FBaUMsOERBQUMsRUFBRSw4RkFBQyxxQ0FBcUMsOERBQUMsRUFBRSw4RkFBQyxpQ0FBa0Y7Ozs7Ozs7Ozs7Ozs7QUNKdHlnQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ2ltQixTQUFTLDZSQUE2UixvQkFBb0IsMERBQUMsQ0FBQyxpQkFBaUIsd0dBQXdHLGFBQWEsc0dBQXNHLFVBQVUseUJBQXlCLFNBQVMsaUJBQWlCLG9DQUFvQyxrQkFBa0IseUJBQXlCLEdBQUcsMkVBQUMsV0FBVyxxRkFBcUYsQ0FBQywyRUFBQyxTQUFTLHVDQUF1QyxRQUFRLEVBQUUsYUFBYSxFQUFFLGNBQWMsMkVBQUMsT0FBTyxtQkFBbUIsYUFBYSwyRUFBQyxRQUFRLGtIQUFrSCxrQ0FBa0MsT0FBTywyRUFBQyxRQUFRLHlDQUF5QyxJQUFJLG9CQUFvQixNQUFNLHlDQUF5QyxrQkFBa0IsdUJBQXVCLG1CQUFtQixNQUFNLG9CQUFvQixNQUFNLG1DQUFtQyxvQkFBb0IseUJBQXlCLG9DQUFvQyxnQkFBZ0Isa0VBQUMsSUFBSSw4Q0FBOEMsMEJBQTBCLEdBQUcsU0FBUyx1RUFBQyxpQ0FBaUMsa0JBQWtCLHFCQUFxQix5QkFBeUIsMkVBQUMsUUFBUSxpQ0FBaUMsRUFBRSwyRUFBQyxJQUFJLDJFQUFDLFFBQVEscUJBQXFCLHNDQUFzQywyRUFBQyxRQUFRLDJEQUEyRCxPQUFPLGlCQUFpQixhQUFhLG1CQUFtQiw4REFBQyxFQUFFLDZGQUFDLEVBQUUsWUFBWSxtQ0FBbUMsOERBQUMsRUFBRSw2RkFBQyxrQ0FBa0MsOERBQUMsRUFBRSw2RkFBQywrQkFBK0IsOERBQUMsRUFBRSw2RkFBQyxHQUFHLG1HQUFDLG9EQUFvRCw4REFBQyxFQUFFLDZGQUFDLEVBQUUsK0JBQStCLGlDQUFpQyw4REFBQyxFQUFFLDZGQUFDLG9DQUFvQyxRQUF1QixnRUFBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDSnB1RjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFFBQVEsaUJBQWlCLG9LQUFvSyxVQUFVLFNBQVMsNENBQTRDLG1CQUFtQixtQkFBbUIsdUVBQXVFLFNBQVMsT0FBTyx3QkFBd0Isc0NBQXNDLG9DQUFvQyx5QkFBeUIsMkJBQTJCLGtCQUFrQixnR0FBZ0csSUFBSSwwQ0FBMEMsU0FBUyxpQkFBaUIsVUFBVSxzQ0FBc0MsaUVBQWlFLGtHQUFrRyxxTUFBcU0sS0FBSywyQkFBMkIsNEJBQTRCLGtEQUFrRCwyQkFBMkIsTUFBTSxzQkFBc0IsSUFBSSwwQ0FBMEMsU0FBUyxpQkFBaUIsMkNBQTJDLFFBQVEsc0NBQXNDLG9DQUFvQyx5QkFBeUIsNkhBQTZILFFBQVEsU0FBUyxpQkFBaUIsZ0NBQWdDLFNBQVMsZ0JBQWdCLFNBQVMsZ0JBQWdCLFVBQVUsMERBQXlFLGdFQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNKbjBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNtVixNQUFNLHNCQUFzQixnRUFBQyxDQUFDLGVBQWUseVlBQXlZLFFBQVEsbUNBQW1DLDhEQUFDLEVBQUUsNkZBQUMsRUFBRSxNQUFNLFVBQVUsK0JBQStCLDhEQUFDLEVBQUUsNkZBQUMsRUFBRSxNQUFNLFVBQVUsdUNBQXVDLDhEQUFDLEVBQUUsNkZBQUMsRUFBRSxNQUFNLFVBQVUsb0NBQW9DLDhEQUFDLEVBQUUsNkZBQUMsRUFBRSxNQUFNLFVBQVUsb0NBQW9DLDhEQUFDLEVBQUUsNkZBQUMsRUFBRSxNQUFNLFVBQVUscUNBQXFDLDhEQUFDLEVBQUUsNkZBQUMsRUFBRSxNQUFNLFVBQVUsZ0NBQWdDLDhEQUFDLEVBQUUsNkZBQUMsRUFBRSxNQUFNLFVBQVUsZ0RBQWdELDhEQUFDLEVBQUUsNkZBQUMsRUFBRSxNQUFNLFVBQVUsK0JBQStCLDhEQUFDLEVBQUUsNkZBQUMsRUFBRSxNQUFNLFVBQVUsMENBQTBDLDhEQUFDLEVBQUUsNkZBQUMsRUFBRSxNQUFNLFVBQVUsNkNBQTZDLDhEQUFDLEVBQUUsNkZBQUMsRUFBRSxNQUFNLFVBQVUsbUNBQW1DLDhEQUFDLEVBQUUsNkZBQUMsRUFBRSxNQUFNLFVBQVUseUNBQXlDLDhEQUFDLEVBQUUsNkZBQUMsRUFBRSxNQUFNLFVBQVUsb0NBQW9DLDhEQUFDLEVBQUUsNkZBQUMsZ0NBQWdDLFFBQXVCLGdFQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNKeG5EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNtVixvQkFBb0IsZ0VBQUMsQ0FBQyxlQUFlLCtQQUErUCw4REFBQyxFQUFFLDZGQUFDLEVBQUUsTUFBTSxVQUFVLDhDQUE4Qyw4REFBQyxFQUFFLDZGQUFDLEVBQUUsTUFBTSxVQUFVLHdDQUF3Qyw4REFBQyxFQUFFLDZGQUFDLEVBQUUsTUFBTSxVQUFVLG1DQUFtQyw4REFBQyxFQUFFLDZGQUFDLEVBQUUsTUFBTSxVQUFVLG1DQUFtQyw4REFBQyxFQUFFLDZGQUFDLEVBQUUsTUFBTSxVQUFVLHlDQUF5Qyw4REFBQyxFQUFFLDZGQUFDLEVBQUUsTUFBTSxVQUFVLHNDQUFzQyw4REFBQyxFQUFFLDZGQUFDLEVBQUUsTUFBTSxVQUFVLGdDQUFnQyw4REFBQyxFQUFFLDZGQUFDLEVBQUUsTUFBTSxVQUFVLGlEQUFpRCw4REFBQyxFQUFFLDZGQUFDLEVBQUUsTUFBTSxVQUFVLHlDQUF5Qyw4REFBQyxFQUFFLDZGQUFDLEVBQUUsTUFBTSxVQUFVLHVDQUF1Qyw4REFBQyxFQUFFLDZGQUFDLGlDQUFpQyxRQUF1QixnRUFBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDSjd4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDbUksY0FBYyxxQkFBcUIsNERBQUMsK0JBQStCLHFFQUFDLENBQUMsdURBQUMsZ0ZBQWdGLDJCQUEyQixHQUEyQjs7Ozs7Ozs7Ozs7OztBQ0ovVTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNtZCxjQUFjLHNDQUFzQyxjQUFjLHVKQUE2TDs7Ozs7Ozs7Ozs7OztBQ0psdEI7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDaUQ7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsbURBQW1EO0FBQ3JEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COztBQUVBLGdCQUFnQjtBQUNoQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsS0FBSztBQUNoQixhQUFhLEVBQUU7QUFDZjs7O0FBR0E7QUFDQSwwRkFBMEYsYUFBYTtBQUN2RztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE9BQU8sa0dBQWtHO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQix5REFBUTs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLLEVBQUU7QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVEO0FBQ0E7QUFDQSx3REFBd0QsNERBQVc7QUFDbkUsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7O0FBR0wsd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7QUFFMkI7QUFDM0I7Ozs7Ozs7Ozs7Ozs7QUMxbUJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNkQ7O0FBRTdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsdURBQXVEO0FBQ3ZELHNCQUFzQjtBQUN0Qjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLEVBQUU7QUFDRjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBLHVCQUF1QixnQ0FBZ0M7QUFDdkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0EsU0FBUzs7O0FBR1Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRXdEO0FBQ3hEIiwiZmlsZSI6IjAuZWQ4Nzg2MmRmOGU4NWQxZDU1MjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yMC9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0e18gYXMgc31mcm9tXCIuLi9jaHVua3MvdHNsaWIuZXM2LmpzXCI7aW1wb3J0e3Byb3BlcnR5IGFzIGV9ZnJvbVwiLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qc1wiO2ltcG9ydFwiLi4vY29yZS9oYXMuanNcIjtpbXBvcnRcIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2Vuc3VyZVR5cGUuanNcIjtpbXBvcnRcIi4uL2NvcmUvTG9nZ2VyLmpzXCI7aW1wb3J0e3N1YmNsYXNzIGFzIHR9ZnJvbVwiLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9zdWJjbGFzcy5qc1wiO2ltcG9ydHtzdWJzdGl0dXRlIGFzIHJ9ZnJvbVwiLi4vaW50bC9zdWJzdGl0dXRlLmpzXCI7aW1wb3J0IG8gZnJvbVwiLi4vd2lkZ2V0cy9XaWRnZXQuanNcIjtpbXBvcnR7c3RvcmVOb2RlIGFzIGl9ZnJvbVwiLi4vd2lkZ2V0cy9zdXBwb3J0L3dpZGdldFV0aWxzLmpzXCI7aW1wb3J0e21lc3NhZ2VCdW5kbGUgYXMgbn1mcm9tXCIuLi93aWRnZXRzL3N1cHBvcnQvZGVjb3JhdG9ycy9tZXNzYWdlQnVuZGxlLmpzXCI7aW1wb3J0e3RzeCBhcyB1fWZyb21cIi4uL3dpZGdldHMvc3VwcG9ydC9qc3hGYWN0b3J5LmpzXCI7Y29uc3QgbD17YmFzZTpcImVzcmktaWRlbnRpdHktZm9ybVwiLGdyb3VwOlwiZXNyaS1pZGVudGl0eS1mb3JtX19ncm91cFwiLGxhYmVsOlwiZXNyaS1pZGVudGl0eS1mb3JtX19sYWJlbFwiLGZvb3RlcjpcImVzcmktaWRlbnRpdHktZm9ybV9fZm9vdGVyXCIsZXNyaUlucHV0OlwiZXNyaS1pbnB1dFwiLGVzcmlCdXR0b246XCJlc3JpLWJ1dHRvblwiLGVzcmlCdXR0b25TZWNvbmRhcnk6XCJlc3JpLWJ1dHRvbi0tc2Vjb25kYXJ5XCJ9LHA9XCJBcmNHSVMgT25saW5lXCI7bGV0IGE9Y2xhc3MgZXh0ZW5kcyBve2NvbnN0cnVjdG9yKHMsZSl7c3VwZXIocyxlKSx0aGlzLl91c2VybmFtZUlucHV0Tm9kZT1udWxsLHRoaXMuX3Bhc3N3b3JkSW5wdXROb2RlPW51bGwsdGhpcy5tZXNzYWdlcz1udWxsLHRoaXMuc2lnbmluZ0luPSExLHRoaXMuc2VydmVyPW51bGwsdGhpcy5yZXNvdXJjZT1udWxsLHRoaXMuZXJyb3I9bnVsbCx0aGlzLm9BdXRoUHJvbXB0PSExfXJlbmRlcigpe2NvbnN0e2Vycm9yOnMsc2VydmVyOmUscmVzb3VyY2U6dCxzaWduaW5nSW46byxvQXV0aFByb21wdDpuLG1lc3NhZ2VzOmF9PXRoaXMsZD11KFwiZGl2XCIse2NsYXNzOmwuZ3JvdXB9LHIobj9hLm9BdXRoSW5mbzphLmluZm8se3NlcnZlcjovXFwuYXJjZ2lzXFwuY29tL2kudGVzdChlKT9wOmUscmVzb3VyY2U6YCgke3R8fGEubGJsSXRlbX0pYH0pKSxjPW4/bnVsbDp1KFwiZGl2XCIse2NsYXNzOmwuZ3JvdXAsa2V5OlwidXNlcm5hbWVcIn0sdShcImxhYmVsXCIse2NsYXNzOmwubGFiZWx9LGEubGJsVXNlcix1KFwiaW5wdXRcIix7dmFsdWU6XCJcIixyZXF1aXJlZDohMCxhdXRvY29tcGxldGU6XCJvZmZcIixzcGVsbGNoZWNrOiExLHR5cGU6XCJ0ZXh0XCIsYmluZDp0aGlzLGFmdGVyQ3JlYXRlOmksXCJkYXRhLW5vZGUtcmVmXCI6XCJfdXNlcm5hbWVJbnB1dE5vZGVcIixjbGFzczpsLmVzcmlJbnB1dH0pKSksbT1uP251bGw6dShcImRpdlwiLHtjbGFzczpsLmdyb3VwLGtleTpcInBhc3N3b3JkXCJ9LHUoXCJsYWJlbFwiLHtjbGFzczpsLmxhYmVsfSxhLmxibFB3ZCx1KFwiaW5wdXRcIix7dmFsdWU6XCJcIixyZXF1aXJlZDohMCx0eXBlOlwicGFzc3dvcmRcIixiaW5kOnRoaXMsYWZ0ZXJDcmVhdGU6aSxcImRhdGEtbm9kZS1yZWZcIjpcIl9wYXNzd29yZElucHV0Tm9kZVwiLGNsYXNzOmwuZXNyaUlucHV0fSkpKSxoPXUoXCJkaXZcIix7Y2xhc3M6dGhpcy5jbGFzc2VzKGwuZ3JvdXAsbC5mb290ZXIpfSx1KFwiaW5wdXRcIix7dHlwZTpcInN1Ym1pdFwiLGRpc2FibGVkOiEhbyx2YWx1ZTpvP2EubGJsU2lnbmluZzphLmxibE9rLGNsYXNzOmwuZXNyaUJ1dHRvbn0pLHUoXCJpbnB1dFwiLHt0eXBlOlwiYnV0dG9uXCIsdmFsdWU6YS5sYmxDYW5jZWwsYmluZDp0aGlzLG9uY2xpY2s6dGhpcy5fY2FuY2VsLGNsYXNzOnRoaXMuY2xhc3NlcyhsLmVzcmlCdXR0b24sbC5lc3JpQnV0dG9uU2Vjb25kYXJ5KX0pKSxnPXM/dShcImRpdlwiLG51bGwscy5kZXRhaWxzJiZzLmRldGFpbHMuaHR0cFN0YXR1cz9hLmludmFsaWRVc2VyOmEubm9BdXRoU2VydmljZSk6bnVsbDtyZXR1cm4gdShcImZvcm1cIix7Y2xhc3M6bC5iYXNlLGJpbmQ6dGhpcyxvbnN1Ym1pdDp0aGlzLl9zdWJtaXR9LGQsZyxjLG0saCl9X2NhbmNlbCgpe3RoaXMuX3NldChcInNpZ25pbmdJblwiLCExKSx0aGlzLl91c2VybmFtZUlucHV0Tm9kZSYmKHRoaXMuX3VzZXJuYW1lSW5wdXROb2RlLnZhbHVlPVwiXCIpLHRoaXMuX3Bhc3N3b3JkSW5wdXROb2RlJiYodGhpcy5fcGFzc3dvcmRJbnB1dE5vZGUudmFsdWU9XCJcIiksdGhpcy5lbWl0KFwiY2FuY2VsXCIpfV9zdWJtaXQocyl7cy5wcmV2ZW50RGVmYXVsdCgpLHRoaXMuX3NldChcInNpZ25pbmdJblwiLCEwKTtjb25zdCBlPXRoaXMub0F1dGhQcm9tcHQ/e306e3VzZXJuYW1lOnRoaXMuX3VzZXJuYW1lSW5wdXROb2RlJiZ0aGlzLl91c2VybmFtZUlucHV0Tm9kZS52YWx1ZSxwYXNzd29yZDp0aGlzLl9wYXNzd29yZElucHV0Tm9kZSYmdGhpcy5fcGFzc3dvcmRJbnB1dE5vZGUudmFsdWV9O3RoaXMuZW1pdChcInN1Ym1pdFwiLGUpfX07cyhbZSgpLG4oXCJlc3JpL2lkZW50aXR5L3Q5bi9pZGVudGl0eVwiKV0sYS5wcm90b3R5cGUsXCJtZXNzYWdlc1wiLHZvaWQgMCkscyhbZSgpXSxhLnByb3RvdHlwZSxcInNpZ25pbmdJblwiLHZvaWQgMCkscyhbZSgpXSxhLnByb3RvdHlwZSxcInNlcnZlclwiLHZvaWQgMCkscyhbZSgpXSxhLnByb3RvdHlwZSxcInJlc291cmNlXCIsdm9pZCAwKSxzKFtlKCldLGEucHJvdG90eXBlLFwiZXJyb3JcIix2b2lkIDApLHMoW2UoKV0sYS5wcm90b3R5cGUsXCJvQXV0aFByb21wdFwiLHZvaWQgMCksYT1zKFt0KFwiZXNyaS5pZGVudGl0eS5JZGVudGl0eUZvcm1cIildLGEpO3ZhciBkPWE7ZXhwb3J0IGRlZmF1bHQgZDtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjIwL2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7c2V0SWQgYXMgZX1mcm9tXCIuLi9rZXJuZWwuanNcIjtpbXBvcnR7SWRlbnRpdHlNYW5hZ2VyQmFzZSBhcyB0fWZyb21cIi4vSWRlbnRpdHlNYW5hZ2VyQmFzZS5qc1wiO2NsYXNzIHIgZXh0ZW5kcyB0e31yLnByb3RvdHlwZS5kZWNsYXJlZENsYXNzPVwiZXNyaS5pZGVudGl0eS5JZGVudGl0eU1hbmFnZXJcIjtjb25zdCBzPW5ldyByO2Uocyk7ZXhwb3J0IGRlZmF1bHQgcztcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjIwL2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7XyBhcyBlfWZyb21cIi4uL2NodW5rcy90c2xpYi5lczYuanNcIjtpbXBvcnQgdCBmcm9tXCIuLi9jb25maWcuanNcIjtpbXBvcnR7aWQgYXMgc31mcm9tXCIuLi9rZXJuZWwuanNcIjtpbXBvcnQgciBmcm9tXCIuLi9yZXF1ZXN0LmpzXCI7aW1wb3J0IGkgZnJvbVwiLi4vY29yZS9FcnJvci5qc1wiO2ltcG9ydCBuIGZyb21cIi4uL2NvcmUvRXZlbnRlZC5qc1wiO2ltcG9ydHtvbiBhcyBvfWZyb21cIi4uL2NvcmUvZXZlbnRzLmpzXCI7aW1wb3J0IGEgZnJvbVwiLi4vY29yZS9nbG9iYWwuanNcIjtpbXBvcnR7Zml4SnNvbiBhcyBofWZyb21cIi4uL2NvcmUvbGFuZy5qc1wiO2ltcG9ydHtnZXREZWVwVmFsdWUgYXMgbH1mcm9tXCIuLi9jb3JlL29iamVjdC5qc1wiO2ltcG9ydHtjcmVhdGVBYm9ydENvbnRyb2xsZXIgYXMgYyxjcmVhdGVSZXNvbHZlciBhcyBkLG9uQWJvcnQgYXMgdSxpc0Fib3J0ZWQgYXMgcH1mcm9tXCIuLi9jb3JlL3Byb21pc2VVdGlscy5qc1wiO2ltcG9ydHt1cmxUb09iamVjdCBhcyBfLGhhc1NhbWVPcmlnaW4gYXMgZyxVcmwgYXMgZixxdWVyeVRvT2JqZWN0IGFzIG0sbm9ybWFsaXplIGFzIHYsZ2V0UHJveHlSdWxlIGFzIFMsbWFrZUFic29sdXRlIGFzIHcsb2JqZWN0VG9RdWVyeSBhcyBJfWZyb21cIi4uL2NvcmUvdXJsVXRpbHMuanNcIjtpbXBvcnR7cHJvcGVydHkgYXMga31mcm9tXCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzL3Byb3BlcnR5LmpzXCI7aW1wb3J0XCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9lbnN1cmVUeXBlLmpzXCI7aW1wb3J0XCIuLi9jb3JlL2hhcy5qc1wiO2ltcG9ydFwiLi4vY29yZS9Mb2dnZXIuanNcIjtpbXBvcnR7c3ViY2xhc3MgYXMgQX1mcm9tXCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9kZWNvcmF0b3JzL3N1YmNsYXNzLmpzXCI7aW1wb3J0IHkgZnJvbVwiLi9JZGVudGl0eUZvcm0uanNcIjtpbXBvcnQgVSBmcm9tXCIuL0lkZW50aXR5TW9kYWwuanNcIjtpbXBvcnQgVCBmcm9tXCIuL09BdXRoQ3JlZGVudGlhbC5qc1wiO2ltcG9ydCB4IGZyb21cIi4vT0F1dGhJbmZvLmpzXCI7aW1wb3J0IE8gZnJvbVwiLi9TZXJ2ZXJJbmZvLmpzXCI7Y29uc3QgUj17fSxiPWU9Pntjb25zdCB0PW5ldyBmKGUub3duaW5nU3lzdGVtVXJsKS5ob3N0LHM9bmV3IGYoZS5zZXJ2ZXIpLmhvc3Qscj0vLitcXC5hcmNnaXNcXC5jb20kL2k7cmV0dXJuIHIudGVzdCh0KSYmci50ZXN0KHMpfSxQPShlLHQpPT4hIShiKGUpJiZ0JiZ0LnNvbWUoKHQ9PnQudGVzdChlLnNlcnZlcikpKSk7bGV0IEM9bnVsbCxEPW51bGw7dHJ5e0M9d2luZG93LmxvY2FsU3RvcmFnZSxEPXdpbmRvdy5zZXNzaW9uU3RvcmFnZX1jYXRjaHt9Y2xhc3MgcSBleHRlbmRzIG57Y29uc3RydWN0b3IoKXtzdXBlcigpLHRoaXMuX3BvcnRhbENvbmZpZz1hLmVzcmlHZW93Q29uZmlnLHRoaXMuc2VydmVySW5mb3M9W10sdGhpcy5vQXV0aEluZm9zPVtdLHRoaXMuY3JlZGVudGlhbHM9W10sdGhpcy5fc29SZXFzPVtdLHRoaXMuX3hvUmVxcz1bXSx0aGlzLl9wb3J0YWxzPVtdLHRoaXMuZGVmYXVsdE9BdXRoSW5mbz1udWxsLHRoaXMuZGVmYXVsdFRva2VuVmFsaWRpdHk9NjAsdGhpcy5kaWFsb2c9bnVsbCx0aGlzLmZvcm1Db25zdHJ1Y3Rvcj15LHRoaXMudG9rZW5WYWxpZGl0eT1udWxsLHRoaXMubm9ybWFsaXplV2ViVGllckF1dGg9ITEsdGhpcy5fYXBwT3JpZ2luPVwibnVsbFwiIT09d2luZG93Lm9yaWdpbj93aW5kb3cub3JpZ2luOndpbmRvdy5sb2NhdGlvbi5vcmlnaW4sdGhpcy5fYXBwVXJsT2JqPV8od2luZG93LmxvY2F0aW9uLmhyZWYpLHRoaXMuX2J1c3k9bnVsbCx0aGlzLl9yZWplY3RPblBlcnNpc3RlZFBhZ2VTaG93PSExLHRoaXMuX29BdXRoSGFzaD1udWxsLHRoaXMuX2d3VG9rZW5Vcmw9XCIvc2hhcmluZy9yZXN0L2dlbmVyYXRlVG9rZW5cIix0aGlzLl9hZ3NSZXN0PVwiL3Jlc3Qvc2VydmljZXNcIix0aGlzLl9hZ3NQb3J0YWw9L1xcL3NoYXJpbmcoXFwvfCQpL2ksdGhpcy5fYWdzQWRtaW49LyhodHRwcz86XFwvXFwvW15cXC9dK1xcL1teXFwvXSspXFwvYWRtaW5cXC8/KFxcLy4qKT8kL2ksdGhpcy5fYWRtaW5TdmNzPS9cXC9yZXN0XFwvYWRtaW5cXC9zZXJ2aWNlcyhcXC98JCkvaSx0aGlzLl9nd0RvbWFpbnM9W3tyZWdleDovXmh0dHBzPzpcXC9cXC93d3dcXC5hcmNnaXNcXC5jb20vaSxjdXN0b21CYXNlVXJsOlwibWFwcy5hcmNnaXMuY29tXCIsdG9rZW5TZXJ2aWNlVXJsOlwiaHR0cHM6Ly93d3cuYXJjZ2lzLmNvbS9zaGFyaW5nL3Jlc3QvZ2VuZXJhdGVUb2tlblwifSx7cmVnZXg6L15odHRwcz86XFwvXFwvKD86ZGV2fFthLXpcXGQtXStcXC5tYXBzZGV2KVxcLmFyY2dpc1xcLmNvbS9pLGN1c3RvbUJhc2VVcmw6XCJtYXBzZGV2LmFyY2dpcy5jb21cIix0b2tlblNlcnZpY2VVcmw6XCJodHRwczovL2Rldi5hcmNnaXMuY29tL3NoYXJpbmcvcmVzdC9nZW5lcmF0ZVRva2VuXCJ9LHtyZWdleDovXmh0dHBzPzpcXC9cXC8oPzpkZXZleHR8W2EtelxcZC1dK1xcLm1hcHNkZXZleHQpXFwuYXJjZ2lzXFwuY29tL2ksY3VzdG9tQmFzZVVybDpcIm1hcHNkZXZleHQuYXJjZ2lzLmNvbVwiLHRva2VuU2VydmljZVVybDpcImh0dHBzOi8vZGV2ZXh0LmFyY2dpcy5jb20vc2hhcmluZy9yZXN0L2dlbmVyYXRlVG9rZW5cIn0se3JlZ2V4Oi9eaHR0cHM/OlxcL1xcLyg/OnFhZXh0fFthLXpcXGQtXStcXC5tYXBzcWEpXFwuYXJjZ2lzXFwuY29tL2ksY3VzdG9tQmFzZVVybDpcIm1hcHNxYS5hcmNnaXMuY29tXCIsdG9rZW5TZXJ2aWNlVXJsOlwiaHR0cHM6Ly9xYWV4dC5hcmNnaXMuY29tL3NoYXJpbmcvcmVzdC9nZW5lcmF0ZVRva2VuXCJ9LHtyZWdleDovXmh0dHBzPzpcXC9cXC9bYS16XFxkLV0rXFwubWFwc1xcLmFyY2dpc1xcLmNvbS9pLGN1c3RvbUJhc2VVcmw6XCJtYXBzLmFyY2dpcy5jb21cIix0b2tlblNlcnZpY2VVcmw6XCJodHRwczovL3d3dy5hcmNnaXMuY29tL3NoYXJpbmcvcmVzdC9nZW5lcmF0ZVRva2VuXCJ9XSx0aGlzLl9sZWdhY3lGZWQ9W10sdGhpcy5fcmVnZXhTRGlyVXJsPS9odHRwLitcXC9yZXN0XFwvc2VydmljZXNcXC8/L2dpLHRoaXMuX3JlZ2V4U2VydmVyVHlwZT0vKFxcLyhGZWF0dXJlU2VydmVyfEdQU2VydmVyfEdlb0RhdGFTZXJ2ZXJ8R2VvY29kZVNlcnZlcnxHZW9lbnJpY2htZW50U2VydmVyfEdlb21ldHJ5U2VydmVyfEdsb2JlU2VydmVyfEltYWdlU2VydmVyfE1hcFNlcnZlcnxNb2JpbGVTZXJ2ZXJ8TkFTZXJ2ZXJ8TmV0d29ya0RpYWdyYW1TZXJ2ZXJ8T0dDRmVhdHVyZVNlcnZlcnxQYXJjZWxGYWJyaWNTZXJ2ZXJ8UmVsYXRpb25hbENhdGFsb2dTZXJ2ZXJ8U2NlbmVTZXJ2ZXJ8U3RyZWFtU2VydmVyfFV0aWxpdHlOZXR3b3JrU2VydmVyfFZhbGlkYXRpb25TZXJ2ZXJ8VmVjdG9yVGlsZVNlcnZlcnxWZXJzaW9uTWFuYWdlbWVudFNlcnZlcikpLiovZ2ksdGhpcy5fZ3dVc2VyPS9odHRwLitcXC91c2Vyc1xcLyhbXlxcL10rKVxcLz8uKi9pLHRoaXMuX2d3SXRlbT0vaHR0cC4rXFwvaXRlbXNcXC8oW15cXC9dKylcXC8/LiovaSx0aGlzLl9nd0dyb3VwPS9odHRwLitcXC9ncm91cHNcXC8oW15cXC9dKylcXC8/LiovaSx0aGlzLl9yZVBvcnRhbFRva2VuU3ZjPS9cXC9zaGFyaW5nKFxcL3Jlc3QpP1xcL2dlbmVyYXRldG9rZW4vaSx0aGlzLl9jcmVhdGVEZWZhdWx0T0F1dGhJbmZvPSEwLHRoaXMuX2hhc1Rlc3RlZElmQXBwSXNPblBvcnRhbD0hMSx0aGlzLl9nZXRPQXV0aEhhc2goKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBhZ2VzaG93XCIsKGU9Pnt0aGlzLl9wYWdlU2hvd0hhbmRsZXIoZSl9KSl9cmVnaXN0ZXJTZXJ2ZXJzKGUpe2NvbnN0IHQ9dGhpcy5zZXJ2ZXJJbmZvczt0PyhlPWUuZmlsdGVyKChlPT4hdGhpcy5maW5kU2VydmVySW5mbyhlLnNlcnZlcikpKSx0aGlzLnNlcnZlckluZm9zPXQuY29uY2F0KGUpKTp0aGlzLnNlcnZlckluZm9zPWUsZS5mb3JFYWNoKChlPT57ZS5vd25pbmdTeXN0ZW1VcmwmJnRoaXMuX3BvcnRhbHMucHVzaChlLm93bmluZ1N5c3RlbVVybCksZS5oYXNQb3J0YWwmJnRoaXMuX3BvcnRhbHMucHVzaChlLnNlcnZlcil9KSl9cmVnaXN0ZXJPQXV0aEluZm9zKGUpe2NvbnN0IHQ9dGhpcy5vQXV0aEluZm9zO2lmKHQpe2Zvcihjb25zdCBzIG9mIGUpe2NvbnN0IGU9dGhpcy5maW5kT0F1dGhJbmZvKHMucG9ydGFsVXJsKTtlJiZ0LnNwbGljZSh0LmluZGV4T2YoZSksMSl9dGhpcy5vQXV0aEluZm9zPXQuY29uY2F0KGUpfWVsc2UgdGhpcy5vQXV0aEluZm9zPWV9cmVnaXN0ZXJUb2tlbihlKXtlPXsuLi5lfTtjb25zdCB0PXRoaXMuX3Nhbml0aXplVXJsKGUuc2VydmVyKSxzPXRoaXMuX2lzU2VydmVyUnNyYyh0KTtsZXQgcixpPXRoaXMuZmluZFNlcnZlckluZm8odCksbj0hMDtpfHwoaT1uZXcgTyxpLnNlcnZlcj10aGlzLl9nZXRTZXJ2ZXJJbnN0YW5jZVJvb3QodCkscz9pLmhhc1NlcnZlcj0hMDooaS50b2tlblNlcnZpY2VVcmw9dGhpcy5fZ2V0VG9rZW5TdmNVcmwodCksaS5oYXNQb3J0YWw9ITApLHRoaXMucmVnaXN0ZXJTZXJ2ZXJzKFtpXSkpLHI9dGhpcy5fZmluZENyZWRlbnRpYWwodCkscj8oZGVsZXRlIGUuc2VydmVyLE9iamVjdC5hc3NpZ24ocixlKSxuPSExKToocj1uZXcgaih7dXNlcklkOmUudXNlcklkLHNlcnZlcjppLnNlcnZlcix0b2tlbjplLnRva2VuLGV4cGlyZXM6ZS5leHBpcmVzLHNzbDplLnNzbCxzY29wZTpzP1wic2VydmVyXCI6XCJwb3J0YWxcIn0pLHIucmVzb3VyY2VzPVt0XSx0aGlzLmNyZWRlbnRpYWxzLnB1c2gocikpLHIuZW1pdFRva2VuQ2hhbmdlKCExKSxufHxyLnJlZnJlc2hTZXJ2ZXJUb2tlbnMoKX10b0pTT04oKXtyZXR1cm4gaCh7c2VydmVySW5mb3M6dGhpcy5zZXJ2ZXJJbmZvcy5tYXAoKGU9PmUudG9KU09OKCkpKSxvQXV0aEluZm9zOnRoaXMub0F1dGhJbmZvcy5tYXAoKGU9PmUudG9KU09OKCkpKSxjcmVkZW50aWFsczp0aGlzLmNyZWRlbnRpYWxzLm1hcCgoZT0+ZS50b0pTT04oKSkpfSl9aW5pdGlhbGl6ZShlKXtpZighZSlyZXR1cm47XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPUpTT04ucGFyc2UoZSkpO2NvbnN0IHQ9ZS5zZXJ2ZXJJbmZvcyxzPWUub0F1dGhJbmZvcyxyPWUuY3JlZGVudGlhbHM7aWYodCl7Y29uc3QgZT1bXTt0LmZvckVhY2goKHQ9Pnt0LnNlcnZlciYmdC50b2tlblNlcnZpY2VVcmwmJmUucHVzaCh0LmRlY2xhcmVkQ2xhc3M/dDpuZXcgTyh0KSl9KSksZS5sZW5ndGgmJnRoaXMucmVnaXN0ZXJTZXJ2ZXJzKGUpfWlmKHMpe2NvbnN0IGU9W107cy5mb3JFYWNoKCh0PT57dC5hcHBJZCYmZS5wdXNoKHQuZGVjbGFyZWRDbGFzcz90Om5ldyB4KHQpKX0pKSxlLmxlbmd0aCYmdGhpcy5yZWdpc3Rlck9BdXRoSW5mb3MoZSl9ciYmci5mb3JFYWNoKChlPT57ZS5zZXJ2ZXImJmUudG9rZW4mJmUuZXhwaXJlcyYmZS5leHBpcmVzPkRhdGUubm93KCkmJigoZT1lLmRlY2xhcmVkQ2xhc3M/ZTpuZXcgaihlKSkuZW1pdFRva2VuQ2hhbmdlKCksdGhpcy5jcmVkZW50aWFscy5wdXNoKGUpKX0pKX1maW5kU2VydmVySW5mbyhlKXtsZXQgdDtlPXRoaXMuX3Nhbml0aXplVXJsKGUpO2Zvcihjb25zdCBzIG9mIHRoaXMuc2VydmVySW5mb3MpaWYodGhpcy5faGFzU2FtZVNlcnZlckluc3RhbmNlKHMuc2VydmVyLGUpKXt0PXM7YnJlYWt9cmV0dXJuIHR9ZmluZE9BdXRoSW5mbyhlKXtsZXQgdDtlPXRoaXMuX3Nhbml0aXplVXJsKGUpO2Zvcihjb25zdCBzIG9mIHRoaXMub0F1dGhJbmZvcylpZih0aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2Uocy5wb3J0YWxVcmwsZSkpe3Q9czticmVha31yZXR1cm4gdH1maW5kQ3JlZGVudGlhbChlLHQpe2xldCBzO2U9dGhpcy5fc2FuaXRpemVVcmwoZSk7Y29uc3Qgcj10aGlzLl9pc1NlcnZlclJzcmMoZSk/XCJzZXJ2ZXJcIjpcInBvcnRhbFwiO2lmKHQpe2Zvcihjb25zdCBpIG9mIHRoaXMuY3JlZGVudGlhbHMpaWYodGhpcy5faGFzU2FtZVNlcnZlckluc3RhbmNlKGkuc2VydmVyLGUpJiZ0PT09aS51c2VySWQmJmkuc2NvcGU9PT1yKXtzPWk7YnJlYWt9fWVsc2UgZm9yKGNvbnN0IGkgb2YgdGhpcy5jcmVkZW50aWFscylpZih0aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2UoaS5zZXJ2ZXIsZSkmJi0xIT09dGhpcy5fZ2V0SWRlbnRpY2FsU3ZjSWR4KGUsaSkmJmkuc2NvcGU9PT1yKXtzPWk7YnJlYWt9cmV0dXJuIHN9Z2V0Q3JlZGVudGlhbChlLHQpe2xldCBzLHIsbj0hMDt0JiYocz0hIXQudG9rZW4scj10LmVycm9yLG49ITEhPT10LnByb21wdCksdD17Li4udH0sZT10aGlzLl9zYW5pdGl6ZVVybChlKTtjb25zdCBvPWMoKSxhPWQoKTtpZih0LnNpZ25hbCYmdSh0LnNpZ25hbCwoKCk9PntvLmFib3J0KCl9KSksdShvLCgoKT0+e2EucmVqZWN0KG5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjp1c2VyLWFib3J0ZWRcIixcIkFCT1JURURcIikpfSkpLHAobykpcmV0dXJuIGEucHJvbWlzZTt0LnNpZ25hbD1vLnNpZ25hbDtjb25zdCBoPXRoaXMuX2lzQWRtaW5SZXNvdXJjZShlKSxsPXM/dGhpcy5maW5kQ3JlZGVudGlhbChlKTpudWxsO2xldCBfO2lmKGwmJnImJnIuZGV0YWlscyYmNDk4PT09ci5kZXRhaWxzLmh0dHBTdGF0dXMpbC5kZXN0cm95KCk7ZWxzZSBpZihsKXJldHVybiBfPW5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjpub3QtYXV0aG9yaXplZFwiLFwiWW91IGFyZSBjdXJyZW50bHkgc2lnbmVkIGluIGFzOiAnXCIrbC51c2VySWQrXCInLiBZb3UgZG8gbm90IGhhdmUgYWNjZXNzIHRvIHRoaXMgcmVzb3VyY2U6IFwiK2Use2Vycm9yOnJ9KSxhLnJlamVjdChfKSxhLnByb21pc2U7Y29uc3QgZj10aGlzLl9maW5kQ3JlZGVudGlhbChlLHQpO2lmKGYpcmV0dXJuIGEucmVzb2x2ZShmKSxhLnByb21pc2U7bGV0IG09dGhpcy5maW5kU2VydmVySW5mbyhlKTtpZihtKSFtLmhhc1NlcnZlciYmdGhpcy5faXNTZXJ2ZXJSc3JjKGUpJiYobS5fcmVzdEluZm9QbXM9dGhpcy5fZ2V0VG9rZW5TdmNVcmwoZSksbS5oYXNTZXJ2ZXI9ITApO2Vsc2V7Y29uc3QgdD10aGlzLl9nZXRUb2tlblN2Y1VybChlKTtpZighdClyZXR1cm4gXz1uZXcgaShcImlkZW50aXR5LW1hbmFnZXI6dW5rbm93bi1yZXNvdXJjZVwiLFwiVW5rbm93biByZXNvdXJjZSAtIGNvdWxkIG5vdCBmaW5kIHRva2VuIHNlcnZpY2UgZW5kcG9pbnQuXCIpLGEucmVqZWN0KF8pLGEucHJvbWlzZTttPW5ldyBPLG0uc2VydmVyPXRoaXMuX2dldFNlcnZlckluc3RhbmNlUm9vdChlKSxcInN0cmluZ1wiPT10eXBlb2YgdD8obS50b2tlblNlcnZpY2VVcmw9dCxtLmhhc1BvcnRhbD0hMCk6KG0uX3Jlc3RJbmZvUG1zPXQsbS5oYXNTZXJ2ZXI9ITApLHRoaXMucmVnaXN0ZXJTZXJ2ZXJzKFttXSl9cmV0dXJuIG0uaGFzUG9ydGFsJiZ2b2lkIDA9PT1tLl9zZWxmUmVxJiYobnx8ZyhtLnRva2VuU2VydmljZVVybCx0aGlzLl9hcHBPcmlnaW4pfHx0aGlzLl9nd0RvbWFpbnMuc29tZSgoZT0+ZS50b2tlblNlcnZpY2VVcmw9PT1tLnRva2VuU2VydmljZVVybCkpKSYmKG0uX3NlbGZSZXE9e293bmluZ1RlbmFudDp0JiZ0Lm93bmluZ1RlbmFudCxzZWxmRGZkOnRoaXMuX2dldFBvcnRhbFNlbGYobS50b2tlblNlcnZpY2VVcmwucmVwbGFjZSh0aGlzLl9yZVBvcnRhbFRva2VuU3ZjLFwiL3NoYXJpbmcvcmVzdC9wb3J0YWxzL3NlbGZcIiksZSl9KSx0aGlzLl9lbnF1ZXVlKGUsbSx0LGEsaCl9Z2V0UmVzb3VyY2VOYW1lKGUpe3JldHVybiB0aGlzLl9pc1JFU1RTZXJ2aWNlKGUpP2UucmVwbGFjZSh0aGlzLl9yZWdleFNEaXJVcmwsXCJcIikucmVwbGFjZSh0aGlzLl9yZWdleFNlcnZlclR5cGUsXCJcIil8fFwiXCI6dGhpcy5fZ3dVc2VyLnRlc3QoZSkmJmUucmVwbGFjZSh0aGlzLl9nd1VzZXIsXCIkMVwiKXx8dGhpcy5fZ3dJdGVtLnRlc3QoZSkmJmUucmVwbGFjZSh0aGlzLl9nd0l0ZW0sXCIkMVwiKXx8dGhpcy5fZ3dHcm91cC50ZXN0KGUpJiZlLnJlcGxhY2UodGhpcy5fZ3dHcm91cCxcIiQxXCIpfHxcIlwifWdlbmVyYXRlVG9rZW4oZSx0LHMpe2NvbnN0IG49dGhpcy5fcmVQb3J0YWxUb2tlblN2Yy50ZXN0KGUudG9rZW5TZXJ2aWNlVXJsKSxvPW5ldyBmKHRoaXMuX2FwcE9yaWdpbiksYT1lLnNob3J0TGl2ZWRUb2tlblZhbGlkaXR5O2xldCBoLGwsYyxkLHUscCxfLG07dCYmKG09dGhpcy50b2tlblZhbGlkaXR5fHxhfHx0aGlzLmRlZmF1bHRUb2tlblZhbGlkaXR5LG0+YSYmYT4wJiYobT1hKSkscyYmKGg9cy5pc0FkbWluLGw9cy5zZXJ2ZXJVcmwsYz1zLnRva2VuLHA9cy5zaWduYWwsXz1zLnNzbCxlLmN1c3RvbVBhcmFtZXRlcnM9cy5jdXN0b21QYXJhbWV0ZXJzKSxoP2Q9ZS5hZG1pblRva2VuU2VydmljZVVybDooZD1lLnRva2VuU2VydmljZVVybCx1PW5ldyBmKGQudG9Mb3dlckNhc2UoKSksZS53ZWJUaWVyQXV0aCYmbnVsbCE9cyYmcy5zZXJ2ZXJVcmwmJiFfJiZcImh0dHBcIj09PW8uc2NoZW1lJiYoZyhvLnVyaSxkLCEwKXx8XCJodHRwc1wiPT09dS5zY2hlbWUmJm8uaG9zdD09PXUuaG9zdCYmXCI3MDgwXCI9PT1vLnBvcnQmJlwiNzQ0M1wiPT09dS5wb3J0KSYmKGQ9ZC5yZXBsYWNlKC9eaHR0cHM6L2ksXCJodHRwOlwiKS5yZXBsYWNlKC86NzQ0My9pLFwiOjcwODBcIikpKTtjb25zdCB2PXtxdWVyeTp7cmVxdWVzdDpcImdldFRva2VuXCIsdXNlcm5hbWU6bnVsbD09dD92b2lkIDA6dC51c2VybmFtZSxwYXNzd29yZDpudWxsPT10P3ZvaWQgMDp0LnBhc3N3b3JkLHNlcnZlclVybDpsLHRva2VuOmMsZXhwaXJhdGlvbjptLHJlZmVyZXI6aHx8bj90aGlzLl9hcHBPcmlnaW46bnVsbCxjbGllbnQ6aD9cInJlZmVyZXJcIjpudWxsLGY6XCJqc29uXCIsLi4uZS5jdXN0b21QYXJhbWV0ZXJzfSxtZXRob2Q6XCJwb3N0XCIsYXV0aE1vZGU6XCJhbm9ueW1vdXNcIix1c2VQcm94eTp0aGlzLl91c2VQcm94eShlLHMpLHNpZ25hbDpwLC4uLm51bGw9PXM/dm9pZCAwOnMuaW9BcmdzfTtufHwodi53aXRoQ3JlZGVudGlhbHM9ITEpO3JldHVybiByKGQsdikudGhlbigocz0+e2NvbnN0IHI9cy5kYXRhO2lmKCFyfHwhci50b2tlbilyZXR1cm4gbmV3IGkoXCJpZGVudGl0eS1tYW5hZ2VyOmF1dGhlbnRpY2F0aW9uLWZhaWxlZFwiLFwiVW5hYmxlIHRvIGdlbmVyYXRlIHRva2VuXCIpO2NvbnN0IG49ZS5zZXJ2ZXI7cmV0dXJuIFJbbl18fChSW25dPXt9KSx0JiYoUltuXVt0LnVzZXJuYW1lXT10LnBhc3N3b3JkKSxyLnZhbGlkaXR5PW0scn0pKX1pc0J1c3koKXtyZXR1cm4hIXRoaXMuX2J1c3l9Y2hlY2tTaWduSW5TdGF0dXMoZSl7cmV0dXJuIHRoaXMuY2hlY2tBcHBBY2Nlc3MoZSxcIlwiKS50aGVuKChlPT5lLmNyZWRlbnRpYWwpKX1jaGVja0FwcEFjY2VzcyhlLHQscyl7bGV0IG49ITE7cmV0dXJuIHRoaXMuZ2V0Q3JlZGVudGlhbChlLHtwcm9tcHQ6ITF9KS50aGVuKChvPT57bGV0IGE7Y29uc3QgaD17ZjpcImpzb25cIn07aWYoXCJwb3J0YWxcIj09PW8uc2NvcGUpaWYodCYmKHRoaXMuX2RvUG9ydGFsU2lnbkluKGUpfHxzJiZzLmZvcmNlKSlhPW8uc2VydmVyK1wiL3NoYXJpbmcvcmVzdC9vYXV0aDIvdmFsaWRhdGVBcHBBY2Nlc3NcIixoLmNsaWVudF9pZD10O2Vsc2V7aWYoIW8udG9rZW4pcmV0dXJue2NyZWRlbnRpYWw6b307YT1vLnNlcnZlcitcIi9zaGFyaW5nL3Jlc3RcIn1lbHNle2lmKCFvLnRva2VuKXJldHVybntjcmVkZW50aWFsOm99O2E9by5zZXJ2ZXIrXCIvcmVzdC9zZXJ2aWNlc1wifXJldHVybiBvLnRva2VuJiYoaC50b2tlbj1vLnRva2VuKSxyKGEse3F1ZXJ5OmgsYXV0aE1vZGU6XCJhbm9ueW1vdXNcIn0pLnRoZW4oKGU9PntpZighMT09PWUuZGF0YS52YWxpZCl0aHJvdyBuZXcgaShcImlkZW50aXR5LW1hbmFnZXI6bm90LWF1dGhvcml6ZWRcIixgWW91IGFyZSBjdXJyZW50bHkgc2lnbmVkIGluIGFzOiAnJHtvLnVzZXJJZH0nLmAsZS5kYXRhKTtyZXR1cm4gbj0hIWUuZGF0YS52aWV3T25seVVzZXJUeXBlQXBwLHtjcmVkZW50aWFsOm99fSkpLmNhdGNoKChlPT57aWYoXCJpZGVudGl0eS1tYW5hZ2VyOm5vdC1hdXRob3JpemVkXCI9PT1lLm5hbWUpdGhyb3cgZTtjb25zdCB0PWUuZGV0YWlscyYmZS5kZXRhaWxzLmh0dHBTdGF0dXM7aWYoNDk4PT09dCl0aHJvdyBvLmRlc3Ryb3koKSxuZXcgaShcImlkZW50aXR5LW1hbmFnZXI6bm90LWF1dGhlbnRpY2F0ZWRcIixcIlVzZXIgaXMgbm90IHNpZ25lZCBpbi5cIik7aWYoNDAwPT09dCl0aHJvdyBuZXcgaShcImlkZW50aXR5LW1hbmFnZXI6aW52YWxpZC1yZXF1ZXN0XCIpO3JldHVybntjcmVkZW50aWFsOm99fSkpfSkpLnRoZW4oKGU9Pih7Y3JlZGVudGlhbDplLmNyZWRlbnRpYWwsdmlld09ubHk6bn0pKSl9c2V0T0F1dGhSZXNwb25zZUhhc2goZSl7dmFyIHQ7Y29uc3Qgcz10aGlzLl9vQXV0aERmZDtpZih0aGlzLl9vQXV0aERmZD1udWxsLCFzfHwhZSlyZXR1cm47Y2xlYXJJbnRlcnZhbCh0aGlzLl9vQXV0aEludGVydmFsSWQpLG51bGw9PSh0PXRoaXMuX29BdXRoT25IYXNoSGFuZGxlKXx8dC5yZW1vdmUoKSxcIiNcIj09PWUuY2hhckF0KDApJiYoZT1lLnN1YnN0cmluZygxKSk7Y29uc3Qgcj1tKGUpO2lmKHIuZXJyb3Ipe2NvbnN0IGU9XCJhY2Nlc3NfZGVuaWVkXCI9PT1yLmVycm9yLHQ9bmV3IGkoZT9cImlkZW50aXR5LW1hbmFnZXI6dXNlci1hYm9ydGVkXCI6XCJpZGVudGl0eS1tYW5hZ2VyOmF1dGhlbnRpY2F0aW9uLWZhaWxlZFwiLGU/XCJBQk9SVEVEXCI6XCJPQXV0aDogXCIrci5lcnJvcitcIiAtIFwiK3IuZXJyb3JfZGVzY3JpcHRpb24pO3MucmVqZWN0KHQpfWVsc2V7Y29uc3QgZT1zLnNpbmZvXyx0PXMub2luZm9fLGk9dC5fb0F1dGhDcmVkLG49bmV3IGooe3VzZXJJZDpyLnVzZXJuYW1lLHNlcnZlcjplLnNlcnZlcix0b2tlbjpyLmFjY2Vzc190b2tlbixleHBpcmVzOkRhdGUubm93KCkrMWUzKk51bWJlcihyLmV4cGlyZXNfaW4pLHNzbDpcInRydWVcIj09PXIuc3NsLF9vQXV0aENyZWQ6aX0pO3QudXNlcklkPW4udXNlcklkLGkuc3RvcmFnZT1yLnBlcnNpc3Q/QzpELGkudG9rZW49bi50b2tlbixpLmV4cGlyZXM9bi5leHBpcmVzLGkudXNlcklkPW4udXNlcklkLGkuc3NsPW4uc3NsLGkuc2F2ZSgpLHMucmVzb2x2ZShuKX19c2V0T0F1dGhSZWRpcmVjdGlvbkhhbmRsZXIoZSl7dGhpcy5fb0F1dGhSZWRpcmVjdEZ1bmM9ZX1zZXRQcm90b2NvbEVycm9ySGFuZGxlcihlKXt0aGlzLl9wcm90b2NvbEZ1bmM9ZX1zaWduSW4oZSx0LHM9e30pe2NvbnN0IHI9ZCgpLG49KCk9Pnt2YXIgZSx0LHMscixpO251bGw9PShlPWgpfHxlLnJlbW92ZSgpLG51bGw9PSh0PWwpfHx0LnJlbW92ZSgpLG51bGw9PShzPWMpfHxzLnJlbW92ZSgpLG51bGw9PShyPWEpfHxyLmRlc3Ryb3koKSxudWxsPT0oaT10aGlzLmRpYWxvZyl8fGkuZGVzdHJveSgpLHRoaXMuZGlhbG9nPWE9aD1sPWM9bnVsbH0sbz0oKT0+e24oKSx0aGlzLl9vQXV0aERmZD1udWxsLHIucmVqZWN0KG5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjp1c2VyLWFib3J0ZWRcIixcIkFCT1JURURcIikpfTtzLnNpZ25hbCYmdShzLnNpZ25hbCwoKCk9PntvKCl9KSk7bGV0IGE9bmV3IHRoaXMuZm9ybUNvbnN0cnVjdG9yO2EucmVzb3VyY2U9dGhpcy5nZXRSZXNvdXJjZU5hbWUoZSksYS5zZXJ2ZXI9dC5zZXJ2ZXIsdGhpcy5kaWFsb2c9bmV3IFUsdGhpcy5kaWFsb2cuY29udGVudD1hLHRoaXMuZGlhbG9nLm9wZW49ITAsdGhpcy5lbWl0KFwiZGlhbG9nLWNyZWF0ZVwiKTtsZXQgaD1hLm9uKFwiY2FuY2VsXCIsbyksbD10aGlzLmRpYWxvZy53YXRjaChcIm9wZW5cIixvKSxjPWEub24oXCJzdWJtaXRcIiwoZT0+e3RoaXMuZ2VuZXJhdGVUb2tlbih0LGUse2lzQWRtaW46cy5pc0FkbWluLHNpZ25hbDpzLnNpZ25hbH0pLnRoZW4oKGk9PntuKCk7Y29uc3Qgbz1uZXcgaih7dXNlcklkOmUudXNlcm5hbWUsc2VydmVyOnQuc2VydmVyLHRva2VuOmkudG9rZW4sZXhwaXJlczpudWxsIT1pLmV4cGlyZXM/TnVtYmVyKGkuZXhwaXJlcyk6bnVsbCxzc2w6ISFpLnNzbCxpc0FkbWluOnMuaXNBZG1pbix2YWxpZGl0eTppLnZhbGlkaXR5fSk7ci5yZXNvbHZlKG8pfSkpLmNhdGNoKChlPT57YS5lcnJvcj1lLGEuc2lnbmluZ0luPSExfSkpfSkpO3JldHVybiByLnByb21pc2V9b0F1dGhTaWduSW4oZSx0LHMscil7dGhpcy5fb0F1dGhEZmQ9ZCgpO2NvbnN0IG49dGhpcy5fb0F1dGhEZmQ7bnVsbCE9ciYmci5zaWduYWwmJnUoci5zaWduYWwsKCgpPT57Y29uc3QgZT10aGlzLl9vQXV0aERmZCYmdGhpcy5fb0F1dGhEZmQub0F1dGhXaW5fO2UmJiFlLmNsb3NlZD9lLmNsb3NlKCk6dGhpcy5kaWFsb2cmJmgoKX0pKSxuLnJlc1VybF89ZSxuLnNpbmZvXz10LG4ub2luZm9fPXM7Y29uc3Qgbz0hcnx8ITEhPT1yLm9BdXRoUG9wdXBDb25maXJtYXRpb247aWYoIXMucG9wdXB8fCFvKXJldHVybiB0aGlzLl9kb09BdXRoU2lnbkluKGUsdCxzKSxuLnByb21pc2U7Y29uc3QgYT1uZXcgdGhpcy5mb3JtQ29uc3RydWN0b3I7YS5vQXV0aFByb21wdD0hMCxhLnNlcnZlcj10LnNlcnZlcix0aGlzLmRpYWxvZz1uZXcgVSx0aGlzLmRpYWxvZy5jb250ZW50PWEsdGhpcy5kaWFsb2cub3Blbj0hMCx0aGlzLmVtaXQoXCJkaWFsb2ctY3JlYXRlXCIpO2NvbnN0IGg9KCk9PntfKCksdGhpcy5fb0F1dGhEZmQ9bnVsbCxuLnJlamVjdChuZXcgaShcImlkZW50aXR5LW1hbmFnZXI6dXNlci1hYm9ydGVkXCIsXCJBQk9SVEVEXCIpKX0sbD1hLm9uKFwiY2FuY2VsXCIsaCksYz10aGlzLmRpYWxvZy53YXRjaChcIm9wZW5cIixoKSxwPWEub24oXCJzdWJtaXRcIiwoKCk9PntfKCksdGhpcy5fZG9PQXV0aFNpZ25JbihlLHQscyl9KSksXz0oKT0+e2wucmVtb3ZlKCksYy5yZW1vdmUoKSxwLnJlbW92ZSgpLGEuZGVzdHJveSgpLHRoaXMuZGlhbG9nLmRlc3Ryb3koKSx0aGlzLmRpYWxvZz1udWxsfTtyZXR1cm4gbi5wcm9taXNlfWRlc3Ryb3lDcmVkZW50aWFscygpe2lmKHRoaXMuY3JlZGVudGlhbHMpe3RoaXMuY3JlZGVudGlhbHMuc2xpY2UoKS5mb3JFYWNoKChlPT57ZS5kZXN0cm95KCl9KSl9dGhpcy5lbWl0KFwiY3JlZGVudGlhbHMtZGVzdHJveVwiKX1lbmFibGVQb3N0TWVzc2FnZUF1dGgoZT1cImh0dHBzOi8vd3d3LmFyY2dpcy5jb20vc2hhcmluZy9yZXN0XCIpe3RoaXMuX3Bvc3RNZXNzYWdlQXV0aEhhbmRsZSYmdGhpcy5fcG9zdE1lc3NhZ2VBdXRoSGFuZGxlLnJlbW92ZSgpLHRoaXMuX3Bvc3RNZXNzYWdlQXV0aEhhbmRsZT1vKHdpbmRvdyxcIm1lc3NhZ2VcIiwodD0+e3ZhciBzO2lmKCh0Lm9yaWdpbj09PXRoaXMuX2FwcE9yaWdpbnx8dC5vcmlnaW4uZW5kc1dpdGgoXCIuYXJjZ2lzLmNvbVwiKSkmJlwiYXJjZ2lzOmF1dGg6cmVxdWVzdENyZWRlbnRpYWxcIj09PShudWxsPT0ocz10LmRhdGEpP3ZvaWQgMDpzLnR5cGUpKXtjb25zdCBzPXQuc291cmNlO3RoaXMuZ2V0Q3JlZGVudGlhbChlKS50aGVuKChlPT57cy5wb3N0TWVzc2FnZSh7dHlwZTpcImFyY2dpczphdXRoOmNyZWRlbnRpYWxcIixjcmVkZW50aWFsOntleHBpcmVzOmUuZXhwaXJlcyxzZXJ2ZXI6ZS5zZXJ2ZXIsc3NsOmUuc3NsLHRva2VuOmUudG9rZW4sdXNlcklkOmUudXNlcklkfX0sdC5vcmlnaW4pfSkpLmNhdGNoKChlPT57cy5wb3N0TWVzc2FnZSh7dHlwZTpcImFyY2dpczphdXRoOmVycm9yXCIsZXJyb3I6e25hbWU6ZS5uYW1lLG1lc3NhZ2U6ZS5tZXNzYWdlfX0sdC5vcmlnaW4pfSkpfX0pKX1kaXNhYmxlUG9zdE1lc3NhZ2VBdXRoKCl7dGhpcy5fcG9zdE1lc3NhZ2VBdXRoSGFuZGxlJiYodGhpcy5fcG9zdE1lc3NhZ2VBdXRoSGFuZGxlLnJlbW92ZSgpLHRoaXMuX3Bvc3RNZXNzYWdlQXV0aEhhbmRsZT1udWxsKX1fZ2V0T0F1dGhIYXNoKCl7bGV0IGU9d2luZG93LmxvY2F0aW9uLmhhc2g7aWYoZSl7XCIjXCI9PT1lLmNoYXJBdCgwKSYmKGU9ZS5zdWJzdHJpbmcoMSkpO2NvbnN0IHQ9bShlKTtsZXQgcz0hMTtpZih0LmFjY2Vzc190b2tlbiYmdC5leHBpcmVzX2luJiZ0LnN0YXRlJiZ0Lmhhc093blByb3BlcnR5KFwidXNlcm5hbWVcIikpdHJ5e3Quc3RhdGU9SlNPTi5wYXJzZSh0LnN0YXRlKSxcIm9iamVjdFwiPT10eXBlb2YgdC5zdGF0ZSYmdC5zdGF0ZS5wb3J0YWxVcmwmJih0aGlzLl9vQXV0aEhhc2g9dCxzPSEwKX1jYXRjaHt9ZWxzZSB0LmVycm9yJiZ0LmVycm9yX2Rlc2NyaXB0aW9uJiYoY29uc29sZS5sb2coXCJJZGVudGl0eU1hbmFnZXIgT0F1dGggRXJyb3I6IFwiLHQuZXJyb3IsXCIgLSBcIix0LmVycm9yX2Rlc2NyaXB0aW9uKSxcImFjY2Vzc19kZW5pZWRcIj09PXQuZXJyb3ImJihzPSEwKSk7cyYmKHdpbmRvdy5sb2NhdGlvbi5oYXNoPVwib2JqZWN0XCI9PXR5cGVvZiB0LnN0YXRlJiZ0LnN0YXRlLmhhc2h8fFwiXCIpfX1fcGFnZVNob3dIYW5kbGVyKGUpe2lmKGUucGVyc2lzdGVkJiZ0aGlzLmlzQnVzeSgpJiZ0aGlzLl9yZWplY3RPblBlcnNpc3RlZFBhZ2VTaG93KXtjb25zdCBlPW5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjp1c2VyLWFib3J0ZWRcIixcIkFCT1JURURcIik7dGhpcy5fZXJyYmFja0Z1bmMoZSl9fV9maW5kQ3JlZGVudGlhbChlLHQpe2xldCBzLHIsaSxuLG89LTE7Y29uc3QgYT10JiZ0LnRva2VuLGg9dCYmdC5yZXNvdXJjZSxsPXRoaXMuX2lzU2VydmVyUnNyYyhlKT9cInNlcnZlclwiOlwicG9ydGFsXCIsYz10aGlzLmNyZWRlbnRpYWxzLmZpbHRlcigodD0+dGhpcy5faGFzU2FtZVNlcnZlckluc3RhbmNlKHQuc2VydmVyLGUpJiZ0LnNjb3BlPT09bCkpO2lmKGU9aHx8ZSxjLmxlbmd0aClpZigxPT09Yy5sZW5ndGgpe2lmKHM9Y1swXSxuPXRoaXMuZmluZFNlcnZlckluZm8ocy5zZXJ2ZXIpLHI9biYmbi5vd25pbmdTeXN0ZW1VcmwsaT1yJiZ0aGlzLmZpbmRDcmVkZW50aWFsKHIscy51c2VySWQpLG89dGhpcy5fZ2V0SWRlbnRpY2FsU3ZjSWR4KGUscyksIWEpcmV0dXJuLTE9PT1vJiZzLnJlc291cmNlcy5wdXNoKGUpLHRoaXMuX2FkZFJlc291cmNlKGUsaSksczstMSE9PW8mJihzLnJlc291cmNlcy5zcGxpY2UobywxKSx0aGlzLl9yZW1vdmVSZXNvdXJjZShlLGkpKX1lbHNle2xldCB0LHM7aWYoYy5zb21lKChhPT4ocz10aGlzLl9nZXRJZGVudGljYWxTdmNJZHgoZSxhKSwtMSE9PXMmJih0PWEsbj10aGlzLmZpbmRTZXJ2ZXJJbmZvKHQuc2VydmVyKSxyPW4mJm4ub3duaW5nU3lzdGVtVXJsLGk9ciYmdGhpcy5maW5kQ3JlZGVudGlhbChyLHQudXNlcklkKSxvPXMsITApKSkpLGEpdCYmKHQucmVzb3VyY2VzLnNwbGljZShvLDEpLHRoaXMuX3JlbW92ZVJlc291cmNlKGUsaSkpO2Vsc2UgaWYodClyZXR1cm4gdGhpcy5fYWRkUmVzb3VyY2UoZSxpKSx0fX1fZmluZE9BdXRoSW5mbyhlKXtsZXQgdD10aGlzLmZpbmRPQXV0aEluZm8oZSk7aWYoIXQpZm9yKGNvbnN0IHMgb2YgdGhpcy5vQXV0aEluZm9zKWlmKHRoaXMuX2lzSWRQcm92aWRlcihzLnBvcnRhbFVybCxlKSl7dD1zO2JyZWFrfXJldHVybiB0fV9hZGRSZXNvdXJjZShlLHQpe3QmJi0xPT09dGhpcy5fZ2V0SWRlbnRpY2FsU3ZjSWR4KGUsdCkmJnQucmVzb3VyY2VzLnB1c2goZSl9X3JlbW92ZVJlc291cmNlKGUsdCl7bGV0IHM9LTE7dCYmKHM9dGhpcy5fZ2V0SWRlbnRpY2FsU3ZjSWR4KGUsdCkscz4tMSYmdC5yZXNvdXJjZXMuc3BsaWNlKHMsMSkpfV91c2VQcm94eShlLHQpe3JldHVybiB0JiZ0LmlzQWRtaW4mJiFnKGUuYWRtaW5Ub2tlblNlcnZpY2VVcmwsdGhpcy5fYXBwT3JpZ2luKXx8IXRoaXMuX2lzUG9ydGFsRG9tYWluKGUudG9rZW5TZXJ2aWNlVXJsKSYmXCIxMC4xXCI9PT1TdHJpbmcoZS5jdXJyZW50VmVyc2lvbikmJiFnKGUudG9rZW5TZXJ2aWNlVXJsLHRoaXMuX2FwcE9yaWdpbil9X2dldE9yaWdpbihlKXtjb25zdCB0PW5ldyBmKGUpO3JldHVybiB0LnNjaGVtZStcIjovL1wiK3QuaG9zdCsobnVsbCE9dC5wb3J0P1wiOlwiK3QucG9ydDpcIlwiKX1fZ2V0U2VydmVySW5zdGFuY2VSb290KGUpe2NvbnN0IHQ9ZS50b0xvd2VyQ2FzZSgpO2xldCBzPXQuaW5kZXhPZih0aGlzLl9hZ3NSZXN0KTtyZXR1cm4tMT09PXMmJnRoaXMuX2lzQWRtaW5SZXNvdXJjZShlKSYmKHM9dGhpcy5fYWdzQWRtaW4udGVzdChlKT9lLnJlcGxhY2UodGhpcy5fYWdzQWRtaW4sXCIkMVwiKS5sZW5ndGg6ZS5zZWFyY2godGhpcy5fYWRtaW5TdmNzKSksLTE9PT1zJiYocz10LmluZGV4T2YoXCIvc2hhcmluZ1wiKSksLTE9PT1zJiZcIi9cIj09PXQuc3Vic3RyKC0xKSYmKHM9dC5sZW5ndGgtMSkscz4tMT9lLnN1YnN0cmluZygwLHMpOmV9X2hhc1NhbWVTZXJ2ZXJJbnN0YW5jZShlLHQpe3JldHVyblwiL1wiPT09ZS5zdWJzdHIoLTEpJiYoZT1lLnNsaWNlKDAsLTEpKSxlPWUudG9Mb3dlckNhc2UoKSx0PXRoaXMuX2dldFNlcnZlckluc3RhbmNlUm9vdCh0KS50b0xvd2VyQ2FzZSgpLGU9dGhpcy5fbm9ybWFsaXplQUdPTG9yZ0RvbWFpbihlKSx0PXRoaXMuX25vcm1hbGl6ZUFHT0xvcmdEb21haW4odCksKGU9ZS5zdWJzdHIoZS5pbmRleE9mKFwiOlwiKSkpPT09KHQ9dC5zdWJzdHIodC5pbmRleE9mKFwiOlwiKSkpfV9ub3JtYWxpemVBR09Mb3JnRG9tYWluKGUpe2NvbnN0IHQ9L15odHRwcz86XFwvXFwvKD86Y2RufFthLXpcXGQtXStcXC5tYXBzKVxcLmFyY2dpc1xcLmNvbS9pLHM9L15odHRwcz86XFwvXFwvKD86Y2RuZGV2fFthLXpcXGQtXStcXC5tYXBzZGV2ZXh0KVxcLmFyY2dpc1xcLmNvbS9pLHI9L15odHRwcz86XFwvXFwvKD86Y2RucWF8W2EtelxcZC1dK1xcLm1hcHNxYSlcXC5hcmNnaXNcXC5jb20vaTtyZXR1cm4gdC50ZXN0KGUpP2U9ZS5yZXBsYWNlKHQsXCJodHRwczovL3d3dy5hcmNnaXMuY29tXCIpOnMudGVzdChlKT9lPWUucmVwbGFjZShzLFwiaHR0cHM6Ly9kZXZleHQuYXJjZ2lzLmNvbVwiKTpyLnRlc3QoZSkmJihlPWUucmVwbGFjZShyLFwiaHR0cHM6Ly9xYWV4dC5hcmNnaXMuY29tXCIpKSxlfV9zYW5pdGl6ZVVybChlKXtjb25zdCBzPSh0LnJlcXVlc3QucHJveHlVcmx8fFwiXCIpLnRvTG93ZXJDYXNlKCkscj1zP2UudG9Mb3dlckNhc2UoKS5pbmRleE9mKHMrXCI/XCIpOi0xO3JldHVybi0xIT09ciYmKGU9ZS5zdWJzdHJpbmcocitzLmxlbmd0aCsxKSksZT12KGUpLF8oZSkucGF0aH1faXNSRVNUU2VydmljZShlKXtyZXR1cm4gZS5pbmRleE9mKHRoaXMuX2Fnc1Jlc3QpPi0xfV9pc0FkbWluUmVzb3VyY2UoZSl7cmV0dXJuIHRoaXMuX2Fnc0FkbWluLnRlc3QoZSl8fHRoaXMuX2FkbWluU3Zjcy50ZXN0KGUpfV9pc1NlcnZlclJzcmMoZSl7cmV0dXJuIHRoaXMuX2lzUkVTVFNlcnZpY2UoZSl8fHRoaXMuX2lzQWRtaW5SZXNvdXJjZShlKX1faXNJZGVudGljYWxTZXJ2aWNlKGUsdCl7bGV0IHM7aWYodGhpcy5faXNSRVNUU2VydmljZShlKSYmdGhpcy5faXNSRVNUU2VydmljZSh0KSl7Y29uc3Qgcj10aGlzLl9nZXRTdWZmaXgoZSkudG9Mb3dlckNhc2UoKSxpPXRoaXMuX2dldFN1ZmZpeCh0KS50b0xvd2VyQ2FzZSgpO2lmKHM9cj09PWksIXMpe2NvbnN0IGU9LyguKilcXC8oTWFwU2VydmVyfEZlYXR1cmVTZXJ2ZXJ8VXRpbGl0eU5ldHdvcmtTZXJ2ZXIpLiovZ2k7cz1yLnJlcGxhY2UoZSxcIiQxXCIpPT09aS5yZXBsYWNlKGUsXCIkMVwiKX19ZWxzZSB0aGlzLl9pc0FkbWluUmVzb3VyY2UoZSkmJnRoaXMuX2lzQWRtaW5SZXNvdXJjZSh0KT9zPSEwOnRoaXMuX2lzU2VydmVyUnNyYyhlKXx8dGhpcy5faXNTZXJ2ZXJSc3JjKHQpfHwhdGhpcy5faXNQb3J0YWxEb21haW4oZSl8fChzPSEwKTtyZXR1cm4gc31faXNQb3J0YWxEb21haW4oZSl7Y29uc3Qgcz1uZXcgZihlLnRvTG93ZXJDYXNlKCkpLHI9dGhpcy5fcG9ydGFsQ29uZmlnO2xldCBpPXRoaXMuX2d3RG9tYWlucy5zb21lKChlPT5lLnJlZ2V4LnRlc3Qocy51cmkpKSk7cmV0dXJuIWkmJnImJihpPXRoaXMuX2hhc1NhbWVTZXJ2ZXJJbnN0YW5jZSh0aGlzLl9nZXRTZXJ2ZXJJbnN0YW5jZVJvb3Qoci5yZXN0QmFzZVVybCkscy51cmkpKSxpfHx0LnBvcnRhbFVybCYmKGk9ZyhzLHQucG9ydGFsVXJsLCEwKSksaXx8KGk9dGhpcy5fcG9ydGFscy5zb21lKChlPT50aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2UoZSxzLnVyaSkpKSksaT1pfHx0aGlzLl9hZ3NQb3J0YWwudGVzdChzLnBhdGgpLGl9X2lzSWRQcm92aWRlcihlLHQpe2xldCBzPS0xLHI9LTE7dGhpcy5fZ3dEb21haW5zLmZvckVhY2goKChpLG4pPT57LTE9PT1zJiZpLnJlZ2V4LnRlc3QoZSkmJihzPW4pLC0xPT09ciYmaS5yZWdleC50ZXN0KHQpJiYocj1uKX0pKTtsZXQgaT0hMTtpZihzPi0xJiZyPi0xJiYoMD09PXN8fDQ9PT1zPzAhPT1yJiY0IT09cnx8KGk9ITApOjE9PT1zPzEhPT1yJiYyIT09cnx8KGk9ITApOjI9PT1zPzI9PT1yJiYoaT0hMCk6Mz09PXMmJjM9PT1yJiYoaT0hMCkpLCFpKXtjb25zdCBzPXRoaXMuZmluZFNlcnZlckluZm8odCkscj1zJiZzLm93bmluZ1N5c3RlbVVybDtyJiZiKHMpJiZ0aGlzLl9pc1BvcnRhbERvbWFpbihyKSYmdGhpcy5faXNJZFByb3ZpZGVyKGUscikmJihpPSEwKX1yZXR1cm4gaX1fZ2V0SWRlbnRpY2FsU3ZjSWR4KGUsdCl7bGV0IHM9LTE7Zm9yKGxldCByPTA7cjx0LnJlc291cmNlcy5sZW5ndGg7cisrKXtjb25zdCBpPXQucmVzb3VyY2VzW3JdO2lmKHRoaXMuX2lzSWRlbnRpY2FsU2VydmljZShlLGkpKXtzPXI7YnJlYWt9fXJldHVybiBzfV9nZXRTdWZmaXgoZSl7cmV0dXJuIGUucmVwbGFjZSh0aGlzLl9yZWdleFNEaXJVcmwsXCJcIikucmVwbGFjZSh0aGlzLl9yZWdleFNlcnZlclR5cGUsXCIkMVwiKX1fZ2V0VG9rZW5TdmNVcmwoZSl7bGV0IHQscyxpO2lmKHRoaXMuX2lzUkVTVFNlcnZpY2UoZSl8fHRoaXMuX2lzQWRtaW5SZXNvdXJjZShlKSl7Y29uc3QgaT10aGlzLl9nZXRTZXJ2ZXJJbnN0YW5jZVJvb3QoZSk7cmV0dXJuIHQ9aStcIi9hZG1pbi9nZW5lcmF0ZVRva2VuXCIscz1yKGU9aStcIi9yZXN0L2luZm9cIix7cXVlcnk6e2Y6XCJqc29uXCJ9fSkudGhlbigoZT0+ZS5kYXRhKSkse2FkbWluVXJsOnQscHJvbWlzZTpzfX1pZih0aGlzLl9pc1BvcnRhbERvbWFpbihlKSl7bGV0IHQ9XCJcIjtpZih0aGlzLl9nd0RvbWFpbnMuc29tZSgocz0+KHMucmVnZXgudGVzdChlKSYmKHQ9cy50b2tlblNlcnZpY2VVcmwpLCEhdCkpKSx0fHx0aGlzLl9wb3J0YWxzLnNvbWUoKHM9Pih0aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2UocyxlKSYmKHQ9cyt0aGlzLl9nd1Rva2VuVXJsKSwhIXQpKSksdHx8KGk9ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCIvc2hhcmluZ1wiKSwtMSE9PWkmJih0PWUuc3Vic3RyaW5nKDAsaSkrdGhpcy5fZ3dUb2tlblVybCkpLHR8fCh0PXRoaXMuX2dldE9yaWdpbihlKSt0aGlzLl9nd1Rva2VuVXJsKSx0KXtjb25zdCBzPW5ldyBmKGUpLnBvcnQ7L15odHRwOlxcL1xcLy9pLnRlc3QoZSkmJlwiNzA4MFwiPT09cyYmKHQ9dC5yZXBsYWNlKC86NzA4MC9pLFwiOjc0NDNcIikpLHQ9dC5yZXBsYWNlKC9odHRwOi9pLFwiaHR0cHM6XCIpfXJldHVybiB0fWlmKC0xIT09ZS50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJwcmVtaXVtLmFyY2dpc29ubGluZS5jb21cIikpcmV0dXJuXCJodHRwczovL3ByZW1pdW0uYXJjZ2lzb25saW5lLmNvbS9zZXJ2ZXIvdG9rZW5zXCJ9X2V4Y2hhbmdlVG9rZW4oZSx0LHMpe3JldHVybiByKGAke2V9L3NoYXJpbmcvcmVzdC9vYXV0aDIvZXhjaGFuZ2VUb2tlbmAse2F1dGhNb2RlOlwiYW5vbnltb3VzXCIsbWV0aG9kOlwicG9zdFwiLHF1ZXJ5OntmOlwianNvblwiLGNsaWVudF9pZDp0LHRva2VuOnN9fSkudGhlbigoZT0+ZS5kYXRhLnRva2VuKSl9X2dldFBsYXRmb3JtU2VsZihlLHQpe3JldHVybiByKGAke2V9L3NoYXJpbmcvcmVzdC9vYXV0aDIvcGxhdGZvcm1TZWxmYCx7YXV0aE1vZGU6XCJhbm9ueW1vdXNcIixoZWFkZXJzOntcIlgtRXNyaS1BdXRoLUNsaWVudC1JZFwiOnQsXCJYLUVzcmktQXV0aC1SZWRpcmVjdC1VcmlcIjp3aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8jLiokLyxcIlwiKX0sbWV0aG9kOlwicG9zdFwiLHF1ZXJ5OntmOlwianNvblwifSx3aXRoQ3JlZGVudGlhbHM6ITB9KS50aGVuKChlPT5lLmRhdGEpKX1fZ2V0UG9ydGFsU2VsZihlLHQpe2xldCBzO2lmKHRoaXMuX2d3RG9tYWlucy5zb21lKCh0PT4odC5yZWdleC50ZXN0KGUpJiYocz10LmN1c3RvbUJhc2VVcmwpLCEhcykpKSxzKXJldHVybiBQcm9taXNlLnJlc29sdmUoe2FsbFNTTDohMCxjdXJyZW50VmVyc2lvbjpcIjQuNFwiLGN1c3RvbUJhc2VVcmw6cyxwb3J0YWxNb2RlOlwibXVsdGl0ZW5hbnRcIixzdXBwb3J0c09BdXRoOiEwfSk7dGhpcy5fYXBwT3JpZ2luLnN0YXJ0c1dpdGgoXCJodHRwczpcIik/ZT1lLnJlcGxhY2UoL15odHRwOi9pLFwiaHR0cHM6XCIpLnJlcGxhY2UoLzo3MDgwL2ksXCI6NzQ0M1wiKTovXmh0dHA6L2kudGVzdCh0KSYmKGU9ZS5yZXBsYWNlKC9eaHR0cHM6L2ksXCJodHRwOlwiKS5yZXBsYWNlKC86NzQ0My9pLFwiOjcwODBcIikpO3JldHVybiByKGUse3F1ZXJ5OntmOlwianNvblwifSxhdXRoTW9kZTpcImFub255bW91c1wiLHdpdGhDcmVkZW50aWFsczohMH0pLnRoZW4oKGU9PmUuZGF0YSkpfV9kb1BvcnRhbFNpZ25JbihlKXtjb25zdCB0PXRoaXMuX3BvcnRhbENvbmZpZyxzPXdpbmRvdy5sb2NhdGlvbi5ocmVmLHI9dGhpcy5maW5kU2VydmVySW5mbyhlKTtyZXR1cm4hKCF0JiYhdGhpcy5faXNQb3J0YWxEb21haW4ocyl8fCEocj9yLmhhc1BvcnRhbHx8ci5vd25pbmdTeXN0ZW1VcmwmJnRoaXMuX2lzUG9ydGFsRG9tYWluKHIub3duaW5nU3lzdGVtVXJsKTp0aGlzLl9pc1BvcnRhbERvbWFpbihlKSl8fCEodGhpcy5faXNJZFByb3ZpZGVyKHMsZSl8fHQmJih0aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2UodGhpcy5fZ2V0U2VydmVySW5zdGFuY2VSb290KHQucmVzdEJhc2VVcmwpLGUpfHx0aGlzLl9pc0lkUHJvdmlkZXIodC5yZXN0QmFzZVVybCxlKSl8fGcocyxlLCEwKSkpfV9jaGVja1Byb3RvY29sKGUsdCxzLHIpe2xldCBuPSEwO2NvbnN0IG89cj90LmFkbWluVG9rZW5TZXJ2aWNlVXJsOnQudG9rZW5TZXJ2aWNlVXJsO2lmKG8udHJpbSgpLnRvTG93ZXJDYXNlKCkuc3RhcnRzV2l0aChcImh0dHBzOlwiKSYmIXRoaXMuX2FwcE9yaWdpbi5zdGFydHNXaXRoKFwiaHR0cHM6XCIpJiZTKG8pJiYobj0hIXRoaXMuX3Byb3RvY29sRnVuYyYmISF0aGlzLl9wcm90b2NvbEZ1bmMoe3Jlc291cmNlVXJsOmUsc2VydmVySW5mbzp0fSksIW4pKXtzKG5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjphYm9ydGVkXCIsXCJBYm9ydGVkIHRoZSBTaWduLUluIHByb2Nlc3MgdG8gYXZvaWQgc2VuZGluZyBwYXNzd29yZCBvdmVyIGluc2VjdXJlIGNvbm5lY3Rpb24uXCIpKX1yZXR1cm4gbn1fZW5xdWV1ZShlLHQscyxyLGksbil7cmV0dXJuIHJ8fChyPWQoKSksci5yZXNVcmxfPWUsci5zaW5mb189dCxyLm9wdGlvbnNfPXMsci5hZG1pbl89aSxyLnJlZnJlc2hfPW4sdGhpcy5fYnVzeT90aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2UodGhpcy5fZ2V0U2VydmVySW5zdGFuY2VSb290KGUpLHRoaXMuX2J1c3kucmVzVXJsXyk/KHRoaXMuX29BdXRoRGZkJiZ0aGlzLl9vQXV0aERmZC5vQXV0aFdpbl8mJnRoaXMuX29BdXRoRGZkLm9BdXRoV2luXy5mb2N1cygpLHRoaXMuX3NvUmVxcy5wdXNoKHIpKTp0aGlzLl94b1JlcXMucHVzaChyKTp0aGlzLl9kb1NpZ25JbihyKSxyLnByb21pc2V9X2RvU2lnbkluKGUpe3RoaXMuX2J1c3k9ZSx0aGlzLl9yZWplY3RPblBlcnNpc3RlZFBhZ2VTaG93PSExO2NvbnN0IHQ9dD0+e2NvbnN0IHM9ZS5vcHRpb25zXyYmZS5vcHRpb25zXy5yZXNvdXJjZSxyPWUucmVzVXJsXyxpPWUucmVmcmVzaF87bGV0IG49ITE7LTE9PT10aGlzLmNyZWRlbnRpYWxzLmluZGV4T2YodCkmJihpJiYtMSE9PXRoaXMuY3JlZGVudGlhbHMuaW5kZXhPZihpKT8oaS51c2VySWQ9dC51c2VySWQsaS50b2tlbj10LnRva2VuLGkuZXhwaXJlcz10LmV4cGlyZXMsaS52YWxpZGl0eT10LnZhbGlkaXR5LGkuc3NsPXQuc3NsLGkuY3JlYXRpb25UaW1lPXQuY3JlYXRpb25UaW1lLG49ITAsdD1pKTp0aGlzLmNyZWRlbnRpYWxzLnB1c2godCkpLHQucmVzb3VyY2VzfHwodC5yZXNvdXJjZXM9W10pLHQucmVzb3VyY2VzLnB1c2goc3x8ciksdC5zY29wZT10aGlzLl9pc1NlcnZlclJzcmMocik/XCJzZXJ2ZXJcIjpcInBvcnRhbFwiLHQuZW1pdFRva2VuQ2hhbmdlKCk7Y29uc3Qgbz10aGlzLl9zb1JlcXMsYT17fTt0aGlzLl9zb1JlcXM9W10sby5mb3JFYWNoKChlPT57aWYoIXRoaXMuX2lzSWRlbnRpY2FsU2VydmljZShyLGUucmVzVXJsXykpe2NvbnN0IHM9dGhpcy5fZ2V0U3VmZml4KGUucmVzVXJsXyk7YVtzXXx8KGFbc109ITAsdC5yZXNvdXJjZXMucHVzaChlLnJlc1VybF8pKX19KSksZS5yZXNvbHZlKHQpLG8uZm9yRWFjaCgoZT0+e3RoaXMuX2hhc1NhbWVTZXJ2ZXJJbnN0YW5jZSh0aGlzLl9nZXRTZXJ2ZXJJbnN0YW5jZVJvb3QociksZS5yZXNVcmxfKT9lLnJlc29sdmUodCk6dGhpcy5fc29SZXFzLnB1c2goZSl9KSksdGhpcy5fYnVzeT1lLnJlc1VybF89ZS5zaW5mb189ZS5yZWZyZXNoXz1udWxsLG58fHRoaXMuZW1pdChcImNyZWRlbnRpYWwtY3JlYXRlXCIse2NyZWRlbnRpYWw6dH0pLHRoaXMuX3NvUmVxcy5sZW5ndGg/dGhpcy5fZG9TaWduSW4odGhpcy5fc29SZXFzLnNoaWZ0KCkpOnRoaXMuX3hvUmVxcy5sZW5ndGgmJnRoaXMuX2RvU2lnbkluKHRoaXMuX3hvUmVxcy5zaGlmdCgpKX0scz10PT57ZS5yZWplY3QodCksdGhpcy5fYnVzeT1lLnJlc1VybF89ZS5zaW5mb189ZS5yZWZyZXNoXz1udWxsLHRoaXMuX3NvUmVxcy5sZW5ndGg/dGhpcy5fZG9TaWduSW4odGhpcy5fc29SZXFzLnNoaWZ0KCkpOnRoaXMuX3hvUmVxcy5sZW5ndGgmJnRoaXMuX2RvU2lnbkluKHRoaXMuX3hvUmVxcy5zaGlmdCgpKX0scj0ocixuLGEsaCk9Pnt2YXIgbCxjO2NvbnN0IGQ9ZS5zaW5mb18scD0hZS5vcHRpb25zX3x8ITEhPT1lLm9wdGlvbnNfLnByb21wdCxfPWQuaGFzUG9ydGFsJiZ0aGlzLl9maW5kT0F1dGhJbmZvKGUucmVzVXJsXyk7bGV0IGYsbTtpZihyKXQobmV3IGooe3VzZXJJZDpyLHNlcnZlcjpkLnNlcnZlcix0b2tlbjphfHxudWxsLGV4cGlyZXM6bnVsbCE9aD9OdW1iZXIoaCk6bnVsbCxzc2w6ISFufSkpO2Vsc2UgaWYod2luZG93IT09d2luZG93LnBhcmVudCYmbnVsbCE9KGw9dGhpcy5fYXBwVXJsT2JqLnF1ZXJ5KSYmbFtcImFyY2dpcy1hdXRoLW9yaWdpblwiXSYmbnVsbCE9KGM9dGhpcy5fYXBwVXJsT2JqLnF1ZXJ5KSYmY1tcImFyY2dpcy1hdXRoLXBvcnRhbFwiXSYmdGhpcy5faGFzU2FtZVNlcnZlckluc3RhbmNlKHRoaXMuX2dldFNlcnZlckluc3RhbmNlUm9vdCh0aGlzLl9hcHBVcmxPYmoucXVlcnlbXCJhcmNnaXMtYXV0aC1wb3J0YWxcIl0pLGUucmVzVXJsXykpe3ZhciB2O3dpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2Uoe3R5cGU6XCJhcmNnaXM6YXV0aDpyZXF1ZXN0Q3JlZGVudGlhbFwifSx0aGlzLl9hcHBVcmxPYmoucXVlcnlbXCJhcmNnaXMtYXV0aC1vcmlnaW5cIl0pO2NvbnN0IHI9byh3aW5kb3csXCJtZXNzYWdlXCIsKGU9PntlLnNvdXJjZT09PXdpbmRvdy5wYXJlbnQmJmUuZGF0YSYmKFwiYXJjZ2lzOmF1dGg6Y3JlZGVudGlhbFwiPT09ZS5kYXRhLnR5cGU/KHIucmVtb3ZlKCksdChuZXcgaihlLmRhdGEuY3JlZGVudGlhbCkpKTpcImFyY2dpczphdXRoOmVycm9yXCI9PT1lLmRhdGEudHlwZSYmKHIucmVtb3ZlKCkscyhpLmZyb21KU09OKGUuZGF0YS5lcnJvcikpKSl9KSk7dShudWxsPT0odj1lLm9wdGlvbnNfKT92b2lkIDA6di5zaWduYWwsKCgpPT57ci5yZW1vdmUoKX0pKX1lbHNlIGlmKF8pe2xldCByPV8uX29BdXRoQ3JlZDtpZighcil7Y29uc3QgZT1uZXcgVChfLEMpLHQ9bmV3IFQoXyxEKTtlLmlzVmFsaWQoKSYmdC5pc1ZhbGlkKCk/ZS5leHBpcmVzPnQuZXhwaXJlcz8ocj1lLHQuZGVzdHJveSgpKToocj10LGUuZGVzdHJveSgpKTpyPWUuaXNWYWxpZCgpP2U6dCxfLl9vQXV0aENyZWQ9cn1pZihyLmlzVmFsaWQoKSlmPW5ldyBqKHt1c2VySWQ6ci51c2VySWQsc2VydmVyOmQuc2VydmVyLHRva2VuOnIudG9rZW4sZXhwaXJlczpyLmV4cGlyZXMsc3NsOnIuc3NsLF9vQXV0aENyZWQ6cn0pLF8uYXBwSWQhPT1yLmFwcElkJiZ0aGlzLl9kb1BvcnRhbFNpZ25JbihlLnJlc1VybF8pP2UuX3BlbmRpbmdEZmQ9dGhpcy5fZXhjaGFuZ2VUb2tlbihmLnNlcnZlcixfLmFwcElkLGYudG9rZW4pLnRoZW4oKGU9PntmLnRva2VuPWUsci50b2tlbj1lLHIuc2F2ZSgpLHQoZil9KSkuY2F0Y2goKCgpPT57dChmKX0pKTp0KGYpO2Vsc2UgaWYodGhpcy5fb0F1dGhIYXNoJiZ0aGlzLl9oYXNTYW1lU2VydmVySW5zdGFuY2UoXy5wb3J0YWxVcmwsdGhpcy5fb0F1dGhIYXNoLnN0YXRlLnBvcnRhbFVybCkpe2NvbnN0IGU9dGhpcy5fb0F1dGhIYXNoO2Y9bmV3IGooe3VzZXJJZDplLnVzZXJuYW1lLHNlcnZlcjpkLnNlcnZlcix0b2tlbjplLmFjY2Vzc190b2tlbixleHBpcmVzOkRhdGUubm93KCkrMWUzKk51bWJlcihlLmV4cGlyZXNfaW4pLHNzbDpcInRydWVcIj09PWUuc3NsLG9BdXRoU3RhdGU6ZS5zdGF0ZSxfb0F1dGhDcmVkOnJ9KSxfLnVzZXJJZD1mLnVzZXJJZCxyLnN0b3JhZ2U9ZS5wZXJzaXN0P0M6RCxyLnRva2VuPWYudG9rZW4sci5leHBpcmVzPWYuZXhwaXJlcyxyLnVzZXJJZD1mLnVzZXJJZCxyLnNzbD1mLnNzbCxyLnNhdmUoKSx0aGlzLl9vQXV0aEhhc2g9bnVsbCx0KGYpfWVsc2V7Y29uc3Qgcj0oKT0+e3A/ZS5fcGVuZGluZ0RmZD10aGlzLm9BdXRoU2lnbkluKGUucmVzVXJsXyxkLF8sZS5vcHRpb25zXykudGhlbih0LHMpOihtPW5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjpub3QtYXV0aGVudGljYXRlZFwiLFwiVXNlciBpcyBub3Qgc2lnbmVkIGluLlwiKSxzKG0pKX07dGhpcy5fZG9Qb3J0YWxTaWduSW4oZS5yZXNVcmxfKT9lLl9wZW5kaW5nRGZkPXRoaXMuX2dldFBsYXRmb3JtU2VsZihkLnNlcnZlcixfLmFwcElkKS50aGVuKCgoe3BvcnRhbFVybDplLHRva2VuOnMsdXNlcm5hbWU6aX0pPT57IWV8fGcoZSx0aGlzLl9hcHBPcmlnaW4sITApPyhmPW5ldyBqKHtzZXJ2ZXI6ZC5zZXJ2ZXIsdXNlcklkOmksdG9rZW46c30pLHQoZikpOnIoKX0pKS5jYXRjaChyKTpyKCl9fWVsc2UgaWYocCl7aWYodGhpcy5fY2hlY2tQcm90b2NvbChlLnJlc1VybF8sZCxzLGUuYWRtaW5fKSl7bGV0IHI9ZS5vcHRpb25zXztlLmFkbWluXyYmKHI9cnx8e30sci5pc0FkbWluPSEwKSxlLl9wZW5kaW5nRGZkPXRoaXMuc2lnbkluKGUucmVzVXJsXyxkLHIpLnRoZW4odCxzKX19ZWxzZSBtPW5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjpub3QtYXV0aGVudGljYXRlZFwiLFwiVXNlciBpcyBub3Qgc2lnbmVkIGluLlwiKSxzKG0pfSxuPSgpPT57Y29uc3Qgcj1lLnNpbmZvXyxpPXIub3duaW5nU3lzdGVtVXJsLG49ZS5vcHRpb25zXztsZXQgbyxhLGgsbDtpZihuJiYobz1uLnRva2VuLGE9bi5lcnJvcixoPW4ucHJvbXB0KSxsPXRoaXMuX2ZpbmRDcmVkZW50aWFsKGkse3Rva2VuOm8scmVzb3VyY2U6ZS5yZXNVcmxffSksIWwpZm9yKGNvbnN0IGUgb2YgdGhpcy5jcmVkZW50aWFscylpZih0aGlzLl9pc0lkUHJvdmlkZXIoaSxlLnNlcnZlcikpe2w9ZTticmVha31pZihsKXtjb25zdCBpPXRoaXMuZmluZENyZWRlbnRpYWwoZS5yZXNVcmxfLGwudXNlcklkKTtpZihpKXQoaSk7ZWxzZSBpZihQKHIsdGhpcy5fbGVnYWN5RmVkKSl7Y29uc3QgZT1sLnRvSlNPTigpO2Uuc2VydmVyPXIuc2VydmVyLGUucmVzb3VyY2VzPW51bGwsdChuZXcgaihlKSl9ZWxzZXsoZS5fcGVuZGluZ0RmZD10aGlzLmdlbmVyYXRlVG9rZW4odGhpcy5maW5kU2VydmVySW5mbyhsLnNlcnZlciksbnVsbCx7c2VydmVyVXJsOmUucmVzVXJsXyx0b2tlbjpsLnRva2VuLHNpZ25hbDplLm9wdGlvbnNfLnNpZ25hbCxzc2w6bC5zc2x9KSkudGhlbigocz0+e3QobmV3IGooe3VzZXJJZDpsLnVzZXJJZCxzZXJ2ZXI6ci5zZXJ2ZXIsdG9rZW46cy50b2tlbixleHBpcmVzOm51bGwhPXMuZXhwaXJlcz9OdW1iZXIocy5leHBpcmVzKTpudWxsLHNzbDohIXMuc3NsLGlzQWRtaW46ZS5hZG1pbl8sdmFsaWRpdHk6cy52YWxpZGl0eX0pKX0pLHMpfX1lbHNle3RoaXMuX2J1c3k9bnVsbCxvJiYoZS5vcHRpb25zXy50b2tlbj1udWxsKTsoZS5fcGVuZGluZ0RmZD10aGlzLmdldENyZWRlbnRpYWwoaS5yZXBsYWNlKC9cXC8/JC8sXCIvc2hhcmluZ1wiKSx7cmVzb3VyY2U6ZS5yZXNVcmxfLG93bmluZ1RlbmFudDpyLm93bmluZ1RlbmFudCxzaWduYWw6ZS5vcHRpb25zXy5zaWduYWwsdG9rZW46byxlcnJvcjphLHByb21wdDpofSkpLnRoZW4oKCgpPT57dGhpcy5fZW5xdWV1ZShlLnJlc1VybF8sZS5zaW5mb18sZS5vcHRpb25zXyxlLGUuYWRtaW5fKX0pLChlPT57cyhlKX0pKX19O3RoaXMuX2VycmJhY2tGdW5jPXM7Y29uc3QgYT1lLnNpbmZvXy5vd25pbmdTeXN0ZW1VcmwsaD10aGlzLl9pc1NlcnZlclJzcmMoZS5yZXNVcmxfKSxjPWUuc2luZm9fLl9yZXN0SW5mb1BtcztjP2MucHJvbWlzZS50aGVuKCh0PT57Y29uc3Qgcz1lLnNpbmZvXztpZihzLl9yZXN0SW5mb1Btcyl7cy5hZG1pblRva2VuU2VydmljZVVybD1zLl9yZXN0SW5mb1Btcy5hZG1pblVybCxzLl9yZXN0SW5mb1Btcz1udWxsLHMudG9rZW5TZXJ2aWNlVXJsPWwoXCJhdXRoSW5mby50b2tlblNlcnZpY2VzVXJsXCIsdCl8fGwoXCJhdXRoSW5mby50b2tlblNlcnZpY2VVcmxcIix0KXx8bChcInRva2VuU2VydmljZVVybFwiLHQpLHMuc2hvcnRMaXZlZFRva2VuVmFsaWRpdHk9bChcImF1dGhJbmZvLnNob3J0TGl2ZWRUb2tlblZhbGlkaXR5XCIsdCkscy5jdXJyZW50VmVyc2lvbj10LmN1cnJlbnRWZXJzaW9uLHMub3duaW5nVGVuYW50PXQub3duaW5nVGVuYW50O2NvbnN0IGU9cy5vd25pbmdTeXN0ZW1Vcmw9dC5vd25pbmdTeXN0ZW1Vcmw7ZSYmdGhpcy5fcG9ydGFscy5wdXNoKGUpfWgmJnMub3duaW5nU3lzdGVtVXJsP24oKTpyKCl9KSwoKCk9PntlLnNpbmZvXy5fcmVzdEluZm9QbXM9bnVsbDtjb25zdCB0PW5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjpzZXJ2ZXItaWRlbnRpZmljYXRpb24tZmFpbGVkXCIsXCJVbmtub3duIHJlc291cmNlIC0gY291bGQgbm90IGZpbmQgdG9rZW4gc2VydmljZSBlbmRwb2ludC5cIik7cyh0KX0pKTpoJiZhP24oKTplLnNpbmZvXy5fc2VsZlJlcT9lLnNpbmZvXy5fc2VsZlJlcS5zZWxmRGZkLnRoZW4oKHQ9Pntjb25zdCBzPXt9O2xldCByLGksbixvO3JldHVybiB0JiYocj10LnVzZXImJnQudXNlci51c2VybmFtZSxzLnVzZXJuYW1lPXIscy5hbGxTU0w9dC5hbGxTU0wsaT10LnN1cHBvcnRzT0F1dGgsbj10LmN1cnJlbnRWZXJzaW9uLFwibXVsdGl0ZW5hbnRcIj09PXQucG9ydGFsTW9kZSYmKG89dC5jdXN0b21CYXNlVXJsKSksZS5zaW5mb18ud2ViVGllckF1dGg9ISFyLHImJnRoaXMubm9ybWFsaXplV2ViVGllckF1dGg/dGhpcy5nZW5lcmF0ZVRva2VuKGUuc2luZm9fLG51bGwse3NzbDpzLmFsbFNTTH0pLmNhdGNoKCgoKT0+bnVsbCkpLnRoZW4oKGU9PihzLnBvcnRhbFRva2VuPWUmJmUudG9rZW4scy50b2tlbkV4cGlyYXRpb249ZSYmZS5leHBpcmVzLHMpKSk6IXImJmkmJnBhcnNlRmxvYXQobik+PTQuNCYmIXRoaXMuX2ZpbmRPQXV0aEluZm8oZS5yZXNVcmxfKT90aGlzLl9nZW5lcmF0ZU9BdXRoSW5mbyh7cG9ydGFsVXJsOmUuc2luZm9fLnNlcnZlcixjdXN0b21CYXNlVXJsOm8sb3duaW5nVGVuYW50OmUuc2luZm9fLl9zZWxmUmVxLm93bmluZ1RlbmFudH0pLmNhdGNoKCgoKT0+bnVsbCkpLnRoZW4oKCgpPT5zKSk6c30pKS5jYXRjaCgoKCk9Pm51bGwpKS50aGVuKCh0PT57ZS5zaW5mb18uX3NlbGZSZXE9bnVsbCx0P3IodC51c2VybmFtZSx0LmFsbFNTTCx0LnBvcnRhbFRva2VuLHQudG9rZW5FeHBpcmF0aW9uKTpyKCl9KSk6cigpfV9nZW5lcmF0ZU9BdXRoSW5mbyhlKXtsZXQgdCxzLGk9ZS5wb3J0YWxVcmw7Y29uc3Qgbj1lLmN1c3RvbUJhc2VVcmwsbz1lLm93bmluZ1RlbmFudCxhPSF0aGlzLmRlZmF1bHRPQXV0aEluZm8mJnRoaXMuX2NyZWF0ZURlZmF1bHRPQXV0aEluZm8mJiF0aGlzLl9oYXNUZXN0ZWRJZkFwcElzT25Qb3J0YWw7aWYoYSl7cz13aW5kb3cubG9jYXRpb24uaHJlZjtsZXQgZT1zLmluZGV4T2YoXCI/XCIpO2U+LTEmJihzPXMuc2xpY2UoMCxlKSksZT1zLnNlYXJjaCgvXFwvKGFwcHN8aG9tZSlcXC8vKSxzPWU+LTE/cy5zbGljZSgwLGUpOm51bGx9cmV0dXJuIGEmJnM/KHRoaXMuX2hhc1Rlc3RlZElmQXBwSXNPblBvcnRhbD0hMCx0PXIocytcIi9zaGFyaW5nL3Jlc3RcIix7cXVlcnk6e2Y6XCJqc29uXCJ9fSkudGhlbigoKCk9Pnt0aGlzLmRlZmF1bHRPQXV0aEluZm89bmV3IHgoe2FwcElkOlwiYXJjZ2lzb25saW5lXCIscG9wdXBDYWxsYmFja1VybDpzK1wiL2hvbWUvb2F1dGgtY2FsbGJhY2suaHRtbFwifSl9KSkpOnQ9UHJvbWlzZS5yZXNvbHZlKCksdC50aGVuKCgoKT0+e2lmKHRoaXMuZGVmYXVsdE9BdXRoSW5mbylyZXR1cm4gaT1pLnJlcGxhY2UoL15odHRwOi9pLFwiaHR0cHM6XCIpLHIoaStcIi9zaGFyaW5nL3Jlc3Qvb2F1dGgyL3ZhbGlkYXRlUmVkaXJlY3RVcmlcIix7cXVlcnk6e2FjY291bnRJZDpvLGNsaWVudF9pZDp0aGlzLmRlZmF1bHRPQXV0aEluZm8uYXBwSWQscmVkaXJlY3RfdXJpOncodGhpcy5kZWZhdWx0T0F1dGhJbmZvLnBvcHVwQ2FsbGJhY2tVcmwpLGY6XCJqc29uXCJ9fSkudGhlbigoZT0+e2lmKGUuZGF0YS52YWxpZCl7Y29uc3QgdD10aGlzLmRlZmF1bHRPQXV0aEluZm8uY2xvbmUoKTtlLmRhdGEudXJsS2V5JiZuP3QucG9ydGFsVXJsPVwiaHR0cHM6Ly9cIitlLmRhdGEudXJsS2V5LnRvTG93ZXJDYXNlKCkrXCIuXCIrbjp0LnBvcnRhbFVybD1pLHQucG9wdXA9d2luZG93IT09d2luZG93LnRvcHx8IShnKGksdGhpcy5fYXBwT3JpZ2luKXx8dGhpcy5fZ3dEb21haW5zLnNvbWUoKGU9PmUucmVnZXgudGVzdChpKSYmZS5yZWdleC50ZXN0KHRoaXMuX2FwcE9yaWdpbikpKSksdGhpcy5vQXV0aEluZm9zLnB1c2godCl9fSkpfSkpfV9kb09BdXRoU2lnbkluKGUsdCxzKXtjb25zdCByPXtwb3J0YWxVcmw6cy5wb3J0YWxVcmx9OyFzLnBvcHVwJiZzLnByZXNlcnZlVXJsSGFzaCYmd2luZG93LmxvY2F0aW9uLmhhc2gmJihyLmhhc2g9d2luZG93LmxvY2F0aW9uLmhhc2gpO2NvbnN0IG49e2NsaWVudF9pZDpzLmFwcElkLHJlc3BvbnNlX3R5cGU6XCJ0b2tlblwiLHN0YXRlOkpTT04uc3RyaW5naWZ5KHIpLGV4cGlyYXRpb246cy5leHBpcmF0aW9uLGxvY2FsZTpzLmxvY2FsZSxyZWRpcmVjdF91cmk6cy5wb3B1cD93KHMucG9wdXBDYWxsYmFja1VybCk6d2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvIy4qJC8sXCJcIil9O3MuZm9yY2VMb2dpbiYmKG4uZm9yY2VfbG9naW49ITApLHMuZm9yY2VVc2VySWQmJnMudXNlcklkJiYobi5wcmVwb3B1bGF0ZWR1c2VybmFtZT1zLnVzZXJJZCksIXMucG9wdXAmJnRoaXMuX2RvUG9ydGFsU2lnbkluKGUpJiYobi5yZWRpcmVjdFRvVXNlck9yZ1VybD0hMCk7Y29uc3QgaD1zLnBvcnRhbFVybC5yZXBsYWNlKC9eaHR0cDovaSxcImh0dHBzOlwiKStcIi9zaGFyaW5nL29hdXRoMi9hdXRob3JpemVcIixsPWgrXCI/XCIrSShuKTtpZihzLnBvcHVwKXtjb25zdCBlPXdpbmRvdy5vcGVuKGwsXCJlc3JpSlNBUElPQXV0aFwiLHMucG9wdXBXaW5kb3dGZWF0dXJlcyk7aWYoZSllLmZvY3VzKCksdGhpcy5fb0F1dGhEZmQub0F1dGhXaW5fPWUsdGhpcy5fb0F1dGhJbnRlcnZhbElkPXNldEludGVydmFsKCgoKT0+e2lmKGUuY2xvc2VkKXtjbGVhckludGVydmFsKHRoaXMuX29BdXRoSW50ZXJ2YWxJZCksdGhpcy5fb0F1dGhPbkhhc2hIYW5kbGUucmVtb3ZlKCk7Y29uc3QgZT10aGlzLl9vQXV0aERmZDtpZihlKXtjb25zdCB0PW5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjp1c2VyLWFib3J0ZWRcIixcIkFCT1JURURcIik7ZS5yZWplY3QodCl9fX0pLDUwMCksdGhpcy5fb0F1dGhPbkhhc2hIYW5kbGU9byhhLFwiYXJjZ2lzOmF1dGg6aGFzaFwiLChlPT57dGhpcy5zZXRPQXV0aFJlc3BvbnNlSGFzaChlLmRldGFpbCl9KSk7ZWxzZXtjb25zdCBlPW5ldyBpKFwiaWRlbnRpdHktbWFuYWdlcjpwb3B1cC1ibG9ja2VkXCIsXCJBQk9SVEVEXCIpO3RoaXMuX29BdXRoRGZkLnJlamVjdChlKX19ZWxzZSB0aGlzLl9yZWplY3RPblBlcnNpc3RlZFBhZ2VTaG93PSEwLHRoaXMuX29BdXRoUmVkaXJlY3RGdW5jP3RoaXMuX29BdXRoUmVkaXJlY3RGdW5jKHthdXRob3JpemVQYXJhbXM6bixhdXRob3JpemVVcmw6aCxyZXNvdXJjZVVybDplLHNlcnZlckluZm86dCxvQXV0aEluZm86c30pOndpbmRvdy5sb2NhdGlvbi5ocmVmPWx9fXEucHJvdG90eXBlLmRlY2xhcmVkQ2xhc3M9XCJlc3JpLmlkZW50aXR5LklkZW50aXR5TWFuYWdlckJhc2VcIjtsZXQgaj1jbGFzcyBleHRlbmRzIG4uRXZlbnRlZEFjY2Vzc29ye2NvbnN0cnVjdG9yKGUpe3N1cGVyKGUpLHRoaXMuX29BdXRoQ3JlZD1udWxsLHRoaXMudG9rZW5SZWZyZXNoQnVmZmVyPTIsZSYmZS5fb0F1dGhDcmVkJiYodGhpcy5fb0F1dGhDcmVkPWUuX29BdXRoQ3JlZCl9aW5pdGlhbGl6ZSgpe3RoaXMucmVzb3VyY2VzPXRoaXMucmVzb3VyY2VzfHxbXSxudWxsPT10aGlzLmNyZWF0aW9uVGltZSYmKHRoaXMuY3JlYXRpb25UaW1lPURhdGUubm93KCkpfXJlZnJlc2hUb2tlbigpe2NvbnN0IGU9cy5maW5kU2VydmVySW5mbyh0aGlzLnNlcnZlciksdD1lJiZlLm93bmluZ1N5c3RlbVVybCxyPSEhdCYmXCJzZXJ2ZXJcIj09PXRoaXMuc2NvcGUsaT1yJiZQKGUscy5fbGVnYWN5RmVkKSxuPWUud2ViVGllckF1dGgsbz1uJiZzLm5vcm1hbGl6ZVdlYlRpZXJBdXRoLGE9Ult0aGlzLnNlcnZlcl0saD1hJiZhW3RoaXMudXNlcklkXTtsZXQgbCxjPXRoaXMucmVzb3VyY2VzJiZ0aGlzLnJlc291cmNlc1swXSxkPXImJnMuZmluZFNlcnZlckluZm8odCksdT17dXNlcm5hbWU6dGhpcy51c2VySWQscGFzc3dvcmQ6aH07aWYobiYmIW8pcmV0dXJuO3ImJiFkJiZzLnNlcnZlckluZm9zLnNvbWUoKGU9PihzLl9pc0lkUHJvdmlkZXIodCxlLnNlcnZlcikmJihkPWUpLCEhZCkpKTtjb25zdCBwPWQmJnMuZmluZENyZWRlbnRpYWwoZC5zZXJ2ZXIsdGhpcy51c2VySWQpO2lmKCFyfHxwKXtpZighaSl7aWYocilsPXtzZXJ2ZXJVcmw6Yyx0b2tlbjpwJiZwLnRva2VuLHNzbDpwJiZwLnNzbH07ZWxzZSBpZihvKXU9bnVsbCxsPXtzc2w6dGhpcy5zc2x9O2Vsc2V7aWYoIWgpe2xldCB0O3JldHVybiBjJiYoYz1zLl9zYW5pdGl6ZVVybChjKSx0aGlzLl9lbnF1ZXVlZD0xLHQ9cy5fZW5xdWV1ZShjLGUsbnVsbCxudWxsLHRoaXMuaXNBZG1pbix0aGlzKSx0LnRoZW4oKCgpPT57dGhpcy5fZW5xdWV1ZWQ9MCx0aGlzLnJlZnJlc2hTZXJ2ZXJUb2tlbnMoKX0pKS5jYXRjaCgoKCk9Pnt0aGlzLl9lbnF1ZXVlZD0wfSkpKSx0fXRoaXMuaXNBZG1pbiYmKGw9e2lzQWRtaW46ITB9KX1yZXR1cm4gcy5nZW5lcmF0ZVRva2VuKHI/ZDplLHI/bnVsbDp1LGwpLnRoZW4oKGU9Pnt0aGlzLnRva2VuPWUudG9rZW4sdGhpcy5leHBpcmVzPW51bGwhPWUuZXhwaXJlcz9OdW1iZXIoZS5leHBpcmVzKTpudWxsLHRoaXMuY3JlYXRpb25UaW1lPURhdGUubm93KCksdGhpcy52YWxpZGl0eT1lLnZhbGlkaXR5LHRoaXMuZW1pdFRva2VuQ2hhbmdlKCksdGhpcy5yZWZyZXNoU2VydmVyVG9rZW5zKCl9KSkuY2F0Y2goKCgpPT57fSkpfXAucmVmcmVzaFRva2VuKCl9fXJlZnJlc2hTZXJ2ZXJUb2tlbnMoKXtcInBvcnRhbFwiPT09dGhpcy5zY29wZSYmcy5jcmVkZW50aWFscy5mb3JFYWNoKChlPT57Y29uc3QgdD1zLmZpbmRTZXJ2ZXJJbmZvKGUuc2VydmVyKSxyPXQmJnQub3duaW5nU3lzdGVtVXJsO2UhPT10aGlzJiZlLnVzZXJJZD09PXRoaXMudXNlcklkJiZyJiZcInNlcnZlclwiPT09ZS5zY29wZSYmKHMuX2hhc1NhbWVTZXJ2ZXJJbnN0YW5jZSh0aGlzLnNlcnZlcixyKXx8cy5faXNJZFByb3ZpZGVyKHIsdGhpcy5zZXJ2ZXIpKSYmKFAodCxzLl9sZWdhY3lGZWQpPyhlLnRva2VuPXRoaXMudG9rZW4sZS5leHBpcmVzPXRoaXMuZXhwaXJlcyxlLmNyZWF0aW9uVGltZT10aGlzLmNyZWF0aW9uVGltZSxlLnZhbGlkaXR5PXRoaXMudmFsaWRpdHksZS5lbWl0VG9rZW5DaGFuZ2UoKSk6ZS5yZWZyZXNoVG9rZW4oKSl9KSl9ZW1pdFRva2VuQ2hhbmdlKGUpe2NsZWFyVGltZW91dCh0aGlzLl9yZWZyZXNoVGltZXIpO2NvbnN0IHQ9dGhpcy5zZXJ2ZXImJnMuZmluZFNlcnZlckluZm8odGhpcy5zZXJ2ZXIpLHI9dCYmdC5vd25pbmdTeXN0ZW1VcmwsaT1yJiZzLmZpbmRTZXJ2ZXJJbmZvKHIpOyExPT09ZXx8ciYmXCJwb3J0YWxcIiE9PXRoaXMuc2NvcGUmJighaXx8IWkud2ViVGllckF1dGh8fHMubm9ybWFsaXplV2ViVGllckF1dGgpfHxudWxsPT10aGlzLmV4cGlyZXMmJm51bGw9PXRoaXMudmFsaWRpdHl8fHRoaXMuX3N0YXJ0UmVmcmVzaFRpbWVyKCksdGhpcy5lbWl0KFwidG9rZW4tY2hhbmdlXCIpfWRlc3Ryb3koKXt0aGlzLnVzZXJJZD10aGlzLnNlcnZlcj10aGlzLnRva2VuPXRoaXMuZXhwaXJlcz10aGlzLnZhbGlkaXR5PXRoaXMucmVzb3VyY2VzPXRoaXMuY3JlYXRpb25UaW1lPW51bGwsdGhpcy5fb0F1dGhDcmVkJiYodGhpcy5fb0F1dGhDcmVkLmRlc3Ryb3koKSx0aGlzLl9vQXV0aENyZWQ9bnVsbCk7Y29uc3QgZT1zLmNyZWRlbnRpYWxzLmluZGV4T2YodGhpcyk7ZT4tMSYmcy5jcmVkZW50aWFscy5zcGxpY2UoZSwxKSx0aGlzLmVtaXRUb2tlbkNoYW5nZSgpLHRoaXMuZW1pdChcImRlc3Ryb3lcIil9dG9KU09OKCl7Y29uc3QgZT1oKHt1c2VySWQ6dGhpcy51c2VySWQsc2VydmVyOnRoaXMuc2VydmVyLHRva2VuOnRoaXMudG9rZW4sZXhwaXJlczp0aGlzLmV4cGlyZXMsdmFsaWRpdHk6dGhpcy52YWxpZGl0eSxzc2w6dGhpcy5zc2wsaXNBZG1pbjp0aGlzLmlzQWRtaW4sY3JlYXRpb25UaW1lOnRoaXMuY3JlYXRpb25UaW1lLHNjb3BlOnRoaXMuc2NvcGV9KSx0PXRoaXMucmVzb3VyY2VzO3JldHVybiB0JiZ0Lmxlbmd0aD4wJiYoZS5yZXNvdXJjZXM9dC5zbGljZSgpKSxlfV9zdGFydFJlZnJlc2hUaW1lcigpe2NsZWFyVGltZW91dCh0aGlzLl9yZWZyZXNoVGltZXIpO2NvbnN0IGU9NmU0KnRoaXMudG9rZW5SZWZyZXNoQnVmZmVyLHQ9MioqMzEtMTtsZXQgcz0odGhpcy52YWxpZGl0eT90aGlzLmNyZWF0aW9uVGltZSs2ZTQqdGhpcy52YWxpZGl0eTp0aGlzLmV4cGlyZXMpLURhdGUubm93KCk7czwwP3M9MDpzPnQmJihzPXQpLHRoaXMuX3JlZnJlc2hUaW1lcj1zZXRUaW1lb3V0KHRoaXMucmVmcmVzaFRva2VuLmJpbmQodGhpcykscz5lP3MtZTpzKX19O2UoW2soKV0sai5wcm90b3R5cGUsXCJjcmVhdGlvblRpbWVcIix2b2lkIDApLGUoW2soKV0sai5wcm90b3R5cGUsXCJleHBpcmVzXCIsdm9pZCAwKSxlKFtrKCldLGoucHJvdG90eXBlLFwiaXNBZG1pblwiLHZvaWQgMCksZShbaygpXSxqLnByb3RvdHlwZSxcIm9BdXRoU3RhdGVcIix2b2lkIDApLGUoW2soKV0sai5wcm90b3R5cGUsXCJyZXNvdXJjZXNcIix2b2lkIDApLGUoW2soKV0sai5wcm90b3R5cGUsXCJzY29wZVwiLHZvaWQgMCksZShbaygpXSxqLnByb3RvdHlwZSxcInNlcnZlclwiLHZvaWQgMCksZShbaygpXSxqLnByb3RvdHlwZSxcInNzbFwiLHZvaWQgMCksZShbaygpXSxqLnByb3RvdHlwZSxcInRva2VuXCIsdm9pZCAwKSxlKFtrKCldLGoucHJvdG90eXBlLFwidG9rZW5SZWZyZXNoQnVmZmVyXCIsdm9pZCAwKSxlKFtrKCldLGoucHJvdG90eXBlLFwidXNlcklkXCIsdm9pZCAwKSxlKFtrKCldLGoucHJvdG90eXBlLFwidmFsaWRpdHlcIix2b2lkIDApLGo9ZShbQShcImVzcmkuaWRlbnRpdHkuQ3JlZGVudGlhbFwiKV0saik7ZXhwb3J0e2ogYXMgQ3JlZGVudGlhbCxxIGFzIElkZW50aXR5TWFuYWdlckJhc2V9O1xuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjAvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmltcG9ydHtfIGFzIHR9ZnJvbVwiLi4vY2h1bmtzL3RzbGliLmVzNi5qc1wiO2ltcG9ydHttYWtlSGFuZGxlIGFzIGV9ZnJvbVwiLi4vY29yZS9oYW5kbGVVdGlscy5qc1wiO2ltcG9ydHtwcm9wZXJ0eSBhcyBvfWZyb21cIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvcHJvcGVydHkuanNcIjtpbXBvcnRcIi4uL2NvcmUvaGFzLmpzXCI7aW1wb3J0XCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9lbnN1cmVUeXBlLmpzXCI7aW1wb3J0XCIuLi9jb3JlL0xvZ2dlci5qc1wiO2ltcG9ydHtzdWJjbGFzcyBhcyBzfWZyb21cIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvc3ViY2xhc3MuanNcIjtpbXBvcnQgaSBmcm9tXCIuLi93aWRnZXRzL1dpZGdldC5qc1wiO2ltcG9ydHtpc1dpZGdldCBhcyByfWZyb21cIi4uL3dpZGdldHMvc3VwcG9ydC93aWRnZXQuanNcIjtpbXBvcnR7Y3JlYXRlRm9jdXNUcmFwIGFzIG59ZnJvbVwiZm9jdXMtdHJhcFwiO2ltcG9ydHt0c3ggYXMgYX1mcm9tXCIuLi93aWRnZXRzL3N1cHBvcnQvanN4RmFjdG9yeS5qc1wiO2ltcG9ydHttZXNzYWdlQnVuZGxlIGFzIGN9ZnJvbVwiLi4vd2lkZ2V0cy9zdXBwb3J0L2RlY29yYXRvcnMvbWVzc2FnZUJ1bmRsZS5qc1wiO2NvbnN0IGQ9e2Jhc2U6XCJlc3JpLWlkZW50aXR5LW1vZGFsXCIsb3BlbjpcImVzcmktaWRlbnRpdHktbW9kYWwtLW9wZW5cIixjbG9zZWQ6XCJlc3JpLWlkZW50aXR5LW1vZGFsLS1jbG9zZWRcIix0aXRsZTpcImVzcmktaWRlbnRpdHktbW9kYWxfX3RpdGxlXCIsZGlhbG9nOlwiZXNyaS1pZGVudGl0eS1tb2RhbF9fZGlhbG9nXCIsY29udGVudDpcImVzcmktaWRlbnRpdHktbW9kYWxfX2NvbnRlbnRcIixjbG9zZUJ1dHRvbjpcImVzcmktaWRlbnRpdHktbW9kYWxfX2Nsb3NlLWJ1dHRvblwiLGljb25DbG9zZTpcImVzcmktaWNvbi1jbG9zZVwifTtsZXQgbD1jbGFzcyBleHRlbmRzIGl7Y29uc3RydWN0b3IodCxlKXtzdXBlcih0LGUpLHRoaXMuY29udGFpbmVyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksdGhpcy5jb250ZW50PW51bGwsdGhpcy5vcGVuPSExLHRoaXMuX2Nsb3NlPSgpPT57dGhpcy5vcGVuPSExfSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKSx0aGlzLm93bih0aGlzLndhdGNoKFwib3BlblwiLCgoKT0+dGhpcy5fdG9nZ2xlRm9jdXNUcmFwKCkpKSl9ZGVzdHJveSgpe3RoaXMuX2Rlc3Ryb3lGb2N1c1RyYXAoKX1yZW5kZXIoKXtjb25zdCB0PXRoaXMuaWQse29wZW46ZSxjb250ZW50Om8sdGl0bGU6cyxtZXNzYWdlczppfT10aGlzLHI9ZSYmISFvLG49e1tkLm9wZW5dOnIsW2QuY2xvc2VkXTohcn0sYz1hKFwiYnV0dG9uXCIse2NsYXNzOmQuY2xvc2VCdXR0b24sXCJhcmlhLWxhYmVsXCI6aS5jbG9zZSx0aXRsZTppLmNsb3NlLGJpbmQ6dGhpcyxvbmNsaWNrOnRoaXMuX2Nsb3NlfSxhKFwic3BhblwiLHtcImFyaWEtaGlkZGVuXCI6XCJ0cnVlXCIsY2xhc3M6ZC5pY29uQ2xvc2V9KSksbD1gJHt0fV90aXRsZWAscD1gJHt0fV9jb250ZW50YCx1PXM/YShcImgxXCIse2lkOmwsY2xhc3M6ZC50aXRsZX0scyk6bnVsbCxtPXI/YShcImRpdlwiLHtiaW5kOnRoaXMsY2xhc3M6ZC5kaWFsb2cscm9sZTpcImRpYWxvZ1wiLFwiYXJpYS1sYWJlbGxlZGJ5XCI6bCxcImFyaWEtZGVzY3JpYmVkYnlcIjpwLGFmdGVyQ3JlYXRlOnRoaXMuX2NyZWF0ZUZvY3VzVHJhcH0sYyx1LHRoaXMuX3JlbmRlckNvbnRlbnQocCkpOm51bGw7cmV0dXJuIGEoXCJkaXZcIix7dGFiSW5kZXg6LTEsY2xhc3M6dGhpcy5jbGFzc2VzKGQuYmFzZSxuKX0sbSl9X2Rlc3Ryb3lGb2N1c1RyYXAoKXt2YXIgdDtudWxsPT0odD10aGlzLl9mb2N1c1RyYXApfHx0LmRlYWN0aXZhdGUoe29uRGVhY3RpdmF0ZTpudWxsfSksdGhpcy5fZm9jdXNUcmFwPW51bGx9X3RvZ2dsZUZvY3VzVHJhcCgpe2NvbnN0e19mb2N1c1RyYXA6dCxvcGVuOmV9PXRoaXM7dCYmKGU/dC5hY3RpdmF0ZSgpOnQuZGVhY3RpdmF0ZSgpKX1fY3JlYXRlRm9jdXNUcmFwKHQpe3RoaXMuX2Rlc3Ryb3lGb2N1c1RyYXAoKTtjb25zdCBvPXJlcXVlc3RBbmltYXRpb25GcmFtZSgoKCk9Pnt0aGlzLl9mb2N1c1RyYXA9bih0LHtpbml0aWFsRm9jdXM6XCJpbnB1dFwiLG9uRGVhY3RpdmF0ZTp0aGlzLl9jbG9zZX0pLHRoaXMuX3RvZ2dsZUZvY3VzVHJhcCgpfSkpO3RoaXMub3duKGUoKCgpPT5jYW5jZWxBbmltYXRpb25GcmFtZShvKSkpKX1fcmVuZGVyQ29udGVudCh0KXtjb25zdCBlPXRoaXMuY29udGVudDtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgZT9hKFwiZGl2XCIse2NsYXNzOmQuY29udGVudCxpZDp0LGlubmVySFRNTDplfSk6cihlKT9hKFwiZGl2XCIse2NsYXNzOmQuY29udGVudCxpZDp0fSxlLnJlbmRlcigpKTplIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQ/YShcImRpdlwiLHtjbGFzczpkLmNvbnRlbnQsaWQ6dCxiaW5kOmUsYWZ0ZXJDcmVhdGU6dGhpcy5fYXR0YWNoVG9Ob2RlfSk6bnVsbH1fYXR0YWNoVG9Ob2RlKHQpe2NvbnN0IGU9dGhpczt0LmFwcGVuZENoaWxkKGUpfX07dChbbyh7cmVhZE9ubHk6ITB9KV0sbC5wcm90b3R5cGUsXCJjb250YWluZXJcIix2b2lkIDApLHQoW28oKV0sbC5wcm90b3R5cGUsXCJjb250ZW50XCIsdm9pZCAwKSx0KFtvKCldLGwucHJvdG90eXBlLFwib3BlblwiLHZvaWQgMCksdChbbygpLGMoXCJlc3JpL3Q5bi9jb21tb25cIildLGwucHJvdG90eXBlLFwibWVzc2FnZXNcIix2b2lkIDApLHQoW28oe2FsaWFzT2Y6XCJtZXNzYWdlcy5hdXRoLnNpZ25JblwifSldLGwucHJvdG90eXBlLFwidGl0bGVcIix2b2lkIDApLGw9dChbcyhcImVzcmkuaWRlbnRpdHkuSWRlbnRpdHlNb2RhbFwiKV0sbCk7dmFyIHA9bDtleHBvcnQgZGVmYXVsdCBwO1xuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjAvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmNvbnN0IHQ9XCJlc3JpSlNBUElPQXV0aFwiO2NsYXNzIHN7Y29uc3RydWN0b3IodCxzKXt0aGlzLm9BdXRoSW5mbz1udWxsLHRoaXMuc3RvcmFnZT1udWxsLHRoaXMuYXBwSWQ9bnVsbCx0aGlzLmV4cGlyZXM9bnVsbCx0aGlzLnNzbD1udWxsLHRoaXMudG9rZW49bnVsbCx0aGlzLnVzZXJJZD1udWxsLHRoaXMub0F1dGhJbmZvPXQsdGhpcy5zdG9yYWdlPXMsdGhpcy5faW5pdCgpfWlzVmFsaWQoKXtsZXQgdD0hMTtpZih0aGlzLm9BdXRoSW5mbyYmdGhpcy50b2tlbiYmdGhpcy51c2VySWQpe2NvbnN0IHM9RGF0ZS5ub3coKTtpZih0aGlzLmV4cGlyZXM+cyl7KHRoaXMuZXhwaXJlcy1zKS8xZTM+NjAqdGhpcy5vQXV0aEluZm8ubWluVGltZVVudGlsRXhwaXJhdGlvbiYmKHQ9ITApfX1yZXR1cm4gdH1zYXZlKCl7aWYoIXRoaXMuc3RvcmFnZSlyZXR1cm47Y29uc3Qgcz10aGlzLl9sb2FkKCksZT10aGlzLm9BdXRoSW5mbztpZihlJiZlLmF1dGhOYW1lc3BhY2UmJmUucG9ydGFsVXJsKXtsZXQgbz1zW2UuYXV0aE5hbWVzcGFjZV07b3x8KG89c1tlLmF1dGhOYW1lc3BhY2VdPXt9KSxvW2UucG9ydGFsVXJsXT17YXBwSWQ6dGhpcy5hcHBJZD1lLmFwcElkLGV4cGlyZXM6dGhpcy5leHBpcmVzLHNzbDp0aGlzLnNzbCx0b2tlbjp0aGlzLnRva2VuLHVzZXJJZDp0aGlzLnVzZXJJZH07dHJ5e3RoaXMuc3RvcmFnZS5zZXRJdGVtKHQsSlNPTi5zdHJpbmdpZnkocykpfWNhdGNoKGkpe2NvbnNvbGUubG9nKGkpfX19ZGVzdHJveSgpe2NvbnN0IHM9dGhpcy5fbG9hZCgpLGU9dGhpcy5vQXV0aEluZm87aWYoZSYmZS5hcHBJZCYmZS5wb3J0YWxVcmwmJnRoaXMudG9rZW4mJnRoaXMuZXhwaXJlcz5EYXRlLm5vdygpKXtjb25zdCB0PWUucG9ydGFsVXJsLnJlcGxhY2UoL15odHRwOi9pLFwiaHR0cHM6XCIpK1wiL3NoYXJpbmcvcmVzdC9vYXV0aDIvcmV2b2tlVG9rZW5cIixzPW5ldyBGb3JtRGF0YTtpZihzLmFwcGVuZChcImZcIixcImpzb25cIikscy5hcHBlbmQoXCJhdXRoX3Rva2VuXCIsdGhpcy50b2tlbikscy5hcHBlbmQoXCJjbGllbnRfaWRcIixlLmFwcElkKSxzLmFwcGVuZChcInRva2VuX3R5cGVfaGludFwiLFwiYWNjZXNzX3Rva2VuXCIpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG5hdmlnYXRvci5zZW5kQmVhY29uKW5hdmlnYXRvci5zZW5kQmVhY29uKHQscyk7ZWxzZXtjb25zdCBlPW5ldyBYTUxIdHRwUmVxdWVzdDtlLm9wZW4oXCJQT1NUXCIsdCksZS5zZW5kKHMpfX1pZihlJiZlLmF1dGhOYW1lc3BhY2UmJmUucG9ydGFsVXJsJiZ0aGlzLnN0b3JhZ2Upe2NvbnN0IG89c1tlLmF1dGhOYW1lc3BhY2VdO2lmKG8pe2RlbGV0ZSBvW2UucG9ydGFsVXJsXTt0cnl7dGhpcy5zdG9yYWdlLnNldEl0ZW0odCxKU09OLnN0cmluZ2lmeShzKSl9Y2F0Y2goaSl7Y29uc29sZS5sb2coaSl9fX1lJiYoZS5fb0F1dGhDcmVkPW51bGwsdGhpcy5vQXV0aEluZm89bnVsbCl9X2luaXQoKXtjb25zdCB0PXRoaXMuX2xvYWQoKSxzPXRoaXMub0F1dGhJbmZvO2lmKHMmJnMuYXV0aE5hbWVzcGFjZSYmcy5wb3J0YWxVcmwpe2xldCBlPXRbcy5hdXRoTmFtZXNwYWNlXTtlJiYoZT1lW3MucG9ydGFsVXJsXSxlJiYodGhpcy5hcHBJZD1lLmFwcElkLHRoaXMuZXhwaXJlcz1lLmV4cGlyZXMsdGhpcy5zc2w9ZS5zc2wsdGhpcy50b2tlbj1lLnRva2VuLHRoaXMudXNlcklkPWUudXNlcklkKSl9fV9sb2FkKCl7bGV0IHM9e307aWYodGhpcy5zdG9yYWdlKXtjb25zdCBpPXRoaXMuc3RvcmFnZS5nZXRJdGVtKHQpO2lmKGkpdHJ5e3M9SlNPTi5wYXJzZShpKX1jYXRjaChlKXtjb25zb2xlLmxvZyhlKX19cmV0dXJuIHN9fXMucHJvdG90eXBlLmRlY2xhcmVkQ2xhc3M9XCJlc3JpLmlkZW50aXR5Lk9BdXRoQ3JlZGVudGlhbFwiO2V4cG9ydCBkZWZhdWx0IHM7XG4iLCIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yMC9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0e18gYXMgb31mcm9tXCIuLi9jaHVua3MvdHNsaWIuZXM2LmpzXCI7aW1wb3J0e0pTT05TdXBwb3J0IGFzIHR9ZnJvbVwiLi4vY29yZS9KU09OU3VwcG9ydC5qc1wiO2ltcG9ydHtwcm9wZXJ0eSBhcyByfWZyb21cIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvcHJvcGVydHkuanNcIjtpbXBvcnRcIi4uL2NvcmUvaGFzLmpzXCI7aW1wb3J0XCIuLi9jb3JlL2FjY2Vzc29yU3VwcG9ydC9lbnN1cmVUeXBlLmpzXCI7aW1wb3J0XCIuLi9jb3JlL0xvZ2dlci5qc1wiO2ltcG9ydHtzdWJjbGFzcyBhcyBlfWZyb21cIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2RlY29yYXRvcnMvc3ViY2xhc3MuanNcIjt2YXIgcDtsZXQgcz1wPWNsYXNzIGV4dGVuZHMgdHtjb25zdHJ1Y3RvcihvKXtzdXBlcihvKSx0aGlzLl9vQXV0aENyZWQ9bnVsbCx0aGlzLmFwcElkPW51bGwsdGhpcy5hdXRoTmFtZXNwYWNlPVwiL1wiLHRoaXMuZXhwaXJhdGlvbj0yMDE2MCx0aGlzLmZvcmNlTG9naW49ITEsdGhpcy5mb3JjZVVzZXJJZD0hMSx0aGlzLmxvY2FsZT1udWxsLHRoaXMubWluVGltZVVudGlsRXhwaXJhdGlvbj0zMCx0aGlzLnBvcHVwPSExLHRoaXMucG9wdXBDYWxsYmFja1VybD1cIm9hdXRoLWNhbGxiYWNrLmh0bWxcIix0aGlzLnBvcHVwV2luZG93RmVhdHVyZXM9XCJoZWlnaHQ9NDkwLHdpZHRoPTgwMCxyZXNpemFibGUsc2Nyb2xsYmFycyxzdGF0dXNcIix0aGlzLnBvcnRhbFVybD1cImh0dHBzOi8vd3d3LmFyY2dpcy5jb21cIix0aGlzLnByZXNlcnZlVXJsSGFzaD0hMSx0aGlzLnVzZXJJZD1udWxsfWNsb25lKCl7cmV0dXJuIHAuZnJvbUpTT04odGhpcy50b0pTT04oKSl9fTtvKFtyKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJhcHBJZFwiLHZvaWQgMCksbyhbcih7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwiYXV0aE5hbWVzcGFjZVwiLHZvaWQgMCksbyhbcih7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwiZXhwaXJhdGlvblwiLHZvaWQgMCksbyhbcih7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwiZm9yY2VMb2dpblwiLHZvaWQgMCksbyhbcih7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwiZm9yY2VVc2VySWRcIix2b2lkIDApLG8oW3Ioe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcImxvY2FsZVwiLHZvaWQgMCksbyhbcih7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwibWluVGltZVVudGlsRXhwaXJhdGlvblwiLHZvaWQgMCksbyhbcih7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwicG9wdXBcIix2b2lkIDApLG8oW3Ioe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcInBvcHVwQ2FsbGJhY2tVcmxcIix2b2lkIDApLG8oW3Ioe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcInBvcHVwV2luZG93RmVhdHVyZXNcIix2b2lkIDApLG8oW3Ioe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcInBvcnRhbFVybFwiLHZvaWQgMCksbyhbcih7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwicHJlc2VydmVVcmxIYXNoXCIsdm9pZCAwKSxvKFtyKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJ1c2VySWRcIix2b2lkIDApLHM9cD1vKFtlKFwiZXNyaS5pZGVudGl0eS5PQXV0aEluZm9cIildLHMpO3ZhciBpPXM7ZXhwb3J0IGRlZmF1bHQgaTtcbiIsIi8qXG5BbGwgbWF0ZXJpYWwgY29weXJpZ2h0IEVTUkksIEFsbCBSaWdodHMgUmVzZXJ2ZWQsIHVubGVzcyBvdGhlcndpc2Ugc3BlY2lmaWVkLlxuU2VlIGh0dHBzOi8vanMuYXJjZ2lzLmNvbS80LjIwL2VzcmkvY29weXJpZ2h0LnR4dCBmb3IgZGV0YWlscy5cbiovXG5pbXBvcnR7XyBhcyBvfWZyb21cIi4uL2NodW5rcy90c2xpYi5lczYuanNcIjtpbXBvcnR7SlNPTlN1cHBvcnQgYXMgcn1mcm9tXCIuLi9jb3JlL0pTT05TdXBwb3J0LmpzXCI7aW1wb3J0e3Byb3BlcnR5IGFzIGV9ZnJvbVwiLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9wcm9wZXJ0eS5qc1wiO2ltcG9ydFwiLi4vY29yZS9oYXMuanNcIjtpbXBvcnRcIi4uL2NvcmUvYWNjZXNzb3JTdXBwb3J0L2Vuc3VyZVR5cGUuanNcIjtpbXBvcnRcIi4uL2NvcmUvTG9nZ2VyLmpzXCI7aW1wb3J0e3N1YmNsYXNzIGFzIHR9ZnJvbVwiLi4vY29yZS9hY2Nlc3NvclN1cHBvcnQvZGVjb3JhdG9ycy9zdWJjbGFzcy5qc1wiO2xldCBzPWNsYXNzIGV4dGVuZHMgcntjb25zdHJ1Y3RvcihvKXtzdXBlcihvKSx0aGlzLmFkbWluVG9rZW5TZXJ2aWNlVXJsPW51bGwsdGhpcy5jdXJyZW50VmVyc2lvbj1udWxsLHRoaXMuaGFzUG9ydGFsPW51bGwsdGhpcy5oYXNTZXJ2ZXI9bnVsbCx0aGlzLm93bmluZ1N5c3RlbVVybD1udWxsLHRoaXMub3duaW5nVGVuYW50PW51bGwsdGhpcy5zZXJ2ZXI9bnVsbCx0aGlzLnNob3J0TGl2ZWRUb2tlblZhbGlkaXR5PW51bGwsdGhpcy50b2tlblNlcnZpY2VVcmw9bnVsbCx0aGlzLndlYlRpZXJBdXRoPW51bGx9fTtvKFtlKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJhZG1pblRva2VuU2VydmljZVVybFwiLHZvaWQgMCksbyhbZSh7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwiY3VycmVudFZlcnNpb25cIix2b2lkIDApLG8oW2Uoe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcImhhc1BvcnRhbFwiLHZvaWQgMCksbyhbZSh7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwiaGFzU2VydmVyXCIsdm9pZCAwKSxvKFtlKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJvd25pbmdTeXN0ZW1VcmxcIix2b2lkIDApLG8oW2Uoe2pzb246e3dyaXRlOiEwfX0pXSxzLnByb3RvdHlwZSxcIm93bmluZ1RlbmFudFwiLHZvaWQgMCksbyhbZSh7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwic2VydmVyXCIsdm9pZCAwKSxvKFtlKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJzaG9ydExpdmVkVG9rZW5WYWxpZGl0eVwiLHZvaWQgMCksbyhbZSh7anNvbjp7d3JpdGU6ITB9fSldLHMucHJvdG90eXBlLFwidG9rZW5TZXJ2aWNlVXJsXCIsdm9pZCAwKSxvKFtlKHtqc29uOnt3cml0ZTohMH19KV0scy5wcm90b3R5cGUsXCJ3ZWJUaWVyQXV0aFwiLHZvaWQgMCkscz1vKFt0KFwiZXNyaS5pZGVudGl0eS5TZXJ2ZXJJbmZvXCIpXSxzKTt2YXIgaT1zO2V4cG9ydCBkZWZhdWx0IGk7XG4iLCIvKlxuQWxsIG1hdGVyaWFsIGNvcHlyaWdodCBFU1JJLCBBbGwgUmlnaHRzIFJlc2VydmVkLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cblNlZSBodHRwczovL2pzLmFyY2dpcy5jb20vNC4yMC9lc3JpL2NvcHlyaWdodC50eHQgZm9yIGRldGFpbHMuXG4qL1xuaW1wb3J0e2RlcHJlY2F0ZWQgYXMgcn1mcm9tXCIuLi8uLi8uLi9jb3JlL2RlcHJlY2F0ZS5qc1wiO2ltcG9ydCBlIGZyb21cIi4uLy4uLy4uL2NvcmUvaGFzLmpzXCI7aW1wb3J0IG8gZnJvbVwiLi4vLi4vLi4vY29yZS9Mb2dnZXIuanNcIjtmdW5jdGlvbiBjKGMpe3JldHVybiBmdW5jdGlvbihjLHQpe2UoXCJlc3JpLWRlcHJlY2F0aW9uLXdhcm5pbmdzXCIpJiZyKG8uZ2V0TG9nZ2VyKFwiZXNyaS5jb3JlLmFjY2Vzc29yU3VwcG9ydC5kZWNvcmF0b3JzXCIpLFwiJ0ByZW5kZXJhYmxlKCknIGRlY29yYXRvclwiLHt2ZXJzaW9uOlwiNC4xOVwiLHdhcm5PbmNlOiEwfSl9fWV4cG9ydHtjIGFzIHJlbmRlcmFibGV9O1xuIiwiLypcbkFsbCBtYXRlcmlhbCBjb3B5cmlnaHQgRVNSSSwgQWxsIFJpZ2h0cyBSZXNlcnZlZCwgdW5sZXNzIG90aGVyd2lzZSBzcGVjaWZpZWQuXG5TZWUgaHR0cHM6Ly9qcy5hcmNnaXMuY29tLzQuMjAvZXNyaS9jb3B5cmlnaHQudHh0IGZvciBkZXRhaWxzLlxuKi9cbmV4cG9ydHthY2Nlc3NpYmxlSGFuZGxlcn1mcm9tXCIuL2RlY29yYXRvcnMvYWNjZXNzaWJsZUhhbmRsZXIuanNcIjtleHBvcnR7bWVzc2FnZUJ1bmRsZX1mcm9tXCIuL2RlY29yYXRvcnMvbWVzc2FnZUJ1bmRsZS5qc1wiO2V4cG9ydHtyZW5kZXJhYmxlfWZyb21cIi4vZGVjb3JhdG9ycy9yZW5kZXJhYmxlLmpzXCI7ZXhwb3J0e3ZtRXZlbnR9ZnJvbVwiLi9kZWNvcmF0b3JzL3ZtRXZlbnQuanNcIjtleHBvcnR7dHN4fWZyb21cIi4vanN4RmFjdG9yeS5qc1wiO2V4cG9ydHthZGRpdGlvbmFsQWxsb3dlZFRhZ3MsY2xhc3Nlcyxjc3NUcmFuc2l0aW9uLGRpc2NhcmROb2RlLGdldENhbGNpdGVUaGVtZUNsYXNzLGdldFRoZW1lTmFtZSxpc0FjdGl2YXRpb25LZXksaXNEYXJrVGhlbWUsaXNSVEwsa2VlcE1lbnVJdGVtV2l0aGluVmlldyxyZW5kZXJpbmdTYW5pdGl6ZXIsc2FmZUF0dHJzLHN0b3JlTm9kZX1mcm9tXCIuL3dpZGdldFV0aWxzLmpzXCI7ZnVuY3Rpb24gZShlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5yZW5kZXJ9ZnVuY3Rpb24gdChlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgZS5wb3N0TWl4SW5Qcm9wZXJ0aWVzJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLmJ1aWxkUmVuZGVyaW5nJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBlLnBvc3RDcmVhdGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUuc3RhcnR1cH1leHBvcnR7dCBhcyBoYXNEb21Ob2RlLGUgYXMgaXNXaWRnZXR9O1xuIiwiLyohXG4qIGZvY3VzLXRyYXAgNi41LjFcbiogQGxpY2Vuc2UgTUlULCBodHRwczovL2dpdGh1Yi5jb20vZm9jdXMtdHJhcC9mb2N1cy10cmFwL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiovXG5pbXBvcnQgeyB0YWJiYWJsZSwgaXNGb2N1c2FibGUgfSBmcm9tICd0YWJiYWJsZSc7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcblxuICAgIGlmIChlbnVtZXJhYmxlT25seSkge1xuICAgICAgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG52YXIgYWN0aXZlRm9jdXNEZWxheTtcblxudmFyIGFjdGl2ZUZvY3VzVHJhcHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciB0cmFwUXVldWUgPSBbXTtcbiAgcmV0dXJuIHtcbiAgICBhY3RpdmF0ZVRyYXA6IGZ1bmN0aW9uIGFjdGl2YXRlVHJhcCh0cmFwKSB7XG4gICAgICBpZiAodHJhcFF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGFjdGl2ZVRyYXAgPSB0cmFwUXVldWVbdHJhcFF1ZXVlLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgIGlmIChhY3RpdmVUcmFwICE9PSB0cmFwKSB7XG4gICAgICAgICAgYWN0aXZlVHJhcC5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB0cmFwSW5kZXggPSB0cmFwUXVldWUuaW5kZXhPZih0cmFwKTtcblxuICAgICAgaWYgKHRyYXBJbmRleCA9PT0gLTEpIHtcbiAgICAgICAgdHJhcFF1ZXVlLnB1c2godHJhcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBtb3ZlIHRoaXMgZXhpc3RpbmcgdHJhcCB0byB0aGUgZnJvbnQgb2YgdGhlIHF1ZXVlXG4gICAgICAgIHRyYXBRdWV1ZS5zcGxpY2UodHJhcEluZGV4LCAxKTtcbiAgICAgICAgdHJhcFF1ZXVlLnB1c2godHJhcCk7XG4gICAgICB9XG4gICAgfSxcbiAgICBkZWFjdGl2YXRlVHJhcDogZnVuY3Rpb24gZGVhY3RpdmF0ZVRyYXAodHJhcCkge1xuICAgICAgdmFyIHRyYXBJbmRleCA9IHRyYXBRdWV1ZS5pbmRleE9mKHRyYXApO1xuXG4gICAgICBpZiAodHJhcEluZGV4ICE9PSAtMSkge1xuICAgICAgICB0cmFwUXVldWUuc3BsaWNlKHRyYXBJbmRleCwgMSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0cmFwUXVldWUubGVuZ3RoID4gMCkge1xuICAgICAgICB0cmFwUXVldWVbdHJhcFF1ZXVlLmxlbmd0aCAtIDFdLnVucGF1c2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KCk7XG5cbnZhciBpc1NlbGVjdGFibGVJbnB1dCA9IGZ1bmN0aW9uIGlzU2VsZWN0YWJsZUlucHV0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZSAmJiBub2RlLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2lucHV0JyAmJiB0eXBlb2Ygbm9kZS5zZWxlY3QgPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgaXNFc2NhcGVFdmVudCA9IGZ1bmN0aW9uIGlzRXNjYXBlRXZlbnQoZSkge1xuICByZXR1cm4gZS5rZXkgPT09ICdFc2NhcGUnIHx8IGUua2V5ID09PSAnRXNjJyB8fCBlLmtleUNvZGUgPT09IDI3O1xufTtcblxudmFyIGlzVGFiRXZlbnQgPSBmdW5jdGlvbiBpc1RhYkV2ZW50KGUpIHtcbiAgcmV0dXJuIGUua2V5ID09PSAnVGFiJyB8fCBlLmtleUNvZGUgPT09IDk7XG59O1xuXG52YXIgZGVsYXkgPSBmdW5jdGlvbiBkZWxheShmbikge1xuICByZXR1cm4gc2V0VGltZW91dChmbiwgMCk7XG59OyAvLyBBcnJheS5maW5kL2ZpbmRJbmRleCgpIGFyZSBub3Qgc3VwcG9ydGVkIG9uIElFOyB0aGlzIHJlcGxpY2F0ZXMgZW5vdWdoXG4vLyAgb2YgQXJyYXkuZmluZEluZGV4KCkgZm9yIG91ciBuZWVkc1xuXG5cbnZhciBmaW5kSW5kZXggPSBmdW5jdGlvbiBmaW5kSW5kZXgoYXJyLCBmbikge1xuICB2YXIgaWR4ID0gLTE7XG4gIGFyci5ldmVyeShmdW5jdGlvbiAodmFsdWUsIGkpIHtcbiAgICBpZiAoZm4odmFsdWUpKSB7XG4gICAgICBpZHggPSBpO1xuICAgICAgcmV0dXJuIGZhbHNlOyAvLyBicmVha1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlOyAvLyBuZXh0XG4gIH0pO1xuICByZXR1cm4gaWR4O1xufTtcbi8qKlxuICogR2V0IGFuIG9wdGlvbidzIHZhbHVlIHdoZW4gaXQgY291bGQgYmUgYSBwbGFpbiB2YWx1ZSwgb3IgYSBoYW5kbGVyIHRoYXQgcHJvdmlkZXNcbiAqICB0aGUgdmFsdWUuXG4gKiBAcGFyYW0geyp9IHZhbHVlIE9wdGlvbidzIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHsuLi4qfSBbcGFyYW1zXSBBbnkgcGFyYW1ldGVycyB0byBwYXNzIHRvIHRoZSBoYW5kbGVyLCBpZiBgdmFsdWVgIGlzIGEgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7Kn0gVGhlIGB2YWx1ZWAsIG9yIHRoZSBoYW5kbGVyJ3MgcmV0dXJuZWQgdmFsdWUuXG4gKi9cblxuXG52YXIgdmFsdWVPckhhbmRsZXIgPSBmdW5jdGlvbiB2YWx1ZU9ySGFuZGxlcih2YWx1ZSkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwYXJhbXNbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlLmFwcGx5KHZvaWQgMCwgcGFyYW1zKSA6IHZhbHVlO1xufTtcblxudmFyIGNyZWF0ZUZvY3VzVHJhcCA9IGZ1bmN0aW9uIGNyZWF0ZUZvY3VzVHJhcChlbGVtZW50cywgdXNlck9wdGlvbnMpIHtcbiAgdmFyIGRvYyA9IGRvY3VtZW50O1xuXG4gIHZhciBjb25maWcgPSBfb2JqZWN0U3ByZWFkMih7XG4gICAgcmV0dXJuRm9jdXNPbkRlYWN0aXZhdGU6IHRydWUsXG4gICAgZXNjYXBlRGVhY3RpdmF0ZXM6IHRydWUsXG4gICAgZGVsYXlJbml0aWFsRm9jdXM6IHRydWVcbiAgfSwgdXNlck9wdGlvbnMpO1xuXG4gIHZhciBzdGF0ZSA9IHtcbiAgICAvLyBAdHlwZSB7QXJyYXk8SFRNTEVsZW1lbnQ+fVxuICAgIGNvbnRhaW5lcnM6IFtdLFxuICAgIC8vIGxpc3Qgb2Ygb2JqZWN0cyBpZGVudGlmeWluZyB0aGUgZmlyc3QgYW5kIGxhc3QgdGFiYmFibGUgbm9kZXMgaW4gYWxsIGNvbnRhaW5lcnMvZ3JvdXBzIGluXG4gICAgLy8gIHRoZSB0cmFwXG4gICAgLy8gTk9URTogaXQncyBwb3NzaWJsZSB0aGF0IGEgZ3JvdXAgaGFzIG5vIHRhYmJhYmxlIG5vZGVzIGlmIG5vZGVzIGdldCByZW1vdmVkIHdoaWxlIHRoZSB0cmFwXG4gICAgLy8gIGlzIGFjdGl2ZSwgYnV0IHRoZSB0cmFwIHNob3VsZCBuZXZlciBnZXQgdG8gYSBzdGF0ZSB3aGVyZSB0aGVyZSBpc24ndCBhdCBsZWFzdCBvbmUgZ3JvdXBcbiAgICAvLyAgd2l0aCBhdCBsZWFzdCBvbmUgdGFiYmFibGUgbm9kZSBpbiBpdCAodGhhdCB3b3VsZCBsZWFkIHRvIGFuIGVycm9yIGNvbmRpdGlvbiB0aGF0IHdvdWxkXG4gICAgLy8gIHJlc3VsdCBpbiBhbiBlcnJvciBiZWluZyB0aHJvd24pXG4gICAgLy8gQHR5cGUge0FycmF5PHsgY29udGFpbmVyOiBIVE1MRWxlbWVudCwgZmlyc3RUYWJiYWJsZU5vZGU6IEhUTUxFbGVtZW50fG51bGwsIGxhc3RUYWJiYWJsZU5vZGU6IEhUTUxFbGVtZW50fG51bGwgfT59XG4gICAgdGFiYmFibGVHcm91cHM6IFtdLFxuICAgIG5vZGVGb2N1c2VkQmVmb3JlQWN0aXZhdGlvbjogbnVsbCxcbiAgICBtb3N0UmVjZW50bHlGb2N1c2VkTm9kZTogbnVsbCxcbiAgICBhY3RpdmU6IGZhbHNlLFxuICAgIHBhdXNlZDogZmFsc2VcbiAgfTtcbiAgdmFyIHRyYXA7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0IC0tIHNvbWUgcHJpdmF0ZSBmdW5jdGlvbnMgcmVmZXJlbmNlIGl0LCBhbmQgaXRzIG1ldGhvZHMgcmVmZXJlbmNlIHByaXZhdGUgZnVuY3Rpb25zLCBzbyB3ZSBtdXN0IGRlY2xhcmUgaGVyZSBhbmQgZGVmaW5lIGxhdGVyXG5cbiAgdmFyIGdldE9wdGlvbiA9IGZ1bmN0aW9uIGdldE9wdGlvbihjb25maWdPdmVycmlkZU9wdGlvbnMsIG9wdGlvbk5hbWUsIGNvbmZpZ09wdGlvbk5hbWUpIHtcbiAgICByZXR1cm4gY29uZmlnT3ZlcnJpZGVPcHRpb25zICYmIGNvbmZpZ092ZXJyaWRlT3B0aW9uc1tvcHRpb25OYW1lXSAhPT0gdW5kZWZpbmVkID8gY29uZmlnT3ZlcnJpZGVPcHRpb25zW29wdGlvbk5hbWVdIDogY29uZmlnW2NvbmZpZ09wdGlvbk5hbWUgfHwgb3B0aW9uTmFtZV07XG4gIH07XG5cbiAgdmFyIGNvbnRhaW5lcnNDb250YWluID0gZnVuY3Rpb24gY29udGFpbmVyc0NvbnRhaW4oZWxlbWVudCkge1xuICAgIHJldHVybiBzdGF0ZS5jb250YWluZXJzLnNvbWUoZnVuY3Rpb24gKGNvbnRhaW5lcikge1xuICAgICAgcmV0dXJuIGNvbnRhaW5lci5jb250YWlucyhlbGVtZW50KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgZ2V0Tm9kZUZvck9wdGlvbiA9IGZ1bmN0aW9uIGdldE5vZGVGb3JPcHRpb24ob3B0aW9uTmFtZSkge1xuICAgIHZhciBvcHRpb25WYWx1ZSA9IGNvbmZpZ1tvcHRpb25OYW1lXTtcblxuICAgIGlmICghb3B0aW9uVmFsdWUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBub2RlID0gb3B0aW9uVmFsdWU7XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgbm9kZSA9IGRvYy5xdWVyeVNlbGVjdG9yKG9wdGlvblZhbHVlKTtcblxuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImBcIi5jb25jYXQob3B0aW9uTmFtZSwgXCJgIHJlZmVycyB0byBubyBrbm93biBub2RlXCIpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdGlvblZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBub2RlID0gb3B0aW9uVmFsdWUoKTtcblxuICAgICAgaWYgKCFub2RlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImBcIi5jb25jYXQob3B0aW9uTmFtZSwgXCJgIGRpZCBub3QgcmV0dXJuIGEgbm9kZVwiKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH07XG5cbiAgdmFyIGdldEluaXRpYWxGb2N1c05vZGUgPSBmdW5jdGlvbiBnZXRJbml0aWFsRm9jdXNOb2RlKCkge1xuICAgIHZhciBub2RlO1xuXG4gICAgaWYgKGdldE5vZGVGb3JPcHRpb24oJ2luaXRpYWxGb2N1cycpICE9PSBudWxsKSB7XG4gICAgICBub2RlID0gZ2V0Tm9kZUZvck9wdGlvbignaW5pdGlhbEZvY3VzJyk7XG4gICAgfSBlbHNlIGlmIChjb250YWluZXJzQ29udGFpbihkb2MuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgIG5vZGUgPSBkb2MuYWN0aXZlRWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGZpcnN0VGFiYmFibGVHcm91cCA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzWzBdO1xuICAgICAgdmFyIGZpcnN0VGFiYmFibGVOb2RlID0gZmlyc3RUYWJiYWJsZUdyb3VwICYmIGZpcnN0VGFiYmFibGVHcm91cC5maXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgIG5vZGUgPSBmaXJzdFRhYmJhYmxlTm9kZSB8fCBnZXROb2RlRm9yT3B0aW9uKCdmYWxsYmFja0ZvY3VzJyk7XG4gICAgfVxuXG4gICAgaWYgKCFub2RlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdXIgZm9jdXMtdHJhcCBuZWVkcyB0byBoYXZlIGF0IGxlYXN0IG9uZSBmb2N1c2FibGUgZWxlbWVudCcpO1xuICAgIH1cblxuICAgIHJldHVybiBub2RlO1xuICB9O1xuXG4gIHZhciB1cGRhdGVUYWJiYWJsZU5vZGVzID0gZnVuY3Rpb24gdXBkYXRlVGFiYmFibGVOb2RlcygpIHtcbiAgICBzdGF0ZS50YWJiYWJsZUdyb3VwcyA9IHN0YXRlLmNvbnRhaW5lcnMubWFwKGZ1bmN0aW9uIChjb250YWluZXIpIHtcbiAgICAgIHZhciB0YWJiYWJsZU5vZGVzID0gdGFiYmFibGUoY29udGFpbmVyKTtcblxuICAgICAgaWYgKHRhYmJhYmxlTm9kZXMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxuICAgICAgICAgIGZpcnN0VGFiYmFibGVOb2RlOiB0YWJiYWJsZU5vZGVzWzBdLFxuICAgICAgICAgIGxhc3RUYWJiYWJsZU5vZGU6IHRhYmJhYmxlTm9kZXNbdGFiYmFibGVOb2Rlcy5sZW5ndGggLSAxXVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoZ3JvdXApIHtcbiAgICAgIHJldHVybiAhIWdyb3VwO1xuICAgIH0pOyAvLyByZW1vdmUgZ3JvdXBzIHdpdGggbm8gdGFiYmFibGUgbm9kZXNcbiAgICAvLyB0aHJvdyBpZiBubyBncm91cHMgaGF2ZSB0YWJiYWJsZSBub2RlcyBhbmQgd2UgZG9uJ3QgaGF2ZSBhIGZhbGxiYWNrIGZvY3VzIG5vZGUgZWl0aGVyXG5cbiAgICBpZiAoc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIDw9IDAgJiYgIWdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIGZvY3VzLXRyYXAgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjb250YWluZXIgd2l0aCBhdCBsZWFzdCBvbmUgdGFiYmFibGUgbm9kZSBpbiBpdCBhdCBhbGwgdGltZXMnKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHRyeUZvY3VzID0gZnVuY3Rpb24gdHJ5Rm9jdXMobm9kZSkge1xuICAgIGlmIChub2RlID09PSBkb2MuYWN0aXZlRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghbm9kZSB8fCAhbm9kZS5mb2N1cykge1xuICAgICAgdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBub2RlLmZvY3VzKHtcbiAgICAgIHByZXZlbnRTY3JvbGw6ICEhY29uZmlnLnByZXZlbnRTY3JvbGxcbiAgICB9KTtcbiAgICBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSA9IG5vZGU7XG5cbiAgICBpZiAoaXNTZWxlY3RhYmxlSW5wdXQobm9kZSkpIHtcbiAgICAgIG5vZGUuc2VsZWN0KCk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBnZXRSZXR1cm5Gb2N1c05vZGUgPSBmdW5jdGlvbiBnZXRSZXR1cm5Gb2N1c05vZGUocHJldmlvdXNBY3RpdmVFbGVtZW50KSB7XG4gICAgdmFyIG5vZGUgPSBnZXROb2RlRm9yT3B0aW9uKCdzZXRSZXR1cm5Gb2N1cycpO1xuICAgIHJldHVybiBub2RlID8gbm9kZSA6IHByZXZpb3VzQWN0aXZlRWxlbWVudDtcbiAgfTsgLy8gVGhpcyBuZWVkcyB0byBiZSBkb25lIG9uIG1vdXNlZG93biBhbmQgdG91Y2hzdGFydCBpbnN0ZWFkIG9mIGNsaWNrXG4gIC8vIHNvIHRoYXQgaXQgcHJlY2VkZXMgdGhlIGZvY3VzIGV2ZW50LlxuXG5cbiAgdmFyIGNoZWNrUG9pbnRlckRvd24gPSBmdW5jdGlvbiBjaGVja1BvaW50ZXJEb3duKGUpIHtcbiAgICBpZiAoY29udGFpbmVyc0NvbnRhaW4oZS50YXJnZXQpKSB7XG4gICAgICAvLyBhbGxvdyB0aGUgY2xpY2sgc2luY2UgaXQgb2N1cnJlZCBpbnNpZGUgdGhlIHRyYXBcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodmFsdWVPckhhbmRsZXIoY29uZmlnLmNsaWNrT3V0c2lkZURlYWN0aXZhdGVzLCBlKSkge1xuICAgICAgLy8gaW1tZWRpYXRlbHkgZGVhY3RpdmF0ZSB0aGUgdHJhcFxuICAgICAgdHJhcC5kZWFjdGl2YXRlKHtcbiAgICAgICAgLy8gaWYsIG9uIGRlYWN0aXZhdGlvbiwgd2Ugc2hvdWxkIHJldHVybiBmb2N1cyB0byB0aGUgbm9kZSBvcmlnaW5hbGx5LWZvY3VzZWRcbiAgICAgICAgLy8gIHdoZW4gdGhlIHRyYXAgd2FzIGFjdGl2YXRlZCAob3IgdGhlIGNvbmZpZ3VyZWQgYHNldFJldHVybkZvY3VzYCBub2RlKSxcbiAgICAgICAgLy8gIHRoZW4gYXNzdW1lIGl0J3MgYWxzbyBPSyB0byByZXR1cm4gZm9jdXMgdG8gdGhlIG91dHNpZGUgbm9kZSB0aGF0IHdhc1xuICAgICAgICAvLyAganVzdCBjbGlja2VkLCBjYXVzaW5nIGRlYWN0aXZhdGlvbiwgYXMgbG9uZyBhcyB0aGF0IG5vZGUgaXMgZm9jdXNhYmxlO1xuICAgICAgICAvLyAgaWYgaXQgaXNuJ3QgZm9jdXNhYmxlLCB0aGVuIHJldHVybiBmb2N1cyB0byB0aGUgb3JpZ2luYWwgbm9kZSBmb2N1c2VkXG4gICAgICAgIC8vICBvbiBhY3RpdmF0aW9uIChvciB0aGUgY29uZmlndXJlZCBgc2V0UmV0dXJuRm9jdXNgIG5vZGUpXG4gICAgICAgIC8vIE5PVEU6IGJ5IHNldHRpbmcgYHJldHVybkZvY3VzOiBmYWxzZWAsIGRlYWN0aXZhdGUoKSB3aWxsIGRvIG5vdGhpbmcsXG4gICAgICAgIC8vICB3aGljaCB3aWxsIHJlc3VsdCBpbiB0aGUgb3V0c2lkZSBjbGljayBzZXR0aW5nIGZvY3VzIHRvIHRoZSBub2RlXG4gICAgICAgIC8vICB0aGF0IHdhcyBjbGlja2VkLCB3aGV0aGVyIGl0J3MgZm9jdXNhYmxlIG9yIG5vdDsgYnkgc2V0dGluZ1xuICAgICAgICAvLyAgYHJldHVybkZvY3VzOiB0cnVlYCwgd2UnbGwgYXR0ZW1wdCB0byByZS1mb2N1cyB0aGUgbm9kZSBvcmlnaW5hbGx5LWZvY3VzZWRcbiAgICAgICAgLy8gIG9uIGFjdGl2YXRpb24gKG9yIHRoZSBjb25maWd1cmVkIGBzZXRSZXR1cm5Gb2N1c2Agbm9kZSlcbiAgICAgICAgcmV0dXJuRm9jdXM6IGNvbmZpZy5yZXR1cm5Gb2N1c09uRGVhY3RpdmF0ZSAmJiAhaXNGb2N1c2FibGUoZS50YXJnZXQpXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIFRoaXMgaXMgbmVlZGVkIGZvciBtb2JpbGUgZGV2aWNlcy5cbiAgICAvLyAoSWYgd2UnbGwgb25seSBsZXQgYGNsaWNrYCBldmVudHMgdGhyb3VnaCxcbiAgICAvLyB0aGVuIG9uIG1vYmlsZSB0aGV5IHdpbGwgYmUgYmxvY2tlZCBhbnl3YXlzIGlmIGB0b3VjaHN0YXJ0YCBpcyBibG9ja2VkLilcblxuXG4gICAgaWYgKHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5hbGxvd091dHNpZGVDbGljaywgZSkpIHtcbiAgICAgIC8vIGFsbG93IHRoZSBjbGljayBvdXRzaWRlIHRoZSB0cmFwIHRvIHRha2UgcGxhY2VcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIG90aGVyd2lzZSwgcHJldmVudCB0aGUgY2xpY2tcblxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9OyAvLyBJbiBjYXNlIGZvY3VzIGVzY2FwZXMgdGhlIHRyYXAgZm9yIHNvbWUgc3RyYW5nZSByZWFzb24sIHB1bGwgaXQgYmFjayBpbi5cblxuXG4gIHZhciBjaGVja0ZvY3VzSW4gPSBmdW5jdGlvbiBjaGVja0ZvY3VzSW4oZSkge1xuICAgIHZhciB0YXJnZXRDb250YWluZWQgPSBjb250YWluZXJzQ29udGFpbihlLnRhcmdldCk7IC8vIEluIEZpcmVmb3ggd2hlbiB5b3UgVGFiIG91dCBvZiBhbiBpZnJhbWUgdGhlIERvY3VtZW50IGlzIGJyaWVmbHkgZm9jdXNlZC5cblxuICAgIGlmICh0YXJnZXRDb250YWluZWQgfHwgZS50YXJnZXQgaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgaWYgKHRhcmdldENvbnRhaW5lZCkge1xuICAgICAgICBzdGF0ZS5tb3N0UmVjZW50bHlGb2N1c2VkTm9kZSA9IGUudGFyZ2V0O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBlc2NhcGVkISBwdWxsIGl0IGJhY2sgaW4gdG8gd2hlcmUgaXQganVzdCBsZWZ0XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgdHJ5Rm9jdXMoc3RhdGUubW9zdFJlY2VudGx5Rm9jdXNlZE5vZGUgfHwgZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICB9XG4gIH07IC8vIEhpamFjayBUYWIgZXZlbnRzIG9uIHRoZSBmaXJzdCBhbmQgbGFzdCBmb2N1c2FibGUgbm9kZXMgb2YgdGhlIHRyYXAsXG4gIC8vIGluIG9yZGVyIHRvIHByZXZlbnQgZm9jdXMgZnJvbSBlc2NhcGluZy4gSWYgaXQgZXNjYXBlcyBmb3IgZXZlbiBhXG4gIC8vIG1vbWVudCBpdCBjYW4gZW5kIHVwIHNjcm9sbGluZyB0aGUgcGFnZSBhbmQgY2F1c2luZyBjb25mdXNpb24gc28gd2VcbiAgLy8ga2luZCBvZiBuZWVkIHRvIGNhcHR1cmUgdGhlIGFjdGlvbiBhdCB0aGUga2V5ZG93biBwaGFzZS5cblxuXG4gIHZhciBjaGVja1RhYiA9IGZ1bmN0aW9uIGNoZWNrVGFiKGUpIHtcbiAgICB1cGRhdGVUYWJiYWJsZU5vZGVzKCk7XG4gICAgdmFyIGRlc3RpbmF0aW9uTm9kZSA9IG51bGw7XG5cbiAgICBpZiAoc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoID4gMCkge1xuICAgICAgLy8gbWFrZSBzdXJlIHRoZSB0YXJnZXQgaXMgYWN0dWFsbHkgY29udGFpbmVkIGluIGEgZ3JvdXBcbiAgICAgIC8vIE5PVEU6IHRoZSB0YXJnZXQgbWF5IGFsc28gYmUgdGhlIGNvbnRhaW5lciBpdHNlbGYgaWYgaXQncyB0YWJiYWJsZVxuICAgICAgLy8gIHdpdGggdGFiSW5kZXg9Jy0xJyBhbmQgd2FzIGdpdmVuIGluaXRpYWwgZm9jdXNcbiAgICAgIHZhciBjb250YWluZXJJbmRleCA9IGZpbmRJbmRleChzdGF0ZS50YWJiYWJsZUdyb3VwcywgZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IF9yZWYuY29udGFpbmVyO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoY29udGFpbmVySW5kZXggPCAwKSB7XG4gICAgICAgIC8vIHRhcmdldCBub3QgZm91bmQgaW4gYW55IGdyb3VwOiBxdWl0ZSBwb3NzaWJsZSBmb2N1cyBoYXMgZXNjYXBlZCB0aGUgdHJhcCxcbiAgICAgICAgLy8gIHNvIGJyaW5nIGl0IGJhY2sgaW4gdG8uLi5cbiAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAvLyAuLi50aGUgbGFzdCBub2RlIGluIHRoZSBsYXN0IGdyb3VwXG4gICAgICAgICAgZGVzdGluYXRpb25Ob2RlID0gc3RhdGUudGFiYmFibGVHcm91cHNbc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIC0gMV0ubGFzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyAuLi50aGUgZmlyc3Qgbm9kZSBpbiB0aGUgZmlyc3QgZ3JvdXBcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBzdGF0ZS50YWJiYWJsZUdyb3Vwc1swXS5maXJzdFRhYmJhYmxlTm9kZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgIC8vIFJFVkVSU0VcbiAgICAgICAgLy8gaXMgdGhlIHRhcmdldCB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBpbiBhIGdyb3VwP1xuICAgICAgICB2YXIgc3RhcnRPZkdyb3VwSW5kZXggPSBmaW5kSW5kZXgoc3RhdGUudGFiYmFibGVHcm91cHMsIGZ1bmN0aW9uIChfcmVmMikge1xuICAgICAgICAgIHZhciBmaXJzdFRhYmJhYmxlTm9kZSA9IF9yZWYyLmZpcnN0VGFiYmFibGVOb2RlO1xuICAgICAgICAgIHJldHVybiBlLnRhcmdldCA9PT0gZmlyc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChzdGFydE9mR3JvdXBJbmRleCA8IDAgJiYgc3RhdGUudGFiYmFibGVHcm91cHNbY29udGFpbmVySW5kZXhdLmNvbnRhaW5lciA9PT0gZS50YXJnZXQpIHtcbiAgICAgICAgICAvLyBhbiBleGNlcHRpb24gY2FzZSB3aGVyZSB0aGUgdGFyZ2V0IGlzIHRoZSBjb250YWluZXIgaXRzZWxmLCBpbiB3aGljaFxuICAgICAgICAgIC8vICBjYXNlLCB3ZSBzaG91bGQgaGFuZGxlIHNoaWZ0K3RhYiBhcyBpZiBmb2N1cyB3ZXJlIG9uIHRoZSBjb250YWluZXInc1xuICAgICAgICAgIC8vICBmaXJzdCB0YWJiYWJsZSBub2RlLCBhbmQgZ28gdG8gdGhlIGxhc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgTEFTVCBncm91cFxuICAgICAgICAgIHN0YXJ0T2ZHcm91cEluZGV4ID0gY29udGFpbmVySW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc3RhcnRPZkdyb3VwSW5kZXggPj0gMCkge1xuICAgICAgICAgIC8vIFlFUzogdGhlbiBzaGlmdCt0YWIgc2hvdWxkIGdvIHRvIHRoZSBsYXN0IHRhYmJhYmxlIG5vZGUgaW4gdGhlXG4gICAgICAgICAgLy8gIHByZXZpb3VzIGdyb3VwIChhbmQgd3JhcCBhcm91bmQgdG8gdGhlIGxhc3QgdGFiYmFibGUgbm9kZSBvZlxuICAgICAgICAgIC8vICB0aGUgTEFTVCBncm91cCBpZiBpdCdzIHRoZSBmaXJzdCB0YWJiYWJsZSBub2RlIG9mIHRoZSBGSVJTVCBncm91cClcbiAgICAgICAgICB2YXIgZGVzdGluYXRpb25Hcm91cEluZGV4ID0gc3RhcnRPZkdyb3VwSW5kZXggPT09IDAgPyBzdGF0ZS50YWJiYWJsZUdyb3Vwcy5sZW5ndGggLSAxIDogc3RhcnRPZkdyb3VwSW5kZXggLSAxO1xuICAgICAgICAgIHZhciBkZXN0aW5hdGlvbkdyb3VwID0gc3RhdGUudGFiYmFibGVHcm91cHNbZGVzdGluYXRpb25Hcm91cEluZGV4XTtcbiAgICAgICAgICBkZXN0aW5hdGlvbk5vZGUgPSBkZXN0aW5hdGlvbkdyb3VwLmxhc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZPUldBUkRcbiAgICAgICAgLy8gaXMgdGhlIHRhcmdldCB0aGUgbGFzdCB0YWJiYWJsZSBub2RlIGluIGEgZ3JvdXA/XG4gICAgICAgIHZhciBsYXN0T2ZHcm91cEluZGV4ID0gZmluZEluZGV4KHN0YXRlLnRhYmJhYmxlR3JvdXBzLCBmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICAgICAgICB2YXIgbGFzdFRhYmJhYmxlTm9kZSA9IF9yZWYzLmxhc3RUYWJiYWJsZU5vZGU7XG4gICAgICAgICAgcmV0dXJuIGUudGFyZ2V0ID09PSBsYXN0VGFiYmFibGVOb2RlO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobGFzdE9mR3JvdXBJbmRleCA8IDAgJiYgc3RhdGUudGFiYmFibGVHcm91cHNbY29udGFpbmVySW5kZXhdLmNvbnRhaW5lciA9PT0gZS50YXJnZXQpIHtcbiAgICAgICAgICAvLyBhbiBleGNlcHRpb24gY2FzZSB3aGVyZSB0aGUgdGFyZ2V0IGlzIHRoZSBjb250YWluZXIgaXRzZWxmLCBpbiB3aGljaFxuICAgICAgICAgIC8vICBjYXNlLCB3ZSBzaG91bGQgaGFuZGxlIHRhYiBhcyBpZiBmb2N1cyB3ZXJlIG9uIHRoZSBjb250YWluZXInc1xuICAgICAgICAgIC8vICBsYXN0IHRhYmJhYmxlIG5vZGUsIGFuZCBnbyB0byB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgRklSU1QgZ3JvdXBcbiAgICAgICAgICBsYXN0T2ZHcm91cEluZGV4ID0gY29udGFpbmVySW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGFzdE9mR3JvdXBJbmRleCA+PSAwKSB7XG4gICAgICAgICAgLy8gWUVTOiB0aGVuIHRhYiBzaG91bGQgZ28gdG8gdGhlIGZpcnN0IHRhYmJhYmxlIG5vZGUgaW4gdGhlIG5leHRcbiAgICAgICAgICAvLyAgZ3JvdXAgKGFuZCB3cmFwIGFyb3VuZCB0byB0aGUgZmlyc3QgdGFiYmFibGUgbm9kZSBvZiB0aGUgRklSU1RcbiAgICAgICAgICAvLyAgZ3JvdXAgaWYgaXQncyB0aGUgbGFzdCB0YWJiYWJsZSBub2RlIG9mIHRoZSBMQVNUIGdyb3VwKVxuICAgICAgICAgIHZhciBfZGVzdGluYXRpb25Hcm91cEluZGV4ID0gbGFzdE9mR3JvdXBJbmRleCA9PT0gc3RhdGUudGFiYmFibGVHcm91cHMubGVuZ3RoIC0gMSA/IDAgOiBsYXN0T2ZHcm91cEluZGV4ICsgMTtcblxuICAgICAgICAgIHZhciBfZGVzdGluYXRpb25Hcm91cCA9IHN0YXRlLnRhYmJhYmxlR3JvdXBzW19kZXN0aW5hdGlvbkdyb3VwSW5kZXhdO1xuICAgICAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IF9kZXN0aW5hdGlvbkdyb3VwLmZpcnN0VGFiYmFibGVOb2RlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlc3RpbmF0aW9uTm9kZSA9IGdldE5vZGVGb3JPcHRpb24oJ2ZhbGxiYWNrRm9jdXMnKTtcbiAgICB9XG5cbiAgICBpZiAoZGVzdGluYXRpb25Ob2RlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0cnlGb2N1cyhkZXN0aW5hdGlvbk5vZGUpO1xuICAgIH0gLy8gZWxzZSwgbGV0IHRoZSBicm93c2VyIHRha2UgY2FyZSBvZiBbc2hpZnQrXXRhYiBhbmQgbW92ZSB0aGUgZm9jdXNcblxuICB9O1xuXG4gIHZhciBjaGVja0tleSA9IGZ1bmN0aW9uIGNoZWNrS2V5KGUpIHtcbiAgICBpZiAoY29uZmlnLmVzY2FwZURlYWN0aXZhdGVzICE9PSBmYWxzZSAmJiBpc0VzY2FwZUV2ZW50KGUpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0cmFwLmRlYWN0aXZhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaXNUYWJFdmVudChlKSkge1xuICAgICAgY2hlY2tUYWIoZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9O1xuXG4gIHZhciBjaGVja0NsaWNrID0gZnVuY3Rpb24gY2hlY2tDbGljayhlKSB7XG4gICAgaWYgKHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5jbGlja091dHNpZGVEZWFjdGl2YXRlcywgZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY29udGFpbmVyc0NvbnRhaW4oZS50YXJnZXQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlT3JIYW5kbGVyKGNvbmZpZy5hbGxvd091dHNpZGVDbGljaywgZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgfTsgLy9cbiAgLy8gRVZFTlQgTElTVEVORVJTXG4gIC8vXG5cblxuICB2YXIgYWRkTGlzdGVuZXJzID0gZnVuY3Rpb24gYWRkTGlzdGVuZXJzKCkge1xuICAgIGlmICghc3RhdGUuYWN0aXZlKSB7XG4gICAgICByZXR1cm47XG4gICAgfSAvLyBUaGVyZSBjYW4gYmUgb25seSBvbmUgbGlzdGVuaW5nIGZvY3VzIHRyYXAgYXQgYSB0aW1lXG5cblxuICAgIGFjdGl2ZUZvY3VzVHJhcHMuYWN0aXZhdGVUcmFwKHRyYXApOyAvLyBEZWxheSBlbnN1cmVzIHRoYXQgdGhlIGZvY3VzZWQgZWxlbWVudCBkb2Vzbid0IGNhcHR1cmUgdGhlIGV2ZW50XG4gICAgLy8gdGhhdCBjYXVzZWQgdGhlIGZvY3VzIHRyYXAgYWN0aXZhdGlvbi5cblxuICAgIGFjdGl2ZUZvY3VzRGVsYXkgPSBjb25maWcuZGVsYXlJbml0aWFsRm9jdXMgPyBkZWxheShmdW5jdGlvbiAoKSB7XG4gICAgICB0cnlGb2N1cyhnZXRJbml0aWFsRm9jdXNOb2RlKCkpO1xuICAgIH0pIDogdHJ5Rm9jdXMoZ2V0SW5pdGlhbEZvY3VzTm9kZSgpKTtcbiAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGNoZWNrRm9jdXNJbiwgdHJ1ZSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNoZWNrUG9pbnRlckRvd24sIHtcbiAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICBwYXNzaXZlOiBmYWxzZVxuICAgIH0pO1xuICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgY2hlY2tQb2ludGVyRG93biwge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tDbGljaywge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBjaGVja0tleSwge1xuICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgfSk7XG4gICAgcmV0dXJuIHRyYXA7XG4gIH07XG5cbiAgdmFyIHJlbW92ZUxpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBpZiAoIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgY2hlY2tGb2N1c0luLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2hlY2tQb2ludGVyRG93biwgdHJ1ZSk7XG4gICAgZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBjaGVja1BvaW50ZXJEb3duLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0NsaWNrLCB0cnVlKTtcbiAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGNoZWNrS2V5LCB0cnVlKTtcbiAgICByZXR1cm4gdHJhcDtcbiAgfTsgLy9cbiAgLy8gVFJBUCBERUZJTklUSU9OXG4gIC8vXG5cblxuICB0cmFwID0ge1xuICAgIGFjdGl2YXRlOiBmdW5jdGlvbiBhY3RpdmF0ZShhY3RpdmF0ZU9wdGlvbnMpIHtcbiAgICAgIGlmIChzdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHZhciBvbkFjdGl2YXRlID0gZ2V0T3B0aW9uKGFjdGl2YXRlT3B0aW9ucywgJ29uQWN0aXZhdGUnKTtcbiAgICAgIHZhciBvblBvc3RBY3RpdmF0ZSA9IGdldE9wdGlvbihhY3RpdmF0ZU9wdGlvbnMsICdvblBvc3RBY3RpdmF0ZScpO1xuICAgICAgdmFyIGNoZWNrQ2FuRm9jdXNUcmFwID0gZ2V0T3B0aW9uKGFjdGl2YXRlT3B0aW9ucywgJ2NoZWNrQ2FuRm9jdXNUcmFwJyk7XG5cbiAgICAgIGlmICghY2hlY2tDYW5Gb2N1c1RyYXApIHtcbiAgICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgfVxuXG4gICAgICBzdGF0ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgc3RhdGUucGF1c2VkID0gZmFsc2U7XG4gICAgICBzdGF0ZS5ub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24gPSBkb2MuYWN0aXZlRWxlbWVudDtcblxuICAgICAgaWYgKG9uQWN0aXZhdGUpIHtcbiAgICAgICAgb25BY3RpdmF0ZSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZmluaXNoQWN0aXZhdGlvbiA9IGZ1bmN0aW9uIGZpbmlzaEFjdGl2YXRpb24oKSB7XG4gICAgICAgIGlmIChjaGVja0NhbkZvY3VzVHJhcCkge1xuICAgICAgICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZExpc3RlbmVycygpO1xuXG4gICAgICAgIGlmIChvblBvc3RBY3RpdmF0ZSkge1xuICAgICAgICAgIG9uUG9zdEFjdGl2YXRlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIGlmIChjaGVja0NhbkZvY3VzVHJhcCkge1xuICAgICAgICBjaGVja0NhbkZvY3VzVHJhcChzdGF0ZS5jb250YWluZXJzLmNvbmNhdCgpKS50aGVuKGZpbmlzaEFjdGl2YXRpb24sIGZpbmlzaEFjdGl2YXRpb24pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgZmluaXNoQWN0aXZhdGlvbigpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBkZWFjdGl2YXRlOiBmdW5jdGlvbiBkZWFjdGl2YXRlKGRlYWN0aXZhdGVPcHRpb25zKSB7XG4gICAgICBpZiAoIXN0YXRlLmFjdGl2ZSkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgY2xlYXJUaW1lb3V0KGFjdGl2ZUZvY3VzRGVsYXkpO1xuICAgICAgcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgICBzdGF0ZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgYWN0aXZlRm9jdXNUcmFwcy5kZWFjdGl2YXRlVHJhcCh0cmFwKTtcbiAgICAgIHZhciBvbkRlYWN0aXZhdGUgPSBnZXRPcHRpb24oZGVhY3RpdmF0ZU9wdGlvbnMsICdvbkRlYWN0aXZhdGUnKTtcbiAgICAgIHZhciBvblBvc3REZWFjdGl2YXRlID0gZ2V0T3B0aW9uKGRlYWN0aXZhdGVPcHRpb25zLCAnb25Qb3N0RGVhY3RpdmF0ZScpO1xuICAgICAgdmFyIGNoZWNrQ2FuUmV0dXJuRm9jdXMgPSBnZXRPcHRpb24oZGVhY3RpdmF0ZU9wdGlvbnMsICdjaGVja0NhblJldHVybkZvY3VzJyk7XG5cbiAgICAgIGlmIChvbkRlYWN0aXZhdGUpIHtcbiAgICAgICAgb25EZWFjdGl2YXRlKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZXR1cm5Gb2N1cyA9IGdldE9wdGlvbihkZWFjdGl2YXRlT3B0aW9ucywgJ3JldHVybkZvY3VzJywgJ3JldHVybkZvY3VzT25EZWFjdGl2YXRlJyk7XG5cbiAgICAgIHZhciBmaW5pc2hEZWFjdGl2YXRpb24gPSBmdW5jdGlvbiBmaW5pc2hEZWFjdGl2YXRpb24oKSB7XG4gICAgICAgIGRlbGF5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAocmV0dXJuRm9jdXMpIHtcbiAgICAgICAgICAgIHRyeUZvY3VzKGdldFJldHVybkZvY3VzTm9kZShzdGF0ZS5ub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24pKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob25Qb3N0RGVhY3RpdmF0ZSkge1xuICAgICAgICAgICAgb25Qb3N0RGVhY3RpdmF0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBpZiAocmV0dXJuRm9jdXMgJiYgY2hlY2tDYW5SZXR1cm5Gb2N1cykge1xuICAgICAgICBjaGVja0NhblJldHVybkZvY3VzKGdldFJldHVybkZvY3VzTm9kZShzdGF0ZS5ub2RlRm9jdXNlZEJlZm9yZUFjdGl2YXRpb24pKS50aGVuKGZpbmlzaERlYWN0aXZhdGlvbiwgZmluaXNoRGVhY3RpdmF0aW9uKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGZpbmlzaERlYWN0aXZhdGlvbigpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBwYXVzZTogZnVuY3Rpb24gcGF1c2UoKSB7XG4gICAgICBpZiAoc3RhdGUucGF1c2VkIHx8ICFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLnBhdXNlZCA9IHRydWU7XG4gICAgICByZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgdW5wYXVzZTogZnVuY3Rpb24gdW5wYXVzZSgpIHtcbiAgICAgIGlmICghc3RhdGUucGF1c2VkIHx8ICFzdGF0ZS5hY3RpdmUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLnBhdXNlZCA9IGZhbHNlO1xuICAgICAgdXBkYXRlVGFiYmFibGVOb2RlcygpO1xuICAgICAgYWRkTGlzdGVuZXJzKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHVwZGF0ZUNvbnRhaW5lckVsZW1lbnRzOiBmdW5jdGlvbiB1cGRhdGVDb250YWluZXJFbGVtZW50cyhjb250YWluZXJFbGVtZW50cykge1xuICAgICAgdmFyIGVsZW1lbnRzQXNBcnJheSA9IFtdLmNvbmNhdChjb250YWluZXJFbGVtZW50cykuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgc3RhdGUuY29udGFpbmVycyA9IGVsZW1lbnRzQXNBcnJheS5tYXAoZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJyA/IGRvYy5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpIDogZWxlbWVudDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoc3RhdGUuYWN0aXZlKSB7XG4gICAgICAgIHVwZGF0ZVRhYmJhYmxlTm9kZXMoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9OyAvLyBpbml0aWFsaXplIGNvbnRhaW5lciBlbGVtZW50c1xuXG4gIHRyYXAudXBkYXRlQ29udGFpbmVyRWxlbWVudHMoZWxlbWVudHMpO1xuICByZXR1cm4gdHJhcDtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUZvY3VzVHJhcCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm9jdXMtdHJhcC5lc20uanMubWFwXG4iLCIvKiFcbiogdGFiYmFibGUgNS4yLjFcbiogQGxpY2Vuc2UgTUlULCBodHRwczovL2dpdGh1Yi5jb20vZm9jdXMtdHJhcC90YWJiYWJsZS9ibG9iL21hc3Rlci9MSUNFTlNFXG4qL1xudmFyIGNhbmRpZGF0ZVNlbGVjdG9ycyA9IFsnaW5wdXQnLCAnc2VsZWN0JywgJ3RleHRhcmVhJywgJ2FbaHJlZl0nLCAnYnV0dG9uJywgJ1t0YWJpbmRleF0nLCAnYXVkaW9bY29udHJvbHNdJywgJ3ZpZGVvW2NvbnRyb2xzXScsICdbY29udGVudGVkaXRhYmxlXTpub3QoW2NvbnRlbnRlZGl0YWJsZT1cImZhbHNlXCJdKScsICdkZXRhaWxzPnN1bW1hcnk6Zmlyc3Qtb2YtdHlwZScsICdkZXRhaWxzJ107XG52YXIgY2FuZGlkYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jYW5kaWRhdGVTZWxlY3RvcnMuam9pbignLCcpO1xudmFyIG1hdGNoZXMgPSB0eXBlb2YgRWxlbWVudCA9PT0gJ3VuZGVmaW5lZCcgPyBmdW5jdGlvbiAoKSB7fSA6IEVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMgfHwgRWxlbWVudC5wcm90b3R5cGUubXNNYXRjaGVzU2VsZWN0b3IgfHwgRWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuXG52YXIgZ2V0Q2FuZGlkYXRlcyA9IGZ1bmN0aW9uIGdldENhbmRpZGF0ZXMoZWwsIGluY2x1ZGVDb250YWluZXIsIGZpbHRlcikge1xuICB2YXIgY2FuZGlkYXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShlbC5xdWVyeVNlbGVjdG9yQWxsKGNhbmRpZGF0ZVNlbGVjdG9yKSk7XG5cbiAgaWYgKGluY2x1ZGVDb250YWluZXIgJiYgbWF0Y2hlcy5jYWxsKGVsLCBjYW5kaWRhdGVTZWxlY3RvcikpIHtcbiAgICBjYW5kaWRhdGVzLnVuc2hpZnQoZWwpO1xuICB9XG5cbiAgY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXMuZmlsdGVyKGZpbHRlcik7XG4gIHJldHVybiBjYW5kaWRhdGVzO1xufTtcblxudmFyIGlzQ29udGVudEVkaXRhYmxlID0gZnVuY3Rpb24gaXNDb250ZW50RWRpdGFibGUobm9kZSkge1xuICByZXR1cm4gbm9kZS5jb250ZW50RWRpdGFibGUgPT09ICd0cnVlJztcbn07XG5cbnZhciBnZXRUYWJpbmRleCA9IGZ1bmN0aW9uIGdldFRhYmluZGV4KG5vZGUpIHtcbiAgdmFyIHRhYmluZGV4QXR0ciA9IHBhcnNlSW50KG5vZGUuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpLCAxMCk7XG5cbiAgaWYgKCFpc05hTih0YWJpbmRleEF0dHIpKSB7XG4gICAgcmV0dXJuIHRhYmluZGV4QXR0cjtcbiAgfSAvLyBCcm93c2VycyBkbyBub3QgcmV0dXJuIGB0YWJJbmRleGAgY29ycmVjdGx5IGZvciBjb250ZW50RWRpdGFibGUgbm9kZXM7XG4gIC8vIHNvIGlmIHRoZXkgZG9uJ3QgaGF2ZSBhIHRhYmluZGV4IGF0dHJpYnV0ZSBzcGVjaWZpY2FsbHkgc2V0LCBhc3N1bWUgaXQncyAwLlxuXG5cbiAgaWYgKGlzQ29udGVudEVkaXRhYmxlKG5vZGUpKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gLy8gaW4gQ2hyb21lLCA8ZGV0YWlscy8+LCA8YXVkaW8gY29udHJvbHMvPiBhbmQgPHZpZGVvIGNvbnRyb2xzLz4gZWxlbWVudHMgZ2V0IGEgZGVmYXVsdFxuICAvLyAgYHRhYkluZGV4YCBvZiAtMSB3aGVuIHRoZSAndGFiaW5kZXgnIGF0dHJpYnV0ZSBpc24ndCBzcGVjaWZpZWQgaW4gdGhlIERPTSxcbiAgLy8gIHlldCB0aGV5IGFyZSBzdGlsbCBwYXJ0IG9mIHRoZSByZWd1bGFyIHRhYiBvcmRlcjsgaW4gRkYsIHRoZXkgZ2V0IGEgZGVmYXVsdFxuICAvLyAgYHRhYkluZGV4YCBvZiAwOyBzaW5jZSBDaHJvbWUgc3RpbGwgcHV0cyB0aG9zZSBlbGVtZW50cyBpbiB0aGUgcmVndWxhciB0YWJcbiAgLy8gIG9yZGVyLCBjb25zaWRlciB0aGVpciB0YWIgaW5kZXggdG8gYmUgMC5cblxuXG4gIGlmICgobm9kZS5ub2RlTmFtZSA9PT0gJ0FVRElPJyB8fCBub2RlLm5vZGVOYW1lID09PSAnVklERU8nIHx8IG5vZGUubm9kZU5hbWUgPT09ICdERVRBSUxTJykgJiYgbm9kZS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgPT09IG51bGwpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuXG4gIHJldHVybiBub2RlLnRhYkluZGV4O1xufTtcblxudmFyIHNvcnRPcmRlcmVkVGFiYmFibGVzID0gZnVuY3Rpb24gc29ydE9yZGVyZWRUYWJiYWJsZXMoYSwgYikge1xuICByZXR1cm4gYS50YWJJbmRleCA9PT0gYi50YWJJbmRleCA/IGEuZG9jdW1lbnRPcmRlciAtIGIuZG9jdW1lbnRPcmRlciA6IGEudGFiSW5kZXggLSBiLnRhYkluZGV4O1xufTtcblxudmFyIGlzSW5wdXQgPSBmdW5jdGlvbiBpc0lucHV0KG5vZGUpIHtcbiAgcmV0dXJuIG5vZGUudGFnTmFtZSA9PT0gJ0lOUFVUJztcbn07XG5cbnZhciBpc0hpZGRlbklucHV0ID0gZnVuY3Rpb24gaXNIaWRkZW5JbnB1dChub2RlKSB7XG4gIHJldHVybiBpc0lucHV0KG5vZGUpICYmIG5vZGUudHlwZSA9PT0gJ2hpZGRlbic7XG59O1xuXG52YXIgaXNEZXRhaWxzV2l0aFN1bW1hcnkgPSBmdW5jdGlvbiBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSB7XG4gIHZhciByID0gbm9kZS50YWdOYW1lID09PSAnREVUQUlMUycgJiYgQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KG5vZGUuY2hpbGRyZW4pLnNvbWUoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgcmV0dXJuIGNoaWxkLnRhZ05hbWUgPT09ICdTVU1NQVJZJztcbiAgfSk7XG4gIHJldHVybiByO1xufTtcblxudmFyIGdldENoZWNrZWRSYWRpbyA9IGZ1bmN0aW9uIGdldENoZWNrZWRSYWRpbyhub2RlcywgZm9ybSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5vZGVzW2ldLmNoZWNrZWQgJiYgbm9kZXNbaV0uZm9ybSA9PT0gZm9ybSkge1xuICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuICAgIH1cbiAgfVxufTtcblxudmFyIGlzVGFiYmFibGVSYWRpbyA9IGZ1bmN0aW9uIGlzVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIGlmICghbm9kZS5uYW1lKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICB2YXIgcmFkaW9TY29wZSA9IG5vZGUuZm9ybSB8fCBub2RlLm93bmVyRG9jdW1lbnQ7XG5cbiAgdmFyIHF1ZXJ5UmFkaW9zID0gZnVuY3Rpb24gcXVlcnlSYWRpb3MobmFtZSkge1xuICAgIHJldHVybiByYWRpb1Njb3BlLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXVtuYW1lPVwiJyArIG5hbWUgKyAnXCJdJyk7XG4gIH07XG5cbiAgdmFyIHJhZGlvU2V0O1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LkNTUyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5DU1MuZXNjYXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyh3aW5kb3cuQ1NTLmVzY2FwZShub2RlLm5hbWUpKTtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgcmFkaW9TZXQgPSBxdWVyeVJhZGlvcyhub2RlLm5hbWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0xvb2tzIGxpa2UgeW91IGhhdmUgYSByYWRpbyBidXR0b24gd2l0aCBhIG5hbWUgYXR0cmlidXRlIGNvbnRhaW5pbmcgaW52YWxpZCBDU1Mgc2VsZWN0b3IgY2hhcmFjdGVycyBhbmQgbmVlZCB0aGUgQ1NTLmVzY2FwZSBwb2x5ZmlsbDogJXMnLCBlcnIubWVzc2FnZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNoZWNrZWQgPSBnZXRDaGVja2VkUmFkaW8ocmFkaW9TZXQsIG5vZGUuZm9ybSk7XG4gIHJldHVybiAhY2hlY2tlZCB8fCBjaGVja2VkID09PSBub2RlO1xufTtcblxudmFyIGlzUmFkaW8gPSBmdW5jdGlvbiBpc1JhZGlvKG5vZGUpIHtcbiAgcmV0dXJuIGlzSW5wdXQobm9kZSkgJiYgbm9kZS50eXBlID09PSAncmFkaW8nO1xufTtcblxudmFyIGlzTm9uVGFiYmFibGVSYWRpbyA9IGZ1bmN0aW9uIGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB7XG4gIHJldHVybiBpc1JhZGlvKG5vZGUpICYmICFpc1RhYmJhYmxlUmFkaW8obm9kZSk7XG59O1xuXG52YXIgaXNIaWRkZW4gPSBmdW5jdGlvbiBpc0hpZGRlbihub2RlLCBkaXNwbGF5Q2hlY2spIHtcbiAgaWYgKGdldENvbXB1dGVkU3R5bGUobm9kZSkudmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHZhciBpc0RpcmVjdFN1bW1hcnkgPSBtYXRjaGVzLmNhbGwobm9kZSwgJ2RldGFpbHM+c3VtbWFyeTpmaXJzdC1vZi10eXBlJyk7XG4gIHZhciBub2RlVW5kZXJEZXRhaWxzID0gaXNEaXJlY3RTdW1tYXJ5ID8gbm9kZS5wYXJlbnRFbGVtZW50IDogbm9kZTtcblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGVVbmRlckRldGFpbHMsICdkZXRhaWxzOm5vdChbb3Blbl0pIConKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCFkaXNwbGF5Q2hlY2sgfHwgZGlzcGxheUNoZWNrID09PSAnZnVsbCcpIHtcbiAgICB3aGlsZSAobm9kZSkge1xuICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUobm9kZSkuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuXG4gICAgICBub2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgfSBlbHNlIGlmIChkaXNwbGF5Q2hlY2sgPT09ICdub24temVyby1hcmVhJykge1xuICAgIHZhciBfbm9kZSRnZXRCb3VuZGluZ0NsaWUgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICB3aWR0aCA9IF9ub2RlJGdldEJvdW5kaW5nQ2xpZS53aWR0aCxcbiAgICAgICAgaGVpZ2h0ID0gX25vZGUkZ2V0Qm91bmRpbmdDbGllLmhlaWdodDtcblxuICAgIHJldHVybiB3aWR0aCA9PT0gMCAmJiBoZWlnaHQgPT09IDA7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59OyAvLyBmb3JtIGZpZWxkcyAobmVzdGVkKSBpbnNpZGUgYSBkaXNhYmxlZCBmaWVsZHNldCBhcmUgbm90IGZvY3VzYWJsZS90YWJiYWJsZVxuLy8gIHVubGVzcyB0aGV5IGFyZSBpbiB0aGUgX2ZpcnN0XyA8bGVnZW5kPiBlbGVtZW50IG9mIHRoZSB0b3AtbW9zdCBkaXNhYmxlZFxuLy8gIGZpZWxkc2V0XG5cblxudmFyIGlzRGlzYWJsZWRGcm9tRmllbGRzZXQgPSBmdW5jdGlvbiBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0KG5vZGUpIHtcbiAgaWYgKGlzSW5wdXQobm9kZSkgfHwgbm9kZS50YWdOYW1lID09PSAnU0VMRUNUJyB8fCBub2RlLnRhZ05hbWUgPT09ICdURVhUQVJFQScgfHwgbm9kZS50YWdOYW1lID09PSAnQlVUVE9OJykge1xuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuXG4gICAgd2hpbGUgKHBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChwYXJlbnROb2RlLnRhZ05hbWUgPT09ICdGSUVMRFNFVCcgJiYgcGFyZW50Tm9kZS5kaXNhYmxlZCkge1xuICAgICAgICAvLyBsb29rIGZvciB0aGUgZmlyc3QgPGxlZ2VuZD4gYXMgYW4gaW1tZWRpYXRlIGNoaWxkIG9mIHRoZSBkaXNhYmxlZFxuICAgICAgICAvLyAgPGZpZWxkc2V0PjogaWYgdGhlIG5vZGUgaXMgaW4gdGhhdCBsZWdlbmQsIGl0J2xsIGJlIGVuYWJsZWQgZXZlblxuICAgICAgICAvLyAgdGhvdWdoIHRoZSBmaWVsZHNldCBpcyBkaXNhYmxlZDsgb3RoZXJ3aXNlLCB0aGUgbm9kZSBpcyBpbiBhXG4gICAgICAgIC8vICBzZWNvbmRhcnkvc3Vic2VxdWVudCBsZWdlbmQsIG9yIHNvbWV3aGVyZSBlbHNlIHdpdGhpbiB0aGUgZmllbGRzZXRcbiAgICAgICAgLy8gIChob3dldmVyIGRlZXAgbmVzdGVkKSBhbmQgaXQnbGwgYmUgZGlzYWJsZWRcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGNoaWxkID0gcGFyZW50Tm9kZS5jaGlsZHJlbi5pdGVtKGkpO1xuXG4gICAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUgPT09ICdMRUdFTkQnKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGQuY29udGFpbnMobm9kZSkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSAvLyB0aGUgbm9kZSBpc24ndCBpbiB0aGUgZmlyc3QgbGVnZW5kIChpbiBkb2Mgb3JkZXIpLCBzbyBubyBtYXR0ZXJcbiAgICAgICAgICAgIC8vICB3aGVyZSBpdCBpcyBub3csIGl0J2xsIGJlIGRpc2FibGVkXG5cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIHRoZSBub2RlIGlzbid0IGluIGEgbGVnZW5kLCBzbyBubyBtYXR0ZXIgd2hlcmUgaXQgaXMgbm93LCBpdCdsbCBiZSBkaXNhYmxlZFxuXG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG5cbiAgICAgIHBhcmVudE5vZGUgPSBwYXJlbnROb2RlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICB9IC8vIGVsc2UsIG5vZGUncyB0YWJiYWJsZS9mb2N1c2FibGUgc3RhdGUgc2hvdWxkIG5vdCBiZSBhZmZlY3RlZCBieSBhIGZpZWxkc2V0J3NcbiAgLy8gIGVuYWJsZWQvZGlzYWJsZWQgc3RhdGVcblxuXG4gIHJldHVybiBmYWxzZTtcbn07XG5cbnZhciBpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKSB7XG4gIGlmIChub2RlLmRpc2FibGVkIHx8IGlzSGlkZGVuSW5wdXQobm9kZSkgfHwgaXNIaWRkZW4obm9kZSwgb3B0aW9ucy5kaXNwbGF5Q2hlY2spIHx8IC8vIEZvciBhIGRldGFpbHMgZWxlbWVudCB3aXRoIGEgc3VtbWFyeSwgdGhlIHN1bW1hcnkgZWxlbWVudCBnZXRzIHRoZSBmb2N1c1xuICBpc0RldGFpbHNXaXRoU3VtbWFyeShub2RlKSB8fCBpc0Rpc2FibGVkRnJvbUZpZWxkc2V0KG5vZGUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG52YXIgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlID0gZnVuY3Rpb24gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlKG9wdGlvbnMsIG5vZGUpIHtcbiAgaWYgKCFpc05vZGVNYXRjaGluZ1NlbGVjdG9yRm9jdXNhYmxlKG9wdGlvbnMsIG5vZGUpIHx8IGlzTm9uVGFiYmFibGVSYWRpbyhub2RlKSB8fCBnZXRUYWJpbmRleChub2RlKSA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciB0YWJiYWJsZSA9IGZ1bmN0aW9uIHRhYmJhYmxlKGVsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcmVndWxhclRhYmJhYmxlcyA9IFtdO1xuICB2YXIgb3JkZXJlZFRhYmJhYmxlcyA9IFtdO1xuICB2YXIgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoZWwsIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvclRhYmJhYmxlLmJpbmQobnVsbCwgb3B0aW9ucykpO1xuICBjYW5kaWRhdGVzLmZvckVhY2goZnVuY3Rpb24gKGNhbmRpZGF0ZSwgaSkge1xuICAgIHZhciBjYW5kaWRhdGVUYWJpbmRleCA9IGdldFRhYmluZGV4KGNhbmRpZGF0ZSk7XG5cbiAgICBpZiAoY2FuZGlkYXRlVGFiaW5kZXggPT09IDApIHtcbiAgICAgIHJlZ3VsYXJUYWJiYWJsZXMucHVzaChjYW5kaWRhdGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcmRlcmVkVGFiYmFibGVzLnB1c2goe1xuICAgICAgICBkb2N1bWVudE9yZGVyOiBpLFxuICAgICAgICB0YWJJbmRleDogY2FuZGlkYXRlVGFiaW5kZXgsXG4gICAgICAgIG5vZGU6IGNhbmRpZGF0ZVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIHRhYmJhYmxlTm9kZXMgPSBvcmRlcmVkVGFiYmFibGVzLnNvcnQoc29ydE9yZGVyZWRUYWJiYWJsZXMpLm1hcChmdW5jdGlvbiAoYSkge1xuICAgIHJldHVybiBhLm5vZGU7XG4gIH0pLmNvbmNhdChyZWd1bGFyVGFiYmFibGVzKTtcbiAgcmV0dXJuIHRhYmJhYmxlTm9kZXM7XG59O1xuXG52YXIgZm9jdXNhYmxlID0gZnVuY3Rpb24gZm9jdXNhYmxlKGVsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgY2FuZGlkYXRlcyA9IGdldENhbmRpZGF0ZXMoZWwsIG9wdGlvbnMuaW5jbHVkZUNvbnRhaW5lciwgaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZS5iaW5kKG51bGwsIG9wdGlvbnMpKTtcbiAgcmV0dXJuIGNhbmRpZGF0ZXM7XG59O1xuXG52YXIgaXNUYWJiYWJsZSA9IGZ1bmN0aW9uIGlzVGFiYmFibGUobm9kZSwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoIW5vZGUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG5vZGUgcHJvdmlkZWQnKTtcbiAgfVxuXG4gIGlmIChtYXRjaGVzLmNhbGwobm9kZSwgY2FuZGlkYXRlU2VsZWN0b3IpID09PSBmYWxzZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBpc05vZGVNYXRjaGluZ1NlbGVjdG9yVGFiYmFibGUob3B0aW9ucywgbm9kZSk7XG59O1xuXG52YXIgZm9jdXNhYmxlQ2FuZGlkYXRlU2VsZWN0b3IgPSAvKiAjX19QVVJFX18gKi9jYW5kaWRhdGVTZWxlY3RvcnMuY29uY2F0KCdpZnJhbWUnKS5qb2luKCcsJyk7XG5cbnZhciBpc0ZvY3VzYWJsZSA9IGZ1bmN0aW9uIGlzRm9jdXNhYmxlKG5vZGUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKCFub2RlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdObyBub2RlIHByb3ZpZGVkJyk7XG4gIH1cblxuICBpZiAobWF0Y2hlcy5jYWxsKG5vZGUsIGZvY3VzYWJsZUNhbmRpZGF0ZVNlbGVjdG9yKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gaXNOb2RlTWF0Y2hpbmdTZWxlY3RvckZvY3VzYWJsZShvcHRpb25zLCBub2RlKTtcbn07XG5cbmV4cG9ydCB7IGZvY3VzYWJsZSwgaXNGb2N1c2FibGUsIGlzVGFiYmFibGUsIHRhYmJhYmxlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iXSwic291cmNlUm9vdCI6IiJ9