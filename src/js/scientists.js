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
      <li class="scientists__item">
        <h3 class="scientists__item-name">${array.name} ${array.surname}</h3>
        <p class="scientists__item-year">${array.born}-${array.dead}</hp>
      </li>
      `
  );
};

const btns = document.querySelectorAll('.scientists__btn');
const field = document.querySelector('.scientists__cards');

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
