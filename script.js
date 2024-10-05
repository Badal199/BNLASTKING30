// Set initial period and result
let previousPeriod = null;
let history = [];

// Function to generate random result
function generateRandomResult() {
    const results = ['SMALL', 'BIG'];
    return results[Math.floor(Math.random() * results.length)];
}

// Function to format time with leading zeros
function formatTime(seconds) {
    return ("  " + String(seconds).padStart(2, "0") + " ").replace(/(?<=\\d)(?=\\d)/g, " ");
}

// Function to update result history
function updateHistory(periodNumber, result) {
    const historyList = document.getElementById('historyList');
    
    // Add new result to the history
    history.unshift({ period: periodNumber, result: result });

    // Keep only the last 10 entries
    if (history.length > 10) {
        history.pop();
    }

    // Clear the history list and update it
    historyList.innerHTML = '';
    history.forEach(entry => {
        const li = document.createElement('li');
        li.textContent = `Period: ${entry.period}, Result: ${entry.result}`;
        historyList.appendChild(li);
    });
}

// Function to reset the timer
function resetTimer() {
    clearInterval(intervalId);
    startTimer(); // Restart the timer after resetting
}

// Function to change the background color randomly
function changeBackgroundColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// Function to start the timer
let intervalId;
function startTimer() {
    intervalId = setInterval(function () {
        const now = new Date();
        const seconds = now.getSeconds();
        const remainingSeconds = 30 - (seconds % 30);

        const totalMinutes = now.getHours() * 60 + now.getMinutes();
        const periodNumber = now.getFullYear().toString() + 
            String(now.getMonth() + 1).padStart(2, '0') + 
            String(now.getDate()).padStart(2, '0') + 
            "30" + 
            (1 + totalMinutes * 2 + (seconds >= 30 ? 1 : 0));

        document.getElementById('timer30s').textContent = formatTime(remainingSeconds);

        // Update the period number
        document.getElementById('period30s').textContent = "Period Number: " + periodNumber;

        // Show new random result when the period number changes
        if (periodNumber !== previousPeriod) {
            previousPeriod = periodNumber;
            const randomResult = generateRandomResult();
            document.getElementById('result').textContent = "Result: " + randomResult;

            // Update result history
            updateHistory(periodNumber, randomResult);
        }
    }, 1000);
}

// Start the timer initially
startTimer();

// Key event handler for keyboard input
document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
        case 32: // Spacebar key
            // Generate a new random result manually
            const manualResult = generateRandomResult();
            document.getElementById('result').textContent = "Result: " + manualResult;
            const now = new Date();
            const manualPeriodNumber = now.getFullYear().toString() + 
                String(now.getMonth() + 1).padStart(2, '0') + 
                String(now.getDate()).padStart(2, '0') + 
                "30" + 
                (1 + now.getHours() * 60 * 2);
            updateHistory(manualPeriodNumber, manualResult);
            break;
        
        case 82: // 'R' key
            // Reset the timer
            resetTimer();
            break;

        case 67: // 'C' key
            // Change background color
            changeBackgroundColor();
            break;

        default:
            // Do nothing for other keys
            break;
    }
});
