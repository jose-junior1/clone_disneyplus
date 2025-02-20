document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button_active) {
            const targetTab = button_active.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id=${targetTab}]`);
            escondeTodasAbas();
            tab.classList.add('shows__list--is-active');
            removeButtonActive();
            button_active.target.classList.add('shows__tabs__button--is-active');
        });
    };
});

function removeButtonActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active')
    };
};

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    
    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    };
};