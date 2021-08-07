(() => {
  let audio = document.querySelector('audio'),
      playButton = document.querySelector('.controls button');

  function playAudio() {
    document.querySelector(".lz1").classList.add('zoomlz1');
    document.querySelector(".lzend").classList.add('lzendturn');
    document.querySelectorAll('path').forEach(path => path.classList.add('text-anim'));
    document.querySelector("#typelayout").classList.add('container-turn', 'turnagain', 'backToScholing');

    // document.querySelector(".lz1").classList.add('fadeout');

    audio.play();
  }


  playButton.addEventListener("click", playAudio);

})();
