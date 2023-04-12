//Convert pounds to kg's
const poundsToKg = (pounds) => {
    let kg = pounds / 2.2046;
    console.log(`The amount in Kg's is: ${kg}`)
    
}
poundsToKg(155);


//Convert inches to centimeters
const inchesToCentimeters = (inches) => {
    let centimeters = inches * 1.54;
    console.log(`The amount in centimeters is: ${centimeters}`)

}
inchesToCentimeters(10);


//Convert fahrenheit to celsius
const fahrenheitToCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`The amount in celsius is: ${celsius}`)
}
fahrenheitToCelsius(32);


//Convert feet to meters
const feetToMeters = (feet) => {
    let meters = feet / 3.281;
    console.log(`The amount in meters is: ${meters}`)
}
feetToMeters(1);