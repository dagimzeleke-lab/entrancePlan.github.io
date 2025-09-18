document.getElementById("btn").addEventListener("click", () => {
    let inputEl = document.getElementById("input");
    let input = inputEl.value.trim();
    let output = document.getElementById("output");
    let errorMsg = document.getElementById("error");

    // Reset previous messages and styles
    output.innerHTML = "";
    output.style.display = "none";
    errorMsg.textContent = "";
    errorMsg.classList.add("hidden");
    inputEl.classList.remove("error-border", "shake");

    if (input === "Dagim Zeleke Mamo") {
        let scores = {
            English: 98,
            Biology: 99,
            Mathematics: 100,
            Chemistry: 98,
            Physics: 94,
            SAT: 97
        };

        let totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

        output.innerHTML = 
            '<img src="dagimZeleke.jpg" alt="My Photo">' +
            '<p><strong>Name:</strong> Dagim Zeleke Mamo</p>' +
            '<p><strong>Grade:</strong> 12</p>' +
            '<p><strong>Stream:</strong> Natural Science</p>' +
            '<p><strong>Sex:</strong> M</p>' +
            '<p><strong>Age:</strong> 18</p>' +
            '<p><strong>Admission No:</strong> 89056764</p>' +
            '<p><strong>School:</strong> Bachuma Secondary School</p>' +
            '<p><strong>Subjects:</strong></p>' +
            '<ul>' +
                '<li>English: ' + scores.English + '</li>' +
                '<li>Biology: ' + scores.Biology + '</li>' +
                '<li>Mathematics: ' + scores.Mathematics + '</li>' +
                '<li>Chemistry: ' + scores.Chemistry + '</li>' +
                '<li>Physics: ' + scores.Physics + '</li>' +
                '<li>SAT: ' + scores.SAT + '</li>' +
            '</ul>' +
            '<p class="total-score"><strong>Total Score:</strong> ' + totalScore + '</p>' +
            '<button id="resetBtn">Check another Student</button>';

        output.style.display = "block";

        // Reset button action
        document.getElementById("resetBtn").addEventListener("click", () => {
            inputEl.value = "";
            output.innerHTML = "";
            output.style.display = "none";
            errorMsg.textContent = "";
            errorMsg.classList.add("hidden");
            inputEl.classList.remove("error-border", "shake");
        });
    } else {
        errorMsg.textContent = "⚠️ Student not found. Please check the name again.";
        errorMsg.classList.remove("hidden");

        // Trigger shake + red border on error
        errorMsg.classList.remove("shake");
        inputEl.classList.remove("shake");
        void errorMsg.offsetWidth; // reflow
        errorMsg.classList.add("shake");
        inputEl.classList.add("shake", "error-border");
    }
});