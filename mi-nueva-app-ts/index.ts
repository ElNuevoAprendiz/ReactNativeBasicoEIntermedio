import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately

// registerRootComponent llama a AppRegistry.registerComponent('main', () => App);
// También garantiza que, independientemente de si se carga la aplicación en Expo Go o en una compilación nativa,
// el entorno esté configurado correctamente

registerRootComponent(App);
