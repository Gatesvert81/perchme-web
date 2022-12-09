import React from "react";
import { Page, PageHead } from "../../src/Components";
import { RoomCard } from "../../src/Features/dorms/components";

function Index() {
  return (
    <Page style="py-16">
      <PageHead title="Perchers | Hostels and Halls">
        Select from available rooms
      </PageHead>

      {/* Display dorm lists  */}
      <main className="space-y-5 relative px-0">
        <h4 className=" w-full h-fit sticky top-12 z-30 bg-white px-5" >Availabe Dormetories</h4>
        <div className="space-y-3 px-5">
          {[1, 2, 3, 4, 5, 6].map((room, roomIndex) => (
            <RoomCard room={room} key={roomIndex} />
          ))}
        </div>
      </main>
    </Page>
  );
}

export default Index;
