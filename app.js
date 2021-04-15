var left = document.getElementsByClassName("arrow-left");
console.log(left);
for (let i = 0; i < left.length; i++) {
    const element = left[i];
    element.addEventListener('click', function() {
        console.log('I was clicked')
    })
    console.log(element)

}

var right = document.getElementsByClassName("arrow-right");
console.log(right);
for (let i = 0; i < right.length; i++) {
    const element = right[i];
    element.addEventListener('click', function() {
        console.log('I was clicked');
        target.classList.toggle('red')
    })

};
var target = document.getElementById("here");