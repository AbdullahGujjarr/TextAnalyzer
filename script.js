function analyzeText() {
    const textInput = document.getElementById("text-input");
    const resultsDiv = document.getElementById("results");
    const clearButton = document.getElementById("clear-results");
  
    // Clear any previous results
    resultsDiv.innerHTML = "";
  
    const text = textInput.value.trim();
  
    if (text.length === 0) {
      alert("Please enter some text to analyze!");
      return;
    }
  
    // Process text (basic word frequency)
    const wordCounts = {};
    const words = text.split(/\s+/); // Split text into words (whitespace delimiter)
  
    for (const word of words) {
      const lowerCaseWord = word.toLowerCase(); // Make case-insensitive
      if (wordCounts[lowerCaseWord]) {
        wordCounts[lowerCaseWord]++;
      } else {
        wordCounts[lowerCaseWord] = 1;
      }
    }
  
    // Display results
    resultsDiv.innerHTML = "<h2>Word Frequency</h2>";
    const resultList = document.createElement("ul");
    for (const word in wordCounts) {
      const count = wordCounts[word];
      const listItem = document.createElement("li");
      listItem.textContent = `${word}: ${count}`;
      listItem.addEventListener("click", function() {
        delete wordCounts[word];
        this.remove(); // Remove the list item when clicked
        // Update total word count (optional)
      });
      resultList.appendChild(listItem);
    }
    resultsDiv.appendChild(resultList);
  
    // Update text length
    document.getElementById("text-length").textContent = `Text Length: ${text.length} characters`;
  
    // Enable clear button
    clearButton.disabled = false;
    clearButton.style.opacity = 1; // Make button fully visible
  }
  
  function clearResults() {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    document.getElementById("clear-results").disabled = true;
    document.getElementById("clear-results").style.opacity = 0.5; // Disable button visually
  }
  