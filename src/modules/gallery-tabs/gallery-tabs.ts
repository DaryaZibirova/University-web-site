let tab = function (): void {
    let tabNav = document.querySelectorAll('.gallery-block__tab'),
        tabContent = document.querySelectorAll('.gallery-block-wrapper'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav);
    });

    function selectTabNav(): void {
        tabNav.forEach(item => {
            item.classList.remove('gallery-block__tab_active');
        });
        this.classList.add('gallery-block__tab_active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    };

    function selectTabContent(tabName): void {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('gallery-block__tab_active') : item.classList.remove('gallery-block__tab_active');
        });
    };
};

tab()