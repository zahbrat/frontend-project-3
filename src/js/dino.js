const dino = () => {
  let speed = 3;
  let score;
  let animationFrameId = null;

  const stageDOM = document.querySelector('.dino__stage');
  const sprites = {
    dino: {
      isJumping: false,
      isTouchingCactus: false,
      dom: document.querySelector('.dino__dino'),
    },
    ground: {
      width: 481,
      offsets: [],
      dom: Array.from(document.querySelectorAll('.dino__ground *')),
    },
    cactuses: {
      dom: document.querySelector('.dino__cactuses'),
      width: 33,
      clones: [],
    },
  };

  sprites.ground.dom.forEach((domElement, index) => {
    domElement.style.left = index === 0 ? sprites.ground.width + 'px' : '0px';
    sprites.ground.offsets.push(parseFloat(domElement.style.left));
  });

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

        stageDOM.addEventListener(
          'transitionend',
          () => (dino.isJumping = false)
        );
      }, 400); // Duration of the jump
    }
  };

  stageDOM.addEventListener('focus', () => {
    stageDOM.addEventListener('keydown', handleJump);
    stageDOM.addEventListener('mousedown', handleJump);
    stageDOM.classList.add('dino__stage-focus');
  });

  stageDOM.addEventListener('blur', () => {
    stageDOM.removeEventListener('keydown', handleJump);
    stageDOM.removeEventListener('mousedown', handleJump);
    stageDOM.classList.remove('dino__stage-focus');
  });

  const checkCollision = () => {
    const { dino, cactuses } = sprites;

    const dinoRect = dino.dom.getBoundingClientRect();

    for (const cactus of cactuses.clones) {
      const cactusRect = cactus.dom.getBoundingClientRect();

      if (
        !(
          dinoRect.bottom < cactusRect.top ||
          dinoRect.top > cactusRect.bottom ||
          dinoRect.right < cactusRect.left ||
          dinoRect.left > cactusRect.right
        )
      ) {
        sprites.dino.isTouchingCactus = true;
        return true; // Колізія знайдена
      }
    }

    sprites.dino.isTouchingCactus = false;
    return false; // Колізія не знайдена
  };

  const animateWorld = function () {
    const { ground, cactuses } = sprites;

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
        cactuses.clones[cactuses.clones.length - 1].offset <
          ground.width - (Math.floor(Math.random() * 300) + 150)
      ) {
        let newCactus = document.createElement('img');
        newCactus.src = new URL('../images/cactus.png', import.meta.url);
        newCactus.classList.add('dino__sprite', 'dino__onground');
        newCactus.style.width = Math.floor(Math.random() * 20) + 10 + 'px';
        newCactus.alt = 'cactus';

        cactuses.clones.push({
          id: cactuses.clones.length,
          offset: ground.width + Math.random() * (ground.width / 8),
          dom: newCactus,
        });

        cactuses.dom.appendChild(newCactus);
      }

      score++;
      stageDOM.querySelector('.dino__score span').textContent = score;

      animationFrameId = requestAnimationFrame(startMove);

      if (checkCollision()) {
        stageDOM.querySelector('.dino__end').style.display = '';
        stopAnimation();
      }
    };

    startMove();
  };

  const stopAnimation = () => {
    if (animationFrameId) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
  };

  const startGame = () => {
    // Скидаємо стан гри
    stageDOM.querySelector('.dino__play').style.display = 'none';
    stageDOM.querySelector('.dino__end').style.display = 'none';

    sprites.dino.isJumping = false;
    sprites.dino.isTouchingCactus = false;

    document.querySelector('.dino__cactuses').textContent = '';
    sprites.cactuses.clones = [];

    score = 0;

    sprites.ground.dom.forEach((domElement, index) => {
      domElement.style.left = index === 0 ? sprites.ground.width + 'px' : '0px';
      sprites.ground.offsets[index] = parseFloat(domElement.style.left);
    });

    stageDOM.setAttribute('tabindex', '0');
    stageDOM.focus();

    animateWorld();
  };

  window.addEventListener('beforeunload', stopAnimation);

  stageDOM
    .querySelector('.dino__play .btn')
    .addEventListener('click', startGame);
  stageDOM
    .querySelector('.dino__end .btn')
    .addEventListener('click', startGame);

  // Сховуємо екран завершення гри при завантаженні
  stageDOM.querySelector('.dino__end').style.display = 'none';
};

dino();
