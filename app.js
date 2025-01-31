const input = document.getElementById("password");
const copy = document.getElementById("copy");
const generate = document.getElementById("create");
// Example: Fetch password from API
const generatePassword = async () => {
    const apiUrl = 'https://api.api-ninjas.com/v1/passwordgenerator?length=12';
    
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'I2hA60KI636Q3dgcjHp7Hg==D23O0E9Bb4mwGejT', // Replace with your actual API key
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const passwordData = await response.json();
        console.log(passwordData); // Handle the generated password here
        input.value = passwordData.random_password;

    } catch (error) {
        console.error('Error fetching password:', error);
    }
};


generate.addEventListener("click", () => {
    generatePassword();
});

copy.addEventListener("click", () => {
    input.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
});
