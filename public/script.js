var num = 3
function reset (){
    num = 3 
    document.getElementById('resultado').innerHTML = num
}
function turn(){
    num = num + 2
    if(num > 10)
    num = 10;
    document.getElementById('resultado').innerHTML = num
}
function mai1(){
    num = num + 1
    if(num > 10)
    num = 10;
    document.getElementById('resultado').innerHTML = num
}
function mai2(){
    num = num + 2
    if(num > 10)
    num = 10;
    document.getElementById('resultado').innerHTML = num
}
function men1(){
    num = num - 1
    if(num < 0)
    num = 0;
    document.getElementById('resultado').innerHTML = num
}
function men2(){
    num = num - 2
    if(num < 0)
    num = 0;
    document.getElementById('resultado').innerHTML = num
}
