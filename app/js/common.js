/*global window, document, console, top, setTimeout, setInterval, pageX, pageY, $, getBoundingClientRect*/

var navHomeTop = document.getElementById('nav-home-top'),
  navPortfolioTop = document.getElementById('nav-portfolio-top'),
  navToolsSkillsTop = document.getElementById('nav-tools-skills-top'),
  navContactsTop = document.getElementById('nav-contacts-top'),
  linkNavHomeTop = document.querySelector('#nav-home-top > a'),
  linkNavHomeBottom = document.querySelector('#nav-home-bottom > a'),
  linkNavPortfolioTop = document.querySelector('#nav-portfolio-top > a'),
  linkNavPortfolioBottom = document.querySelector('#nav-portfolio-bottom > a'),
  linkNavToolsSkillsTop = document.querySelector('#nav-tools-skills-top > a'),
  linkNavToolsSkillsBottom = document.querySelector('#nav-tools-skills-bottom > a'),
  linkNavContactsTop = document.querySelector('#nav-contacts-top > a'),
  linkNavContactsBottom = document.querySelector('#nav-contacts-bottom > a'),
  navWrapperTop = document.getElementById('top-menu'),
  home = document.getElementById('home'),
  portfolio = document.getElementById('portfolio'),
  toolsSkills = document.getElementById('tools-skills'),
  contacts = document.getElementById('contacts'),
  logo = document.querySelector('.logo > a'),
  indicator = document.querySelector('.indicator'),
  homeAcquaintance = document.querySelector('.home__acquaintance'),
  homeHint = document.querySelector('.home__hint'),
  homeSupposition = document.querySelector('.home__supposition'),
  homeResponsive = document.querySelector('.home__responsive'),
  homeReactive = document.querySelector('.home__reactive'),
  homeReliable = document.querySelector('.home__reliable'),
  homeWebsite = document.querySelector('.home__website'),
  homeCombinator = document.querySelector('.home__combinator'),
  homeBrace = document.querySelector('.home__brace > svg'),
  homeOffer = document.querySelector('.home__offer'),
  homeResponsiveRe = document.querySelector('.home__responsive-re'),
  homeReactiveRe = document.querySelector('.home__reactive-re'),
  homeReliableRe = document.querySelector('.home__reliable-re'),
  drawBorder = document.querySelector('.draw-border'),
  y = 8,
  x = 546,
  v = 88,
  u = 0,
  canvasTriangle = document.querySelector('.draw-triangle'),
  line = document.querySelector('.line'),
  toolCss = document.querySelector('.tools-skills__tools-css'),
  toolHtml = document.querySelector('.tools-skills__tools-html'),
  toolJs = document.querySelector('.tools-skills__tools-js'),
  toolJq = document.querySelector('.tools-skills__tools-jq'),
  toolGulp = document.querySelector('.tools-skills__tools-gulp'),
  toolSass = document.querySelector('.tools-skills__tools-sass'),
  skillsGit = document.querySelector('.tools-skills__skills-git'),
  skillsTrello = document.querySelector('.tools-skills__skills-trello'),
  skillsOnline = document.querySelector('.tools-skills__skills-online'),
  skillsLoyalty = document.querySelector('.tools-skills__skills-loyalty'),
  skillsQuality = document.querySelector('.tools-skills__skills-quality'),
  skillsMind = document.querySelector('.tools-skills__skills-mind');

document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  navWrapperTop.style.clip = 'rect(-20px, 239px, 125px, 40px)';
});

navHomeTop.addEventListener('click', function (event) {
  'use strict';
  event.preventDefault();
  home.scrollIntoView(top);
  if (linkNavHomeTop.hasAttribute('href')) {
    linkNavHomeTop.removeAttribute('href');
    linkNavHomeBottom.removeAttribute('href');
    linkNavPortfolioTop.setAttribute('href', '#portfolio');
    linkNavPortfolioBottom.setAttribute('href', '#portfolio');
    linkNavToolsSkillsTop.setAttribute('href', '#tools-skills');
    linkNavToolsSkillsBottom.setAttribute('href', '#tools-skills');
    linkNavContactsTop.setAttribute('href', '#contacts');
    linkNavContactsBottom.setAttribute('href', '#contacts');
    logo.removeAttribute('href');
  } else {
    linkNavHomeTop.removeAttribute('href');
    linkNavHomeBottom.removeAttribute('href');
  }
});

navPortfolioTop.addEventListener('click', function (event) {
  'use strict';
  event.preventDefault();
  portfolio.scrollIntoView(top);
  if (linkNavPortfolioTop.hasAttribute('href')) {
    linkNavPortfolioTop.removeAttribute('href');
    linkNavPortfolioBottom.removeAttribute('href');
    linkNavHomeTop.setAttribute('href', '#home');
    linkNavHomeBottom.setAttribute('href', '#home');
    linkNavToolsSkillsTop.setAttribute('href', '#tools-skills');
    linkNavToolsSkillsBottom.setAttribute('href', '#tools-skills');
    linkNavContactsTop.setAttribute('href', '#contacts');
    linkNavContactsBottom.setAttribute('href', '#contacts');
    logo.setAttribute('href', '#home');
  } else {
    linkNavPortfolioTop.removeAttribute('href');
    linkNavPortfolioBottom.removeAttribute('href');
  }
});

navToolsSkillsTop.addEventListener('click', function (event) {
  'use strict';
  event.preventDefault();
  toolsSkills.scrollIntoView(top);
  if (linkNavToolsSkillsTop.hasAttribute('href')) {
    linkNavToolsSkillsTop.removeAttribute('href');
    linkNavToolsSkillsBottom.removeAttribute('href');
    linkNavHomeTop.setAttribute('href', '#home');
    linkNavHomeBottom.setAttribute('href', '#home');
    linkNavPortfolioTop.setAttribute('href', '#portfolio');
    linkNavPortfolioBottom.setAttribute('href', '#portfolio');
    linkNavContactsTop.setAttribute('href', '#contacts');
    linkNavContactsBottom.setAttribute('href', '#contacts');
    logo.setAttribute('href', '#home');
  } else {
    linkNavToolsSkillsTop.removeAttribute('href');
    linkNavToolsSkillsBottom.removeAttribute('href');
  }
});

navContactsTop.addEventListener('click', function (event) {
  'use strict';
  event.preventDefault();
  contacts.scrollIntoView(top);
  if (linkNavContactsTop.hasAttribute('href')) {
    linkNavContactsTop.removeAttribute('href');
    linkNavContactsBottom.removeAttribute('href');
    linkNavHomeTop.setAttribute('href', '#home');
    linkNavHomeBottom.setAttribute('href', '#home');
    linkNavPortfolioTop.setAttribute('href', '#portfolio');
    linkNavPortfolioBottom.setAttribute('href', '#portfolio');
    linkNavToolsSkillsTop.setAttribute('href', '#tools-skills');
    linkNavToolsSkillsBottom.setAttribute('href', '#tools-skills');
    logo.setAttribute('href', '#home');
  } else {
    linkNavContactsTop.removeAttribute('href');
    linkNavContactsBottom.removeAttribute('href');
  }
});

logo.addEventListener('click', function (event) {
  'use strict';
  event.preventDefault();
  home.scrollIntoView(top);
  if (linkNavHomeTop.hasAttribute('href')) {
    linkNavHomeTop.removeAttribute('href');
    linkNavPortfolioTop.setAttribute('href', '#portfolio');
    linkNavToolsSkillsTop.setAttribute('href', '#tools-skills');
    linkNavContactsTop.setAttribute('href', '#contacts');
    logo.removeAttribute('href');
  } else {
    linkNavHomeTop.removeAttribute('href');
    linkNavHomeBottom.removeAttribute('href');
  }
});

window.addEventListener('scroll', function () {
  'use strict';
  var delta = window.pageYOffset,
    deltaHomeX1 = 40 + 0.2031 * delta,
    deltaHomeX2 = 239 + 0.2541 * delta,
    deltaPortfolioX1 = 239 + 0.2541 * (delta - 980),
    deltaPortfolioX2 = 488 + 0.3408 * (delta - 980),
    deltaToolsSkillsX1 = 488 + 0.3408 * (delta - 1960),
    deltaToolsSkillsX2 = 822 + 0.2551 * (delta - 1960),
    deltaContactsX1 = 822,
    deltaContactsX2 = 1072;
  if (0 <= delta && delta < 980) {
    navWrapperTop.style.clip = 'rect(-20px, ' + deltaHomeX2 + 'px, 125px, ' + deltaHomeX1 + 'px)';
    if (linkNavHomeTop.hasAttribute('href')) {
      linkNavPortfolioTop.setAttribute('href', '#portfolio');
      linkNavPortfolioBottom.setAttribute('href', '#portfolio');
      linkNavToolsSkillsTop.setAttribute('href', '#tools-skills');
      linkNavToolsSkillsBottom.setAttribute('href', '#tools-skills');
      linkNavContactsTop.setAttribute('href', '#contacts');
      linkNavContactsBottom.setAttribute('href', '#contacts');
      logo.removeAttribute('href');
    } else {
      linkNavHomeTop.removeAttribute('href');
      linkNavHomeBottom.removeAttribute('href');
    }
  } else if (980 <= delta && delta < 1960) {
    navWrapperTop.style.clip = 'rect(-20px, ' + deltaPortfolioX2 + 'px, 125px, ' + deltaPortfolioX1 + 'px)';
    if (linkNavPortfolioTop.hasAttribute('href')) {
      linkNavHomeTop.setAttribute('href', '#home');
      linkNavHomeBottom.setAttribute('href', '#home');
      linkNavToolsSkillsTop.setAttribute('href', '#tools-skills');
      linkNavToolsSkillsBottom.setAttribute('href', '#tools-skills');
      linkNavContactsTop.setAttribute('href', '#contacts');
      linkNavContactsBottom.setAttribute('href', '#contacts');
      logo.setAttribute('href', '#home');
    } else {
      linkNavPortfolioTop.removeAttribute('href');
      linkNavPortfolioBottom.removeAttribute('href');
    }
  } else if (1960 <= delta && delta < 2940) {
    navWrapperTop.style.clip = 'rect(-20px, ' + deltaToolsSkillsX2 + 'px, 125px, ' + deltaToolsSkillsX1 + 'px)';
    if (linkNavToolsSkillsTop.hasAttribute('href')) {
      linkNavHomeTop.setAttribute('href', '#home');
      linkNavHomeBottom.setAttribute('href', '#home');
      linkNavPortfolioTop.setAttribute('href', '#portfolio');
      linkNavPortfolioBottom.setAttribute('href', '#portfolio');
      linkNavContactsTop.setAttribute('href', '#contacts');
      linkNavContactsBottom.setAttribute('href', '#contacts');
      logo.setAttribute('href', '#home');
    } else {
      linkNavToolsSkillsTop.removeAttribute('href');
      linkNavToolsSkillsBottom.removeAttribute('href');
    }
  } else if (2940 <= delta && delta < 3920) {
    navWrapperTop.style.clip = 'rect(-20px, ' + deltaContactsX2 + 'px, 125px, ' + deltaContactsX1 + 'px)';
    if (linkNavContactsTop.hasAttribute('href')) {
      linkNavHomeTop.setAttribute('href', '#home');
      linkNavHomeBottom.setAttribute('href', '#home');
      linkNavPortfolioTop.setAttribute('href', '#portfolio');
      linkNavPortfolioBottom.setAttribute('href', '#portfolio');
      linkNavToolsSkillsTop.setAttribute('href', '#tools-skills');
      linkNavToolsSkillsBottom.setAttribute('href', '#tools-skills');
      logo.setAttribute('href', '#home');
    } else {
      linkNavContactsTop.removeAttribute('href');
      linkNavContactsBottom.removeAttribute('href');
    }
  }
});

document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  homeAcquaintance.style.color = 'transparent';
  homeHint.style.color = 'transparent';
  homeSupposition.style.color = 'transparent';
  homeResponsive.style.color = 'transparent';
  homeReactive.style.color = 'transparent';
  homeReliable.style.color = 'transparent';
  homeWebsite.style.color = 'transparent';
  homeOffer.style.color = 'transparent';
  homeCombinator.style.borderRightColor = 'transparent';
  homeBrace.style.fill = 'transparent';
  homeResponsiveRe.style.color = 'transparent';
  homeReactiveRe.style.color = 'transparent';
  homeReliableRe.style.color = 'transparent';
  setTimeout(function () {
    homeAcquaintance.style.color = 'white';
  }, 1000);
  setTimeout(function () {
    homeHint.style.color = 'white';
  }, 1500);
  setTimeout(function () {
    homeSupposition.style.color = 'white';
  }, 2000);
  setTimeout(function () {
    homeCombinator.style.borderRightColor = '#8a0200';
  }, 2500);
  setTimeout(function () {
    homeResponsive.style.color = 'white';
    homeResponsiveRe.style.color = '#8a0200';
  }, 3000);
  setTimeout(function () {
    homeReactive.style.color = 'white';
    homeReactiveRe.style.color = '#8a0200';
  }, 3500);
  setTimeout(function () {
    homeReliable.style.color = 'white';
    homeReliableRe.style.color = '#8a0200';
  }, 4000);
  setTimeout(function () {
    homeBrace.style.fill = '#8a0200';
  }, 4500);
  setTimeout(function () {
    homeWebsite.style.color = 'white';
  }, 5000);
  setTimeout(function () {
    homeOffer.style.color = 'white';
  }, 5500);
  setTimeout(function () {
    drawBorder.style.display = 'block';
  }, 6000);
});

// border
setTimeout(function drawRight() {
  'use strict';
  var ctx = drawBorder.getContext('2d');
  setInterval(function () {
    ctx.strokeStyle = '#8a0200';
    ctx.lineWidth = '2';
    ctx.beginPath();
    ctx.moveTo(545, 8);
    if (y < 89) {
      ctx.lineTo(545, y);
    }
    y += 20;
    ctx.stroke();
  }, 60);
}, 6000);

setTimeout(function drawBottom() {
  'use strict';
  var ctx = drawBorder.getContext('2d');
  setInterval(function () {
    ctx.strokeStyle = '#8a0200';
    ctx.lineWidth = '2';
    ctx.beginPath();
    ctx.moveTo(545, 88);
    if (x > -5) {
      ctx.lineTo(x, 88);
    }
    x -= 25;
    ctx.stroke();
  }, 60);
}, 6300);


setTimeout(function drawLeft() {
  'use strict';
  var ctx = drawBorder.getContext('2d');
  setInterval(function () {
    ctx.strokeStyle = '#8a0200';
    ctx.lineWidth = '2';
    ctx.beginPath();
    ctx.moveTo(1, 88);
    if (v > 1) {
      ctx.lineTo(1, v);
    }
    v -= 20;
    ctx.stroke();
  }, 60);
}, 6000);

setTimeout(function drawTop() {
  'use strict';
  var ctx = drawBorder.getContext('2d');
  setInterval(function () {
    ctx.strokeStyle = '#8a0200';
    ctx.lineWidth = '2';
    ctx.beginPath();
    ctx.moveTo(5, 8);
    if (u < 555) {
      ctx.lineTo(u, 8);
    }
    u += 25;
    ctx.stroke();
  }, 60);
}, 6300);

// arrow
setTimeout(function lineHorizontal() {
  'use strict';
  var ctx = line.getContext('2d'),
    x = 0;
  setInterval(function () {
    ctx.strokeStyle = '#8a0200';
    ctx.lineWidth = '2';
    ctx.beginPath();
    ctx.moveTo(0, 11);
    if (x < 500) {
      ctx.lineTo(x, 11);
    }
    x += 20;
    ctx.stroke();
  }, 60);
}, 7600);

setTimeout(function lineHorizontal() {
  'use strict';
  var ctx = canvasTriangle.getContext('2d'),
    x = -10;
  setInterval(function () {
    ctx.strokeStyle = '#8a0200';
    ctx.lineWidth = '2';
    ctx.beginPath();
    ctx.moveTo(0, 13);
    if (x < 61) {
      ctx.lineTo(x, 13);
    }
    x += 20;
    ctx.stroke();
  }, 60);
}, 7800);

setTimeout(function lineVertical() {
  'use strict';
  var ctx = canvasTriangle.getContext('2d'),
    y = 13;
  setInterval(function () {
    ctx.strokeStyle = '#8a0200';
    ctx.lineWidth = '2';
    ctx.beginPath();
    ctx.moveTo(50, 13);
    if (y < 80) {
      ctx.lineTo(50, y);
    }
    y += 20;
    ctx.stroke();
  }, 60);
}, 7900);

// triangle
setTimeout(function drawArrow() {
  'use strict';
  var ctx = canvasTriangle.getContext("2d"),
    triangle = {
      x1: 30,
      y1: 60,
      x2: 70,
      y2: 60,
      x3: 50,
      y3: 93
    },
    r;
  r = triangle;
  ctx.beginPath();
  ctx.moveTo(r.x1, r.y1);
  ctx.lineTo(r.x2, r.y2);
  ctx.lineTo(r.x3, r.y3);
  ctx.lineTo(r.x1, r.y1);
  ctx.closePath();
  ctx.fillStyle = '#8a0200';
  ctx.fill();
  canvasTriangle.onmousemove = function (e) {
    var rect = this.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    //ctx.clearRect(0, 0, canvasTriangle.width, canvasTriangle.height);
    r = triangle;
    ctx.beginPath();
    ctx.moveTo(r.x1, r.y1);
    ctx.lineTo(r.x2, r.y2);
    ctx.lineTo(r.x3, r.y3);
    ctx.lineTo(r.x1, r.y1);
    ctx.closePath();
    ctx.fillStyle = ctx.isPointInPath(x, y) ? '#ffffff' : '#8a0200';
    ctx.fill();
  };
  canvasTriangle.onclick = function () {
    //ctx.clearRect(0, 0, canvasTriangle.width, canvasTriangle.height);
    r = triangle;
    ctx.beginPath();
    ctx.moveTo(r.x1, r.y1);
    ctx.lineTo(r.x2, r.y2);
    ctx.lineTo(r.x3, r.y3);
    ctx.lineTo(r.x1, r.y1);
    ctx.closePath();
    ctx.fillStyle = '#8a0200';
    ctx.fill();
  };
}, 8000);

// tools and skills animation
linkNavToolsSkillsTop.addEventListener('click', function (event) {
  event.preventDefault();
  toolCss.classList.add('tools-skills__tools-css--animated');
  toolHtml.classList.add('tools-skills__tools-html--animated');
  toolJs.classList.add('tools-skills__tools-js--animated');
  toolJq.classList.add('tools-skills__tools-jq--animated');
  toolGulp.classList.add('tools-skills__tools-gulp--animated');
  toolSass.classList.add('tools-skills__tools-sass--animated');
  skillsGit.classList.add('tools-skills__skills-git--animated');
  skillsTrello.classList.add('tools-skills__skills-trello--animated');
  skillsOnline.classList.add('tools-skills__skills-online--animated');
  skillsLoyalty.classList.add('tools-skills__skills-loyalty--animated');
  skillsQuality.classList.add('tools-skills__skills-quality--animated');
  skillsMind.classList.add('tools-skills__skills-mind--animated');
});
