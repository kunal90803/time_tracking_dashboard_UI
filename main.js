let elements = document.getElementsByClassName("workdet");
let timer = "daily";
let pre;

async function dataCollector() {
  const url = "./data.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }
    const json = await response.json();
    if (timer == "daily") {
      pre = "Yesterday";
    } else if (timer == "weekly") {
      pre = "Last Week";
    } else if (timer == "monthly") {
      pre = "Last Month";
    }
    for (let i = 0; i < 6; i++) {
      elements[i].innerHTML = `
            <article class="boxtop">
              <p>${json[i].title}</p>
              <img class="threedot" src="./images/icon-ellipsis.svg" alt="dots" />
            </article>
            <article class="boxbottom">
              <span class="curr">${json[i].timeframes[timer].current}hrs</span>
              <span class="prev">${pre} - ${json[i].timeframes[timer].previous}hrs</span>
            </article>
        `;
    }
    
  } catch (error) {
    console.log(error.message);
  }
}
function setTimer(newTimer, element) {
  timer = newTimer;
  document
    .querySelectorAll(".stats button")
    .forEach((btn) => btn.classList.remove("active"));
  element.classList.add("active");
  dataCollector();
}
dataCollector();

