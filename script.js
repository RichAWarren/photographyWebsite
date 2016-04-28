var myImages = [ 'photo/1.jpg', 'photo/2.jpg', 'photo/3.jpg', 'photo/4.jpg', 'photo/5.jpg', 'photo/6.jpg', 'photo/7.jpg', 'photo/8.jpg', 'photo/9.jpg', 'photo/10.jpg', 'photo/11.jpg', 'photo/12.jpg', 'photo/13.jpg', 'photo/14.jpg', 'photo/15.jpg', 'photo/16.jpg', 'photo/17.jpg', 'photo/18.jpg', 'photo/19.jpg',
'photo/20.jpg', 'photo/21.jpg', 'photo/22.jpg', 'photo/23.jpg', 'photo/24.jpg', 'photo/25.jpg', 'photo/26.jpg', 'photo/27.jpg', 'photo/28.jpg', 'photo/29.jpg', 'photo/30.jpg',
  'photo/31.jpg', 'photo/32.jpg', 'photo/33.jpg', 'photo/34.jpg', 'photo/35.jpg', 'photo/36.jpg', 'photo/37.jpg', 'photo/38.jpg', 'photo/39.jpg' ];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
}

function changeImg() {
  for (i = 1; i < myImages.length; i++) {
    var image = document.getElementById(i);
    image.src = myImages[i];
  }
}

shuffle(myImages);

changeImg();

var lastClicked = 0

function rightEnlarge(clickid) {
  clearEnlarge();
  var d = document.getElementById(clickid);
  if (clickid !== lastClicked) {
  d.classList.toggle('righthover');
  };
  lastClicked = clickid;
};

function leftEnlarge(clickid) {
  clearEnlarge();
  var d1 = document.getElementById(clickid);
  if (clickid !== lastClicked) {
  d1.classList.toggle('lefthover');
  };
  lastClicked = clickid;
};

function centerEnlarge(clickid) {
  clearEnlarge();
  var d2 = document.getElementById(clickid);
  if (clickid !== lastClicked) {
  d2.classList.toggle('centerhover');
  };
  lastClicked = clickid;
};

function clearEnlarge() {
  var elements = document.querySelectorAll(".righthover");
  for (var i = elements.length-1; i > -1; i--) {
     elements[i].classList.remove('righthover');
  }
  var elements1 = document.querySelectorAll(".centerhover");
  for (var j = elements1.length-1; j > -1; j--) {
     elements1[j].classList.remove('centerhover');
  }
  var elements2 = document.querySelectorAll(".lefthover");
  for (var k = elements2.length-1; k > -1; k--) {
     elements2[k].classList.remove('lefthover');
  }
}
