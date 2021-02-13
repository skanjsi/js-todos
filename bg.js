const CONTENTS_NUM = 6,
    BgList = ["https://images.unsplash.com/photo-1611095777904-271a798ed635?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    "https://images.unsplash.com/photo-1611095965923-b8b19341cc29?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    "https://images.unsplash.com/photo-1538240175502-ec4eb4455f34?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1472745433479-4556f22e32c2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80"],
    QuoteList = [{quote:"You cannot change your future, but you can change your habits, and surely your habits will change your future.", speaker:"Abdul Kalam"},
    {quote:"Your habits will determine your future.", speaker:"Jack Canfield"},
    {quote:"Nothing is stronger than habit.", speaker:"Ovid"},
    {quote:"Successful people are simply those with successful habits.", speaker:"Brian Tracy"},
    {quote:"The truth is, you don’t break a bad habit; you replace it with a good one.", speaker:"Denis Waitley"},
    {quote:"We become what we repeatedly do.", speaker:"Sean Covey"}];
    // https://quotefancy.com/habit-quotes

const body = document.querySelector("body"),
    quoteText = document.querySelector(".quote--text"),
    quoteSpeaker = document.querySelector(".quote--speaker");

function setBackground(){
    const randomImgNum = Math.floor(Math.random()*CONTENTS_NUM);
    const randomQuoteNum = Math.floor(Math.random()*CONTENTS_NUM);
    body.style.backgroundImage = `url(${BgList[randomImgNum]})`;
    quoteText.innerText = QuoteList[randomQuoteNum].quote;
    quoteSpeaker.innerText = `— ${QuoteList[randomQuoteNum].speaker}`;
}

function init(){
    setBackground();
}

init();