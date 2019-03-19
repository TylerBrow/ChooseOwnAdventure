let name = prompt("Hello and Welcome to the 1000 Ways to Die Escape Room! Please tell us your name!");

alert(`Hello ${name}! Thank you for taking interest in our real life 1000 Ways to Die experience! Please note that entrance waives all liability in events of death, maiming, incineration, evisceration, being eaten alive, combustion, etc.`);

let choice1 = prompt("Lets start off easy shall we? In front of you are two different doors, door '1' and door '2'. Please type the number of which door you would like to enter.");

let dead = function () {
    break;
}

if (choice1 === '1') {
    alert('You swing the 1st door open wide and confidently strut into the first room. Everything looks very unassuming and you walk to the center of the room knowing that they would never kill you off in the first room. Suddenly, the floor beneath you opens up and you fall into another room that looks much more like a cave with a large dark entrance at the far end. You hear a Large snarl and look in horror as a Rancor emerges from the entrance with its eyes fixed on you....Dinner is served...')
    dead()
}   else if (choice1 === '2') {
    var choice2= prompt('Cautiously you push the 2nd door open and peer through to another open room with 3 buttons at the far end of the room. Happy that you made it through the first room, yet terrified that you have to put yourself through the anxiety of making another decision, you slowly creep towards one of the 3 buttons. Please tell us which button you would like to press.')
}   else {
    alert('For being facetious and trying to choose something else, you have been shot from behind from one of the disgruntled staff')
    dead()
}

if (choice2 === '1') {
    alert('Optomistically you approach the first button, believing luck is on your side for making it past the first room. You confidently strike the 1st button with all your might, failing to realize it was clearly attached to a block of C4. The janitor could be heard cursing your name for the next several days.');
    dead();
}   else if (choice2 === '2') {
    alert('Hurridly you run to the second button, wanting nothing more to get out of this crazy place. You press the button firmly then close your eyes and wait for the worst. The wall next to the button slides up and reveals a cuddly koala sitting in a box in the middle of the room. Overyjoyed by the sight of such a cute creature you run over to pick up and hold him. Little do you know, koalas are actually incredibly aggresive jerks, and it tears your delicate little face off');
    dead();
}   else {
    var choice3 = prompt(`Always believing 3 to be your lucky number, you walk over to the 3rd button and timidly press it. The walls next to it slides up and reveal a third and final room, with 2 levers on opposite sides of the room, marked with a 1 and 2 on them. A voice speaks over an intercom in the next room letting you know this is final decision to make.`);
}

if (choice3 === '1') {
    alert("Shakingly you go to the first lever, and pull it very slowly. You know it would be a shame to die here in the last room but you dont have much choice. The lever drops and you wait for the worst to happen... but nothing does. Confused you move the lever back up and down but to no avail. 'Oh my, hold on' says a fellow entering the room dressed in what seems to be staff attire.'Sorry there friend, i must have not wired this correctly' he laughed. You reply 'so can i leave then?'. The staff member continues to laugh as he pulls a chainsaw out of his bag")
    dead()
}   else {
    alert("'Congratulations!' a voice booms into the room. 'You beat the escape room, you may leave through the exit at the far side of the room.' A door opens at the far side revealing the light of the outside pouring in. You sprint out the door wondering why the hell you ever went into that place in the first place.")
}