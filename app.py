from flask import Flask, render_template, request, redirect, url_for
import sqlite3
from datetime import datetime

app = Flask(__name__, template_folder="templates")

# Configuración de la base de datos
DATABASE = "experiencia_laboral.db"

def create_table():
    conn = sqlite3.connect(DATABASE)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS experiencia_laboral (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            empresa TEXT NOT NULL,
            ubicacion TEXT,
            fecha_inicio TEXT,
            fecha_fin TEXT
        )
    ''')
    conn.commit()
    conn.close()

@app.route('/')
def index():
    create_table()
    return render_template('index.html')

# Bloque principal de la aplicación
if __name__ == '__main__':
    # Ruta para la Experiencia Laboral (/experience)
# ... (código anterior)

@app.route('/experience', methods=['GET', 'POST'])
def experience():
    if request.method == 'POST':
        titulo = request.form['titulo']
        empresa = request.form['empresa']
        ubicacion = request.form['ubicacion']
        fecha_inicio = request.form['fecha_inicio']
        fecha_fin = request.form['fecha_fin']

        conn = sqlite3.connect(DATABASE)
        cursor = conn.cursor()
        cursor.execute('''
            INSERT INTO experiencia_laboral (titulo, empresa, ubicacion, fecha_inicio, fecha_fin)
            VALUES (?, ?, ?, ?, ?)
        ''', (titulo, empresa, ubicacion, fecha_inicio, fecha_fin))
        conn.commit()
        conn.close()

        return redirect(url_for('index'))

    return render_template('add_experience.html')

    app.run(debug=True)
