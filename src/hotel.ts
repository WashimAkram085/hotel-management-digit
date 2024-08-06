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

export default hotels;