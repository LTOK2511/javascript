// Data type
let string = 'Oanh Kieu'
let number = 1
let Object = { lop: 1, ten: 2 }
let Boolean = true

// Variables
var a = 3
let x = 1 + a * 1
const B = 5

// let y = b * (++a)
// let q = b * (a++)

// console.log("y", q)
// console.log("a", a)

// Cách cũ
function congbien(x, y) {
    let result = x + y
    return result
}

// Cách viết mới
let TONG = (x, y) => {
    // let result = x + y
    return x + y
}

let array = [{ lop: 1, ten: "kieu" }, { lop: 3, ten: "thom" }]

array.forEach((value, index) => {

})

// JAVASCRIPT DOM
// Lấy data từ giao diện
// let name = document.getElementsByClassName('name')[0].innerHTML
let El = document.getElementById('name').innerHTML

let tinhTong =(x, y) => {
    let result = x + y
    document.getElementById('name').innerHTML = result
}

tinhTong(2,3)

// document.getElementById('name').innerHTML = "kieu"
console.log('name :>> ', El);

// Câu điều kiện if-else
// typeof var
if (1 == "1" || 2 == 1) {
    console.log("true")
} else {
    console.log('false');
}


