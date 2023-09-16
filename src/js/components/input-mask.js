export function makeInputMask() {
  let inputMaskTelElements = document.querySelectorAll('.input-mask-tel');

  for (let inputMaskTelElement of inputMaskTelElements) {
    Inputmask({
      'mask': '+38 (999) 999-99-99'
    }).mask(inputMaskTelElement)
  }
}