!function(root,factory){"object"==typeof exports&&"object"==typeof module?module.exports=factory():"function"==typeof define&&define.amd?define("vue-modaltor",[],factory):"object"==typeof exports?exports["vue-modaltor"]=factory():root["vue-modaltor"]=factory()}("undefined"!=typeof self?self:this,function(){return function(modules){function __webpack_require__(moduleId){if(installedModules[moduleId])return installedModules[moduleId].exports;var module=installedModules[moduleId]={i:moduleId,l:!1,exports:{}};return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.l=!0,module.exports}var installedModules={};return __webpack_require__.m=modules,__webpack_require__.c=installedModules,__webpack_require__.d=function(exports,name,getter){__webpack_require__.o(exports,name)||Object.defineProperty(exports,name,{configurable:!1,enumerable:!0,get:getter})},__webpack_require__.n=function(module){var getter=module&&module.__esModule?function(){return module.default}:function(){return module};return __webpack_require__.d(getter,"a",getter),getter},__webpack_require__.o=function(object,property){return Object.prototype.hasOwnProperty.call(object,property)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _vueModaltor=__webpack_require__(1),_vueModaltor2=function(obj){return obj&&obj.__esModule?obj:{default:obj}}(_vueModaltor),modalTor={install:function(Vue,options){var component=_vueModaltor2.default;for(var k in options)component.props.hasOwnProperty(k)&&(component.props[k].default=options[k]);Vue.component("vue-modaltor",component)}};exports.default=modalTor,"undefined"!=typeof window&&window.Vue&&window.Vue.use(modalTor)},function(module,exports,__webpack_require__){__webpack_require__(2);var Component=__webpack_require__(7)(__webpack_require__(8),__webpack_require__(9),null,null);Component.options.__file="G:\\fakor\\modaltor\\src\\vue-modaltor.vue",Component.esModule&&Object.keys(Component.esModule).some(function(key){return"default"!==key&&"__esModule"!==key})&&console.error("named exports are not supported in *.vue files."),Component.options.functional&&console.error("[vue-loader] vue-modaltor.vue: functional components are not supported with templates, they should use render functions."),module.exports=Component.exports},function(module,exports,__webpack_require__){var content=__webpack_require__(3);"string"==typeof content&&(content=[[module.i,content,""]]),content.locals&&(module.exports=content.locals);__webpack_require__(5)("6fa46596",content,!1)},function(module,exports,__webpack_require__){exports=module.exports=__webpack_require__(4)(!1),exports.push([module.i,"\n.modal-vue-wrapper {\n  position: absolute;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  font-size: 14px;\n  -webkit-font-smoothing: antialiased;\n  z-index: 99;\n  -webkit-transform: translate3D(0, 0, 0);\n  -ms-transform: translate3D(0, 0, 0);\n  -o-transform: translate3D(0, 0, 0);\n  transform: translate3D(0, 0, 0);\n  transition: all 0.2s cubic-bezier(0.52, 0.02, 0.19, 1.02);\n}\n.modal-vue-wrapper.modal-fade {\n  opacity: 0.1;\n  visibility: hidden;\n}\n.modal-vue-wrapper.modal-scale {\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  -o-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.modal-vue-wrapper-show {\n  visibility: visible;\n  opacity: 1;\n  -webkit-transform: translate3D(0, 0, 0);\n  -ms-transform: translate3D(0, 0, 0);\n  -o-transform: translate3D(0, 0, 0);\n  transform: translate3D(0, 0, 0);\n}\n.modal-vue-wrapper-show.modal-fade,\n.modal-vue-wrapper-show.modal-scale {\n  visibility: visible;\n  opacity: 1;\n  -webkit-transform: translate3D(0, 0, 0);\n  -ms-transform: translate3D(0, 0, 0);\n  -o-transform: translate3D(0, 0, 0);\n  transform: translate3D(0, 0, 0);\n}\n.modal-vue-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  z-index: 9001;\n  font-size: 14px;\n  z-index: 999;\n}\n.modal-vue---close-icon {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.modal-vue-panel {\n  z-index: 999;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  background: #fff;\n  box-shadow: 0px 8px 46px rgba(0, 0, 0, 0.08), 0px 2px 6px rgba(0, 0, 0, 0.03);\n  position: absolute;\n  max-height: 100vh;\n  overflow-y: auto;\n  border-radius: 2px;\n  top: 50%;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  opacity: 0;\n  transition-property: transform, opacity, width;\n  transition-duration: 0.3s;\n  transition-delay: 0.05s;\n  transition-timing-function: cubic-bezier(0.52, 0.02, 0.19, 1.02);\n}\n.modal-vue-panel.modal-fade {\n  transform: scale(1) translate(0, -50%);\n}\n.modal-vue-panel.modal-rotate {\n  transform: rotate(45deg) translate(0, -50%);\n}\n.modal-vue-panel.modal-slide-right {\n  transform: translate(100px, -50%);\n}\n.modal-vue-panel.modal-slide-left {\n  transform: translate(-100px, -50%);\n}\n.modal-vue-panel.modal-slide-top {\n  transform: translate(0, -100%);\n}\n.modal-vue-panel.modal-slide-bottom {\n  transform: translate(0, 100%);\n}\n.modal-vue-panel::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #f5f5f5;\n}\n.modal-vue-panel::-webkit-scrollbar {\n  width: 6px;\n  height: 5px;\n  background-color: #f5f5f5;\n}\n.modal-vue-panel::-webkit-scrollbar-thumb {\n  background-color: #41b9d2;\n}\n.modal-vue--content {\n  display: flex;\n  align-items: center;\n  padding-left: 15px;\n  padding-right: 15px;\n  padding-top: 24px;\n  padding-bottom: 24px;\n  line-height: 1.5;\n}\n.modal-vue--content-panel {\n  display: block;\n  text-align: justify;\n  font-size: 16px;\n  padding-top: 5px;\n  padding-bottom: 10px;\n  flex-grow: 1;\n}\n.modal-vue .modal-vue-show {\n  transform: translate(0, -50%) !important;\n  opacity: 1 !important;\n}\n",""])},function(module,exports,__webpack_require__){"use strict";function cssWithMappingToString(item,useSourceMap){var content=item[1]||"",cssMapping=item[3];if(!cssMapping)return content;if(useSourceMap&&"function"==typeof btoa){var sourceMapping=toComment(cssMapping);return[content].concat(cssMapping.sources.map(function(source){return"/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source," */")})).concat([sourceMapping]).join("\n")}return[content].join("\n")}function toComment(sourceMap){return"/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))))," */")}module.exports=function(useSourceMap){var list=[];return list.toString=function(){return this.map(function(item){var content=cssWithMappingToString(item,useSourceMap);return item[2]?"@media ".concat(item[2],"{").concat(content,"}"):content}).join("")},list.i=function(modules,mediaQuery){"string"==typeof modules&&(modules=[[null,modules,""]]);for(var alreadyImportedModules={},i=0;i<this.length;i++){var id=this[i][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _i=0;_i<modules.length;_i++){var item=modules[_i];null!=item[0]&&alreadyImportedModules[item[0]]||(mediaQuery&&!item[2]?item[2]=mediaQuery:mediaQuery&&(item[2]="(".concat(item[2],") and (").concat(mediaQuery,")")),list.push(item))}},list}},function(module,exports,__webpack_require__){function addStylesToDom(styles){for(var i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];if(domStyle){domStyle.refs++;for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j](item.parts[j]);for(;j<item.parts.length;j++)domStyle.parts.push(addStyle(item.parts[j]));domStyle.parts.length>item.parts.length&&(domStyle.parts.length=item.parts.length)}else{for(var parts=[],j=0;j<item.parts.length;j++)parts.push(addStyle(item.parts[j]));stylesInDom[item.id]={id:item.id,refs:1,parts:parts}}}}function createStyleElement(){var styleElement=document.createElement("style");return styleElement.type="text/css",head.appendChild(styleElement),styleElement}function addStyle(obj){var update,remove,styleElement=document.querySelector('style[data-vue-ssr-id~="'+obj.id+'"]');if(styleElement){if(isProduction)return noop;styleElement.parentNode.removeChild(styleElement)}if(isOldIE){var styleIndex=singletonCounter++;styleElement=singletonElement||(singletonElement=createStyleElement()),update=applyToSingletonTag.bind(null,styleElement,styleIndex,!1),remove=applyToSingletonTag.bind(null,styleElement,styleIndex,!0)}else styleElement=createStyleElement(),update=applyToTag.bind(null,styleElement),remove=function(){styleElement.parentNode.removeChild(styleElement)};return update(obj),function(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap)return;update(obj=newObj)}else remove()}}function applyToSingletonTag(styleElement,index,remove,obj){var css=remove?"":obj.css;if(styleElement.styleSheet)styleElement.styleSheet.cssText=replaceText(index,css);else{var cssNode=document.createTextNode(css),childNodes=styleElement.childNodes;childNodes[index]&&styleElement.removeChild(childNodes[index]),childNodes.length?styleElement.insertBefore(cssNode,childNodes[index]):styleElement.appendChild(cssNode)}}function applyToTag(styleElement,obj){var css=obj.css,media=obj.media,sourceMap=obj.sourceMap;if(media&&styleElement.setAttribute("media",media),sourceMap&&(css+="\n/*# sourceURL="+sourceMap.sources[0]+" */",css+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+" */"),styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}var hasDocument="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!hasDocument)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var listToStyles=__webpack_require__(6),stylesInDom={},head=hasDocument&&(document.head||document.getElementsByTagName("head")[0]),singletonElement=null,singletonCounter=0,isProduction=!1,noop=function(){},isOldIE="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());module.exports=function(parentId,list,_isProduction){isProduction=_isProduction;var styles=listToStyles(parentId,list);return addStylesToDom(styles),function(newList){for(var mayRemove=[],i=0;i<styles.length;i++){var item=styles[i],domStyle=stylesInDom[item.id];domStyle.refs--,mayRemove.push(domStyle)}newList?(styles=listToStyles(parentId,newList),addStylesToDom(styles)):styles=[];for(var i=0;i<mayRemove.length;i++){var domStyle=mayRemove[i];if(0===domStyle.refs){for(var j=0;j<domStyle.parts.length;j++)domStyle.parts[j]();delete stylesInDom[domStyle.id]}}}};var replaceText=function(){var textStore=[];return function(index,replacement){return textStore[index]=replacement,textStore.filter(Boolean).join("\n")}}()},function(module,exports){module.exports=function(parentId,list){for(var styles=[],newStyles={},i=0;i<list.length;i++){var item=list[i],id=item[0],css=item[1],media=item[2],sourceMap=item[3],part={id:parentId+":"+i,css:css,media:media,sourceMap:sourceMap};newStyles[id]?newStyles[id].parts.push(part):styles.push(newStyles[id]={id:id,parts:[part]})}return styles}},function(module,exports){module.exports=function(rawScriptExports,compiledTemplate,scopeId,cssModules){var esModule,scriptExports=rawScriptExports=rawScriptExports||{},type=typeof rawScriptExports.default;"object"!==type&&"function"!==type||(esModule=rawScriptExports,scriptExports=rawScriptExports.default);var options="function"==typeof scriptExports?scriptExports.options:scriptExports;if(compiledTemplate&&(options.render=compiledTemplate.render,options.staticRenderFns=compiledTemplate.staticRenderFns),scopeId&&(options._scopeId=scopeId),cssModules){var computed=Object.create(options.computed||null);Object.keys(cssModules).forEach(function(key){var module=cssModules[key];computed[key]=function(){return module}}),options.computed=computed}return{esModule:esModule,exports:scriptExports,options:options}}},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default={name:"modal-vue-perfect",props:{visible:{type:Boolean,required:!1,default:!1},resizeWidth:{type:Object},animationPanel:{type:String,required:!1,default:"modal-fade"},bgOverlay:{type:String,required:!1,default:"#fff"},bgPanel:{type:String,required:!1,default:"rgba(255, 255, 255, 0.57)"},animationParent:{type:String,required:!1,default:"modal-fade"},defaultWidth:{type:String,required:!1,default:"80%"},closeScroll:{type:Boolean,required:!1,default:!0},showCloseButton:{type:Boolean,required:!1,default:!0}},data:function(){return{width:this.defaultWidth||"80%",open:!1,isOpen:!1,isShowCloseButton:!0,backups:{body:{height:null,overflow:null,paddingRight:null}}}},watch:{visible:function(val){var _this=this;val?this.openModal():(this.closeScroll&&this._unlockBody(),this.open=!1,setTimeout(function(){return _this.isOpen=!1},300))}},beforeDestroy:function(){window.removeEventListener("resize",this.getWindowWidth),window.removeEventListener("resize",this.getWindowHeight)},destroyed:function(){var _this2=this;this.open&&(this.closeScroll&&this._unlockBody(),this.open=!1,setTimeout(function(){return _this2.isOpen=!1},300))},mounted:function(){this.$nextTick(function(){this.visible&&this.openModal(),window.addEventListener("resize",this.getWindowWidth),window.addEventListener("resize",this.getWindowHeight),this.getWindowWidth(),this.getWindowHeight()})},methods:{openModal:function(){var _this3=this;this.isOpen=!0,setTimeout(function(){return _this3.open=!0},30),this.closeScroll&&this._lockBody()},getWindowHeight:function(event){this.windowHeight=document.documentElement.clientHeight},getWindowWidth:function(event){var _this4=this;if(this.resizeWidth&&Object.keys(this.resizeWidth).length>0){this.windowWidth=document.documentElement.clientWidth;var filter=Object.keys(this.resizeWidth).find(function(f){return f>=_this4.windowWidth});this.width=filter?this.resizeWidth[filter]:this.defaultWidth}},_lockBody:function(){this.backups.body.height=document.body.style.height,this.backups.body.overflow=document.body.style.overflow,document.body.style.paddingRight="15px",document.body.style.height="100%",document.body.style.overflow="hidden"},_unlockBody:function(){document.body.style.height=this.backups.body.height,document.body.style.overflow=this.backups.body.overflow,document.body.style.paddingRight=this.backups.body.paddingRight}}}},function(module,exports,__webpack_require__){module.exports={render:function(){var _vm=this,_h=_vm.$createElement,_c=_vm._self._c||_h;return _c("div",{staticClass:"modal-vue"},[_c("div",{directives:[{name:"show",rawName:"v-show",value:_vm.isOpen,expression:"isOpen"}],staticClass:"modal-vue-wrapper",class:[_vm.animationParent,{"modal-vue-wrapper-show":_vm.open}]},[_c("div",{class:["modal-vue-overlay"],style:{backgroundColor:_vm.bgOverlay},on:{click:function($event){_vm.$emit("hide")}}}),_vm._v(" "),_c("div",{class:["modal-vue-panel",_vm.animationPanel,{"modal-vue-show":_vm.open}],style:{width:_vm.width,backgroundColor:_vm.bgPanel}},[_vm.showCloseButton?_c("div",{staticClass:"modal-vue---close-icon",on:{click:function($event){_vm.$emit("hide")}}},[_vm._t("close-icon",[_c("svg",{attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 40 40",width:"20",height:"20","xml:space":"preserve"}},[_c("path",{staticClass:"st0",attrs:{fill:"#010110",d:"M8.7,7.6c-0.4-0.4-1-0.4-1.4,0C6.9,8,6.9,8.6,7.3,9l11,11l-11,11c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0 l11-11l11,11c0.4,0.4,1,0.4,1.4,0c0.4-0.4,0.4-1,0-1.4l-11-11L32,9c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0l-11,11L8.7,7.6z"}})])])],2):_vm._e(),_vm._v(" "),_c("div",{staticClass:"modal-vue--content"},[_c("div",{staticClass:"modal-vue--content-panel"},[_vm._t("default")],2)])])])])},staticRenderFns:[]},module.exports.render._withStripped=!0}])});