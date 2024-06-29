import vars from '../_vars';

export const setCookie = (name, value, days) => {
  var expires = '';

  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires=' + date.toUTCString();
  }

  vars.documentEl.cookie = name + '=' + (value || '') + expires + '; path=/';
};

export const getCookie = (name) => {
  var nameEQ = name + '=';
  var cookies = document.cookie.split(';');

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) == ' ') {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) == 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }

  return null;
};