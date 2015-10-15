var playlist = new Playlist();

var hereComesTheSun = new Song('Here comes the sun', 'The Beatles', '2:54');
var walkingOnSunshine = new Song('Walking on sunshine', 'Katrina and the Waves', '3:43');

var manOfSteel = new Movie('Man of Steel', 2013, '2:23:00');

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);
playlist.add(manOfSteel);

var playlistElement = document.getElementById('playlist');

playlist.renderInElement(playlistElement);


var playButton = document.getElementById('play');
var nextButton = document.getElementById('next');
var stopButton = document.getElementById('stop');

playButton.onclick = function() {
  playlist.play();
  playlist.renderInElement(playlistElement);
};

nextButton.onclick = function() {
  playlist.next();
  playlist.renderInElement(playlistElement);
};

stopButton.onclick = function() {
  playlist.stop();
  playlist.renderInElement(playlistElement);
};

