(function(){"use strict";var e={7684:function(e,n,o){var l=o(5130),t=o(6768);function u(e,n,o,l,u,a){const i=(0,t.g2)("HelloWorld");return(0,t.uX)(),(0,t.Wv)(i,{msg:"Welcome to Your Vue.js App"})}var a=o(144),i=o(2582);const r=e=>((0,t.Qi)("data-v-7c8e04be"),e=e(),(0,t.jt)(),e),c=r((()=>(0,t.Lk)("br",null,null,-1))),p=r((()=>(0,t.Lk)("br",null,null,-1))),d=r((()=>(0,t.Lk)("br",null,null,-1))),v=["src"];var f={__name:"HelloWorld",setup(e){const n=(0,a.KR)(!0),o=(0,a.KR)(!0),u=(0,a.KR)(!0),r=(0,a.KR)(!0),f=(0,a.KR)(10),b=(0,a.KR)(10),s=(0,a.KR)("jpg/jpeg/png/webp/bmp/heic/livp"),h=(0,a.KR)("jpg/jpeg/png/webp/bmp/heic/livp"),k=(0,a.KR)("http://www.baidu.com"),m=(0,a.KR)("https://img1.baidu.com/it/u=1965663592,580944689&fm=253&app=120&size=w931&n=0&f=JPEG&fmt=auto?sec=1712077200&t=dbdc0da29ffc3858139a0c988c04a14a");let y;function g(){window.open(k.value)}function L(){"undefined"!=typeof hcy&&hcy.hcy_getLocalSSOToken()}function w(){let e=JSON.stringify({action:"老骨头生成",categoryParam:{cloudPhotoSize:Math.ceil(1024*b.value*1024),localPhotoSize:Math.ceil(1024*f.value*1024),cloudPhotoFormat:h.value,localPhotoFormat:s.value,allPhoto:n.value,personPhoto:o.value,thingPhoto:u.value,locationPhoto:r.value}});console.log(e),"undefined"!=typeof hcy&&hcy.selectPhoto(i.o4.encode(e))}return window.hcy_getLocalSSOTokenCallback=function(e){alert("token="+e)},window.selectPhotoCallback=function(e){let n=JSON.parse(i.o4.decode(e));console.log("selectPhotoCallback,obj="+JSON.stringify(n)),n.url?m.value=n.url:n.data&&(1==n.index?y=n.data:y+=n.data,n.index==n.total&&(m.value="data:image/png;base64,"+y))},(e,a)=>((0,t.uX)(),(0,t.CE)("div",null,[(0,t.Lk)("div",null,[(0,t.Lk)("button",{onClick:L},"获取token")]),(0,t.Lk)("div",null,[(0,t.eW)(" url"),(0,t.bo)((0,t.Lk)("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=e=>k.value=e)},null,512),[[l.Jo,k.value]]),c,(0,t.Lk)("button",{onClick:g},"打开新window")]),(0,t.Lk)("div",null,[(0,t.bo)((0,t.Lk)("input",{type:"checkbox","onUpdate:modelValue":a[1]||(a[1]=e=>n.value=e)},null,512),[[l.lH,n.value]]),(0,t.eW)("全部 "),(0,t.bo)((0,t.Lk)("input",{type:"checkbox","onUpdate:modelValue":a[2]||(a[2]=e=>o.value=e)},null,512),[[l.lH,o.value]]),(0,t.eW)("人物 "),(0,t.bo)((0,t.Lk)("input",{type:"checkbox","onUpdate:modelValue":a[3]||(a[3]=e=>u.value=e)},null,512),[[l.lH,u.value]]),(0,t.eW)("事物 "),(0,t.bo)((0,t.Lk)("input",{type:"checkbox","onUpdate:modelValue":a[4]||(a[4]=e=>r.value=e)},null,512),[[l.lH,r.value]]),(0,t.eW)("地点 ")]),(0,t.Lk)("div",null,[(0,t.eW)(" 本地相册最大值mb"),(0,t.bo)((0,t.Lk)("input",{type:"number","onUpdate:modelValue":a[5]||(a[5]=e=>f.value=e)},null,512),[[l.Jo,f.value]]),p,(0,t.eW)(" 云相册最大值mb"),(0,t.bo)((0,t.Lk)("input",{type:"number","onUpdate:modelValue":a[6]||(a[6]=e=>b.value=e)},null,512),[[l.Jo,b.value]])]),(0,t.Lk)("div",null,[(0,t.eW)(" 本地相册限制格式"),(0,t.bo)((0,t.Lk)("input",{type:"text","onUpdate:modelValue":a[7]||(a[7]=e=>s.value=e)},null,512),[[l.Jo,s.value]]),d,(0,t.eW)(" 云相册限制格式b"),(0,t.bo)((0,t.Lk)("input",{type:"text","onUpdate:modelValue":a[8]||(a[8]=e=>h.value=e)},null,512),[[l.Jo,h.value]])]),(0,t.Lk)("div",null,[(0,t.Lk)("button",{onClick:w},"选择相片")]),(0,t.Lk)("div",null,[(0,t.Lk)("img",{src:m.value,style:{width:"200px"}},null,8,v)])]))}},b=o(1241);const s=(0,b.A)(f,[["__scopeId","data-v-7c8e04be"]]);var h=s,k={name:"App",components:{HelloWorld:h}};const m=(0,b.A)(k,[["render",u]]);var y=m;(0,l.Ef)(y).mount("#app")}},n={};function o(l){var t=n[l];if(void 0!==t)return t.exports;var u=n[l]={exports:{}};return e[l].call(u.exports,u,u.exports,o),u.exports}o.m=e,function(){var e=[];o.O=function(n,l,t,u){if(!l){var a=1/0;for(p=0;p<e.length;p++){l=e[p][0],t=e[p][1],u=e[p][2];for(var i=!0,r=0;r<l.length;r++)(!1&u||a>=u)&&Object.keys(o.O).every((function(e){return o.O[e](l[r])}))?l.splice(r--,1):(i=!1,u<a&&(a=u));if(i){e.splice(p--,1);var c=t();void 0!==c&&(n=c)}}return n}u=u||0;for(var p=e.length;p>0&&e[p-1][2]>u;p--)e[p]=e[p-1];e[p]=[l,t,u]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var l in n)o.o(n,l)&&!o.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:n[l]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={524:0};o.O.j=function(n){return 0===e[n]};var n=function(n,l){var t,u,a=l[0],i=l[1],r=l[2],c=0;if(a.some((function(n){return 0!==e[n]}))){for(t in i)o.o(i,t)&&(o.m[t]=i[t]);if(r)var p=r(o)}for(n&&n(l);c<a.length;c++)u=a[c],o.o(e,u)&&e[u]&&e[u][0](),e[u]=0;return o.O(p)},l=self["webpackChunkaihelper"]=self["webpackChunkaihelper"]||[];l.forEach(n.bind(null,0)),l.push=n.bind(null,l.push.bind(l))}();var l=o.O(void 0,[504],(function(){return o(7684)}));l=o.O(l)})();
//# sourceMappingURL=app.aa4160a1.js.map