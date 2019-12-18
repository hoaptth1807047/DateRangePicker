$(document).ready(function() {
    console.log("Ready!");
    // default giá trị cho start và end.
    var start = moment().subtract(29, 'days');
    var end = moment();
    // check
    var currentStartTime = getParameterFromUrl('start');
    var currentEndTime = getParameterFromUrl('end');
    if (currentStartTime != null) {
        start = new Date(currentStartTime);
    }
    if (currentEndTime != null) {
        end = new Date(currentEndTime);
    }
    $('input[name = "dateRange"]').daterangepicker({
    startDate: start,
    endDate: end,
    ranges: {
        'Today': [moment(), moment()],
        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
        'This Month': [moment().startOf('month'), moment().endOf('month')],
        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    }
});
$('input[name = "dateRange"]').on('apply.daterangepicker', function(ev, picker) {
    window.location.href = `/DaterangePicker/Index?start=${picker.startDate.format('MM/D/YYYY')}&end=${picker.endDate.format('MM/D/YYYY')}`;
});

function getParameterFromUrl(parameters) {
    var url_string = window.location.href;
    var url = new URL(url_string);
    return url.searchParams.get(parameters);
    }
});