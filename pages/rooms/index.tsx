import React, { useEffect, useState } from "react";
import { Page, PageHead } from "../../src/Components";
import { RoomCard } from "../../src/Features/dorms/components";

function Index() {
  const [roomsData, setRoomsData] = useState([]);

  useEffect(() => {
    const getRooms = async () => {
      const response = await fetch("http://localhost:1337/api/rooms", {
        method: "GET",
      })
        .then((response) => response.text())
        .then((result) => {
          return result;
        });
      // const data = await response.json();
      console.log(JSON.parse(response));
      const results = JSON.parse(response);
      setRoomsData(results?.data);
    };

    getRooms();
  }, []);

  return (
    <Page style="py-16">
      <PageHead title="Perchers | Hostels and Halls">
        Select from available rooms
      </PageHead>

      {/* Display dorm lists  */}
      <main className="space-y-5 relative px-0">
        <h4 className=" w-full h-fit sticky top-12 z-30 bg-white px-5">
          Availabe Dormetories
        </h4>
        <div className="space-y-3 px-5">
          {roomsData.map((room, roomIndex) => (
            <RoomCard room={room?.attributes} id={room?.id} />
          ))}
        </div>
      </main>
    </Page>
  );
}

export default Index;
