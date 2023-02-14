document.addEventListener('DOMContentLoaded', function () {

  let colorInput = document.querySelector('.color-input');
  let colorTextInput = document.querySelector('.text-color-input');
  let colorBlock = document.querySelector('.color-block');
  let clearButton = document.querySelector('.clear-btn');

  /**Окрашивание
   * блока по вводу значения
   */

  function paintBlock() {
    colorBlock.style.backgroundColor = colorInput.value;

  }


  colorInput.addEventListener('input', paintBlock);

  // Вызов функций
  paintBlock();
});
