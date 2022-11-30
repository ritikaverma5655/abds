document.addEventListener("mousemove",function(dets){
    document.querySelector("#cursor").style.left=`${dets.x}px`;
    document.querySelector("#cursor").style.top=`${dets.y}px`;
})
gsap.to("#nav h3",{
    scrollTrigger:{
        trigger:"#black-text",
        start:"top 100%",
        scrub:2
    },
    color:"white",
})

document.querySelectorAll(".circle").forEach(function(elem){
    elem.addEventListener("click",function(){
        elem.style.transform="rotateX(360deg)";
        // elem.style.transform="rotateX(0deg)";
    })
})
gsap.from("#page-images img",{
    scale:0,
    dursation:1
})

document.querySelectorAll("#black-text h1").forEach(function(everyh1){
    gsap.from(everyh1,{
        scrollTrigger:{
               trigger:everyh1,
               start:"top 80%",
               scrub:2
        },
        opacity:0.4,
        y:30,
        duration:3,
    })
})
document.querySelectorAll("#black-text p").forEach(function(everyP){
    gsap.from(everyP,{
        scrollTrigger:{
               trigger:everyP,
               start:"top 80%",
               scrub:2
        },
        opacity:0.4,
        x:40,
        duration:3,
    })
})
document.querySelectorAll("#black-text h1").forEach(function(everyh1){
    gsap.to(everyh1,{
        scrollTrigger:{
               trigger:everyh1,
               start:"top 100%",
               scrub:2
        },
        x:100,
        duration:2
    })
})

document.addEventListener("mousemove", function (dets) {
    document.querySelector("#video").style.transform = `translate(${(dets.x) * 0.1}px,${(dets.y) * 0.1}px)`
})