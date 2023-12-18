// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.



// const domain = "http://192.168.1.14:8000";
// export const environment = {
//     appVersion: require('../../package.json').version,
//     production: true,
//     baseUrl: domain,
//     apiUrl: `${domain}/api/v1`,
//     recaptchaKey: `6Lcp9B4nAAAAALsBhugEiM-ikUW_zhFv9r5fgCqY`,
//     googleClientId: `1017237232169-ojig3bpmgi0bo9hg136cb919i3lpor0c.apps.googleusercontent.com`,
//     // GA_TRACKING_ID: 'UA-155320944-1',
//     GA_TRACKING_ID: 'G-T8C6C453N4',
//     baseSiteUrl: 'http://localhost:3000/'
// };

// const domain = "https://backend.staging.ncircletech.com";
// export const environment = {
//     appVersion: require('../../package.json').version,
//     production: true,
//     baseUrl: domain,
//     apiUrl: `${domain}/api/v1`,
//     recaptchaKey: `6LdAapEnAAAAAM5lNKJ6wM-sGclBDAviCKanbjIT`,
//     googleClientId: `1017237232169-ojig3bpmgi0bo9hg136cb919i3lpor0c.apps.googleusercontent.com`,
//     // GA_TRACKING_ID: 'UA-155320944-1',
//     GA_TRACKING_ID: 'G-T8C6C453N4',
//     baseSiteUrl: 'https://staging.ncircletech.com'
// };

// const domain = "https://backend.ncircletech.com";
// export const environment = {
//     appVersion: require('../../package.json').version,
//     production: true,
//     baseUrl: domain,
//     apiUrl: `${domain}/api/v1`,
//     recaptchaKey: `6LfXtg4nAAAAAIgstdOUNNi2q-bUqcFV3xT_ZdHb`,
//     googleClientId: `1017237232169-ojig3bpmgi0bo9hg136cb919i3lpor0c.apps.googleusercontent.com`,
//     // GA_TRACKING_ID: 'UA-155320944-1',
//     GA_TRACKING_ID: 'G-T8C6C453N4',
//     baseSiteUrl: 'https://ncircletech.com'
// };

const domain = "http://192.168.1.9:8000";
export const environment = {
    production: false,
    baseUrl: domain,
    apiUrl: `${domain}/api/v1`,
    recaptchaKey: '6Lc_u4IlAAAAABClNIwR2cmew7YWWesS84gyTjFn',
    googleClientId: '667211677357-89cvrbt048k04vc0g7pm0c1bpcl6srep.apps.googleusercontent.com',
    GA_TRACKING_ID: 'G-2S07XZFEWF',
    appVersion: require('../../package.json').version,
    baseSiteUrl: 'http://localhost:3000/'
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
