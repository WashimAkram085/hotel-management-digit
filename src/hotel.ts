// hotel.ts

interface Hotel {
    name: string;
    location: string;
    rating: number;
    price: number;
};

const hotels: Hotel[] = [
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

export function addHotel(name: string, location: string, rating: number, price: number): string {
    const newHotel: Hotel = { name, location, rating, price };
    hotels.push(newHotel);
    return `Hotel ${name} added successfully.`;
}

export default hotels;