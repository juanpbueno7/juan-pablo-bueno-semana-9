class login extends HTMLElement {
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
    render(){
this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./components/login/login.css" >
      <h1>Crear cuenta</h1>
      <form>
        <div class="signup-form ">
          <label for="correo">Correo electrónico</label>
          <input type="email" class="form-control" id="correo" required>
        </div>
        <div class="signup-form ">
          <label for="contrasena">Contraseña</label>
          <input type="password" class="form-control" id="contrasena" required>
        </div>
      </form>
    `;
  }

    }


customElements.define("app-login",login);
export default login;