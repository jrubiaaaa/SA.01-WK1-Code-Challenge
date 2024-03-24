// prompt user to input the subject marks
function enterMark(subjects){
    let subjects = parseFloat(prompt(`Enter marks for the subjects: `));
    return subjects;
    }
    function markAverage(subjects) {
        for (i = 0; i <= subjects.length - 1; i++) {
            let sum = 0;
            sum += subjects[i];
            // find average of the marks
            let average = sum / subjects.length;
            // categories of grades and display of text to the user
            if (average < 100 && average >= 79) {
                return `The average for the test marks is ${average}.Your grade for the test is A`;
            }
            else if (average <= 79 && average >= 60) {
                return `The average for the test marks is ${average}.Your grade for the test is B`;
            }
            else if (average <= 59 && average >= 50) {
                return `The average for the test marks is ${average}.Your grade for the test is C`;
            } else if (average <= 49 && average >= 40) {
                return `The average for the test marks is ${average}.Your grade for the test is D`;
            } else (average < 40);
                return `The average for the test marks is ${average}.Your grade for the test is E`;
            }
        }
    