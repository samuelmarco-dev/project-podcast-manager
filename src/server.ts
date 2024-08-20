import { createServer, IncomingMessage, ServerResponse } from 'http';
import { getListEpisodes } from './controllers/podcastController.js';

const server = createServer(
    async (req: IncomingMessage, res: ServerResponse) => {
        if (req.method === 'GET') {
            await getListEpisodes(req, res);
        }
    }
);

const defaultPort = 5000;
const port = Number(process.env.PORT) || defaultPort;

server.listen(port, () => console.log(`Server running on port ${port}`));
