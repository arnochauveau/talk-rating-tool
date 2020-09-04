# Exercise 6: Smart and dumb componenents.

1. Remove the helloWorldComponent and the oddEvenPipe. Clear the contents of the appComponent class and it's template. Make sure you also delete the declarations in the appModule.
2. open `tslint.json` and change the property `component-class-suffix` to the following snippet to allow Container suffixes for components:

```json
"component-class-suffix": [
    true,
    "Component",
    "Container"
]
```

3. Generate a container component in `src/app/containers` called `talksOverviewContainer`. Use the command `ng g component` with the flag `--type="container"`.
4. In future exercises, we will actually get data from a service. For now add a property `data` to the newly generated container with the following data:

```js
[
    {
        id: 0,
        title: 'React workshop',
        speaker: {
            name: 'Nick',
            imageUrl: 'assets/nick.jpeg',
        },
        rating: 1,
    },
    {
        id: 1,
        title: 'Angular workshop',
        speaker: {
            name: 'Arno',
            imageUrl: 'assets/arno.jpeg',
        },
        rating: 5,
    },
    {
        id: 2,
        title: 'Legacy software workshop',
        speaker: {
            name: 'Birger',
            imageUrl: 'assets/birger.jpeg',
        },
        rating: 3,
    },
    {
        id: 3,
        title: 'Javascript workshop',
        speaker: {
            name: 'Joey',
            imageUrl: 'assets/joey.jpeg',
        },
        rating: 4,
    },
];
```

5. Add an interface `src/app/models/talk.interface.ts`. Add the following contents to the file:

```ts
export interface Talk {
    id: number;
    title: string;
    speaker: Speaker;
    rating: number;
}

export interface Speaker {
    name: string;
    imageUrl: string;
}
```

6. Generate a presentational component in `src/app/components` called `talkComponent`. Add an input `talk` of type `Talk`(from the interface) to the component.
7. Generate a presentational component in `src/app/components` called `speakerComponent`. Add an input `speaker` of type `Speaker` to the component.
8. In the template of the speakerComponent, show the image with the speaker name next to each other.
9. in the talkComponent's template, show the talk title, the speaker component, and the rating underneath each other.
10. Hook up all the components to each other:

```
AppComponent
    -->TalksOverviewContainer
        -->TalkComponent with input talk (use ngFor)
            -->SpeakerComponent with input speaker
```

## BONUS exercises

1. Generate a rating component and show the rating with filled and empty star icons(you can find them in `src/assets`). Use an input to receive the rating value.
2. Add Outputs to the rating and Talk components to update the rating in the data property of the talksOverviewContainer. When a start icon is clicked. the corresponding value should be the new rating.
