const imageContainers = [...document.querySelectorAll(".image-container")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

imageContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener("click", function() {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener("click",function () {
        item.scrollLeft -= containerWidth;
    })
})


const collectionContainers = [...document.querySelectorAll(".collection-container")];
const nxtBtn2 = [...document.querySelectorAll(".nxt-btn2")];
const preBtn2 = [...document.querySelectorAll(".pre-btn2")];

collectionContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn2[i].addEventListener("click", function() {
        item.scrollLeft += containerWidth;
    })

    preBtn2[i].addEventListener("click",function () {
        item.scrollLeft -= containerWidth;
    })
})

const dropContainers = [...document.querySelectorAll(".drop-container")];
const nxtBtn3 = [...document.querySelectorAll(".nxt-btn3")];
const preBtn3 = [...document.querySelectorAll(".pre-btn3")];

dropContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn3[i].addEventListener("click", function() {
        item.scrollLeft += containerWidth;
    })

    preBtn3[i].addEventListener("click",function () {
        item.scrollLeft -= containerWidth;
    })
})
const offerContainers = [...document.querySelectorAll(".offer-container")];
const nxtBtn4 = [...document.querySelectorAll(".nxt-btn4")];
const preBtn4 = [...document.querySelectorAll(".pre-btn4")];

offerContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn4[i].addEventListener("click", function() {
        item.scrollLeft += containerWidth;
    })

    preBtn4[i].addEventListener("click",function () {
        item.scrollLeft -= containerWidth;
    })
})

const sellingContainers = [...document.querySelectorAll(".selling-container")];
const nxtBtn5 = [...document.querySelectorAll(".nxt-btn5")];
const preBtn5 = [...document.querySelectorAll(".pre-btn5")];

sellingContainers .forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn5[i].addEventListener("click", function() {
        item.scrollLeft += containerWidth;
    })

    preBtn5[i].addEventListener("click",function () {
        item.scrollLeft -= containerWidth;
    })
})

const rewardContainers = [...document.querySelectorAll(".reward-container")];
const nxtBtn6 = [...document.querySelectorAll(".nxt-btn6")];
const preBtn6 = [...document.querySelectorAll(".pre-btn6")];

rewardContainers .forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn6[i].addEventListener("click", function() {
        item.scrollLeft += containerWidth;
    })

    preBtn6[i].addEventListener("click",function () {
        item.scrollLeft -= containerWidth;
    })
})


document.querySelector(".signin").addEventListener("mouseenter", myFun)

function myFun(event){
    event.preventDefault();
    displayCard();
}


function displayCard(data){

    let div1=document.createElement("div");
    div1.setAttribute('class','signin-div')
    let head=document.createElement("h2");
    head.innerText="Hello, Beautiful";
    let para=document.createElement("p");
    para.innerText="Sig in for FREE standard shipping for al orders";
    let btn1=document.createElement("button");
    btn1.innerText="Sign In";
    let btn2=document.createElement("button");
    btn2.innerText="Create an Account";  
    btn2.setAttribute("id","createbtn") 

    div1.append(head,para,btn1,btn2);
    document.querySelector(".signin").append(div1);
}

document.querySelector(".new").addEventListener("mouseenter", myFun1)

function myFun1(event){
    event.preventDefault();
    displayCard1();
}

function displayCard1(data){
    let container=document.createElement("div");
    container.setAttribute("class","con-div");
   let divin=document.createElement("div");
   divin.setAttribute("class","divin1")
    let p1=document.createElement("p");
    p1.innerText="All New";
    let p8=document.createElement("p");
    p8.innerText="Just Dropped";
    let p2=document.createElement("p");
    p2.innerText="New Makeup";
    let p3=document.createElement("p");
    p3.innerText="New Skincare";
    let p4=document.createElement("p");
    p4.innerText="New Fragrance";
    let p5=document.createElement("p");
    p5.innerText="New Bath & Body";
    let p6=document.createElement("p");
    p6.innerText="New Hair";
    let p7=document.createElement("p");
    p7.innerText="New Tools & Brushes";
    divin.append(p1,p2,p3,p4,p5,p6,p7,p8)
    let divin2=document.createElement("div");
   divin2.setAttribute("class","divin2")
    
    
    let pa1=document.createElement("p");
    pa1.innerText="The Next Big Things"
    let pa2=document.createElement("p");
    pa2.innerText="Best Sellers"
    let pa3=document.createElement("p");
    pa3.innerText="Quizess & Buy Guides"
    let pa4=document.createElement("p");
    pa4.innerText="Clean Beauty Guide"
    let pa5=document.createElement("p");
    pa5.innerText="Clean + planet Positive Beauty Guide"

    divin2.append(pa1,pa2,pa3,pa4,pa5)
    // let image1=document.createElement("img");
    // image1.setAttribute("src","https://www.sephora.com/contentimages/2022-holiday-launch-general-site-desktop-global-navigation-button-holiday-hub-us-can-release.jpg?imwidth=590")

   
    // let image2=document.createElement("img");
    // image1.setAttribute("src","https://www.sephora.com/contentimages/meganav/large/2022-6-9-haus-lady-gaga-bundle-b-site-desktop-global-navigation-button-en-us-can.jpg?imwidth=294")



    container.append(divin,divin2);
    document.querySelector(".new").append(container);

}


console.log(document.getElementById("#createbtn").innerText)

function login1(event){
event.preventDefault();
loginTable();

}

function loginTable(data){
    console.log("Hi")
    let maindiv=document.createElement("div");
    maindiv.setAttribute("class", "login")
    let heading=document.createElement("h2");
    heading.innerText="Create an Account";
    let imagelogo=document.createElement("img");
    imagelogo.setAttribute("src", "https://www.sephora.com/img/ufe/bi/logo-beauty-insider.svg");
    let line= document.createElement("p");
    line.innerText="Join the Beauty Insider loyalty program. Earn points, get FREE standard shipping, redeem rewards, and more."
    let name=document.createElement("input")
    name.setAttribute("placehodler","Name");
    let email= document.createElement("input")
    email.setAttribute("placehodler","Email address");
    let Password= document.createElement("input")
    Password.setAttribute("placehodler","Password");
    let Phone= document.createElement("input")
    Phone.setAttribute("placehodler","Phone Number");
    let btnn=document.createElement("button");
    btnn.innerText="Join Now";
    maindiv.append(heading,imagelogo,line,name,email,Password,Phone,btnn);
    document.querySelector("body").append(maindiv)
}