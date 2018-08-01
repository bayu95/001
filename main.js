window.onscroll = function() {myFunction()};

// sticky sidebar

var head = document.getElementById('right');
var sticky = head.offsetTop;


function myFunction(){
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 300){
      document.getElementById('bg').style.top = "0px";
    } else {
      document.getElementById('bg').style.top = "-500px";
    }

// footer
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 700){
        document.getElementById('footer').style.bottom = "0px";
      } else {
        document.getElementById('footer').style.bottom = "-500px";
      }

      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 700){
          document.getElementById('sosmed').style.right = "0px";
        } else {
          document.getElementById('sosmed').style.right = "-100px";
        }

      if (window.pageYOffset > sticky) {
        head.classList.add("sticky");
      } else {
        head.classList.remove("sticky");
      }

}

function RestictDiv(){
  var x = document.getElementById("bg");
  if (x.className === "bgi") {
      x.className += " responsive";
  } else {
    x.className = "bgi";
  }
}
