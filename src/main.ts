import { create, all } from 'mathjs';
const math = create(all, {});

const keys = document.querySelectorAll<HTMLElement>('.keypad button');
const dot = document.querySelector('.toggle') as HTMLElement;
const toggleBtn = document.querySelectorAll<HTMLElement>('.toggle div');
const screenEl = document.querySelector('.screen') as HTMLInputElement;
let operation: string = '';

const handleKey = () => {
  keys.forEach(key => {
    key.addEventListener('click', () => {
      const valueKey: any = key.dataset.key;

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
  });
};

const handleResultKey = () => {
  if (operation.length > 0) {
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
      } else if (index === 2) {
        updateTheme('theme-light', 'theme-purple', 'purple');
      } else {
        resetTheme('theme-light', 'theme-purple');
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

const init = () => {
  handleKey();
  handleToggleButton();
};

init();
