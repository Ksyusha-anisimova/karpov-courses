const button = React.createElement('button', {
    //аргументом можно передавать любые атрибуты, которые валидны для этой кнопки
    type: 'button',
    disabled: true,
    tabIndex: 0
},'Increment');
ReactDOM.render(button, document.getElementById('root'));