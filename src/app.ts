import { IncomingMessage, ServerResponse } from 'http';
import {
    getListEpisodes,
    getFilterEpisodes,
} from './controllers/podcastController.js';
import { Routes } from './routes/podcastRouter.js';
import { HttpMethod } from './utils/httpMethod.js';

export const app = async (req: IncomingMessage, res: ServerResponse) => {
    const [baseURL, queryString] = req.url?.includes('?')
        ? req.url.split('?')
        : [req.url, ''];

    if (req.method === HttpMethod.GET && baseURL === Routes.LIST)
        await getListEpisodes(req, res);
    if (req.method === HttpMethod.GET && baseURL === Routes.EPISODE)
        await getFilterEpisodes(req, res, queryString);
};
