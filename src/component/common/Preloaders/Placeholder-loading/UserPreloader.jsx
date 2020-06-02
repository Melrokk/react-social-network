import React from "react";
import "./UserPreloader.scss"

const UserPreloader = () => {

    let userPreloaderItem = [1, 2, 3, 4];

    return (
        userPreloaderItem.map(u =>
            <div className="ph-item">
                <div className="ph-col-2">
                    <div className="ph-avatar"> </div>
                </div>
                <div>
                    <div className="ph-row">
                        <div className="ph-col-6"> </div>
                        <div className="ph-col-2 empty"> </div>
                        <div className="ph-col-4"> </div>
                        <div className="ph-col-4"> </div>
                        <div className="ph-col-6 empty"> </div>
                        <div className="ph-col-2"> </div>
                        <div className="ph-col-2"> </div>
                        <div className="ph-col-10 empty"> </div>
                    </div>
                </div>
            </div>
        )

    )
};

export default UserPreloader;