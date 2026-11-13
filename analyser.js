// analyser.js - Expense Analyser

const fs = require("fs");
const _ = require("lodash"); // installed in Step 1 with: npm install lodash (not used further)

// GIVEN: turns the text of the file into an array of objects
// like { category: 'food', amount: 250 }
const parseExpenses = (text) => {
  return text
    .trim()
    .split("\n")
    .map((line) => {
      const parts = line.trim().split(",");
      return { category: parts[0], amount: Number(parts[1]) };
    });
};

// ---------- Step 3: read the file synchronously ----------
console.time("sync read");
const text = fs.readFileSync("expenses.txt", "utf8");
console.timeEnd("sync read");

const expenses = parseExpenses(text);
console.log("First expense:", expenses[0]);

// ---------- Step 4: higher-order functions ----------
// TODO: totalSpent - use reduce (initial value 0) to add up every amount
const totalSpent = expenses.reduce((acc, curr) => acc + curr.amount, 0);
console.log("Total spent:", totalSpent);

// TODO: bigExpenses - use filter to keep expenses with amount > 500
const bigExpenses = expenses.filter((expense) => expense.amount > 500);
console.log("Big expenses:", bigExpenses);

// TODO: withFee - use map to return NEW objects with a flat Rs 50 delivery fee
//       added to the amount. Use the spread operator { ...e, amount: ... }
//       so the original objects are not changed.
const withFee = expenses.map((expense) => ({
  ...expense,
  amount: expense.amount + 50,
}));
console.log("With fee:", withFee);

// ---------- Step 5: totals per category ----------
const totalsByCategory = {};
// TODO: loop over expenses with for...of. For each one:
//       if totalsByCategory[e.category] is undefined, set it to 0 first,
//       then add e.amount to it.
for (const expense of expenses) {
  if (totalsByCategory[expense.category] === undefined) {
    totalsByCategory[expense.category] = 0;
  }
  totalsByCategory[expense.category] += expense.amount;
}
console.log("Totals by category:", totalsByCategory);

// ---------- Step 6: switch and ternary ----------
function budgetNote(category) {
  // TODO: use a switch with break. 'food' -> 'Daily need', 'travel' -> 'Commute',
  //       'books' -> 'Study', and a default of 'Other'. Return the text.
  let note = "";
  switch (category) {
    case "food":
      note = "Daily need";
      break;
    case "travel":
      note = "Commute";
      break;
    case "books":
      note = "Study";
      break;
    default:
      note = "Other";
  }
  return note;
}
const categories = ["food", "travel", "books", "entertainment"];
// TODO: use categories.forEach. For each category, print one line with a
//       template literal, for example:
//       food (Daily need): Rs 940 - OK
//       Use ONE ternary to print 'OVER 1500' instead of 'OK' when the total > 1500.
categories.forEach((category) => {
  const total = totalsByCategory[category] ?? 0;
  const note = budgetNote(category);
  const status = total > 1500 ? "OVER 1500" : "OK";

  console.log(`${category} (${note}): Rs ${total} - ${status}`);
});
// ---------- Step 7: closure ----------
function createBudgetTracker(limit) {
  // TODO: declare a variable spent = 0 here, then return a function spend(amount)
  //       that adds amount to spent and returns:
  //       Remaining: ${...}  or  Over budget by ${...}

  let spent = 0;

  return function spend(amount) {
    spent += amount;

    const remaining = limit - spent;

    return remaining >= 0
      ? `Remaining: ${remaining}`
      : `Over budget by ${-remaining}`;
  };
}
const tracker = createBudgetTracker(1000);
console.log(tracker(300));
console.log(tracker(500));
console.log(tracker(400));
// ---------- Step 8: read the file asynchronously ----------
// TODO: use fs.readFile('expenses.txt', 'utf8', callback). The callback takes (err, data).
//       If err, log it and return. Otherwise log 'Async read finished'.
fs.readFile("expenses.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Async read finished");
});

// TODO: right after the fs.readFile call, run a for loop that counts to 1000000
//       and log 'Loop finished'. Note which message prints first.
let count = 0;
for (let i = 0; i < 1000000; i++) {
  count++;
}
console.log("Loop finished");
