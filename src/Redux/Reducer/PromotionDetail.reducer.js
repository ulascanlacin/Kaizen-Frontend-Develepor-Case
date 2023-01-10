import { PromotionDetailConstants } from "../Constants/PromotionDetail.constants";

const initialState = { promotionDetail: [] };

export function PromotionDetails(state = initialState, action) {
    switch (action.type) {
        case PromotionDetailConstants.GET_PROMOTION_DETAİL_SUCCESS:
            return {
                promotionDetail: action.payload
            };

        default:
            return state;
    }
}
