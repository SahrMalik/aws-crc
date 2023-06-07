const counter = document.querySelector(".view-count");
async function updateCounter() {
    let response = await fetch("https://uwzdq3c4j5n4ole6vnoqhg647q0qdcra.lambda-url.eu-west-2.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` Views: ${data}`;
}

updateCounter();

//test