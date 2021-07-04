let authors = [];
fetch("https://www.anapioficeandfire.com/api/characters/583").then((response) => {
    return response.json();
}).then((data) => {
    data.povBooks.forEach(book => {fetch(book).then((response) => {
        return response.json();
    }).then((data) => {
        data.authors.forEach(author => {
            authors[authors.length] = author;
        });
    }).catch((error)=>{console.error('Error:' + error);});});
}).catch((error)=>{console.error('Error:' + error);});

console.log(authors);
