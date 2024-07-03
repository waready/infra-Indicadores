# Observabilidad

Este proyecto utiliza Node.js para obtener detalles de configuración de embebido desde un endpoint específico.

**Componentes Clave:**
- **Servidor HTTP:** Configurado usando Express.js.
- **Endpoint `/getEmbedToken`:** Proporciona tokens de acceso y URLs de embebido.

**Ejemplo de Implementación del Endpoint:**

```javascript
let path = require('path');
let embedToken = require(__dirname + '/embedTokenGenerationService.js');
const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
app.use(cors()); 
// Prepare server for Bootstrap, jQuery and PowerBI files
app.use('/js', express.static('./node_modules/bootstrap/dist/js/')); // Redirect bootstrap JS
app.use('/js', express.static('./node_modules/jquery/dist/')); // Redirect JS jQuery
app.use('/js', express.static('./node_modules/powerbi-client/dist/')) // Redirect JS PowerBI
app.use('/css', express.static('./node_modules/bootstrap/dist/css/')); // Redirect CSS bootstrap
app.use('/public', express.static('./public/')); // Use custom JS and CSS files

const port = process.env.PORT || 5300;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/../views/index.html'));
});

app.get('/getEmbedToken', async function(req, res) {

    // Get the details like Embed URL, Access token and Expiry
    let result = await embedToken.generateEmbedToken();

    // result.status specified the statusCode that will be sent along with the result object
    res.status(result.status).send(result);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
```


### Estructura del proyecto

``` {6}
observabilidad/
├── .gitignore
├── package-lock.json
├── package.json
├── config
│   └── config.json
├── public/
│   ├── css/
│   │   └── index.css
│   └── js/
│   │   └── index.js
├── src/
│   ├── authentication.js
│   ├── embedTokenGenerationService.js
│   ├── server.js
│   ├── main.js
│   └── utils.js
└── views/
    └── index.html
```

### Configuration

configurar con nuestras credenciales para generar `/getEmbedToken` el archivo  `config.json` 

::: tip ejemplo
  code
:::

### Code generateEmbedToken

Para anilizar la función generateEmbedToken ingresamos a la carpeta `scr/embedTokenGenerationService.js` nos devolvera los siguientes datos que son necesario para relizar el embed de los reporte de `powerby`
- **accessToken** 
- **embedUrl** 
- **id** 
- **expiry** 
- **status** 

```js {46,47,48,49,50}
async function generateEmbedToken() {

    // Check for any non-existing credential or invalid credential from config.json file
    configCheckResult = utils.validateConfig();
    if (configCheckResult) {
        return {
            "status": 400,
            "error": configCheckResult
        };
    }

    let tokenResponse = null;
    let errorResponse = null;

    // Call the function to get the response from the authentication request
    try {
        tokenResponse = await auth.getAuthenticationToken();
    } catch (err) {
        if (err.hasOwnProperty('error_description') && err.hasOwnProperty('error')) {
            errorResponse = err.error_description;
        } else {

            // Invalid PowerBI Username provided
            errorResponse = err.toString();
        }
        return {
            "status": 401,
            "error": errorResponse
        };
    }

    // Extract AccessToken from the response
    let token = tokenResponse.accessToken;
  

    // embedData will be used for resolution of the Promise
    let embedData = null;

    //Call the function to get the Report Embed details
    try {
        embedData = await getReportEmbedDetails(token, config.workspaceId, config.reportId);

        // Call the function to get the Embed Token
        let embedToken = await getReportEmbedToken(token, embedData);
        return {
            "accessToken": embedToken.token,
            "embedUrl": embedData.embedUrl,
            "id": embedData.id,
            "expiry": embedToken.expiration,
            "status": 200
        };
    } catch (err) {
        return {
            "status": err.status,
            "error": 'Error while retrieving report embed details\r\n' + err.statusText + '\r\nRequestId: \n' + err.headers.get('requestid')
        }
    }
}

```

### Ejecutar Proyecto

Para ejecutarlo necesitamos previamente configurar del proyecto en los archivos  `config.json`  con nuestras credenciales y ejecutar los siguiente comandos desde consola.

   ```sh
    npm install 
   ```

   ```sh
    npm start 
   ```
Este levantara el Proyecto Observabilidad para verificar si esta corriendo entramos a la siguiente dirección `IP` servidor , `:5300` puerto.

```sh
  http://<IP>:5300/getEmbedToken
```

img


## App Indicadores

El App de Indicadores es una aplicación frontend desarrollada con [Vue.js](https://vuejs.org/), diseñada para mostrar y gestionar indicadores clave de rendimiento (KPIs). Esta aplicación proporciona una interfaz intuitiva y dinámica para visualizar datos importantes de forma clara y accesible.

Componentes Clave:

- **Componentes Vue**: Componentes modulares para diferentes partes de la interfaz de usuario.
- **Obtención de Datos**: Usando Axios para comunicarse con el backend.

Ejemplo de un Componente Vue:

```js
  Vue.component('item-list', {
  template: '<div><item v-for="item in items" :key="item.id" :item="item"></item></div>',
  data() {
    return {
      items: [],
    };
  },
  created() {
    axios.get('http://<IP>:<PUERTO>/api/items')
      .then(response => {
        this.items = response.data.items;
      });
  },
});
```

### Estructura del proyecto

``` {3,19}
agrupadores-vue/
├── .browserslistrc
├── .env
├── .envcopy
├── .eslintrc.js
├── .gitignore
├── .prettierrc.json
├── README.md
├── babel.config.js
├── jsconfig.json
├── json.json
├── node_modules.7z
├── npm
├── package-lock.json
├── package.json
├── public/
│   ├── css/
│   ├── js/
|   ├── config.js
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── App.vue
│   ├── assets/
│   │   └── logo.png
│   ├── auth-module/
│   ├── components/
│   ├── main.js
│   ├── pages/
│   ├── router/
│   ├── store/
│   ├── utils/
│   └── views/
└── vue.config.js
```

### Interacción con BT 

En la capeta `src/utils` se encuentra el archivo `AuthService.js` en donde se encuentra la integracion de optener los servicios que se encuentran en Pioneros 

AuthService.js:

```js {15,20,25,30,35,40,45,50,55,60,65,70}
import http from "@/utils/http.js";
import secureStorage from "./secureStorage.js";
import router from "../router";
import store from "@/store";
import axios from "axios";

const prefijo = process.env.VUE_APP_API_PREFIJO;
const version = process.env.VUE_APP_API_VERSION;
const btServicesEnv = process.env.VUE_APP_BTEXPOSER;
const btObservabilidad = process.env.VUE_APP_URL_OBSERVABILIDAD;
const btServicesEnabled = btServicesEnv === "true";

//.... login 

  static async GetIndicadores(id) {
    const endpoint = `ObtenerIndicadores`;
    return this.postRequest(endpoint, { agrupadorId: parseInt(id) });
  }

  static async GetAgrupadores() {
    const endpoint = "ObtenerAgrupadores";
    return this.postRequest(endpoint, {});
  }

  static async getSucursalesCajas() {
    const endpoint = "ObtenerSucursalesCajas";
    return this.postRequest(endpoint, {});
  }

  static async getCotizaciones() {
    const endpoint = "ObtenerMonedasIndices";
    return this.postRequest(endpoint, {});
  }

  static async getCuadreMonedaSaldos() {
    const endpoint = "ObtenerCierreSaldosPorMoneda";
    return this.postRequest(endpoint, {});
  }

  static async getCondicionesGenerales() {
    const endpoint = "ObtenerCondicionesGenerales";
    return this.postRequest(endpoint, {});
  }

  static async getRubroBolsas() {
    const endpoint = "ObtenerRubrosBolsas";
    return this.postRequest(endpoint, {});
  }

  static async getTansaccionEstado() {
    const endpoint = "ObtenerTransaccionesEstados";
    return this.postRequest(endpoint, {});
  }

  static async getEjecucionPorServicio() {
    const endpoint = "ObtenerServiciosMasEjecutados";
    return this.postRequest(endpoint, {});
  }

  static async getMetodosMasEjecutados(name) {
    const endpoint = "ObtenerMetodosMasEjecutados";
    return this.postRequest(endpoint, { servicio: name });
  }

  static async getSesionesPorUsuario() {
    const endpoint = "ObtenerSesionesPorUsuario";
    return this.postRequest(endpoint, {});
  }
```

Pioneros:
img 


como se usa en componente Power by

```js {2}
  static async GetObservabilidad(){
    //{btObservabilidad} = {process.env.VUE_APP_URL_OBSERVABILIDAD}`);
    return (await axios.get(btObservabilidad)).data
  }
```

### Configuracion
tenemos que configurar el archivo .env en caso de desarrollo

``` .env
VUE_APP_BTEXPOSER=false
VUE_APP_API_URL=http://10.25.4.10:6021/bthibrido/servlet/
VUE_APP_API_PREFIJO=ardwsbt
VUE_APP_API_VERSION=v1
VUE_APP_URL_OBSERVABILIDAD=http://10.25.4.10:5300/getEmbedToken
VUE_APP_GMAPS_APIKEY=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg
VUE_APP_CLIENT_SECRET=BGALs5B6K2cfLciroALX3okJO11783pNkU6v11me
VUE_APP_LOGO_PATH=assets/logoB.png

```

tenemos que configurar los archivos .env y  public/config.js en caso de producción:

``` .env
VUE_APP_BTEXPOSER=GetBTexposer
VUE_APP_API_URL=GetUrlPro
VUE_APP_API_PREFIJO=GetSufijo
VUE_APP_API_VERSION=GetVrSer
VUE_APP_URL_OBSERVABILIDAD=GetPowerUrlEmbed
VUE_APP_GMAPS_APIKEY=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg
VUE_APP_CLIENT_SECRET=BGALs5B6K2cfLciroALX3okJO11783pNkU6v11me
VUE_APP_LOGO_PATH=assets/logoB.png

```

```js
window.GetBTexposer= "false"

// url ambiente - ejemplo:

window.GetUrlPro= "http://10.25.4.10:6021/bthibrido/servlet/"

//sufijo del ambiente - ejemplo

window.GetSufijo= "ardwsbt"

//Version auth 

window.GetVrSer= "v1"

//Power bi url embed

window.GetPowerUrlEmbed = "http://10.25.4.10:5300/getEmbedToken"
```

### Ejecutar Proyecto 

Para ejecutarlo necesitamos previamente configurar del proyecto en los archivos  `config.json`  con nuestras credenciales y ejecutar los siguiente comandos desde consola.

   ```sh
    npm install 
   ```

   ```sh
    npm run serve
   ```


### Compilar


   ```sh
    npm run build
   ```

config

### Desplegar App

cambiar js

copiar archivos con nombre I caperta

probar 
