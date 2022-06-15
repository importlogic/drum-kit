var list = document.querySelectorAll(".instrument-btn");

for(var i = 0; i < list.length; i++){   
    list[i].addEventListener("click", function(){
        var active = this;
        active.classList.toggle("pressed");
        setTimeout(function(){
            active.classList.toggle("pressed");
        }, 100);
        (new Audio(active.classList[2])).play();
    });
}

document.addEventListener("keydown", function(e){
    if(e.key == 'w') list[0].click();
    else if(e.key == 'a') list[1].click();
    else if(e.key == 's') list[2].click();
    else if(e.key == 'd') list[3].click();
    else if(e.key == 'j') list[4].click();
    else if(e.key == 'k') list[5].click();
    else if(e.key == 'l') list[6].click();
});
