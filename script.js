var tl = gsap.timeline();

tl.from("#nav h3", {
    y:-50,
    opacity:0,
    delay:0.4,
    duration:0.5,
    stagger:0.4
})

tl.from("#main h1",{
    x:-80,
    opacity:0,
    delay:0.4,
    duration:0.5,
    stagger:0.4
})
tl.from("#main img",{
    x:120,
    rotate:50,
    opacity:0,
    delay:0.4,
    duration:0.5,
    stagger:0.4
})
tl.from("#footer h5" , {
    y:40,
    opacity:0,
    delay:0.4,
    duration:0.5,
})