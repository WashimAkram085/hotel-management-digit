import hotels,{addHotel} from "./hotel";

// adding new hotels to the list
const addHotelMessage = addHotel("ibis hotel", "hosur road, koramangala", 4, 5250);
console.log(addHotelMessage);

// booking information

interface Booking {
    hotelName: string;
    userName: string;
    userContact: string;
    bookingDate: Date;
}

const bookings: Booking[] = [];

function bookHotel(hotelName: string, userName: string, userContact: string): string {
    const hotel = hotels.find(h => h.name === hotelName);
    if (!hotel) {
        return `Hotel with name ${hotelName} not found.`;
    }

    const booking: Booking = {
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

function showAvailableHotels(): string {
    if (hotels.length === 0) {
        return "No hotels available for booking.";
    }

    const bookedHotelNames = bookings.map(booking => booking.hotelName);
    const availableHotels = hotels.filter(hotel => !bookedHotelNames.includes(hotel.name))
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
