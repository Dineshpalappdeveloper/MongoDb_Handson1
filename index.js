

const express = require("express")

const port = 3001;

const app = express()
const data = [{
    "MongoDb Handson 1": {
        "all Questions": {
            "1": " Create a database , give it name like Human_Resource",
            "2": " Create a collection inside this named employee",
            "3": " Query the collection employee and list all the documents",
            "4": " Query the collection employee and list the employees who are having salary more than 30000",
            "5": ' Query the collection "employee" and list the employees who are having experience more than 2 years',
            "5": ' Query the collection "employee" and list the employees who are graduated after 2015 and having experience more than 1 year',
            "6": ' Query the collection "employee" and update the salary of the employee whose salary is greater than 70000 to 65000.',
            "7": ' Delete all the documents from "employee" where last company is Y',
        },
        "Question with Answer": {
            "1": " Create a database , give it name like Human_Resource",
            "1Ans": "use Human_Resource",
            "2": " Create a collection inside this named employee",
            "2Ans": " db.createCollection('employee')",
            "for Below question need some data so first create it with ": 'db.employee.insertMany({"firstName": "John", "lastName": "Doe","salary": "25000","department": "HR","lastCompany": "X","lastSalary": "10000","overallExp": "2","contactInfo": "1234567890", "yearGrad": "2016", "gradStream": "CSE" },{ "firstName": "Rohan", "lastName": "Jame", "salary": "30000", "department": "Technical", "lastCompany": "Y", "lastSalary": "15000", "overallExp": "1", "contactInfo": "1234567860", "yearGrad": "2015", "gradStream": "CSE"},{"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "20000","overallExp": "1","contactInfo": "123567890","yearGrad": "2019","gradStream": "ECE"}, {"firstName": "Sao","lastName": "Avika","salary": "30000","department": "Sales","lastCompany": "Y","lastSalary": "15000","overallExp": "2","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"}, {"firstName": "Jame","lastName": "roh","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "15000","overallExp": "2","contactInfo": "123567890","yearGrad": "2019","gradStream": "EEE"}, {"firstName": "Rohan","lastName": "Jame","salary": "30000","department": "Technical","lastCompany": "Y","lastSalary": "15000","overallExp": "1","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"}, {"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "20000","overallExp": "1","contactInfo": "123567890","yearGrad": "2019","gradStream": "ECE"}, {"firstName": "Sao","lastName": "Avika","salary": "30000","department": "Sales","lastCompany": "Y","lastSalary": "15000","overallExp": "2","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"}, {"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "15000","overallExp": "2","contactInfo": "123567890","yearGrad": "2019","gradStream": "EEE"}, {"firstName": "Rohan","lastName": "Jame","salary": "30000","department": "Technical","lastCompany": "Y","lastSalary": "15000","overallExp": "1","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"}, {"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "20000","overallExp": "1","contactInfo": "123567890","yearGrad": "2019","gradStream": "ECE"}, {"firstName": "Sao","lastName": "Avika","salary": "30000","department": "Sales","lastCompany": "Y","lastSalary": "15000","overallExp": "2","contactInfo": "1234567860","yearGrad": "2015","gradStream": "CSE"}, {"firstName": "Jame","lastName": "Doe","salary": "35000","department": "Accounts","lastCompany": "Z","lastSalary": "15000","overallExp": "2","contactInfo": "123567890","yearGrad": "2019","gradStream": "EEE"}) ',

            "3": " Query the collection employee and list all the documents",
            "3Ans": "db.employee.find()",
            "4": " Query the collection employee and list the employees who are having salary more than 30000",
            "4Ans": ' db.employee.find({"salary":{$gt:"30000"}})',
            "5": ' Query the collection "employee" and list the employees who are having experience more than 2 years',
            "5Ans": 'db.employee.find({"overallExp":{$gt:"2"}})',
            "6": ' Query the collection "employee" and list the employees who are graduated after 2015 and having experience more than 1 year',
            "6Ans": 'db.employee.find( {"yearGrad":{$gt:"2015"}},{"overallExp":{$gt:"1"} })',
            "7": ' Query the collection "employee" and update the salary of the employee whose salary is greater than 70000 to 65000.',
            "7Ans": 'db.employee.updateMany({"salary":"20000"},{$set :{"salary":"25000"}})',
            "8": ' Delete all the documents from "employee" where last company is Y',
            "8Ans": ' db.employee.deleteMany({"lastCompany":"Y"})',
        }
    }
}]

app.get("/", (req, res) => {
    res.send(data)
})

app.listen(port, () => {
    console.log("fine runnig on ", port);
})