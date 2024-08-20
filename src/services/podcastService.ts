import { dataEpisodes } from '../repositories/podcastRepository.js';
import FilterEpisode from '../schemas/filterEpisodeSchema.js';
import { StatusCode } from '../utils/statusCode.js';

async function listEpisodes(): Promise<FilterEpisode> {
    const data = await dataEpisodes();

    return {
        status: data.length ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    };
}

async function filterEpisodes(podcastName: string): Promise<FilterEpisode> {
    if (!podcastName)
        return {
            status: StatusCode.NO_CONTENT,
            body: [],
        };
    else {
        const data = await dataEpisodes();
        const lowerCaseName = podcastName.toLocaleLowerCase();
        const filteredPodcast = data.filter((episode) =>
            episode.podcast.toLocaleLowerCase().includes(lowerCaseName)
        );

        return {
            status: filteredPodcast.length
                ? StatusCode.OK
                : StatusCode.NO_CONTENT,
            body: filteredPodcast,
        };
    }
}

export { listEpisodes, filterEpisodes };
