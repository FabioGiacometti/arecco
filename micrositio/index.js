function switchClass(i) {
    var lis = $('#home-news > div');
    lis.eq(i).removeClass('home_header_on');
    lis.eq(i).removeClass('home_header_out');
     lis.eq(i = ++i % lis.length).addClass('home_header_on');
     lis.eq(i = ++i % lis.length).addClass('home_header_out');
     setTimeout(function() {
         switchClass(i);
     }, 3500);
 }
 
 $(window).load(function() {
    switchClass(-1);
 });

 // When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    closeNav()
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.transform = "translateX(250px)";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.transform = "translateX(0px)";
  }