var balloon = document.getElementById('balloon');
var ocra = document.getElementById('ocra');
var t = 0;
var position = 0;
var rotation = 0;
var height = 1;

function balloonAnimation() {
    t += 0.01;
    requestAnimationFrame(balloonAnimation);
    balloon.setAttribute('position', '2 '+(Math.sin(t*2)+1)+' 0');
}

function ocraAnimation() {
    rotation += 0.05;
    position += 0.05;
    height -= 0.01;
    requestAnimationFrame(ocraAnimation);
    if (position < 10){
        ocra.setAttribute('position', ' 0 ' + ' 0 ' + position);
        ocra.setAttribute('rotation', ' 0 ' + (Math.sin(rotation*2.5)+1) + ' 0 ');
        console.log('1');
    }
    else if (position > 10 && rotation < 60){
        rotation += 0.25;
        position += 0.05;
        ocra.setAttribute('position', ' 0 ' + ' 0 ' + position);
        ocra.setAttribute('rotation', ' 0 ' + rotation + ' 0 ');
        console.log('2: ' + rotation);
    }
    else if (rotation > 60){
        rotation = 60;
        rotation += 0.05;
        position -= 0.05;
        ocra.setAttribute('position', ' 0 ' + ' 0 ' + position);
        ocra.setAttribute('rotation', ' 0 ' + (Math.sin(rotation*2.5)+1) + ' 0 ');
        console.log('3');
    }
    else{
        position = 0;
    }

}


ocraAnimation();
balloonAnimation();