var width = window.innerWidth
var height = window.innerHeight

document.body.style.backgroundImage = 'url(https://picsum.photos/' + width + '/' + height + ')';

Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

var today = new Date();
var weekNumber = today.getWeek();
var AorB = ((weekNumber & 1) ? "odd" : "even");

var element = document.getElementById("parking")

if (AorB == "odd") {
    element.innerHTML = "B";
} else if (AorB == "even") {
    element.innerHTML = "A";
} else {
    element.innerHTML = "Something went wrong";
}
