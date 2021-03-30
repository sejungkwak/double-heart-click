const image = document.getElementById('img');
const count = document.getElementById('count');

let clickCount = 0;
let clicks = 0;
let timeout = 500;

function showHeart(event) {
    clicks++;

    if (clicks === 1) {
        setTimeout(() => {
            if (clicks != 1) {
                clickCount++;

                createHeart(event)

                count.innerHTML = clickCount;
            }
            clicks = 0;
        }, timeout || 500)
    }

    
}

const createHeart = (event) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = event.clientX - event.target.offsetLeft
    const y = event.clientY - event.target.offsetTop

    heart.style.left = `${x}px`
    heart.style.top = `${y}px`

    image.appendChild(heart);

    setTimeout(() => 
        heart.remove()
    , 1000)
}

image.addEventListener('click', showHeart);