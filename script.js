const crocodileFacts = [
    { "fact": "Crocodiles are reptiles that belong to the family Crocodylidae." },
    { "fact": "They are found in tropical and subtropical regions around the world." },
    { "fact": "Crocodiles can live for over 70 years in the wild." },
    { "fact": "They are carnivorous and primarily feed on fish, birds, and mammals." },
    { "fact": "Crocodiles have powerful jaws with a bite force of over 3,000 pounds per square inch." },
    { "fact": "They are excellent swimmers and can hold their breath underwater for up to an hour." },
    { "fact": "Crocodiles are ectothermic, meaning they rely on external sources to regulate their body temperature." },
    { "fact": "They have a unique ability to see in the dark due to a special layer of tissue in their eyes." },
    { "fact": "Crocodiles communicate through a variety of vocalizations, including growls and hisses." },
    { "fact": "Some species of crocodiles can reach lengths of over 20 feet." }
];

document.getElementById('factButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * crocodileFacts.length);
    const factDisplay = document.getElementById('factDisplay');
    factDisplay.style.opacity = 0; // Fade out
    setTimeout(() => {
        factDisplay.textContent = crocodileFacts[randomIndex].fact;
        factDisplay.style.opacity = 1; // Fade in
    }, 500);
});
