
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F39C12", "#8E44AD", "#2ECC71", "#E74C3C"];

    function changeRandomColor() {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      document.body.style.backgroundColor = randomColor;
    }

    function setCustomColor() {
      const customColor = document.getElementById("colorPicker").value;
      document.body.style.backgroundColor = customColor;
    }