document.addEventListener("DOMContentLoaded", function () {
    const unlockDateString = document.body.dataset.unlock;

    // If page has no unlock date, do nothing
    if (!unlockDateString) {
        return;
    }

    const unlockDate = new Date(unlockDateString + "T00:00:00");
    const now = new Date();

    if (now < unlockDate) {
        document.body.innerHTML = `
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 100vh;
                text-align: center;
                background: #f9f6ee;
                font-family: 'Indie Flower', cursive;
                padding: 20px;
            ">
                <h1 style="
                    font-family: 'Bungee', cursive;
                    font-size: 3rem;
                    margin-bottom: 10px;
                ">
                    Not Yet 🤭
                </h1>

                <p style="font-size: 1.2rem;">
                    This opens on ${unlockDate.toDateString()}.
                </p>

                <a href="index.html" style="
                    margin-top: 25px;
                    font-size: 1.1rem;
                    text-decoration: none;
                    color: #8b6f5c;
                ">
                    ← Go Back
                </a>
            </div>
        `;
    }
});
