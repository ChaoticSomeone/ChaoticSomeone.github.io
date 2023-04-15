function Main(){
    customElements.define("new-numeric", class extends HTMLSpanElement{});
    customElements.define("new-comment", class extends HTMLSpanElement{});
    customElements.define("non-literal", class extends HTMLSpanElement{});
    customElements.define("key-word", class extends HTMLSpanElement{});
    customElements.define("pre-processor", class extends HTMLSpanElement{});
    customElements.define("new-macro", class extends HTMLSpanElement{});
    customElements.define("new-string", class extends HTMLSpanElement{});
}

window.onload = Main;