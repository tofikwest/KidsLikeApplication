(this["webpackJsonpkids-like-application"]=this["webpackJsonpkids-like-application"]||[]).push([[1],{153:function(t,e,o){var r;t.exports=(r=o(0),function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};return e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=11)}([function(t,e,o){var r;!function(){"use strict";function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var s=o.apply(null,r);s&&t.push(s)}else if("object"===i)for(var a in r)n.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}var n={}.hasOwnProperty;void 0!==t&&t.exports?(o.default=o,t.exports=o):void 0!==(r=function(){return o}.apply(e,[]))&&(t.exports=r)}()},function(t,e){t.exports=r},function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Progress=void 0;var r=function(t){return t&&t.__esModule?t:{default:t}}(o(8));e.Progress=r.default},function(t,e,o){"use strict";function r(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}Object.defineProperty(e,"__esModule",{value:!0});var n,i=(e.prefixClass="react-sweet-progress",e.DEFAULT_TRAIL_COLOR="#efefef",e.STATUSES={ACTIVE:"active",SUCCESS:"success",ERROR:"error",DEFAULT:"default"});e.COLOR_MAP=(r(n={},i.ACTIVE,"#138ce4"),r(n,i.SUCCESS,"#049e51"),r(n,i.ERROR,"#e23f33"),n)},function(t,e){t.exports={"react-sweet-progress-line":"react-sweet-progress-line","react-sweet-progress-line-inner":"react-sweet-progress-line-inner","react-sweet-progress-line-inner-status-active":"react-sweet-progress-line-inner-status-active","active-anim":"active-anim"}},function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function n(t,e){var o={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(o[r]=t[r]);return o}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},c=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,o,r,n){var i=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&i)for(var a in i)void 0===o[a]&&(o[a]=i[a]);else o||(o=i||{});if(1===s)o.children=n;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];o.children=l}return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:o,_owner:null}}}(),u=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),p=o(1),f=r(p),h=r(o(0)),d=r(o(9)),y=function(t){function e(){return i(this,e),s(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return a(e,t),u(e,[{key:"getPathStyles",value:function(){var t=this.props,e=(t.prefixClass,t.percent),o=t.strokeWidth,r=t.gapDegree,n=void 0===r?0:r,i=(t.gapPosition,50-o/2),s=-2*i,a="M 50,50 m 0,"+-i+"\n     a "+i+","+i+" 0 1 1 0,"+-s+"\n     a "+i+","+i+" 0 1 1 0,"+s,l=2*Math.PI*i;return{pathString:a,trailPathStyle:{strokeDasharray:l-n+"px "+l+"px",strokeDashoffset:"-"+n/2+"px",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"},strokePathStyle:{strokeDasharray:e/100*(l-n)+"px "+l+"px",strokeDashoffset:"-"+n/2+"px",transition:"stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s"}}}},{key:"render",value:function(){var t=this,e=this.props,o=e.prefixClass,r=e.strokeWidth,i=e.strokeColor,s=e.trailColor,a=e.style,u=e.className,p=n(e,["prefixClass","strokeWidth","strokeColor","trailColor","style","className"]),y=(0,h.default)(d.default[o+"-circle"],u),v=this.getPathStyles(),b=v.pathString,m=v.trailPathStyle,g=v.strokePathStyle;return delete p.percent,delete p.gapDegree,delete p.gapPosition,f.default.createElement("svg",l({className:y,viewBox:"0 0 100 100",style:a},p),c("path",{d:b,stroke:s,strokeWidth:r,fillOpacity:"0",style:m}),f.default.createElement("path",{d:b,stroke:i,strokeWidth:r,fillOpacity:"0",ref:function(e){t.path=e},style:g}))}}]),e}(p.Component);e.default=y},function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,o,r,n){var i=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&i)for(var a in i)void 0===o[a]&&(o[a]=i[a]);else o||(o=i||{});if(1===s)o.children=n;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];o.children=l}return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:o,_owner:null}}}(),l=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),c=o(1),u=(r(c),o(0)),p=(r(u),o(4)),f=(r(p),function(t){function e(){return n(this,e),i(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return s(e,t),l(e,[{key:"render",value:function(){var t=this.props.size?{width:this.props.size,height:this.props.size}:{width:"20px",height:"20px"};switch(this.props.name){case"success":return a("svg",{version:"1.1",viewBox:"0 0 512 512",style:t},void 0,a("path",{fill:"#049e51",d:"M489,255.9c0-0.2,0-0.5,0-0.7c0-1.6,0-3.2-0.1-4.7c0-0.9-0.1-1.8-0.1-2.8c0-0.9-0.1-1.8-0.1-2.7  c-0.1-1.1-0.1-2.2-0.2-3.3c0-0.7-0.1-1.4-0.1-2.1c-0.1-1.2-0.2-2.4-0.3-3.6c0-0.5-0.1-1.1-0.1-1.6c-0.1-1.3-0.3-2.6-0.4-4  c0-0.3-0.1-0.7-0.1-1C474.3,113.2,375.7,22.9,256,22.9S37.7,113.2,24.5,229.5c0,0.3-0.1,0.7-0.1,1c-0.1,1.3-0.3,2.6-0.4,4  c-0.1,0.5-0.1,1.1-0.1,1.6c-0.1,1.2-0.2,2.4-0.3,3.6c0,0.7-0.1,1.4-0.1,2.1c-0.1,1.1-0.1,2.2-0.2,3.3c0,0.9-0.1,1.8-0.1,2.7  c0,0.9-0.1,1.8-0.1,2.8c0,1.6-0.1,3.2-0.1,4.7c0,0.2,0,0.5,0,0.7c0,0,0,0,0,0.1s0,0,0,0.1c0,0.2,0,0.5,0,0.7c0,1.6,0,3.2,0.1,4.7  c0,0.9,0.1,1.8,0.1,2.8c0,0.9,0.1,1.8,0.1,2.7c0.1,1.1,0.1,2.2,0.2,3.3c0,0.7,0.1,1.4,0.1,2.1c0.1,1.2,0.2,2.4,0.3,3.6  c0,0.5,0.1,1.1,0.1,1.6c0.1,1.3,0.3,2.6,0.4,4c0,0.3,0.1,0.7,0.1,1C37.7,398.8,136.3,489.1,256,489.1s218.3-90.3,231.5-206.5  c0-0.3,0.1-0.7,0.1-1c0.1-1.3,0.3-2.6,0.4-4c0.1-0.5,0.1-1.1,0.1-1.6c0.1-1.2,0.2-2.4,0.3-3.6c0-0.7,0.1-1.4,0.1-2.1  c0.1-1.1,0.1-2.2,0.2-3.3c0-0.9,0.1-1.8,0.1-2.7c0-0.9,0.1-1.8,0.1-2.8c0-1.6,0.1-3.2,0.1-4.7c0-0.2,0-0.5,0-0.7  C489,256,489,256,489,255.9C489,256,489,256,489,255.9z",id:"XMLID_3_"}),a("g",{fill:"none",stroke:"#FFFFFF",strokeWidth:30,strokeMiterlimit:10},void 0,a("line",{x1:"213.6",x2:"369.7",y1:"344.2",y2:"188.2"}),a("line",{x1:"233.8",x2:"154.7",y1:"345.2",y2:"266.1"})));case"error":return a("svg",{version:"1.1",viewBox:"0 0 50 50",style:t},void 0,a("circle",{fill:"#e23f33",cx:"25",cy:"25",r:"25"}),a("polyline",{fill:"none",stroke:"#FFFFFF",strokeWidth:3,strokeLinecap:"round",strokeMiterlimit:10,points:"16,34 25,25 34,16"}),a("polyline",{fill:"none",stroke:"#FFFFFF",strokeWidth:3,strokeLinecap:"round",strokeMiterlimit:10,points:"16,16 25,25 34,34"}));default:return null}}}]),e}(c.Component));e.default=f},function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function i(t){var e=t.prefixClass,o=t.percent,r=t.className,i=t.status,a=t.background,u=t.trailColor,p=(0,l.default)(c.default[e+"-line"],r),f=(0,l.default)(c.default[e+"-line-inner"],n({},c.default[e+"-line-inner-status-"+i],!!i));return s("div",{className:p,style:{backgroundColor:u}},void 0,s("div",{className:f,style:{width:o+"%",backgroundColor:a}}))}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,o,r,n){var i=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&i)for(var a in i)void 0===o[a]&&(o[a]=i[a]);else o||(o=i||{});if(1===s)o.children=n;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];o.children=l}return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:o,_owner:null}}}(),a=(r(o(1)),o(0)),l=r(a),c=r((o(3),o(4)));e.default=i},function(t,e,o){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},l=function(){var t="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(e,o,r,n){var i=e&&e.defaultProps,s=arguments.length-3;if(o||0===s||(o={}),o&&i)for(var a in i)void 0===o[a]&&(o[a]=i[a]);else o||(o=i||{});if(1===s)o.children=n;else if(s>1){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+3];o.children=l}return{$$typeof:t,type:e,key:void 0===r?null:""+r,ref:null,props:o,_owner:null}}}(),c=function(){function t(t,e){for(var o=0;o<e.length;o++){var r=e[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,o,r){return o&&t(e.prototype,o),r&&t(e,r),e}}(),u=o(1),p=(r(u),o(0)),f=r(p),h=o(3),d=r(o(10)),y=r(o(7)),v=r(o(5)),b=r(o(6)),m=function(t){function e(t){n(this,e);var o=i(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return o.state={status:t.status||h.STATUSES.ACTIVE},o}return s(e,t),c(e,[{key:"getSymbolByStatus",value:function(t,e){switch(t){case h.STATUSES.SUCCESS:return l(b.default,{name:"success",size:e});case h.STATUSES.ERROR:return l(b.default,{name:"error",size:e});default:return this.props.percent+"%"}}},{key:"render",value:function(){var t=this.props,e=t.percent,o=t.status,r=t.theme,n=t.style,i=t.className,s=t.symbolClassName,c=t.type,u=t.width,p=t.strokeWidth,b=null;b=0===e?h.STATUSES.DEFAULT:e>=100&&!o?h.STATUSES.SUCCESS:o||h.STATUSES.ACTIVE;var m=r&&r[b],g=m?m.color:h.COLOR_MAP[b],w=m?m.trailColor:h.DEFAULT_TRAIL_COLOR;if("circle"===c){var k=u||132,S=.16*k+6,C=1.25*S,x=m&&m.symbol||this.getSymbolByStatus(b,C),O=a({width:k,height:k,fontSize:S},n),_=p||6;return l("div",{className:h.prefixClass+"-circle-outer",style:O},void 0,l(v.default,{percent:e,strokeWidth:_,strokeColor:g,trailColor:w,prefixClass:h.prefixClass,gapDegree:0,gapPosition:"top"}),l("div",{className:d.default[h.prefixClass+"-symbol-absolute"]},void 0,l("div",{className:(0,f.default)(d.default[h.prefixClass+"-symbol"],s)},void 0,x)))}var E=m&&m.symbol||this.getSymbolByStatus(b);return l("div",{className:(0,f.default)(d.default[""+h.prefixClass],i),style:n},void 0,l(y.default,{prefixClass:h.prefixClass,percent:e,status:b,background:g,trailColor:w}),l("div",{className:(0,f.default)(d.default[h.prefixClass+"-symbol"],s)},void 0,E))}}]),e}(u.Component);m.defaultProps={percent:0},e.default=m},function(t,e){t.exports={"react-sweet-progress-circle":"react-sweet-progress-circle"}},function(t,e){t.exports={"react-sweet-progress":"react-sweet-progress","react-sweet-progress-symbol":"react-sweet-progress-symbol","react-sweet-progress-symbol-absolute":"react-sweet-progress-symbol-absolute","react-sweet-progress-circle-outer":"react-sweet-progress-circle-outer"}},function(t,e,o){o(2),t.exports=o(2)}]))},154:function(t,e,o){},155:function(t,e,o){Object.defineProperty(e,"__esModule",{value:!0});var r=o(0);function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t}).apply(this,arguments)}var i=r.createElement("svg",{viewBox:"-2 -5 14 20",height:"100%",width:"100%",style:{position:"absolute",top:0}},r.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"})),s=r.createElement("svg",{height:"100%",width:"100%",viewBox:"-2 -5 17 21",style:{position:"absolute",top:0}},r.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}));function a(t){if(7===t.length)return t;for(var e="#",o=1;o<4;o+=1)e+=t[o]+t[o];return e}function l(t,e,o,r,n){return function(t,e,o,r,n){var i=(t-o)/(e-o);if(0===i)return r;if(1===i)return n;for(var s="#",a=1;a<6;a+=2){var l=parseInt(r.substr(a,2),16),c=parseInt(n.substr(a,2),16),u=Math.round((1-i)*l+i*c).toString(16);1===u.length&&(u="0"+u),s+=u}return s}(t,e,o,a(r),a(n))}var c=function(t){function e(e){t.call(this,e);var o=e.height,r=e.width,n=e.checked;this.t=e.handleDiameter||o-2,this.i=Math.max(r-o,r-(o+this.t)/2),this.o=Math.max(0,(o-this.t)/2),this.state={h:n?this.i:this.o},this.l=0,this.u=0,this.p=this.p.bind(this),this.v=this.v.bind(this),this.g=this.g.bind(this),this.k=this.k.bind(this),this.M=this.M.bind(this),this.m=this.m.bind(this),this.T=this.T.bind(this),this.$=this.$.bind(this),this.C=this.C.bind(this),this.D=this.D.bind(this),this.O=this.O.bind(this),this.S=this.S.bind(this)}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.componentDidMount=function(){this.W=!0},e.prototype.componentDidUpdate=function(t){t.checked!==this.props.checked&&this.setState({h:this.props.checked?this.i:this.o})},e.prototype.componentWillUnmount=function(){this.W=!1},e.prototype.I=function(t){this.H.focus(),this.setState({R:t,j:!0,B:Date.now()})},e.prototype.L=function(t){var e=this.state,o=e.R,r=e.h,n=(this.props.checked?this.i:this.o)+t-o;e.N||t===o||this.setState({N:!0});var i=Math.min(this.i,Math.max(this.o,n));i!==r&&this.setState({h:i})},e.prototype.U=function(t){var e=this.state,o=e.h,r=e.N,n=e.B,i=this.props.checked,s=(this.i+this.o)/2;this.setState({h:this.props.checked?this.i:this.o});var a=Date.now()-n;(!r||a<250||i&&o<=s||!i&&o>=s)&&this.A(t),this.W&&this.setState({N:!1,j:!1}),this.l=Date.now()},e.prototype.p=function(t){t.preventDefault(),"number"==typeof t.button&&0!==t.button||(this.I(t.clientX),window.addEventListener("mousemove",this.v),window.addEventListener("mouseup",this.g))},e.prototype.v=function(t){t.preventDefault(),this.L(t.clientX)},e.prototype.g=function(t){this.U(t),window.removeEventListener("mousemove",this.v),window.removeEventListener("mouseup",this.g)},e.prototype.k=function(t){this.X=null,this.I(t.touches[0].clientX)},e.prototype.M=function(t){this.L(t.touches[0].clientX)},e.prototype.m=function(t){t.preventDefault(),this.U(t)},e.prototype.$=function(t){Date.now()-this.l>50&&(this.A(t),Date.now()-this.u>50&&this.W&&this.setState({j:!1}))},e.prototype.C=function(){this.u=Date.now()},e.prototype.D=function(){this.setState({j:!0})},e.prototype.O=function(){this.setState({j:!1})},e.prototype.S=function(t){this.H=t},e.prototype.T=function(t){t.preventDefault(),this.H.focus(),this.A(t),this.W&&this.setState({j:!1})},e.prototype.A=function(t){var e=this.props;(0,e.onChange)(!e.checked,t,e.id)},e.prototype.render=function(){var t=this.props,e=t.checked,o=t.disabled,i=t.className,s=t.offColor,a=t.onColor,c=t.offHandleColor,u=t.onHandleColor,p=t.checkedIcon,f=t.uncheckedIcon,h=t.checkedHandleIcon,d=t.uncheckedHandleIcon,y=t.boxShadow,v=t.activeBoxShadow,b=t.height,m=t.width,g=t.borderRadius,w=function(t,e){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&-1===e.indexOf(r)&&(o[r]=t[r]);return o}(t,["checked","disabled","className","offColor","onColor","offHandleColor","onHandleColor","checkedIcon","uncheckedIcon","checkedHandleIcon","uncheckedHandleIcon","boxShadow","activeBoxShadow","height","width","borderRadius","handleDiameter"]),k=this.state,S=k.h,C=k.N,x=k.j,O={position:"relative",display:"inline-block",textAlign:"left",opacity:o?.5:1,direction:"ltr",borderRadius:b/2,WebkitTransition:"opacity 0.25s",MozTransition:"opacity 0.25s",transition:"opacity 0.25s",touchAction:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",WebkitUserSelect:"none",MozUserSelect:"none",msUserSelect:"none",userSelect:"none"},_={height:b,width:m,margin:Math.max(0,(this.t-b)/2),position:"relative",background:l(S,this.i,this.o,s,a),borderRadius:"number"==typeof g?g:b/2,cursor:o?"default":"pointer",WebkitTransition:C?null:"background 0.25s",MozTransition:C?null:"background 0.25s",transition:C?null:"background 0.25s"},E={height:b,width:Math.min(1.5*b,m-(this.t+b)/2+1),position:"relative",opacity:(S-this.o)/(this.i-this.o),pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"},T={height:b,width:Math.min(1.5*b,m-(this.t+b)/2+1),position:"absolute",opacity:1-(S-this.o)/(this.i-this.o),right:0,top:0,pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"},M={height:this.t,width:this.t,background:l(S,this.i,this.o,c,u),display:"inline-block",cursor:o?"default":"pointer",borderRadius:"number"==typeof g?g-1:"50%",position:"absolute",transform:"translateX("+S+"px)",top:Math.max(0,(b-this.t)/2),outline:0,boxShadow:x?v:y,border:0,WebkitTransition:C?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",MozTransition:C?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s",transition:C?null:"background-color 0.25s, transform 0.25s, box-shadow 0.15s"},P={height:this.t,width:this.t,opacity:Math.max(2*(1-(S-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"},j={height:this.t,width:this.t,opacity:Math.max(2*((S-this.o)/(this.i-this.o)-.5),0),position:"absolute",left:0,top:0,pointerEvents:"none",WebkitTransition:C?null:"opacity 0.25s",MozTransition:C?null:"opacity 0.25s",transition:C?null:"opacity 0.25s"};return r.createElement("div",{className:i,style:O},r.createElement("div",{className:"react-switch-bg",style:_,onClick:o?null:this.T,onMouseDown:function(t){return t.preventDefault()}},p&&r.createElement("div",{style:E},p),f&&r.createElement("div",{style:T},f)),r.createElement("div",{className:"react-switch-handle",style:M,onClick:function(t){return t.preventDefault()},onMouseDown:o?null:this.p,onTouchStart:o?null:this.k,onTouchMove:o?null:this.M,onTouchEnd:o?null:this.m,onTouchCancel:o?null:this.O},d&&r.createElement("div",{style:P},d),h&&r.createElement("div",{style:j},h)),r.createElement("input",n({},{type:"checkbox",role:"switch","aria-checked":e,checked:e,disabled:o,style:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",width:1}},w,{ref:this.S,onFocus:this.D,onBlur:this.O,onKeyUp:this.C,onChange:this.$})))},e}(r.Component);c.defaultProps={disabled:!1,offColor:"#888",onColor:"#080",offHandleColor:"#fff",onHandleColor:"#fff",uncheckedIcon:i,checkedIcon:s,boxShadow:null,activeBoxShadow:"0 0 2px 3px #3bf",height:28,width:56},e.default=c},169:function(t,e,o){t.exports=o(155)}}]);
//# sourceMappingURL=1.e45f653d.chunk.js.map