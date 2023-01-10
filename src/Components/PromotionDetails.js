import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PromotionDetailAction } from "../Redux/Actions/PromotionDetail.action";
import { useEffect } from "react";
import BackIcon from "../Assest/BackIcon";

function PromotionDetails() {
    const dispatch = useDispatch();
    let PromotionDetail = useSelector(
        (state) => state.PromotionDetails.promotionDetail
    );

    const getPromotionDetail = () => {
        dispatch(PromotionDetailAction.getAll());
    };
    useEffect(() => {
        getPromotionDetail();
    }, []);

    const iframe = (detail) => {
        return { __html: detail };
    };

    const nowDate = new Date();
    const endDate = new Date(PromotionDetail.EndDate);
    const diffTime = Math.abs(endDate - nowDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return (
        <div className="container">
            <div className="row">
                <div className="container-image p-0">
                    <img
                        src={PromotionDetail.ImageUrl}
                        className="card-img-top Promo-Detail-img"
                        alt="..."
                    />
                    <BackIcon />
                    <div className="brand-icon-container">
                        <img
                            className="brand-icon"
                            src="https://prod-extrazone-document-bucket.s3-eu-west-1.amazonaws.com/brand/tr/95159ee8-048c-4e33-8148-a3d1e20bbe74/tr/desktop/95159ee8-048c-4e33-8148-a3d1e20bbe74.png"
                            alt=""
                        />
                    </div>
                    <div className="promotion-date">
                        {diffDays > 0 ? (
                            `son ${diffDays} gün`
                        ) : (
                            <small>Süresi Doldu</small>
                        )}
                    </div>
                </div>
                <div className="card border border-0">
                    <div className="card-body p-0">
                        <div className="card-title">
                            <div
                                className="promotion-title"
                                dangerouslySetInnerHTML={iframe(
                                    PromotionDetail.Title
                                )}
                            />
                        </div>
                        <p className="card-text">
                            <div
                                className="Promotion-Description"
                                dangerouslySetInnerHTML={iframe(
                                    PromotionDetail.Description
                                )}
                            />
                        </p>
                        <div className="btn-container p-0">
                            <button className="btn promotion-btn p-3">
                                <div
                                    className="Promotion-Description p-0"
                                    dangerouslySetInnerHTML={iframe(
                                        PromotionDetail.BrandPromotionCardParticipationText
                                    )}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PromotionDetails;
