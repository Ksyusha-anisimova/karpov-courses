// const Footer = require('./Footer');

//импорт
import { Header } from './Header.js';
import { Footer } from './Footer.js';
// import {Main} from './Main.js';
import { mainNews } from './index.js';
import { smallNews } from './index.js';
import { escapeString } from './index.js';
import { data } from './index.js';
// Главный компонент приложения
export const App = () => {
  React.useEffect(() => {
    const mainNewsContainer = document.querySelector('.articles__big-column'); // Получаем контейнер для главных новостей
    const smallNewsContainer = document.querySelector('.articles__small-column'); // Получаем контейнер для второстепенных новостей

    mainNews.forEach(item => {
      const template = document.createElement('template'); // Создаем HTML-шаблон
      const categoryDate = data.categories.find(categoryItem => categoryItem.id === item.category_id); // Находим категорию
      const sourcesDate = data.sources.find(sourcesItem => sourcesItem.id === item.source_id); // Находим источник

      template.innerHTML = `
     <article class="main-article">
         <div class="main-article__image-container">
             <img src="${encodeURI(item.image)}" alt="Фото новости" class="main-article__image"/>
         </div>
         <div class="main-article__content">
             <span class="article-category main-article__category">${escapeString(categoryDate.name)}</span>
             <h2 class="main-article__title">${escapeString(item.title)}</h2>
             <p class="main-article__text">${escapeString(item.description)}</p>
             <span class="article-source main-article__source">${escapeString(sourcesDate.name)}</span>
         </div>
     </article>
    `;
      mainNewsContainer.appendChild(template.content); // Добавляем шаблон в контейнер
    });
    smallNews.forEach(item => {
      const template = document.createElement('template'); // Создаем HTML-шаблон
      const dateDate = new Date(item.date).toLocaleDateString('ru-RU', {
        month: 'long',
        day: 'numeric'
      }); // Форматируем дату
      const sourcesDate = data.sources.find(sourcesItem => sourcesItem.id === item.source_id); // Находим источник

      template.innerHTML = ` 
     <article class="small-article">
     <h2 class="small-article__title">${escapeString(item.title)}</h2>
     <p class="small-article__caption">
         <span class="article-date small-article__date">${dateDate}</span>
         <span class="article-source small-article__source">${escapeString(sourcesDate.name)}</span>
     </p>
 </article>
    `;
      smallNewsContainer.appendChild(template.content); // Добавляем шаблон в контейнер
    });
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Footer, null));
};