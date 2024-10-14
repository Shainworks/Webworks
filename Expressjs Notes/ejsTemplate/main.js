const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs')        //bnasically i am specifying that i am using ejs template
//now why are template engine are used ....to do stuff like passing tthe variables into the templates and pretty much like that

app.get('/', (req, res) => {
    let siteName = "Oh bhai maza aagaya"
    let searchBar = "Search krna"
    let searchPlace = "AurspacesNotAloowed"
    let array = ["aur", "bhai"]    //we can also send arrays into the objects and use those variables
    //   res.render('templates/index.html',{siteName: siteName,searchBar: searchBar})
    //now as i am using the ejs extension i can specify only the file name instead of passing the whole thing of filepath like above
    res.render('index', { siteName: siteName, searchBar: searchBar, searchPlace: searchPlace, array }) //i could have simply specifierd the object names rather than also specifying key elemenets but it is good for understanding
    //   <%= variable_name %> this is the syntax for accesing the values of variables when you using ejs
})
//  <% include navbar.ejs %,{object:"object_value"}> 
//  Here you can add those JS variables, because the page will render everything and find them when it loads the included file and the object value written over here will override the others and usually this is used to maintain the code snippets

app.get('/blob/:slug', (req, res) => {
    let blogName = "Darshan"
    let BlogContent = "Contetnt hi nhi hai bhai"
    res.sendFile('templates/index.html', { root: __dirname })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


// In summary, EJS is useful when you need to generate dynamic HTML content in Node.js applications, enabling easy integration of server-side data with the client-side presentation.

// EJS (Embedded JavaScript) is a templating engine that allows you to generate HTML markup with plain JavaScript. It is commonly used in Node.js applications to create dynamic web pages by embedding JavaScript code inside HTML templates.

// Key Features of EJS:
// Embedding JavaScript: EJS allows you to embed JavaScript code within the HTML using special tags. For example:

// <%= %>: Outputs the value of a variable or expression directly into the HTML.

// <% %>: Executes JavaScript code but doesn't output anything to the HTML.

// <h1>Welcome, <%= userName %>!</h1>

// Conditional Rendering: You can use if-else statements or other JavaScript control structures to conditionally render parts of your HTML.
// <% if (user.isLoggedIn) { %>
//   <p>Welcome back, <%= user.name %>!</p>
// <% } else { %>
//   <p>Please log in.</p>
// <% } %>

// Loops: You can loop through arrays and objects, making it easy to render lists dynamically.
// <ul>
//   <% users.forEach(function(user) { %>
//     <li><%= user.name %></li>
//   <% }) %>
// </ul>

// Reusability with Partials: EJS supports partials, which allow you to reuse sections of HTML across multiple templates, like headers and footers.
// <%- include('partials/header') %>

// Layout Management: EJS can manage page layouts, allowing you to create base templates with placeholders that can be filled by other templates.