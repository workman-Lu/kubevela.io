(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[29082],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77263:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={title:"vela cluster join"},l={unversionedId:"cli/vela_cluster_join",id:"cli/vela_cluster_join",isDocsHomePage:!1,title:"vela cluster join",description:"join managed cluster",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/cli/vela_cluster_join.md",sourceDirName:"cli",slug:"/cli/vela_cluster_join",permalink:"/zh/docs/next/cli/vela_cluster_join",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/cli/vela_cluster_join.md",version:"current",lastUpdatedBy:"Jianbo Sun",lastUpdatedAt:1641806875,formattedLastUpdatedAt:"2022/1/10",frontMatter:{title:"vela cluster join"}},c=[{value:"Synopsis",id:"synopsis",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Options",id:"options",children:[]},{value:"SEE ALSO",id:"see-also",children:[]}],u={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"join managed cluster"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"join managed cluster by kubeconfig"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"vela cluster join [KUBECONFIG] [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Join cluster declared in my-child-cluster.kubeconfig\n> vela cluster join my-child-cluster.kubeconfig --name example-cluster\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --create-namespace string   Specifies the namespace need to create in managedCluster\n  -t, --engine string             Specify the cluster management engine. If empty, it will use cluster-gateway cluster management solution. Default to be empty.\n  -h, --help                      help for join\n      --in-cluster-boostrap       If true, the registering managed cluster will use the internal endpoint prescribed in the hub cluster\'s configmap "kube-public/cluster-info to register "itself to the hub cluster. Otherwise use the original endpoint from the hub kubeconfig. (default true)\n  -n, --name string               Specify the cluster name. If empty, it will use the cluster name in config file. Default to be empty.\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"vela_cluster"},"vela cluster"),"\t - Manage Kubernetes Clusters")),(0,o.kt)("h4",{id:"go-back-to-cli-commands-homepage"},"Go Back to ",(0,o.kt)("a",{parentName:"h4",href:"vela"},"CLI Commands")," Homepage."),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-10-jan-2022-refer-to-script-in-kubevela"},"Auto generated by spf13/cobra on 10-Jan-2022, refer to ",(0,o.kt)("a",{parentName:"h6",href:"https://github.com/oam-dev/kubevela/tree/master/hack/docgen"},"script in KubeVela"),"."))}s.isMDXComponent=!0}}]);