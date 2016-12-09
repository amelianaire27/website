/*

   Author: Amelia Rae White  
   Date: 11/9/2016

   Filename: report.js

   Functions List:

   initPage()
      Initializes the contents of the Web page

   testLength()
      Tests a field for its length

   testPattern()
      Tests a field for its pattern

   validateForm
      Validates a Web form

   calcRow
      Calculates the costs within one row of the travel report

   calcTotal
      Calculates the total cost of the travel

   upDate
      Updates the total travel cost
      
*/

document.addEventListener("DOMContentLoaded", function initPage(){

  //Array containing elements of classtype expenseEntry
  var dataFields = [];

  //Collection of all expenseEntry class members
  var expenseEntry = document.getElementsByClassName("expenseEntry");

  //Add class memebers to dataFields array
  for (i = 0; i < expenseEntry.length; i++){
    dataFields.push(expenseEntry[i]);
    dataFields[i].addEventListener("blur", update);
  }
})

//Tests to ensure user has entered text in the required field
function testLength(field){

  //Empty fields return false and update background color to yellow
  if (field.value.length == 0){
    console.log(typeof field)
    field.style.backgroundColor = 'yellow';
    return false;
  } else {
    field.style.backgroundColor = 'white';
    return true;
  }

}

//Compares value of field object with a regular expression
function testPattern(field, regx){

  //Field matching regular expression returns true, no match returns false
  if (regx.test(field.value) == false){
    field.style.backgroundColor = 'yellow';
    field.style.color = 'red';
    return false;
  } else {
    field.style.backgroundColor = 'white';
    field.style.color = 'black';
    return true;
  }
}

//Validates form by calling testPattern and testLength functions
function validateForm(){
  
  var isValid = true;

  //Form field variables
  var lname = document.forms[0].lname;
  var fname = document.forms[0].fname;
  var address = document.forms[0].address;
  var summary = document.forms[0].summary;
  var account = document.forms[0].account;
  var department = document.forms[0].department;
  var project = document.forms[0].project;
  var socNum = document.forms[0].ssn;

  //Checks length of specified form fields
  if (testLength(lname) == false){
    isValid = false;
  }
  
  if (testLength(fname) == false){
    isValid = false;
  }
  if (testLength(address) == false){
    isValid = false;
  }
  if (testLength(summary) == false){
    isValid = false;
  }

  //Regular expression literals for account, department, project, and SSN fields
  var regxAcct = /^ACT\d{6}/;
  var regxDept = /^DEPT\d{3}/;
  var regxProj = /^PROJ\d{5}/;
  var regxSSN = /\d{9}|^.{3}-.{2}-.{4}$/;

  //Runs testPattern to check account, department, project, and SSN fields against regex
  if (testPattern(account,regxAcct) == false){
    isValid = false;
  }
  if (testPattern(department, regxDept) == false){
    isValid = false;
  }
  if (testPattern(project, regxProj) == false){
    isValid = false;
  }
  if (testPattern(socNum, regxSSN) == false){
    isValid = false;
  }

  if (isValid == false){
    window.alert("Please fill out all fields in the required format.");
  }
  
  return isValid;
}

//Returns expenses in a single row of the form, parameter is the numeric value of the row
function calcRow(row){

  //Variables containing numeric values from the travel, lodge, and meal row elements
  var travel = parseFloat(document.forms[0].elements["travel" + row].value);
  var lodge = parseFloat(document.forms[0].elements["lodge" + row].value);
  var meal = parseFloat(document.forms[0].elements["meal" + row].value);

  return travel + lodge + meal;
}

//Returns total of all expenses by calling calcRow for each of the table rows
function calcTotal(){

  //Variable to hold total of all expense rows
  var totalExp = 0;

  //Adds values from row to totalExp
  for (j = 1; j <= 4; j++){
    totalExp += calcRow(j);
  }

  return totalExp;
}

//Updates expense values throughout form to verify input
function update(){

  //Matches any string which contains only a number with or without 2 digit accuracy
  var numRegExp = /^\d*(\.\d{0,2})?$/;

  //Tests if currency has been entered correctly
  if (numRegExp.test(this.value) == true){
    for (k = 1; k <= 4; k++){
      document.forms[0].elements["sub" + k].value = parseFloat(calcRow(k)).toFixed(2);
    }
    document.forms[0].total.value = parseFloat(calcTotal()).toFixed(2);
  } else if(numRegExp.test(this.value) == false) {
    window.alert("Invalid currency value");
    this.value = 0.00;
    this.focus();
  }
}