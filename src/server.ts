import { createServer } from 'http';
import { app } from './app.js';

const server = createServer(app);
const defaultPort = 5000;
const port = Number(process.env.PORT) || defaultPort;

server.listen(port, () => console.log(`Server running on port ${port}`));
