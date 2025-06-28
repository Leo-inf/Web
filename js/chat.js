    const enviarBtn = document.getElementById("enviarBtn");
    const mensajeInput = document.getElementById("mensajeInput");
    const chatMensajes = document.getElementById("chat-mensajes");
    const contactos = document.querySelectorAll(".contacto");
    const nombreChat = document.getElementById("nombre-chat");

    enviarBtn.addEventListener("click", () => {
      const texto = mensajeInput.value.trim();
      if (texto !== "") {
        const nuevoMensaje = document.createElement("div");
        nuevoMensaje.classList.add("mensaje", "enviado");
        nuevoMensaje.textContent = texto;
        chatMensajes.appendChild(nuevoMensaje);
        mensajeInput.value = "";
        chatMensajes.scrollTop = chatMensajes.scrollHeight;
      }
    });

    mensajeInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        enviarBtn.click();
      }
    });

    contactos.forEach((contacto) => {
      contacto.addEventListener("click", () => {
        contactos.forEach(c => c.classList.remove("activo"));
        contacto.classList.add("activo");

        const nombre = contacto.textContent;
        nombreChat.textContent = "Chat con " + nombre;
        
      });
    });
    