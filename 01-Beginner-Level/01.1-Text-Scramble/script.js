// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrambleTextPlugin)
    // gsap code here!



    gsap.to(".welcome", {
        duration: 1,
        scrambleText: {
            text: "welcome to",
            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            revealDelay: 0.4,
            tweenLength: false
        }
    })

    gsap.to(".title", {
        duration: 1,
        scrambleText: {
            text: "animation basics",
            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            revealDelay: 0.4,
            tweenLength: false
        }
    })

    gsap.to(".sub-header", {
        duration: 1,
        scrambleText: {
            text: "(lesson 1)",
            chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            revealDelay: 0.1,
            tweenLength: false
        }
    })
});