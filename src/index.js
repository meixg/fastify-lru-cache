const fp = require('fastify-plugin')
const LRU = require('lru-cache')

function plugin(fastify, options) {
    const instance = options.instance || 'cache'

    delete options.instance

    const cache = new LRU(options)

    fastify.decorate(instance, cache)

    return Promise.resolve()

}

module.exports = fp(plugin)