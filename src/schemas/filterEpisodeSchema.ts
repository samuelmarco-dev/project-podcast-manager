import { StatusCode } from '../utils/statusCode.js';
import Episode from './episodeSchema.js';

interface FilterEpisode {
    status: StatusCode;
    data: Episode[];
}

export default FilterEpisode;