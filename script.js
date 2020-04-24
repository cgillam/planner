var currentDay = $("#currentDay")

currentDay.html(moment().format(" dddd "))

console.log(moment().format("hA"));





var Plannertimes = ['09', '10', '11', '12', '13', '14', '15', '16', "17"]

var shownTimes = Plannertimes[0]

for (var i = 0; i < Plannertimes.length; i++) {

    var row = $("<div>")
    row.attr("class", "row time-block")
    var hourDiv = $("<div>")
    hourDiv.attr("class", "col-md-2 hour")
    hourDiv.html(Plannertimes[i])
    var textDiv = $("<div>")
    textDiv.attr("class", "col-md-8")
    var textArea = $("<textarea>")
    textArea.attr("class", "form-control")
    textArea.attr("id", "textArea" + i)
    textArea.attr("rows", "3")
    textDiv.append(textArea)
    var button = $("<button>")

    button.attr("type", "button")
    button.attr("class", "col-md-2 btn btn-primary saveBtn ")
    button.attr("id", i)
    var icon = $("<i>")
    icon.attr("class", "far fa-save")
    button.html(icon)
    // button.html("<i class="far fa - save"></i>")


    row.append(hourDiv, textDiv, button)
    $(".container").append(row)

    if (Plannertimes[i] === moment().format("k")) {
        textArea.attr("class", "present form-control")
    } else if (Plannertimes[i] < moment().format("k")) {
        textArea.attr("class", "past form-control")
    } else if (Plannertimes[i] > moment().format("k")) {
        textArea.attr("class", "future form-control")
    }


}
renderLocalStorage()
function renderLocalStorage() {
    for (var j = 0; j < 9; j++) {
        var returendFromLs = JSON.parse(localStorage.getItem("todos" + j))
        if (returendFromLs !== null) {
            console.log(returendFromLs);

            $("#textArea" + j).val(returendFromLs)
        }
    }
}

$(".container").on("click", ".saveBtn", function () {

    var textAreaText = $("#textArea" + $(this).attr("id")).val()

    localStorage.setItem("todos" + $(this).attr("id"), JSON.stringify(textAreaText))



})
