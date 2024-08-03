console.log(1);
let speed = 5;
let score = 0;
let lastSpeedIncrease = 0;
let isGameOver = false;

const stageDOM = document.querySelector('.game6__stage');
const sprites = {
  dino: {
    isJumping: false,
    dom: document.querySelector('.game6__dino'),
    width: 44,
    height: 47,
  },
  ground: {
    width: 481,
    offsets: [],
    dom: Array.from(document.querySelectorAll('.game6__ground *')),
  },
  cactuses: {
    dom: document.querySelector('.game6__cactuses'),
    width: 37,
    height: 70,
    clones: [],
  },
};

const detectCollision = function() {
  const dino = sprites.dino;
  const dinoRect = dino.dom.getBoundingClientRect();
  
  // Враховуємо відступ знизу для динозавра
  const dinoBottom = dinoRect.bottom - 30; // 30px - це відступ знизу для класу game6__onground

  for (let cactus of sprites.cactuses.clones) {
    const cactusRect = cactus.dom.getBoundingClientRect();

    // Перевіряємо зіткнення з урахуванням фактичних розмірів та позицій
    if (
      dinoRect.right > cactusRect.left &&
      dinoRect.left < cactusRect.right &&
      dinoBottom > cactusRect.top
    ) {
      return true; // Зіткнення виявлено
    }
  }

  return false; // Зіткнення не виявлено
};

const gameOver = function() {
  isGameOver = true;
  console.log("Game Over! Your score:", score);
  // Тут можна додати додаткову логіку завершення гри
  // Наприклад, показати екран з результатом, зупинити анімацію тощо
};

const detectEvents = function () {
  console.log('detectEvents');
  const handleJump = e => {
    const isJumpKey = e.code === 'Space' || e.code === 'ArrowUp';
    const { dino } = sprites;
    if (
      ((e.type === 'keydown' && isJumpKey) || e.type === 'mousedown') &&
      !dino.isJumping && !isGameOver
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
      }, 250);
    }
  };
  stageDOM.addEventListener('keydown', handleJump);
  stageDOM.addEventListener('mousedown', handleJump);
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
    if (isGameOver) return;

    score++;
    
    if (score - lastSpeedIncrease >= 500 && !dino.isJumping) {
      speed += 0.1;
      lastSpeedIncrease = score;
    }
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

    if (detectCollision()) {
      gameOver();
    } else {
      requestAnimationFrame(startMove);
    }
  };
  startMove();
};

stageDOM.querySelector('.btn').addEventListener('click', () => {
  stageDOM.querySelector('.game6__play').style.opacity = '0';
  console.log('stageDOM');
  detectEvents();
  animateWorld();
});

document.addEventListener('keydown', e => {
  if (e.code === 'ArrowUp' && !isGameOver) {
    detectEvents();
    animateWorld();
  }
});