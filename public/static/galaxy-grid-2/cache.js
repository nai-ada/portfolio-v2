// document.addEventListener('DOMContentLoaded', function () {
//   // grabbing audio elements
//   const lobbyMusic = document.getElementById('lobby-audio');
//   const menuClickAudio = document.getElementById('menu-click-audio');
//   const roleClickAudio = document.getElementById('role-click-audio');

//   // Set initial volume
//   lobbyMusic.volume = 0.5;
//   menuClickAudio.volume = 0.4;
//   roleClickAudio.volume = 0.3;

//   // Mute/Unmute buttons
//   const mutedButton = document.getElementById('muted-button');
//   const unmutedButton = document.getElementById('unmuted-button');

//   // Check localStorage for mute state
//   const isMuted = localStorage.getItem('isMuted') === 'true';

//   // Set initial mute state based on localStorage - I have no idea how this even works the way I want it to, but it does
//   [lobbyMusic, menuClickAudio, roleClickAudio].forEach((audio) => {
//     audio.muted = !isMuted;
//   });

//   if (!isMuted) {
//     unmutedButton.style.display = 'none';
//     mutedButton.style.display = 'block';
//   } else {
//     unmutedButton.style.display = 'block';
//     mutedButton.style.display = 'none';
//   }

//   function toggleMute() {
//     const newMuteState = !lobbyMusic.muted;
//     [lobbyMusic, menuClickAudio, roleClickAudio].forEach((audio) => {
//       audio.muted = newMuteState;
//     });

//     if (newMuteState) {
//       unmutedButton.style.display = 'none';
//       mutedButton.style.display = 'block';
//       localStorage.setItem('isMuted', 'true');
//       console.log('no sound is playing!');
//     } else {
//       unmutedButton.style.display = 'block';
//       mutedButton.style.display = 'none';
//       localStorage.setItem('isMuted', 'false');
//       console.log('sound is playing!');
//     }
//   }

//   mutedButton.addEventListener('click', toggleMute);
//   unmutedButton.addEventListener('click', toggleMute);

//   MAX_BOX_OCCUPANCY = 1

//       if (userRole === astronautRole) {
//         if (box.innerHTML === '') {
//           // Check if the cell is empty
//           box.innerHTML =
//             '<img src="icons/astronaut.svg" alt="Astronaut" style="width: 75px;" />';
//           console.log(`Astronaut clicked on box ${index}`);
//         }
//       } else if (userRole === spaceshipRole) {
//         if (box.innerHTML === '') {
//           // Check if the cell is empty
//           box.innerHTML =
//             '<img src="icons/spaceship.svg" alt="Spaceship" style="width: 75px;" />';
//           console.log(`Spaceship clicked on box ${index}`);
//         }
//       }

//   // Next round button sound effect
//   nextRoundButton.addEventListener('click', function () {
//     menuClickAudio.play();
//   });

//   // Logic for when user chooses either astronaut or spaceship role/rememebering role selector

//   // isAstronautRoleClicked = false;
//   // isSpaceshipRoleClicked = false;

//   // astronautRole.addEventListener('click', () => {
//   //   if ((astronautRole = 'clicked')) {
//   //     isAstronautRoleClicked = true;
//   //     userRole = astronautRole;
//   //     cpuRole = spaceshipRole;
//   //     console.log('Astronaut role clicked');
//   //   }
//   // });

//   // spaceshipRole.addEventListener('click', () => {
//   //   if ((spaceshipRole = 'clicked')) {
//   //     isSpaceshipRoleClicked = true;
//   //     userRole = spaceshipRole;
//   //     cpuRole = astronautRole;
//   //     console.log('Spaceship role clicked');
//   //   }
//   // });

//   // grabbing table data elements and putting them into an array so that whatever user clicks on (based on their choice of role) will display in each td (using innerHTML)

//       switch (userRole) {
//         case astronautRole:
//           break;
//         case spaceshipRole:
//           break;
//         default:
//           break;
//       }

//       box.innerHTML =
//         userRole === astronautRole
//           ? '<img src="icons/astronaut.svg" alt="Astronaut" style="width: 75px;" />'
//           : '<img src="icons/spaceship.svg" alt="Spaceship" style="width: 75px;" />';

//       let playerScore = 0;
//       let computerScore = 0;

//       // variable with possible win combinations for when user or cpu wins

//       function checkPlayerWin() {
//         return winCombinations.some((combination) => {
//           if (
//             combination.every((index) => {
//               let box = boxes[index];
//               return box.classList.contains(playerSymbol.toLowerCase());
//             })
//           ) {
//             // if a win combination is found, add the winning class to the boxes (this is for styling purposes, as I wanted to add a background/border hightlight)
//             combination.forEach((index) => {
//               boxes[index].classList.add('won');
//             });
//             return true;
//           }
//           return false;
//         });
//       }
//     });
//   });
// });
