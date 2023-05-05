// console.log("Hello World!")

// I set the tools for the landscaper to use
let tools = [
  {
    type: "Teeth",
    pay: 1,
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
    console.log(accountBal)
    alert(
      `You did it! You earned $${money} cutting lawns today! You got a jaw that won't quit! You now have $${money}`
    );
  } else {
    alert(
      "You have earned enough to stop using your canines! Please proceed to the store to get your upgrade!"
    );
  }
}
// cutWithTeeth();
