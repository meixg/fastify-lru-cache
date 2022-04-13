# fastify-lru-cache

fastify plugin for lru cache

## install

```bash
npm install fastify-lru-cache
```

## Usage

```javascript
const fastify = require('fastify')()
const fastifyLRUCache = require('fastify-lru-cache')

fastify
    .register(fastifyLRUCache, {
      instance: 'lru',
      max: 500
    })
    .ready()

fastify.listen(3000, () => {
  console.log('> listening on port 3000')
})
```

- `instance`: *(optional)* the name of instance will be mapped to fastify, default is `cache`
- other lru-cache configurations, you can see [here](https://github.com/isaacs/node-lru-cache#options).

