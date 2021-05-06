let drop = document.querySelectorAll(".toggled");
let dropTitle = document.querySelectorAll(".toggler");
let g = document.getElementById('my_div');
for (let i = 0, len = g.children.length; i < len; i++){

    (function(){
        g.children[i].onclick = function(){
              drop[i].classList.toggle("show");
              dropTitle[i].classList.toggle("dark")
        }       
    })(i);

}
