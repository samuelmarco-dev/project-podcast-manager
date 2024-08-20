import fs from 'fs';
import path from 'path';
import Episode from '../schemas/episodeSchema.js';

const pathData = path.join(__dirname, '../repositories/episodes.json');

async function dataEpisodes(): Promise<Episode[]> {
    const rawData = fs.readFileSync(pathData, 'utf-8');
    const jsonFile = JSON.parse(rawData);

    return jsonFile;
}

export { dataEpisodes };
