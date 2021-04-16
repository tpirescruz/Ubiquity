// var left = document.getElementsByClassName("arrow-left");
// console.log(left);
// for (let i = 0; i < left.length; i++) {
//     const element = left[i];
//     element.addEventListener('click', function() {
//         console.log('I was clicked')
//     })
//     console.log(element)

// }

// var right = document.getElementsByClassName("arrow-right");
// console.log(right);
// for (let i = 0; i < right.length; i++) {
//     const element = right[i];
//     element.addEventListener('click', function() {
//         console.log('I was clicked');
//         target.classList.toggle('red')
//     })

// };
// var target = document.getElementById("here");



$(document).ready(function() {
    $('.carousel').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: $(".my-arrow-left"),
        nextArrow: $(".my-arrow-right"),
        dots: true,
        dotClass: $(".slider-cube"),
    });
    $('.consultation').slick({
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,


    })
    $('.us').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,


    })


});