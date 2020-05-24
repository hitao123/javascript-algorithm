class EventEmitter {
  constructor() {
    this.events = this.events || new Map();
  }

  on(type, func) {
    if (!this.events.get(type)) {
      this.events.set(type, func);
    }
  }

  emit(type) {
    const handler = this.events.get(type);
    // eslint-disable-next-line prefer-rest-params
    handler.apply(this, [...arguments].slice(1));
  }
}

const emitter = new EventEmitter();

emitter.on('age', (age) => {
  // eslint-disable-next-line no-console
  console.log(age);
});

emitter.emit('age', 26);

