//final challenge
//takes in students score, and total score
// 15/20 -> You got a C (75%)
// a 90-100, b 80 - 89, c 70 -79, d 60 - 69, f 0 -59

const studentsGrade = function (score, totalScore) {

    if (typeof score !== 'number' && typeof totalScore !== 'number') {
        throw Error ('Please put in a number');
    } 

    const percent = score / totalScore * 100;

    if (percent <= 59 && percent > 0) {
        return `You got an F (${percent})`;
    } else if (percent <= 69) {
        return `You got a D (${percent})`;
    } else if (percent <= 79) {
        return `You got a C (${percent})`;
    } else if (percent <= 89) {
        return `You got a B (${percent})`;
    } else if (percent <= 100) {
        return `You got an A (${percent}), good job!`;
    } else {
        return 'Please put in right scores';
    }

}

try {
    
    const grade = studentsGrade(12, 20);
    console.log(grade);
} catch (e) {
    console.log(e.message);
}