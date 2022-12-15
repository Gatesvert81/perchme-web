import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Image, Page, PageHead } from "../../src/Components";
import { Details } from "../../src/Features/dorms/components";

const room = {
  title: "Nice Sabarh room",
  description:
    "I am happy uef  hg bviagra baieuga v oeaurg voeaig auva aoi anuovha aeorn ao asou aoisdh a;rndo aprnaosd ;aoa sohfalsiuf a;ufb",
  hall_name: "Sarbah hall",
  negotiable: "negotiable",
  price: "1,000",
  essentials: ["fridge", "Fan", "Waredrop", "Study table"],
  occupant_type: "Perch",
  number_of_occupants: 1,
  date_submitted: "11th January 2023",
};
function Room() {
  const [roomData, setRoomData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getRooms = async () => {
      const response = await fetch(
        `http://localhost:1337/api/rooms/${router.query?.room_id}`,
        {
          method: "GET",
        }
      )
        .then((response) => response.text())
        .then((result) => {
          return result;
        });
      // const data = await response.json();
      console.log(JSON.parse(response));
      const results = JSON.parse(response);
      setRoomData(results?.data?.attributes);
    };

    getRooms();
  }, []);

  return (
    <Page style="pt-14">
      <PageHead title="Perchers | Hostels and Halls">
        Perch or Rent a room
      </PageHead>

      <main className="flex flex-col gap-3">
        <div className="w-full flex flex-col justify-between ">
          <div className="flex gap-3">
            <p>
              {/* <AnchorLink route=""> */}
              Listing
              {/* </AnchorLink> */}
            </p>
            <p className="room__sub__navigation__arrow">{`>`}</p>
            <p>{roomData?.title}</p>
          </div>
          <div className="w-full flex justify-between">
            <Button
              style="icon"
              // click={() => handleShare()}
              icon="/icons/share.png"
            />
            <Button style="icon" icon="/icons/heart.png" />
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full">
            <div className="w-full h-60">
              <Image
                src="/images/pic.jpg"
                alt="Room pic"
                boxStyle="w-full h-full"
              />
            </div>
            <div className="">
              <div className="flex justify-between">
                <h5 className="main__head">{roomData?.hall_name}</h5>
                <div>
                  <p className="head">{`${roomData?.negotiable}  `}</p>
                  <p className="head">{`GH¢${roomData?.price?.toString()}`}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Button
                  style="tetiary-btn"
                  // click={() => handleOffer()}
                >
                  Make an Offer
                </Button>
                <Button
                  style="primary-btn"
                  // click={() => handleOffer()}
                >
                  Apply
                </Button>
              </div>
              <Details room={room} />
            </div>
          </div>
          <div className="room__sub">
            {/* <ProfileCard name={host?.user_name} title="Host">
              <Button name="secondary" click={() => handleViewProfile()}>
                View Profile
              </Button>
            </ProfileCard> */}
          </div>
        </div>
      </main>
    </Page>
  );
}

export default Room;
