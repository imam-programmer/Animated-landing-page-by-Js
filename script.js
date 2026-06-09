const scroll=new LocomotiveScroll({
    el:document.querySelector('#main'),
    smooth:true
})

function firstPageAnim(){
    var tl = gsap.timeline();
    tl.from("#nav",{
        y:"-10",
        duration:1.5,
        opacity:0,
        ease:Expo.easeInOut
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeInOut,
        duration:1.5,
        delay:-1,
        stagger:.2
    })
      tl.from("#herofooter",{
        y:"-10",
        duration:1.5,
        opacity:0,
        delay:-1,
        ease: Expo.easeInOut
    })
}

function circleMouseFollower(){
   window.addEventListener("mousemove",(e)=>{
let minicircle=document.querySelector("#minicircle");
minicircle.style.transform=`translate(${e.clientX}px, ${e.clientY}px)`
   })
   
}
circleMouseFollower()
firstPageAnim()