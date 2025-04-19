import { categoryIds, categoryName } from './utils.js';
export const Footer = () => {
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
  React.useEffect(() => {
    fetch('https://frontend.karpovcourses.net/api/v2/ru/news/' + categoryIds[category] || '').then(response => response.json()).then(response => {
      setArticles(response);
    });
  }, [category]);
  return /*#__PURE__*/React.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("nav", {
    className: "navigation grid footer__navigation"
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
  })))), /*#__PURE__*/React.createElement("div", {
    className: "footer__columne"
  }, /*#__PURE__*/React.createElement("p", {
    className: "footer__text"
  }, "\u0421\u0434\u0435\u043B\u0430\u043D\u043E \u043D\u0430 Frontend \u043A\u0443\u0440\u0441\u0435 \u0432 ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "footer__link",
    target: "_blank"
  }, "Karpov.Courses")), /*#__PURE__*/React.createElement("p", {
    className: "footer__copyright"
  }, "\xA9 2021")));
};