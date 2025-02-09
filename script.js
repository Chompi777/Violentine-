function showMain() {
    document.getElementById("card").classList.add("hidden");
    document.getElementById("main").classList.remove("hidden");
}

function showHearts() {
    document.getElementById("main").classList.add("hidden");
    showFinalMessage();
}

let noClickCount = 0;

function changeText() {
    let noBtn = document.getElementById("noBtn");
    noClickCount++;

    if (noClickCount === 1) {
        noBtn.innerText = "Viole!";
    } else if (noClickCount === 2) {
        noBtn.innerText = "No seas malvada!";
    } else if (noClickCount === 3) {
        noBtn.innerText = "Es tu última oportunidad amorcito!";
    } else {
        showHearts();
    }
}

function showFinalMessage() {
    let messages = [
        "Este 15 de febrero,",
        "porque el 14 hay tráfico JAJA,",
        "te invito a pasarlo conmigo 😊,",
        "ir donde tú quieras, pensaba en unas alitas :3,",
        "y luego simplemente andar juntos todo el día ❤️,",
        "Te amo mi lunita, sos extremadamente única y preciosa 🐻.",
        "NO FALTES!"
    ];
    
    let container = document.getElementById("finalMessage");
    container.innerHTML = "";
    let index = 0;

    function showNextLine() {
        if (index < messages.length) {
            let line = document.createElement("p");
            line.innerText = messages[index];
            line.style.fontSize = "40px";
            line.style.color = "#073274";
            line.style.animation = "fadeIn 1s ease-in-out";
            container.appendChild(line);
            index++;
            setTimeout(showNextLine, 1000);
        } else {
            setTimeout(() => {
                document.getElementById("confirmBtn").classList.remove("hidden");
            }, 2000);
        }
    }

    showNextLine();
}

function openModal() {
    document.getElementById("modal").classList.remove("hidden");

    // Reproducir sonido al abrir el modal
    let audio = document.getElementById("valentineSound");
    audio.play();
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
    let audio = document.getElementById("valentineSound");
    audio.pause();  // Detener la música cuando se cierra el modal
    audio.currentTime = 0;  // Resetear la música al principio
}
