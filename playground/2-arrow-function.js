// const square = (x) => {
//     return x*x
// }

// const square = (x) => x*x

// console.log(square(10))

const event = {
    name : 'Birthday Party',
    guestList: ['Rohit','Rohan', 'Shrirupa'],
    printGuestList(){
        console.log('Guest List for '+ this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending '+this.name)
        })
    }
}

event.printGuestList()