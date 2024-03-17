
var div = document.getElementById("displayTable");

function tableGenerator() {
    div.innerHTML = "";
    var input = document.getElementById("table");
    for (var i = 1; i < 11; i++) {
        div.innerHTML += `<h2>${input.value} x ${i} = ${input.value * i}</h2>`;
    }
    input.value = "";

}