let averageGrade = 83;
if (averageGrade >= 91 && averageGrade <= 100) {
    console.log("Excellent.");
} else if (averageGrade >= 81 && averageGrade <= 90) {
    console.log("Very good.");
} else if (averageGrade >= 71 && averageGrade <= 80) {
    console.log("Good.");
} else if (averageGrade >= 60 && averageGrade <= 70) {
    console.log("Satisfactory.");
} else  if (averageGrade >= 0 && averageGrade <= 59) {
    console.log("Unsatisfactory.");
} else {
    console.log("Invalid average grade.");
}
