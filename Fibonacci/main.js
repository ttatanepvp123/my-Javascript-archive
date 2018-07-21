function getNumberByLocation(){
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    var tableau = [ 1, 1];
    var returner = 1;
    for (let index = 0; index < (parseInt(input.value) - 2); index++) {
        returner = tableau[1] + tableau[0];
        tableau[0] = tableau[1];
        tableau[1] = returner;
    }
    output.innerHTML = returner;
    return returner;
}