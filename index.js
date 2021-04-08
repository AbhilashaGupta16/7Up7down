function play(num){
    // alert("Whats your name")
    var x=Math.floor((Math.random()*6)+1)
    var y=Math.floor((Math.random()*6)+1)
    st1="images/dice"+x+".png"
    st2="images/dice"+y+".png"
    document.querySelector("#dice-face-1").setAttribute("src",st1)
    document.querySelector("#dice-face-2").setAttribute("src",st2)
    if(num==1 && (x+y)<7)
        f=1
    else if(num==2 && (x+y)==7)
        f=1
    else if(num==3 && (x+y)>7)
        f=1
    else
        f=0
    console.log(f)
    if(f==1)
        document.querySelector("#victory-box").textContent="YEAH ! YOU WON"
    else
        document.querySelector("#victory-box").textContent="SORRY, YOU LOST !"
}