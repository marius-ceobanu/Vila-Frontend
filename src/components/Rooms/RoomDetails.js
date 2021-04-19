import React from "react";

function RoomDetails(props) {
    const roomId = props.match.params.id;
    return(
        <div>Details for {roomId}</div>
    );
}
export default RoomDetails;