const drawBtn = document.getElementById("draw");
const ereaserBtn = document.getElementById("eraser");
const rainbowBtn = document.getElementById("rainbow");
const darkenBtn = document.getElementById("darken");
const lightenBtn = document.getElementById("lighten");
const clearBtn = document.getElementById("clear");
const mainContainer = document.querySelector(".main");

const btns = document.querySelectorAll(".btn");
let active = drawBtn;
/*btns.forEach((elem) => {
  elem.addEventListener("click", () => {
    btns.forEach((remove) => {
      remove.classList.remove("on");
    });
    elem.classList.add("on");
    active = elem;
  });
});*/

/* COLORPICKER BG COLOR */

const bgcolorButton = document.getElementById("bgcolor");
const bgcolorLabel = document.getElementById("bgcolor-label");

bgcolorLabel.innerHTML = bgcolorButton.value;
bgcolorLabel.style.color = bgcolorButton.value;
bgcolorButton.oninput = function () {
  bgcolorLabel.innerHTML = bgcolorButton.value;
  bgcolorLabel.style.color = bgcolorButton.value;
  container.style.backgroundColor = bgcolorButton.value;

  document.querySelectorAll(".square").forEach((square) => {
    square.style.backgroundColor = bgcolorButton.value;
  });
};

/* COLORPICKER PENCIL */
const pencolorButton = document.getElementById("pencolor");
const pencolorLabel = document.getElementById("pencolor-label");

pencolorLabel.innerHTML = pencolorButton.value;
pencolorLabel.style.color = pencolorButton.value;
pencolorButton.oninput = function () {
  pencolorLabel.innerHTML = pencolorButton.value;
  pencolorLabel.style.color = pencolorButton.value;
};

/*slider update text*/
const slider = document.querySelector("#slider");
const output = document.querySelector(".slider-output");
const container = document.querySelector(".grid");

output.textContent = slider.value + " x " + slider.value;

window.onload = () => {
  for (let i = 0; i < slider.value * slider.value; i++) {
    addElement(container);
  }
};

slider.addEventListener("input", () => {
  output.textContent = slider.value + " x " + slider.value;
  let gridValue = Math.ceil(slider.value);

  container.style.gridTemplateColumns = `repeat(${gridValue}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${gridValue}, 1fr)`;
  container.innerHTML = "";
  for (let i = 0; i < slider.value * slider.value; i++) {
    addElement(container);
  }
});

/* CREATE DIV TABLE */

function addElement($mainDiv) {
  const newDiv = document.createElement("div");
  newDiv.style.backgroundColor = bgcolorButton.value;
  document.querySelector(".grid").appendChild(newDiv).classList.add("square");
}
/*function darkenClr(color, percentage) {
  const rgb = color.match(/\d+/g);
  return `rgb(${rgb
    .map((channel) => Math.floor(channel * (1 - percentage / 100)))
    .join(",")})`;
}

function lightenClr(color, percentage) {
    const rgb = color.match(/\d+/g).map(Number);
    return `rgb(${rgb.map((channel) => Math.min(255, Math.floor(channel + (255 - channel) * (percentage / 100)))).join(",")})`;
}*/

/* DIV EVENTLISTENER */

/*let isMousePressed = false;

mainContainer.addEventListener("mouseup", () => {
    isMousePressed = false;
    mainContainer.removeEventListener("mouseup", null);
  });
mainContainer.addEventListener("mousedown", () => {
  const divs = document.querySelectorAll(".square");
  isMousePressed = true;

  

  divs.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      switch (active.innerHTML) {
        case "Draw":
          if (isMousePressed) elem.style.backgroundColor = pencolorButton.value;

          break;

        case "Eraser":
          if (isMousePressed) elem.style.backgroundColor = bgcolorButton.value;

          break;
        case "Rainbow":
          if (isMousePressed)
            elem.style.backgroundColor = `#${Math.floor(
              Math.random() * 16777215
            ).toString(16)}`;
          break;
        case "Darken":
          if (isMousePressed) {
            let currentColor = getComputedStyle(elem).backgroundColor;
            elem.style.backgroundColor = darkenClr(currentColor, 10);
          }
          break;
        case "Lighten":
          if (isMousePressed) {
            let currentColor = getComputedStyle(elem).backgroundColor;
        elem.style.backgroundColor = lightenClr(currentColor, 10);
        
          }
          
          break;
        case "Clear":
          container.innerHTML = "";
          for (let i = 0; i < slider.value * slider.value; i++) {
            addElement(container);
          }
          break;
      }
    });
  });
});
*/

function darkenClr(color, percentage) {
  const rgb = color.match(/\d+/g);
  return `rgb(${rgb
    .map((channel) => Math.floor(channel * (1 - percentage / 100)))
    .join(",")})`;
}

function lightenClr(color, percentage) {
  const rgb = color.match(/\d+/g).map(Number);
  return `rgb(${rgb
    .map((channel) =>
      Math.min(255, Math.floor(channel + (255 - channel) * (percentage / 100)))
    )
    .join(",")})`;
}

document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll(".btn");
  let active = document.getElementById("draw");

  btns.forEach((elem) => {
    elem.addEventListener("click", () => {
      btns.forEach((remove) => remove.classList.remove("on"));
      elem.classList.add("on");
      active = elem;

      if (active.id === "clear") {
        container.innerHTML = "";
        for (let i = 0; i < slider.value * slider.value; i++) {
          addElement(container);
        }
      }
    });
  });

  const bgcolorButton = document.getElementById("bgcolor");
  const container = document.querySelector(".grid");
  const pencolorButton = document.getElementById("pencolor");

  const mainContainer = document.querySelector(".main");

  mainContainer.addEventListener("mousedown", () => {
    const divs = document.querySelectorAll(".square");
    let isMousePressed = true;

    mainContainer.addEventListener("mouseup", () => {
      isMousePressed = false;
    });

    divs.forEach((elem) => {
      elem.addEventListener("mouseenter", () => {
        if (!isMousePressed) return;

        let currentColor = getComputedStyle(elem).backgroundColor;
        switch (active.id) {
          case "draw":
            elem.style.backgroundColor = pencolorButton.value;
            break;
          case "eraser":
            elem.style.backgroundColor = bgcolorButton.value;
            break;
          case "rainbow":
            elem.style.backgroundColor = `#${Math.floor(
              Math.random() * 16777215
            ).toString(16)}`;
            break;
          case "darken":
            elem.style.backgroundColor = darkenClr(currentColor, 10);
            break;
          case "lighten":
            elem.style.backgroundColor = lightenClr(currentColor, 10);
            break;
        }
      });
    });
  });
});
