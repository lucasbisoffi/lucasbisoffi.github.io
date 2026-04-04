window.addEventListener('load', function() {
    
    const text = "Software Engineer | Quantum Enthusiast";
    const typingElement = document.getElementById("typing-text");
    if (typingElement) {
        typingElement.innerHTML = "";
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                typingElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        typeWriter();
    }

    if (document.getElementById('particles-js')) {
        try {
            particlesJS("particles-js", {
                "particles": {
                    "number": { "value": 120 },
                    "size": { "value": 1.5 },
                    "line_linked": {
                        "enable": true,
                        "distance": 120,
                        "color": "#00A3FF",
                        "opacity": 0.6,
                        "width": 1
                    },
                    "move": { "enable": true, "speed": 2, "out_mode": "bounce" }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": { "onhover": { "enable": true, "mode": "grab" } }
                },
                "retina_detect": true
            });
            console.log("Sucesso: Canvas de partículas criado.");
        } catch (e) {
            console.error("Erro ao carregar particlesJS: ", e);
        }
    }
});
