# ⚛️ React - Chakra-UI Template 🌩️

Project based on a React App initialized with [ViteJS](https://vitejs.dev/) it features a basic theme created with [Chakra-UI](https://chakra-ui.com/) using [context-api](https://reactjs.org/) to handle the theme state(Dark Theme vs Light Theme).

## 🌐 Global imports

> **This import format will work for any folder insider src**

Global imports are defined using vite.config.js and jsonconfig.json. It is a basic implementation which can be upgraded orreplaced.

```js
import { SomeContext } from "@/context/SomeContext.jsx";
import { CustomButton } from "@/components/atoms/buttons";
import useFunctionality from "@/hooks/useFunctionality.jsx";
```

## 📁 Components.

**General components**, **_src/components_**, are reusable and global components divided on atoms, molecules and organisms.

```
Atoms -> Small 'stand alone' Component
Molecules -> Medium components with some atoms
Organisms -> Large components with multiple molecules and atoms
```

**Views components**, **_views/some_view/components_**, are view-specific components which can be reused inside the view

## 💻 State management

> 🏗️ In progress

State is managed using ContextApi.

A flux-like is being used so far. With a store, containing all the states, and actions, containing all the reducer functions.

```js
import useStore from "@/hooks/useStore";

const Component = () => {
  const { store, actions } = useStore();

  const handleThing = () => {
    const reduced = actions.thingReducer();
    return reduced;
  };

  return <>{store.data}</>;
};

export default Component;
```

## 🎉 Getting started

After cloning the repository you can get started using

```sh
yarn install
# or
npm install

# And

yarn dev
#or
npm run start
```
