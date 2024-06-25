import useFetchAuctionItem from '@hooks/api/useFetchAuctionItem.ts';

const useAuctionItem = () => {
  const {
    data: auctionItemData,
    isError: isErrorAuctionItem,
    isLoading: isLoadingAuctionItem,
  } = useFetchAuctionItem();

  return {auctionItemData, isLoadingAuctionItem, isErrorAuctionItem};
};

export default useAuctionItem;
