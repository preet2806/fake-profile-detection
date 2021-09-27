/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}
window.onload = function(){
  var nav=window.innerWidth;
  if(nav<768)
  {
    hidenav();
  }

}
const showpop = (n) => {
  document.getElementById(n).style.display="flex";
}
const hidepop = (n) => {
  document.getElementById(n).style.display="none";
}
const shownav = () => {
  document.getElementById("rightnav").style.display="flex";
  document.getElementById("closemenu").style.display="flex";
}
const hidenav = () => {
  document.getElementById("rightnav").style.display="none";
  document.getElementById("closemenu").style.display="none";
}