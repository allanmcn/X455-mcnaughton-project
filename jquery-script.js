$(document).ready(function() {

  // Create the DataTable
  var table = $("#example").DataTable({
    orderCellsTop: true,
    initComplete: function() {
      var table = this.api();

      // Add filtering
      table.columns([0,1,2,3]).every(function() {
        var column = this;

        var select = $('<select><option value=""></option></select>')
          .appendTo($("thead tr:eq(1) td").eq(this.index()))
          .on('change', function() {
            var val = $.fn.dataTable.util.escapeRegex(
              $(this).val()
            );

            column
              .search(val ? '^' + val + '$' : '', true, false)
              .draw();
          });

        column.data().unique().sort().each(function(d, j) {
          select.append('<option value="' + d + '">' + d + '</option>');
        });

      });
    }
  });
});