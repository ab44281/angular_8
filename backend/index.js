const express = require('express');
const mysql = require('mysql');

var cors=require('cors');
var app = express();
const bodyparser= require('body-parser');

app.use(bodyparser.json());
app.use(cors());

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employeedb'
});

connection.connect((err)=>{
    if(!err)
    console.log('DB connection succeded.');
    else
    console.log('DB connecion failed \n Error:' + JSON.stringify(err, undefined, 2));
});

app.listen(4000, ()=>console.log('Express server is running at port no: 4000..'));

//get all employees
app.get('/employees',(req,res)=>{
    let sql = "SELECT * FROM employee";
    let query = connection.query(sql,(err,results)=>{
        if(err) throw err;
        res.send(results);
    });
});

//get all employees by id
app.get('/employees/:id',(req,res)=>{
    let sql ="SELECT * FROM employee WHERE id="+req.params.id+"";
    let query = connection.query(sql,(err,results)=>{
        if(err) throw err;
        res.send(results);
    });
});

//delete an employee
app.delete('/employees/:id',(req,res)=>{
    let sql ="DELETE FROM employee WHERE id="+req.params.id+"";
    let query = connection.query(sql,(err,results)=>{
        if(err) throw err;
        res.send("Delected Successfully.....!!!!!");
    });
});

//insert an employees record
app.post('/employees',(req,res)=>{
    let data = {name: req.body.name, emp_code: req.body.emp_code, salary: req.body.salary};
    let sql = "INSERT INTO employee SET ?";
    let query = connection.query(sql, data,(err, results) =>{
        if(err) throw err;
        res.send("Record is inserted.....!!!!!");
    });
});

//update an employees record
app.put('/employees/:id',(req,res)=>{
    let sql = "UPDATE employee SET name='"+req.body.name+"', emp_code='"+req.body.emp_code+"', salary='"+req.body.salary+"' WHERE id="+req.params.id+"";
    let query = connection.query(sql,(err,results)=>{
        if(err) throw err;
        res.send("Record is Updated.....!!!!!");
    });
});