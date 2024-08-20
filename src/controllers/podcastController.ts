import { IncomingMessage, ServerResponse } from 'http';
import { listEpisodes, filterEpisodes } from '../services/podcastService.js';
import { ContentType } from '../utils/contentType.js';

async function getListEpisodes(req: IncomingMessage, res: ServerResponse) {
    const content = await listEpisodes();

    res.writeHead(content.status, { 'Content-Type': ContentType.JSON });
    res.write(JSON.stringify(content.body));
    res.end();
}

async function getFilterEpisodes(
    req: IncomingMessage,
    res: ServerResponse,
    queryString: string
) {
    const content = await filterEpisodes(queryString.split('=')[1] || '');

    res.writeHead(content.status, { 'Content-Type': ContentType.JSON });
    res.write(JSON.stringify(content.body));
    res.end();
}

export { getListEpisodes, getFilterEpisodes };
