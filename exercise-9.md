# Exercise 9: Forms + Routing guards

1. Add a new service in the adminModule `userService`.
2. In the service add two functions:
    1. `login(username, password)`: if the username and password === 'admin', set a property `loggedIn` that has a default value of false to true and return true. if the username or password is not 'admin', return false.
    2. `isLoggedin()`: returns the value of the`loggedIn` property.
3. add a custom routing guard `userGuard` to the adminModule. in the guard, check `userService.isLoggedIn()` if the value is true, let the guard pass. if the value is false, redirect to `admin/login`.
4. add the userGuard to the `admin/manage` route.
5. add a template driven form to the loginContainer:
    1. add inputs for the username and password.
    2. add a button to submit the form that is only enabled when both the inputs are filled in.
    3. onSubmit, call `userService.login()`. if false, show a window.alert. if true, redirect to the `admin/manage` route.
6. In the talkManagementContainer, add a reactive form:
    1. add field for title -> required
    2. speakerName -> required
    3. speakerImagePath -> required
    4. rating -> required, min 1, max 5
    5. add a button that is disabled when one of the validation conditions is not met.
7. in the talkRepo, add an extra function `addTalk` that sends a POST request to `http://localhost:3000/talks`
8. onsubmit of the form, execute `talkRepo.addTalk()`and then navigate to `/overview`
