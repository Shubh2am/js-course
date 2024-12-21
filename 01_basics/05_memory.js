//Stack (Primitive datatypes) --> Created a copy of existing variable if assigned to some other variable
// Heap(Non-Primitive datatypes) --> Refers to the same variable if assigned to some other variable

//Stack Example
let name = "Shubham";
let updateName = name;

updateName = "Shubham Maheshwari"

console.log(name)
console.log(updateName);

//Heap Example
let details = {
    language : "Javascript",
    level : "Beginner"
}

let updatedDetails = details;

updatedDetails.level = "Intermediate";

console.log(details);
console.log(updatedDetails);

