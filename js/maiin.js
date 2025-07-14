const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.boton');

botones.forEach(boton => {
    boton.addEventListener('click', () => { 
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "igual") {
            try {
                let expresion = pantalla.textContent;                
                const numeros = expresion.split(/[\+\-]/).map(Number); 
                const operadores = expresion.split('').filter(char => char === '+' || char === '-'); 
                let resultado = numeros[0]; 
                
                for (let i = 0; i < operadores.length; i++) {
                    if (operadores[i] === '+') {
                        resultado += numeros[i + 1];
                    } else if (operadores[i] === '-') {
                        resultado -= numeros[i + 1];
                    }
                }
                pantalla.textContent = parseFloat(resultado.toFixed(10));

            } catch (error) {
                pantalla.textContent = "Error!";
                console.error("Error al calcular:", error);
            }
            return;
        }
        
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    }); 
});