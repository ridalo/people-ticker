// document.getElementById("count-el").innerText = 5

// function increment() {
// console.log("button was clicked")
// }

// function lifeMeans() {
// 	console.log(42)
// }

// lifeMeans()

let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0

function increment() {
	count = count + 1
	countEl.innerText = count
}

function save() {
	console.loge(count)
}

save()