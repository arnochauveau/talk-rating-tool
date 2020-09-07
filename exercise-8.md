# Exercise 8: Routing

1. Generate a new module `AdminModule` in the folder `src/app/modules/admin`
2. Generate a routing module for the `AdminModule`.
3. Generate two containers in the AdminModule `loginContainer` and `talkManagementContainer` in the folder `src/app/modules/admin/containers`
4. Add a new container to the appModule `navigationContainer` in the container, add links to the homePage (talksOverviewContainer) and to the adminPanel (talkManagementContainer).
5. In the appRoutingModule, add a route to the talksOverviewContainer `/overview`. Also add a fallbackroute that routes to `/overview`
6. In the AdminRoutingModule add routes to the loginContainer `admin/login` and to the talkManagementContainer `admin/manage`.
7. Remove the TalksOverviewContainer from the appComponent. and add the navigationContainer and the `<router-outlet></router-outlet>`
8. Make sure your three routes work by changing the URL. Also make sure any other URL redirects to `/overview`. Don't forget to test your navigation component as well!

## BONUS EXERCISE

1. Because the admin module is only used by admins, it makes sense to lazy load this module.
   try to make the app lazy load the module only when the user navigates to a `/admin` route.

Follow the docs to get started!

https://angular.io/guide/lazy-loading-ngmodules
