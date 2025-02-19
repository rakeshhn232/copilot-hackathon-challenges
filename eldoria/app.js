// Function to extract secrets from the scroll
function extractSecrets(scroll) {
  const regex = /\{\*(.*?)\*\}/g;
  const secrets = [];
  let match;

  while ((match = regex.exec(scroll)) !== null) {
    secrets.push(match[1]);
  }

  return secrets;
}

// Example scroll containing secrets and misleading information
const scroll =
  "The scroll contains both the Elders' secrets and misleading information. {*secret1*} Some text {*secret2*} more text.";

// Extract the secrets
const secrets = extractSecrets(scroll);

// Output the secrets
console.log(secrets);
