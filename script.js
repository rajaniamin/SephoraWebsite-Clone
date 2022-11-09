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