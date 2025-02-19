const https = require("https");

function fetchScrollContent(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", () => {
          resolve(data);
        });
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

function extractSecrets(scrollContent) {
  const secretPattern = /\{\*(.*?)\*\}/g;
  const secrets = [];
  let match;
  while ((match = secretPattern.exec(scrollContent)) !== null) {
    secrets.push(match[1]);
  }
  return secrets;
}

function displaySecrets(secrets) {
  console.log("Extracted Secrets:");
  secrets.forEach((secret, index) => {
    console.log(`${index + 1}. ${secret}`);
  });
}

async function main() {
  const url =
    "https://raw.githubusercontent.com/sombaner/copilot-hackathon-challenges/main/Data/Scrolls.txt";
  try {
    const scrollContent = await fetchScrollContent(url);
    const secrets = extractSecrets(scrollContent);
    displaySecrets(secrets);
  } catch (error) {
    console.error("Error fetching or processing the scroll content:", error);
  }
}

main();
