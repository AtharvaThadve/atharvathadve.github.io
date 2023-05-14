
window.onload = function () {
    const num = Math.floor(Math.random() * 100);
    var guess = 1;
    console.log(num);
    document.getElementById("submitguess").onclick = function () {
        var x = document.getElementById("guessField").value;
        if (num == x) {
            document.getElementById("demo").innerHTML = "Congrats !! You guess it right with Score :"
                + guess;
            console.log("Correct");
        }
        else if (num < x) {
            guess++;
            document.getElementById("demo").innerHTML = "OOPS SORRY!! Try a Smaller one...";
            console.log("Bigger");
        }
        else {
            guess++;
            document.getElementById("demo").innerHTML = "OOPS SORRY!! Try a grater one...";
            console.log("Samller");
        }

    }

    // Enter key functionality
    var input = document.getElementById("guessField");
    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("submitguess").click();
        }
    });

    // score Storage

};