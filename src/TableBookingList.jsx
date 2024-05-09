import  { useState, useEffect } from 'react';
import axios from 'axios';

function TableBookingList() {
  const [tableBookings, setTableBookings] = useState([]);

  useEffect(() => {
    const fetchTableBookings = async () => {
      try {
        const response = await axios.get('/tableBookings1');
        console.log('Response:', response.data); // Debug log
        setTableBookings(response.data);
      } catch (error) {
        console.error('Error fetching table bookings:', error);
      }
    };

    fetchTableBookings();
  }, []);

  return (
    <div>
      <h1>Table Booking List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Table No.</th>
            <th>Name</th>
            <th>Booking Date</th>
            <th>Booking Time</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(tableBookings) && tableBookings.map((booking) => (
            <tr key={booking._id}>
              <td>{booking.tableno}</td>
              <td>{booking.name}</td>
              <td>{new Date(booking.bookingdate).toLocaleDateString()}</td>
              <td>{booking.bookingtime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableBookingList;
