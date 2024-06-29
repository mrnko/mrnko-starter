import Inputmask from 'inputmask';

(function () {
  const inputMaskTelElements = document.querySelectorAll('.input-mask-tel');

  if (inputMaskTelElements) {
    for (let inputMaskTelElement of inputMaskTelElements) {
      const code = inputMaskTelElement.dataset.code;

      Inputmask({
        'mask': '+' + code + ' (999) 999-99-99'
      }).mask(inputMaskTelElement)
    }
  }
})();