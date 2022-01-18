(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[35530],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,b=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(b,i(i({ref:n},p),{},{components:t})):r.createElement(b,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},57289:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),i={title:"\u8d44\u6e90\u6a21\u677f"},s={unversionedId:"end-user/components/cue/raw",id:"version-v1.2/end-user/components/cue/raw",isDocsHomePage:!1,title:"\u8d44\u6e90\u6a21\u677f",description:"KubeVela \u53ef\u4ee5\u4ee5\u8d44\u6e90\u6a21\u677f\u7684\u65b9\u5f0f\u76f4\u63a5\u90e8\u7f72\u4efb\u4f55 Kubernetes \u5bf9\u8c61\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-v1.2/end-user/components/cue/raw.md",sourceDirName:"end-user/components/cue",slug:"/end-user/components/cue/raw",permalink:"/zh/docs/end-user/components/cue/raw",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/end-user/components/cue/raw.md",version:"v1.2",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642212376,formattedLastUpdatedAt:"2022/1/15",frontMatter:{title:"\u8d44\u6e90\u6a21\u677f"},sidebar:"version-v1.2/docs",previous:{title:"Kubernetes \u7ec4\u4ef6",permalink:"/zh/docs/end-user/components/kustomize"},next:{title:"\u83b7\u53d6\u66f4\u591a",permalink:"/zh/docs/end-user/components/more"}},c=[{value:"\u5982\u4f55\u4f7f\u7528",id:"\u5982\u4f55\u4f7f\u7528",children:[]},{value:"\u5c5e\u6027\u8bf4\u660e",id:"\u5c5e\u6027\u8bf4\u660e",children:[{value:"K8s-Object",id:"k8s-object",children:[]}]}],l={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"KubeVela \u53ef\u4ee5\u4ee5\u8d44\u6e90\u6a21\u677f\u7684\u65b9\u5f0f\u76f4\u63a5\u90e8\u7f72\u4efb\u4f55 Kubernetes \u5bf9\u8c61\u3002"),(0,o.kt)("h2",{id:"\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"),(0,o.kt)("p",null,"\u6bd4\u5982\u4e00\u4e2a Job\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-raw\nspec:\n  components:\n    - name: myjob\n      type: k8s-objects\n      properties:\n        objects:\n        - apiVersion: batch/v1\n          kind: Job\n          metadata:\n            name: pi\n          spec:\n            template:\n              spec:\n                containers:\n                - name: pi\n                  image: perl\n                  command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]\n                restartPolicy: Never\n            backoffLimit: 4\n')),(0,o.kt)("p",null,"\u4e5f\u652f\u6301\u591a\u4e2a\u8d44\u6e90\uff0c\u4f46\u662f\u8981\u628a\u4f60\u7684\u4e3b\u8981\u5de5\u4f5c\u8d1f\u8f7d\u653e\u5728\u7b2c\u4e00\u4e2a\uff0cKubeVela \u7684 traits \u53ea\u4f1a\u5bf9\u7b2c\u4e00\u4e2a\u4f4d\u7f6e\u7684 Kubernetes \u5bf9\u8c61\u751f\u6548\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: core.oam.dev/v1beta1\nkind: Application\nmetadata:\n  name: app-stateful-service\nspec:\n  components:\n    - name: my-sts\n      type: k8s-objects\n      properties:\n        objects:\n        - apiVersion: apps/v1\n          kind: StatefulSet\n          metadata:\n            name: web\n          spec:\n            selector:\n              matchLabels:\n                app: nginx # has to match .spec.template.metadata.labels\n            serviceName: "nginx"\n            replicas: 3 # by default is 1\n            template:\n              metadata:\n                labels:\n                  app: nginx # has to match .spec.selector.matchLabels\n              spec:\n                terminationGracePeriodSeconds: 10\n                containers:\n                - name: nginx\n                  image: k8s.gcr.io/nginx-slim:0.8\n                  ports:\n                  - containerPort: 80\n                    name: web\n                  volumeMounts:\n                  - name: www\n                    mountPath: /usr/share/nginx/html\n            volumeClaimTemplates:\n            - metadata:\n                name: www\n              spec:\n                accessModes: [ "ReadWriteOnce" ]\n                storageClassName: "my-storage-class"\n                resources:\n                  requests:\n                    storage: 1Gi\n        - apiVersion: v1\n          kind: Service\n          metadata:\n            name: nginx\n            labels:\n              app: nginx\n          spec:\n            ports:\n            - port: 80\n              name: web\n            clusterIP: None\n            selector:\n              app: nginx\n')),(0,o.kt)("h2",{id:"\u5c5e\u6027\u8bf4\u660e"},"\u5c5e\u6027\u8bf4\u660e"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,o.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"objects"),(0,o.kt)("td",{parentName:"tr",align:null},"Kubernetes \u8d44\u6e90\u5217\u8868"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#K8s-Object"},"[]K8s-Object")),(0,o.kt)("td",{parentName:"tr",align:null},"true"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("h3",{id:"k8s-object"},"K8s-Object"),(0,o.kt)("p",null,"\u5217\u8868\u4e2d\u7684\u5143\u7d20\u4e3a\u5b8c\u6574\u7684 Kubernetes \u8d44\u6e90\u7ed3\u6784\u4f53\u3002"))}p.isMDXComponent=!0}}]);