import axios from "axios";

const config = {
    headers: {
        "X-Country-Id": "TR",
        "X-Language-Id": "TR"
    }
};
export const PromotionDetailgetAll = async (id) => {
    return await axios
        .get(`https://api.extrazone.com/promotions?Id=${id}`, config)
        .then((response) => {
            return response.data;
        });
};
