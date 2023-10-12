
/* COLORPICKER BG COLOR */

let bgcolorButton = document.getElementById("bgcolor");
let bgcolorLabel = document.getElementById("bgcolor-label");

bgcolorLabel.innerHTML = bgcolorButton.value;
bgcolorLabel.style.color = bgcolorButton.value;
bgcolorButton.oninput = function() {
    bgcolorLabel.innerHTML = bgcolorButton.value;
    bgcolorLabel.style.color = bgcolorButton.value;
}

/* COLORPICKER PENCIL */
let pencolorButton = document.getElementById("pencolor");
let pencolorLabel = document.getElementById("pencolor-label");

pencolorLabel.innerHTML = pencolorButton.value;
pencolorLabel.style.color = pencolorButton.value;
pencolorButton.oninput = function() {
    pencolorLabel.innerHTML = pencolorButton.value;
    pencolorLabel.style.color = pencolorButton.value;
}

/*slider update text*/
const slider = document.querySelector("#slider");
const output = document.querySelector(".slider-output");
const container = document.querySelector(".grid")

output.textContent = slider.value + " x " + slider.value;

slider.addEventListener("input", () => {
  output.textContent = slider.value + " x " + slider.value;
  let gridValue = Math.ceil(Math.sqrt(slider.value));
  
  container.style.gridTemplateColumns = `repeat(${gridValue}, 1fr)`;
  console.log( container.style.gridTemplateColumns = `repeat(${gridValue}, 1fr)`);
    container.innerHTML = "";
  for(let i = 0; i <slider.value; i++){
    addElement(container);
    console.log(`div added ${i} times`)
  }

  
});


/* CREATE DIV TABLE */

function addElement($mainDiv){
    const newDiv = document.createElement("div");
    document.querySelector(".grid").appendChild(newDiv);
}