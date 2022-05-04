const technologies = {
    professional: [
        'Spring', 'Java', 'Docker', 'GCP', 'Postgres', 'GraphQL', 'Hasura', 'Kubernetes', 'WSL', 'Gitlab'
    ],
    personal: [
        'Firebase', 'Angular', 'Sass', 'Typescript', 'Javascript', 'Ionic', 'Electron'
    ]
}
window.addEventListener('scroll', reveal);
function reveal() {

    let reveals = document.querySelectorAll('.technologies__single');

    for (const iterator of reveals) {

        let windowHeight = window.innerHeight;
        let revealtop = iterator.getBoundingClientRect().top;

        if(revealtop < windowHeight){
            iterator.classList.add('active');
        }
    }
}




for (const [key, value] of Object.entries(technologies)) {
    let component = document.getElementById('icon-grid--' + key);
    let index = 1;
    for (const element of value) {
        let name = element;

        let techElement = document.createElement('div');
        techElement.className = 'technologies__single';

        let imageElement = document.createElement('img');
        imageElement.src = 'images/' + name.toLowerCase() + '.png';
        imageElement.className = 'technologies__logo';

        let headerElement = document.createElement('h3');
        headerElement.textContent = name;

        techElement.style.animationDelay = (index * 150) + 'ms';
        techElement.appendChild(imageElement);
        techElement.appendChild(headerElement);
        component.appendChild(techElement);
        index += 1;

    }
}

