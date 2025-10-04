const modals = () => {
    const bindModal = (triggerSelector, modalSelector, closeselector='.closeBtn') => {        
        const trigger = document.querySelectorAll(triggerSelector),
            popaps = document.querySelectorAll('.popap'),
            modal = document.querySelector(modalSelector),
            overlay = document.querySelector('.overlay'),
            close = modal.querySelector(closeselector);
        const closeModal = () => {
            modal.style.display = 'none';
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        }
            
        // открытие модального окна
        trigger.forEach(elem =>{
            elem.addEventListener('click', (e) => {
                //проверка на существование элемента
                   if(e.target){
                       e.preventDefault();                  
                   }
                    // скрытие всех модальных окон
                   popaps.forEach(el => {
                    el.style.display = 'none';
                   });
       
                   //отображение модального окна
                   modal.style.cssText = 'display:flex;justify-content:center;align-items:center;overflow-x:scroll  ';
                   overlay.style.display = 'block';
       
                   //отмена прокрутки всей станицы
                   document.body.style.overflow = 'hidden';

              });
        });

        close.addEventListener('click', (e) => {
             closeModal();
        })

        //закрытие по клику на область вокруг окна
        modal.addEventListener('click', (e) => {
            if(e.target === modal){
                closeModal();
            }
        });

        // закрытие по кнопке esc
        // Обработчик события keydown
        document.addEventListener('keydown', function(event) {
            // Проверяем, была ли нажата клавиша Escape (код клавиши — 27)
            if (event.keyCode === 27 || event.key === 'Escape') {
                // Закрываем окно, скрывая его
                closeModal();
            }
        });

    };

    bindModal('.header-topButtons__registration', '#popapАuthorization');
    bindModal('#registrationLink', '#popapRegistration');
    bindModal('#autorizationLink', '#popapАuthorization');
};


export default modals;
