const myForm = document.getElementById("myForm");
      const inputs = document.getElementsByClassName('input');
      const warnTexts = document.getElementsByClassName('warning-text');
      const warnIcon = document.getElementsByClassName('warning-img');

      myForm.addEventListener("submit", (e) => {
      e.preventDefault();

      for (var i = 0; i < 4; i++) {
        var input = inputs[i];
        var text = warnTexts[i];
        var icon = warnIcon[i]; 
        if (input.value === ""){
          input.style.border = "2px solid #FF7979";
          text.style.display = "block";
          icon.style.display = "block";
        }
      }
      });