// Frontend JS here
// 👉 REEMPLAZAR CUANDO ME DES LAS URLs:
const API_CONVERT = "URL_DE_TU_FUNCTION_convert-currency";
const API_HISTORY = "URL_DE_TU_FUNCTION_get-history";

const form = document.getElementById("converter-form");
const resultDiv = document.getElementById("result");
const loading = document.getElementById("loading");
const historyList = document.getElementById("history-list");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        from: document.getElementById("from-currency").value,
        to: document.getElementById("to-currency").value,
        amount: document.getElementById("amount").value
    };

    try {
        loading.style.display = "block";
        resultDiv.style.display = "none";

        const res = await fetch(API_CONVERT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        });

        const json = await res.json();
        loading.style.display = "none";

        if (json.success) {
            resultDiv.style.display = "block";
            resultDiv.innerText = `${data.amount} ${data.from} = ${json.result} ${data.to}`;
            
            await saveHistory(data, json.result);
            loadHistory();
        } else {
            alert("Error: " + json.error);
        }

    } catch (err) {
        loading.style.display = "none";
        alert("Error en la API");
        console.error(err);
    }
});

async function saveHistory(data, result) {
    await fetch(API_HISTORY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ...data,
            result,
            date: new Date().toLocaleString()
        })
    });
}

async function loadHistory() {
    const res = await fetch(API_HISTORY);
    const json = await res.json();

    historyList.innerHTML = "";

    json.history?.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.amount} ${item.from} → ${item.result} ${item.to} (${item.date})`;
        historyList.appendChild(li);
    });
}

loadHistory();
