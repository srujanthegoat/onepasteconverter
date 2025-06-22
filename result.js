// STEP 1: Get the text from URL
const params = new URLSearchParams(window.location.search);
const output = params.get("output");

// STEP 2: Show it in the result box
const resultBox = document.getElementById("result");
resultBox.innerText = output;

// STEP 3: Setup copy button

// copyButton.addEventListener("click", function () {
//   navigator.clipboard.writeText(resultBox.innerText)
//     .then(() => {
//       alert("Copied to clipboard!");
//     })
//     .catch(err => {
//       alert("Failed to copy text");
//       console.error(err);
//     });
// });

const copyButton = document.querySelector(".copy-button");
copyButton.addEventListener("click", function () {
  navigator.clipboard.writeText(resultBox.innerText)
    .then(() => {
      const toast = document.getElementById("toast");
      toast.classList.add("show");

      setTimeout(() => {
        toast.classList.remove("show");
      }, 2000);
    })
    .catch(err => {
      alert("Failed to copy text");
      console.error(err);
    });
});





