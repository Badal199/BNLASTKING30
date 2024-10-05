<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Income Prediction Results</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            background: linear-gradient(270deg, #ff00cc, #3333ff, #00ffcc, #ffcc00);
            background-size: 800% 800%;
            animation: gradientAnimation 10s ease infinite;
        }

        @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }

        .result-box {
            width: 400px;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            color: white;
            background-color: rgba(0, 0, 0, 0.7);
            border: 5px solid;
            animation: rgb-border 2s infinite;
        }

        @keyframes rgb-border {
            0% { border-color: red; }
            33% { border-color: green; }
            66% { border-color: blue; }
            100% { border-color: red; }
        }

        .result-history {
            margin-top: 20px;
            background-color: rgba(255, 255, 255, 0.1);
            padding: 10px;
            border-radius: 5px;
            color: #fff;
        }

        .history-item {
            margin: 5px 0;
            padding: 5px;
            border-bottom: 1px solid #555;
        }
    </style>
</head>
<body>

    <div class="result-box">
        <h2>BN LAST KING Current Period: <span id="periodNumber">Loading...</span></h2>
        <h3>Result: <span id="currentResult">Loading...</span></h3>
        <h3>Time Remaining: <span id="timer">00:00</span></h3>
        
        <div class="result-history">
            <h3>Result History</h3>
            <div id="history"></div>
        </div>
    </div>

    <script>
        const resultPattern = ['BIG', 'SMALL', 'BIG', 'SMALL', 'BIG', 'SMALL', 'SMALL', 'SMALL', 'BIG', 'SMALL', 'BIG', 'SMALL'];
        let historyElement = document.getElementById('history');
        let currentResult = document.getElementById('currentResult');
        let periodNumber = document.getElementById('periodNumber');
        let timerElement = document.getElementById('timer');
        let previousPeriod = null;
        let periodCount = 0;

        // Function to update timer and results
        function updateTimer() {
            const now = new Date();
            const remainingSeconds = 60 - now.getSeconds();
            const totalMinutes = now.getHours() * 60 + now.getMinutes();
            const currentPeriod = `2024${("0" + (10001 + totalMinutes)).slice(-6)}`;

            periodNumber.innerText = currentPeriod;
            timerElement.innerText = `00:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

            // Check if period number has changed
            if (currentPeriod !== previousPeriod) {
                // Update result when period number changes
                const result = resultPattern[periodCount % resultPattern.length];
                currentResult.innerText = result;

                // Update history
                const historyItem = document.createElement('div');
                historyItem.className = 'history-item';
                historyItem.innerText = `Period ${currentPeriod}: ${result}`;
                historyElement.prepend(historyItem);

                // Update period count and save the current period
                periodCount++;
                previousPeriod = currentPeriod;
            }
        }

        // Run every second
        setInterval(updateTimer, 1000);
    </script>

</body>
</html>
