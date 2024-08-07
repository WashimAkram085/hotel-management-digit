"use strict";
// hotel.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHotel = addHotel;
;
const hotels = [
    {
        name: "Hotel 1",
        location: "Location 1",
        rating: 4,
        price: 200
    },
    {
        name: "Hotel 2",
        location: "Location 2",
        rating: 3,
        price: 150
    },
    {
        name: "Hotel 3",
        location: "Location 3",
        rating: 5,
        price: 400
    }
];
// adding new hotels to the list
function addHotel(name, location, rating, price) {
    const newHotel = { name, location, rating, price };
    hotels.push(newHotel);
    return `Hotel ${name} added successfully.`;
}
exports.default = hotels;
