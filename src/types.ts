export interface RoomData {
  id: number;
  attributes: RoomDataType;
}

export type RoomDataType = {
  university: string;
  room_type: string;
  gender: string;
  number_of_occupants: number;
  description: string | null;
  price: number;
  negotiable: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  occupant_type: string;
};
