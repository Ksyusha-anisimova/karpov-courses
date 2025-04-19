// import {categoryIds, categoryName} from './utils.js';
// import React from 'react';
// import './Navigation.css';
// import './App.css';
//
// export const Footer = ({placement = 'footer'}) => {
//     const [category, setCategory] = React.useState('index');
//     const [articles, setArticles] = React.useState({articles: [], categories: [], sources: []});
//
//     const onNavClick = (e) => {
//         e.preventDefault();
//         setCategory(e.currentTarget.dataset.href);
//         //после навешиваем onNavClick на наши ссылки
//     }
//
//     React.useEffect(() => {
//         fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + categoryIds[category] || '')
//             .then(response => response.json())
//             .then((response) => {
//                 setArticles(response);
//             })
//     }, [category])
//
//     return (
//         <footer className="footer">
//             {/*делаем навигацию*/}
//             <div className="container">
//
//                 <nav className={`navigation grid navigation--${placement} footer__navigation`}>
//                     <a href="../project.html" className="navigation__log"><img className="navigation__image"
//                                                                                src="/images/logo1.png"
//                                                                                alt="Логотип"/></a>
//                     <ul className="navigation__list">
//                         {['project','fashion','tech','politics','sport'].map((item) => {
//                             return (
//                                 <li className="navigation__item" key={item}>
//                                     <a
//                                         onClick={onNavClick}
//                                         data-href={item}
//                                         href="#"
//                                         className={`navigation__link ${category === item ? 'navigation__link--active' : ''}`}
//                                     >
//                                         {categoryName[item]}
//                                     </a>
//                                 </li>
//                             )
//                         })}
//
//                     </ul>
//                 </nav>
//             </div>
//
//             <div className="footer__columne">
//                 <p className="footer__text">Сделано на Frontend курсе в <a href="#" className="footer__link"
//                                                                            target="_blank">Karpov.Courses</a></p>
//                 <p className="footer__copyright">© 2021</p>
//             </div>
//
//         </footer>
//     )
// }