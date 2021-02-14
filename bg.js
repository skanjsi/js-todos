const CONTENTS_NUM = 6,
    BgList = ["https://images.unsplash.com/photo-1598280081603-da633d7f5d6a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1189&q=80",
    "https://images.unsplash.com/photo-1476108621677-3c620901b5e7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
    "https://images.unsplash.com/photo-1538240175502-ec4eb4455f34?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1571990678217-9ea41a3a06e2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    "https://images.unsplash.com/photo-1496773589367-79ee06195d0b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1565115868297-2e5de855ac7e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"],
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