let portfolio = document.createElement('section')
portfolio.id = 'portfolio'
portfolio.innerHTML = `
<div class="recent">
<div class="line">
  <h2>My Recent Works</h2>
  <hr>
</div>
<div class="img-txt">
  <img src="./Assets/Img Placeholder.png" alt=" background assest image">
  <div class="multi">
    <h3>Multi-Post Stories</h3>
    <p>
      A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.
    </p>
    <div >
      <ul class="buttons">
        <button><li>CSS</li></button>
        <button><li>HTML</li></button>
        <button><li>Bootstrap</li></button>
        <button><li>Ruby</li></button>
        <button class="two"><li>See project</li></button>
      </ul>
    </div>
  </div>
</div>
</div>
`;

let body = document.querySelector('body')

body.appendChild(portfolio)

let cardSection = document.createElement('section')
cardSection.classList.add('card-section')
let cardDetails = `
<div class="cards">
<div class="card-item">
  <h1>Profesional Art Printing Data</h1>
  <p>A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.</p>
  <ul class="buttons3">
   <li><button>CSS</button></li>
   <li><button>HTML</button></li>
   <li><button>Ruby</button></li>
  </ul>
  <button class="proj-btn">See project</button>
</div>
</div>
`;
cardSection.innerHTML = cardDetails
body.appendChild(cardSection)
cardSection.insertAdjacentHTML('beforeend', cardDetails)
cardSection.insertAdjacentHTML('beforeend', cardDetails)
cardSection.insertAdjacentHTML('beforeend', cardDetails)
cardSection.insertAdjacentHTML('beforeend', cardDetails)
cardSection.insertAdjacentHTML('beforeend', cardDetails)

let about = document.createElement('section')
about.classList.add('about')
let aboutDetails = `
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

about.innerHTML = aboutDetails
body.appendChild(about)


let footer = document.createElement('footer')
footer.id = 'contact'
let footerContent = `
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
  <button onclick="validateEmail('email')">Get in touch</button>
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

footer.innerHTML = footerContent

body.appendChild(footer)
