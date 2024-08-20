import { StatusCode } from '../utils/statusCode.js';
import Episode from './episodeSchema.js';

// DTO
interface FilterEpisode {
    status: StatusCode;
    body: Episode[];
}

export default FilterEpisode;
