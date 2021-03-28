/*
DataTable plugins for jQuery:
    takes the table in return and maps into
    this column
 */
(function ($) {
    $('#gradesTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/grades",
        "columns": [
            { "data": "id" },
            { "data": "Last_name" },
            { "data": "First_name" },
            { "data": "SSN" },
            { "data": "Test1" },
            { "data": "Test2" },
            { "data": "Test3" },
            { "data": "Test4" },
            { "data": "Final" },
            { "data": "Grade" }
        ]
    } );

})(jQuery);