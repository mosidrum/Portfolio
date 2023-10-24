/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
const body = document.querySelector('body');
const recent = document.getElementById('portfolio');

const recentContent = [{
  title: 'My Recent Works',
  img: './Assets/Img Placeholder.png',
  imgAlt: ' background assest image',
  stories: 'Multi-Post Stories',
  desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
  buttons: ['HTML', 'CSS', 'Bootsrap', 'Ruby', 'See project'],
}];

recentContent.forEach((e) => {
  recent.insertAdjacentHTML('afterbegin', `
  <div class="recent">
  <div class="line">
    <h2>${e.title}</h2>
    <hr>
  </div>
  <div class="img-txt">
    <img src="./Assets/Img Placeholder.png" alt=" background assest image">
    <div class="multi">
      <h3>${e.stories}</h3>
      <p>${e.desc}</p>
      <div >
        <ul class="buttons">
          <button><li>${e.buttons[0]}</li></button>
          <button><li>${e.buttons[1]}</li></button>
          <button><li>${e.buttons[2]}</li></button>
          <button><li>${e.buttons[3]}</li></button>
          <button class="two"><li>${e.buttons[4]}</li></button>
        </ul>
      </div>
    </div>
  </div>
</div>
  `);
});

const cardSectionsData = [
  {
    title: 'Profesional Art Printing Data',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    buttons: ['CSS', 'HTML', 'Ruby', 'See project'],
  },
  {
    title: 'Data Dashboard Healthcare',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    buttons: ['CSS', 'HTML', 'Ruby', 'See project'],
  },
  {
    title: 'Website Portfolio',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    buttons: ['CSS', 'HTML', 'Ruby', 'See project'],
  },
  {
    title: 'Profesional Art Printing Data 2',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    buttons: ['CSS', 'HTML', 'Ruby', 'See project'],
  },
  {
    title: 'Data Dashboard Healthcare 2',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    buttons: ['CSS', 'HTML', 'Ruby', 'See project'],
  },
  {
    title: 'Website Portfolio 2',
    desc: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    buttons: ['CSS', 'HTML', 'Ruby', 'See project'],
  },
];

const projectTitles = cardSectionsData.map((e) => e.title);

function togglePopup(value) {
  const click = document.getElementById(`modal${value}`);
  if (click.style.display === 'block') {
    click.style.display = 'none';
  } else {
    click.style.display = 'block';
  }
}

const modalSection = document.createElement('section');

for (let i = 0; i < projectTitles.length; i += 1) {
  modalSection.innerHTML += `
    <div class="modal" id='modal${i}'>
      <div class="modal-overlay">
        <div class="modal-content">
          <div class="modal-head">
            <h2>${projectTitles[i]}</h2>
            <span class="modal-close-btn" onclick=togglePopup(${i})>&times;</span>
          </div>
          <div class="modal-btn">
            <button>HTML</button>
            <button>Boostrap</button>
            <button>Ruby on rails</button>
          </div>
          <div class="modal-ctn">
            <img src="./Assets/modal.png" alt="image">
              <div class="modal-text">
                <div class="modal-text-ctn">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum a atque, rerum
                    cupiditate et consectetur. Obcaecati, excepturi. Illo enim, ipsa repudiandae dolorem
                    similique hic? Fuga odio aperiam vero error molestiae!
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolor odit atque
                    quas molestiae quo. Itaque repellat tempore autem minima minus cum. Illo dolor nobis
                    beatae accusamus quia enim deleniti.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque impedit labore rem,
                    aut, sit ullam officia error nostrum pariatur, voluptas dolor. Odit illum quisquam
                    voluptas commodi harum! Numquam, in nostrum!</p>
                </div>
                <div class="modal-click">
                  <button class="modal-live">See live<img src="./Assets/Icon-Export.png" alt="see live">
                  </button>
                  <button class="modal-github">See source<img src="../Assets/VectorG.png" alt="github">
                  </button>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
    `;
}
body.appendChild(modalSection);

const cardSection = document.createElement('section');
cardSection.classList.add('card-section');

for (let i = 0; i < cardSectionsData.length; i += 1) {
  cardSection.innerHTML += `
    <div class="cards">
      <div class="card-item">
        <h1>${cardSectionsData[i].title}</h1>
        <p>${cardSectionsData[i].desc}</p>
        <ul class="buttons3">
         <li><button>${cardSectionsData[i].buttons[0]}</button></li>
         <li><button>${cardSectionsData[i].buttons[1]}</button></li>
         <li><button>${cardSectionsData[i].buttons[2]}</button></li>
        </ul>
        <button class="proj-btn" onclick="togglePopup(${i})">${cardSectionsData[i].buttons[3]}</button>
      </div>
    </div>
    `;
}
body.appendChild(cardSection);

const about = document.createElement('section');
about.classList.add('about');
const aboutDetails = `
<div class="about-me">
<h2>
  About me
</h2>
<p>
  Hello I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.
</p>
<ul>
  <li>
    <button>Get my resume</button>
  </li>
</ul>
<hr>
</div>
<div class="skills">
<ul>
  <div class="skill-dot"><div class="diamond"></div>Language</div>
  <li>JavaScript</li>
  <li>Ruby</li>
  <li>HTML</li>
  <li>CSS</li>
</ul>
<ul>
  <div class="skill-dot"><div class="square"></div>Frameworks</div>
  <li>React.js</li>
  <li>Ruby on Rails</li>
  <li>RSpac</li>
  <li>Capybara</li>
</ul>
<ul>
  <div class="skill-dot"><div class="circle"></div>Skills</div>
  <li>Database Management</li>
  <li>Version Control</li>
  <li>CLI</li>
  <li>API Desing</li>
  <li>Web Development</li>
</ul>
</div>
`;

about.innerHTML = aboutDetails;
body.appendChild(about);

const footer = document.createElement('footer');
footer.id = 'contact';
const footerContent = `
<div class="footer-top">
<h2>
  I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
</h2>
<form action="https://formspree.io/f/xyyangjd" method="POST">
  <label for="name">Name</label>
  <input type="text" name="name" id='name' placeholder="Full name" maxlength="30" required>
  <label for="email">Email</label>
  <input type="email" name="email" id="email" placeholder="Email" required>
  <label for="textarea">Name</label>
  <textarea name="textarea" id="textarea" cols="90" rows="8" placeholder="Write me something" maxlength="500" required></textarea>
  <div class="message">
    <div class="success" id="success">
      We have received your information. Thanks!
    </div>
    <div class="danger" id="danger">
      Wrong email
    </div>
  </div>
  <button onclick="validateEmail()">Get in touch</button>
</form>
</div>
<div class="foot">
<hr class="long">
<ul class="icons">
  <li>
    <a href="https://linkedin.com/ayodeleisaac"
      ><img src="./assets/GroupI.png" alt="icon-image"
    /></a>
  </li>
  <li>
    <a href="https://twitter.com/mosidrum"
      ><img src="./assets/GroupT.png" alt="icon-image"
    /></a>
  </li>
  <li>
    <a href="https://github.com/mosidrum"
      ><img src="./assets/VectorG.png" alt="icon-image"
    /></a>
  </li>
  <li>
    <a href="https://linkedin.com/in"
    ><img src="./assets/VectorH.png" alt="icon-image" /></a>
  </li>
  <li>
    <a href="https://medium.com/ayodeleisaac"
      ><img src="./assets/VectorM.png" alt="icon-image"
    /></a>
  </li>
</ul>
</div>
`;

footer.innerHTML = footerContent;

body.appendChild(footer);