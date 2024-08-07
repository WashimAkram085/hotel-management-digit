import hotels, { addHotel } from "./hotel";

// adding new hotels to the list
const addHotelMessage = addHotel("ibis hotel", "hosur road, koramangala", 4, 5250, 10);
console.log(addHotelMessage);

// booking information

// booking.ts

interface Booking {
    hotelName: string;
    userName: string;
    userContact: string;
    bookingDate: Date;
    roomsBooked: number; // Add this property
}

const bookings: Booking[] = [];

function bookHotel(hotelName: string, userName: string, userContact: string, roomsNeeded: number): string {
    const hotel = hotels.find(h => h.name === hotelName);
    if (!hotel) {
        return `Hotel with name ${hotelName} not found.`;
    } else if (hotel.nofAvailableRooms < roomsNeeded) {
        return `Not enough rooms available at ${hotelName}. Only ${hotel.nofAvailableRooms} rooms are available.`;
    } else {
        const booking: Booking = {
            hotelName: hotel.name,
            userName: userName,
            userContact: userContact,
            bookingDate: new Date(),
            roomsBooked: roomsNeeded
        };

        hotel.nofAvailableRooms -= roomsNeeded; // Decrease the number of available rooms
        bookings.push(booking);

        return `Booking confirmed for ${userName} at ${hotel.name} for ${roomsNeeded} rooms on ${booking.bookingDate.toDateString()}.`;
    }
}

// Example usage:
const booking1 = bookHotel("Hotel 1", "John Doe", "john.doe@example.com", 3);
console.log(booking1);


const booking2 = bookHotel("ibis hotel", "Washim", "washim.doe@example.com", 5);
console.log(booking2);

// Available hotels with no of rooms
function showAvailableHotels(): string {
    return hotels
        .filter(hotel => hotel.nofAvailableRooms > 0)
        .map(hotel => `${hotel.name}: ${hotel.nofAvailableRooms} rooms available`)
        .join('\n');
}

// Example usage:
console.log(showAvailableHotels());