export default class Dep {
  constructor() {
    this.subs = []
  } 

  addSub(watcher) {
    this.subs.push(watcher)
  }

  depend() {
    Dep.target.addDep(this)
  }

  notify() {
    const subs = this.subs
    for (let i = 0; i < subs.length; i++) {
      subs[i].update()
    }
  }

}


Dep.target = null