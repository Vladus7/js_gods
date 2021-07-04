let authors = [];

async function request(url) {
    let response = await fetch(url);
    if (response.ok) {
        let json = await response.json();
        json.povBooks.forEach(book => {
            requestBook(book);
        });
    } else {
        alert("Error: " + response.status);
    }
}

async function requestBook (url) {
    let response = await fetch(url);
    if (response.ok) {
        let json = await response.json();
        json.authors.forEach(author => {
            authors[authors.length] = author;
        });
    } else {
        alert("Error: " + response.status);
    }
}

request("https://www.anapioficeandfire.com/api/characters/583");

console.log(authors);
