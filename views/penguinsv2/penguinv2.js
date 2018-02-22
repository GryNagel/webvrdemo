var balloon = document.getElementById('balloon');
var t = 0;
function render() {
    t += 0.01;
    requestAnimationFrame(render);
    balloon.setAttribute('position', '2 '+(Math.sin(t*2)+1)+' 0');
}
render();