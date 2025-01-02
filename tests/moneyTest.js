import { formatCurrency } from "../scripts/util/money.js";

console.log("Test suite: formatCurrency");

console.log("Converts cents to dollars");
if (formatCurrency(2095) === "20.95") {
  console.log("passed");
} else {
  console.log("Failed");
}

console.log("Works with zero");
if (formatCurrency(0) === "0.00") {
  console.log("passed");
} else {
  console.log("Failed");
}

console.log("Rounds up to the nearset number");
if (formatCurrency(2000.5) === "20.01") {
  console.log("passed");
} else {
  console.log("Failed");
}

if (formatCurrency(2000.04) === "20.00") {
  console.log("passed");
} else {
  console.log("Failed");
}
