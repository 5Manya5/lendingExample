const formEvents = () => {

    // показать/скрыть пароль
    const showIcons = document.querySelectorAll('.inputPass__showPass');
    const postBtns = document.querySelectorAll('.registrationBtn');      

    showIcons.forEach(el => {
        el. addEventListener('click', (e) => {
            const target = e.target,
            targetParent = target.closest('.inputPass'),
            password = targetParent.querySelector('.inputPass__password');
            
            if(!target.classList.contains('hide')){
                target.classList.toggle('hide');
                password.setAttribute('type', 'text');
            }
            else{
                target.classList.toggle('hide');
                password.setAttribute('type', 'password');
            }
            return false;
        });        
        
    });

    
    const checkbox = document.querySelector('.checkbox');
        const label = document.querySelector('.checkbox__text + span');
        label.addEventListener('click',() => {        
            checkbox.checked = !checkbox.checked;
    });
    
    // отправка формы
    const formPost = (popapSelector) => {
        const currentPopap = document.querySelector(`#${popapSelector}`),
         form = currentPopap.querySelector('form'),
        inputs = form.querySelectorAll('input');

        const message = {
            loading:'Загрузка...',
            success:'Спасибо, скоро мы с вами свяжемся',
            failure:'Что-то пошло не так'
        };

        // функция отправки формы
        const postData = async(url, data) => {

            document.querySelector('.status').textContent = message.loading;
            let res = await fetch(url, {
                method:"POST",
                body:data
            });

            return await res.text();
        }
        const clearInputs = () => {
            inputs.forEach(item => item.value = '');        
        };

        
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // создание блока для сообщения
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.appendChild(statusMessage);

            // обработка формы
            const formData = new FormData(form);
            console.log(formData);
            

            // отправка формы
            postData('../server.php', formData)
                .then(result => {
                    console.log(result);
                    console.log(результат);
                    
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();                    
                    setTimeout(()=>{
                        statusMessage.remove();
                    }, 5000);
                })
            
        });
        
    };

    postBtns.forEach(el => {
        el.addEventListener('click', (e) => {
            const popap = e.target.closest('.popap').id;
            
            e.preventDefault();
            formPost(popap);
        });
    });
    

};



export default formEvents;