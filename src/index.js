const buttons =$("#color, #background");
const textArea = $(".text-box");
let propertyName = 'color';

function hexFromRGB(r, g, b) {
  const hex = [r.toString(16), g.toString(16), b.toString(16)];

  $.each(hex, function (nr, val) {
    if (val.length === 1) {
      hex[nr] = "0" + val;
    }
  });

  return hex.join("").toUpperCase();
}

function setPropertyName() {
  buttons.removeClass("ui-state-active");

  if (this.id == "color") {
    propertyName = "color";
    $(this).addClass("ui-state-active");
  } else if (this.id == "background") {
    propertyName = "background-color";
    $(this).addClass("ui-state-active");
  }
}

function refreshColor() {
  const red = $("#red").slider("value");
  const green = $("#green").slider("value");
  const blue = $("#blue").slider("value");
  const hex = hexFromRGB(red, green, blue);

  textArea.css(propertyName, "#" + hex);
}

$("#red, #green, #blue").slider({
  orientation: "horizontal",
  range: "min",
  max: 255,
  value: 127,
  slide: refreshColor,
  change: refreshColor
});

$( "#red" ).slider( "value", 255 );
$( "#green" ).slider( "value", 140 );
$( "#blue" ).slider( "value", 60 );

buttons.click(setPropertyName);