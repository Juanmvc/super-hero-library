This is a super hero list app created using next 14 and react 18

## Getting Started

To install dependencies:

```bash
npm install
```

To run the development server:

```bash
npm run dev
```

To make the production build:

```bash
npm run build
```


To start the production build:

```bash
npm run start
```

To start storybook with all components used in the app:

```bash
npm run storybook
```

You can also run the tests created using jest with:

```bash
npm run test
```

You can run the e2e tests created using cypress with (keep in mind that first you would have to have an instance of the app running on localhost:3000):

(Given the nature of these tests that are launched waiting for a response from the api, they may fail if they are launched on a computer where there is no access to these public/private keys.)

```bash
npm run e2e:chrome
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the Super hero app.
Open [http://localhost:6006](http://localhost:6006) with your browser to see the Storybook app.

## Technical decisions for the project

### Entity Design
**Anemic Model**: I decided to make some anemic entities since they didn't need complex logics for the use cases of this application so I practically use them as interfaces. In case the use cases would have been more complex I would have given more weight to the entities by transforming them into classes with the respective necessary logics.

In this case I didn't find it necessary to do so since it would have made the application somewhat slower. In the end, with the transformations from primitives to entities that you have to do in next when you go from ‘server’ to ‘client’, you invest execution time and in this application it wasn't necessary.

### Texts
With some more time I would use a library like next-i18next and have all the fixed texts in a json to consume them from and help the application to be multilingual in the future (as well as being easier to maintain this way).

### Organization of Components and Projects
**Standalone Components**: In larger projects, I would be inclined to move component definitions out of Storybook, placing them in a separate package. This would allow sharing these components as dependencies between different projects, improving code reusability and maintainability.
  
**Core Package**: In larger projects or with multiple applications, I would consider centralizing the business logic (including infrastructure, application and domain) in a "core" external package. This would facilitate reuse and access to this logic by other applications, promoting a more modular and scalable architecture. In this case I have simply added the ‘core’ as a folder within the application for simplicity.

### API
Seeing the amount of api calls that have to be made for some of the views in this project I would probably try to put the image urls together so that they are in the Hero object itself. Having to make a call for ‘Comic’ to get its image seems very expensive to me and is reflected in the load time.

