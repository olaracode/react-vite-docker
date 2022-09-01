# ⚛️ React - Chakra-UI Template 🌩️

Proyecto basado en una aplicación de React.Js utilizando [ViteJS](https://vitejs.dev/), contiene un tema básico creado con [Chakra-UI](https://chakra-ui.com/) que usa [context-api](https://es.reactjs.org/docs/context.html) para manejar el tema actual(tema oscuro o tema claro)

## 🌐 Importaciones Globales

> **Este formato de importaciones funciona con cualquier carpeta dentro de src**

Se usan importaciones globales configuradas con vite.config.js y jsonconfig.json. Es una configuración simple que puede ser mejorada o reemplazada facilmente

```js
import { SomeContext } from "@/context/SomeContext.jsx";
import { CustomButton } from "@/components/atoms/buttons";
import useFunctionality from "@/hooks/useFunctionality.jsx";
```

## 📁 Componentes

**Componentes generales**, **_src/components_**, son rehusables y globales, estan divididos en atomos, moleculas y organismos.

```
atoms/* -> Componentes pequeños
molecules/* -> Componentes medianos que utilizan atomos
omrganisms/* -> Componentes grandes que pueden utilizar tanto moleculas como atomos
```

**Componentes de vista**, **_views/some_view/components_**, son de uso local de una vista, puede ser reusable.

## 💻 Manejo de estados

> 🏗️ En construcción

El estado se maneja usando una estructura de contexto/proveedor básica. Se busca implementar una estructura similar a la Flux, utilizando store y actions.

Estos serían manejados usando el hook useStore()

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

## 🎉 Iniciando

Despues de clonar el repositorio,

```sh
yarn install
# o
npm install

# Y

yarn dev
# o
npm run start
```
