"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hotel_1 = __importDefault(require("./hotel"));
function bookHotel(hotelName, userName, userContact) {
    const hotel = hotel_1.default.find(h => h.name === hotelName);
    if (!hotel) {
        return `Hotel with name ${hotelName} not found.`;
    }
    const booking = {
        hotelName: hotel.name,
        userName: userName,
        userContact: userContact,
        bookingDate: new Date()
    };
    // Here you can add the booking to a bookings array or database
    // For simplicity, we will just return a confirmation message
    return `Booking confirmed for ${userName} at ${hotel.name} on ${booking.bookingDate.toDateString()}.`;
}
// Example usage:
const confirmationMessage = bookHotel("Hotel 1", "John Doe", "john.doe@example.com");
console.log(confirmationMessage);
