document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Guardamos los datos
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Limpiar formulario ANTES de abrir la ventana
            form.reset();

            let ficha;

            // En móvil: pestaña nueva
            if (window.innerWidth < 600) {
                ficha = window.open("about:blank", "_blank");
            } else {
                const width = 420;
                const height = 420;

                const left = (window.screen.width / 2) - (width / 2);
                const top = (window.screen.height / 2) - (height / 2);

                ficha = window.open(
                    "about:blank",
                    "FichaUsuario",
                    `width=${width},height=${height},left=${left},top=${top},resizable=yes`
                );
            }

            ficha.document.write(`
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <title>Ficha del Usuario</title>
                    <link rel="stylesheet" href="../Statics/styles.css">
                    <style>
                        body {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100vh;
                            text-align: center;
                        }

                        main {
                            max-width: 300px;
                        }

                        button {
                            margin-top: 20px;
                        }
                    </style>
                </head>
                <body>
                    <main>
                        <h2>Ficha del Usuario</h2>
                        <p><strong>Nombre:</strong> ${name}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Contraseña:</strong> ${password}</p>

                        <button onclick="window.close()">Cerrar</button>
                    </main>
                </body>
                </html>
            `);

            ficha.document.close();
        });
    }
});
