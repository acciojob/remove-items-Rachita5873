//your JS code here. If required.
var select = document.getElementById("colorSelect");
var val;
function selectedVal(){
    val = select.value;
}

function remove(){
    for(var i=0; i<select.length; i++){
        if(select.options[i].value === val){
            select.remove(i);
            break;
        }
    }
}
