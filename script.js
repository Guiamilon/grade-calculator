function calculateGrade() {
    // Kunin yung values mula sa input fields
    const quiz = parseFloat(document.getElementById('quiz').value);
    const exam = parseFloat(document.getElementById('exam').value);
    const project = parseFloat(document.getElementById('project').value);
    
    // Check kung valid yung inputs
    if (isNaN(quiz) || isNaN(exam) || isNaN(project)) {
        showResult('Please enter valid numbers in all fields!', 'error');
        return;
    }
    
    if (quiz < 0 || quiz > 100 || exam < 0 || exam > 100 || project < 0 || project > 100) {
        showResult('Scores must be between 0 and 100!', 'error');
        return;
    }
    
    // Calculate final grade
    const finalGrade = (quiz * 0.3) + (exam * 0.5) + (project * 0.2);
    
    // Determine grade equivalent
    let remark = '';
    let gradeClass = '';
    
    if (finalGrade >= 90) {
        remark = 'Excellent! 🎉';
        gradeClass = 'excellent';
    } else if (finalGrade >= 80) {
        remark = 'Very Good! 👍';
        gradeClass = 'good';
    } else if (finalGrade >= 75) {
        remark = 'Passing! ✅';
        gradeClass = 'pass';
    } else {
        remark = 'Needs Improvement! 📚';
        gradeClass = 'fail';
    }
    
    // Show the result
    showResult(`Final Grade: <span class="${gradeClass}">${finalGrade.toFixed(2)}</span><br>${remark}`, 'success');
}

function showResult(message, type) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = message;
    resultDiv.style.display = 'block';
    
    // Set color based on type
    if (type === 'error') {
        resultDiv.style.background = '#ffe6e6';
        resultDiv.style.color = '#d32f2f';
        resultDiv.style.border = '2px solid #ffcdd2';
    } else {
        resultDiv.style.background = '#e8f5e9';
        resultDiv.style.color = '#388e3c';
        resultDiv.style.border = '2px solid #c8e6c9';
    }
}

// Add some CSS for grade colors
const style = document.createElement('style');
style.textContent = `
    .excellent { color: #2e7d32; font-size: 24px; }
    .good { color: #f57c00; font-size: 24px; }
    .pass { color: #1976d2; font-size: 24px; }
    .fail { color: #d32f2f; font-size: 24px; }
`;
document.head.appendChild(style);
