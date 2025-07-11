const toggle = document.querySelector('.toggle');

    toggle.addEventListener('click', () => {//adding an event listener to the toggle switch
      toggle.classList.toggle('on');
    });