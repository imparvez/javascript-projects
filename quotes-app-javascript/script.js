var container = document.querySelector('#container');

function displayQuote(data) {
    var html = `
        <h1>Daily Quotes</h1>
        <div class="quote">
            ${data.content}
            <span class="author">-${data.title}</span>
            <a href="${data.link}">(link)</a>
        </div>
    `
    container.innerHTML = html;
}

function getQuote() {
    axios
        .get('https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&bustcache=' + Math.random())
        .then(function(response) {
            displayQuote(response.data[0])
        })
}

document.querySelector('button').addEventListener('click', function(){
    getQuote();
});

getQuote();
