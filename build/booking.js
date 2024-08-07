"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const hotel_1 = __importStar(require("./hotel"));
// adding new hotels to the list
const addHotelMessage = (0, hotel_1.addHotel)("ibis hotel", "hosur road, koramangala", 4, 5250, 10);
console.log(addHotelMessage);
const bookings = [];
function bookHotel(hotelName, userName, userContact, roomsNeeded) {
    const hotel = hotel_1.default.find(h => h.name === hotelName);
    if (!hotel) {
        return `Hotel with name ${hotelName} not found.`;
    }
    else if (hotel.nofAvailableRooms < roomsNeeded) {
        return `Not enough rooms available at ${hotelName}. Only ${hotel.nofAvailableRooms} rooms are available.`;
    }
    else {
        const booking = {
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
function showAvailableHotels() {
    return hotel_1.default
        .filter(hotel => hotel.nofAvailableRooms > 0)
        .map(hotel => `${hotel.name}: ${hotel.nofAvailableRooms} rooms available`)
        .join('\n');
}
// Example usage:
console.log(showAvailableHotels());
