(()=>{"use strict";var t={705:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var s="",n=void 0!==e[5];return e[4]&&(s+="@supports (".concat(e[4],") {")),e[2]&&(s+="@media ".concat(e[2]," {")),n&&(s+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),s+=t(e),n&&(s+="}"),e[2]&&(s+="}"),e[4]&&(s+="}"),s})).join("")},e.i=function(t,s,n,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(n)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(o[c]=!0)}for(var l=0;l<t.length;l++){var h=[].concat(t[l]);n&&o[h[0]]||(void 0!==r&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=r),s&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=s):h[2]=s),i&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=i):h[4]="".concat(i)),e.push(h))}},e}},738:t=>{t.exports=function(t){return t[1]}},810:(t,e,s)=>{s.d(e,{Z:()=>a});var n=s(738),i=s.n(n),r=s(705),o=s.n(r)()(i());o.push([t.id,"body {\r\n  margin: 0;\r\n  font-family: sans-serif;\r\n}\r\n\r\n.container {\r\n  max-width: 900px;\r\n  width: 90%;\r\n  margin: 100px auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  gap: 5px;\r\n  justify-content: flex-start;\r\n}\r\n\r\n#canvas {\r\n  background-color: #d6d6d6;\r\n}",""]);const a=o},379:t=>{var e=[];function s(t){for(var s=-1,n=0;n<e.length;n++)if(e[n].identifier===t){s=n;break}return s}function n(t,n){for(var r={},o=[],a=0;a<t.length;a++){var c=t[a],l=n.base?c[0]+n.base:c[0],h=r[l]||0,d="".concat(l," ").concat(h);r[l]=h+1;var u=s(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var p=i(f,n);n.byIndex=a,e.splice(a,0,{identifier:d,updater:p,references:1})}o.push(d)}return o}function i(t,e){var s=e.domAPI(e);return s.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;s.update(t=e)}else s.remove()}}t.exports=function(t,i){var r=n(t=t||[],i=i||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=s(r[o]);e[a].references--}for(var c=n(t,i),l=0;l<r.length;l++){var h=s(r[l]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}r=c}}},569:t=>{var e={};t.exports=function(t,s){var n=function(t){if(void 0===e[t]){var s=document.querySelector(t);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch(t){s=null}e[t]=s}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(s)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,s)=>{t.exports=function(t){var e=s.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(s){!function(t,e,s){var n="";s.supports&&(n+="@supports (".concat(s.supports,") {")),s.media&&(n+="@media ".concat(s.media," {"));var i=void 0!==s.layer;i&&(n+="@layer".concat(s.layer.length>0?" ".concat(s.layer):""," {")),n+=s.css,i&&(n+="}"),s.media&&(n+="}"),s.supports&&(n+="}");var r=s.sourceMap;r&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,s)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function s(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={id:n,exports:{}};return t[n](r,r.exports,s),r.exports}s.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return s.d(e,{a:e}),e},s.d=(t,e)=>{for(var n in e)s.o(e,n)&&!s.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{class t{static lines=[];constructor(e,s,n,i){this.startX=e,this.startY=s,this.endX=n,this.endY=i,t.lines.push(this)}draw(t){t.beginPath(),t.moveTo(this.startX,this.startY),t.lineTo(this.endX,this.endY),t.stroke()}}class e{static dots=[];constructor(t,s){this.x=t,this.y=s,this.size=5,this.left=null,this.right=null,e.dots.push(this)}static connectDots(){[...e.dots].sort(((t,e)=>t.x>e.x?1:e.x>t.x?-1:0)).forEach((e=>{const s=e.getClosestRight();s&&new t(e.x,e.y,s.x,s.y)}))}draw(t){t.beginPath(),t.arc(this.x,this.y,this.size,0,2*Math.PI),t.fillStyle="#000",t.fill(),t.stroke()}remove(){e.dots=e.dots.filter((t=>t.x!==this.x))}getClosestLeft(){let t=null,s=null;return e.dots.forEach((e=>{if(e.x>=this.x)return;const n=Math.abs(e.x-this.x);(null===t||t>n)&&(s=e,t=n)})),s}getClosestRight(){let t=null,s=null;return e.dots.forEach((e=>{if(e.x<=this.x)return;const n=Math.abs(e.x-this.x);(null===t||t>n)&&(s=e,t=n)})),s}}class n{static run(t){return new Promise((async e=>{if(!1===t())return e(!0);window.requestAnimationFrame((()=>{e(n.run(t))}))}))}}var i=s(379),r=s.n(i),o=s(795),a=s.n(o),c=s(569),l=s.n(c),h=s(565),d=s.n(h),u=s(216),f=s.n(u),p=s(589),m=s.n(p),v=s(810),g={};g.styleTagTransform=m(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=f(),r()(v.Z,g),v.Z&&v.Z.locals&&v.Z.locals;const x=new class{constructor(t,e){this.el=document.querySelector(t),this.positions=[],this.width=e.width,this.height=e.height,this.onClick=e.onClick.bind(this),this.init()}setOffsets(){const{x:t,y:e}=this.el.getBoundingClientRect();this.offsetX=t,this.offsetY=e}init(){this.ctx=this.el.getContext("2d"),this.el.setAttribute("width",this.width),this.el.setAttribute("height",this.height),this.setOffsets=this.setOffsets.bind(this),this.setOffsets(),this.el.addEventListener("click",this.onClick),window.addEventListener("resize",this.setOffsets)}drawElement(t){t.draw(this.ctx)}clear(){this.ctx.clearRect(0,0,this.width,this.height)}redraw(...t){this.clear(),t.forEach((t=>{this.drawElement(t)}))}}("#canvas",{width:800,height:600,onClick:async function(t){const{clientX:s,clientY:i}=t,r=s-this.offsetX,o=i-this.offsetY,a=w.getClosestColl(r),c=e.dots.find((t=>t.x===a));if(c){let t=c.y;const s=5,i=o>c.y;await n.run((()=>{t=i?t+s:t-s;const n=new e(a,t);if(y(),n.remove(),i&&t>=o||!i&&t<=o)return!1}))}new e(a,o),y()}}),w=new class{constructor(t){this.colls=t.colls,this.rows=t.rows,this.marginX=t.marginY,this.width=t.width,this.height=t.height,this.lineWidth=t.lineWidth,this.xPositions=[],this.yPositions=[]}generateGrid(){const t=Math.floor(this.width/this.colls),e=Math.floor(this.height/this.rows);for(let e=0;e<=this.colls;e++){const s=this.marginX+e*t;this.xPositions.push(s)}for(let t=0;t<this.rows;t++){const s=this.marginX+t*e;this.yPositions.push(s)}}draw(t){t.fillStyle="#ABABAB",this.xPositions.forEach((e=>{t.fillRect(e,0,this.lineWidth,this.height)})),this.yPositions.forEach((e=>{t.fillRect(0,e,this.width,this.lineWidth)}))}getClosestColl(t){let e=null,s=null;return this.xPositions.forEach((n=>{const i=Math.abs(t-n);(null===e||i<=e)&&(e=i,s=n)})),s}}({colls:10,rows:10,marginY:50,width:x.width,height:x.height,lineWidth:1});w.generateGrid(),x.drawElement(w);const y=()=>{t.lines=[],e.connectDots(),x.redraw(w,...e.dots,...t.lines)};document.querySelector("#button-clear").addEventListener("click",(()=>{x.clear(),e.dots=[],t.lines=[],x.drawElement(w)}))})()})();