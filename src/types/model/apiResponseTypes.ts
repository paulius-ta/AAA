import {ArtifactAttribute} from '@customTypes/model/apiTypes.ts';

export interface AuctionItemResponse {
  id: number;
  minPrice: number;
  currentPrice: number;
  startTimestamp: string;
  endTimestamp: string;
  status: string;
}

export interface DescriptionResponse {
  id: number;
  auctionItemId: number;
  details: {
    origin: string[];
    number: number;
    condition: string;
    dimensions: number[];
    attributes: ArtifactAttribute[];
  };
}
