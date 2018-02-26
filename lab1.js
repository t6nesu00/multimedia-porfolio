function add_person(){
	var name_p = document.getElementById("name").value
	var text = document.createTextNode(name_p) // create a text node
	var newName = document.createElement("p")  // create a <p> node
	newName.appendChild(text)	// append the text to <p>
	document.getElementById("persons_name").appendChild(newName) // append <p> to <p> with id persons_name
}