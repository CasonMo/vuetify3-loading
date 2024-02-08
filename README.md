# Vuetify3 Vue3 fullscreen loading

This module extends vuetify3 loading.

<img src="images/rotate.png" width = "300"  alt="" align=center />

## Setup

Install the package from npm

```npm
npm install vuetify3-loading
```

```npm
yarn add vuetify3-loading
```


## vuetify 3

```javascript
import "vuetify3-loading/dist/style.css"
import loading from "vuetify3-loading"
app.use(loading,{loader:'classical'})
```
....
### loader values
* rotate

    <img src="images/rotate.png" width = "300"  alt="" align=center />


* classical
    
    <img src="images/classical.png" width = "300"  alt="" align=center />


* dot
    
    <img src="images/dot.png" width = "300"  alt="" align=center />


* bar
    
    <img src="images/bar.png" width = "300"  alt="" align=center />


* dot-bar

    <img src="images/dot-bar.png" width = "300"  alt="" align=center />


* spinner
  
    <img src="images/spinner.png" width = "300"  alt="" align=center />

  
* progress
  
    <img src="images/progress.png" width = "300"  alt="" align=center />



* wobbling
    
    <img src="images/wobbling.png" width = "300"  alt="" align=center />

  
* infinity
  
    <img src="images/infinity.png" width = "300"  alt="" align=center />

  
* eye

    <img src="images/eye.png" width = "300"  alt="" align=center />


* factory

    <img src="images/factory.png" width = "300"  alt="" align=center />

## Usage

```js
this.$loading.show()

this.$loading.hide()
```

```js
import {getCurrentInstance, ref} from 'vue'
const {proxy} = getCurrentInstance()
proxy.$loading.show()
proxy.$loading.hide()
```
