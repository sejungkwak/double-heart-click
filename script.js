const image = document.getElementById('img');
const count = document.getElementById('count');
const heart = document.getElementById('heart');

let clickCount = 0;
var clicks = 0;
var timeout = 500;
function showHeart(event) {
    clicks++;

    if (clicks === 1) {
        setTimeout(() => {
            if (clicks != 1) {
                clickCount++;
                const click = event.currentTarget;
            
                heart.style.left = `${event.clientX}px`
                heart.style.top = `${event.clientY}px`
            
                image.appendChild(heart);
                count.innerHTML = clickCount;
            }
            clicks = 0;
        }, timeout || 500)
    }

    
}

image.addEventListener('click', showHeart);