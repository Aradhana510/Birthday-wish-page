// Set the date and time for your birthday
const birthdayDate = new Date('2024-08-21T19:30:00'); // Change this date and time to when you want the pop-up to appear

// Flag to check if the pop-up has been shown
let popUpShown = false;

function updateCountdown() {
    const now = new Date();
    const timeDifference = birthdayDate - now;

    if (timeDifference < 0) {
        // If the target date and time have passed, display the custom message
        if (!popUpShown) {
            // Only show the pop-up and play the song if it hasn't been shown yet
            playSound(); // Play the birthday song
            showPopupMessage();
            popUpShown = true; // Set the flag to true to avoid showing it again
        }
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = `${days}d`;
    document.getElementById('hours').textContent = `${hours}h`;
    document.getElementById('minutes').textContent = `${minutes}m`;
    document.getElementById('seconds').textContent = `${seconds}s`;
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Function to play the birthday song
function playSound() {
    const audio = document.getElementById('birthdaySong');
    if (audio) {
        audio.play();
    }
}

// Function to show the pop-up message
function showPopupMessage() {
    const messages = [
        "For your birthday, I wanted to give you something that was both funny and charming",
        "but then I remembered you already have me in your life.",
        "Happy Birthday Again!"
    ];

    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popupMessage');
    const closeButton = document.getElementById('closePopup');
    let index = 0;

    // Display the pop-up
    popup.style.display = 'flex';

    // Show each message one by one
    function showNextMessage() {
        if (index < messages.length) {
            popupMessage.textContent = messages[index];
            index++;
            setTimeout(showNextMessage, 3000); // Show each message for 3 seconds
        } else {
            // After all messages are shown, display the close button
            setTimeout(() => {
                closeButton.style.display = 'block';
            }, 3000); // Show the close button after the final message
        }
    }

    showNextMessage();
}

// Function to close the pop-up
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
