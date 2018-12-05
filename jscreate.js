function runPopup() {
	window.alert("DATA BERHASIL DI ENTRY")
};
function terimainput(){
	var x=document.forms['biodata']['tl'].value;
	var y=document.forms['biodata']['tl'].value;
	var z=document.forms['biodata']['tl'].value;
	var a=document.forms['biodata']['tl'].value;

	var tabel = document.getElementById("tabelinput");
	var row = tabel.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);

	cell1.innerHTML = x;
	cell2.innerHTML = y;
	cell3.innerHTML = z;
	cell4.innerHTML = a;
}