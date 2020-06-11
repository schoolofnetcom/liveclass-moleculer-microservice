module.exports = {
  name: 'fat',
  actions: {
    imc(ctx) {
      return Number(ctx.params.peso) / (Number(ctx.params.altura * ctx.params.altura));
    },
    iac(ctx) {
      return Number(ctx.params.cintura) / (Number(Math.pow(ctx.params.altura, 1.5))) - 18;
    },
    calc: {
      rest: {
        method: 'POST',
        path: '/calc'
        //POST localhost:3000/api/fat/calc
      },
      async handler(ctx) {
        const imc = await ctx.call('fat.imc', { peso: ctx.params.peso, altura: ctx.params.altura });
        const iac = await ctx.call('fat.iac', { cintura: ctx.params.cintura, altura: ctx.params.altura });
        return { imc, iac };
      }
    }
  }
}