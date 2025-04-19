// import {categoryName} from './utils.js';
// import React from 'react';
// import './Navigation.css';
// import './App.css';
//
// // className = '' можно вставить в качестве свойства в header
// export const Header = ({ placement = 'header'}) => {
//     const[category, setCategory] = React.useState('index');
//     const[articles, setArticles ] = React.useState({articles: [], categories: [], sources: []});
//
//     const onNavClick = (e) => {
//         e.preventDefault();
//         setCategory(e.currentTarget.dataset.href);
//         //после навешиваем onNavClick на наши ссылки
//     }
//
//     return (
//         <header className="header">
//             <div className="container">
//                 <nav className={`navigation grid navigation--${placement} header__navigation`}>
//                     <a href="../project.html" className="navigation__log"><img className="navigation__image"
//                                                                                src="/images/logo1.png"
//                                                                                alt="Логотип"/></a>
//                     <ul className="navigation__list">
//                         {['project','fashion','tech','politics','sport'].map((item) => {
//                             return(
//                                 <li className="navigation__item" key={item}>
//                                     <a
//                                         onClick={onNavClick}
//                                         data-href={item}
//                                         href="#"
//                                         className={`navigation__link ${category === item ? 'navigation__link--active': '' }`}
//                                     >
//                                         {categoryName[item]}
//                                     </a>
//                                 </li>
//                             )
//                         })}
//                     </ul>
//                 </nav>
//             </div>
//         </header>
//     )
// }