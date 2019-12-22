const waypoint1 = new Waypoint({
  element: document.getElementById('arts'),
  handler: function(direction) {
    if (direction == 'down') {
      document.querySelector('.body-bg').style.backgroundImage = "url('src/img/bg-skyline-2.jpg')";
      document.querySelector('.body-bg').style.transition = ".5s";
    } else if (direction == 'up') {
      document.querySelector('.body-bg').style.backgroundImage = "url('src/img/bg-skyline-1.jpg')";
    }
  }
});

const waypoint2 = new Waypoint({
  element: document.getElementById('alumni'),
  handler: function(direction) {
    if (direction == 'down') {
      document.querySelector('.body-bg').style.backgroundImage = "url('src/img/bg-sitting-grass.jpg')";
      document.querySelector('.body-bg').style.transition = ".5s";
    } else if (direction == 'up') {
      document.querySelector('.body-bg').style.backgroundImage = "url('src/img/bg-skyline-2.jpg')";
    }
  }
});