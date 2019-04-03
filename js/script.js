/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var deur1 = document.getElementById('deur1');
var deur2 = document.getElementById('deur2');
var audio = new Audio('sfx/clap.mp3'); // verkregen van: https://www.freesoundeffects.com/
var audio2 = new Audio('sfx/aah.mp3'); // verkregen van: https://www.freesoundeffects.com/

function open() {

    var imgArray = ['man.jpg', 'vrouw.jpg'];
//    var man = 'img/man.jpg';
//    var vrouw = 'img/vrouw.jpg';
    var boodschap;

    var randomGetal1 = Math.floor((Math.random() * 2));
    var randomGetal2 = Math.floor((Math.random() * 2));

    var deurImg1 = imgArray[randomGetal1];
    var deurImg2 = imgArray[randomGetal2];

    deur1.src = 'img/' + deurImg1;
    deur2.src = 'img/' + deurImg2;


    if (deur1.src != deur2.src) {  // werkt ook met <, > en !== zolang het maar niet equal is
        boodschap = 'Het is een match!';
        audio.play();



    } else {
        boodschap = 'Dit gaat hem niet worden';
        audio2.play();
    }

    document.querySelector('h1').textContent = boodschap;

}

document.querySelector('input').addEventListener('click', open);


var namenArray = ['Chris ', 'Gijs ', 'Sam ', 'Barrie '];
var groet = "Met dank aan onze gasten: ";
var namenAantal = namenArray.length;
var namen= '';
var i;

for (i = 0; i < namenAantal; i++) {
    console.log(i) ;
    console.log(namen);

    namen += namenArray[i];

    console.log(namen);
}

document.querySelector('h2').textContent = groet + namen;
