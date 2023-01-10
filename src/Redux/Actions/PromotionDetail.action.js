import { PromotionDetailConstants } from "../Constants/PromotionDetail.constants";
import { PromotiongetAll } from "../../Services/Promotions.service";
import { PromotionDetailgetAll } from "../../Services/PromotionDetail.service";

export const PromotionDetailAction = {
    getAll
};

function getAll() {
    function success(response) {
        return {
            type: PromotionDetailConstants.GET_PROMOTION_DETAİL_SUCCESS,
            payload: response
        };
    }
    return (dispatch) => {
        PromotiongetAll()
            .then((response) => PromotionDetailgetAll(response[0].Id))
            .then((response) => dispatch(success(response)));
    };
}
