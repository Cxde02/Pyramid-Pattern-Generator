function createPyramid() {
  var lines = document.getElementById("lines").value;
  var pyramid = "";

  if (lines < 1 || isNaN(parseInt(lines))) {
    alert("Invalid Input! Please enter a valid integer greater than 0.");
  } else {
    for (var i = 1; i <= lines; i++) {
      for (var j = 1; j <= lines - i; j++) {
        pyramid += "&nbsp;&nbsp;";
      }
      for (var k = 1; k <= 2 * i - 1; k++) {
        pyramid += "*";
      }
      pyramid += "<br/>";
    }

    document.getElementById("dispPyramid").innerHTML = pyramid;
  }
}

function createPyramidUD() {
  var lines = document.getElementById("lines").value;
  var pyramid = "";

  if (lines < 1 || isNaN(parseInt(lines))) {
    alert("Invalid Input! Please enter a valid integer greater than 0.");
  } else {
    for (var i = lines; i >= 1; i--) {
      for (var j = 1; j <= lines - i; j++) {
        pyramid += "&nbsp;&nbsp;";
      }
      for (var k = 1; k <= 2 * i - 1; k++) {
        pyramid += "*";
      }
      pyramid += "<br/>";
    }

    document.getElementById("dispPyramid").innerHTML = pyramid;
  }
}

function createTower() {
  var lines = document.getElementById("lines").value;
  var tower = "";

  if (lines < 1 || isNaN(parseInt(lines))) {
    alert("Invalid Input! Please enter a valid integer greater than 0.");
  } else {
    for (var i = 0; i < lines; i++) {
      for (var j = 0; j <= i; j++) {
        tower += "*";
      }
      tower += "<br/>";
    }

    document.getElementById("dispPyramid").innerHTML = tower;
  }
}

function createTowerUD() {
  var lines = document.getElementById("lines").value;
  var pyramid = "";

  if (lines < 1 || isNaN(parseInt(lines))) {
    alert("Invalid Input! Please enter a valid integer greater than 0.");
  } else {
    for (var i = 0; i <= lines; i++) {
      for (var j = 1; j <= lines - i; j++) {
        pyramid += "*";
      }
      pyramid += "<br/>";
    }

    document.getElementById("dispPyramid").innerHTML = pyramid;
  }
}

function clearPyramid() {
  const Text = "Pyramid Will Be Displayed here";
  document.getElementById("dispPyramid").innerHTML = Text;
  document.getElementById("dispPyramid").style.color = "#fff";
  document.getElementById("lines").value = "";
}

function changeColor(color) {
  var colorMap = {
    green: "#52b788",
    red: "#d90429",
    blue: "#040788",
    purple: "#7209b7",
    silver: "#e9ecef",
    pink: "#ff5d8f",
    yellow: "#ffff3f",
    cyan: "#7bdff2",
    orange: "#fb8500",
  };

  document.getElementById("dispPyramid").style.color = colorMap[color];
}
