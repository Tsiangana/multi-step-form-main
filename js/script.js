document.getElementById("nextButton").addEventListener("click", function() {
    // Encontre a div atualmente visível
    const visibleDiv = document.querySelector(".div-container:not([style*='display: none'])");
    
    // Se a div atual contiver um formulário com três inputs
    if (visibleDiv.querySelector("input[type='text']") !== null) {
        const inputs = Array.from(visibleDiv.querySelectorAll("input[type='text']"));
        const areInputsFilled = inputs.every(input => input.value.trim() !== '');
        
        if (!areInputsFilled) {
            //alert("Preencha todos os campos do formulário antes de continuar.");
            return;
        }
    }

    // Encontre a próxima div
    const nextDiv = visibleDiv.nextElementSibling;

    // Se houver uma próxima div, torne a atual invisível e a próxima visível
    if (nextDiv) {
        visibleDiv.style.display = "none";
        nextDiv.style.display = "block";
    }
});


    let year = document.getElementById('year');
    let month = document.getElementById('moth');

    let year1 = document.getElementById('year1');
    let month1 = document.getElementById('moth1');

    let year2 = document.getElementById('year2');
    let month2 = document.getElementById('moth2');

    document.getElementById("toggle").addEventListener("click", function() {

        month.style.display = "none";
        month1.style.display = "none";
        month2.style.display = "none";

        year.style.display = "block";
        year1.style.display = "block";
        year2.style.display = "block";
    })