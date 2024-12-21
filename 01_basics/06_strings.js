
const movie = "3 Idiots";

const bestMovie = new String(" Swadesh ")
// console.log(movie.length);
// console.log(bestMovie.length);

// console.log(movie.toUpperCase());
// console.log(bestMovie.toUpperCase());

// String Interpolation
const message = `Hey have you see this ${movie}, but my all time favourite is ${bestMovie}`;
// console.log(message);


//Slice
console.log(bestMovie.slice(-6,4)); //-negativer counts array from last and positive will count from first

//substring
console.log(bestMovie.substring(2,4)); // selects char at index 3 then selected char at 4-1

//trim
console.log(bestMovie.trim());

//icludes
console.log(bestMovie.includes("wd"));

//replace
console.log(bestMovie.replace(" ","_"));

//split
console.log(movie.split(" "));





