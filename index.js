const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { EmployeeModel, TableModel1 } = require('./model/model');

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/employee", { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success");
                } else {
                    res.json("incorrect password");
                }
            } else {
                res.json("user not found");
            }
        })
        .catch(err => {
            console.error("Error finding user:", err);
            res.status(500).json({ error: "Internal server error" });
        });
});

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employee => res.json(employee))
        .catch(err => {
            console.error("Error creating employee:", err);
            res.status(500).json({ error: "Internal server error" });
        });
});


app.post('/tableBookings', (req, res) => {
    TableModel1.create(req.body)
        .then(tablebooking => res.json(tablebooking))
        .catch(err => {
            console.error("Error creating table booking:", err);
            res.status(500).json({ error: "Internal server error" });
        });
});

app.get("/tableBookings", async (req, res) => {
    try {
        const tableBookings = await TableModel1.find({});
        res.json(tableBookings);
    } catch (error) {
        console.error("Error retrieving table bookings:", error);
        res.status(500).json({ error: "Error retrieving table bookings" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
