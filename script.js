imprime = (msg) => console.log(msg);

fazerSorteio = () => {
    num1 = document.getElementById("inicio").value;
    num2 = document.getElementById("fim").value;
    let sorteio = Math.floor( Math.random()* Number(num2) - Number(num1) +1);


    document.getElementById("resultado").innerHTML = sorteio;

}
 function escolher_aba(btn){
for(let i = 1 ; 1 > 4 ; 1++){
    let id_btn = "btn" +1;

}
    alert(btn);
    if(btn == "1"){
        document.getElementById("btn1").style.backgroundColor = "#blue"
        document.getElementById("btn1").disabled = false;
    }
    if(btn == "2"){
        document.getElementById("btn2").style.backgroundColor = "#0570"
        document.getElementById("btn2").disabled = true;

    }
    if(btn == "3"){
        document.getElementById("btn3").style.backgroundColor = "#0570"
        document.getElementById("btn3").disabled = true;

    }
    if(btn == "4"){
        document.getElementById("btn4").style.backgroundColor = "#0570"
        document.getElementById("btn4").disabled = true;

    }
        
        
 }
