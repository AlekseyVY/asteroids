(()=>{var t={310:(t,s,i)=>{const o=i(555),h=i(875);function e(t){this.color="#5A4B47",this.radius=2,h.call(this,{pos:t.pos,vel:o.randomVec(.5),radius:this.radius,color:this.color,canvas:t.canvas})}o.inherits(e,h),t.exports=e},417:(t,s,i)=>{const o=i(310);function h(t,s,i){this.ctx=s,this.canvas=t,this.DIM_X=this.canvas.width,this.DIM_Y=this.canvas.height,this.NUM_ASTEROIDS=i,this.asteroids=[],this.addAsteroids()}h.prototype.randomPosition=function(){return[Math.random()*this.DIM_X,Math.random()*this.DIM_Y]},h.prototype.addAsteroids=function(){for(let t=0;t<this.NUM_ASTEROIDS;t++){const t={pos:this.randomPosition(),canvas:this.canvas},s=new o(t);s.draw(this.ctx),this.asteroids.push(s)}},h.prototype.draw=function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.asteroids.forEach((t=>{t.draw(this.ctx)}))},h.prototype.moveObjects=function(){this.asteroids.forEach((t=>{t.move()}))},h.prototype.checkCollisions=function(){this.asteroids.forEach(((t,s)=>{this.asteroids.forEach(((i,o)=>{let h=!1;s!==o&&(h=t.isCollidedWith(i)),h&&(this.remove(t),this.remove(i),console.log("REMOVED"))}))}))},h.prototype.step=function(){this.moveObjects(),this.checkCollisions()},h.prototype.remove=function(t){this.asteroids=this.asteroids.filter((s=>{if(s.id!==t.id)return s}))},t.exports=h},535:(t,s,i)=>{const o=i(417);function h(t,s,i){this.ctx=t,this.canvas=s,this.asteroids=i,this.game=new o(this.ctx,this.canvas,this.asteroids),this.start()}h.prototype.start=function(){this.game.step(),this.game.draw(),requestAnimationFrame((()=>{this.start()}))},t.exports=h},875:t=>{function s(t){this.id=Math.floor(1e5*Math.random()),this.pos=t.pos,this.vel=t.vel,this.radius=t.radius,this.color=t.color,this.canvas=t.canvas}s.prototype.draw=function(t){t.beginPath(),t.arc(this.pos[0],this.pos[1],this.radius,0,2*Math.PI,!1),t.fillStyle=this.color,t.fill()},s.prototype.move=function(){this.pos[0]+=this.vel[0],this.pos[1]+=this.vel[1],this.wrap()},s.prototype.wrap=function(){this.pos[0]=(this.pos[0]%this.canvas.width+this.canvas.width)%this.canvas.width,this.pos[1]=(this.pos[1]%this.canvas.height+this.canvas.height)%this.canvas.height},s.prototype.isCollidedWith=function(t){return Math.hypot(this.pos[0]-t.pos[0],this.pos[1]-t.pos[1])<=2*this.radius},t.exports=s},555:t=>{const s={inherits:function(t,s){t.prototype=Object.create(s.prototype),t.prototype.constructor=t},randomVec:function(t){const i=2+Math.PI*Math.random();return s.scale([Math.sin(i),Math.cos(i)],t)},scale:function(t,s){return[t[0]*s,t[1]*s]}};t.exports=s}},s={};function i(o){var h=s[o];if(void 0!==h)return h.exports;var e=s[o]={exports:{}};return t[o](e,e.exports,i),e.exports}(()=>{const t=i(535);window.addEventListener("DOMContentLoaded",(s=>{const i=document.getElementById("game-canvas"),o=i.getContext("2d");new t(i,o,10)}))})()})();