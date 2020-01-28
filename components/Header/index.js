// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
  const newHeader = document.createElement("div");
  date = document.createElement("span");
  title = document.createElement("h1");
  temp = document.createElement("span");

  newHeader.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  newHeader.append(date);
  newHeader.append(title);
  newHeader.append(temp);

  date.textContent = "March 28,2019";
  title.textContent = "Lambda Times";
  temp.textContent = "98°";

  return newHeader;
}

const headerContainer = document.querySelector(".header-container");

headerContainer.append(Header());
