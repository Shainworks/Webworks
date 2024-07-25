const rows = 4; // Number of rows

// Define the number of stars in each row
// const starsPerRow = [1, 2, 3, 4];

// Loop through each row
for (let i = 0; i < rows; i++) {
    let starPattern = ''

    // Append the correct number of stars to the pattern
    for (let j = 0; j <= i; j++) {
        starPattern += '*';
    }

    // Print the pattern for the current row
    console.log(starPattern);
}