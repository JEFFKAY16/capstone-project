const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const displayMenu = document.querySelector('.main-menu');
const displayItems = document.querySelectorAll('.items');

openMenu.addEventListener('click', () => {
  displayMenu.classList.add('display-menu');
});

closeMenu.addEventListener('click', () => {
  displayMenu.classList.remove('display-menu');
});

displayItems.forEach((element) => {
  element.addEventListener('click', () => {
    displayMenu.classList.remove('display-menu');
  });
});

// Featured Speakers Created Dynamically In JavaScript Using Objects

const featuredSpeakers = [
  {
    id: 'card-1',
    image1: './images/cheked.webp',
    image2: './images/melinda-gates.jpeg',
    names: 'Melinda Gates',
    occupation: 'Co-Founder At The Gates Foundation',
    description: 'The Bill & Melinda Gates Foundation, a merging of the William H. Gates Foundation and the Gates Learning Foundation.',
  },
  {
    id: 'card-2',
    image1: './images/cheked.webp',
    image2: './images/jeff-bezos.jpeg',
    names: 'Jeff Bezos',
    occupation: 'Founder At Amazon & Blue origin',
    description: 'Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
  },
  {
    id: 'card-3',
    image1: './images/cheked.webp',
    image2: './images/elon-musk.jpeg',
    names: 'Elon Musk',
    occupation: 'Founder Tesla & Space-X',
    description: 'Space Exploration Technologies Corp. is an American aerospace manufacturer, space transportation services and communications corporation.',
  },
  {
    id: 'card-4',
    image1: './images/cheked.webp',
    image2: './images/rosalind.jpeg',
    names: 'Rosalind Brewer',
    occupation: 'CEO At Walgreens Boots Alliance',
    description: 'Rosalind G. Brewer, also known as "Roz", is an American businesswoman serving as the CEO of Walgreens Boots Alliance.',
  },
  {
    id: 'card-5',
    image1: './images/cheked.webp',
    image2: './images/serena-williams.jpeg',
    names: 'Serena Williams',
    occupation: 'America Pro Tennis Player',
    description: 'Serena Jameka Williams is an American professional tennis player. She has won 23 Grand Slam singles titles, the most by any player in the Open Era.',
  },
  {
    id: 'card-6',
    image1: './images/cheked.webp',
    image2: './images/bill-gates.jpeg',
    names: 'Bill Gates',
    occupation: 'Founder At Microsoft & Gates Foundation',
    description: 'Microsoft Corporation is an American multinational technology corporation which produces computer software.',
  },
];

featuredSpeakers.forEach((e) => {
  const template = document.createElement('template');
  template.innerHTML = `
  <li class="features-card-item">
    <div class="features-imgs">
      <img class="support-img" src="${e.image1}" alt="checked1">
      <img class="speakers" src="${e.image2}"" alt="speaker-1">
    </div>
    <div class="features-info">
      <h3>${e.names}"</h3>
      <i>${e.occupation}"</i>
      <hr class="internal-grey">
      <p>${e.description}"</p>
    </div>
  </li>`;
  document.querySelector('.features-cards').appendChild(template.content);
});
