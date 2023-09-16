import fullpage from 'fullpage.js';

export function makeFullPage() {
  let fullPageApp = new fullpage('.app', {
    lockAnchors: false,
    anchors: ['welcome', 'buttons', 'forms', 'table', 'slider', 'modal'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['welcome', 'buttons', 'forms', 'table', 'slider', 'modal'],
    showActiveTooltip: false,
    slidesNavigation: false,
    scrollingSpeed: 900,
    verticalCentered: false,
    sectionsColor: ['#fff', '#f7f7f7', '#fff', '#f7f7f7', '#fff'],
    credits: { enabled: true, label: ' ', position: 'right' },
    licenseKey: 'gplv3-license'
  });
}