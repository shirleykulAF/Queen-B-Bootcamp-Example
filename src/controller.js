const pool = require('./db');


const getMentors = (req , res) =>{
    pool.query("SELECT * FROM mentors", (error, results)=>{
        if (error) throw error
        res.status(200).json(results.rows);

    })
    console.log('getting mentors')
};

module.exports = {
    getMentors ,
};