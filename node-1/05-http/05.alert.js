window.onload = function(){
    document.querySelector('button').onclick = function () {
        alert(this.nodeName.toLowerCase());
    };
}