const creds = {
    name: "Kala",
    password: "happybd"
}

const onLogin = (e) => {
    e.preventDefault()
    let card = document.querySelector("#login-card");

    let name = document.querySelector("#name-input").value;
    let password = document.querySelector("#password-input").value;

    if (name === creds.name && password === creds.password) {
        card.classList.add("fadeOut")

        let confetti = new ConfettiGenerator({
            target: "confetti",
            clock: 160
        })
        confetti.render()

        setTimeout(() => {
            card.style.display = "none";
            // document.querySelector("#greeting").classList.add("fadeIn");
            document.querySelector("#greeting").style.display = "block";
        }, 1000)
    } else {
        card.classList.remove("wiggle")
        void card.offsetWidth;
        card.classList.add("wiggle")
    }
}

document.querySelector("#login-form").addEventListener("submit", onLogin)