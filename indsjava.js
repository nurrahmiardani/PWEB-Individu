alert("Selamat Datang")

function nambah() {
    var a = document.forms["formisi"]["input"].value;
    var b = document.forms["formisi"]["input2"].value;



    var tabelhasil = document.getElementById("tabelhasil");
    var row = tabelhasil.insertRow(1);
    var c1 = row.insertCell(0);
    var c2 = row.insertCell(1);


    c1.innerHTML = a;
    c2.innerHTML = b;


    alert("Data Berhasil Disimpan");
}