const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker();

broker.createService({
  name: 'math',
  actions: {
    add(ctx) {
      return Number(ctx.params.num1) + Number(ctx.params.num2);
    }
  }
});

broker
  .start()
  .then(() => {
    broker.repl();
  });