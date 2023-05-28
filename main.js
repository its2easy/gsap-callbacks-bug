import './style.css'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
    const block1 = document.querySelector(".block1");
    const block2 = document.querySelector(".block2");
    const square1 = document.querySelector(".square1");
    const square2 = document.querySelector(".square2");

    // 1st scrollTrigger
    let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: block1,
            pin: true,
            start: "center center",
            end: "+=1500",
            scrub: true,
            markers: true,
            onEnter(){ console.log('SC 1 onEnter');},
            onEnterBack(){ console.log('SC 1 onEnterBack');},
            onLeave(){ console.log('SC 1 onLeave');},
            onLeaveBack(){ console.log('SC 1 onLeaveBack');},
            //onRefresh(){ console.log('SC 1 onRefresh');},
            //onUpdate(){ console.log("SC 1 onUpdate, progress: ", tl1.scrollTrigger.progress);},
            onToggle(){ console.log("SC 1 onToggle");},
        },
        onComplete: () => { console.log('TL 1 onComplete'); },
        onStart: () => { console.log('TL 1 onStart'); },
        onReverseComplete: () => { console.log('TL 1 onReverseComplete'); },
        //onUpdate: () => { console.log('TL 1 onUpdate, progress: ', tl1.progress()); },
    });
    tl1.to(square1, {right: 0, duration: 2});
    tl1.call(() => { console.log(`call in the middle of TL 1, direction ${tl1.scrollTrigger.direction}`); });
    tl1.to(square1, {rotate: 360, duration: 2});

    // 2nd scrollTrigger
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: block2,
            pin: true,
            start: "center center",
            end: "+=1500",
            scrub: true,
            onEnter(){ console.log('SC 2 onEnter');},
            onEnterBack(){ console.log('SC 2 onEnterBack');},
            onLeave(){ console.log('SC 2 onLeave');},
            onLeaveBack(){ console.log('SC 2 onLeaveBack');},
            //onRefresh(){ console.log('SC 2 onRefresh');},
            onUpdate(){ console.log("SC 2 onUpdate, progress:", tl2.scrollTrigger.progress);},
            onToggle(){ console.log("SC 2 onToggle");},
        },
        onComplete: () => { console.log('TL 2 onComplete'); },
        onStart: () => { console.log('TL 2 onStart'); },
        onReverseComplete: () => { console.log('TL 2 onReverseComplete'); },
        onUpdate: () => { console.log('TL 2 onUpdate, progress: ', tl2.progress()); },
    });
    tl2.to(square2, {right: 0, duration: 2});
    tl2.call(() => { console.log(`call in the middle of TL 2, direction ${tl2.scrollTrigger.direction}`); });
    tl2.to(square2, {rotate: 360, duration: 2});

    // state when everything on the page is ready
    setTimeout(() => {
        console.log("Delayed SC 1, progress:", tl1.scrollTrigger.progress);
        console.log("Delayed TL 1, progress:", tl1.progress());
        console.log("Delayed SC 2, progress:", tl2.scrollTrigger.progress);
        console.log("Delayed TL 2, progress:", tl2.progress());
    }, 2000);
});
