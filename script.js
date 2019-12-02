var curentLine = 0;
document.addEventListener("DOMContentLoaded", function(event) {
    setTimeout(animateAddline, getDelay());
});

function animateAddline() {
    var item = data[curentLine];
    if (item == null)
        return;

    if (Array.isArray(item)) {
            addDiv(item[0], ' el el-small');
            addDiv(item[1], 'el el-big');
        } else {
            addDiv(item, 'el el-100');
    }
    curentLine++;
    setTimeout(animateAddline, getDelay());
}

function getDelay() {return Math.random() * 100}

function addDiv(item, cl) {
    var div = document.createElement("div");
    div.setAttribute('class', cl);
    if (item == "##breaker##")
        item = "#########################################################################################"
    div.innerHTML += item + "</br>";
    document.getElementById("content").appendChild(div);
}