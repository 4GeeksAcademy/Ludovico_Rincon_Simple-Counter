import React from "react";
const SecondsCounter = (props) => {
    return (
        <div
            className="rounded display-2 d-flex align-items-center justify-content-center mx-2 digit">
            {props.seconds}
        </div>
    );
}

export default SecondsCounter;
