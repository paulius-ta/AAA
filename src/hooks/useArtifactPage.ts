import useFetchAuctionItem from '@hooks/api/useFetchAuctionItem.ts';
import useFetchDescription from '@hooks/api/useFetchDescription.ts';
import useFetchHistory from '@hooks/api/useFetchHistory.ts';

const useArtifactPage = () => {
  const {
    data: auctionItemData,
    isError: isErrorAuctionItem,
    isLoading: isLoadingAuctionItem,
  } = useFetchAuctionItem();

  const {
    data: descriptionData,
    isError: isErrorDescription,
    isLoading: isLoadingDescription,
  } = useFetchDescription();

  const {
    data: historyData,
    isError: isErrorHistory,
    isLoading: isLoadingHistory,
  } = useFetchHistory();

  return {
    auctionItemData,
    descriptionData,
    historyData,
    isError: isErrorAuctionItem || isErrorDescription || isErrorHistory,
    isLoading: isLoadingAuctionItem || isLoadingDescription || isLoadingHistory,
  };
};

export default useArtifactPage;
