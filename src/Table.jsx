import  { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function TableBookings() {
    const [tableno, setTableno] = useState("");
    const [name, setName] = useState("");
    const [bookingdate, setBookingdate] = useState("");
    const [bookingtime, setBookingtime] = useState("");
    const Navigate=useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://127.0.0.1:3001/tableBookings', {
            tableno: tableno,
            name: name,
            bookingdate: bookingdate,
            bookingtime: bookingtime
        })
        .then(res =>{ console.log(res)
            Navigate('/tablebookinglist')})
        .catch(err => console.log(err));
    };

    return (
        <div className="mt-5 mx-5">
            <div className="row justify-content-center">
                <div className="col-md-4 bg-white border p-4 rounded shadow">
                    <h2 className="text-center mb-4">Table Booking Form</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="number" className="form-control" name="tableno" placeholder="Table No" 
                            value={tableno} onChange={(e) => setTableno(e.target.value)} />
                        </div><br/>
                        <div className="form-group">
                            <input type="text" className="form-control" name="name" placeholder="Name" 
                            value={name} onChange={(e) => setName(e.target.value)} />
                        </div><br/>
                        <div className="form-group">
                            <input type="date" className="form-control" name="bookingdate" placeholder="Booking Date" 
                            value={bookingdate} onChange={(e) => setBookingdate(e.target.value)} />
                        </div><br/>
                        <div className="form-group">
                            <input type="time" className="form-control" name="bookingtime" placeholder="Booking Time" 
                            value={bookingtime} onChange={(e) => setBookingtime(e.target.value)} />
                        </div><br/>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TableBookings;
