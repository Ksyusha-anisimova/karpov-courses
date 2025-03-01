// const getNewsAsync = async () => {
//     const response = await fetch('https://frontend.karpovcourses.net/api/v2/ru/news/');
//     const date = await response.json();
//     setArticles(date);
// };

const sleep = (ms) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        },ms);
    });
};

const getAsync = async () => {
    console.log('Start');
    await sleep(2000);
    console.log('I am waking up');
};
console.log(1);
getAsync();
console.log(2);