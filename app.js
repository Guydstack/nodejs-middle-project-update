const express = require("express");
const app = express();
const path = require("path");


//מוסיף מאפיין של cookie לבקשת HTTP
const cookieParser = require('cookie-parser');
//יצרנו אינטרקציה עם מודול שמטפל במשתנים סביבתיים
require('dotenv').config();
//מודול שדואג שכל בקשה שתשלח אל השרת תתקבל
const cors = require('cors');
//מייבא את הקובץ קונפגיורציה של המסד נתונים
const db = require('./db/mongoose');
db();
//ייבאנו את הראוטרים שמטפלים בבקשות שנשלחות אל השרת
const clients_router = require("./routes/clients");
const dishes_router = require("./routes/dishes");
const workers_router = require("./routes/workers");
const events_router = require("./routes/events");
const orders_router = require("./routes/orders");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "public/uploads")));
app.use(cookieParser());
//העברנו את הבקשה במידל וואר שמטפל בבקשות מהשרת
app.use('/clients',clients_router);
app.use('/dishes',dishes_router);
app.use('/events',events_router);
app.use('/workers',workers_router);
app.use('/orders',orders_router);


//ENV - ניגשנו אל משתנה סביבתי
const port = process.env.PORT;

app.listen(port,() => console.log(`server is running on port ${port}`))