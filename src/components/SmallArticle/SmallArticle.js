import React from 'react';
import './SmallArticle.css';
import  '../../Common.css';
import  "../../style.css";

export const SmallArticle = ({ title, source, date }) => (
    <article className="small-article">
        <h2 className="small-article__title">{title}</h2>
        <span className="article-date">
		{new Date(date).toLocaleDateString('ru-RU', { month: 'long', day: 'numeric' })}
	  </span>
        <span className="article-source">{source}</span>
    </article>
);