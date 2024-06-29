import vars from '../_vars';
import { setCookie, getCookie } from '../functions/cookies';

(function () {
  const cookiesNotification = vars.documentEl.getElementById('cookies-notice');
  const cookiesAcceptButton = vars.documentEl.getElementById('cookies-notice-accept');
  const cookieName = 'cookies_accepted';

  if (!cookiesNotification) {
    return false;
  }

  if (!getCookie(cookieName)) {
    cookiesNotification.style.display = 'block';
  }

  if (cookiesAcceptButton) {
    cookiesAcceptButton.addEventListener('click', function () {
      cookiesNotification.style.display = 'none';

      setCookie(cookieName, 'true', 20);
    });
  }
})();