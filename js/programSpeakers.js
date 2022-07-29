const speakers = [
  {
    name: 'Recillah Neema Khamala',
    profile: 'Group Chief Customer Officer',
    image: '../images/professor1.svg',
    description:
      'President of consumer safety worldwide. Has over 10 yearf of experience leading customer experinec teams.',
  },
  {
    name: 'Meshack Wekesa Khamala',
    profile: 'Eden CEO',
    image: '../images/professor2.svg',
    description:
      'A true leader in his generation. Has successfuly started a media house from being a photographer. He hosts major events in the continent courtesy of his visionary skills.',
  },
  {
    name: 'Ressy Naomi Muricho',
    profile: 'Group CSO',
    image: '../images/professor3.svg',
    description:
      'Has successfuly lead sales teams in her 15 years of career. She is exceptionally good at closing deals and has seen expansion of her company to open banches beyound africa.',
  },
  {
    name: 'Paul Ngari Nyaga',
    profile: 'Yamagata Motors CEO',
    image: '../images/proffesor4.svg',
    description:
      'A visionary leader in the motor industry. He has build his successful company from scratch and now enjoys being the leading importer of vehicles in Africa.',
  },
  {
    name: 'Annet Nyamvula williams',
    profile: 'Chief Marketing Officer',
    image: '../images/professor5.svg',
    description:
      'She has a wealth of experience in the  social-media marketing. He has singlehandedly led the brand awareness of her comapny and they are the leaders in the banking industry in Kenya',
  },
  {
    name: 'Faith Namwolo Muricho',
    profile: 'Global Chief Technology Officer',
    image: '../images/professor6.svg',
    description:
      'The 2020 winner of the most coveted EastAfrican HerNovation award. Global tech leader in the banking industry.',
  },
];

speakers.forEach((element) => {
  const speakers = document.querySelector('.grid');
  const speaker = document.createElement('div');
  speaker.innerHTML = `
    <div class="major"
      <div class="parent">
      <img src="./images/chessBoard.svg" class="dev-bg-tiles" alt="chess" />
        <img src="${element.image}" alt="" class="developer-image" />
      </div>
      <div class="developer-info">
        <h3 class="developer-name">${element.name}</h3>
        <p class="developer-followers">${element.profile}</p>
        <hr class="divider" />
        <p class="developer-details">
          ${element.description}
        </p>
      </div>
    </div>
  </div>`;

  speakers.appendChild(speaker);
  speaker.classList.add('developer');
});
