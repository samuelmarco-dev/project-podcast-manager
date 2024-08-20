import { dataEpisodes } from '../repositories/podcastRepository.js';
import Episode from '../schemas/episodeSchema.js';

async function listEpisodes(): Promise<Episode[]> {
    return await dataEpisodes();
}

async function filterEpisodes(podcastName: string): Promise<Episode[]> {
    if (!podcastName) return [];
    else {
        const data = await dataEpisodes();
        const lowerCaseName = podcastName.toLocaleLowerCase();

        return data.filter((episode) =>
            episode.podcast.toLocaleLowerCase().includes(lowerCaseName)
        );
    }
}

export { listEpisodes, filterEpisodes };
