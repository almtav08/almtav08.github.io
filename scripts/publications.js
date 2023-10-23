import data from '../data/publications.json' assert { type: 'json' };

const publications = document.querySelector('.publications');
// for each publication in the data, create a new div with class card
data.forEach(publication => {
    const card = document.createElement('div');
    card.classList.add('card'); 
    card.classList.add('fade-in');

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const cardTitle = document.createElement('h2');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = publication.title + ' (' + publication.year + ')';

    const cardBody = document.createElement('p');
    cardBody.classList.add('card-body');
    cardBody.textContent = publication.published + ' \r\n ' + publication.authors;

    const seeButton = document.createElement('a');
    seeButton.classList.add('see-button');
    seeButton.textContent = 'See article';
    seeButton.href = 'https://doi.org/' + publication.doi;

    cardContent.append(cardTitle, cardBody, seeButton);
    card.append(cardContent);

    publications.append(card);
});

publications.addEventListener('scroll', () => {
    if (!publications.querySelector('.return-button')) {
        const returnButton = document.createElement('div')
        returnButton.classList.add('return-button');
        returnButton.textContent = 'Return to top';

        returnButton.addEventListener('click', () => {
            publications.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        });

        publications.append(returnButton);
        createdButton = true;
    }
});