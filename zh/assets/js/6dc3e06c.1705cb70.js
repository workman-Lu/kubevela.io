(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[30582],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(t),d=o,m=f["".concat(i,".").concat(d)]||f[d]||s[d]||a;return t?n.createElement(m,p(p({ref:r},u),{},{components:t})):n.createElement(m,p({ref:r},u))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=f;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,p[1]=c;for(var l=2;l<a;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2567:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return i},default:function(){return u}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),p={title:"\u7aef\u53e3\u8f6c\u53d1"},c={unversionedId:"developers/port-forward",id:"version-v1.1/developers/port-forward",isDocsHomePage:!1,title:"\u7aef\u53e3\u8f6c\u53d1",description:"\u5f53\u4f60\u7684 web \u670d\u52a1 Application \u5df2\u7ecf\u88ab\u90e8\u7f72\u5c31\u53ef\u4ee5\u901a\u8fc7 port-forward \u6765\u672c\u5730\u8bbf\u95ee\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.1/developers/port-forward.md",sourceDirName:"developers",slug:"/developers/port-forward",permalink:"/zh/docs/developers/port-forward",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/developers/port-forward.md",version:"v1.1",lastUpdatedBy:"yangsoon",lastUpdatedAt:1631690672,formattedLastUpdatedAt:"2021/9/15",frontMatter:{title:"\u7aef\u53e3\u8f6c\u53d1"}},i=[],l={toc:i};function u(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5f53\u4f60\u7684 web \u670d\u52a1 Application \u5df2\u7ecf\u88ab\u90e8\u7f72\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"port-forward")," \u6765\u672c\u5730\u8bbf\u95ee\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela ls\nNAME            APP     WORKLOAD      TRAITS    STATUS      CREATED-TIME\nexpress-server  testapp webservice              Deployed    2020-09-18 22:42:04 +0800 CST\n")),(0,a.kt)("p",null,"\u5b83\u5c06\u76f4\u63a5\u4e3a\u4f60\u6253\u5f00\u6d4f\u89c8\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ vela port-forward testapp\nForwarding from 127.0.0.1:8080 -> 80\nForwarding from [::1]:8080 -> 80\n\nForward successfully! Opening browser ...\nHandling connection for 8080\nHandling connection for 8080\n")))}u.isMDXComponent=!0}}]);