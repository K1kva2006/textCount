const container = document.getElementById("container");
const input = document.getElementById("input");
const addButton = document.getElementById("addButton");
const p = document.getElementById("p");

input.addEventListener("keyup", () => {
    p.textContent = input.value;
});

let pArray = [];
addButton.addEventListener("click", function () {
    const saveText = document.createElement("p");
    saveText.classList.add("saveText");
    saveText.textContent = input.value;
    container.appendChild(saveText);
    input.value = "";

    if (saveText.textContent.trim().length > 0) {
        const textLength = document.createElement("span");

        let lengthSum = "";
        for (let i = 0; i < saveText.textContent.length; i++) {
            lengthSum += saveText.textContent[i].trim();
        }
        textLength.textContent = ` |  Length: ${lengthSum.length}`;
        textLength.style.color = "red";
        textLength.style.userSelect = "none";

        saveText.appendChild(textLength);

        pArray.push(saveText);
    }

    pArray.length % 2 === 0
        ? saveText.classList.add("smallText")
        :  saveText.classList.add("longText");
});
