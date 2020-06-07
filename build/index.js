
let root = document.getElementById('root');
let rootModal = document.getElementById('rootModal');
let GlobalSelectedListaProductos = [];

//let socket = io();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
   navigator.serviceWorker.register('sw.js')
    .then(registration => console.log('Service Worker registered'))
    .catch(err => 'SW registration failed'));
};

function getView(){
    let view = {
        modalDetalles:()=>{
            return `
            <div class="modal fade" id="modalDetalles" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header bg-primary text-white">
                            <h3 id="lbNegocio"></h3>
                            <br>
                            <label class="modal-title" id="lbDireccion"></label>
                        </div>

                        <div class="modal-body">
                          <div class="table-responsive">
                            <table class="table table-responsive table-bordered table-striped">
                              <thead>
                                <tr>
                                  <td>Producto</td>
                                  <td>Precio</td>
                                </tr>
                              </thead>
                              <tbody id="rootData"></tbody>
                            </table>
                          </div>
                            <div class="row">
                              
                            </div>

                        </div>
                        <div class="text-center" id="rootWhatsapp"></div>
                        <br>
                    </div>
                </div>
            </div>
            `
        }
    }

    rootModal.innerHTML = view.modalDetalles();

}

function getCard(logo,negocio,direccion,tipo,whatsapp,data){
  
  
    return `
        <div class="col-12 col-md-6 col-lg-4 mb-5">
            <div class="card shadow border-primary">
                <div class="card-header p-0">
                    <img src=${logo} class="card-img-top rounded-top" alt="image">
                </div>
                <div class="card-body">
                    <h3 class="card-title mt-3 text-primary">${negocio}</h3>
                    <p class="card-text">${direccion}</p>
                    <p class="card-text">
                        <i></i>${tipo}
                    </p>                
                    <button class="btn btn-outline-primary" onclick="getDetallesCard('${negocio}','${direccion}','${whatsapp}','${data}');">Contáctame con ellos</a>
                </div>
            </div>
        </div>
        `
};

function getDetallesCard(negocio,direccion,whatsapp,data){

  
    document.getElementById('lbNegocio').innerText = negocio;
    document.getElementById('lbDireccion').innerText = direccion;
    document.getElementById('rootData').innerHTML = data;
    document.getElementById('rootWhatsapp').innerHTML = `<a href="https://api.whatsapp.com/send?phone=502${whatsapp}&text=Vi%20tu%20negocio%20en%20Mercados%20quisiera%20pedir" class="btn btn-success" target="blank">Enviar un Whatsapp</a>`

    $('#modalDetalles').modal('show');

}

function addListeners(){

    
    let str = '';
    data.map((rows)=>{
        str = str + getCard(rows.logo,rows.negocio,rows.direccion,rows.tipo,rows.whatsapp, rows.productos)
    }
    );

    root.innerHTML = str;

}

function iniciarIndex(){
    getView();
    addListeners();

};

iniciarIndex();

/* 
socket.on('comandas nueva', function(msg){
    if(GlobalSelectedForm=='DESPACHO'){
        try {
            let cmbTipoListado = document.getElementById('cmbTipoListado');
            api.getPedidosPendientes('txtTotal','tblPedidosPendientes',cmbTipoListado.value);
        } catch (error) {
            console.log('no estás en despacho')
        }
    }
});
*/
//"https://i.imgur.com/lGLwqQo.png"



