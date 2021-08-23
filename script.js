
const ADJs = [
    "I'm a programmer",
    "I'm a student",
    "a gamer",
    "fulltime fast learner",
    "Genius, Billionaire, Playboy, Philanthropist",
    "I'm Iron-man",
    "I'm BATMAN",
    "front-end Dev",
    "I'm TheMadDrunk",
    "I'm Hamza Alaoui",
    "\"some adjective\""
];


function changeADJ(){
    let index = Math.floor( Math.random()*ADJs.length );
    console.log(index);
    let elem = document.getElementById("adj");
    
    elem.classList.add("adj1");
    
    

    setTimeout(()=>{
        elem.innerText = ADJs[index];
        elem.classList.remove("adj1");
    },
    1100);
    
}



setInterval(changeADJ,7000);