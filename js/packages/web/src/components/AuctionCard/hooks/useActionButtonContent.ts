import { AuctionView } from '../../../hooks';
import { useInstantSaleState } from './useInstantSaleState';

export const useActionButtonContent = (auctionView: AuctionView): string => {
  const {
    isInstantSale,
    canClaimItem,
    canClaimPurchasedItem,
    canEndInstantSale,
  } = useInstantSaleState(auctionView);
 
console.log("STAUTSSSSSSS");
 if (typeof window != "undefined"  && typeof window.top != "undefined") { // needed if SSR
    let lab = "Buy now";
    if (!isInstantSale) {
      lab = 'Place Bid';
    }

    if (canClaimPurchasedItem) {
      lab= 'Claim Purchase';
    }

    if (canClaimItem) {
      lab = 'Claim item';
    }

    if (canEndInstantSale) {
      lab = 'End sale & claim item';
    } 

    //console.log("LAB = " + lab);
    window?.top?.postMessage('mk.metacity.game'+lab, "*"); 
  }

  if (!isInstantSale) {
    return 'Place Bid';
  }

  if (canClaimPurchasedItem) {
    return 'Claim Purchase';
  }

  if (canClaimItem) {
    return 'Claim item';
  }

  if (canEndInstantSale) {
    return 'End sale & claim item';
  }

  return 'Buy now';
};
