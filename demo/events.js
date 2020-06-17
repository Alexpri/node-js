const EventEmmiter = require('events')

// const emmiter = new EventEmmiter()

// emmiter.on('anything', data => {
//   console.log('on: anything', data);
// })
//
// emmiter.emit('anything', {a: 1})
// emmiter.emit('anything', {b: 2})
//
//
// setTimeout(()=> {
//   emmiter.emit('anything', {c: 3})
// }, 1500)


class Dispatcher extends EventEmmiter {
  subscribe(eventName, cb) {
    console.log('[Subscribe...]')
    this.on(eventName, cb)
  }
  dispatch(eventName, data) {
    console.log('[Dispatching...]')
    this.emit(eventName, data)
  }
}

const dispatch = new Dispatcher()

dispatch.subscribe('test', data => {
  console.log('on: test', data);
})

dispatch.dispatch('test', {aa: 22})
