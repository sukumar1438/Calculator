function display(val){
             document.getElementById("screen").value+=val
         }
function calculate(){
            document.getElementById("screen").value = eval((document.getElementById("screen").value))
         }
function clr(){
    var clean="";
    document.getElementById("screen").value = clean;
}