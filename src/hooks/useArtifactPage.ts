import useFetchAuctionItem from '@hooks/api/useFetchAuctionItem.ts';
import useFetchDescription from '@hooks/api/useFetchDescription.ts';

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

  return {
    auctionItemData,
    descriptionData,
    isError: isErrorAuctionItem || isErrorDescription,
    isLoading: isLoadingAuctionItem || isLoadingDescription,
  };
};

export default useArtifactPage;
