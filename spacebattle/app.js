// console.log("Working")

var gameFunction = () => {
    let playtime = prompt("What do you want to do?","play or stop") // second argument in prompt is a placeholder
         if (playtime =="play"){
            document.getElementById("begingame").innerHTML =
            "Okay let's " + playtime + "! The Battle is On!";
        }
        if (playtime =="stop"){
            document.getElementById("begingame").innerHTML =
            "No problem, we can " + playtime + ". See you next time!"
        }
    
}

var myShip = {
    name: "ussSchwarzenegger",
    hull: 20,
    firepower: 5,
    accuracy: 0.7
}

class alienShips{
    constructor(hull,firepower,accuracy){
        this.hull=hull,
        this.firepower=firepower,
        this.accuracy=accuracy
    }
}

var alienFleet =  [
new alienShips (Math.floor(Math.random()*6)+3,Math.floor(Math.random()*4)+2,Math.random()),
new alienShips (Math.floor(Math.random()*6)+3,Math.floor(Math.random()*4)+2,Math.random()),
new alienShips (Math.floor(Math.random()*6)+3,Math.floor(Math.random()*4)+2,Math.random()),
new alienShips (Math.floor(Math.random()*6)+3,Math.floor(Math.random()*4)+2,Math.random()),
new alienShips (Math.floor(Math.random()*6)+3,Math.floor(Math.random()*4)+2,Math.random()),
new alienShips (Math.floor(Math.random()*6)+3,Math.floor(Math.random()*4)+2,Math.random())
]


var nextattackFunction = () => { 
    let nextattack = prompt("What next??","Attack/Retreat")
    let aim = (Math.random());
    let directHit = alienFleet[0].hull - myShip.firepower;
    while(nextattack == "Attack" && alienFleet.length >0){ //user opts to move fwd and there are ships in the array
        if(aim <= myShip.accuracy && directHit <= 0){ //i land strike and alien ship has 0 hull left
            console.log("Alien ship defeated!");
            alienFleet.shift();//remove this ship from the array
            nextattackFunction() //on to the next
        }
        if(aim <= myShip.accuracy && directHit >0){ //i hit the alien but they still have hull left 
            console.log("Alien ship has " + directHit + " hitpoints left.") //function ran to this point and then started an infinite loop of some sort......
            function returnAttack(){ //alien can return fire now ~~~ is this function not working because it's nested within another???
            let enemyAttack = prompt("Prepare shields!!","Fully armored.")
                while(enemyAttack == "Fully armored."){
                    let alienAim = (Math.random());
                    let alienStrike = myShip.hull - alienFleet[0].hull;
                    if(alienAim <= alienFleet[0].accuracy && alienStrike > 0){ //alien lands shot but i still have hull left
                        console.log("You have " + alienStrike + " hitpoints left.")
                        nextattackFunction() //so i can attack again
                    }
                    if(alienAim <= alienFleet[0].accuracy && alienStrike <=0){ //alien lands shot and i have no hull left
                        alert("GAME OVER")
                    }
                    if(alienAim > alienFleet[0].accuracy){ //alien missed me
                        console.log("Strike evaded!!")
                        nextattackFunction() //so i get to attack again
                    }
                }
            }
            
        }
    }
    while(nextattackFunction == "Retreat"){
            alert("The battle awaits your return")
        }
    while(alienFleet.length == 0){
            alert("YOU WIN!!!")
        }
}
 

/*var attackFunction = () =>{
    let firstattack = prompt("Ready, Aim...!!","Fire!!") //THIS FEELS LIKE AN EXTRA FUNCTION
    while(firstattack == "Fire!!" && alienFleet.length >0){ //user selects fire and ships are in array
        let aim = (Math.random()); //randomly selected aim
        let directHit = alienFleet[0].hull - myShip.firepower; 
            if(aim <= myShip.accuracy && directHit <= 0){ //i land strike and alien ship has 0 hull left
                console.log("Alien ship defeated!");
                alienFleet.shift(); //remove this ship from the array
*/


// var ship = new alienShip(Math.floor(Math.random()*6)+3,Math.floor(Math.random()*4)+2,Math.random())

// var battleShip1 = new alienShip("Battle Ship1",10,2,0.1)
// var battleShip2 = new alienShip("Battle Ship2",5,20,0.2)
// var battleShip3 = new alienShip("Battle Ship3",5,2,0.2) 
// var battleShip4 = new alienShip("Battle Ship4",5,2,0.2)
// var battleShip5 = new alienShip("Battle Ship5",5,2,0.2)
// var battleShip6 = new alienShip("Battle Ship6",5,2,0.2)
// console.log(battleShip1)
/* ^TEST^*/

// their info is supposed to be radomized
// var ship = new alienShip(Math.floor(Math.random()*6)+3,Math.floor(Math.random()*4)+2,Math.random())


// I attack a ship by typing "fire" into the prompt

// a function runs
    // accuracy is randomized
    // if hit, alien ship loses 5pts (make first ship have a hull of 5)
    // i win I can attack or retreat (new prompt)

// var attackFunction = () => {
//     let firstattack = prompt("Ready, Aim...!!","fire!")
//     // let myAim = 0.8
//         while(firstattack == "fire"){
//             if(battleShip1.hull - myShip.firepower == 0){
//                 document.getElementById("round1").innerHTML =
//                     "Enemy ship down!!!"
            
//             }
//             else{
//                 document.getElementById("round1").innerHTML =
//                     "Prepare shields!!"
//             }

//         }

// }

// you could create an empty array
// push the hull and firepower into it; and the random #

// console.log(launchWeapon)
// var launchWeapon = []
// var launchWeapon2 = []
// var launchWeapon3 = []
// var launchWeapon4 = []
// var launchWeapon5 = []
// var launchWeapon6 = []

// var alienFire =[]
// var alienFire2 = []
// var alienFire3 = []
// var alienFire4 = []
// var alienFire5 = []
// var alienFire6 = []



// GAME PLAY
// var attackFunction = () =>{
//     let firstattack = prompt("Ready, Aim...!!","Fire!!")
//     var battleShip1 = new alienShip("Battle Ship1",10,2,0.1) //put this inside the function to see if it would work for line 141 issue
//     if(firstattack == "Fire!!"){
//         launchWeapon.push(Math.random())
//         launchWeapon.push(battleShip1.hull)
//         launchWeapon.push(myShip.firepower)
//         console.log(launchWeapon)
//         let directHit = launchWeapon[1] - launchWeapon[2]
//         if(launchWeapon[0] <= myShip.accuracy && directHit <= 0){
//             console.log("Alien ship defeated!")
//             return attackSecondShipFunction()
//         }
//         if(launchWeapon[0] <= myShip.accuracy && directHit >0){
//             console.log("Alien ship has " + directHit + " hitpoints left.")
//             battleShip1.hull = directHit //(this doesn't seem to carry up to the top of the function)
//             console.log(battleShip1.hull)
//             return returnAttack()
            
//         }
//         if(launchWeapon[0] > myShip.accuracy){
//             console.log("You missed!!")
//             return returnAttack()
//         }
//     }
// }

// var attackSecondShipFunction = () =>{
//     let secondattack = prompt("What next??","Attack/Retreat")
//     if(secondattack == "Attack"){
//         launchWeapon2.push(Math.random())
//         launchWeapon2.push(battleShip2.hull)
//         launchWeapon2.push(myShip.firepower)
//         console.log(launchWeapon2)
//         let directHit2 = launchWeapon2[1] - launchWeapon2[2]
//         if(launchWeapon2[0] <= myShip.accuracy && directHit2 <= 0){
//             return attackThirdShipFunction()
//         }
//         if(launchWeapon2 <= myShip.accuracy && directHit2 >0){
//             return returnAttack2()
//         }
//         if(launchWeapon2[0] > myShip.accuracy){
//             return returnAttack2()
//         }
//     }
// }

// var returnAttack = () => {
//     let firstenemyAttack = prompt("Prepare shields!!","Fully armored.")
//     if(firstenemyAttack == "Fully armored."){
//         alienFire.push(Math.random())
//         alienFire.push(myShip.hull)
//         alienFire.push(battleShip1.firepower)
//         console.log(alienFire)
//         let alienStrike = alienFire[1] - alienFire[2]
//         if(alienFire[0] <= battleShip1.accuracy && alienStrike > 0){
//             console.log("Shields took fire. You have " + alienStrike +" hitpoints left.")
//             myShip.hull = alienStrike
//             return attackFunction()
//         }
//         if(alienFire[0] <= battleShip1.accuracy && alienStrike <= 0){
//             console.log("GAME OVER")
//         }
//         if(alienFire[0] > battleShip1.accuracy){
//             console.log("You dodged that one!!")
//             return attackFunction()
//         }
//     }
// }

// var returnAttack2 = () => {
//     let secondenemyAttack = prompt("Prepare shields!!","Fully armored.")
//     if(secondenemyAttack == "Fully armored."){
//         alienFire2.push(Math.random())
//         alienFire2.push(myShip.hull)
//         alienFire2.push(battleShip2.firepower)
//         console.log(alienFire2)
//         let alienStrike2 = alienFire2[1] - alienFire2[2]
//         if(alienFire2[0] <= battleShip2.accuracy && alienStrike2 > 0){
//             return attackSecondShipFunction()
//         }
//         if(alienFire2[0] <= battleShip2.accuracy && alienStrike2 <= 0){
//             document.getElementById("gameresults").innerHTML = "GAME OVER"
//         }
//         if(alienFire2[0] > battleShip2.accuracy){
//             return attackSecondShipFunction()
//         }
//     }
// }