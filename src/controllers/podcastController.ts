import { IncomingMessage, ServerResponse } from 'http';
import { listEpisodes, filterEpisodes } from '../services/podcastService.js';
import { StatusCode } from '../utils/statusCode.js';
import { ContentType } from '../utils/contentType.js';

async function getListEpisodes(req: IncomingMessage, res: ServerResponse) {
    const content = await listEpisodes();

    res.writeHead(StatusCode.OK, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content));
}

async function getFilterEpisodes(
    req: IncomingMessage,
    res: ServerResponse,
    queryString: string
) {
    const content = await filterEpisodes(queryString.split('=')[1] || '');

    res.writeHead(StatusCode.OK, { 'Content-Type': ContentType.JSON });
    res.end(JSON.stringify(content));
}

export { getListEpisodes, getFilterEpisodes };
