import React from "react";
import { AnchorLink, Button, Card, Image } from "../../../Components";

function RoomCard({ room, id }) {
  // const room = {
  //   id: "room1",
  //   university_name: "University of Ghana",
  //   hall_name: "Sarbah hall",
  //   price: "1,000",
  // };
  console.log(room);
  return (
    <AnchorLink route={`/rooms/${room?.university}room?room_id=${id}`}>
      <Card style="flex flex-col rounded-md overflow-hidden shadow-md shadow-light-gray">
        <div className="flex-2 h-48">
          <Image
            src="/images/pic.jpg"
            boxStyle="w-full h-full"
            alt="room pic"
          />
        </div>
        <div className="flex-1.5 flex-col">
          <div className="flex flex-col p-3">
            <p className="small-text">{room?.university}</p>
            <h5 className="list__card__text">{room?.hall_name}</h5>
          </div>
          <div className="w-full border-t-2 border-light-gray flex justify-between items-center px-3 py-1">
            <p className="list__card__price">{`GH¢${room?.price?.toString()}`}</p>
            <div>
              <Button style="text-link">View Detail</Button>
            </div>
          </div>
        </div>
      </Card>
    </AnchorLink>
  );
}

export default RoomCard;
