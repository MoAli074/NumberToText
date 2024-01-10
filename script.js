const btn = document.querySelector("button");
const input = document.querySelector("input");
const resultSpan = document.querySelector(".result-span");
const NumberToText = (Number) => {
  if (Number < 0) {
    return "Minus " + NumberToText(Number * -1);
  }
  if (Number == 0) {
    return "";
  }

  if (Number >= 1 && Number <= 19) {
    let list = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighten",
      "Nineteen",
    ];
    return list[Number];
  }
  if (Number >= 20 && Number <= 99) {
    let list = ["", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
    return list[Math.trunc(Number / 10)] + " " + NumberToText(Number % 10);
  }
  if (Number >= 100 && Number <= 199) {
    return "One Hundred " + NumberToText(Number % 100);
  }
  if (Number >= 200 && Number <= 999) {
    return NumberToText(Math.trunc(Number / 100)) + " Hundreds " + NumberToText(Number % 100);
  }
  if (Number >= 1000 && Number <= 1999) {
    return "One Thousand " + NumberToText(Number % 1000);
  }
  if (Number >= 2000 && Number <= 999999) {
    return NumberToText(Math.trunc(Number / 1000)) + " Thousands " + NumberToText(Number % 1000);
  }
  if (Number >= 1000000 && Number <= 1999999) {
    return "One Milion " + NumberToText(Number % 1000000);
  }
  if (Number >= 2000000 && Number <= 999999999) {
    return NumberToText(Math.trunc(Number / 1000000)) + " Milions " + NumberToText(Number % 1000000);
  }
  if (Number >= 1000000000 && Number <= 1999999999) {
    return "One Bilion " + NumberToText(Number % 1000000000);
  }
  if (Number >= 2000000000) {
    return NumberToText(Math.trunc(Number / 1000000000)) + " Bilions " + NumberToText(Number % 1000000000);
  }
};
const showResult = () => {
  let value = parseInt(input.value.trim());
  if (value.length != 0 && !isNaN(value)) {
    if (value == 0) {
      resultSpan.textContent = "Zero";
    } else {
      resultSpan.textContent = NumberToText(value);
    }
  }
};
btn.addEventListener("click", showResult);
input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    showResult();
  }
});
