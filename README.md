# Double Heart Click

![screen recording](https://media.giphy.com/media/gKIK1QAglSBAX8H33f/giphy.gif)

#### project notes

1. HTML
- h1: Double click on the image to ❤️ it
- p: You liked it <span><span> times
- image

2. CSS
- button
- grow animation

3. JavaScript
- use click event + setTimout to make own dblclick event
- clientX, clientY
- add up click counts

- On Safari, heart doesn't show when double clicking

+ Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor
1. HTML
- Font awesome to use heart image

2. CSS
- text-align: center instead of flex
- image: relative & heart: absolute => need to change JS
- inside keyframes translate value needed

3. JavaScript
- element.remove() after appendChild
- click position 
```
const x = event.clientX - event.target.offsetLeft
const y = event.clientY - event.target.offsetTop
```