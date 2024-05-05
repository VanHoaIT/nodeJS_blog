const path = require('path');
const express = require('express'); //
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
//cấu hình thêm static file
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//http logger
// app.use(morgan('combined'))

//template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs', //đổi đuôi file handlebars thành .hbs
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// khi khởi động server sẽ vào app chuyển đến các file trong routes
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
