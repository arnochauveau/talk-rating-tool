# Exercise 10: NGRX

1. Install NGRX by running the following command: `npm i @ngrx/store @ngrx/effect --save`
2. Add a new file `src/app/actions/app.actions.ts` with the following actions:
    1. loadTalks
    2. talksLoaded with prop {talk[]}
    3. ratingChanged with prop {id, rating}
3. Add a new file `src/app/reducers/app.reducer.ts` with:
    1. a State interface that looks like this:
    ```ts
    export interface State {
        talks: Talk[];
    }
    ```
    2. an initial state that looks like this:
    ```ts
    {
        talks: [];
    }
    ```
    3. a reducer that handles the talksLoaded action (fill in the talks from prop in to the state.)
4. register the reducer in the appModule with `StoreModule.forRoot()`
5. add a new file `src/app/effects/app.effects.ts` with:
    1. an effect handler for the loadTalks action which executes the `getTalks()` from the repo and returns a `talksLoaded` action with the result of the `getTalks` in the props.
    2. an effect handler for the ratingChanged event that calls `updateTalk` from the repo and returns a `loadTalks` action.
6. register the effects in the app.module.ts with `EffectModule.forRoot()`
7. update the application to dispatch actions instead of calling the repo directly.
8. update the application to use store selectors instead of the repo directly.

## Bonus exercise

-   add an action with prop route and an effect for navigation

-   add new folders and files for reducers, actions and effects in `src/app/modules/admin`

-   in the adminState keep track of the isLoggedin (boolean).
-   add action and effect for showing errors with window.alert
-   add action + effect for logging in, if failed -> errorAction, if successful -> navigateAction to /manage + loginAction that changes state.
-   add action + effect for adding a new talk -> navigateAction to /overview

Look here for registering feature state: https://ngrx.io/guide/store/reducers#register-feature-state
Look here for registering feature effects: https://ngrx.io/guide/effects#registering-feature-effects

-   Download the Redux Devtools Extension and setup the app to use it: https://ngrx.io/guide/store-devtools
