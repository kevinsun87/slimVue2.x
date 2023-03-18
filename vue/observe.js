import Dep from './dep.js'


class Observer {

  constructor (value) {
    this.value = value
    this.walk(value)
  }

  walk(obj) {

    let keys = Object.keys(obj)

    for (let i=0; i<keys.length; i++) {
      defineReactive(obj, keys[i])
    }

  }

}


export function observe (value) {

  if (!value || typeof value !== 'object') {
    return
  }
  
  new Observer(value)


}


function defineReactive (obj, key) {

  let val = obj[key]

  const dep = new Dep()

  let ob = observe(val)
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function getterReactive() {
      let value = val
      if (Dep.target) {
        dep.depend()
      }
      return value
    },
    set: function setterReactive(newVal) {

      let value = newVal

      ob = value

      val = value

      dep.notify()

    },
  })


}