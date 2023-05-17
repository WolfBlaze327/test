// import $ from 'jquery';

export {default as Home} from "../pages/Home/Home";
export {default as Programs} from "../pages/Programs/Programs";
export {default as Gallery} from "../pages/Gallery/Gallery";
export {default as AboutUs} from "../pages/AboutUs/AboutUs";
export {default as FAQs} from "../pages/FAQs/Faqs";
export {default as Navbar} from "../components/Navbar";
export {default as Footer} from "./Footer";




// Add active class on another page linked
// ==========================================
// $(window).on('load',function () { 
//     var current = location.pathname;
//     console.log(current);
//     $('#navbarSupportedContent ul li a').each(function(){
//         var $this = $(this);
//         // if the current path is like this link, make it active
//         if($this.attr('href').indexOf(current) !== -1){
//             $this.parent().addClass('active');
//             $this.parents('.menu-submenu').addClass('show-dropdown');
//             $this.parents('.menu-submenu').parent().addClass('active');
//         }else{
//             $this.parent().removeClass('active');
//         }
//     })
// });

// var current = $(window).scrollTop();
// var total = $(window).height() - current;
// var ele = $(".swimmer_banner");
// var currPosition = ele.position().left + 360;
// var trackLength = 1000;
// $(window).scroll(function (event) {
// current = $(window).scrollTop();
// console.log({total:total,current:current});
// console.log(current/total * 100);
// var newPosition = trackLength * (current/total)
// console.log(newPosition);
// ele.css({left:currPosition+newPosition+'px'});
// });

// $(document).ready(function () {
// 	$("#news-slider").owlCarousel({
// 	items: 3,
// 	itemsDesktop: [1199, 3],
// 	itemsDesktopSmall: [980, 2],
// 	itemsMobile: [600, 1],
// 	navigation: true,
// 	navigationText: ["", ""],
// 	pagination: true,
// 	});
// });

// function chosen_program(user_program){
	
// 	switch(user_program)
// 	{
// 		case "toddler":
// 			{
// 				document.getElementById("toddler_program").style.removeProperty('display');
// 				document.getElementById("kids_program").style.display = "none";
// 				document.getElementById("adult_program").style.display = "none";
// 				break;
// 			}
// 		case "kids":
// 			{
// 				document.getElementById("toddler_program").style.display = "none";
// 				document.getElementById("kids_program").style.removeProperty('display');
// 				document.getElementById("adult_program").style.display = "none";
// 				break;
// 			}
// 		case "adults":
// 			{
// 				document.getElementById("toddler_program").style.display = "none";
// 				document.getElementById("kids_program").style.display = "none";
// 				document.getElementById("adult_program").style.removeProperty('display');
// 				break;
// 			}
			
// 	}

// }

// function Avail(){
// 	console.log(true);
// }