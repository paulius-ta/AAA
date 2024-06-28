import {Description} from '@customTypes/model/apiTypes.ts';

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
  details: Description;
}
