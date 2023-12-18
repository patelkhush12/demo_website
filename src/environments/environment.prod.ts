const domain = "https://backend.ncircletech.com";
export const environment = {
  appVersion: require('../../package.json').version,
  production: true,
  baseUrl: domain,
  apiUrl: `${domain}/api/v1`,
  recaptchaKey: `6LfXtg4nAAAAAIgstdOUNNi2q-bUqcFV3xT_ZdHb`,
  googleClientId: `1017237232169-ojig3bpmgi0bo9hg136cb919i3lpor0c.apps.googleusercontent.com`,
  // GA_TRACKING_ID: 'UA-155320944-1',
  GA_TRACKING_ID: 'G-T8C6C453N4',
  baseSiteUrl: 'https://ncircletech.com'
};



// const domain = "https://backend.staging.ncircletech.com";
// export const environment = {
//   appVersion: require('../../package.json').version,
//   production: true,
//   baseUrl: domain,
//   apiUrl: `${domain}/api/v1`,
//   recaptchaKey: `6LdAapEnAAAAAM5lNKJ6wM-sGclBDAviCKanbjIT`,
//   googleClientId: `1017237232169-ojig3bpmgi0bo9hg136cb919i3lpor0c.apps.googleusercontent.com`,
//   // GA_TRACKING_ID: 'UA-155320944-1',
//   GA_TRACKING_ID: 'G-T8C6C453N4',
//   baseSiteUrl: 'https://staging.ncircletech.com'
// };
