// console.log("Let the games begin!!")

// I set the tools for the landscaper to use
let tools = [
  {
    type: "Teeth",
    pay: 1,
  },
  {
    type: "Rusty-Scissors",
    pay: 5,
  },
  {
    type: "Push-Mower",
    pay: 50,
  },
  {
    type: "Battery-Mower",
    pay: 100,
  },
  {
    type: "Starving-Students",
    pay: 250,
  },
];

// I set the money that the landscaper starts with
let money = 0;

// I define the function to add one dollar to cut with teeth
function cutWithTeeth() {
  if (money < 5) {
    money += 1;
    alert(
      `You did it! You earned $${money} cutting lawns today! You got a jaw that won't quit! You now have $${money}`
    );
  } else {
    alert(
      "You have earned enough to stop using your canines! Please proceed to the store to get your upgrade!"
    );
  }
}
// I define the a function to cut with the scissors
function cutWithScissors() {
  if (money < 25 && newTool === "Rusty-Scissors") {
    money += 5;
    alert(
      `A big pay raise came! You earned $${money} clipping away today! You got $${money} towards expansion!`
    );
  } else if (newTool !== "Rusty-Scissors") {
    alert(
      `Don't get ahead of yourself! Having $${money} is only good for half a stick of gum...`
    );
  } else {
    alert(
      `You've earned the upgrade you deserve! Moving up in the world I see! Head to the market!`
    );
  }
}
// I define a function that allows me to cut with the push mower
function cutWithPush() {
  if (money < 250 && newTool === "Push-Mower") {
    money += 50;
    alert(
      `Looks like with the ${tools[2].type}, your business is really booming! You earned $${money}!`
    );
  } else if (newTool !== "Push-Mower") {
    alert(`I see you getting impatient again! Can't do much with $${money}..`);
  } else {
    alert(
      `You've earned the upgrade you deserve! Moving up in the world I see! Head to the market!`
    );
  }
}
// I define a function that uses the battery powered mower
function cutWithBattery() {
  if (money < 500 && newTool === "Battery-Mower") {
    money += 100;
    alert(
      `Looks like with the ${tools[3].type}, your business is really soaring! You earned $${money}!`
    );
  } else if (newTool !== "Battery-Mower") {
    alert(`So close, yet so far! You only have $${money}, keep up the hustle!`);
  } else {
    alert(
      `You've earned the upgrade you deserve! Moving up in the world I see! Head to the market!`
    );
  }
}
//I define a function that uses the students to cut lawns
function useStudents() {
  if (money < 1000 && newTool === "Starving-Students") {
    money += 250;
    alert(
      `Wow, the ${tools[4].type} and you are rocking out these lawns! By the end of the day you'll be a $1000-aire!`
    );
  } else if (newTool !== "Starving-Students") {
    alert(
      `Looks like you gotta keep up the solo act. Don't let the summer heat beat you!`
    );
  } else if (money >= 1000) {
    alert(
      `You've reached $${money}! Time to pay the $${tools[4].type} and pack it up for the day! You win the game!`
    );
  }
}

// I define a function that allows me to purchase my tool
let newTool = "";
function buyScissors() {
  if (money < 5) {
    alert(
      `Sorry you only have $${money}, that's not enough to purchase this item. Get back to using those ${tools[0].type}!`
    );
  } else if (money >= 5) {
    document.getElementById("scissors");
    money -= 5;
    newTool = tools[1].type;
    alert(
      `You got some ${tools[1].type}! You can now cut lawns for $${tools[1].pay}! Your dentist will thank you later!`
    );
  } else {
    alert(`You need more money to buy this.. get back to chewing!`);
  }
}
//I define a function that allows me to purchase the push mower
function buyPushMow() {
  if (money < 25) {
    alert(
      `Sorry, you only have $${money}, that is not enough to purchase this item. You need to keep using ${tools[1].name}!`
    );
  } else if (money >= 25) {
    document.getElementById("push");
    money -= 25;
    newTool = tools[2].type;
    alert(
      `You got yourself a ${tools[2].type}! You can now cut lawns for $${tools[2].pay} and with more ease!`
    );
  } else {
    alert(
      `You need more money to buy this.. keep those clipping those hedges.`
    );
  }
}
// I define a function that allows me to buy the battery powered mower
function buyBatteryMower() {
  if (money < 250) {
    alert(
      `Sorry, You only have $${money}, that is not enough to purchase this item. Keep using ${tools[2].type}!`
    );
  } else if (money >= 250) {
    document.getElementById("battery");
    money -= 250;
    newTool = tools[3].type;
    alert(
      `You got yourself a ${tools[3].type}! You can now cut lawns for ${tools[3].pay}!`
    );
  } else {
    alert(`You need more money for this.. Keep up the grind!`);
  }
}
// I define a function to purchase a team of starving students
function hireStarvingStudents() {
  if (money < 500) {
    alert(
      `Sorry, you only have $${money}, You won't be able to hire a team of hungry students! Keep using ${tools[3].type}!`
    );
  } else if (money >= 500) {
    document.getElementById("students");
    money -= 500;
    newTool = tools[4].type;
    alert(
      `You got yourself a team of ${tools[4].type}! Now productivity can go up and cuts will cost $${tools[4].pay}!`
    );
  }
}
