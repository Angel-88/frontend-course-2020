(()=>{var t=document.getElementById("randomSymbol"),e=document.getElementById("randomInt"),n=document.getElementById("notification");new(function(){function o(t,e,n,o,r,s){this.text=t,this.key=e,this.score=n,this.randomSymbol=o,this.randomInt=r,this.notification=s}return o.prototype.start=function(){this.interval=setInterval(this.funContainer.bind(this),2e3),this.pressTheButton()},o.prototype.funContainer=function(){this.compareSymbols(),this.endGame()},o.prototype.getRandomInt=function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t))+t},o.prototype.showEndMessage=function(t){n.classList.add("endGame"),n.innerHTML=t,clearInterval(this.interval)},o.prototype.endGame=function(){this.score>=200&&this.showEndMessage("Victory!"),this.score<=0?this.showEndMessage("Game Over!"):this.setChar()},o.prototype.setChar=function(){this.text="";var e="ABCDEFGHIJKLMNOPQRSTUVWXYZ";this.text+=e.charAt(Math.floor(Math.random()*e.length)),t.innerHTML=this.text},o.prototype.compareSymbols=function(){var n=0;this.text&&(this.key===this.text?(t.style.backgroundColor="green",n=this.getRandomInt(5,10),this.score+=n,e.innerHTML="+"+n):(t.style.backgroundColor="red",n=this.getRandomInt(15,25),this.score-=n,e.innerHTML="-"+n))},o.prototype.takeKeyFromTheKeyborde=function(t){this.key=t.key.toUpperCase()},o.prototype.pressTheButton=function(){document.addEventListener("keydown",this.takeKeyFromTheKeyborde.bind(this))},o}())("","",100,t,e,n).start()})();