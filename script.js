let drop = document.querySelectorAll(".toggled");

let g = document.getElementById('my_div');
for (let i = 0, len = g.children.length; i < len; i++){

    (function(index){
        g.children[i].onclick = function(){
              drop[i].classList.toggle("show")
        }    
    })(i);

}
