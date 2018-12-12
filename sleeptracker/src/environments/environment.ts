// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "344f5ab65826e8fd39c62f41a180d176eff7cfbe",
    authDomain: "test133-3fcc2.firebaseapp.com",
    databaseURL: "https://test133-3fcc2.firebaseio.com",
    projectId: "test133-3fcc2",
    storageBucket: "test133-3fcc2.appspot.com",
    messagingSenderId: "909242581340"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
