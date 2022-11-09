let td = document.getElementsByTagName('td');
let table = document.querySelector('table');
let pic = document.getElementsByTagName('img');
let buffer = [];
let triescount = document.querySelector('.span');
let gameOver = document.querySelector('.gameover');
let youwin = document.querySelector('.youwin')
let matchesfound = document.querySelector('.found')
let matches = 0
let span = document.getElementsByClassName('span')[0]
let steps = 0
let found = document.getElementsByClassName('found')[0]
let clicker = 0
let title = document.getElementById('title')
let cat = document.getElementById('cat')
let catcounter = "cat"
let button = document.getElementsByTagName('button')

let imagenames = [
    "pinkbutterfly.jpg",
    "pinkbutterfly.jpg",
    "pinkcar.webp",
    "pinkcar.webp",
    "pinkteddy.jpg",
    "pinkcat.webp",
    "pinkcat.webp",
    "pinkdog.jpg",
    "pinkdog.jpg",
    "pinkdonut.jpg",
    "pinkdonut.jpg",
    "pinkelephant.jpg",
    "pinkelephant.jpg",
    "pinkflower.jpg",
    "pinkflower.jpg",
    "pinkheart.jpg",
    "pinkheart.jpg",
    "pinkmusic.jpg",
    "pinkmusic.jpg",
    "pinkrabbit.jpg",
    "pinkrabbit.jpg",
    "pinkstar.webp",
    "pinkstar.webp",
    "pinkteddy.jpg"
]

cat.onclick = function(){
    console.log(catcounter);
    catcounter = catcounter +"cat"

}

button.onclick = function(){
    for (let i = imagenames.length - 1; i > 0; i--) {
        console.log(Math.floor(Math.random() * 10));
        let randomnumber = Math.floor(Math.random() * (i + 1));
        let current = imagenames[i]
        imagenames[i] = imagenames[randomnumber]
        imagenames[randomnumber] = current
    }
    
    for (let i = 0; i < 24; i++) {
        console.log(pic[i]);
        pic[i].src = imagenames[i]
        console.log(imagenames[i])
       
    }  
    setTimeout(rotate_cards, 7000);
}




for (let i = imagenames.length - 1; i > 0; i--) {
    console.log(Math.floor(Math.random() * 10));
    let randomnumber = Math.floor(Math.random() * (i + 1));
    let current = imagenames[i]
    imagenames[i] = imagenames[randomnumber]
    imagenames[randomnumber] = current
}

for (let i = 0; i < 24; i++) {
    console.log(pic[i]);
    pic[i].src = imagenames[i]
    console.log(imagenames[i])

}

function titleclicker() {
    clicker = clicker +1
    console.log("cat" + clicker);
    title.innerHTML = "memory game " + clicker
}


// if (buffer[0].src == buffer[1].src) {
//     console.log("yes");
//     buffer = []
//     title = clicker +1 
//     title.innerHTML = clicker
//     title()

for (let i = 30; i < 46; i++) {
    console.log(i);
}

// if((pic[i].src == buffer[0].src) && (i !== buffer[1])){
//                         let steps = Number(matchesfound.innerText);
//                         steps = matches + 1;
//                         matchesfound.innerText = steps;
//                     }


function rotate_cards() {
    for (i = 0; i < td.length; i++) {
        td[i].style.transform = "rotate3d(0,1,0,180deg)";
        td[i].style.backfaceVisibility = "visible";
        td[i].style.backgroundColor = "lightpink";
        pic[i].style.opacity = 0;

    }

}

function show_picture(picnumber) {
    td[picnumber].style.transform = "rotate3d(0,1,0,0deg)";
    pic[picnumber].style.opacity = 1;
    td[picnumber].style.backfaceVisibility = "hidden";

    buffer.push(pic[picnumber]);
    if (buffer.length == 2) {
        console.log("2");
        steps = steps +1
        span.innerHTML = steps
           
        if (buffer[0].src == buffer[1].src) {
            console.log("yes");
            buffer[0].parentElement.classList.add("opened")
            buffer[1].parentElement.classList.add("opened")
            buffer = []
            matches = matches +1 
            found.innerHTML = matches

        }


        else {
            console.log("no");
            for (let i = 0; i < 24; i++){
                td[i].style.pointerEvents = "none"
            }
            setTimeout(function(){
                buffer[0].style.opacity = 0;
                buffer[0].parentElement.style.transform = "rotate3d(0,1,0,180deg";
                buffer[0].parentElement.style.backfaceVisibility = "visible";
                buffer[0].parentElement.style.backgroundColor = "lightpink";
                buffer[1].style.opacity = 0;
                buffer[1].parentElement.style.transform = "rotate3d(0,1,0,180deg";
                buffer[1].parentElement.style.backfaceVisibility = "visible";
                buffer[1].parentElement.style.backgroundColor = "lightpink";
                buffer = [];
                for (let i = 0; i < 24; i++){
                    td[i].style.pointerEvents = "auto"
                }
        }, 1000)
        }
    }



}

// function show_picture(picposition) {
//     for (i = 0; i <= td.length; i++ ){
//         if (picposition == i + 1){
//             td[i].style.transform = "rotate3d(0,1,0,0deg)";
//             pic[i].style.opacity = 1;
//             td[i].style.backfaceVisibility = "hidden";

//             if(buffer.length == 0){
//                 buffer.push(pic[i], i);
//                 console.log(buffer[0].src);
//             }
//             else{
//                 if((pic[i].src == buffer[0].src) && (i !== buffer[1])){
//                     // alert("the match was found");
//                     let matches = Number(matchesfound.innerText);
//                     matches = matches + 1;
//                     matchesfound.innerText = matches;

//                     if (matches == 12) {
//                         table.remove();
//                         youwin.innerText = "YOU WIN!!!";
//                         youwin.style.opacity = 1;
//                     }
//                     buffer.splice(0,2);

//                 }
//                 else {
//                     let count = Number(triescount.innerText);
//                     count = count + 1;
//                     triescount.innerText = count; 
//                     setTimeout(function(){
//                         buffer[0].parentElement.style.transform = "rotate3d(0,1,0,180deg)";
//                         buffer[0].parentElement.style.backfaceVisibility = "visible";
//                         buffer[0].parentElement.style.backgroundColor = "lightpink";
//                         buffer[0].style.opacity = 0;
//                         buffer[1].parentElement.style.transform = "rotate3d(0,1,0,180deg)";
//                         buffer[1].parentElement.style.backfaceVisibility = "visible";
//                         buffer[1].parentElement.style.backgroundColor = "lightpink";
//                         buffer[1].style.opacity = 0;
//                         buffer.splice(0,2);
//                     },1000)

//                     // if (count == 0) {
//                     //     table.remove();
//                     //     gameOver.innerText = "GAME OVER!";
//                     //     gameOver.style.opacity = 1; 

//                     // }


//                 }

//             }
//         }
//     }
// }

setTimeout(rotate_cards, 7000);