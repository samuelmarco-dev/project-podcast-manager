import { dataEpisodes } from '../repositories/podcastRepository.js';
import Episode from '../schemas/episodeSchema.js';
import FilterEpisode from '../schemas/filterEpisodeSchema.js';
import { StatusCode } from '../utils/statusCode.js';

async function listEpisodes(): Promise<Episode[]> {
    return await dataEpisodes();
}

async function filterEpisodes(podcastName: string): Promise<FilterEpisode> {
    if (!podcastName)
        return {
            status: StatusCode.NO_CONTENT,
            data: [],
        };
    else {
        const data = await dataEpisodes();
        const lowerCaseName = podcastName.toLocaleLowerCase();
        const filteredPodcast = data.filter((episode) =>
            episode.podcast.toLocaleLowerCase().includes(lowerCaseName)
        );

        return {
            status: filteredPodcast.length ? StatusCode.OK : StatusCode.NO_CONTENT,
            data: filteredPodcast,
        };
    }
}

export { listEpisodes, filterEpisodes };
