async function request(url) {
    let authors = [];
    let response = await fetch(url);
    if (response.ok) {
        let json = await response.json();
        for (const book of json.povBooks) {
            authors = authors.concat(await requestBook(book));
        }
        return Promise.resolve(authors);
    } else {
        alert("Error: " + response.status);
    }
}

async function requestBook(url) {
    let authors = [];
    let response = await fetch(url);
    if (response.ok) {
        let json = await response.json();
        json.authors.forEach(author => {
            authors[authors.length] = author;
        });
        return Promise.resolve(authors);
    } else {
        alert("Error: " + response.status);
    }
}

console.log(await request("https://www.anapioficeandfire.com/api/characters/583"));