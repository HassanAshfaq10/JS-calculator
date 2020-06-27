// var b = 0;
// while(b <= 10){
//     document.write(b)
//     b++
// }

// var c = 0;
// do{
//     document.write(c)
//     c++
// }
// while(c < 10);

// function foo(){
//     alert('Hello')
// }


// function foo(greet){
//     alert(greet)
// }

// function clck(){
//     alert(2+2)
// }

// function getName(){
//         var Name = document.getElementById("name")
//         alert(Name.value)

//         Name.value = ""
// }

// function setName(){
//     var Name = document.getElementById("name")
//     Name.value = 'Hassan'
// }

function getNumber(num){
    var result = document.getElementById('result')
    result.value += num
}

function clearResult(){
    var result = document.getElementById('result')
    result.value = ''
    res.value = ''
}

function getResult(){
    var res = document.getElementById('res')
    res.value = eval(result.value)
}    
