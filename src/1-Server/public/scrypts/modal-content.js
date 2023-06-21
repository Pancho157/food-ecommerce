function displayInfoModal(prodId) {
  const modal = document.querySelector(".modal");
  modal.innerHTML = "";

  modal.innerHTML += `
  <ion-icon
    onclick="closeModal()"
    class="close--modal"
    name="close-circle-outline"
  ></ion-icon>

  <h3>Ingrediente</h3>

  <div class="modal__property">
    <p>Nombre:</p>
    <input type="text" disabled value="Nombre de ingrediente" />
  </div>

  <div class="modal__property">
    <p>Stock:</p>
    <input type="text" disabled value="11" />
  </div>

  <div class="modal__property">
    <p>Unidad:</p>
    <input type="text" disabled value="Kg" />
  </div>

  <h3>Productos en los que se utiliza</h3>

  <table class="modal__table">
    <thead>
      <tr>
        <th>Producto</th>
        <th>Categoría producto</th>
        <th>Cantidad utilizada</th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td>Carne</td>
        <td>Emanadas</td>
        <td>0,05</td>
      </tr>
      <tr>
        <td>Carne</td>
        <td>Pizza</td>
        <td>0,05</td>
      </tr>
      <tr>
        <td>Bomba de papa especial</td>
        <td>Snacks</td>
        <td>0,05</td>
      </tr>
    </tbody>
  </table>
  `;

  openModal();
}

function displayChangeIngredientPropertiesModal(prodId) {
  const modal = document.querySelector(".modal");
  modal.innerHTML = "";

  modal.innerHTML += `
  <ion-icon
    onclick="closeModal()"
    class="close--modal"
    name="close-circle-outline"
  ></ion-icon>

  <form>
    <h3>Ingrediente</h3>

    <div class="modal__property">
      <p>Nombre:</p>
      <input type="text" placeholder="Nombre de ingrediente" />
    </div>

    <div class="modal__property">
      <p>Stock:</p>
      <input type="text" placeholder="11" />
    </div>

    <div class="modal__property">
      <p>Unidad:</p>
      <select name="unit">
        <option value="kg">Kilogramos</option>
        <option value="g">gramos</option>
        <option value="u">unidades</option>
      </select>
    </div>

    <button class="modal__submit" type="submit">Guardar</button>
  </form>

  <h3>Productos en los que se utiliza</h3>

  <table class="modal__table">
    <thead>
      <tr>
        <th>Producto</th>
        <th>Categoría producto</th>
        <th>Cantidad utilizada</th>
      </tr>
    </thead>
    
    <tbody>
      <tr>
        <td>Carne</td>
        <td>Emanadas</td>
        <td>0,05</td>
      </tr>
      <tr>
        <td>Carne</td>
        <td>Pizza</td>
        <td>0,05</td>
      </tr>
      <tr>
        <td>Bomba de papa especial</td>
        <td>Snacks</td>
        <td>0,05</td>
      </tr>
    </tbody>
  </table>
  `;

  openModal();
}

function displayDeleteIngredientModal(prodId) {
  // const modal = document.querySelector(".modal");
  // modal.innerHTML = "";

  openModal();
}
