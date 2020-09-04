# Exercise 5: Component interaction

1. Add an input `maxAmount` with a default value of 10 to the helloWorld component.
2. Use the newly made input as value in the `*ngIf` of the button in helloWorld component
3. Verify that the demo app still works.
4. Add a property binding to the input `maxAmount` of the `<app-hello-world>` component in `app.component.html` and add a value of `5`.
5. The button should now disappear after 5 clicks.
6. Add an output to the helloWorldComponent `counterUpdated`.
7. Emit an event on the output with the value of the counter as parameter.
8. On the appComponent, add a property `title`.
9. Add an event binding to the `counterUpdated` event of `<app-hello-world>` component.
10. Update the title property to `The button was clicked <param of event binding> times.` when a `counterUpdated` event is received. (don't forget to use \$event as param in the event binding or you won't get any values).
11. Use interpolation to add the title property of the appComponent to it's template.
