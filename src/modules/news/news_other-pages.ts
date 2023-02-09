const getData = async (url: string) => {
    const response = await fetch(url);

    if(!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки: ${response.status}`);
    }
    return await response.json();
}

getData('../../database/news_other-pages.json').then((responseData) => {
    const news = responseData;

    let newsBlock: HTMLElement = document.querySelector('.news-block__wrapper');
    let pagination: HTMLElement = document.querySelector('.news-block__pagination');

    let articlesOnPage: number = 6;
    let countOfPages: number = Math.ceil(news.length / articlesOnPage);

    let showPage = (function() {
        let activePage;

        return function(item): void {
            if (activePage) {
                activePage.classList.remove('news-block__li_active');
            };
            activePage = item;
            item.classList.add('news-block__li_active');
            
            let pageNum: number = +item.innerHTML;

            let start: number = (pageNum - 1) * articlesOnPage;
            let end: number = start + articlesOnPage;

            let articles: any = news.slice(start, end);

            newsBlock.innerHTML = '';
            for (let article of articles) {
                let articleElement = document.createElement('div');
                newsBlock.appendChild(articleElement);
                articleElement.classList.add('news-block__article');
                
                let headline: string = article.headline;

                createDiv(article.image, articleElement);
                createDiv(article.headline, articleElement);
            }
        }
    }());

    let pageItems = [];
    for (let i = 1; i <= countOfPages; i++) {
        let pageElement: any = document.createElement('li');
        pageElement.innerHTML = i;
        pagination.appendChild(pageElement);
        pageItems.push(pageElement);
    };

    showPage(pageItems[0]);

    for (let item of pageItems) {
        item.addEventListener('click', function() {
            showPage(this);
        })
    };

    function createDiv(content: string, articleElement: HTMLElement): void {
        let contentElement = document.createElement('div');
        contentElement.innerHTML = content;
        articleElement.appendChild(contentElement);
        contentElement.classList.add('news-block__content');
    }
    })