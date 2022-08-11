var button1 = document.getElementById('btn');
var button2 = document.getElementById('btn1');
var button3 = document.getElementById('btn2');
var button4 = document.getElementById('btn3');


// Using switch case

button1.addEventListener('click', () => {
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;
    var input3 = document.getElementById('char').value;
    switch (input3) {
        case '+':
            document.getElementById('para').innerHTML=(parseInt(input1) + parseInt(input2));
            break;
        case '-':
            document.getElementById('para').innerHTML=(parseInt(input1) - parseInt(input2));
            break;
        case '/':
            document.getElementById('para').innerHTML=(parseInt(input1) / parseInt(input2));
            break;
        case '*':
            document.getElementById('para').innerHTML=(parseInt(input1) * parseInt(input2));
            break;
    
        default:document.getElementById('para').innerHTML=("Please enter a correct operator");
            break;
    }
})


// Using if/else statements

// button1.addEventListener('click',()=>{
//     var input1=document.getElementById('input1').value;
//     var input2=document.getElementById('input2').value;
//     var input3=document.getElementById('char').value;
//     if(input3=='+'){
//         document.getElementById('para').innerHTML=(parseInt(input1)+parseInt(input2));
//     }
//     else if(input3=='-'){
//          document.getElementById('para').innerHTML=(parseInt(input1)-parseInt(input2));
//      }
//     else if(input3=='/'){
//         document.getElementById('para').innerHTML=(parseInt(input1)/parseInt(input2));
//     }
//     else{
//         document.getElementById('para').innerHTML=(parseInt(input1)*parseInt(input2));
//     }
// })