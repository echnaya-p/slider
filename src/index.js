const buttons =$("#color, #background");
const inputs = $("input");
const text = $(".text-box");
let propertyName = 'color';

function setPropertyName() {
  buttons.removeClass("ui-state-active");

  if (this.id == "color") {
    propertyName = "color";
    $(this).addClass("ui-state-active");
  }
  else if (this.id == "background") {
    propertyName = "background-color";
    $(this).addClass("ui-state-active");
  }
}

function changeColor() {
  const red = $("#red").val();
  const green = $("#green").val();
  const blue = $("#blue").val();

  text.css(propertyName, `rgb(${red}, ${green}, ${blue})`)
}

buttons.click(setPropertyName);
inputs.change(changeColor);