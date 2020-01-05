$(function () {
    //$("#msgid").html("This is Hello World by JQuery");

    $grid = $("#jqGrid").jqGrid({
        //url: '@Url.Action("GetData","Employee")',  // 404
        url: '/Employee/GetData/',  // this is working
        //url: '/Employee.json',        // this is working
        mtype: 'GET',
        datatype: 'json',
        colModel: [
            { label: 'Name', name: 'Name' },
            { label: 'Position', name: 'Position' },
            { label: 'Office', name: 'Office' },
            { label: 'Age', name: 'Age' },
            { label: 'Salary', name: 'Salary' },
        ],
        loadonce: true,
        //data: [
        //    { id: 10, Name: "Serge", Position: "Klokov", Office: "USA" },
        //    { id: 20, Name: "Tristan", Position: "Klokov", Office: "USA" },
        //    { id: 30, Name: "McKayla", Position: "Klokov", Office: "USA" },
        //    { id: 40, Name: "Donald", Position: "Trump", Office: "USA" },
        //    { id: 50, Name: "Vladimir", Position: "Putin", Office: "Russia" },
        //    { id: 60, Name: "Vladimir", Position: "Zelenski", Office: "Ukraine" },
        //]
    });
});