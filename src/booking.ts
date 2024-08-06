import hotels from "./hotel";


interface Booking {
    hotelName: string;
    userName: string;
    userContact: string;
    bookingDate: Date;
}

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

    // Here you can add the booking to a bookings array or database
    // For simplicity, we will just return a confirmation message

    return `Booking confirmed for ${userName} at ${hotel.name} on ${booking.bookingDate.toDateString()}.`;
}

// Example usage:
const confirmationMessage = bookHotel("Hotel 1", "John Doe", "john.doe@example.com");
console.log(confirmationMessage);
