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
const addHotelMessage = (0, hotel_1.addHotel)("ibis hotel", "hosur road, koramangala", 4, 5250);
console.log(addHotelMessage);
const bookings = [];
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
    bookings.push(booking);
    return `Booking confirmed for ${userName} at ${hotel.name} on ${booking.bookingDate.toDateString()}.`;
}
// Example usage:
const confirmationMessage = bookHotel("Hotel 1", "John Doe", "john.doe@example.com");
console.log(confirmationMessage);
// available hotels
function showAvailableHotels() {
    if (hotel_1.default.length === 0) {
        return "No hotels available for booking.";
    }
    const bookedHotelNames = bookings.map(booking => booking.hotelName);
    const availableHotels = hotel_1.default.filter(hotel => !bookedHotelNames.includes(hotel.name))
        .map(hotel => {
        return `Name: ${hotel.name}, Location: ${hotel.location}, Rating: ${hotel.rating}, Price: $${hotel.price}`;
    }).join('\n');
    if (availableHotels.length === 0) {
        return "No hotels available for booking.";
    }
    return `Available Hotels:\n${availableHotels}`;
}
// Example usage:
console.log(showAvailableHotels());
// Example usage:
// const confirmationMessage = bookHotel("Hotel 1", "John Doe", "john.doe@example.com");
// console.log(confirmationMessage);
