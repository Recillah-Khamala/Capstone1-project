const speakers = [
  {
    name: 'Ariel Camus',
    profile: 'Founder & CEO, Microverse',
    image: './images/arielCamus.jpg',
    description:
      'Ariel Camus is the Founder and CEO of Microverse, a school that trains software engineers all around the world and connects them with life-changing international and remote jobs.',
  },
  {
    name: 'Peter Ndegwa',
    profile: 'CEO, Safaricom PLC',
    image: './images/peterNdegwa.jpg',
    description:
      'Peter Ndegwa is a Kenyan businessman, accountant and corporate executive, who serves as the chief executive officer at Safaricom, the largest telecommunications company in the countries of the East African Community.',
  },
  {
    name: 'Sherlaender (Lani) Phillips',
    profile: 'VP, US Channel Sales Organization, Microsoft',
    image: './images/sherlaender-lani-phillips.jpg',
    description:
      'Her expertise lies in the segment of digital transformation as she acknowledges that every company was confronted with accelerating their digital transformation agenda over the last year.',
  },
  {
    name: 'Paul Ngari Nyaga',
    profile: 'Yamagata Motors CEO',
    image: './images/proffesor4.svg',
    description:
      'A visionary leader in the motor industry. He has build his successful company from scratch and now enjoys being the leading importer of vehicles.',
  },
  {
    name: 'Janet Schijns',
    profile: 'CEO, JS Group',
    image: './images/schijns-janet.jpg',
    description:
      'Janet Schijns, CEO of JS Group, knows that the road to success is long and full of twists and turns. She believes success is not measured by money or power. Instead, it is a perfect combination of fulfilling one’s promise to the team and customers while staying true to one’s morals and living the best possible life.',
  },
  {
    name: 'Faith Namwolo Muricho',
    profile: 'Africa Technical Customer Support Manager, Wasoko',
    image: './images/professor6.svg',
    description:
      'The 2020 winner of the most coveted EastAfrican HerNovation award. She has a strong business and technical acumen to drive continuous process improvements, competitive advantage and bottom-line revenue growth. ',
  },
];

speakers.forEach((element) => {
  const speakers = document.querySelector('.grid');
  const speaker = document.createElement('div');
  speaker.innerHTML = `
    <div class="major"
      <div class="parent">
        <div class="dev-bg-tiles" alt="chess"></div>
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
