webpackJsonp([0xdf10e27add26],{129:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={update:function(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}}),i=function(){};window.addEventListener("testPassiveEventSupport",i,t),window.removeEventListener("testPassiveEventSupport",i,t),n.hasSupport=e}}};n.update(),t.default=n},136:function(e,t){(function(t){function n(e,t,n){function a(t){var n=m,i=v;return m=v=void 0,E=t,b=e.apply(i,n)}function r(e){return E=e,y=setTimeout(c,t),x?a(e):b}function l(e){var n=e-_,i=e-E,a=t-n;return I?T(a,g-i):a}function u(e){var n=e-_,i=e-E;return void 0===_||n>=t||n<0||I&&i>=g}function c(){var e=S();return u(e)?d(e):void(y=setTimeout(c,l(e)))}function d(e){return y=void 0,k&&m?a(e):(m=v=void 0,b)}function h(){void 0!==y&&clearTimeout(y),E=0,m=_=v=y=void 0}function p(){return void 0===y?b:d(S())}function f(){var e=S(),n=u(e);if(m=arguments,v=this,_=e,n){if(void 0===y)return r(_);if(I)return y=setTimeout(c,t),a(_)}return void 0===y&&(y=setTimeout(c,t)),b}var m,v,g,b,y,_,E=0,x=!1,I=!1,k=!0;if("function"!=typeof e)throw new TypeError(o);return t=s(t)||0,i(n)&&(x=!!n.leading,I="maxWait"in n,g=I?w(s(n.maxWait)||0,t):g,k="trailing"in n?!!n.trailing:k),f.cancel=h,f.flush=p,f}function i(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==typeof e}function r(e){return"symbol"==typeof e||a(e)&&y.call(e)==u}function s(e){if("number"==typeof e)return e;if(r(e))return l;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var n=h.test(e);return n||p.test(e)?f(e.slice(2),n?2:8):d.test(e)?l:+e}var o="Expected a function",l=NaN,u="[object Symbol]",c=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,p=/^0o[0-7]+$/i,f=parseInt,m="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,g=m||v||Function("return this")(),b=Object.prototype,y=b.toString,w=Math.max,T=Math.min,S=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},137:function(e,t){(function(t){function n(e,t,n){function i(t){var n=m,i=v;return m=v=void 0,E=t,b=e.apply(i,n)}function r(e){return E=e,y=setTimeout(c,t),x?i(e):b}function s(e){var n=e-w,i=e-E,a=t-n;return I?S(a,g-i):a}function u(e){var n=e-w,i=e-E;return void 0===w||n>=t||n<0||I&&i>=g}function c(){var e=_();return u(e)?d(e):void(y=setTimeout(c,s(e)))}function d(e){return y=void 0,k&&m?i(e):(m=v=void 0,b)}function h(){void 0!==y&&clearTimeout(y),E=0,m=w=v=y=void 0}function p(){return void 0===y?b:d(_())}function f(){var e=_(),n=u(e);if(m=arguments,v=this,w=e,n){if(void 0===y)return r(w);if(I)return y=setTimeout(c,t),i(w)}return void 0===y&&(y=setTimeout(c,t)),b}var m,v,g,b,y,w,E=0,x=!1,I=!1,k=!0;if("function"!=typeof e)throw new TypeError(l);return t=o(t)||0,a(n)&&(x=!!n.leading,I="maxWait"in n,g=I?T(o(n.maxWait)||0,t):g,k="trailing"in n?!!n.trailing:k),f.cancel=h,f.flush=p,f}function i(e,t,i){var r=!0,s=!0;if("function"!=typeof e)throw new TypeError(l);return a(i)&&(r="leading"in i?!!i.leading:r,s="trailing"in i?!!i.trailing:s),n(e,t,{leading:r,maxWait:t,trailing:s})}function a(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==typeof e}function s(e){return"symbol"==typeof e||r(e)&&w.call(e)==c}function o(e){if("number"==typeof e)return e;if(s(e))return u;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||f.test(e)?m(e.slice(2),n?2:8):h.test(e)?u:+e}var l="Expected a function",u=NaN,c="[object Symbol]",d=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,f=/^0o[0-7]+$/i,m=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,g="object"==typeof self&&self&&self.Object===Object&&self,b=v||g||Function("return this")(),y=Object.prototype,w=y.toString,T=Math.max,S=Math.min,_=function(){return b.Date.now()};e.exports=i}).call(t,function(){return this}())},164:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(1),c=i(u),d=n(169),h=i(d),p=n(137),f=i(p),m=n(136),v=i(m),g=n(2),b=i(g),y=["fullscreenchange","MSFullscreenChange","mozfullscreenchange","webkitfullscreenchange"],w=function(e){function t(e){a(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e));return n.slideToIndex=function(e,t){var i=n.state,a=i.currentIndex,r=i.isTransitioning;if(!r){t&&n._intervalId&&(n.pause(!1),n.play(!1));var s=n.props.items.length-1,o=e;e<0?o=s:e>s&&(o=0),n.setState({previousIndex:a,currentIndex:o,isTransitioning:o!==a,offsetPercentage:0,style:{transition:"all "+n.props.slideDuration+"ms ease-out"}},n._onSliding)}},n._onSliding=function(){var e=n.state.isTransitioning;window.setTimeout(function(){e&&n.setState({isTransitioning:!e})},n.props.slideDuration+50)},n._handleScreenChange=function(){var e=document.fullscreenElement||document.msFullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement;n.props.onScreenChange&&n.props.onScreenChange(e),n.setState({isFullscreen:!!e})},n._toggleFullScreen=function(){n.state.isFullscreen?n.exitFullScreen():n.fullScreen()},n._togglePlay=function(){n._intervalId?n.pause():n.play()},n._handleResize=function(){n._resizeTimer=window.setTimeout(function(){n._imageGallery&&n.setState({galleryWidth:n._imageGallery.offsetWidth}),n._setThumbsTranslate(-n._getThumbsTranslate(n.state.currentIndex>0?1:0)*n.state.currentIndex),n._imageGallerySlideWrapper&&n.setState({gallerySlideWrapperHeight:n._imageGallerySlideWrapper.offsetHeight}),n._thumbnailsWrapper&&(n._isThumbnailHorizontal()?n.setState({thumbnailsWrapperHeight:n._thumbnailsWrapper.offsetHeight}):n.setState({thumbnailsWrapperWidth:n._thumbnailsWrapper.offsetWidth}))},50)},n._handleKeyDown=function(e){var t=37,i=39,a=27,r=parseInt(e.keyCode||e.which||0);switch(r){case t:n._canSlideLeft()&&!n._intervalId&&n._slideLeft();break;case i:n._canSlideRight()&&!n._intervalId&&n._slideRight();break;case a:n.state.isFullscreen&&!n.props.useBrowserFullscreen&&n.exitFullScreen()}},n._handleMouseLeaveThumbnails=function(){n._thumbnailTimer&&(window.clearTimeout(n._thumbnailTimer),n._thumbnailTimer=null,n.props.autoPlay===!0&&n.play(!1)),n.setState({hovering:!1})},n._handleImageError=function(e){n.props.defaultImage&&e.target.src.indexOf(n.props.defaultImage)===-1&&(e.target.src=n.props.defaultImage)},n._handleOnSwiped=function(e,t,i,a){var r=n.state,s=r.scrollingUpDown,o=r.scrollingLeftRight;if(s&&n.setState({scrollingUpDown:!1}),o&&n.setState({scrollingLeftRight:!1}),!s){var l=t>0?1:-1;n._handleOnSwipedTo(l,a)}},n._handleSwiping=function(e,t,i,a){var r=n.state,s=r.galleryWidth,o=r.isTransitioning,l=r.scrollingUpDown,u=n.props.swipingTransitionDuration;if(n._setScrollDirection(t,i),o||l)n.setState({offsetPercentage:0});else{var c=t<0?1:-1,d=a/s*100;Math.abs(d)>=100&&(d=100);var h={transition:"transform "+u+"ms ease-out"};n.setState({offsetPercentage:c*d,style:h})}},n._slideLeft=function(e){n.slideToIndex(n.state.currentIndex-1,e)},n._slideRight=function(e){n.slideToIndex(n.state.currentIndex+1,e)},n._renderItem=function(e){var t=n.props.onImageError||n._handleImageError;return c.default.createElement("div",{className:"image-gallery-image"},e.imageSet?c.default.createElement("picture",{onLoad:n.props.onImageLoad,onError:t},e.imageSet.map(function(e,t){return c.default.createElement("source",{key:t,media:e.media,srcSet:e.srcSet})}),c.default.createElement("img",{alt:e.originalAlt,src:e.original})):c.default.createElement("img",{src:e.original,alt:e.originalAlt,srcSet:e.srcSet,sizes:e.sizes,title:e.originalTitle,onLoad:n.props.onImageLoad,onError:t}),e.description&&c.default.createElement("span",{className:"image-gallery-description"},e.description))},n._renderThumbInner=function(e){var t=n.props.onThumbnailError||n._handleImageError;return c.default.createElement("div",null,c.default.createElement("img",{src:e.thumbnail,alt:e.thumbnailAlt,title:e.thumbnailTitle,onError:t}),c.default.createElement("div",{className:"image-gallery-thumbnail-label"},e.thumbnailLabel))},n.state={currentIndex:e.startIndex,thumbsTranslate:0,offsetPercentage:0,galleryWidth:0,thumbnailsWrapperWidth:0,thumbnailsWrapperHeight:0,isFullscreen:!1,isPlaying:!1},e.lazyLoad&&(n._lazyLoaded=[]),n}return s(t,e),l(t,[{key:"componentWillReceiveProps",value:function(e){this.props.disableArrowKeys!==e.disableArrowKeys&&(e.disableArrowKeys?window.removeEventListener("keydown",this._handleKeyDown):window.addEventListener("keydown",this._handleKeyDown)),!e.lazyLoad||this.props.lazyLoad&&this.props.items===e.items||(this._lazyLoaded=[]),this.state.currentIndex>=e.items.length&&this.slideToIndex(0)}},{key:"componentDidUpdate",value:function(e,t){e.thumbnailPosition===this.props.thumbnailPosition&&e.showThumbnails===this.props.showThumbnails&&t.thumbnailsWrapperHeight===this.state.thumbnailsWrapperHeight&&t.thumbnailsWrapperWidth===this.state.thumbnailsWrapperWidth||this._handleResize(),t.currentIndex!==this.state.currentIndex&&(this.props.onSlide&&this.props.onSlide(this.state.currentIndex),this._updateThumbnailTranslate(t)),e.slideDuration!==this.props.slideDuration&&(this.slideToIndex=(0,f.default)(this._unthrottledSlideToIndex,this.props.slideDuration,{trailing:!1}))}},{key:"componentWillMount",value:function(){this._unthrottledSlideToIndex=this.slideToIndex,this.slideToIndex=(0,f.default)(this._unthrottledSlideToIndex,this.props.slideDuration,{trailing:!1}),this._handleResize=this._handleResize,this._debounceResize=(0,v.default)(this._handleResize,500),this._handleScreenChange=this._handleScreenChange,this._thumbnailDelay=300}},{key:"componentDidMount",value:function(){this._handleResize(),this.props.autoPlay&&this.play(),this.props.disableArrowKeys||window.addEventListener("keydown",this._handleKeyDown),window.addEventListener("resize",this._debounceResize),this._onScreenChangeEvent()}},{key:"componentWillUnmount",value:function(){this.props.disableArrowKeys||window.removeEventListener("keydown",this._handleKeyDown),this._debounceResize&&(window.removeEventListener("resize",this._debounceResize),this._debounceResize.cancel()),this._offScreenChangeEvent(),this._intervalId&&(window.clearInterval(this._intervalId),this._intervalId=null),this._resizeTimer&&window.clearTimeout(this._resizeTimer)}},{key:"play",value:function(){var e=this,t=arguments.length<=0||void 0===arguments[0]||arguments[0];if(!this._intervalId){var n=this.props,i=n.slideInterval,a=n.slideDuration;this.setState({isPlaying:!0}),this._intervalId=window.setInterval(function(){e.state.hovering||(e.props.infinite||e._canSlideRight()?e.slideToIndex(e.state.currentIndex+1):e.pause())},Math.max(i,a)),this.props.onPlay&&t&&this.props.onPlay(this.state.currentIndex)}}},{key:"pause",value:function(){var e=arguments.length<=0||void 0===arguments[0]||arguments[0];this._intervalId&&(window.clearInterval(this._intervalId),this._intervalId=null,this.setState({isPlaying:!1}),this.props.onPause&&e&&this.props.onPause(this.state.currentIndex))}},{key:"setModalFullscreen",value:function(e){this.setState({modalFullscreen:e}),this.props.onScreenChange&&this.props.onScreenChange(e)}},{key:"fullScreen",value:function(){var e=this._imageGallery;this.props.useBrowserFullscreen?e.requestFullscreen?e.requestFullscreen():e.msRequestFullscreen?e.msRequestFullscreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullscreen?e.webkitRequestFullscreen():this.setModalFullscreen(!0):this.setModalFullscreen(!0),this.setState({isFullscreen:!0})}},{key:"exitFullScreen",value:function(){this.state.isFullscreen&&(this.props.useBrowserFullscreen?document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.msExitFullscreen?document.msExitFullscreen():this.setModalFullscreen(!1):this.setModalFullscreen(!1),this.setState({isFullscreen:!1}))}},{key:"getCurrentIndex",value:function(){return this.state.currentIndex}},{key:"_onScreenChangeEvent",value:function(){var e=this;y.map(function(t){document.addEventListener(t,e._handleScreenChange)})}},{key:"_offScreenChangeEvent",value:function(){var e=this;y.map(function(t){document.removeEventListener(t,e._handleScreenChange)})}},{key:"_isThumbnailHorizontal",value:function(){var e=this.props.thumbnailPosition;return"left"===e||"right"===e}},{key:"_handleMouseOverThumbnails",value:function(e){var t=this;this.props.slideOnThumbnailHover&&(this.setState({hovering:!0}),this._thumbnailTimer&&(window.clearTimeout(this._thumbnailTimer),this._thumbnailTimer=null),this._thumbnailTimer=window.setTimeout(function(){t.slideToIndex(e)},this._thumbnailDelay))}},{key:"_setScrollDirection",value:function(e,t){var n=this.state,i=n.scrollingUpDown,a=n.scrollingLeftRight,r=Math.abs(e),s=Math.abs(t);s>r&&!i&&!a?this.setState({scrollingUpDown:!0}):a||i||this.setState({scrollingLeftRight:!0})}},{key:"_handleOnSwipedTo",value:function(e,t){var n=this.state,i=n.currentIndex,a=n.isTransitioning,r=i;!this._sufficientSwipeOffset()&&!t||a||(r+=e),e<0?this._canSlideLeft()||(r=i):this._canSlideRight()||(r=i),this._unthrottledSlideToIndex(r)}},{key:"_sufficientSwipeOffset",value:function(){return Math.abs(this.state.offsetPercentage)>this.props.swipeThreshold}},{key:"_onSwipingNoOp",value:function(){}},{key:"_canNavigate",value:function(){return this.props.items.length>=2}},{key:"_canSlideLeft",value:function(){return this.props.infinite||this.state.currentIndex>0}},{key:"_canSlideRight",value:function(){return this.props.infinite||this.state.currentIndex<this.props.items.length-1}},{key:"_updateThumbnailTranslate",value:function(e){if(0===this.state.currentIndex)this._setThumbsTranslate(0);else{var t=Math.abs(e.currentIndex-this.state.currentIndex),n=this._getThumbsTranslate(t);n>0&&(e.currentIndex<this.state.currentIndex?this._setThumbsTranslate(this.state.thumbsTranslate-n):e.currentIndex>this.state.currentIndex&&this._setThumbsTranslate(this.state.thumbsTranslate+n))}}},{key:"_setThumbsTranslate",value:function(e){this.setState({thumbsTranslate:e})}},{key:"_getThumbsTranslate",value:function(e){if(this.props.disableThumbnailScroll)return 0;var t=this.state,n=t.thumbnailsWrapperWidth,i=t.thumbnailsWrapperHeight,a=void 0;if(this._thumbnails){if(this._isThumbnailHorizontal()){if(this._thumbnails.scrollHeight<=i)return 0;a=this._thumbnails.scrollHeight-i}else{if(this._thumbnails.scrollWidth<=n||n<=0)return 0;a=this._thumbnails.scrollWidth-n}var r=this._thumbnails.children.length,s=a/(r-1);return e*s}}},{key:"_getAlignmentClassName",value:function(e){var t=this.state.currentIndex,n="",i="left",a="center",r="right";switch(e){case t-1:n=" "+i;break;case t:n=" "+a;break;case t+1:n=" "+r}return this.props.items.length>=3&&this.props.infinite&&(0===e&&t===this.props.items.length-1?n=" "+r:e===this.props.items.length-1&&0===t&&(n=" "+i)),n}},{key:"_isGoingFromFirstToLast",value:function(){var e=this.state,t=e.currentIndex,n=e.previousIndex,i=this.props.items.length-1;return 0===n&&t===i}},{key:"_isGoingFromLastToFirst",value:function(){var e=this.state,t=e.currentIndex,n=e.previousIndex,i=this.props.items.length-1;return n===i&&0===t}},{key:"_getTranslateXForTwoSlide",value:function(e){var t=this.state,n=t.currentIndex,i=t.offsetPercentage,a=t.previousIndex,r=-100*n,s=r+100*e+i;return i>0?this.direction="left":i<0&&(this.direction="right"),0===n&&1===e&&i>0?s=-100+i:1===n&&0===e&&i<0&&(s=100+i),n!==a?0===a&&0===e&&0===i&&"left"===this.direction?s=100:1===a&&1===e&&0===i&&"right"===this.direction&&(s=-100):0===n&&1===e&&0===i&&"left"===this.direction?s=-100:1===n&&0===e&&0===i&&"right"===this.direction&&(s=100),s}},{key:"_getThumbnailBarHeight",value:function(){return this._isThumbnailHorizontal()?{height:this.state.gallerySlideWrapperHeight}:{}}},{key:"_shouldPushSlideOnInfiniteMode",value:function(e){return!this._slideIsTransitioning(e)||this._ignoreIsTransitioning()&&!this._isFirstOrLastSlide(e)}},{key:"_slideIsTransitioning",value:function(e){var t=this.state,n=t.isTransitioning,i=t.previousIndex,a=t.currentIndex,r=!(e===i||e===a);return n&&r}},{key:"_isFirstOrLastSlide",value:function(e){var t=this.props.items.length-1,n=e===t,i=0===e;return n||i}},{key:"_ignoreIsTransitioning",value:function(){var e=this.state,t=e.previousIndex,n=e.currentIndex,i=this.props.items.length-1,a=Math.abs(t-n)>1,r=!(0===t&&n===i),s=!(t===i&&0===n);return a&&r&&s}},{key:"_getSlideStyle",value:function(e){var t=this.state,n=t.currentIndex,i=t.offsetPercentage,a=this.props,r=a.infinite,s=a.items,o=a.useTranslate3D,l=-100*n,u=s.length-1,c=l+100*e+i;r&&s.length>2&&(0===n&&e===u?c=-100+i:n===u&&0===e&&(c=100+i)),r&&2===s.length&&(c=this._getTranslateXForTwoSlide(e));var d="translate("+c+"%, 0)";return o&&(d="translate3d("+c+"%, 0, 0)"),{WebkitTransform:d,MozTransform:d,msTransform:d,OTransform:d,transform:d}}},{key:"_getThumbnailStyle",value:function(){var e=void 0,t=this.props.useTranslate3D;return this._isThumbnailHorizontal()?(e="translate(0, "+this.state.thumbsTranslate+"px)",t&&(e="translate3d(0, "+this.state.thumbsTranslate+"px, 0)")):(e="translate("+this.state.thumbsTranslate+"px, 0)",t&&(e="translate3d("+this.state.thumbsTranslate+"px, 0, 0)")),{WebkitTransform:e,MozTransform:e,msTransform:e,OTransform:e,transform:e}}},{key:"render",value:function(){var e=this,t=this.state,n=t.currentIndex,i=t.isFullscreen,a=t.modalFullscreen,r=t.isPlaying,s=t.scrollingLeftRight,l=this.props,u=l.infinite,d=l.preventDefaultTouchmoveEvent,p=this._getThumbnailStyle(),f=this.props.thumbnailPosition,m=this._slideLeft,v=this._slideRight,g=[],b=[],y=[];this.props.items.forEach(function(t,i){var a=e._getAlignmentClassName(i),r=t.originalClass?" "+t.originalClass:"",s=t.thumbnailClass?" "+t.thumbnailClass:"",l=t.renderItem||e.props.renderItem||e._renderItem,d=t.renderThumbInner||e.props.renderThumbInner||e._renderThumbInner,h=!e.props.lazyLoad||a||e._lazyLoaded[i];h&&e.props.lazyLoad&&(e._lazyLoaded[i]=!0);var p=e._getSlideStyle(i),f=c.default.createElement("div",{key:i,className:"image-gallery-slide"+a+r,style:o(p,e.state.style),onClick:e.props.onClick,onTouchMove:e.props.onTouchMove,onTouchEnd:e.props.onTouchEnd,onTouchStart:e.props.onTouchStart,onMouseOver:e.props.onMouseOver,onMouseLeave:e.props.onMouseLeave,role:e.props.onClick&&"button"},h?l(t):c.default.createElement("div",{style:{height:"100%"}}));if(u?e._shouldPushSlideOnInfiniteMode(i)&&g.push(f):g.push(f),e.props.showThumbnails&&b.push(c.default.createElement("a",{onMouseOver:e._handleMouseOverThumbnails.bind(e,i),onMouseLeave:e._handleMouseLeaveThumbnails,key:i,role:"button","aria-pressed":n===i?"true":"false","aria-label":"Go to Slide "+(i+1),className:"image-gallery-thumbnail"+(n===i?" active":"")+s,onClick:function(t){e.slideToIndex.call(e,i,t),e.props.onThumbnailClick&&e.props.onThumbnailClick(t,i)}},d(t))),e.props.showBullets){var m=function(a){return t.bulletOnClick&&t.bulletOnClick({item:t,itemIndex:i,currentIndex:n}),e.slideToIndex.call(e,i,a)};y.push(c.default.createElement("button",{key:i,type:"button",className:["image-gallery-bullet",n===i?"active":"",t.bulletClass||""].join(" "),onClick:m,"aria-pressed":n===i?"true":"false","aria-label":"Go to Slide "+(i+1)}))}});var w=c.default.createElement("div",{ref:function(t){return e._imageGallerySlideWrapper=t},className:"image-gallery-slide-wrapper "+f},this.props.renderCustomControls&&this.props.renderCustomControls(),this.props.showFullscreenButton&&this.props.renderFullscreenButton(this._toggleFullScreen,i),this.props.showPlayButton&&this.props.renderPlayPauseButton(this._togglePlay,r),this._canNavigate()?[this.props.showNav&&c.default.createElement("span",{key:"navigation"},this.props.renderLeftNav(m,!this._canSlideLeft()),this.props.renderRightNav(v,!this._canSlideRight())),this.props.disableSwipe?c.default.createElement("div",{className:"image-gallery-slides",key:"slides"},g):c.default.createElement(h.default,{className:"image-gallery-swipe",key:"swipeable",delta:0,flickThreshold:this.props.flickThreshold,onSwiping:this._handleSwiping,onSwipingLeft:this._onSwipingNoOp,onSwipingRight:this._onSwipingNoOp,onSwipingUp:this._onSwipingNoOp,onSwipingDown:this._onSwipingNoOp,onSwiped:this._handleOnSwiped,stopPropagation:this.props.stopPropagation,preventDefaultTouchmoveEvent:d||s},c.default.createElement("div",{className:"image-gallery-slides"},g))]:c.default.createElement("div",{className:"image-gallery-slides"},g),this.props.showBullets&&c.default.createElement("div",{className:"image-gallery-bullets"},c.default.createElement("div",{className:"image-gallery-bullets-container",role:"navigation","aria-label":"Bullet Navigation"},y)),this.props.showIndex&&c.default.createElement("div",{className:"image-gallery-index"},c.default.createElement("span",{className:"image-gallery-index-current"},this.state.currentIndex+1),c.default.createElement("span",{className:"image-gallery-index-separator"},this.props.indexSeparator),c.default.createElement("span",{className:"image-gallery-index-total"},this.props.items.length))),T=["image-gallery",this.props.additionalClass,a?"fullscreen-modal":""].filter(function(e){return"string"==typeof e}).join(" ");return c.default.createElement("div",{ref:function(t){return e._imageGallery=t},className:T,"aria-live":"polite"},c.default.createElement("div",{className:"image-gallery-content"+(i?" fullscreen":"")},("bottom"===f||"right"===f)&&w,this.props.showThumbnails&&c.default.createElement("div",{className:"image-gallery-thumbnails-wrapper "+f,style:this._getThumbnailBarHeight()},c.default.createElement("div",{className:"image-gallery-thumbnails",ref:function(t){return e._thumbnailsWrapper=t}},c.default.createElement("div",{ref:function(t){return e._thumbnails=t},className:"image-gallery-thumbnails-container",style:p,"aria-label":"Thumbnail Navigation"},b))),("top"===f||"left"===f)&&w))}}]),t}(c.default.Component);w.propTypes={flickThreshold:b.default.number,items:b.default.array.isRequired,showNav:b.default.bool,autoPlay:b.default.bool,lazyLoad:b.default.bool,infinite:b.default.bool,showIndex:b.default.bool,showBullets:b.default.bool,showThumbnails:b.default.bool,showPlayButton:b.default.bool,showFullscreenButton:b.default.bool,slideOnThumbnailHover:b.default.bool,disableThumbnailScroll:b.default.bool,disableArrowKeys:b.default.bool,disableSwipe:b.default.bool,useBrowserFullscreen:b.default.bool,preventDefaultTouchmoveEvent:b.default.bool,defaultImage:b.default.string,indexSeparator:b.default.string,thumbnailPosition:b.default.string,startIndex:b.default.number,slideDuration:b.default.number,slideInterval:b.default.number,swipeThreshold:b.default.number,swipingTransitionDuration:b.default.number,onSlide:b.default.func,onScreenChange:b.default.func,onPause:b.default.func,onPlay:b.default.func,onClick:b.default.func,onImageLoad:b.default.func,onImageError:b.default.func,onTouchMove:b.default.func,onTouchEnd:b.default.func,onTouchStart:b.default.func,onMouseOver:b.default.func,onMouseLeave:b.default.func,onThumbnailError:b.default.func,onThumbnailClick:b.default.func,renderCustomControls:b.default.func,renderLeftNav:b.default.func,renderRightNav:b.default.func,renderPlayPauseButton:b.default.func,renderFullscreenButton:b.default.func,renderItem:b.default.func,stopPropagation:b.default.bool,additionalClass:b.default.string,useTranslate3D:b.default.bool},w.defaultProps={items:[],showNav:!0,autoPlay:!1,lazyLoad:!1,infinite:!0,showIndex:!1,showBullets:!1,showThumbnails:!0,showPlayButton:!0,showFullscreenButton:!0,slideOnThumbnailHover:!1,disableThumbnailScroll:!1,disableArrowKeys:!1,disableSwipe:!1,useTranslate3D:!0,useBrowserFullscreen:!0,preventDefaultTouchmoveEvent:!1,flickThreshold:.4,stopPropagation:!1,indexSeparator:" / ",thumbnailPosition:"bottom",startIndex:0,slideDuration:450,swipingTransitionDuration:0,slideInterval:3e3,swipeThreshold:30,renderLeftNav:function(e,t){return c.default.createElement("button",{type:"button",className:"image-gallery-left-nav",disabled:t,onClick:e,"aria-label":"Previous Slide"})},renderRightNav:function(e,t){return c.default.createElement("button",{type:"button",className:"image-gallery-right-nav",disabled:t,onClick:e,"aria-label":"Next Slide"})},renderPlayPauseButton:function(e,t){return c.default.createElement("button",{type:"button",className:"image-gallery-play-button"+(t?" active":""),onClick:e,"aria-label":"Play or Pause Slideshow"})},renderFullscreenButton:function(e,t){return c.default.createElement("button",{type:"button",className:"image-gallery-fullscreen-button"+(t?" active":""),onClick:e,"aria-label":"Open Fullscreen"})}},t.default=w},169:function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(){return{x:null,y:null,swiping:!1,start:0}}function o(e){return"changedTouches"in e?{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:{x:e.clientX,y:e.clientY}}function l(e){return"touches"in e?{x:e.touches[0].clientX,y:e.touches[0].clientY}:{x:e.clientX,y:e.clientY}}function u(e,t){var n=o(e),i=n.x,a=n.y,r=t.x-i,s=t.y-a,l=Math.abs(r),u=Math.abs(s),c=Date.now()-t.start,d=Math.sqrt(l*l+u*u)/c;return{deltaX:r,deltaY:s,absX:l,absY:u,velocity:d}}var c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},d=n(1),h=n(2),p=n(129).default,f=function(e){function t(n,r){i(this,t);var s=a(this,e.call(this,n,r));return s.eventStart=s.eventStart.bind(s),s.eventMove=s.eventMove.bind(s),s.eventEnd=s.eventEnd.bind(s),s.mouseDown=s.mouseDown.bind(s),s.mouseMove=s.mouseMove.bind(s),s.mouseUp=s.mouseUp.bind(s),s.cleanupMouseListeners=s.cleanupMouseListeners.bind(s),s.setupMouseListeners=s.setupMouseListeners.bind(s),s.elementRef=s.elementRef.bind(s),s.setupTouchmoveEvent=s.setupTouchmoveEvent.bind(s),s.cleanupTouchmoveEvent=s.cleanupTouchmoveEvent.bind(s),s.hasPassiveSupport=p.hasSupport,s}return r(t,e),t.prototype.componentWillMount=function(){this.swipeable=s()},t.prototype.componentDidMount=function(){this.props.preventDefaultTouchmoveEvent&&this.setupTouchmoveEvent()},t.prototype.componentDidUpdate=function(e){e.disabled!==this.props.disabled&&(this.cleanupMouseListeners(),this.swipeable=s()),e.preventDefaultTouchmoveEvent&&!this.props.preventDefaultTouchmoveEvent?this.cleanupTouchmoveEvent():!e.preventDefaultTouchmoveEvent&&this.props.preventDefaultTouchmoveEvent&&this.setupTouchmoveEvent()},t.prototype.componentWillUnmount=function(){this.cleanupMouseListeners()},t.prototype.setupTouchmoveEvent=function(){this.element&&this.hasPassiveSupport&&this.element.addEventListener("touchmove",this.eventMove,{passive:!1})},t.prototype.setupMouseListeners=function(){document.addEventListener("mousemove",this.mouseMove),document.addEventListener("mouseup",this.mouseUp)},t.prototype.cleanupTouchmoveEvent=function(){this.element&&this.hasPassiveSupport&&this.element.removeEventListener("touchmove",this.eventMove,{passive:!1})},t.prototype.cleanupMouseListeners=function(){document.removeEventListener("mousemove",this.mouseMove),document.removeEventListener("mouseup",this.mouseUp)},t.prototype.mouseDown=function(e){this.props.trackMouse&&"mousedown"===e.type&&("function"==typeof this.props.onMouseDown&&this.props.onMouseDown(e),this.setupMouseListeners(),this.eventStart(e))},t.prototype.mouseMove=function(e){this.eventMove(e)},t.prototype.mouseUp=function(e){this.cleanupMouseListeners(),this.eventEnd(e)},t.prototype.eventStart=function(e){if(!(e.touches&&e.touches.length>1)){var t=l(e),n=t.x,i=t.y;this.props.stopPropagation&&e.stopPropagation(),this.swipeable={start:Date.now(),x:n,y:i,swiping:!1}}},t.prototype.eventMove=function(e){var t=this.props,n=t.stopPropagation,i=t.delta,a=t.onSwiping,r=t.onSwipingLeft,s=t.onSwipedLeft,o=t.onSwipingRight,l=t.onSwipedRight,c=t.onSwipingUp,d=t.onSwipedUp,h=t.onSwipingDown,p=t.onSwipedDown,f=t.preventDefaultTouchmoveEvent;if(this.swipeable.x&&this.swipeable.y&&!(e.touches&&e.touches.length>1)){var m=u(e,this.swipeable);if(!(m.absX<i&&m.absY<i)||this.swipeable.swiping){n&&e.stopPropagation(),a&&a(e,m.deltaX,m.deltaY,m.absX,m.absY,m.velocity);var v=!1;m.absX>m.absY?m.deltaX>0?(r||s)&&(r&&r(e,m.absX),v=!0):(o||l)&&(o&&o(e,m.absX),v=!0):m.deltaY>0?(c||d)&&(c&&c(e,m.absY),v=!0):(h||p)&&(h&&h(e,m.absY),v=!0),this.swipeable.swiping=!0,v&&f&&e.preventDefault()}}},t.prototype.eventEnd=function(e){var t=this.props,n=t.stopPropagation,i=t.flickThreshold,a=t.onSwiped,r=t.onSwipedLeft,o=t.onSwipedRight,l=t.onSwipedUp,c=t.onSwipedDown,d=t.onTap;if(this.swipeable.swiping){var h=u(e,this.swipeable);n&&e.stopPropagation();var p=h.velocity>i;a&&a(e,h.deltaX,h.deltaY,p,h.velocity),h.absX>h.absY?h.deltaX>0?r&&r(e,h.deltaX,p):o&&o(e,h.deltaX,p):h.deltaY>0?l&&l(e,h.deltaY,p):c&&c(e,h.deltaY,p)}else d&&d(e);this.swipeable=s()},t.prototype.elementRef=function(e){this.element=e,this.props.innerRef&&this.props.innerRef(e)},t.prototype.render=function(){var e=c({},this.props);return this.props.disabled||(e.onTouchStart=this.eventStart,this.props.preventDefaultTouchmoveEvent&&this.hasPassiveSupport||(e.onTouchMove=this.eventMove),e.onTouchEnd=this.eventEnd,e.onMouseDown=this.mouseDown),e.ref=this.elementRef,delete e.onSwiped,delete e.onSwiping,delete e.onSwipingUp,delete e.onSwipingRight,delete e.onSwipingDown,delete e.onSwipingLeft,delete e.onSwipedUp,delete e.onSwipedRight,delete e.onSwipedDown,delete e.onSwipedLeft,delete e.onTap,delete e.flickThreshold,delete e.delta,delete e.preventDefaultTouchmoveEvent,delete e.stopPropagation,delete e.nodeName,delete e.children,delete e.trackMouse,delete e.disabled,delete e.innerRef,d.createElement(this.props.nodeName,e,this.props.children)},t}(d.Component);f.propTypes={onSwiped:h.func,onSwiping:h.func,onSwipingUp:h.func,onSwipingRight:h.func,onSwipingDown:h.func,onSwipingLeft:h.func,onSwipedUp:h.func,onSwipedRight:h.func,onSwipedDown:h.func,onSwipedLeft:h.func,onTap:h.func,flickThreshold:h.number,delta:h.number,preventDefaultTouchmoveEvent:h.bool,stopPropagation:h.bool,nodeName:h.string,trackMouse:h.bool,disabled:h.bool,innerRef:h.func,children:h.node},f.defaultProps={flickThreshold:.6,delta:10,preventDefaultTouchmoveEvent:!1,stopPropagation:!1,nodeName:"div",disabled:!1},e.exports=f},291:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{
default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var o=n(1),l=i(o),u=n(164),c=i(u);n(585);var d=function(e){function t(n){a(this,t);var i=r(this,e.call(this,n)),s=[],o={};return null!=n.data&&null!=n.data.photos&&n.data.photos.edges.map(function(e,t){var n=e.node;n.originalSizes=n.sizes,n.original=n.originalSizes.src,n.thumbnail=n.original,n.srcSet=n.originalSizes.srcSet,n.sizes=n.originalSizes.sizes;var i=new RegExp("static/(.*)_","i"),a=n.original.match(i)[1];n.description=a.charAt(0).toUpperCase()+a.slice(1),null==o[a]?o[a]=[t]:o[a].push(t),s.push(n)}),i.state={photos:s,countryMap:o,currentIndex:0,menuOpen:!1},i.slideToCountry=i.slideToCountry.bind(i),i.changedImage=i.changedImage.bind(i),i.toggleMenu=i.toggleMenu.bind(i),i}return s(t,e),t.prototype.slideToCountry=function(e){if(e&&this._imageGallery){var t=this.state.countryMap[e][0];this._imageGallery.slideToIndex(t),this.setState({currentIndex:t})}},t.prototype.changedImage=function(e){this.setState({currentIndex:e})},t.prototype.toggleMenu=function(){this.setState({menuOpen:!this.state.menuOpen})},t.prototype.render=function(){var e=this;return l.default.createElement("div",{className:"photos-page","data-flex":!0,"data-layout":"column"},l.default.createElement("div",{className:"content-container","data-layout-gt-md":"row","data-layout-md":"column","data-layout-align-gt-md":"center start","data-layout-align-md":"center center"},l.default.createElement("div",{"data-layout":"column","data-flex-order-gt-md":"1","data-flex-order":"2"},l.default.createElement("div",{className:"photos-container"},l.default.createElement(c.default,{ref:function(t){return e._imageGallery=t},items:this.state.photos,slideInterval:5e3,onSlide:this.changedImage}))),l.default.createElement("div",{className:"country-filter","data-layout":"column","data-flex-order-gt-md":"2","data-flex-order":"1"},l.default.createElement("div",{className:"menu-bars","data-layout":"column","data-layout-align":"center end"},l.default.createElement("button",{onClick:this.toggleMenu},l.default.createElement("i",{className:"fa fa-bars"}))),l.default.createElement("ul",{className:"navigation-container "+(this.state.menuOpen?"open":"closed")},Object.keys(this.state.countryMap).map(function(t){return l.default.createElement("li",{key:t,onClick:e.slideToCountry.bind(e,t),className:"navigation-link "+(e.state.countryMap[t].includes(e.state.currentIndex)?"is-current":"")},l.default.createElement("a",null,t))})))))},t}(l.default.Component);t.default=d;t.pageQuery="** extracted graphql fragment **"},585:function(e,t){}});
//# sourceMappingURL=component---src-pages-photos-js-70e30b64188308f37d85.js.map