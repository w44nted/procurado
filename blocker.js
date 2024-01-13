mode = 1;
document.oncontextmenu = new Function("return false;")

function getKey(e) {
  var key = e.keyCode;
  console.log(key);

  if (key == 16 || key == 17) {
    mode = 2;
  }

  if (key == 17) {
    return false;
  }

  if (mode == 1) {
    if (key == 123) {
      return false;
    }

    if (key == 65 && mode == 1) {
      return false;
    }

    if (key == 67 && mode == 1) {
      return false;
    }

    if (key == 86 && mode == 1) {
      return false;
    }
  } else {
    if (key == 73 || key == 74 || key == 85) {
      return false;
    } else {
      if (key == 123) {
        return false;
        }
      }
    }
}
window.onkeydown = getKey;

window.onkeydown = function(e) {
  if (e.keyCode == 17) {
    return false;
  }

  if (e.keyCode == 65 && mode == 1) {
    return false;
  }

  if (e.keyCode == 67 && mode == 1) {
    return false;
  }

  if (e.keyCode == 86 && mode == 1) {
    return false;
  }

  if (e.keyCode == 1) {
    return false;
  }
};
