$(document).ready(function() {
var isEdit = false;

$('.addButton').click(function() {
    if(validateAll()){
      if (isEdit) {
        updateData();
        isEdit = false;
        $('.addButton').html("Save");
      } else {
			  $('#myTable').append($('<tr>').append(
			  $('<td>').html($('#productId').val()),
			  $('<td>').html($('#productName').val()),
			  $('<td>').html($('#productDate').val()),
			  $('<td>').html($('#productType').val()),
			  $('<td>').html('<button type="button" class="editButton">Edit</button> <button type="button" id="deletButton" class="deletButton">Delete</button>')
			  ));
			  resetForm();
			}
		}
  });

$(document).on('click', '.editButton', function() {
    isEdit = true;
    $('.addButton').html("Update");
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
    editRow.find('td:eq(0)').html(productId);
    editRow.find('td:eq(1)').html(productName);
    editRow.find('td:eq(2)').html(productDate);
    editRow.find('td:eq(3)').html(productType);
    resetForm();
  }
  
$('.resetButton').click(function() {
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
        $('.addButton').html('Save');
    }
}


$(document).on('click', '.deletButton', function() {
    if (confirm("Are you sure you want to delete this line?")) {
        var row = $(this).closest('tr');
        if (row.is(editRow)) {
            resetForm();
            isEdit = false;
            $('.addButton').html('Save');
        }
        row.remove();
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

/* function validateAll() {
    var itemIdVal = validateField('idError', 'productId', 'Product ID');
    var nameIdVal = validateField('nameError', 'productName', 'Product Name');
    var dateIdVal = validateField('dateError', 'productDate', 'Product Date');
    var typeIdVal = true;
    
    var productType = $('#productType');
    var selectedTypeIndex = productType.prop('selectedIndex');
    if (selectedTypeIndex === 0) {
        $('#' + 'typeError').text('Please select the Product Type');
        typeIdVal = false;
    } else {
        $('#' + 'typeError').text('');
        typeIdVal = true;
    }

    return itemIdVal && nameIdVal && dateIdVal && typeIdVal;
} */