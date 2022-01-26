document.addEventListener("DOMContentLoaded", loadDemBooks)




const url = "http://localhost:3000/books"


// fetch for the list function
function loadDemBooks() {
    fetch(url)
        .then(r => r.json())
        .then(bookData => bookData.forEach(listDemBooks))
        // .then(bookData => bookData.forEach(displayDemBooks))
    function listDemBooks(book) {
        // grab the ul, create the list, add the titles. once clicked, event wipes the container and then adds n ew titles
        const ul = document.getElementById("list")
        const list = document.createElement("li")
        list.innerText = book.title
        list.addEventListener('click', () => {

            const panel = document.getElementById('show-panel')
            panel.replaceChildren()

            // if panel.classList.contains()
            const thumb = document.createElement('img')
            thumb.src = book.img_url
            const description = document.createElement('p')
            description.innerText = book.description
            const likeBtn = document.createElement('button')
            likeBtn.innerText = "Like <3"
            panel.append(thumb, description, likeBtn)
            book.users.forEach((user => {
                const name = document.createElement('p')
                name.innerText = user.username
                panel.append(name)
            }))
        })
        ul.append(list)

    }
}







// const userLikes
// const likeBtn

// show details - click event that displays the book thumbnail, description, an list of users who liked it, all displayed on div #show-panel, like button
// // like a book - display a like button - path request bonus, when clicked it sends a patch with new user name an dadds to existing array For example, if you are user 1 {"id":1, "username":"pouros"} and the previous array was "[{"id":2, "username":"auer"}, {"id":8, "username":"maverick"}], you should send as the body of your PATCH request:

// {
//     "users": [
//       { "id": 2, "username": "auer" },
//       { "id": 8, "username": "maverick" },
//       { "id": 1, "username": "pouros" }
//     ]
//   }
// stretch deliverable: unlike a book, which removes the like and from list of userts who likes (second patch request) and remove user from the dom