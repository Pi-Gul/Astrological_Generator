function Random_Number_Generator (range) {
    return Math.floor(Math.random() * range);
} 

function Random_Sign_Generator (array_of_signs) {
    return array_of_signs[Random_Number_Generator(array_of_signs.length)];
}

function Random_Description_Generator (array_of_description) {
    return array_of_description[Random_Number_Generator(array_of_description.length)];
}


