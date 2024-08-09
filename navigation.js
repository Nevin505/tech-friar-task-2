const hamBurgerIcon=document.getElementById('hamburgerMenu');
console.log(hamBurgerIcon);

hamBurgerIcon.addEventListener('click',()=>{
    console.log("Clicked");
    
    document.getElementsByClassName('drop-menu')[0].classList.add('show-dropDownMenu')
})
