(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{3:function(t,e,n){}}]),function(t){function e(e){for(var r,i,s=e[0],u=e[1],p=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);for(a&&a(e);f.length;)f.shift()();return c.push.apply(c,p||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(c.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={0:0},c=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window.webpackJsonp=window.webpackJsonp||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var p=0;p<s.length;p++)e(s[p]);var a=u;c.push([5,1]),n()}([function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.blocks}()},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n(0),c=(n(3),n(1));n(4);Object(r.registerBlockType)("create-block/dynamic-posts",{title:Object(o.__)("Dynamic Posts","dynamic-posts"),description:Object(o.__)("Example block written with ESNext standard and JSX support – build step required.","dynamic-posts"),category:"widgets",icon:"smiley",supports:{html:!1},edit:function(t){var e=t.className;return Object(c.createElement)("p",{className:e},Object(o.__)("Dynamic Posts – hello from the editor!","dynamic-posts"))},save:function(){return Object(c.createElement)("p",null,Object(o.__)("Dynamic Posts – hello from the saved content!","dynamic-posts"))}})}]);