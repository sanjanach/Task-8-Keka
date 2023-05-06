var table = document.getElementById('ClientTable');
var Person = /** @class */ (function () {
    function Person(args) {
        this.name = args.name;
        this.score = args.score;
        this.email = args.email;
    }
    return Person;
}());
var personDetails = [
    { name: "Vijay Prakash", score: 34, email: "vijay@technovert.com" },
    { name: "Sashi Pagadala", score: 21, email: "sashi@technovert.com" },
    { name: "Sanjana Chamarthy", score: 45, email: "sanjana.c@keka.com" }
];
var addUser = [];
function personData() {
    for (var i = 0; i < personDetails.length; i++) {
        addUser[i] = new Person(personDetails[i]);
    }
    return addUser;
}
var users = personDetails.map(function (user) { return new Person(user); });
var scores = users.map(function (user) { return user.score; });
for (var i = 0, j = 0; i < 8; i++, j++) {
    var tableRow = document.createElement('tr');
    for (var l = 0; l < 5; l++) {
        tableRow.appendChild(document.createElement('td'));
    }
    var select = tableRow.cells[0].appendChild(document.createElement('input'));
    select.setAttribute("type", "checkbox");
    select.className = 'CreateCheckbox';
    for (var k = 0; k < 1 && j < users.length; k++) {
        tableRow.cells[1].appendChild(document.createTextNode(users[j].name));
        tableRow.cells[2].appendChild(document.createTextNode((users[j].score).toString()));
        tableRow.cells[3].appendChild(document.createTextNode(users[j].email));
    }
    table.appendChild(tableRow);
}
var checkboxTop = document.getElementById("CheckboxHeader");
checkboxTop.addEventListener("click", selectAll);
function selectAll() {
    var check = document.getElementsByClassName("CreateCheckbox");
    if (checkboxTop.checked == true) {
        for (var i = 0; i < check.length; i++) {
            check[i].checked = true;
        }
    }
    else if (checkboxTop.checked == false) {
        for (var i = 0; i < check.length; i++) {
            check[i].checked = false;
        }
    }
    for (var i = 0; i < check.length; i++) {
        check[i].addEventListener("change", headCheck);
    }
    function headCheck() {
        var flag = 0;
        for (var i = 0; i < check.length; i++) {
            if (check[i].checked) {
                flag = flag + 1;
            }
        }
        if (flag == check.length) {
            checkboxTop.checked = true;
        }
        else {
            checkboxTop.checked = false;
        }
    }
}
var searchInput = document.getElementById("SearchBar");
searchInput.addEventListener("keyup", highlightText);
function highlightText() {
    var searchText = searchInput.value.toLowerCase();
    var cells = table.getElementsByTagName("td");
    var i;
    for (var i_1 = 0; i_1 < cells.length; i_1++) {
        if (i_1 != 0 && i_1 != 5 && i_1 != 15 && i_1 != 10 && i_1 != 20 && i_1 != 25 && i_1 != 30 && i_1 != 35 && i_1 != 40) {
            var cell = cells[i_1];
            var text = cell.textContent.toLowerCase();
            if (text.indexOf(searchText) == 0) {
                var regex = new RegExp(searchText, "gi");
                cell.innerHTML = (cell.textContent).replace(regex, "<mark>$&</mark>");
            }
            else {
                cell.innerHTML = cell.textContent;
            }
        }
    }
}
var scoreArray = users.map(function (person) { return person.score; });
var calculateMaxSum = document.querySelector(".calculate-value");
calculateMaxSum === null || calculateMaxSum === void 0 ? void 0 : calculateMaxSum.addEventListener("click", calculateMaxAndSum);
var checkboxState = document.getElementsByClassName("CreateCheckbox");
function calculateMaxAndSum() {
    var sum = 0, count = 0, max = 0;
    for (var i = 0; i < scoreArray.length; i++) {
        if (checkboxState[i].checked) {
            count = count + 1;
            sum = sum + scoreArray[i];
            if (max < +(scoreArray[i])) {
                max = +(scoreArray[i]);
            }
        }
        console.log(scoreArray[i]);
    }
    var avg = Math.floor(sum / count);
    console.log(avg);
    var average = document.getElementById("avg-value");
    average.innerHTML = JSON.stringify(avg);
    var maximum = document.getElementById("max-value");
    maximum.innerHTML = JSON.stringify(max);
}
