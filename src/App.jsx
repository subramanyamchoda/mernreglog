import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Signup from './signup';
import Login from './login'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './Home';
import Table from './Table';
import TableBookingList from './TableBookingList'; 

// Import the TableBookingList component

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tableBookings" element={<Table />} />
        {/* Add route for TableBookingList */}
        <Route path="/tableBookingList" element={<TableBookingList />} />
        
      </Routes> 
    </Router>
  );
}

export default App;
