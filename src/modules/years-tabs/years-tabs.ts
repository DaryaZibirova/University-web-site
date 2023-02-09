let tab = function (): void {
    let tabNav = document.querySelectorAll('.tabs-nav__item'),
        tabContent = document.querySelectorAll('.tabs-content'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav);
    });

    function selectTabNav(): void {
        tabNav.forEach(item => {
            item.classList.remove('tabs-nav__item_active');
        });
        this.classList.add('tabs-nav__item_active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    };

    function selectTabContent(tabName): void {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('tabs-nav__item_active') : item.classList.remove('tabs-nav__item_active');
        });
    };
};

tab()