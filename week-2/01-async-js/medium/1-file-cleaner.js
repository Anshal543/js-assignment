const fs = require('fs');

// Function to clean the file content by removing extra spaces
const cleanFileContent = (filePath) => {
  // Read the file content
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err);
      return;
    }

    // Remove extra spaces (more than one) between words
    const cleanedData = data.replace(/\s+/g, ' ').trim();

    // Write the cleaned content back to the file
    fs.writeFile(filePath, cleanedData, (err) => {
      if (err) {
        console.error('Error writing to the file:', err);
      } else {
        console.log('File cleaned successfully!');
      }
    });
  });
};

// Example usage
const exampleFilePath = "./4-file.txt" // Replace with the path to your file
cleanFileContent(exampleFilePath);
