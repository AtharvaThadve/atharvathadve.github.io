
window.onload = function () {
    function getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item;
    }
    const array1 = ['Are yaar try smaller', 'OOPS SORRY 😟!! Try a Smaller one...', '😭Want smaller...!!', 'Smaller Smaller...'];
    const smaller = getRandomItem(array1);

    function getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item;
    }
    const array2 = ['Try bigger as Sun🤣', 'OOPS SORRY 😟!! Try a bigger bro...', '🙁Biggerrrr...!!😔', 'Want Bigger and Bigger😓...'];
    const bigger = getRandomItem(array2);

    function getRandomItem(arr) {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const item = arr[randomIndex];
        return item;
    }
    const array3 = ['🤗Many Congrats my Hero as no of guess:', '😃Well guessed !! Guessing no is :', '😺Really Nice !! Guesses required :', '😄Congratulations Hero with guesses no:'];
    const correct = getRandomItem(array3);

    const num = Math.floor(Math.random() * 100);
    var guess = 1;
    console.log(num);
    document.getElementById("submitguess").onclick = function () {
        var x = document.getElementById("guessField").value;
        if (num == x) {
            document.getElementById("demo").innerHTML = correct
                + guess;
            console.log("Correct");
        }
        else if (num < x) {
            guess++;
            document.getElementById("demo").innerHTML = smaller;
            console.log("Bigger");
        }
        else {
            guess++;
            document.getElementById("demo").innerHTML = bigger;
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