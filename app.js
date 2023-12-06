// let GetNewsPage = document.getElementById("GetNewsPage");
// let News = document.getElementById("News");
// let SearchNews = () =>{
// fetch(`https://newsapi.org/v2/everything?q=${News.value}&from=2023-09-23&sortBy=publishedAt&apiKey=b6043893e9c044eb86c8e6714b791e02`)
// .then(data => data.json())
// .then( data => {
    
//     for(let i = 0; i < data.articles.length ; i++){
//     console.log(data.articles[i]);

//     GetNewsPage.innerHTML += `
//     <div class="card" style="width: 18rem;">
//         <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">${data.articles[i].author}</h5>
//         <p class="card-text">${data.articles[i].title}<p>
//         <a href="#" class="btn btn-primary">${data.articles[i].publishedAt}</a>
//     </div>
// </div>
//     `
//   }
// })
// .catch(console.log(error))

// }
// SearchNews()


// new 
It looks like there is a small syntax error in your code. The `catch` block should take an error parameter. Here's the corrected code:

```javascript
let GetNewsPage = document.getElementById("GetNewsPage");
let News = document.getElementById("News");

let SearchNews = () => {
    fetch(`https:newsapi.org/v2/everything?q=${News.value}&from=2023-09-23&sortBy=publishedAt&apiKey=b6043893e9c044eb86c8e6714b791e02`)
        .then(data => data.json())
        .then(data => {
            for (let i = 0; i < data.articles.length; i++) {
                console.log(data.articles[i]);
                GetNewsPage.innerHTML += `
                    <div class="card" style="width: 18rem;">
                        <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${data.articles[i].author}</h5>
                            <p class="card-text">${data.articles[i].title}</p>
                            <a href="#" class="btn btn-primary">${data.articles[i].publishedAt}</a>
                        </div>
                    </div>
                `;
            }
        })
        .catch(error => console.log(error)); // Fix: added error parameter
};
```

I added the `error` parameter to the `catch` block to properly handle any errors that might occur during the fetch operation.