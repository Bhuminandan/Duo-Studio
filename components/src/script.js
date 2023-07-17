// Gsap Code for Smooth Scrolling
function gsapForSmoothScroll() {
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
gsapForSmoothScroll() 

// Gsap for Hero Section

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero__text h1",
        scroller: ".main",
        start: "top 30%",
        end: "top -20%",
        scrub: 2
    }
})

tl.to(".hero__text h1", {
    x: -120,
}, "anim")

tl.to(".hero__text h2", {
    x: 120,
}, "anim")

tl.to(".hero__video", {
    width: "98%"
}, "anim")


// For Mobile Nav

const mobileNav = () => {
  const headerBtn = document.querySelector('.header__bars');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');

  // State
  let isMobileNavOpen = false;
  
  headerBtn.addEventListener('click', () => {
      isMobileNavOpen = !isMobileNavOpen;
      if(!isMobileNavOpen){
          mobileNav.style.display = 'flex';
          document.body.style.overflowY = 'hidden';
      } else {
          mobileNav.style.display = 'none';
          document.body.style.overflowY = 'auto';
      }
  });

  mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
          isMobileNavOpen = false;
          mobileNav.style.display = 'none';
          document.body.style.overflowY = 'auto';
      });
  })
};


mobileNav();

