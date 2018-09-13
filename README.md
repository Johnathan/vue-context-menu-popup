# vue-context-menu-popup

[![GitHub open issues](https://img.shields.io/github/issues/Johnathan Barrett/vue-context-menu-popup.svg?maxAge=2592000)](https://github.com/Johnathan Barrett/vue-context-menu-popup/issues)
[![Npm version](https://img.shields.io/npm/v/vue-context-menu-popup.svg?maxAge=2592000)](https://www.npmjs.com/package/vue-context-menu-popup)

## Usage

```HTML
<ContextMenu :text="hello"></ContextMenu>
```

```javascript
import { ContextMenu } from 'vue-context-menu-popup'

export default {
  components: {
    ContextMenu
  }
}
```

## API

### context-menu 

#### props 

- `menu-items` ***Array*** (*optional*) 

#### data 

- `visible` 

**initial value:** `false` 

- `contextMenuPosition` 

**initial value:** `[object Object]` 

#### methods 

- `close()` 

- `open(position)` 

## Installation

```
npm install vue-context-menu-popup
```

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Run your unit tests

```
npm run test:unit
```

### Update the API section of README.md with generated documentation

```
npm run doc:build
```
