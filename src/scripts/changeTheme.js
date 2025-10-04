 // изменение цвета
const changeTheme = () => {
    
    const toggle = document.querySelector('.toggle');
    const blueToggle = document.querySelector(".toggle--blue");
    const whiteToggle = document.querySelector(".toggle--white");
    const header = document.querySelector('header');
    

    // смена темы
    const toggleTheme = () => {
        document.body.classList.toggle('darkTheme');
    }
    // появление/скрытие кнопки тоггл

    toggle.addEventListener('click', (e) => {
        toggleTheme();
        if(whiteToggle.style.display === 'block'){           
            whiteToggle.style.display = 'none';
            blueToggle.style.display = 'block';
            
        }
        else{            
            blueToggle.style.display = 'none';
            whiteToggle.style.display = 'block';
        }
    });
};

export default changeTheme;