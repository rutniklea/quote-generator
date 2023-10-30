const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const githubBtn = document.getElementById('github');
const linkedBtn = document.getElementById('linkedin');


// Function to get a random quote from the API
async function getQuote() {
    try {
    const response = await fetch('https://type.fit/api/quotes');
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomQuote = data[randomIndex];

      // Display the quote text
        quoteText.textContent = randomQuote.text;

      // Set the author text to "Unknown" if there is no author information
    const author = randomQuote.author || 'Unknown';
    authorText.textContent = author.replace('type.fit', '').replace(/,\s*$/, '');

    } catch (error) {
    console.error('Error fetching quote:', error);
    }
}

// Add connections to Github and LinkedIn

// my GitHub profile URL
const githubProfileUrl = 'https://github.com/rutniklea';

// My LinkedIn profile URL
const LinkedInProfileUrl = 'https://si.linkedin.com/in/lea-rutnik';

//  Event listener to the button Github / Linkedin button
githubBtn.addEventListener('click', () => {
    // Opens my GitHub profile in a new tab
    window.open(githubProfileUrl, '_blank');
});
linkedBtn.addEventListener('click', () => {
    window.open(LinkedInProfileUrl, '_blank');
});

// Event listener for the "New Quote" button
newQuoteBtn.addEventListener('click', getQuote);

// Initial call to get a quote when the page loads
getQuote();
