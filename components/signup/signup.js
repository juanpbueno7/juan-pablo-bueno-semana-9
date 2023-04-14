class signup extends HTMLElement {
    static get observedAttributes () {

    }
    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }
    connectedCallback(){
this.render()
    }
    attributeChangeCallback(propName,oldvalue,newValue){
this[ propName] = newValue;
this.render()
    }
    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/signup/signup.css" >
          <h1>Crear cuenta</h1>
          <form>
            <div class="signup-form">
              <label for="nombre">Nombre</label>
              <input type="text" class="form-control" id="nombre" required>
            </div>
            <div class="signup-form ">
              <label for="correo">Correo electrónico</label>
              <input type="email" class="form-control" id="correo" required>
            </div>
            <div class="signup-form ">
              <label for="contrasena">Contraseña</label>
              <input type="password" class="form-control" id="contrasena" required>
            </div>
            <div class="signup-form ">
              <label for="confirmar-contrasena">Confirmar contraseña</label>
              <input type="password" class="form-control" id="confirmar-contrasena" required>
            </div>
            <button type="submit" class="btn btn-primary">Crear cuenta</button>
          </form>
        `;
    }
      
}

customElements.define("app-signup",signup);
export default signup;