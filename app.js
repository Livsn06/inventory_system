const express = require('express');
const app = express();
const router = require('./routers/route');
const methodOverride = require('method-override')



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use("/api" ,router.apiRouter);
app.use("/" ,router.viewsRouter);



app.listen(3000, () => {
    console.log('Server is running.. http://localhost:3000');
});


