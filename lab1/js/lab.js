class TypingEffectElement extends HTMLElement{
  async connectedCallback(){
    await a,this.content&&await b(this.lines,this.content,this.characterDelay,this.lineDelay),this.cursor&&(this.cursor.hidden=!0),this.dispatchEvent(new CustomEvent("typing:complete",{bubbles:!0,cancelable:!0}))
  }
  get content(){
    return this.querySelector('[data-target="typing-effect.content"]')
  }
  get cursor(){return this.querySelector('[data-target="typing-effect.cursor"]')}
  get lines(){
    let a=this.getAttribute("data-lines");
    try{
      return a?JSON.parse(a):[]
    }
    catch(b){
      return[]
    }
  }
  get prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion)").matches}
  get characterDelay(){return this.prefersReducedMotion?0:Math.max(0,Math.min(Math.floor(Number(this.getAttribute("data-character-delay"))),2147483647))||40}
  set characterDelay(a){
    if(a>2147483647||a<0)throw new DOMException("Value is negative or greater than the allowed amount");
    this.setAttribute("data-character-delay",String(a))
  }
  get lineDelay(){
    return this.prefersReducedMotion?0:Math.max(0,Math.min(Math.floor(Number(this.getAttribute("data-line-delay"))),2147483647))||40
  }
  set lineDelay(a){
    if(a>2147483647||a<0)throw new DOMException("Value is negative or greater than the allowed amount");
    this.setAttribute("data-line-delay",String(a))
  }
}
async function b(a,b,d,e){for(let f=0;f<a.length;f++){if(0===d)b.append(a[f]);else for(let g of a[f].split(""))await c(d),b.innerHTML+=g;0!==e&&await c(e),f<a.length-1&&b.append(document.createElement("br"))}}async function c(a){return new Promise(b=>{setTimeout(b,a)})}window.customElements.get("typing-effect")||(window.TypingEffectElement=TypingEffectElement,window.customElements.define("typing-effect",TypingEffectElement))}}])
