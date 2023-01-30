const html = document.querySelector('html');
const videoContent = document.querySelector('#footage');
const playVideo = document.querySelector('#play-video');
const hamburger = document.querySelector('.hamburger-menu');
const closeSidebarBtn = document.querySelector('.close-menu');
const header = document.querySelector('.header');
const sidebarMask = document.querySelector('.sidebar-mask');

function handleSidebar(){
    header.classList.toggle('open');
    html.classList.toggle('overflowed');
}

hamburger.addEventListener('click', function(){
    handleSidebar();
});
closeSidebarBtn.addEventListener('click', function(){
    handleSidebar();
});
sidebarMask.addEventListener('click', function(){
    handleSidebar();
});

// playVideo.addEventListener('click', function(){
//     videoContent.play();
//     playVideo.classList.add('hdden');
// });

const feedbackSlider = new Swiper('.feedback-slider', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});