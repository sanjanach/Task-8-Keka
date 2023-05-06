const table = document.getElementById('ClientTable')

class Person{
	name:string
	score:number
	email:string
    constructor(args: any){
		this.name = args.name
		this.score = args.score
		this.email = args.email
    }
}

let personDetails = [
	{name: "Vijay Prakash", score: 34, email: "vijay@technovert.com"},
	{name: "Sashi Pagadala", score: 21, email: "sashi@technovert.com"},
	{name: "Sanjana Chamarthy",score: 45,email: "sanjana.c@keka.com"}
]

let addUser = []; 
function personData(){
	for(let i = 0; i < personDetails.length; i++){  
		addUser[i] = new Person(personDetails[i]); 
	} 
	return addUser;
}

let users: Person[] = personDetails.map(user => new Person(user));
let scores: number[] = users.map(user => user.score);


for(let i = 0, j = 0; i < 8; i++,j++){
    let tableRow = document.createElement('tr') as HTMLTableRowElement; 

	for(let l = 0; l < 5; l++){
    	tableRow.appendChild(document.createElement('td') ) as HTMLTableCellElement;
	}

    let select = tableRow.cells[0].appendChild(document.createElement('input') );
    select.setAttribute("type", "checkbox");

	select.className = 'CreateCheckbox'

    for(let k = 0 ; k < 1 && j < users.length ; k++){
		tableRow.cells[1].appendChild(document.createTextNode(users[j].name) );
		tableRow.cells[2].appendChild(document.createTextNode((users[j].score).toString()) );
		tableRow.cells[3].appendChild(document.createTextNode(users[j].email) );
    }
    table.appendChild(tableRow);
}


let checkboxTop = document.getElementById("CheckboxHeader") as HTMLInputElement;
checkboxTop.addEventListener("click", selectAll);

function selectAll(){
	var check = document.getElementsByClassName("CreateCheckbox") as HTMLCollectionOf<HTMLInputElement>; 
	if (checkboxTop.checked == true) {
		for (let i = 0; i < check.length; i++) { 
			check[i].checked = true;
		}
	} else if (checkboxTop.checked == false) {
		for (let i = 0; i < check.length; i++) {
			check[i].checked = false;
		}
	}


	for (let i = 0; i < check.length; i++) {
		check[i].addEventListener("change", selectTop);
	}

	function selectTop(){
		let flag: number = 0;
		for (let i = 0; i < check.length; i++) {
			if (check[i].checked) {
				flag = flag + 1;
			}
		}
		if (flag == check.length) {
			checkboxTop.checked = true;
		} else {
			checkboxTop.checked = false;
		}
	}
	
}


const searchInput = document.getElementById("SearchBar") as HTMLInputElement;

searchInput.addEventListener("keyup", highlightText) 

function highlightText(){
  const searchText = searchInput.value.toLowerCase();
  const cells = table.getElementsByTagName("td");
	let i: any;

	for (let i = 0; i < cells.length; i++) {
		if(i!=0 && i!=5 && i!=15 && i!=10 && i!=20 && i!= 25 && i!=30 && i!= 35 && i!=40){
			const cell = cells[i];
			let text = cell.textContent.toLowerCase();
			if (text.indexOf(searchText) == 0) {
				let regex = new RegExp(searchText, "gi")
				cell.innerHTML = (cell.textContent).replace(regex, "<mark>$&</mark>")
			}else{
				cell.innerHTML = cell.textContent

			}

		}
	}
}


let scoreArray: number[] = users.map(person => person.score)

let calculateMaxSum = document.querySelector(".calculate-value") as HTMLButtonElement;
calculateMaxSum?.addEventListener("click", calculateMaxAndSum);
let checkboxState = document.getElementsByClassName("CreateCheckbox") as HTMLCollectionOf<HTMLInputElement>;

function calculateMaxAndSum() {
	let sum= 0, count = 0, max = 0;

	for (let i = 0; i < scoreArray.length; i++) {
		if (checkboxState[i].checked) {
			count = count + 1;

			sum = sum + scoreArray[i] ;

			if (max < +(scoreArray[i])) {
				max = +(scoreArray[i]);
			} 
		} 
		console.log(scoreArray[i])
	}
	let avg: Number = Math.floor(sum / count);
	let average = document.getElementById("avg-value") as HTMLElement;
	average.innerHTML = JSON.stringify(avg);
	let maximum = document.getElementById("max-value") as HTMLElement;
	maximum.innerHTML = JSON.stringify(max);

}

