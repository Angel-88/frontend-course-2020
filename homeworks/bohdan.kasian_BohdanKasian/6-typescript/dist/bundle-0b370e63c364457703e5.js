!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(1),r(2)},function(e,t,r){},function(e,t,r){"use strict";window.addEventListener("load",(function(){var e=document.querySelector("[data-score]"),t=document.querySelector("[data-cube]"),r=document.querySelector("[data-cube-score]"),n=document.querySelector("[data-key]"),o=document.querySelector("[data-progress-bar]"),s=document.querySelector("[data-cube-end-game]"),c=document.querySelector(".start"),a=document.querySelector(".restart"),i=document.querySelector(".end"),u=function(){function e(e,t,r,n,o,s,c,a,i,u){var l=this;this.score=e,this.currentKey=t,this.currentKeyPress=r,this.interval=n,this.scoreElement=o,this.cubeScoreElement=s,this.keyElement=c,this.cubeElement=a,this.progressBarElement=i,this.endGameElem=u,this.end=function(){clearInterval(l.startInterval),l.endGameElem.innerText="press start game"},this.startKeysInterval=function(){var e=0,t=l.currentKeyPress,r=Math.random().toString(36).substr(3,1);l.progressBarElement.style.width="0%",l.keyElement.innerText=r,l.currentKey=r.charCodeAt(0);var n=setInterval((function(){e++,l.progressBarElement.style.width=Number(l.progressBarElement.style.width.slice(0,-1))+1+"%",100===e&&(clearInterval(n),t===l.currentKeyPress&&l.removeScore(Math.floor(5*Math.random()+10)))}),l.interval/100)},this.domJobs=function(e){l.scoreElement.innerText=String(l.score),l.cubeElement.style.width=l.score+"px",l.cubeElement.style.height=l.score+"px",l.cubeScoreElement.innerText=String(e)},this.subscribeOnKeyPress=function(){if(l.currentKey===l.currentKeyPress){var e=Math.floor(5*Math.random()+5);clearInterval(l.startInterval),l.addScore(e),l.startInterval=setInterval(l.startKeysInterval,l.interval)}else{var t=Math.floor(5*Math.random()+20);clearInterval(l.startInterval),l.removeScore(t),l.startInterval=setInterval(l.startKeysInterval,l.interval)}l.endGame()}}return e.prototype.start=function(){var e=this;this.endGameElem.innerText="",this.scoreElement.innerText=String(this.score),this.startInterval=setInterval((function(){return e.startKeysInterval()}),this.interval),window.addEventListener("keydown",(function(t){e.currentKeyPress=t.key.charCodeAt(0),e.subscribeOnKeyPress()}))},e.prototype.addScore=function(e){this.score+=e,this.domJobs(+e)},e.prototype.removeScore=function(e){this.score-=e,this.domJobs(-e)},e.prototype.endGame=function(){this.score>=200?(document.body.style.fontSize="120px",document.body.style.display="flex",document.body.style.justifyContent="center",document.body.style.alignItems="center",document.body.style.background="red",document.body.innerHTML="YOU DIED ))))))))"):this.score<=0&&(document.body.style.fontSize="120px",document.body.style.display="flex",document.body.style.justifyContent="center",document.body.style.alignItems="center",document.body.style.background="green",document.body.innerHTML="YOU DIED")},e}(),l=new u(100,0,0,2e3,e,r,n,t,o,s);c.addEventListener("click",(function(){return l.start()})),a.addEventListener("click",(function(){return new u(100,0,0,2e3,e,r,n,t,o,s).start()})),i.addEventListener("click",(function(){return l.end()}))}))}]);