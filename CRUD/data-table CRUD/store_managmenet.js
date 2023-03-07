$(document).ready(function() {
	table = $('#productTable').DataTable();
	var isEdit = false;

$('.add-Button').click(function() {
    if(validateAll()){
      if (isEdit) {
        updateData();
        isEdit = false;
        $('.add-Button').html("Save");
      } else {
		  var productId = $('#productId').val();
		  var productName = $('#productName').val();
		  var productDate = $('#productDate').val();
		  var productType = $('#productType').val();
		  var actionButton = '<button type="button" id="editButton" class="edit-Button">Edit</button> <button type="button" id="deletButton" class="delet-Button">Delete</button>'
		  
		  var tab1 = [productId, productName, productDate, productType, actionButton];
		  table.row.add(tab1).draw();
		  resetForm();
		}
	 }
 });
    
$(document).on('click', '.edit-Button', function() {
    isEdit = true;
    $('.add-Button').html("Update");
    var row = $(this).closest('tr');
    editRow = row;
    $('#productId').val(row.find('td:eq(0)').html());
    $('#productName').val(row.find('td:eq(1)').html());
    $('#productDate').val(row.find('td:eq(2)').html());
    $('#productType').val(row.find('td:eq(3)').html());
    $('#idError').html("");
    $('#nameError').html("");
    $('#dateError').html("");
    $('#typeError').html("");
});

function updateData() {
    var productId = $('#productId').val();
    var productName = $('#productName').val();
    var productDate = $('#productDate').val();
    var productType = $('#productType').val();
    var actionButton = '<button type="button" id="editButton" class="edit-Button">Edit</button> <button type="button" id="deletButton" class="delet-Button">Delete</button>';
    var updatedData = [productId, productName, productDate, productType, actionButton];
    var updatedRow = editRow[0];
    table.row(updatedRow).data(updatedData).draw();
    resetForm();
}

  
$('.reset-Button').click(function() {
  resetForm();
});

function resetForm() {
    $('#productId').val('');
    $('#productName').val('');
    $('#productDate').val('');
    $('#productType').val('');
    $('#idError').html('');
	$('#nameError').html('');
    $('#dateError').html('');
    $('#typeError').html('');
    if (isEdit) {
        isEdit = false;
        $('.add-Button').html('Save');
    }
}

$(document).on('click', '.delet-Button', function() {
	var editRow = null;
    if (confirm("Are you sure you want to delete this line?")) {
        var row = $(this).closest('tr');
		var table = $('#productTable').DataTable();
		if (row.is(editRow)) {
            resetForm();
            isEdit = false;
            $('.add-Button').html('Save');
        }
        table.row(row).remove().draw();
    }
}); 
});

function validateField(idError, productId, fieldName) {
    var valid = $('#' + productId).val().trim();
    if (valid === '') {
        $('#' + idError).text('Please Enter ' + fieldName);
        return false;
    } else {
        $('#' + idError).text('');
        return true;
    }
}

function validateAll() {
    var itemIdVal = validateField('idError', 'productId', 'Product ID');
    var nameIdVal = validateField('nameError', 'productName', 'Product Name');
    var dateIdVal = validateField('dateError', 'productDate', 'Product Date');
    var typeIdVal = validateField('typeError', 'productType', 'Product Type');

    return itemIdVal && nameIdVal && dateIdVal && typeIdVal;
}

