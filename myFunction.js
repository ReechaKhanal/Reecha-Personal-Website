function myFunction(){
	window.scroll(0, findPos(document.getElementById("education")));
}
function myFunction1(){
	window.scroll(0, findPos(document.getElementById("experience")));
}
function myFunction2(){
	window.scroll(0, findPos(document.getElementById("contact")));
}
//finds y value of a given object
function findPos(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        do {
            curtop += obj.offsetTop;
        } while (obj = obj.offsetParent);
    return [curtop];
    }
}