// for loop

let keepGoing = true
const stateList = []

while (keepGoing == true) {
    let newState = ''
    newState = prompt("Enter a state name:")
    stateList.push(newState)
    keepGoing = confirm("Click OK to continue. Click Cancel to stop.")
}

for (i = 1; i <= stateList.length; i++) {
    console.log(stateList[stateList.length - i])
}