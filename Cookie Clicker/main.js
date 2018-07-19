function CookieClick(){
    var counter = document.getElementById("counter");
    console.log("cookie clicked");
    counter.innerHTML = (parseInt(counter.innerHTML) + 1);
}