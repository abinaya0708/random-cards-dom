

var players=[
    {
        name:"Virat",
        about:"Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. He currently represents Royal Challengers Bangalore in the IPL and Delhi in domestic cricket. Kohli is widely regarded as one of the greatest batsmen in the history of the sport.",
        image:"images/virat.jpeg"
    },
    {
        name:"Dhoni",
        about:"Mahendra Singh Dhoni is an Indian professional cricketer, who plays as a wicket-keeper-batsman. Widely regarded as one of the world's greatest wicket-keeper-batsmen and captains in the history of the sport, he is known for his explosive batting, wicket-keeping and leadership skills",
        image:"images/dhoni.jpeg"
    },
    {
        name:"Jadeja",
        about:"Ravindrasinh Anirudhsinh Jadeja is an Indian international cricketer who represents the Indian national cricket team in all formats. He is an all-rounder, who bats left-handed and bowls left-arm orthodox spin.",
        image:"images/jadeja.jpeg"
    },
    {
        name:"Siraj",
        about:"Mohammed Siraj is an Indian cricketer who plays as a right-arm fast bowler for the Indian national team. He also plays for Royal Challengers Bangalore in the Indian Premier League and Hyderabad in domestic cricket. In 2017, he played for IPL team of Sunrisers Hyderabad.",
        image:"images/sirajj.jpeg"
    },
    {
        name:"Gill",
        about:"Shubman Gill is an Indian cricketer. Representing Indian cricket team at the international level, he also plays for Gujarat Titans in the Indian Premier League and Punjab in domestic cricket.",
        image:"images/gill.jpeg"
    },
     {
        name:"Rohit",
        about:"Rohit Gurunath Sharma is an Indian international cricketer and the current captain of India national cricket team in all formats. Widely regarded as one of the greatest batsmen of this era, Sharma is known for his timing, elegance, six-hitting abilities and leadership skills.",
        image:"images/rohit.jpeg"
    }
]

var random=document.getElementById("random");

    var card=document.createElement("div");
    card.classList.add("card");

    random.appendChild(card);

    var image_div=document.createElement("div");
    image_div.classList.add("image_div");

    card.appendChild(image_div);

    var image=document.createElement("img");
    image.classList.add("image");
    

    image_div.appendChild(image);

    var head=document.createElement("h3");
    head.classList.add("head");
    

    head.style.color="blue";

    card.appendChild(head);

    var subhead=document.createElement("h4");
    subhead.classList.add("subhead");
    
    subhead.style.color="black";
    subhead.style.fontSize="14px";

    card.appendChild(subhead);


var randombtn=document.getElementById("randombtn");

randombtn.style.backgroundColor="aqua";
randombtn.style.border=" 2px solid aqua";
randombtn.style.padding="10px 20px";
randombtn.style.borderRadius="50px";
randombtn.style.cursor="pointer";



randombtn.addEventListener("click",function change(){
    var x=Math.floor(Math.random()*players.length);
    head.innerHTML=players[x].name;
    image.setAttribute("src",players[x].image);
    subhead.innerHTML=players[x].about;
})