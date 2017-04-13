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
  navWrapperBottom = document.querySelector('.main-nav__wrapper-bottom'),
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
  canvasTrianglePortfolio = document.querySelector('.draw-triangle__portfolio'),
  canvasTriangleToolsSkills = document.querySelector('.draw-triangle__tools-skills'),
  line = document.querySelector('.line');

document.addEventListener('DOMContentLoaded', function () {
  'use strict';
  navWrapperTop.style.clip = 'rect(-10px, 199px, 84px, 40px)';
  if (window.navigator.userAgent.search(/Firefox/) !== -1) {
    linkNavHomeBottom.style.marginLeft = '218px';
    navWrapperBottom.style.width = '1200px';
  }
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

// main-menu synchronization
window.addEventListener('scroll', function () {
  'use strict';
  var delta = window.pageYOffset,
    deltaHomeX1 = 40 + 0.1612 * delta,
    deltaHomeX2 = 198 + 0.1939 * delta,
    deltaPortfolioX1 = 198 + 0.1939 * (delta - 980),
    deltaPortfolioX2 = 388 + 0.2582 * (delta - 980),
    deltaToolsSkillsX1 = 388 + 0.2582 * (delta - 1960),
    deltaToolsSkillsX2 = 641 + 0.1929 * (delta - 1960),
    deltaContactsX1 = 641,
    deltaContactsX2 = 830;
  if (0 <= delta && delta < 980) {
    navWrapperTop.style.clip = 'rect(-10px, ' + deltaHomeX2 + 'px, 84px, ' + deltaHomeX1 + 'px)';
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
    navWrapperTop.style.clip = 'rect(-10px, ' + deltaPortfolioX2 + 'px, 84px, ' + deltaPortfolioX1 + 'px)';
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
    navWrapperTop.style.clip = 'rect(-10px, ' + deltaToolsSkillsX2 + 'px, 84px, ' + deltaToolsSkillsX1 + 'px)';
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
    navWrapperTop.style.clip = 'rect(-10px, ' + deltaContactsX2 + 'px, 84px, ' + deltaContactsX1 + 'px)';
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

// text on home section
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
  }, 0);
  setTimeout(function () {
    homeHint.style.color = 'white';
  }, 500);
  setTimeout(function () {
    homeSupposition.style.color = 'white';
  }, 1000);
  setTimeout(function () {
    homeCombinator.style.borderRightColor = '#8a0200';
  }, 1500);
  setTimeout(function () {
    homeResponsive.style.color = 'white';
    homeResponsiveRe.style.color = '#8a0200';
  }, 2000);
  setTimeout(function () {
    homeReactive.style.color = 'white';
    homeReactiveRe.style.color = '#8a0200';
  }, 2500);
  setTimeout(function () {
    homeReliable.style.color = 'white';
    homeReliableRe.style.color = '#8a0200';
  }, 3000);
  setTimeout(function () {
    homeBrace.style.fill = '#8a0200';
  }, 3500);
  setTimeout(function () {
    homeWebsite.style.color = 'white';
  }, 4000);
  setTimeout(function () {
    homeOffer.style.color = 'white';
  }, 4500);
  setTimeout(function () {
    drawBorder.style.display = 'block';
  }, 5000);
});

// border
setTimeout(function drawRight() {
  'use strict';
  var ctx = drawBorder.getContext('2d');
  setInterval(function () {
    ctx.strokeStyle = '#8a0200';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(545, 8);
    if (y < 89) {
      ctx.lineTo(545, y);
    }
    y += 20;
    ctx.stroke();
  }, 60);
}, 5000);

setTimeout(function drawBottom() {
  'use strict';
  var ctx = drawBorder.getContext('2d');
  setInterval(function () {
    ctx.strokeStyle = '#8a0200';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(545, 88);
    if (x > -5) {
      ctx.lineTo(x, 88);
    }
    x -= 25;
    ctx.stroke();
  }, 60);
}, 5300);


setTimeout(function drawLeft() {
  'use strict';
  var ctx = drawBorder.getContext('2d');
  setInterval(function () {
    ctx.strokeStyle = '#8a0200';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(1, 88);
    if (v > 1) {
      ctx.lineTo(1, v);
    }
    v -= 20;
    ctx.stroke();
  }, 60);
}, 5000);

setTimeout(function drawTop() {
  'use strict';
  var ctx = drawBorder.getContext('2d');
  setInterval(function () {
    ctx.strokeStyle = '#8a0200';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(5, 8);
    if (u < 555) {
      ctx.lineTo(u, 8);
    }
    u += 25;
    ctx.stroke();
  }, 60);
}, 5300);

// triangle-home
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
  ctx.strokeStyle = '#8a0200';
  ctx.stroke();
  setInterval(function () {
    r = triangle;
    ctx.beginPath();
    ctx.moveTo(r.x1 * 1.2 - 10, r.y1 * 1.2 - 13);
    ctx.lineTo(r.x2 * 1.2 - 10, r.y2 * 1.2 - 13);
    ctx.lineTo(r.x3 * 1.2 - 10, r.y3 * 1.2 - 13);
    ctx.lineTo(r.x1 * 1.2 - 10, r.y1 * 1.2 - 13);
    ctx.closePath();
    ctx.fillStyle = '#8a0200';
    ctx.fill();
  }, 1000);

  setTimeout(function () {
    setInterval(function () {
      ctx.clearRect(r.x1 * 1.2 - 10, r.y1 * 1.2 - 13, r.x3 * 1.2 - 10, r.y3 * 1.2 - 13);
      r = triangle;
      ctx.beginPath();
      ctx.moveTo(r.x1, r.y1 - 1);
      ctx.lineTo(r.x2, r.y2 - 1);
      ctx.lineTo(r.x3, r.y3 - 1);
      ctx.lineTo(r.x1, r.y1 - 1);
      ctx.closePath();
      ctx.fillStyle = '#8a0200';
      ctx.fill();
    }, 1000);
  }, 500);

  canvasTriangle.onclick = function () {
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
}, 7000);

// triangle-portfolio
(function () {
  'use strict';
  var ctx = canvasTrianglePortfolio.getContext("2d"),
    triangle = {
      x1: 30,
      y1: 40,
      x2: 70,
      y2: 40,
      x3: 50,
      y3: 73
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
  ctx.strokeStyle = '#8a0200';
  ctx.stroke();
  setInterval(function () {
    r = triangle;
    ctx.beginPath();
    ctx.moveTo(r.x1 * 1.2 - 10, r.y1 * 1.2 - 13);
    ctx.lineTo(r.x2 * 1.2 - 10, r.y2 * 1.2 - 13);
    ctx.lineTo(r.x3 * 1.2 - 10, r.y3 * 1.2 - 13);
    ctx.lineTo(r.x1 * 1.2 - 10, r.y1 * 1.2 - 13);
    ctx.closePath();
    ctx.fillStyle = '#8a0200';
    ctx.fill();
  }, 1000);

  setTimeout(function () {
    setInterval(function () {
      ctx.clearRect(r.x1 * 1.2 - 10, r.y1 * 1.2 - 13, r.x3 * 1.2 - 10, r.y3 * 1.2 - 13);
      r = triangle;
      ctx.beginPath();
      ctx.moveTo(r.x1, r.y1 - 1);
      ctx.lineTo(r.x2, r.y2 - 1);
      ctx.lineTo(r.x3, r.y3 - 1);
      ctx.lineTo(r.x1, r.y1 - 1);
      ctx.closePath();
      ctx.fillStyle = '#8a0200';
      ctx.fill();
    }, 1000);
  }, 500);

  canvasTriangle.onclick = function () {
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
}());

// triangle-tools&skills
(function () {
  'use strict';
  var ctx = canvasTriangleToolsSkills.getContext("2d"),
    triangle = {
      x1: 30,
      y1: 40,
      x2: 70,
      y2: 40,
      x3: 50,
      y3: 73
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
  ctx.strokeStyle = '#8a0200';
  ctx.stroke();
  setInterval(function () {
    r = triangle;
    ctx.beginPath();
    ctx.moveTo(r.x1 * 1.2 - 10, r.y1 * 1.2 - 13);
    ctx.lineTo(r.x2 * 1.2 - 10, r.y2 * 1.2 - 13);
    ctx.lineTo(r.x3 * 1.2 - 10, r.y3 * 1.2 - 13);
    ctx.lineTo(r.x1 * 1.2 - 10, r.y1 * 1.2 - 13);
    ctx.closePath();
    ctx.fillStyle = '#8a0200';
    ctx.fill();
  }, 1000);

  setTimeout(function () {
    setInterval(function () {
      ctx.clearRect(r.x1 * 1.2 - 10, r.y1 * 1.2 - 13, r.x3 * 1.2 - 10, r.y3 * 1.2 - 13);
      r = triangle;
      ctx.beginPath();
      ctx.moveTo(r.x1, r.y1 - 1);
      ctx.lineTo(r.x2, r.y2 - 1);
      ctx.lineTo(r.x3, r.y3 - 1);
      ctx.lineTo(r.x1, r.y1 - 1);
      ctx.closePath();
      ctx.fillStyle = '#8a0200';
      ctx.fill();
    }, 1000);
  }, 500);

  canvasTriangle.onclick = function () {
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
}());

// tools and skills animation
(function () {
  'use strict';
  var toolCss = document.querySelector('.tools-skills__tools-css'),
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
  window.onscroll = function (event) {
    if (window.pageYOffset > 1850) {
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
    }
  };
}());

// note on GitHub Pages
(function () {
  'use strict';
  var sedona = document.querySelector('.portfolio__sedona img'),
    pink = document.querySelector('.portfolio__pink img'),
    bakery = document.querySelector('.portfolio__bakery img'),
    sedonaGitHubPages = document.querySelector('.col-1 > .portfolio__githubpages'),
    pinkGitHubPages = document.querySelector('.col-2 > .portfolio__githubpages'),
    bakeryGitHubPages = document.querySelector('.col-3 > .portfolio__githubpages');
  sedona.addEventListener('mouseenter', function (e) {
    e.preventDefault();
    sedonaGitHubPages.classList.toggle('visually-hidden');
    sedona.style.marginTop = '47px';
    if (window.navigator.userAgent.search(/Firefox/) !== -1 || window.navigator.userAgent.search(/Edge/) !== -1) {
      sedona.style.marginTop = '46px';
    }
  });
  sedona.addEventListener('mouseleave', function (e) {
    e.preventDefault();
    sedonaGitHubPages.classList.toggle('visually-hidden');
    sedona.style.marginTop = '70px';
  });
  pink.addEventListener('mouseenter', function (e) {
    e.preventDefault();
    pinkGitHubPages.classList.toggle('visually-hidden');
    pink.style.marginTop = '47px';
    if (window.navigator.userAgent.search(/Firefox/) !== -1 || window.navigator.userAgent.search(/Edge/) !== -1) {
      pink.style.marginTop = '46px';
    }
  });
  pink.addEventListener('mouseleave', function (e) {
    e.preventDefault();
    pinkGitHubPages.classList.toggle('visually-hidden');
    pink.style.marginTop = '70px';
  });
  bakery.addEventListener('mouseenter', function (e) {
    e.preventDefault();
    bakeryGitHubPages.classList.toggle('visually-hidden');
    bakery.style.marginTop = '47px';
    if (window.navigator.userAgent.search(/Firefox/) !== -1 || window.navigator.userAgent.search(/Edge/) !== -1) {
      bakery.style.marginTop = '46px';
    }
  });
  bakery.addEventListener('mouseleave', function (e) {
    e.preventDefault();
    bakeryGitHubPages.classList.toggle('visually-hidden');
    bakery.style.marginTop = '70px';
  });
}());
