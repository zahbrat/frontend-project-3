const ourteam = () => {
  const team = [
    {
      name: 'Захарій Брацлавський',
      desc: `
        <p>Я був Team Lead-ом: був ватажком команди, допомагав іншим із технічними проблемами.</p> <br/>
        <p>Що я зробив:</p> <br/>
        <ul>
          <li>Зробив гру вчених</li>
          <li>Зробив гру футбол</li>
          <li>Зробив гугл динозаврика</li>
          <li>І цей слайдер, що дивитеся 🙂</li>
        </ul>
      `,
    },
    {
      name: 'Ліда Попадюк',
      desc: `
        <p>Я була Team Lead-ом: був ватажком команди, допомагав іншим із технічними проблемами.</p> <br/>
        <p>Що я зробив:</p> <br/>
        <ul>
          <li>Зробив гру вчених</li>
          <li>Зробив гру футбол</li>
          <li>Зробив гугл динозаврика</li>
          <li>І цей слайдер, що дивитеся 🙂</li>
        </ul>
        `,
    },
    {
      name: 'Поліна Бондаренко',
      desc: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iure quo eum aliquid beatae sapiente dolore! `,
    },
    {
      name: 'Артур Кушаренко',
      desc: `
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iure quo eum aliquid beatae sapiente dolore! `,
    },
  ];

  const dots = document.querySelector('.ourteam__items');
  const slider = document.querySelector('.ourteam__slider');

  let currentSlide = 0;

  const renderSlide = () => {
    slider.innerHTML = '';
    dots.innerHTML = '';

    team.forEach((el, index) => {
      slider.insertAdjacentHTML(
        'beforeend',
        `<div class="ourteam__part" style="${
          index === currentSlide ? 'display: block;' : 'display: none;'
        }">
          <img src="..." alt="Зображення Члена команди" class="ourteam__pic"/>
          <h3 class="ourteam__name title">${el.name}</h3>
          <div class="ourteam__info">${el.desc}</div>
        </div>`
      );

      dots.insertAdjacentHTML(
        'beforeend',
        `<span class="ourteam__dot ${
          index === currentSlide ? 'ourteam__dot-this' : ''
        }"></span>`
      );
    });
  };

  renderSlide();

  document.querySelector('.ourteam__btn-prev').addEventListener('click', () => {
    if (currentSlide === 0) {
      currentSlide = team.length - 1;
    } else {
      currentSlide--;
    }
    renderSlide();
  });

  document.querySelector('.ourteam__btn-next').addEventListener('click', () => {
    if (currentSlide === team.length - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    renderSlide();
  });

  document.addEventListener('keydown', e => {
    e.preventDefault();

    if (e.code === 'ArrowLeft') {
      if (currentSlide === 0) {
        currentSlide = team.length - 1;
      } else {
        currentSlide--;
      }
      renderSlide();
    }

    if (e.code === 'ArrowRight') {
      if (currentSlide === team.length - 1) {
        currentSlide = 0;
      } else {
        currentSlide++;
      }
      renderSlide();
    }
  });
};

ourteam();
