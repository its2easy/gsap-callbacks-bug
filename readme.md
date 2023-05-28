# gsap 3.11.5 callbacks 

In v3.11.5 if you reload the page between two scrollTriggers with pins,
near the scrollTrigger start or end, gsap (ScrollTrigger and Timeline) will
call wrong events and callbacks.

## Setup
```npm install```

```npm run dev```

## How to reproduce

Scroll the page to the boundaries of the scrollTrigger area. For this reproduction
it's easier to scroll **slightly after the end of the 1st scrollTrigger**. Reload
the page so that after loading you are still slightly after the end trigger 
of the 1st scrollTrigger. 

Expected output in the console: all the events and callbacks
for the 1st scrollTrigger because you are after it, none of the events of the 
2nd scrollTrigger because you haven't scrolled to its start yet.

### 3.11.5 Chromium browsers
```
TL 1 onStart
call in the middle of TL 1, direction 1
TL 1 onComplete
SC 1 onEnter
SC 1 onLeave
TL 2 onStart
call in the middle of TL 2, direction 1
TL 2 onUpdate, progress:  1
TL 2 onComplete
SC 2 onUpdate, progress: 1
SC 2 onEnter
SC 2 onLeave
Delayed SC 1, progress: 1
Delayed TL 1, progress: 1
Delayed SC 2, progress: 0
Delayed TL 2, progress: 0
```
### 3.11.5 non Chromium browsers
```
Delayed SC 1, progress: 1
Delayed TL 1, progress: 1
Delayed SC 2, progress: 0
Delayed TL 2, progress: 0
```

### 3.11.4 Chromium browsers

```
TL 1 onStart
call in the middle of TL 1, direction 1
TL 1 onComplete
SC 1 onEnter
SC 1 onLeave
TL 2 onStart
call in the middle of TL 2, direction 1
TL 2 onUpdate, progress:  1
TL 2 onComplete
SC 2 onUpdate, progress: 1
SC 2 onEnter
SC 2 onLeave
call in the middle of TL 2, direction -1
TL 2 onUpdate, progress:  0
TL 2 onReverseComplete
SC 2 onUpdate, progress: 0
SC 2 onEnterBack
SC 2 onLeaveBack
Delayed SC 1, progress: 1
Delayed TL 1, progress: 1
Delayed SC 2, progress: 0
Delayed TL 2, progress: 0
```

### 3.11.4 non Chromium browsers

```
TL 1 onStart
call in the middle of TL 1, direction 1
TL 1 onComplete
SC 1 onEnter
SC 1 onLeave
Delayed SC 1, progress: 1
Delayed TL 1, progress: 1
Delayed SC 2, progress: 0
Delayed TL 2, progress: 0
```

So it seems like 3.11.4 non chromium works as it should, and 
3.11.4 chromium browser works strangely but at least it returns everything 
to the correct state
