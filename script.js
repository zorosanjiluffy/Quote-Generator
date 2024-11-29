const api_url = "https://quote-of-the-day-api1.p.rapidapi.com/random";
const api_key = "9c0a3afe61msh5888295871d438dp106182jsn66144a748dbe";

async function getQuote() {
    try {
        const response = await fetch(api_url, {
            method: "GET",
            headers: {
                "X-RapidAPI-Host": "quote-of-the-day-api1.p.rapidapi.com",
                "X-RapidAPI-Key": api_key
            }
        });

        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

        const data = await response.json();

        document.querySelector("blockquote").textContent = data.quote;
        document.querySelector("span").textContent = `— ${data.author}`;
    } catch (error) {
        console.error("Error fetching the quote:", error);
        document.querySelector("blockquote").textContent = "Failed to load quote.";
        document.querySelector("span").textContent = "";
    }
}

document.querySelector("button").addEventListener("click", getQuote);

getQuote();
