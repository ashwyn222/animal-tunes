document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');
    
    // Sound map for animal sounds
    const soundMap = {
        animal1: './sounds/tiger.mp3',
        animal2: './sounds/cow.mp3',
        animal3: './sounds/lion.mp3',
        animal4: './sounds/deer.mp3',
        animal5: './sounds/zebra.mp3',
        animal6: './sounds/monkey.wav',
        animal7: './sounds/hen.wav',
        animal8: './sounds/horse.wav',
        animal9: './sounds/panda.mp3',
        animal10: './sounds/elephant.mp3',
        animal11: './sounds/hippo.mp3',
        animal12: './sounds/camel.mp3',
        animal13: './sounds/snake.mp3',
        animal14: './sounds/rabbit.mp3',
        animal15: './sounds/rhino.mp3',
        animal16: './sounds/giraffe.mp3',
        animal17: './sounds/cat.wav',
        animal18: './sounds/dog.wav',
    };

    // Key binding map for animals
    const keyMap = {
        a: 'animal1', b: 'animal1', ';': 'animal1',
        c: 'animal2', d: 'animal2', "'": 'animal2',
        e: 'animal3', f: 'animal3', '.': 'animal3',
        g: 'animal4', h: 'animal4', '/': 'animal4',
        i: 'animal5', j: 'animal5', '[': 'animal5',
        k: 'animal6', l: 'animal6', ']': 'animal6',
        m: 'animal7', n: 'animal7',
        o: 'animal8', p: 'animal8',
        q: 'animal9', r: 'animal9',
        s: 'animal10', t: 'animal10',
        u: 'animal11', v: 'animal11',
        w: 'animal12', x: 'animal12',
        y: 'animal13', z: 'animal13',
        0: 'animal14', 1: 'animal14',
        2: 'animal15', 3: 'animal15',
        4: 'animal16', 5: 'animal16',
        6: 'animal17', 7: 'animal17',
        8: 'animal18', 9: 'animal18',
    };

    let isPlaying = false; // Flag to track if a sound is playing

    // Add click listener for each circle
    circles.forEach(circle => {
        circle.addEventListener('click', function () {
            const animal = this.classList[1]; // Get the animal class (e.g., animal1, animal2)
            if (!isPlaying) {
                playSound(animal);
                circle.classList.add('pressed'); // Add bounce class
                
                // Remove the 'pressed' class after animation ends
                setTimeout(() => {
                    circle.classList.remove('pressed');
                }, 300); // Match the duration of the bounce animation (0.3s)
            }
        });
    });

    // Add keypress interaction for each circle
    document.addEventListener('keydown', function (event) {
        const key = event.key.toLowerCase(); // Convert to lowercase to match keyMap
        const animal = keyMap[key]; // Get the animal corresponding to the key

        if (animal && !isPlaying) {
            const circle = document.querySelector(`.${animal}`);
            playSound(animal);
            circle.classList.add('pressed'); // Add bounce animation on keypress

            // Remove 'pressed' class after animation
            setTimeout(() => {
                circle.classList.remove('pressed');
            }, 300);
        }
    });

    // Function to play the corresponding sound
    function playSound(animal) {
        const soundFile = soundMap[animal]; // Get the sound file from the sound map
        const audio = new Audio(soundFile); // Create a new audio object
        isPlaying = true; // Set flag to true to indicate sound is playing

        // Play the sound and wait for it to finish
        audio.play();
        audio.addEventListener('ended', function() {
            isPlaying = false; // Reset flag when sound finishes playing
        });
    }
});
