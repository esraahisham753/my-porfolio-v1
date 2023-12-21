const articles = [
    {id: '1', name: 'AI voice models are not always evil', image: './assets/voice.jpg',
    excerpt: 'With all the evil works that have been done using AI voice models, some people are able to come with creative and beneficial ideas built on top of these models.',
    link: 'https://medium.com/aimonks/ai-voice-models-are-not-always-evil-548e65b6de58'},
    {id: '2', name: 'Style transfer.. How to copyright AI generated Art?', image: './assets/style.jpg',
    excerpt: 'How many years and how much effort they have spent to get their own unique style and make all the gorgeous art we all happy with today.',
    link: 'https://medium.com/aimonks/style-transfer-how-to-copyright-ai-generated-art-a4b759d997af'},
    {id: '3', name: 'Control generative AI and unleash your creativity', image: './assets/control.jpg',
    excerpt: 'We have great artists in our world, and each of them has his/her own style of drawing lines and shapes and has unique color scheme for each idea.',
    link: 'https://medium.com/aimonks/control-generative-ai-and-unleash-your-creativity-d745e4da0687'}
];

for (let article of articles) {
    let container = document.createElement('div');
    container.setAttribute('class', 'row article');

    let imgContainer = document.createElement('div');
    imgContainer.setAttribute('class', 'col-sm-12 col-md-12 col-lg-3 img-container');

    let banner = document.createElement('img');
    banner.setAttribute('src', article['image']);
    banner.setAttribute('alt', article['name']);

    imgContainer.appendChild(banner);
    container.appendChild(imgContainer);

    let content = document.createElement('div');
    content.setAttribute('class', 'col-sm-12 col-md-12 col-lg-9');

    let heading = document.createElement('h3');
    heading.innerHTML = article['name'];
    content.appendChild(heading);

    let excerpt = document.createElement('p');
    excerpt.innerHTML = article['excerpt'];
    content.appendChild(excerpt);

    let link = document.createElement('a');
    link.setAttribute('href', article['link']);
    link.innerHTML = 'Read on Medium';

    let icon = document.createElement('i');
    icon.setAttribute('class', 'fa-solid fa-circle-arrow-right');

    link.appendChild(icon);
    content.appendChild(link);
    container.appendChild(content);
    document.querySelector('#articles-list').appendChild(container);
}
