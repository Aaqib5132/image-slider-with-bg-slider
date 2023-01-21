
const nodeList = document.querySelectorAll(".panel");
   
nodeList.forEach(panel =>{
    panel.addEventListener('click', () => {
        removeActiveclasses();
        panel.classList.add('active');
    })
})

function removeActiveclasses(){
    nodeList.forEach(panel => {
        panel.classList.remove('active')
    })
}




