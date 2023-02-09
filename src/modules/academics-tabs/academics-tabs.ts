let tab = function (): void {
    let tabNav = document.querySelectorAll('.teachers-block__tab-wrapper'),
        tabContent = document.querySelectorAll('.teachers-block__tab-content'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav);
    });

    function selectTabNav(): void {
        tabNav.forEach(item => {
            item.classList.remove('teachers-block__tab_active');
        });
        this.classList.add('teachers-block__tab_active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    };

    function selectTabContent(tabName): void {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('teachers-block__tab_active') : item.classList.remove('teachers-block__tab_active');
        });
    };
};

tab()