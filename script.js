let submit , input , form , ol 


mySubmit = document.querySelector('.submit')
myInput = document.querySelector('.input-text')
form = document.querySelector('form')
ol = document.querySelector('.ol');




mySubmit.disabled = true


myInput.addEventListener('keyup', ()=>{

 if (myInput.value.length > 5 ) {
    
    mySubmit.disabled = false
 }else{
    mySubmit.disabled = true
 }

})


form.addEventListener( 'submit',(t)=>{

    t.preventDefault()
    
    let li = document.createElement('li')

   let liContent = document.createTextNode(myInput.value)

   li.setAttribute('class', 'style-li')

   li.appendChild(liContent)

   ol.appendChild(li)
   
myInput.value = ''

mySubmit.disabled = true

let btn = document.createElement('button')

let btnContent = document.createTextNode('x')

btn.appendChild(btnContent)

li.appendChild(btn)

btn.setAttribute('class', 'style-btn')

btn.addEventListener('click',()=>{

    ol.removeChild(li)
})
})


