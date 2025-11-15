# 🧮 Calculadora Web com Flask

Este projeto é uma calculadora web interativa desenvolvida com **Flask**, **HTML**, **CSS** e **JavaScript**, incluindo histórico de cálculos salvo em sessão.
A aplicação traz funções matemáticas comuns, operações adicionais como potência, porcentagem e raiz quadrada, além de um layout inspirado em calculadoras de smartphone.

---

## 🚀 Funcionalidades

- Interface estilo aplicativo
- Operações básicas: `+`, `-`, `*`, `/`
- Funções adicionais:
  - Porcentagem `%`
  - Raiz quadrada `√`
  - Potência `^`
- Validações automáticas:
  - Bloqueio de expressões inválidas
  - Erro de divisão por zero
  - Caracteres não permitidos
- Histórico de cálculos salvo em sessão com Flask
- Interface responsiva e estilizada

---

## 📂 Estrutura

📁 Calculadora-Flask
├── app.py → Servidor Flask
├── /templates
│ └── index.html → Interface principal
├── /static
  ├── style.css → Estilos da calculadora
  └── script.js → Lógica da calculadora (frontend)

---

## ⚙️ Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/PietroHenriqueAndrade/Calculadora-Flask.git
   cd calculadora-flask
   ```
2. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
3. Execute o script principal:
   ```bash
   python app.py
   ```
4. Acesse no navegador:
   ```bash
   http://127.0.0.1:5000/
   ```
---

## 🛠️ Tecnologias

- Python
- Flask
- HTML
- CSS
- JavaScript

---

## 📌 Observações

-O histórico é salvo usando Flask Session com chave secreta gerada automaticamente.
-Toda vez que o botão `=` é pressionado, o cálculo é enviado ao backend via `fetch().`
-A validação impede erros comuns como divisão por zero e caracteres inválidos.
-Projeto criado para fins educacionais e prática de Flask + Frontend.

---

## 👨‍💻 Autor

Feito por **Pietro Henrique Gomes de Andrade**  
📧 Email: hpietro540@gmail.com 
💼 [LinkedIn](https://www.linkedin.com/in/pietro-andrade-a6061a386)  
🐙 [GitHub](https://github.com/PietroHenriqueAndrade)