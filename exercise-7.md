# Exercise 7: Services and HTTP

> run `npm run start:server` to start the 'backend'.
> the API's url is http://localhost:3000/talks

1. Add a service `src/app/services/TalkRepo.service.ts`
2. Import the HttpClientModule in the appModule.
3. Inject the HttpClient into the new service via the constructor.
4. Add a function `getTalks` to the service to get the Talks from the 'backend'(GET request to http://localhost:3000/talks).
5. add a function `updateTalk` to the service to update a talk on the 'backend' (PUT request to http://localhost:3000/talks/<talk_id>)
6. inject the service into the container component via the constructor.
7. In the container component. call the getTalks() function from the service. Don't forget to subscribe! The result should go in data.
8. When the rating is changed, the result should be sent to the 'backend' and the talks should be refreshed from the backend.
