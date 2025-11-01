from flask import Flask, render_template, session, request, redirect, url_for
import secrets

app = Flask(__name__)

# Gera uma chave secreta para a sessão  
app.secret_key = secrets.token_hex(16)

@app.route('/', methods=["GET", "POST"])
def index():
    # Inicializa histórico se não existir
    if "history" not in session:
        session["history"] = []

    if request.method == "POST":
        calc = request.form.get("calculo")
        result = request.form.get("resultado")

        if calc and result:
            # Adiciona o cálculo no início da lista
            session["history"].insert(0, f"{calc} = {result}")
            session.modified = True

        return redirect(url_for("index"))

    return render_template("index.html", history=session["history"])

if __name__ == "__main__":
    app.run(debug=True)
