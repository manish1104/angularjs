import { TrackDetails } from '../services/TrackDetails';

export interface ItunesSearchResponse{
    resultCount: number;
    results: TrackDetails[];
}

