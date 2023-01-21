const searches =document.querySelector('.search')
const btn =document.querySelector('.btn')
const input=document.querySelector('.input')

console.log(searches,btn,input)
btn.addEventListener('click', () => {
    searches.classList.toggle('active')
    // console.log("i am clicked")
    input.focus()
})