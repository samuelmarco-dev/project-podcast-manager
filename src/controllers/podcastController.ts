import { IncomingMessage, ServerResponse } from 'http';

import episode from '../schemas/episodeSchema.js';
import episodesData from '../data/episodes.js';

async function getListEpisodes(
    req: IncomingMessage,
    res: ServerResponse
): Promise<episode[]> {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(episodesData));

    return episodesData;
}

export { getListEpisodes };
