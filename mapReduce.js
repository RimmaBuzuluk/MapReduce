let arrData=[]
let arrNew=[]

function readCSV() {
    const fileInput = document.getElementById('csvFileInput');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      // Здесь можно обработать содержимое CSV-файла
    //   console.log(contents);
    // mapFunction(contents)

arrData=contents.split(" ")

console.log(arrData[0])
arrNew=arrData[0].split(";")

console.log(arrNew)
///create new table in



    };

    reader.readAsText(file);
   
  }

 

  