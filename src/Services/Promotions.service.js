import axios from "axios";

const config = {
    headers: {
        "X-Country-Id": "TR",
        "X-Language-Id": "TR"
    }
};

export const PromotiongetAll = async () => {
    return await axios
        .get("https://api.extrazone.com/promotions/list?Channel=PWA", config)
        .then((response) => {
            return response.data;
        });
};
