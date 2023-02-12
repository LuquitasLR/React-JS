function desplegar () {
    let listElement =document.querySelector('#lista')
    listElement.addEventListener ( 'onclick', () => {
    listElement.classList.toggle('showClick')
})
}