// start certificates
const certs = [{
        name: "Andela React Learning Program",
        date: "October 2023",
        image: "./assets/andela_react.jpeg",
        company: "./assets/andela.png"
    },
    {
        name: "Back-End Apps with Node.js and Express",
        date: "January 2023",
        image: "./assets/backend_node.jpeg",
        company: "./assets/coursera.png"
    },
    {
        name: "Advanced Cloud DevOps Nanodegree",
        date: "August 2022",
        image: "./assets/advanced_cloud.jpeg",
        company: "./assets/udacity.png"
    },
    {
        name: "Advanced Web development Nanodegree",
        date: "September 2020",
        image: "./assets/advanced_web.jpeg",
        company: "./assets/udacity.png"
    },
    {
        name: "Python for Data Science & AI",
        date: "January 2020",
        image: "./assets/python.jpeg",
        company: "./assets/coursera.png"
    }
];

let list = document.querySelector('#cert-list');

for (cert of certs) {
    // start img
    let imageContainer = document.createElement('div');
    imageContainer.setAttribute('class', 'flex-shrink-0');
    const certImage = document.createElement('img');
    certImage.setAttribute('src', cert['company']);
    certImage.setAttribute('alt', cert['company']);
    imageContainer.appendChild(certImage);
    // end img
    // start content div
    let contentDiv = document.createElement('div');
    contentDiv.setAttribute('class', 'flex-grow-1 ms-3');
    const courseHeading = document.createElement('h3');
    courseHeading.id = cert['name'].split(' ')[1];
    courseHeading.innerHTML = cert['name'];
    const courseDate = document.createElement('span');
    courseDate.innerHTML = cert['date'];
    contentDiv.appendChild(courseHeading);
    contentDiv.appendChild(courseDate);
    // end content div
    // start media
    let media = document.createElement('div');
    media.setAttribute('class', 'd-flex');
    media.appendChild(imageContainer);
    media.appendChild(contentDiv);
    // end media
    list.appendChild(media);
}

let heading;

for (let c of certs) {
    heading = document.getElementById(c['name'].split(' ')[1])
    heading.addEventListener('click', function() {
        console.log('after', c['image']);
        document.querySelector('#cert-img').setAttribute('src', c['image']);
    });
}
// End certificates

// start projects
const projects = [
    {name: 'GP: Customer Chat Robot', image: './assets/gp.jpeg', link: 'https://www.youtube.com/watch?v=Vv95gidrO6E&t=188s',
     description: 'System supports Arabic language, it should answer common question about the website products'},
    {name: 'Dashboard for Alrajehy company', image: './assets/Saudi-dashboard.png', link: 'https://mostaql.com/portfolio/505529-%D8%A8%D8%B1%D9%85%D8%AC%D8%A9-dashboard-%D9%84%D8%A8%D9%8A%D8%A7%D9%86%D8%A7%D8%AA',
    description: 'Dashboard for enterprise KPIs'},
    {name: 'UX/UI coLearn app', image: './assets/colearn.jpeg', link: 'https://mostaql.com/portfolio/485221-%D8%AA%D8%B7%D8%A8%D9%8A%D9%82-%D8%AA%D8%B9%D9%84%D9%8A%D9%85-%D8%A7%D9%84%D9%83%D8%AA%D8%B1%D9%88%D9%86%D9%8A',
    description: 'UX/UI Design for online learning mobile app'},
    {name: 'Mars Rover Images - ReactJS with testing', image: './assets/mars.jpeg', link: 'https://www.youtube.com/watch?v=sSVFNkDxoes&t=25s',
    description: 'The app components are tested in isolation using:React utils, React testing library, React test renderer, snapshot testing, storybook'},
    {name: 'React Animated newsletter sign up form', image: './assets/animate.jpeg', link: 'https://www.youtube.com/watch?v=X-A-atRUd-8',
    description: 'Converting normal newsletter signup form into animated colorful one using css-in-js and css modules'},
    {name: 'React Conference App', image: './assets/conference.jpeg', link: 'https://www.youtube.com/watch?v=hRqC5nCOSbU&t=30s',
    description: 'An App for managing Conferences speakers and session and also API for speakers CRUD operations using Next.js'}

]

for (let project of projects) {
    let column = document.createElement('div');
    column.setAttribute('class', 'col-sm-12 col-md-6 col-lg-4');
    let projDiv = document.createElement('div');
    projDiv.setAttribute('class', 'project');
    column.appendChild(projDiv);
    let projImg = document.createElement('img');
    projImg.setAttribute('src', project['image']);
    projImg.setAttribute('alt', project['name']);
    projImg.setAttribute('class', 'img-fluid');
    projDiv.appendChild(projImg);
    let projHeader = document.createElement('h3');
    projHeader.innerHTML = project['name'];
    projDiv.appendChild(projHeader);
    let projDesc = document.createElement('p');
    projDesc.innerHTML = project['description'];
    projDiv.appendChild(projDesc);
    let projLink = document.createElement('a');
    projLink.setAttribute('href', project['link']);
    projLink.innerHTML = 'Project Link <i class="fa-solid fa-circle-arrow-right"></i>';
    projDiv.appendChild(projLink);
    document.querySelector('#projects-list-row').appendChild(column);
}
// end projects
