const body = document.body
let input = document.getElementById('input')
let text = document.getElementById('text')
 
input.addEventListener('change', (e)=>{
    
    if(e.target.value === ''){
       text.textContent = 'please type in a color'
    } else {
        body.style.backgroundColor = e.target.value;
    }
})