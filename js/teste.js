function readTextFile(file) {
    console.log(file);
    $.getJSON(file, function (data) {
        console.log(data);
    });
}