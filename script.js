function display(val){
    document.getElementById('result').value += val
    solve()
    return val
}

function solve(){

    let x = document.getElementById('result').value

    let y = eval(x);
    if(y % 1 != 0) y = y.toFixed(5)
    if(y == Infinity) y = "Cannot be divided by zero"

    document.getElementById('result').value = y

    return y

}

function backSpace() {
    let x = document.getElementById('result').value
    let y = x.toString().slice(0, -1)
    document.getElementById('result').value = y
    return y
}

function clearScreen(){
    document.getElementById('result').value = ''
}