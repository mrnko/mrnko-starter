export function makeInputMask() {
  let inputMaskTelElements = document.querySelectorAll('.input-mask-tel');

  for (let inputMaskTelElement of inputMaskTelElements) {
    const code = inputMaskTelElement.dataset.code;

    Inputmask({
      'mask': '+' + code + ' (999) 999-99-99'
    }).mask(inputMaskTelElement)
  }
}