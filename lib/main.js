import {createApp} from "vue"
import loading from './Loading.vue'

function Install(App, options = {}) {
  const property = options.property || '$loading'
  delete options.property
  const div = document.createElement('div')
  document.body.appendChild(div)
  let vm = createApp(loading, options);
  let mount = vm.mount(div);
  App.config.globalProperties[property] = {
    show:function () {
      mount.$data.isShow = true;
    },
    hide:function () {
      mount.$data.isShow = false;
    }
  };
  App.config.globalProperties[property].options = options || {}
}

export default Install

