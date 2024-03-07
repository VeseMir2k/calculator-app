import { create, all } from 'mathjs';
const math = create(all, {});

const keys = document.querySelectorAll<HTMLElement>('.keypad button');
const dot = document.querySelector('.toggle') as HTMLElement;
const toggleBtn = document.querySelectorAll<HTMLElement>('.toggle div');
const screenEl = document.querySelector('.screen') as HTMLInputElement;
let operation: string = '';

keys.forEach(key => {
  key.addEventListener('click', () => {
    const valueKey = key.dataset.key;

    if (valueKey === '=') {
      let result: number = +math.evaluate(operation);
      return (screenEl.value = result.toFixed(3));
    } else if (valueKey === 'RESET') {
      operation = '';
    } else if (valueKey === 'DEL') {
    } else {
      operation += valueKey;
    }

    screenEl.value = operation;
  });
});

toggleBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    if (index === 1) {
      document.documentElement.setAttribute('data-theme', 'light');
      dot.classList.remove('theme-purple');
      dot.classList.add('theme-light');
    } else if (index === 2) {
      document.documentElement.setAttribute('data-theme', 'purple');
      dot.classList.remove('theme-light');
      dot.classList.add('theme-purple');
    } else {
      document.documentElement.removeAttribute('data-theme');
      dot.classList.remove('theme-purple');
      dot.classList.remove('theme-light');
    }
  });
});
