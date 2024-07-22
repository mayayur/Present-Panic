document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('.btn');
    const dog = document.getElementById("dog");
    const present = document.getElementById("present");
    const gameContainer = document.getElementById("gameContainer");
    const wordDisplay = document.getElementById('wordDisplay');
    const resetButton = document.getElementById('resetButton');
    const gameMessage = document.getElementById('gameMessage'); // New element for messages

    let words = [
        "strawberry", "banana", "apple", "car", "house", "cat", "dog", "book", 
        "computer", "phone", "table", "chair", "tree", "river", "mountain", 
        "ocean", "flower", "garden", "city", "town", "village", "street", 
        "road", "bridge", "park", "school", "teacher", "student", "friend", 
        "family", "child", "baby", "parent", "mother", "father", "brother", 
        "sister", "grandparent", "uncle", "aunt", "cousin", "neighbor", 
        "classroom", "library", "museum", "hospital", "doctor", "nurse", 
        "dentist", "pharmacy", "store", "market", "restaurant", "cafe", 
        "bakery", "butcher", "grocer", "chef", "waiter", "customer", 
        "cashier", "manager", "office", "building", "factory", "warehouse", 
        "shop", "mall", "supermarket", "bank", "account", "money", "cash", 
        "check", "card", "wallet", "pocket", "jacket", "coat", "shirt", 
        "pants", "dress", "skirt", "shoes", "socks", "hat", "gloves", 
        "scarf", "belt", "tie", "watch", "ring", "bracelet", "necklace", 
        "earring", "glasses", "sunglasses", "bag", "purse", "backpack", 
        "suitcase", "luggage", "train", "bus", "bicycle", "motorcycle", 
        "airplane", "airport", "station", "ticket", "passport", "map", 
        "guide", "tour", "travel", "trip", "vacation", "holiday", "beach", 
        "island", "desert", "forest", "jungle", "rainforest", "field", 
        "meadow", "hill", "valley", "canyon", "cliff", "rock", "sand", 
        "pebble", "stone", "boulder", "cave", "crater", "volcano", 
        "earthquake", "storm", "hurricane", "tornado", "wind", "rain", 
        "snow", "ice", "hail", "sleet", "lightning", "thunder", "cloud", 
        "sky", "sun", "moon", "star", "planet", "comet", "asteroid", 
        "galaxy", "universe", "space", "alien", "astronaut", "spaceship", 
        "rocket", "satellite", "telescope", "observatory", "science", 
        "experiment", "laboratory", "research", "theory", "hypothesis", 
        "formula", "equation", "calculator", "microscope", "atom", 
        "molecule", "chemical", "element", "compound", "mixture", "solution", 
        "reaction", "energy", "force", "motion", "gravity", "friction", 
        "velocity", "acceleration", "momentum", "wave", "sound", "light", 
        "reflection", "refraction", "lens", "prism", "color", "spectrum", 
        "frequency", "wavelength", "amplitude", "electricity", "magnet", 
        "battery", "circuit", "current", "voltage", "resistance", "power", 
        "machine", "engine", "motor", "robot", "automation", "program", 
        "software", "hardware", "database", "network", "internet", 
        "website", "email", "message", "chat", "forum", "blog", "social", 
        "media", "video", "photo", "picture", "image", "album", "music", 
        "song", "melody", "harmony", "instrument", "band", "orchestra", 
        "concert", "festival", "art", "painting", "drawing", "sketch", 
        "sculpture", "gallery", "museum", "exhibit", "statue", "monument", 
        "history", "culture", "tradition", "custom", "holiday", "celebration", 
        "party", "event", "festival", "parade", "ceremony", "wedding", 
        "birthday", "anniversary", "graduation", "competition", "contest", 
        "game", "sport", "team", "player", "coach", "referee", "stadium", 
        "arena", "gym", "track", "field", "court", "pool", "race", 
        "marathon", "tournament", "league", "championship", "victory", 
        "trophy", "medal", "prize", "reward", "winner", "loser", "score", 
        "goal", "point", "record", "result", "performance", "skill", 
        "talent", "practice", "training", "exercise", "fitness", "health", 
        "nutrition", "diet", "food", "meal", "breakfast", "lunch", "dinner", 
        "snack", "dessert", "recipe", "ingredient", "cooking", "kitchen", 
        "oven", "stove", "microwave", "fridge", "freezer", "pantry", 
        "cabinet", "sink", "dish", "plate", "bowl", "cup", "glass", 
        "mug", "fork", "knife", "spoon", "napkin", "tablecloth", 
        "cookbook", "baker", "chef", "cuisine", "restaurant", "menu", 
        "order", "bill", "tip", "waiter", "server", "chef", "kitchen", 
        "cook", "meal", "breakfast", "lunch", "dinner", "snack", "dessert", 
        "salad", "soup", "appetizer", "entree", "side", "dish", "beverage", 
        "drink", "coffee", "tea", "juice", "milk", "water", "soda", 
        "wine", "beer", "cocktail", "smoothie", "shake", "dessert", 
        "cake", "pie", "cookie", "brownie", "ice cream", "pudding", 
        "custard", "fruit", "vegetable", "meat", "fish", "chicken", 
        "beef", "pork", "lamb", "turkey", "duck", "goose", "rabbit", 
        "venison", "seafood", "shrimp", "crab", "lobster", "oyster", 
        "clam", "mussel", "scallop", "squid", "octopus", "caviar", 
        "salmon", "tuna", "cod", "trout", "bass", "halibut", "flounder", 
        "tilapia", "catfish", "sardine", "anchovy", "herring", "mackerel", 
        "snapper", "grouper", "mahimahi", "swordfish", "shark", "ray", 
        "eel", "octopus", "whale", "dolphin", "seal", "penguin", "walrus", 
        "sea lion", "seahorse", "starfish", "jellyfish", "urchin", "coral", 
        "anemone", "crayfish", "barnacle", "manta ray", "shrimp", "lobster", 
        "prawn", "clam", "scallop", "oyster", "mussel", "plankton", "algae", 
        "seaweed", "kelp", "octopus", "squid", "cuttlefish", "nautilus", 
        "crab", "hermit crab", "horseshoe crab", "fiddler crab", "ghost crab", 
        "shrimp", "lobster", "prawn", "clam", "scallop", "oyster", "mussel", 
        "plankton", "algae", "seaweed", "kelp", "octopus", "squid", 
        "cuttlefish", "nautilus", "crab", "hermit crab", "horseshoe crab", 
        "fiddler crab", "ghost crab", "shrimp", "lobster", "prawn", 
        "clam", "scallop", "oyster", "mussel", "plankton", "algae", 
        "seaweed", "kelp", "octopus", "squid", "cuttlefish", "nautilus", 
        "crab", "hermit crab", "horseshoe crab", "fiddler crab", "ghost crab", 
        "shrimp", "lobster"]
      
      
    let randomWord;
    let pickedLetters;
    let wrongLetters;
    let currentSegment;
    let segmentDistance;
    const maxWrongGuesses = 8; // Maximum number of wrong guesses allowed
    let isMoving = false; // Flag to check if the dog is moving

    // Function to set up the initial game state
    async function setupInitialGame() {
        console.log('Initializing game...');
        randomWord = words[Math.floor(Math.random() * words.length)];
        pickedLetters = [];
        wrongLetters = [];
        currentSegment = 0;

        // Calculate the distance between the dog and the present
        const dogRect = dog.getBoundingClientRect();
        const presentRect = present.getBoundingClientRect();
        const distance = gameContainer.offsetWidth - dogRect.width - presentRect.width - 60; // 30px padding on each side
        segmentDistance = distance / maxWrongGuesses; // Use maxWrongGuesses for segments

        // Position elements
        dog.style.left = "30px"; // 30px from the left border
        dog.style.bottom = "30px"; // 30px from the bottom
        present.style.right = "30px"; // 30px from the right border
        present.style.bottom = "30px"; // 30px from the bottom

        updateWordDisplay();
        enableButtons();

        // Remove existing event listeners
        buttons.forEach(btn => {
            btn.disabled = false;
            btn.style.opacity = "1";
            btn.removeEventListener('click', handleButtonClick);
            btn.addEventListener('click', handleButtonClick);
        });

        // Hide the game message initially
        gameMessage.style.visibility = 'hidden';
    }

    function revealWord() {
        wordDisplay.textContent = randomWord;
    }

    // Handle button click
    function handleButtonClick(event) {
        const guessedLetter = event.target.textContent.toLowerCase(); // Get the letter from the button
        if (!isMoving) { // Only process if the dog is not moving
            handleLetterGuess(guessedLetter);
            event.target.disabled = true; // Disable the button after it's clicked
            event.target.style.opacity = "0.4"; // Set transparency to 40%
        }
    }

    // Function to move the dog
    function moveDog() {
        if (currentSegment < maxWrongGuesses) {
            isMoving = true; // Set moving flag to true
            currentSegment++;
            const newLeft = 30 + segmentDistance * currentSegment; // 30px padding from the left

            // Apply CSS transition for smooth movement
            dog.style.transition = "left 1s ease-in-out";
            dog.style.left = newLeft + "px";

            // Reset flag after movement completes
            setTimeout(() => {
                isMoving = false;
            }, 1000); // Match the transition duration
        }
    }

    // Function to update the word display with underscores and guessed letters
    function updateWordDisplay() {
        wordDisplay.textContent = randomWord.split('').map(letter => 
            pickedLetters.includes(letter) ? letter : '_'
        ).join(' ');
    }

    // Function to handle letter guessing
    function handleLetterGuess(letter) {
    if (randomWord.includes(letter)) {
        if (!pickedLetters.includes(letter)) {
            pickedLetters.push(letter);
        }
        updateWordDisplay();

        // Check if the player has won
        if (randomWord.split('').every(letter => pickedLetters.includes(letter))) {
            setTimeout(() => {
                revealWord(); // Reveal the word
                gameMessage.textContent = 'You won!';
                gameMessage.style.visibility = 'visible';
                disableButtons();
                scheduleReset(); // Schedule reset after win
            }, 1000);
        }
    } else {
        if (!wrongLetters.includes(letter)) {
            wrongLetters.push(letter);
            moveDog();

            // Check if the player has lost
            if (wrongLetters.length >= maxWrongGuesses) {
                setTimeout(() => {
                    revealWord(); // Reveal the word
                    gameMessage.textContent = 'You lose!';
                    gameMessage.style.visibility = 'visible';
                    disableButtons();
                    scheduleReset(); // Schedule reset after loss
                }, 1000);
            }
        }
    }
}

    function scheduleReset() {
        setTimeout(() => {
            setupInitialGame().then(() => {
                console.log('Game reset complete');
            });
        }, 5000); // 5 seconds delay
    }

    // Function to enable all keyboard buttons
    function enableButtons() {
        buttons.forEach(btn => {
            btn.disabled = false;
            btn.style.opacity = "1";
        });
    }

    // Function to disable all keyboard buttons
    function disableButtons() {
        buttons.forEach(btn => {
            btn.disabled = true;
            btn.style.opacity = "0.5";
        });
    }

    // Attach event listener to the reset button
    resetButton.addEventListener('click', () => {
        console.log('Reset button clicked');
        setupInitialGame().then(() => {
            console.log('Game reset complete');
        });
    });

    // Initialize the game on page load
    setupInitialGame();
});