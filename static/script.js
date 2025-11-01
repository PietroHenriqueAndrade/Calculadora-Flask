const display = document.getElementById('display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
const historyList = document.getElementById('history-list');
const percentButton = document.getElementById('percent');
const sqrtButton = document.getElementById('sqrt');
const powerButton = document.getElementById('power');

let shouldResetDisplay = false;

// =====================
// Funções básicas
// =====================

// Adiciona número no display
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (display.textContent === "0" || shouldResetDisplay) {
            display.textContent = button.textContent;
            shouldResetDisplay = false;
        } else {
            display.textContent += button.textContent;
        }
    });
});

// Adiciona operador no display
operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const lastChar = display.textContent.slice(-1);
        if (!['+', '-', '*', '/', '^'].includes(lastChar)) {
            display.textContent += button.textContent;
        }
    });
});

// =====================
// Funções avançadas
// =====================

// Porcentagem
percentButton.addEventListener('click', () => {
    const current = parseFloat(display.textContent);
    display.textContent = (current / 100).toString();
    shouldResetDisplay = true;
});

// Raiz quadrada
sqrtButton.addEventListener('click', () => {
    const current = parseFloat(display.textContent);
    if (current < 0) {
        display.textContent = "Erro";
    } else {
        display.textContent = Math.sqrt(current).toString();
    }
    shouldResetDisplay = true;
});

// Potência
powerButton.addEventListener('click', () => {
    const lastChar = display.textContent.slice(-1);
    if (!['+', '-', '*', '/', '^'].includes(lastChar)) {
        display.textContent += '^';
    }
});

// =====================
// Igual
// =====================
equalsButton.addEventListener('click', () => {
    try {
        let expr = display.textContent;

        // Bloqueia caracteres perigosos
        if (!/^[0-9+\-*/.^() ]+$/.test(expr)) {
            display.textContent = "Erro: entrada inválida!";
            shouldResetDisplay = true;
            return;
        }

        // Substitui "^" por "**" para o JS
        expr = expr.replace(/\^/g, "**");

        // Verifica divisão por zero
        if (/\/0(\D|$)/.test(expr)) {
            display.textContent = "Erro: divisão por zero!";
            shouldResetDisplay = true;
            return;
        }

        const result = eval(expr);
        display.textContent = result;

        // Atualiza histórico
        const listItem = document.createElement('li');
        listItem.textContent = expr.replace(/\*\*/g, '^') + " = " + result;
        historyList.prepend(listItem);

        // Envia para Flask
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: `calculo=${encodeURIComponent(expr.replace(/\*\*/g, '^'))}&resultado=${encodeURIComponent(result)}`
        });
    } catch {
        display.textContent = "Erro: expressão inválida!";
    }

    shouldResetDisplay = true;
});

// =====================
// Limpar display
// =====================
clearButton.addEventListener('click', () => {
    display.textContent = "0";
    shouldResetDisplay = false;
});
