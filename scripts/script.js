// function to disable the gotobutton

const goToButton = document.querySelector('.gototop');
document.addEventListener('scroll',()=>{
    if (window.scrollY > 790){
        goToButton.style.display = 'block';
    }else{
        goToButton.style.display='none';
    }
})

