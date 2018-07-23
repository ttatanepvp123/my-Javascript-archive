function draw() {
    var x = document.getElementById("x");
    var y = document.getElementById("y");
    var w = document.getElementById("w");
    var h = document.getElementById("h");
    var red = document.getElementById("r");
    var green = document.getElementById("g");
    var blue = document.getElementById("b");
    var canvas = document.getElementById('tutorial');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgb('+parseInt(r.value)+','+parseInt(g.value)+', '+parseInt(b.value)+')';
      ctx.fillRect(parseInt(x.value), parseInt(y.value), parseInt(w.value), parseInt(h.value));
    }
}