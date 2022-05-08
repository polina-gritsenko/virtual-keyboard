import '../assets/styles/styles.scss';
import Keyboard from './Keyboard';

class Container {
  constructor(parentElement) {
    this.parentElement = parentElement;
  }

  init() {
    const createDescription = (parentElement) => {
      const description = document.createElement('div');
      description.classList.add('description');
      description.innerText = `Клавиатура создана в операционной системе Windows
        Для переключения языка комбинация: левыe ctrl + alt`;
      parentElement.appendChild(description);
    };

    const createKeyboard = (parentElement, textarea) => {
      const keyboardContainer = document.createElement('div');
      keyboardContainer.classList.add('keyboard');
      const keyboard = new Keyboard(keyboardContainer, textarea);
      keyboard.init();
      parentElement.appendChild(keyboardContainer);
    };

    const createTextarea = (parentElement) => {
      const input = document.createElement('textarea');
      input.classList.add('textarea');
      input.placeholder = 'Start typing...';
      input.cols = '80';
      input.rows = '10';
      input.autofocus = true;

      parentElement.appendChild(input);
      return input;
    };

    const createContainer = (parentElement) => {
      const container = document.createElement('div');
      container.classList.add('container');

      const textarea = createTextarea(container);
      parentElement.appendChild(container);
      createKeyboard(container, textarea);
      createDescription(container);
    };
    createContainer(this.parentElement);
  }
}

export default Container;
