webpackJsonp([35783957827783],{306:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){return"undefined"==typeof N&&"undefined"!=typeof window&&window.IntersectionObserver&&(N=new window.IntersectionObserver(function(e){e.forEach(function(e){S.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(N.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),N}t.__esModule=!0;var l=a(41),i=n(l),r=a(56),s=n(r),c=a(55),u=n(c),d=a(126),f=n(d),p=a(125),m=n(p),y=a(2),h=n(y),b=a(7),g=n(b),v=function(e){var t=(0,m.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},E=function(e){var t=v(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!w[a]||(w[a]=!0,!1)},N=void 0,S=[],_=function(e,t){o().observe(e),S.push([e,t])},j=null,O=function(){if(null!==j)return j;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return j=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},L=function(e){var t=e.opacity,a=void 0===t?"1":t,n=e.src,o=e.srcSet,l=e.sizes,i=void 0===l?"":l,r=e.title,s=void 0===r?"":r,c=e.alt,u=void 0===c?"":c,d=e.width,f=void 0===d?"":d,p=e.height,m=void 0===p?"":p,y=e.transitionDelay,h=void 0===y?"0.5s":y;return'<img width="'+f+'" height="'+m+'" src="'+n+'" srcset="'+o+'" alt="'+u+'" title="'+s+'" sizes="'+i+'" style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+h+";opacity:"+a+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},I=function(e){var t=e.style,a=e.onLoad,n=(0,f.default)(e,["style","onLoad"]);return h.default.createElement("img",(0,m.default)({},n,{onLoad:a,style:(0,m.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};I.propTypes={style:g.default.object,onLoad:g.default.func};var T=function(e){function t(a){(0,i.default)(this,t);var n=(0,s.default)(this,e.call(this,a)),o=!0,l=!0,r=!1,c=E(a);return!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,l=!1,r=!0),"undefined"==typeof window&&(o=!1,l=!1),n.state={isVisible:o,imgLoaded:l,IOSupported:r},n.handleRef=n.handleRef.bind(n),n}return(0,u.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&_(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=v(this.props),a=t.title,n=t.alt,o=t.className,l=t.outerWrapperClassName,i=t.style,r=void 0===i?{}:i,s=t.imgStyle,c=void 0===s?{}:s,u=t.sizes,d=t.resolutions,f=t.backgroundColor,p=t.Tag,y=void 0;y="boolean"==typeof f?"lightgray":f;var b=(0,m.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},c),g=(0,m.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},c);if(u){var w=u;return w.srcWebp&&w.srcSetWebp&&O()&&(w.src=w.srcWebp,w.srcSet=w.srcSetWebp),h.default.createElement(p,{className:(l?l:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},h.default.createElement(p,{className:(o?o:"")+" gatsby-image-wrapper",style:(0,m.default)({position:"relative",overflow:"hidden"},r),ref:this.handleRef},h.default.createElement(p,{style:{width:"100%",paddingBottom:100/w.aspectRatio+"%"}}),w.base64&&h.default.createElement(I,{alt:n,title:a,src:w.base64,style:b}),w.tracedSVG&&h.default.createElement(I,{alt:n,title:a,src:w.tracedSVG,style:b}),y&&h.default.createElement(p,{title:a,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&h.default.createElement(I,{alt:n,title:a,srcSet:w.srcSet,src:w.src,sizes:w.sizes,style:g,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,m.default)({alt:n,title:a},w))}})))}if(d){var E=d,N=(0,m.default)({position:"relative",overflow:"hidden",display:"inline-block",width:E.width,height:E.height},r);return"inherit"===r.display&&delete N.display,E.srcWebp&&E.srcSetWebp&&O()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),h.default.createElement(p,{className:(l?l:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===r.position?"initial":"relative"}},h.default.createElement(p,{className:(o?o:"")+" gatsby-image-wrapper",style:N,ref:this.handleRef},E.base64&&h.default.createElement(I,{alt:n,title:a,src:E.base64,style:b}),E.tracedSVG&&h.default.createElement(I,{alt:n,title:a,src:E.tracedSVG,style:b}),y&&h.default.createElement(p,{title:a,style:{backgroundColor:y,width:E.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:E.height}}),this.state.isVisible&&h.default.createElement(I,{alt:n,title:a,width:E.width,height:E.height,srcSet:E.srcSet,src:E.src,style:g,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,m.default)({alt:n,title:a,width:E.width,height:E.height},E))}})))}return null},t}(h.default.Component);T.defaultProps={fadeIn:!0,alt:"",Tag:"div"},T.propTypes={responsiveResolution:g.default.object,responsiveSizes:g.default.object,resolutions:g.default.object,sizes:g.default.object,fadeIn:g.default.bool,title:g.default.string,alt:g.default.string,className:g.default.oneOfType([g.default.string,g.default.object]),outerWrapperClassName:g.default.oneOfType([g.default.string,g.default.object]),style:g.default.object,imgStyle:g.default.object,position:g.default.string,backgroundColor:g.default.oneOfType([g.default.string,g.default.bool]),onLoad:g.default.func,Tag:g.default.string},t.default=T},336:function(e,t){},199:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=a(2),s=n(r),c=a(306),u=n(c);a(336);var d=function(e){function t(){return o(this,t),l(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return s.default.createElement("div",{className:"image-section"},s.default.createElement(u.default,{title:this.props.title,alt:this.props.alt,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"},sizes:this.props.sectionImage.sizes}))},t}(s.default.Component);t.default=d,e.exports=t.default},200:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var r=a(2),s=n(r),c=function(e){function t(){return o(this,t),l(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return s.default.createElement("ul",null,s.default.createElement("li",null,"Profile"),s.default.createElement("li",null,"Experience"),s.default.createElement("li",null,"Skills"),s.default.createElement("li",null,"Travel"))},t}(s.default.Component);t.default=c,e.exports=t.default},338:function(e,t){},204:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var r=a(2),s=n(r);a(338);var c=a(199),u=n(c),d=a(200),f=(n(d),function(e){function t(){return o(this,t),l(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return s.default.createElement("div",{className:"home-page","data-flex":!0,"data-layout":"column"},s.default.createElement("div",{className:"title-section","data-layout":"column"},s.default.createElement(u.default,{sectionImage:this.props.data.sectionImage}),s.default.createElement("div",{className:"middle-section","data-flex":!0,"data-layout":"column","data-layout-align":"center center"},s.default.createElement("span",{className:"title-name"},"Josh Weinstein"),s.default.createElement("span",{className:"title-description"},"Software | Web | Travel")),s.default.createElement("div",{className:"menu-contsainer","data-layout":"column","data-layout-align":"end end"})),s.default.createElement("div",{className:"section-container","data-layout":"column","data-layout-align":"start center"},s.default.createElement("div",{className:"section profile","data-layout":"column"},s.default.createElement("div",{className:"section-header","data-layout":"column","data-layout-align":"center center"},s.default.createElement("span",{className:"title"},"Profile"),s.default.createElement("span",{className:"description"},"I am a software engineer with a passion for UI/UX")))),s.default.createElement("div",{className:"section-container colored","data-layout":"column","data-layout-align":"start center"},s.default.createElement("div",{className:"section experience","data-layout":"column"},s.default.createElement("div",{className:"section-header","data-layout":"column","data-layout-align":"center center"},s.default.createElement("span",{className:"title"},"Experience"),s.default.createElement("span",{className:"description"},"I have worked with corporations and led a startup")))),s.default.createElement("div",{className:"section-container","data-layout":"column","data-layout-align":"start center"},s.default.createElement("div",{className:"section skills","data-layout":"column"},s.default.createElement("div",{className:"section-header","data-layout":"column","data-layout-align":"center center"},s.default.createElement("span",{className:"title"},"Skills"),s.default.createElement("span",{className:"description"},"I have played with many technologies and love to learn more")))),s.default.createElement("div",{className:"section-container colored","data-layout":"column","data-layout-align":"start center"},s.default.createElement("div",{className:"section travel","data-layout":"column"},s.default.createElement("div",{className:"section-header","data-layout":"column","data-layout-align":"center center"},s.default.createElement("span",{className:"title"},"Travel"),s.default.createElement("span",{className:"description"},"I have explored parts of the world and am aching to continue")))))},t}(s.default.Component));t.default=f;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-d06c4d74fa9c833cb42a.js.map