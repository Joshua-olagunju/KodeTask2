// Task 3: If statement for score grading
// This function takes a score and prints a remark based on the range
function gradeScore(score) {
    // Check if score is within valid range (0-100)
    if (score < 0 || score > 100) {
        console.log("Invalid score");
    } else if (score >= 70 && score <= 100) {
        console.log("Excellent");
    } else if (score >= 60 && score <= 69) {
        console.log("Very good");
    } else if (score >= 50 && score <= 59) {
        console.log("Good");
    } else if (score >= 40 && score <= 49) {
        console.log("Poor");
    } else if (score >= 0 && score <= 39) {
        console.log("Very poor");
    }
}

// Example usage:
gradeScore(5); // Output: Excellent
gradeScore(65); // Output: Very good
gradeScore(55); // Output: Good
gradeScore(45); // Output: Poor
gradeScore(25); // Output: Very poor
gradeScore(150); // Output: Invalid score