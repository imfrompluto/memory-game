let td = document.getElementsByTagName('td'); 
let table = document.querySelector('table'); 
let pic = document.getElementsByTagName('img');
let buffer = [];
let triescount = document.querySelector('.span');
let gameOver = document.querySelector('.gameover'); 
let youwin = document.querySelector('.youwin')
let matchesfound = document.querySelector('.found')
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

for(let i = imagenames.length; i > 0; i --){
    console.log(Math.floor(Math.random()*10));
    let randomnumber = Math.floor(Math.random()*(i + 1));
    let current = imagenames[i]
    imagenames[i] = imagenames[randomnumber]
    imagenames[randomnumber] = current
}
// console.log(imagenames);
for(let i = 0; i < 24; i ++){
    console.log(pic[i]);
    pic[i].src = imagenames[i]
    console.log(imagenames[i]);

}


triescount.innerText = 3;

function rotate_cards() {
    for (i = 0; i <= td.length; i++) {
        td[i].style.transform = "rotate3d(0,1,0,180deg)";
        td[i].style.backfaceVisibility = "visible";
        td[i].style.backgroundColor = "lightpink"; 
        pic[i].style.opacity = 0; 
    
    }
   
}



function show_picture(picposition) {
    for (i = 0; i <= td.length; i++ ){
        if (picposition == i + 1){
            td[i].style.transform = "rotate3d(0,1,0,0deg)";
            pic[i].style.opacity = 1;
            td[i].style.backfaceVisibility = "hidden";

            if(buffer.length == 0){
                buffer.push(pic[i], i);
                console.log(buffer[0].src);
            }
            else{
                if((pic[i].src == buffer[0].src) && (i !== buffer[1])){
                    // alert("the match was found");
                    let matches = Number(matchesfound.innerText);
                    matches = matches + 1;
                    matchesfound.innerText = matches;

                    if (matches == 12) {
                        table.remove();
                        youwin.innerText = "YOU WIN!!!";
                        youwin.style.opacity = 1;
                    }

                }
                else {
                    let count = Number(triescount.innerText);
                    count = count - 1;
                    triescount.innerText = count; 

                    if (count == 0) {
                        table.remove();
                        gameOver.innerText = "GAME OVER!";
                        gameOver.style.opacity = 1; 

                    }


                }
                buffer.splice(0,2);
            }
        }
    }
}

// setTimeout(rotate_cards, 1000);