import { customRoutes } from './custom-routes';

const jsonServer = require('json-server');
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

// setup middleware
server.use(middlewares);
server.use(jsonServer.bodyParser);

// setup custom routes
customRoutes(server);

// start the server
server.listen(process.env.STUB_PORT, () => console.log(`Starting module-federation-mfe stub server on ${process.env.STUB_PORT}`));
