$(document).ready(function() {
  var isEdit = false;
  var editRow;

  $('#addButton').click(function() {
    if(validateAll()) {
      if (isEdit) {
        updateData();
        isEdit = false;
        $('#addButton').html("Save");
      } else {
		  $('#myTable').append($('<tr>').attr('id', $('#productId').val()).append(
		  $('<td>').html($('#productId').val()),
		  $('<td>').html($('#productName').val()),
		  $('<td>').html($('#productDate').val()),
		  $('<td>').html($('#productType').val()),
		  $('<td>').html('<i id="editButton" class="fa fa-pencil-square-o" style="font-size: 25px; padding: 1px 14px;" aria-hidden="true"></i> <i id="deleteButton" class="fa fa-trash-o" style="font-size: 25px; padding: 1px 14px;" data-toggle="modal" data-target="#deleteModal"></i> <i id="viewButton" class="fa fa-eye" style="font-size: 25px; padding: 1px 14px;" aria-hidden="true"></i>')
		));

        resetForm();
      }
    }
  });

$(document).on('click', '#editButton', function() {
    isEdit = true;
    $('#addButton').html("Update");
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

$('#resetButton').click(function() {
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
      $('#addButton').html('Save');
    }
 }

$(document).on('click', '#deleteButton', function() {
    var row = $(this).closest('tr');
    $('#deleteModal').modal('show');
    $('#deleteModal').find('.delete').off('click').on('click', function() {
      if (row.is(editRow)) {
        resetForm();
        isEdit = false;
        $('#addButton').html('Save');
      }
      row.remove();
      $('#deleteModal').modal('hide');
   });
});
  
$(document).on('click', '#viewButton', function() {
  var row = $(this).closest('tr');
  var rowData = row.find('td').map(function() {
    return $(this).html();
  }).get();
  $('#detailsModal .modal-body #productId').text(rowData[0]);
  $('#detailsModal .modal-body #productName').text(rowData[1]);
  $('#detailsModal .modal-body #productDate').text(rowData[2]);
  $('#detailsModal .modal-body #productType').text(rowData[3]);
  $('#detailsModal').modal('show');
 });
});
 
function validateField(idError, productId, fieldName) {
    var valid = $('#' + productId).val().trim();
    if (valid === '') {
      $('#' + idError).text(' Please Enter ' + fieldName);
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
