import Dep from './dep.js'

export default class Watcher {

  constructor(vm, expOrFn, cb) {
    this.value = ''
    this.vm = vm
    this.getter = expOrFn
    this.cb = cb

    this.get()
  }

  addDep(dep) {
    dep.addSub(this)
  }

  get() {

    Dep.target = this

    this.value = this.vm[this.getter]

    Dep.target = null

  }

  run() {
    this.value = this.vm[this.getter]
    this.cb(this.value)
  }

  update() {
    this.run()
    console.log('更新')
  }


}