// const fs = require('fs');
// const csv = require('csv-parser');

// console.log(csv)
// console.log("hello")

function readCSV() {
    const fileInput = document.getElementById('csvFileInput');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      // Здесь можно обработать содержимое CSV-файла
      console.log(contents);
    };

    reader.readAsText(file);
  }