const technologies = {
    professional: [
        'Spring', 'Java', 'Docker', 'GCP', 'Postgres', 'GraphQL', 'Hasura', 'Kubernetes', 'WSL', 'Gitlab'
    ],
    personal: [
        'Firebase', 'Angular', 'Sass', 'Typescript', 'Javascript', 'Ionic', 'Electron'
    ]
}

for (const [key, value] of Object.entries(technologies)) {
    let component = document.getElementById('icon-grid--' + key);

    for (const element of value) {
        let name = element;

        let techElement = document.createElement('div');
        techElement.className = 'technologies__single';

        let imageElement = document.createElement('img');
        imageElement.src = 'images/' + name + '.png';
        imageElement.className = 'technologies__logo';

        let headerElement = document.createElement('h3');
        headerElement.textContent = name;

        techElement.appendChild(imageElement);
        techElement.appendChild(headerElement);
        component.appendChild(techElement);

    }
}