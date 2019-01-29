/*var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}
*/

window.onload = function() {
  adjustNavbar();
};
window.onresize = function(event) {
  adjustNavbar();
};
function adjustNavbar() {
var navbarChild = document.getElementsByTagName("nav")[0];
var backgroundImage = document.getElementsByClassName("bg-image")[0];
if ((window.innerWidth < 575) && (backgroundImage.contains(navbarChild)))
    {
        backgroundImage.removeChild(navbarChild);
        document.body.insertBefore(navbarChild,backgroundImage);
    }
else if ((window.innerWidth >= 575) && (!backgroundImage.contains(navbarChild)))
{
   
    document.body.removeChild(navbarChild);
    backgroundImage.insertBefore(navbarChild,backgroundImage.children[0]);
        }
}
    




