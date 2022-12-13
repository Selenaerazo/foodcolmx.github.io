(function(){
    
    const sliders = [...document.querySelectorAll('.presentation__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    let value;   

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentPresentation = document.querySelector('.presentation__body--show').dataset.id;
        value = Number(currentPresentation);
        value+= add;


        sliders[Number(currentPresentation)-1].classList.remove('presentation__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length  : 1;
        }

        sliders[value-1].classList.add('presentation__body--show');

    }

})();
