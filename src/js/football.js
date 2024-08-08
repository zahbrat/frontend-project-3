const football = () => {
  const stage = document.querySelector('.football__stage');
  const ball = stage.querySelector('.football__ball');

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
    ball.classList.add('football__ball-move');
  });

  ball.addEventListener('transitionend', () => {
    ball.classList.remove('football__ball-move');
  });
};

football();
