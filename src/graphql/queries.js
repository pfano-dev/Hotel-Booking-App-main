/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      name
      checkIn
      checkOut
      totalDays
      totalprice
      showBooking
      dbooking
      showPayment
      bookingMsg
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        checkIn
        checkOut
        totalDays
        totalprice
        showBooking
        dbooking
        showPayment
        bookingMsg
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
