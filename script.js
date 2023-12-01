
let input = document.getElementById('first');
let errorMessage = document.getElementById('errorMessage');
let btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
    let email = input.value;
    if(!email.includes("@gmail.com")){
        input.style.border = '1px solid  brown';
        errorMessage.style.display = 'block';
    }else{
        input.style.border = '1px solid  green';
        errorMessage.style.display = 'none';
    }
})

