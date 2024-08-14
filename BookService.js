const elemnts=document.getElementsByClassName('pickUp-OptionContainer');

const bookingDescription=document.getElementsByClassName('booking-type-container')

// To Render View For Mobile Version
const onlyForMobileView=document.getElementsByClassName('onlyForMobileView');

const bookCarButton=document.getElementById('bookCar-button');
// 

bookCarButton.addEventListener('click',()=>{
    const clonedNode=elemnts[0].cloneNode(true);
    const bookingDescriptionCloneNode=bookingDescription[0].cloneNode(true);
    // To Change the Value of the Drop Down Tag
    const clonedSelectTag=clonedNode.querySelector('select');
    clonedSelectTag.options[0].textContent  = 'Vehicle Type';
   // To Change the text content value of the button via using class Name
    const clonedSearchButtonElement=bookingDescriptionCloneNode.querySelector('.search-button');
    clonedSearchButtonElement.textContent='Search'
    clonedNode.classList.add('visbleBookOptions')
    bookingDescriptionCloneNode.classList.add('changeLayout')
    onlyForMobileView[0].innerHTML='';
    onlyForMobileView[0].appendChild(clonedNode)
    onlyForMobileView[0].appendChild(bookingDescriptionCloneNode);
    console.log(clonedNode)
    console.log(bookingDescriptionCloneNode)
})
// console.log(elemnts[0])
// onlyForMobileView.appendChild(elemnts[0])


const getOptions=()=>{
    const droppedElement=document.getElementsByClassName('dropLocation');
    console.log(droppedElement[1]);
    
    console.log("Clicked");
    onlyForMobileView[0].innerHTML=''
    const clonedNode=elemnts[0].cloneNode(true);
    const bookingDescriptionCloneNode=bookingDescription[0].cloneNode(true);
    console.log(bookingDescriptionCloneNode);
    
    // bookingDescriptionCloneNode.removeChild(droppedElement[0])
    const clonedSelectTag=clonedNode.querySelector('select');
    clonedSelectTag.options[0].textContent  = 'Vehicle Type';
    bookingDescriptionCloneNode.classList.add('changeLayout');
    clonedNode.classList.add('visbleBookOptions')

    onlyForMobileView[0].appendChild(clonedNode)
    onlyForMobileView[0].appendChild(bookingDescriptionCloneNode);

}