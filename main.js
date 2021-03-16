
var reasons =[
    "Mother",
    "Father",
    "Me"
];

var images =[
 "mother.png",
 "father.jfif",
 "son.png"
];
 
var i=0;

function nextslide() {
    if (i==3) {
    i=0;
    }
    document.getElementById("reason").innerHTML=reasons[i];
    document.getElementById("pictures").src=images[i];
    i++;
}
