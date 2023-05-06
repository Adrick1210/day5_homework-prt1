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
