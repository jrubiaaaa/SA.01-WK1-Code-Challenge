// the user inputs the vehicle speed
function inputSpeed(){
    let driveSpeed=parseFloat(prompt(`Please enter the vehicle speed: `));
    return driveSpeed;
}
// checks if they they are within the set speed limit
if(driveSpeed<=70){
    return `You are within the speed limit.Have a good day.`;
}
if(driveSpeed>70)
    // find the speed above limit and the increment of 5kph
    function result(inputSpeed){
        let demerit=(inputSpeed-70)/5;
        // display the user's demerit points
        return `You have ${ovrspeed} demerit points.Please adhere to road safety rules.Have a good day`;
        
    }
    else(result>=12);{
        console.log(`Your Driving has been suspended due to high demerit`);
    }
