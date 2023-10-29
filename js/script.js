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
