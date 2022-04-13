const t = require('tap')
const test = t.test
const Fastify = require('fastify')
const fastifyLRUCache = require('../src/index')
const {resolve} = require('path')

test('fastify.cache should exist', t => {
    t.plan(2)

    const fastify = Fastify()

    fastify.register(fastifyLRUCache, {
        max: 500,
        maxSize: 5000
    })

    fastify.ready(err => {
        t.error(err)
        t.ok(fastify.cache)

        fastify.close()
    })
})

test('instance name should work', t => {
    t.plan(2)

    const fastify = Fastify()

    fastify.register(fastifyLRUCache, {
        instance: 'lru', // instance name
        max: 500,
        maxSize: 5000
    })

    fastify.ready(err => {
        t.error(err)
        t.ok(fastify.lru) // instance name

        fastify.close()
    })
})

test('lru-cache should work fine', t => {
    t.plan(4)

    const fastify = Fastify()

    fastify.register(fastifyLRUCache, {
        max: 10,
    })

    fastify.ready(err => {
        t.error(err)
        t.ok(fastify.cache)

        const cache = fastify.cache
        for (let i = 0; i < 20; i++) {
            cache.set(i, i);
        }

        t.ok(cache.get(10))
        t.notOk(cache.get(0))

        fastify.close()
    })
})
