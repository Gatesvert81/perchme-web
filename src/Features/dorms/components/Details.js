import React from 'react';

const Section = ({ title, children }) => (
  <div className="">
    <h6 className="capitalize">{title}</h6>
    <p className="font-normal">{children}</p>
  </div>
);

function Details({ room }) {
  return (
    <div className="w-full h-fit flex flex-col gap-2">
      <h5>Details</h5>
      <div className="details__main__section">
        <Section title="Description">{room?.description}</Section>
        <Section title="Essentials">
          {room?.essentials?.map((essential) => (
            <span className="px-5" key={essential}>
              {essential}
            </span>
          ))}
        </Section>
        <Section title="Occupant type">{room?.occupant_type}</Section>
        <Section title="Number of Occupants">
          {room?.number_of_occupants}
        </Section>
        <Section title="Date Posted">{room?.date_submitted}</Section>
      </div>
    </div>
  );
}

export default Details;
