document.addEventListener('DOMContentLoaded', function () {
  // adding audio elements
  const lobbyMusic = document.getElementById('lobby-audio');
  const menuClickAudio = document.getElementById('menu-click-audio');
  const roleClickAudio = document.getElementById('role-click-audio');
  const gameplayClick = document.getElementById('gameplay-click-audio');
  const cpuGameplayClick = document.getElementById('cpu-gameplay-click-audio');
  const failAudio = document.getElementById('fail-audio');
  const wonAudio = document.getElementById('won-audio');
  const drawAudio = document.getElementById('draw-audio');
  const gameOverAudio = document.getElementById('gameover-audio');
  const video = document.getElementById('background');
  const galaxyImg = document.getElementById('galaxy-img');

  lobbyMusic.load();

  // Set initial volume
  lobbyMusic.volume = 0.2;
  menuClickAudio.volume = 0.2;
  roleClickAudio.volume = 0.2;
  gameplayClick.volume = 0.2;
  cpuGameplayClick.volume = 0.2;
  wonAudio.volume = 0.3;
  failAudio.volume = 0.3;
  gameOverAudio.volume = 0.3;

  // Mute/Unmute buttons
  const mutedButton = document.getElementById('muted-button');
  const unmutedButton = document.getElementById('unmuted-button');

  // Check localStorage for mute state
  const isMuted = localStorage.getItem('isMuted') === 'true';

  // Set initial mute state based on localStorage - I have no idea how this even works the way I want it to, but it does
  [
    lobbyMusic,
    menuClickAudio,
    roleClickAudio,
    gameplayClick,
    cpuGameplayClick,
    gameOverAudio,
    wonAudio,
    failAudio,
    drawAudio,
  ].forEach((audio) => {
    audio.muted = isMuted;
  });

  if (isMuted) {
    unmutedButton.style.display = 'none';
    mutedButton.style.display = 'block';
  } else {
    unmutedButton.style.display = 'block';
    mutedButton.style.display = 'none';
  }

  function toggleMute() {
    const newMuteState = !lobbyMusic.muted;
    [
      lobbyMusic,
      menuClickAudio,
      roleClickAudio,
      gameplayClick,
      cpuGameplayClick,
      gameOverAudio,
      wonAudio,
      failAudio,
      drawAudio,
    ].forEach((audio) => {
      audio.muted = newMuteState;
    });

    if (newMuteState) {
      unmutedButton.style.display = 'none';
      mutedButton.style.display = 'block';
      localStorage.setItem('isMuted', 'true');
      console.log('no sound is playing!');
    } else {
      unmutedButton.style.display = 'block';
      mutedButton.style.display = 'none';
      localStorage.setItem('isMuted', 'false');
      console.log('sound is playing!');
    }
  }

  mutedButton.addEventListener('click', toggleMute);
  unmutedButton.addEventListener('click', toggleMute);

  function handleVideoOnMobile() {
    if (window.innerWidth < 768) {
      video.removeAttribute('autoplay');
      video.pause();
      video.src = ''; // Remove the source to prevent loading
      video.style.display = 'none'; // Optionally hide the video element
      galaxyImg.style.display = 'block'; // Show the galaxy image instead
      galaxyImg.style.display = 'block'; // Optionally hide the video element
      galaxyImg.style.position = 'fixed';
      galaxyImg.style.right = '0';
      galaxyImg.style.bottom = '0';
      galaxyImg.style.maxWidth = '100%';
      galaxyImg.style.minHeight = '100%';
      galaxyImg.style.objectFit = 'cover';
      galaxyImg.style.overflowX = 'hidden';
      galaxyImg.style.zIndex = '-1';
      galaxyImg.style.filter = 'brightness(60%)';
    } else if (window.innerWidth > 768) {
      galaxyImg.style.display = 'none';
      video.src = 'media/main-galaxy-bg.mp4'; // Remove the source to prevent loading
      video.play();
      video.setAttribute('autoplay', '');
      video.style.display = 'block'; // Optionally hide the video element
      video.style.position = 'fixed';
      video.style.right = '0';
      video.style.bottom = '0';
      video.style.maxWidth = '100%';
      video.style.minHeight = '100%';
      video.style.objectFit = 'cover';
      video.style.overflowX = 'hidden';
      video.style.zIndex = '-1';
      video.style.filter = 'brightness(60%)';
    }
  }

  galaxyImg.style.display = 'none';

  // Run on page load
  handleVideoOnMobile();

  // Run on window resize
  window.addEventListener('resize', handleVideoOnMobile);

  // Navigation logic
  const startButton = document.getElementById('start-button');
  let astronautRole = document.getElementById('astronaut-role');
  let alienRole = document.getElementById('alien-role');
  let userRole = '';
  let cpuRole = '';

  startButton.addEventListener('click', function () {
    document.getElementById('main-section').style.display = 'none';
    document.getElementById('selection-section').style.display = 'block';
    menuClickAudio.play();
  });

  astronautRole.addEventListener('click', function () {
    document.getElementById('selection-section').style.display = 'none';
    document.getElementById('game-section').style.display = 'block';
    roleClickAudio.play();

    userRole = astronautRole;
    cpuRole = alienRole;
  });

  alienRole.addEventListener('click', function () {
    document.getElementById('selection-section').style.display = 'none';
    document.getElementById('game-section').style.display = 'block';
    roleClickAudio.play();

    userRole = alienRole;
    cpuRole = astronautRole;
  });

  // role selector logic

  isAstronautRoleClicked = false;
  isAlienRoleClicked = false;

  astronautRole.addEventListener('click', () => {
    if ((astronautRole = 'clicked')) {
      isAstronautRoleClicked = true;
      userRole = astronautRole;
      cpuRole = alienRole;
      console.log('Astronaut role clicked');
    }
  });

  alienRole.addEventListener('click', () => {
    if ((alienRole = 'clicked')) {
      isAlienRoleClicked = true;
      userRole = alienRole;
      cpuRole = astronautRole;
      console.log('Alien role clicked');
    }
  });

  // game logic

  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let boxes = document.getElementsByTagName('td');
  const alienClass = 'alien';
  const astronautClass = 'astronaut';
  let playerScore = document.getElementById('player-score-num');
  let cpuScore = document.getElementById('cpu-score-num');
  let gameActive = true;
  let isCpuTurn = false;
  const resultMessage = document.getElementById('result-message');
  const subResultMsg = document.getElementById('sub-result-message');
  const nextRoundButton = document.getElementById('next-round-button'); // Renamed variable

  Array.from(boxes).forEach((box, index) => {
    box.addEventListener('click', (e) => {
      // Check if the move is valid
      if (!gameActive || box.innerHTML !== '' || isCpuTurn) {
        return; // Exit the function if the move is not valid
      }

      console.log(`box ${index} clicked`);

      // Apply user's move

      gameplayClick.play();
      box.innerHTML =
        userRole === astronautRole
          ? '<img src="icons/astronaut.png" alt="Astronaut" style="width: 75px;" />'
          : '<img src="icons/alien.png" alt="Alien" style="width: 75px;" />';
      // Style the result message

      box.classList.add(
        userRole === astronautRole ? astronautClass : alienClass,
      );
      // Add these styles to center the image
      box.style.justifyContent = 'center';
      box.style.alignItems = 'center';

      if (checkWin(userRole)) {
        endGame(userRole);
      } else if (checkDraw()) {
        endGame('draw');
      } else {
        isCpuTurn = true;
        setTimeout(executeCpuTurn, 500);
      }
    });
  });

  function checkDraw() {
    return Array.from(boxes).every((box) => box.innerHTML !== '');
  }

  function checkWin(role) {
    return winCombinations.some((combination) => {
      const boxesInCombination = combination.map((i) => boxes[i]);
      return boxesInCombination.every((box) =>
        box.classList.contains(
          role === astronautRole ? astronautClass : alienClass,
        ),
      );
    });
  }

  function endGame(result) {
    gameActive = false;
    nextRoundButton.disabled = false; // Enable the button when the game ends

    // Create an overlay div for the blurred background
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        backdrop-filter: blur(5px);
        z-index: 999;
    `;
    document.body.appendChild(overlay);

    // Style the result message
    resultMessage.style.cssText = `
        display: block;
        position: fixed;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        font-size: 2.3rem;
        text-align: center;
        color: white;
        font-family: 'Poppins', sans-serif;
        text-transform: uppercase;
        font-weight: bold;
        background-color: rgba(0, 0, 0, 0.8);
        padding: 1rem;
        border-radius: 20px;
    `;

    // Style the result message
    subResultMsg.style.cssText = `
        display: block;
        position: fixed;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
        font-size: 1.3rem;
        text-align: center;
        color: white;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        background-color: rgba(0, 0, 0, 0.8);
        padding: 1rem;
        border-radius: 20px;
    `;

    const winningRole =
      result === astronautRole
        ? `<span style="color: #4cbdff; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">Astronaut</span>`
        : `<span style="color: #27fc6e; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">Alien</span>`;
    const winningClass = result === astronautRole ? astronautClass : alienClass;

    // Apply winning class
    winCombinations.forEach((combination) => {
      if (
        combination.every((index) =>
          boxes[index].classList.contains(winningClass),
        )
      ) {
        combination.forEach((index) => {
          boxes[index].classList.add(
            result === userRole ? 'userwon' : 'cpuwon',
          );
        });
      }
    });

    if (result === userRole) {
      playerScore.innerHTML = parseInt(playerScore.innerHTML || '0') + 10;
      wonAudio.play();
    } else {
      cpuScore.innerHTML = parseInt(cpuScore.innerHTML || '0') + 10;
      failAudio.play();
    }

    if (round < 10) {
      if (result === 'draw') {
        drawAudio.play();
        resultMessage.innerHTML = `<span style="color:  #FFD700; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">Draw</span>`;
        subResultMsg.innerHTML = `Click anywhere to close this message, then click the Next Round button to continue playing.`;
      } else {
        resultMessage.innerHTML = `${winningRole} wins the round!`;
        subResultMsg.innerHTML = `Click anywhere to close this message, then click the Next Round button to continue playing.`;
      }
    } else if (round === 10) {
      gameOverAudio.play();
      resultMessage.innerHTML = 'Game Over!';

      const playerScoreValue = parseInt(playerScore.innerHTML || '0');
      const cpuScoreValue = parseInt(cpuScore.innerHTML || '0');

      if (playerScoreValue === cpuScoreValue) {
        subResultMsg.innerHTML = `<span style="color: #FFD700; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">It's a tie!</span> Click on the New Game button to start a new game.`;
      } else {
        switch (true) {
          case playerScoreValue > cpuScoreValue:
            subResultMsg.innerHTML = `<span style="color: #31ebc9; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">You won the game!</span> Click on the New Game button to start a new game.`;
            break;
          case cpuScoreValue > playerScoreValue:
            subResultMsg.innerHTML = `<span style="color: #f8306f; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);">You lost the game!</span> Click on the New Game button to start a new game.`;
            break;
          default:
            subResultMsg.innerHTML = `It's a tie! Click anywhere to close this message, then click on the New Game button to play again.`;
        }
      }

      nextRoundButton.innerHTML = 'New Game';
    }

    // Add a click event to remove the overlay and reset the game
    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
      resultMessage.style.display = 'none';
      subResultMsg.style.display = 'none';
    });
  }

  function newGameReset() {
    round = 1;
    roundNum.innerText = round;
    removeMsgForFinalMsg.style.display = 'block';
    finalRoundMsg.style.display = 'none';

    Array.from(boxes).forEach((box) => {
      box.innerHTML = '';
      box.classList.remove('userwon', 'cpuwon', astronautClass, alienClass);
    });

    playerScore.innerHTML = '0';
    cpuScore.innerHTML = '0';

    gameActive = true;
    isCpuTurn = false;
    nextRoundButton.innerHTML = 'Next Round';
    nextRoundButton.disabled = true;
  }

  const MAX_CLASSLIST_SIZE = 1;

  function executeCpuTurn() {
    if (!gameActive) return;

    function getRandomBox() {
      return Math.floor(Math.random() * 9);
    }

    let box = null;
    let attempts = 0;
    const maxAttempts = 20;

    do {
      box = boxes[getRandomBox()];
      attempts++;
      if (attempts > maxAttempts) {
        console.log('No empty boxes found');
        return;
      }
    } while (box.classList.length > MAX_CLASSLIST_SIZE || box.innerHTML !== '');

    console.log(
      `(CPU) Found unoccupied box: ${Array.from(boxes).indexOf(box)}`,
    );

    // Fill the box with CPU's role immediately
    box.innerHTML =
      cpuRole === astronautRole
        ? '<img src="icons/astronaut.png" alt="Astronaut" style="width: 75px;" />'
        : '<img src="icons/alien.png" alt="Alien" style="width: 75px;" />';
    cpuGameplayClick.play();
    box.classList.add(cpuRole === astronautRole ? astronautClass : alienClass);

    // Add these styles to center the image

    box.style.justifyContent = 'center';
    box.style.alignItems = 'center';

    // Check for win condition or draw after a short delay
    setTimeout(() => {
      if (checkWin(cpuRole)) {
        endGame(cpuRole);
      } else if (checkDraw()) {
        endGame('draw');
      } else {
        isCpuTurn = false;
      }
    }, 200);
  }

  let round = 1;
  const roundNum = document.getElementById('round-num');
  const finalRoundMsg = document.getElementById('final-msg');
  finalRoundMsg.innerText = 'Final Round!';
  finalRoundMsg.style.display = 'none'; // Initially hide the final round message
  const removeMsgForFinalMsg = document.getElementById('remove-all-for-final');

  nextRoundButton.addEventListener('click', () => {
    if (nextRoundButton.innerHTML === 'New Game') {
      newGameReset();
    } else {
      nextRound();
    }
  });

  function nextRound() {
    Array.from(boxes).forEach((box) => {
      menuClickAudio.play();
      box.innerHTML = '';
      box.classList.remove('userwon', 'cpuwon', astronautClass, alienClass);
    });

    resultMessage.style.display = 'none';
    subResultMsg.style.display = 'none';

    round++;

    if (round < 10) {
      roundNum.innerText = round;
      removeMsgForFinalMsg.style.display = 'block';
      finalRoundMsg.style.display = 'none';
    } else if (round === 10) {
      removeMsgForFinalMsg.style.display = 'none'; // Corrected from roundNum.display
      finalRoundMsg.style.display = 'block';
    }

    gameActive = true;
    isCpuTurn = false;
    nextRoundButton.disabled = true; // Disable the button at the start of a new round
  }

  // Initial setup
  nextRoundButton.disabled = true;
  roundNum.innerText = round; // Set initial round number
});
