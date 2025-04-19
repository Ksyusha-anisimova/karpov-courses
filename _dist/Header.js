import { categoryName } from './utils.js';
export const Header = () => {
  const [category, setCategory] = React.useState('index');
  const [articles, setArticles] = React.useState({
    articles: [],
    categories: [],
    sources: []
  });
  const onNavClick = e => {
    e.preventDefault();
    setCategory(e.currentTarget.dataset.href);
    //после навешиваем onNavClick на наши ссылки
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "navigation grid header__navigation"
  }, /*#__PURE__*/React.createElement("a", {
    href: "../project.html",
    className: "navigation__log"
  }, /*#__PURE__*/React.createElement("img", {
    className: "navigation__image",
    src: "/images/logo1.png",
    alt: "\u041B\u043E\u0433\u043E\u0442\u0438\u043F"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "navigation__list"
  }, ['project', 'fashion', 'tech', 'politics', 'sport'].map(item => {
    return /*#__PURE__*/React.createElement("li", {
      className: "navigation__item",
      key: item
    }, /*#__PURE__*/React.createElement("a", {
      onClick: onNavClick,
      "data-href": item,
      href: "#",
      className: `navigation__link ${category === item ? 'navigation__link--active' : ''}`
    }, categoryName[item]));
  })))));
};