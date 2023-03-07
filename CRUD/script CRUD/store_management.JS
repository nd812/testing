var isEdit = false;

function addRow() {
	if (validateAll()){
		if(isEdit){
			updateData();
			isEdit = false;
			document.getElementsByClassName("addButton")[0].innerHTML = "Save";
		}else{
			var productId = document.getElementById("productId").value;
			var productName = document.getElementById("productName").value;		
			var productDate = document.getElementById("productDate").value;
			var productType = document.getElementById("productType").value;
			var table = document.getElementById("myTable");
			var row = table.insertRow(-1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			var cell5 = row.insertCell(4);
			cell1.innerHTML = productId;
			cell2.innerHTML = productName;
			cell3.innerHTML = productDate;
			cell4.innerHTML = productType;
			cell5.innerHTML = '<button type="button" id="editButton" onclick="editData(this)">Edit</button> <button type="button" id="deletButton" onclick="deleteRow(this)">Delete</button>';
			resetForm();
		}
	}
}
 
function editData(btn){
	isEdit = true;
	document.getElementsByClassName("addButton")[0].innerHTML = "Update";
	var row = btn.parentNode.parentNode;
	editRow = row;
	document.getElementById("productId").value = row.cells[0].innerHTML;
	document.getElementById("productName").value = row.cells[1].innerHTML;
	document.getElementById("productDate").value = row.cells[2].innerHTML;
	document.getElementById("productType").value = row.cells[3].innerHTML;
	document.getElementById("idError").innerHTML = "";
	document.getElementById("nameError").innerHTML = "";
	document.getElementById("dateError").innerHTML = "";
	document.getElementById("typeError").innerHTML = "";
}

function updateData() {
	var productId = document.getElementById("productId").value;
	var productName = document.getElementById("productName").value;
	var productDate = document.getElementById("productDate").value;
	var productType = document.getElementById("productType").value;
	editRow.cells[0].innerHTML = productId;
	editRow.cells[1].innerHTML = productName;
	editRow.cells[2].innerHTML = productDate;
	editRow.cells[3].innerHTML = productType;
	resetForm();
}

function resetForm() {
	document.getElementById("productId").value = "";
	document.getElementById("productName").value = "";
	document.getElementById("productDate").value = "";
	document.getElementById("productType").value = "";
	document.getElementById("idError").innerHTML = "";
	document.getElementById("nameError").innerHTML = "";
	document.getElementById("dateError").innerHTML = "";
	document.getElementById("typeError").innerHTML = "";
	if (isEdit) {
		isEdit = false;
		document.getElementsByClassName("addButton")[0].innerHTML = "Save";
		}
}

function deleteRow(btn) {
	if (confirm("Are you sure you want to delete this line?")) { 
	var row = btn.parentElement.parentElement;
	document.getElementById("myTable").deleteRow(row.rowIndex);
	} 
	if (editRow == row){
			
		resetForm();
	} 
}

function validateField(idError, productId) {
	let valid = document.getElementById(productId).value.trim();
    if (valid == "") {
        document.getElementById(idError).innerHTML = "	Please enter "+ productId ;
        return false;
    } else {
        document.getElementById(idError).innerHTML = "";
        return true;
    }
}

function validateAll() {
	var itemIdVal = validateField('idError', 'productId');
    var nameIdVal = validateField('nameError', 'productName');
    var dateIdVal = validateField('dateError', 'productDate');
    var typeIdVal = validateField('typeError', 'productType');

    return itemIdVal && nameIdVal && dateIdVal && typeIdVal;
}



