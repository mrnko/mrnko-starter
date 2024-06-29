export const disableScroll = () => {
  document.querySelector('html').style.overflowY = 'hidden';
};

export const enableScroll = () => {
  document.querySelector('html').style.overflowY = 'auto';
};