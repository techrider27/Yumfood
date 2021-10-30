
// hamburger
const links = document.querySelector('.links');
const openmenu = document.querySelector('.openmenu');
const closemenu = document.querySelector('.fa-times');


// EventListener
openmenu.addEventListener('click', show);
closemenu.addEventListener('click', close);

// functions
function show(){
  links.style.display = 'flex';
  links.style.top = '0';
}
function close(){
  links.style.top = '-100%';
}

// Owl-Carousel
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});


// testimonial 
var testimonial = document.getElementById('testimonial');
        var control1 = document.getElementById('control1');
        var control2 = document.getElementById('control2');
        var control3 = document.getElementById('control3');
        var control4 = document.getElementById('control4');
        var control5 = document.getElementById('control5');
        var control6 = document.getElementById('control6');


        control1.onclick = function () {
            testimonial.style.transform = "translateX(1980px)";
            control1.classList.add("active1");
            control2.classList.remove("active1");
            control3.classList.remove("active1");
            control4.classList.remove("active1");
            control5.classList.remove("active1");
            control6.classList.remove("active1");


        }

        control2.onclick = function () {
            testimonial.style.transform = "translateX(1040px)";
            control1.classList.remove("active1");
            control2.classList.add("active1");
            control3.classList.remove("active1");
            control4.classList.remove("active1");
            control5.classList.remove("active1");
            control6.classList.remove("active1");


        }


        control3.onclick = function () {
            testimonial.style.transform = "translateX(0px)";
            control1.classList.remove("active1");
            control2.classList.remove("active1");
            control3.classList.add("active1");
            control4.classList.remove("active1");
            control5.classList.remove("active1");
            control6.classList.remove("active1");


        }

        control4.onclick = function () {
            testimonial.style.transform = "translateX(-940px)";
            control1.classList.remove("active1");
            control2.classList.remove("active1");
            control3.classList.remove("active1");
            control4.classList.add("active1");
            control5.classList.remove("active1");
            control6.classList.remove("active1");


        }

        control5.onclick = function () {
            testimonial.style.transform = "translateX(-1880px)";
            control1.classList.remove("active1");
            control2.classList.remove("active1");
            control3.classList.remove("active1");
            control4.classList.remove("active1");
            control5.classList.add("active1");
            control6.classList.remove("active1");


        }

        control6.onclick = function () {
            testimonial.style.transform = "translateX(-2950px)";
            control1.classList.remove("active1");
            control2.classList.remove("active1");
            control3.classList.remove("active1");
            control4.classList.remove("active1");
            control5.classList.remove("active1");
            control6.classList.add("active1");
        }


        // Our Gallery buttons
    document.getElementById('all').addEventListener('click', display);
    function display() {
        document.getElementById('image').style.display = "inline";
        document.getElementById('image1').style.display = "none";
        document.getElementById('image2').style.display = "none";
        document.getElementById('image3').style.display = "none";
    }
    document.getElementById('dessert').addEventListener('click', displayone);
    function displayone() {
        document.getElementById('image').style.display = "none";
        document.getElementById('image1').style.display = "inline";
        document.getElementById('image2').style.display = "none";
        document.getElementById('image3').style.display = "none";
    }
    document.getElementById('burger').addEventListener('click', displaytwo);
    function displaytwo() {
        document.getElementById('image').style.display = "none";
        document.getElementById('image1').style.display = "none";
        document.getElementById('image2').style.display = "inline";
        document.getElementById('image3').style.display = "none";
    }
    document.getElementById('pizza').addEventListener('click', displaythree);
    function displaythree() {
        document.getElementById('image').style.display = "none";
        document.getElementById('image1').style.display = "none";
        document.getElementById('image2').style.display = "none";
        document.getElementById('image3').style.display = "inline";
    }

//     // order placed alert
// orderBtn = document.querySelector('.place-order');
// pname = document.querySelector('.p-name');
// address = document.querySelector('.p-address');
// contact = document.querySelector('.p-contact');


// //event listeners
// orderBtn.addEventListener('click',() => {
//     alert(`Order Placed Successfully ! ${pname.value}, ${address.value}, ${contact.value}`)
// })
