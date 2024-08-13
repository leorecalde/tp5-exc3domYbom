const ingresaTarea = () => {
  const escribeTarea = document.createElement(`form`);
  console.log(escribeTarea);
  escribeTarea.innerHTML = `<div>
                <label>ingresa tu tarea</label>
                <textarea placeholder="escribe aqui"></textarea>
            </div>
            <button type="submit">Guardar tarea</button>`;
  escribeTarea.className = "d-flex-column";
  const seccionPadre = document.querySelector(`#contPadre`);
  seccionPadre.appendChild(escribeTarea);
};

const presione = document.querySelector(`#boton`);

presione.addEventListener(`click`, ingresaTarea);
