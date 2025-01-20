let averageGrade = 18;
switch (true) {
    case averageGrade >= 91 && averageGrade <= 100:
        console.log("Excellent.");
        break;
    case averageGrade >= 81 && averageGrade <= 90:
        console.log("Very good.");
        break;
    case averageGrade >= 71 && averageGrade <= 80:
        console.log("Good.");
        break;
    case averageGrade >= 60 && averageGrade <= 70:
        console.log("Satisfactory.");
        break;
    case averageGrade >= 0 && averageGrade <= 59:
        console.log ("Unsatisfactory.");
        break;
    default:
        console.log("Invalid average grade.");
}