import { say } from "cowsay";
import "./style.css";
import mockingcase from "@strdr4605/mockingcase";

document.querySelector("#app").innerHTML = `
<main id="main">
<h1>Crazy mimic cow</h1>
<div class="inputs">
  <label for="input">Tell the cow something</label>
  <input type="text" name="input" id="input"></input>
  <select id="eyes-selection">
    <option value="OO">OO</option>
    <option value="oO">oO</option>
    <option value="Oo">Oo</option>
    <option value="oo">oo</option>
    <option value="^^">^^</option>
    <option value="CC">CC</option>
    <option value="QQ">QQ</option>
    <option value="XX">XX</option>
    <option value="$$">$$</option>    
  </select>
  <button id="submit-btn">Submit</button>
</div>
<div id="response-container"></div>
</main>
<footer>
  <p><span>Dependencies:</span> mockingcase and cowsay</p>
</footer>
`;

const inputField = document.querySelector("#input");
const eyesSelection = document.querySelector("#eyes-selection");
const responseContainer = document.querySelector("#response-container");
const submitBtn = document.querySelector("#submit-btn");

inputField.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    createCowResponse();
  }
});

submitBtn.addEventListener("click", () => {
  createCowResponse();
});

const createCowResponse = () => {
  const input = inputField.value;
  console.log(input);
  const cowResponse = document.createElement("p");
  cowResponse.id = "cow-response";
  cowResponse.textContent = say({
    text: mockingcase(input),
    eyes: eyesSelection.value,
  });
  console.log(cowResponse.textContent);

  responseContainer.replaceChildren();
  responseContainer.append(cowResponse);
};
