

    document.getElementById("UpperBtn").addEventListener("click", function () {
      const textUpper = document.getElementById("text-area").value;
      const toUpperText = textUpper.toUpperCase();


      const hasLetters = /[a-zA-Z]/.test(textUpper);
      const isAllCaps = textUpper === textUpper.toUpperCase();


      if (textUpper.trim() === "") {
        alert("Enter a value");
        return;
      }

      if (hasLetters && isAllCaps) {
        alert("It's already in uppercase!");
        return;
      }

      
      const encoded = encodeURIComponent(toUpperText);
      window.location.href = `result.html?output=${encoded}`;
    });

    document.getElementById("lowerBtn").addEventListener("click", function () {
      const textLower = document.getElementById("text-area").value;
      const toLowerText = textLower.toLowerCase();
      const hasLetters = /[a-zA-Z]/.test(textLower);
      const isAllSmall = textLower === textLower.toLowerCase();

      if (textLower.trim() === "") {
        alert("Enter a value");
        return;
      }

      if (hasLetters && isAllSmall) {
        alert("It's already in lowercase!");
        return;
      }

       const encoded = encodeURIComponent(toLowerText);
      window.location.href = `result.html?output=${encoded}`;
    });

