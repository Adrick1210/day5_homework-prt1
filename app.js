// console.log("Hello World!")

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
];

// I set the money that the landscaper starts with
let money = 0;
let accountBal = [];

// I define the function to add one dollar to cut with teeth
function cutWithTeeth() {
  if (money < 5) {
    money += 1;
    accountBal.splice(0, 1, money);
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
    accountBal.splice(0, 1, money);
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
    accountBal.splice(0, 1, money);
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

// I define a function that allows me to purchase my tool
let newTool = "";
function buyScissors() {
  if (accountBal < 5) {
    alert(
      `Sorry you only have $${money}, that's not enough to purchase this item. Get back to using those ${tools[0].type}!`
    );
  } else if (accountBal >= 5) {
    document.getElementById("scissors");
    accountBal.splice(0, 1, (money -= 5));
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
  if (accountBal < 25) {
    alert(
      `Sorry, you only have $${money}, that is not enough to purchase this item. You need to keep using ${tools[1].name}!`
    );
  } else if (accountBal >= 25) {
    document.getElementById("push");
    accountBal.splice(0, 1, (money -= 25));
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
  if (accountBal < 250) {
    alert(
      `Sorry, You only have $${money}, that is not enough to purchase this item. Keep using ${tools[2].type}!`
    );
  } else if (accountBal >= 250) {
    document.getElementById("battery");
    accountBal.splice(1, 0, money);
    newTool = tools[3].type;
    alert(
      `You got yourself a ${tools[3].type}! You can now cut lawns for ${tools[3].pay}!`
    );
  } else {
    alert(`You need more money for this.. Keep up the grind!`);
  }
}
