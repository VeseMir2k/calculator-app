import { create, all } from 'mathjs';
const math = create(all, {});

const keys = document.querySelector('.keypad') as HTMLElement;
const dot = document.querySelector('.toggle') as HTMLElement;
const toggleBtn = document.querySelectorAll<HTMLElement>('.toggle div');
const screenEl = document.querySelector('.screen') as HTMLInputElement;
let operation: string = '';

const handleKey = () => {
  keys.addEventListener('click', event => {
    const target = event.target as HTMLElement;
    const valueKey: any = target.dataset.key;

    if (valueKey === '=') {
      handleResultKey();
    } else if (valueKey === 'RESET') {
      handleResetKey();
    } else if (valueKey === 'DEL') {
      handleDelKey();
    } else {
      handleOtherKey(valueKey);
    }
  });
};

const handleResultKey = () => {
  const characters = ['/', '*', '+', '-'];
  let lastChar = operation.charAt(operation.length - 1);

  let isValidOperation = characters.includes(lastChar);

  if (!isValidOperation && operation.length > 0) {
    let result: number = +math.evaluate(operation);
    screenEl.value = result % 1 === 0 ? result.toFixed(0) : result.toFixed(2);
  }
};

const handleResetKey = () => {
  operation = '';
  screenEl.value = operation;
};

const handleDelKey = () => {
  const removeLastCharacter = operation.slice(0, -1);
  operation = removeLastCharacter;
  screenEl.value = operation;
};

const handleOtherKey = (valueKey: string) => {
  operation += valueKey;
  screenEl.value = operation;
};

const handleToggleButton = () => {
  toggleBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (index === 1) {
        updateTheme('theme-purple', 'theme-light', 'light');
        localStorage.setItem('theme', 'light');
      } else if (index === 2) {
        updateTheme('theme-light', 'theme-purple', 'purple');
        localStorage.setItem('theme', 'purple');
      } else {
        resetTheme('theme-light', 'theme-purple');
        localStorage.removeItem('theme');
      }
    });
  });
};

const updateTheme = (remove: string, add: string, attributTheme: string) => {
  document.documentElement.setAttribute('data-theme', attributTheme);
  dot.classList.remove(remove);
  dot.classList.add(add);
};

const resetTheme = (remove_1: string, remove_2: string) => {
  document.documentElement.removeAttribute('data-theme');
  dot.classList.remove(remove_1);
  dot.classList.remove(remove_2);
};

const prefersColorSchema = () => {
  if (
    (window.matchMedia('(prefers-color-scheme: light)').matches &&
      !('theme' in localStorage)) ||
    localStorage.theme === 'light'
  ) {
    updateTheme('theme-purple', 'theme-light', 'light');
  } else if (localStorage.theme === 'purple') {
    updateTheme('theme-light', 'theme-purple', 'purple');
  } else {
    resetTheme('theme-light', 'theme-purple');
  }
};

const init = () => {
  handleKey();
  handleToggleButton();
  prefersColorSchema();
};

init();
