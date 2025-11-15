document.addEventListener("DOMContentLoaded", function () {

    var genBtn = document.getElementById("generateBtn");
    var verifyBtn = document.getElementById("verifyBtn");
    var popup = document.getElementById("popup");
    var statusText = document.getElementById("statusText");
    var bar = document.getElementById("bar");

    genBtn.addEventListener("click", function () {

        var email = document.getElementById("email").value.trim();
        var discount = document.getElementById("discount").value;

        if (!email) {
            alert("Please enter your email.");
            return;
        }

        if (!discount) {
            alert("Please select discount.");
            return;
        }

        if (discount === "90") {
            alert("⚠ 90% Promo Code is unavailable right now!");
            return;
        }

        popup.style.display = "flex";

        var steps = [
            "Connecting to Target servers...",
            "Connected!",
            "Creating promo code for " + email + "...",
            "Testing promo code...",
            "Promo code validated!",
            "Your Promo Code: ****" + discount
        ];

        var i = 0;
        var width = 0;

        function run() {
            if (i < steps.length) {
                statusText.textContent = steps[i];
                width += 16;
                bar.style.width = width + "%";
                i++;
                setTimeout(run, 1100);
            } else {
                statusText.textContent = "⚠ Bot Detected! Please Verify.";
                verifyBtn.style.display = "block";
            }
        }

        run();
    });

    verifyBtn.addEventListener("click", function () {
        window.location.href = "YOUR_LOCKER_LINK_HERE";
    });
});
