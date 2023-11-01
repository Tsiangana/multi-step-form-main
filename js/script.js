let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');

let circle1 = document.getElementById('circle1');
let circle2 = document.getElementById('circle2');
let circle3 = document.getElementById('circle3');
let circle4 = document.getElementById('circle4');


let required = document.getElementById('required');
let required1 = document.getElementById('required1');

document.getElementById("nextButton").addEventListener("click", function() {
    // Encontre a div atualmente visível
    const visibleDiv = document.querySelector(".div-container:not([style*='display: none'])");
    
    // Se a div atual contiver um formulário com três inputs
    if (visibleDiv.querySelector("input[type='text']") !== null) {
        const inputs = Array.from(visibleDiv.querySelectorAll("input[type='text']"));
        const areInputsFilled = inputs.every(input => input.value.trim() !== '');
        
        if (!areInputsFilled) {
            required.style.display = "inline";
            required1.style.display = "inline";
            return;
        }
    }

    // Encontre a próxima div
    const nextDiv = visibleDiv.nextElementSibling;

    // Se houver uma próxima div, torne a atual invisível e a próxima visível
    if (nextDiv) {
        visibleDiv.style.display = "none";
        nextDiv.style.display = "block";

        circle1.style.background = "none";
        circle2.style.background = "hsl(229, 24%, 87%)";
    }
});

    let next1 = document.getElementById('next1');
    document.getElementById("next1").addEventListener("click", function() {
        two.style.display = "none";
        three.style.display = "block";

        circle2.style.background = "none";
        circle3.style.background = "hsl(229, 24%, 87%)";
    })

    let voltar1 = document.getElementById('voltar1');
    document.getElementById("voltar1").addEventListener("click", function() {
        two.style.display = "none";
        one.style.display = "block";

        circle2.style.background = "none";
        circle1.style.background = "hsl(229, 24%, 87%)";
    })

    let next2 = document.getElementById('next2');
    document.getElementById("next2").addEventListener("click", function() {
        three.style.display = "none";
        four.style.display = "block";

        circle3.style.background = "none";
        circle4.style.background = "hsl(229, 24%, 87%)";
    })

    let voltar2 = document.getElementById('voltar2');
    document.getElementById("voltar2").addEventListener("click", function() {
        three.style.display = "none";
        two.style.display = "block";

        circle3.style.background = "none";
        circle2.style.background = "hsl(229, 24%, 87%)";
    })
    let next3 = document.getElementById('next3');
    document.getElementById("next3").addEventListener("click", function() {
        four.style.display = "none";
        five.style.display = "block";
    })

    let voltar3 = document.getElementById('voltar3');
    document.getElementById("voltar3").addEventListener("click", function() {
        four.style.display = "none";
        three.style.display = "block";

        circle4.style.background = "none";
        circle3.style.background = "hsl(229, 24%, 87%)";
    })


let year = document.getElementById('year');
let month = document.getElementById('moth');

let year1 = document.getElementById('year1');
let month1 = document.getElementById('moth1');

let year2 = document.getElementById('year2');
let month2 = document.getElementById('moth2');

let toggleButton = document.getElementById("toggle");

// Variável para rastrear o estado atual (true = visível, false = oculto)
let isVisible = true;

toggleButton.addEventListener("click", function() {
    if (isVisible) {
        // Se está visível, oculta as divs
        month.style.display = "none";
        month1.style.display = "none";
        month2.style.display = "none";

        year.style.display = "block";
        year1.style.display = "block";
        year2.style.display = "block";
    } else {
        // Se está oculto, mostra as divs
        month.style.display = "block";
        month1.style.display = "block";
        month2.style.display = "block";

        year.style.display = "none";
        year1.style.display = "none";
        year2.style.display = "none";
    }
    
    // Inverte o estado (alternar)
    isVisible = !isVisible;
});
