const express = require('express');
const mysql = require('mysql2');
const multer = require('multer');
const app = express();
// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public'); // Directory to save uploaded files
    },
    filename: (req, file, cb) => {
    cb(null, file.originalname);
    
    }
});
const upload = multer({ storage: storage });

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'sql.freedb.tech',
    user: 'freedb_liquorislife',
    password: 'sbeVDJ6EpmqMA$!',
    database: 'freedb_c237_Liquorstock'
});
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});
// Set up view engine
app.set('view engine', 'ejs');
// enable static files
app.use(express.static('public'));
//enable form processing
app.use(express.urlencoded({
    extended: false
}));

app.get('/', (req, res) => {
    connection.query('SELECT * FROM liquors', (error, results) => {
        if (error) throw error;
        res.render('index', { Liquors: results }); // Render HTML page with data
    });
});
app.get('/Liquor/:id', (req, res) => {
    // Extract the Liquor ID from the request parameters
    const LiquorId = req.params.id;
    const sql = 'SELECT * FROM liquors WHERE LiquorId = ?';
    // Fetch data from MySQL based on the Liquor ID
    connection.query(sql, [LiquorId], (error, results) => {
        if (error) {
            console.error('Database query error:', error.message);
            return res.status(500).send('Error Retrieving Liquor by ID');
        }
        // Check if any Liquor with the given ID was found
        if (results.length > 0) {
            // Render HTML page with the Liquor data
            res.render('Liquor', { Liquor: results[0] });
        } else {
            // If no Liquor with the given ID was found, render a 404 page or handle it accordingly
            res.status(404).send('Liquor not found');

        }

    });

});
app.get('/addLiquor', (req, res) => {
    res.render('addLiquor');
});
app.post('/addLiquor', upload.single('image'), (req, res) => {
    // Extract Liquor data from the request body
    const { LiquorType,LiquorName,Years,Price,Quantity } = req.body;
    let image;
    if (req.file){
        image=req.file.filename; //save only the filename
    } else{
        image=null;
    }
    const sql = 'INSERT INTO liquors (LiquorType,LiquorName,Years,Price,Quantity,image) VALUES (?, ?, ?, ?, ?, ?)';
    // Insert the new Liquor into the database
    connection.query(sql, [ LiquorType,LiquorName,Years,Price,Quantity,image], (error, results) => {
        if (error) {
            // Handle any error that occurs during the database operation
            console.error("Error adding Liquor:", error);
            res.status(500).send('Error adding Liquor');
        } else {
            // Send a success response
            res.redirect('/');
        }
    });
});


app.get('/editLiquor/:id', (req, res) => {
    const LiquorId = req.params.id;
    const sql = 'SELECT * FROM liquors WHERE LiquorId = ?';
    // Fetch data from MySQL based on the Liquor ID
    connection.query(sql, [LiquorId], (error, results) => {
        if (error) {
            console.error('Database query error:', error.message);
            return res.status(500).send('Error retrieving Liquor by ID');
        }
        // Check if any Liquor with the given ID was found
        if (results.length > 0) {
            // Render HTML page with the Liquor data
            res.render('editLiquor', { Liquor: results[0] })
        } else {
            // If no Liquor with the given ID was found, render a 404 page or handle it accordingly
            res.status(404).send('Liquor not found');
        }
    });
});

app.post('/editLiquor/:id', upload.single('image'), (req, res) => {
    const LiquorId = req.params.id;
    // Extract Liquor data from the request body
    const {LiquorType,LiquorName,Years,Price,Quantity} = req.body;
    let image = req.body.currentImage; //retrieve current image file
    if(req.file) {//if new image is uploaded 
        image = req.file.filename; //set image to be new image filename
    }
    const sql = 'UPDATE liquors SET LiquorType = ?,LiquorName = ? ,Years = ? ,Price = ?, Quantity = ?, image =? WHERE LiquorId = ?';

    // Insert the new Liquor into the database
    connection.query(sql, [ LiquorType,LiquorName,Years,Price,Quantity,image,LiquorId], (error, results) => {
        if (error) {
            // Handle any error that occurs during the database operation
            console.error("Error updating Liquor:", error);
            res.status(500).send('Error updating Liquor');
        } else {
            // Send a success response
            res.redirect('/');
        }
    });
});



app.get('/deleteLiquor/:id', (req, res) => {
        const LiquorId = req.params.id;
        const sql = 'DELETE FROM Liquors WHERE LiquorId = ?';
        connection.query(sql, [LiquorId], (error, results) => {
            if (error) {
                // Handle any error that occurs during the database operatior
                console.error("Error deleting Liquor:", error);
                res.status(500).send('Error deleting Liquor');
            } else {
                // Send a success response
                res.redirect('/');
            }
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
