const status = document.getElementById("status");

const keys = document.querySelectorAll(".key");

const totalKeys = keys.length;

let testedKeys = new Set();


document.addEventListener("keydown", function (event) {

    event.preventDefault();

    const code = event.code;

    keys.forEach(function (key) {

        if (key.dataset.code === code) {

            key.classList.add("active");

            testedKeys.add(code);

            updateStatus(event.key);
        }

    });

});


document.addEventListener("keyup", function (event) {

    const code = event.code;

    keys.forEach(function (key) {

        if (key.dataset.code === code) {

            key.classList.add("active");

        }

    });

});


function updateStatus(keyName) {

    if (keyName === " ") {
        keyName = "Space";
    }

    const tested = testedKeys.size;

    status.innerHTML =
        "🟠 Pressed Key: " + keyName +
        " &nbsp; | &nbsp; " +
        "Tested: " + tested +
        " / " + totalKeys;
}


function resetKeyboard() {

    keys.forEach(function (key) {

        key.classList.remove("active");

    });

    testedKeys.clear();

    status.innerHTML =
        "कोई Key दबाएँ | Tested: 0 / " +
        totalKeys;
}