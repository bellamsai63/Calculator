function btnop() {
    display.value += "("
}

function btnclo() {
    display.value += ")"
}

function del() {
    display.value = display.value.toString().slice(0, -1)
}

function clearAll() {
    display.value = display.value.toString().slice(0, 0)
}

function seven() {
    display.value += "7"
}

function eight() {
    display.value += "8"
}

function nine() {
    display.value += "9"
}

function slash() {
    display.value += "/"
}

function four() {
    display.value += "4"
}

function five() {
    display.value += "5"
}

function six() {
    display.value += "6"
}

function mul() {
    display.value += "*"
}

function one() {
    display.value += "1"
}

function two() {
    display.value += "2"
}

function three() {
    display.value += "3"
}

function sub() {
    display.value += "-"
}

function dot() {
    display.value += "."
}

function zero() {
    display.value += "0"
}

function equal() {
    result = eval(display.value)
    display.value = result
}

function add() {
    display.value += "+"
}