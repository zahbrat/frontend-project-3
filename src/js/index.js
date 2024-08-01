let speed = 5;
let score = 0;

const stageDOM = document.querySelector('.game6__stage');
const sprites = {
  dino: {
    isJumping: false,
    dom: document.querySelector('.game6__dino'),
  },
  ground: {
    width: 481,
    offsets: [],
    dom: Array.from(document.querySelectorAll('.game6__ground *')),
  },
  cactuses: {
    dom: document.querySelector('.game6__cactuses'),
    width: 37,
    clones: [],
  },
};

stageDOM.querySelector('.btn').onclick = () => {
  stageDOM.querySelector('.game6__play').opacity = 0;
  detectEvents();
  animateWorld();
};

const detectEvents = function () {
  const handleJump = e => {
    const isJumpKey = e.code === 'Space' || e.code === 'ArrowUp';
    const { dino } = sprites;

    if (
      ((e.type === 'keydown' && isJumpKey) || e.type === 'mousedown') &&
      !dino.isJumping
    ) {
      const {
        dom: { style },
      } = dino;

      e.preventDefault();

      dino.isJumping = true;
      style.bottom = '80%';

      setTimeout(() => {
        style.bottom = '';
        dino.isJumping = false;
      }, 250); // Тривалість стрибка
    }
  };

  stageDOM.addEventListener('focus', () => {
    stageDOM.addEventListener('keydown', handleJump);
    stageDOM.addEventListener('mousedown', handleJump);
  });

  stageDOM.addEventListener('blur', () => {
    stageDOM.removeEventListener('keydown', handleJump);
    stageDOM.removeEventListener('mousedown', handleJump);
  });
};

const animateWorld = function () {
  const { ground, cactuses } = sprites;

  ground.dom.forEach((domElement, index) => {
    domElement.style.left = index === 0 ? ground.width + 'px' : '0px';
    ground.offsets.push(parseFloat(domElement.style.left));
  });

  const startMove = () => {
    ground.offsets = ground.offsets.map(offset => offset - speed);

    ground.dom.forEach((domElement, index) => {
      const offset = ground.offsets[index];
      domElement.style.left = `${offset}px`;

      if (offset <= -ground.width) {
        ground.offsets[index] = ground.width * (ground.dom.length - 1);
      }
    });

    cactuses.clones.forEach((clone, index) => {
      clone.offset -= speed;
      clone.dom.style.left = `${clone.offset}px`;

      if (clone.offset <= -cactuses.width) {
        cactuses.dom.removeChild(clone.dom);
        cactuses.clones.splice(index, 1);
      }
    });

    if (
      cactuses.clones.length === 0 ||
      cactuses.clones[cactuses.clones.length - 1].offset < ground.width - 200
    ) {
      let newCactus = document.createElement('img');
      newCactus.src = new URL('../images/cactus.png', import.meta.url);
      newCactus.classList.add('game6__sprite', 'game6__onground');
      newCactus.alt = 'cactus';

      cactuses.clones.push({
        id: cactuses.clones.length,
        offset: ground.width + (Math.random() / 4) * ground.width,
        dom: newCactus,
      });

      cactuses.dom.appendChild(newCactus);
    }

    requestAnimationFrame(startMove);
  };

  startMove();
};

// football
(() => {
  const stage = document.querySelector('.game7__stage');
  const ball = stage.querySelector('.game7__ball');

  stage.addEventListener('click', e => {
    e.preventDefault();

    const size = stage.getBoundingClientRect();
    // const soundURL = new URL('~src/audio/game7-hit.waw', import.meta.url);
    // const sound = new Audio(soundURL);
    // console.log(sound);
    // console.log(import.meta.url);

    let left = e.clientX - size.left - 25;
    let top = e.clientY - size.top - 25;

    ball.style.left = `${left}px`;
    ball.style.top = `${top}px`;
  });

  ball.addEventListener('transitionstart', () => {
    ball.classList.add('game7__ball-move');
  });

  ball.addEventListener('transitionend', () => {
    ball.classList.remove('game7__ball-move');
  });
})();

// scientists game
(() => {
  const scientists = [
    { name: 'Albert', surname: 'Einstein', born: 1879, dead: 1955, id: 1 },
    { name: 'Isaac', surname: 'Newton', born: 1643, dead: 1727, id: 2 },
    { name: 'Galileo', surname: 'Galilei', born: 1564, dead: 1642, id: 3 },
    { name: 'Marie', surname: 'Curie', born: 1867, dead: 1934, id: 4 },
    { name: 'Johannes', surname: 'Kepler', born: 1571, dead: 1630, id: 5 },
    { name: 'Nicolaus', surname: 'Copernicus', born: 1473, dead: 1543, id: 6 },
    { name: 'Max', surname: 'Planck', born: 1858, dead: 1947, id: 7 },
    { name: 'Katherine', surname: 'Blodgett', born: 1898, dead: 1979, id: 8 },
    { name: 'Ada', surname: 'Lovelace', born: 1815, dead: 1852, id: 9 },
    { name: 'Sarah E.', surname: 'Goode', born: 1855, dead: 1905, id: 10 },
    { name: 'Lise', surname: 'Meitner', born: 1878, dead: 1968, id: 11 },
    { name: 'Hanna', surname: 'Hammarström', born: 1829, dead: 1909, id: 12 },
  ];

  const makeCarts = data => {
    field.innerHTML = '';
    data.forEach(el => injectCard(el));
  };

  const injectCard = array => {
    field.insertAdjacentHTML(
      'beforeend',

      `
      <li class="game10__item">
        <h3 class="game10__item-name">${array.name} ${array.surname}</h3>
        <p class="game10__item-year">${array.born}-${array.dead}</hp>
      </li>
      `
    );
  };

  const btns = document.querySelectorAll('.game10__btn');
  const field = document.querySelector('.game10__cards');

  makeCarts(scientists);

  // sorting functions
  (() => {
    // Які вчені народилися в 19 ст.
    btns[0].onclick = () => {
      field.innerHTML = '';

      scientists.forEach(el => {
        if (el.born.toString().slice(0, 2) == '18') {
          injectCard(el);
        }
      });
    };

    // Знайти рік народження Albert Einshtein
    btns[1].onclick = () => {
      const albertEinstein = scientists.find(
        el => el.name === 'Albert' && el.surname === 'Einstein'
      );

      field.innerHTML = '';
      injectCard(albertEinstein);
    };

    // Відсортувати вчених за алфавітом
    btns[2].onclick = () => {
      const sortedArray = scientists.sort(
        (a, b) =>
          a.name.localeCompare(b.name) || a.surname.localeCompare(b.surname)
      );

      makeCarts(sortedArray);
    };

    // Знайти вчених, прізвища яких починаються на на літеру “С”
    btns[3].onclick = () => {
      field.innerHTML = '';
      makeCarts(scientists.filter(item => item.surname[0] == 'C'));
    };

    // Відсортувати вчених за кількістю прожитих років
    btns[4].onclick = () => {
      const sortedArray = scientists.sort(
        (a, b) => b.dead - b.born - (a.dead - a.born)
      );

      makeCarts(sortedArray);
    };

    // Видалити всіх вчених, ім’я яких починається на “А”
    btns[5].onclick = () => {
      field.innerHTML = '';
      makeCarts(scientists.filter(item => item.name[0] != 'A'));
    };

    // Знайти вченого, який народився найпізніше
    btns[6].onclick = () => {
      const oldestScientist = scientists.reduce((oldest, current) => {
        const oldestAge = oldest.dead - oldest.born;
        const currentAge = current.dead - current.born;
        return currentAge > oldestAge ? current : oldest;
      });

      field.innerHTML = '';
      injectCard(oldestScientist);
    };

    // Знайти вченого, який прожив найдовше і вченого, який прожив найменше
    btns[7].onclick = () => {
      const longestScientist = scientists.reduce((longest, current) => {
        const longestAge = longest.dead - longest.born;
        const currentAge = current.dead - current.born;
        return currentAge > longestAge ? current : longest;
      });

      const shortestScientist = scientists.reduce((shortest, current) => {
        const shortestAge = shortest.dead - shortest.born;
        const currentAge = current.dead - current.born;
        return currentAge < shortestAge ? current : shortest;
      });

      field.innerHTML = '';

      injectCard(longestScientist);
      injectCard(shortestScientist);
    };

    // Знайти вчених, в яких співпадають перші літери імені і прізвища
    btns[8].onclick = () => {
      const sameFirstLetter = scientists.filter(
        item => item.name[0] === item.surname[0]
      );

      field.innerHTML = '';
      makeCarts(sameFirstLetter);
    };
  })();
})();
