function getEmpresasCategoria(categoria){
    
    location.hash = "#";

    switch (categoria) {
        case 'comida':
            getListado('COMIDA');
            break;
            
        case 'belleza':
            getListado('belleza');
            break;
        case 'talleres':
            getListado('TALLER');
            break;
        case 'hoteles':
            getListado('hoteles');
            break;
        case 'taxistas':
            getListado('taxistas');
            break;
        case 'piscinas':
            getListado('piscinas');
            break;
        case 'sponsor':
          $('#modalSponsor').modal('show');
            break;
        
    };

    var tiempo = tiempo || 1000;
    $("html, body").animate({ scrollTop: $("#root").offset().top }, tiempo);

    location.hash = "#root";
    
};

function getListado(cat){

    let root = document.getElementById('root');
    root.innerHTML = GlobalLoader;


    let datos = '';

    negocios.map((rs)=>{
      if(rs.tipo==cat){
          datos = datos + plantillaCard(rs.negocio,rs.direccion,rs.descripcion,rs.telefono,cat);
      }
    })

    root.innerHTML = datos;

};

function plantillaCard(negocio,direccion,descripcion,telefono,categoria){
  let str = ` <br>
              <div class="card shadow col-12">
                <h4 class="text-danger">${negocio}</h4>
                <div class="form-group">
                    <small>${direccion}</small>
                    <br>
                    <small>${descripcion}</small>
                    <div class="row">
                      <div class="col-6">
                        <a 
                          href="https://api.whatsapp.com/send?phone=502${telefono}&text=Hola%20vi%20tu%20anuncio%20en%20Negocios%20Retalhuleu"
                          target="_blank" class="negrita"
                          >Tel: ${telefono}</a>
                      </div>
                      <div class="col-6">
                        <small class="bg-info text-white">${categoria}</small>
                      </div>
                    </div>
                    
                </div>
              </div>
              <br>`
  return str;
}


function getBanner(){

    let str = `
        <div class="single-hero-slide" style="background-image: url('img/bg-img/1.jpg')">
          <div class="slide-content h-100 d-flex align-items-center">
            <div class="container">
              <h4 class="text-white mb-0" data-animation="fadeInUp" data-delay="100ms" data-wow-duration="1000ms">Electrónica Pérez</h4>
              <p class="text-white" data-animation="fadeInUp" data-delay="400ms" data-wow-duration="1000ms">Ofertas en artículos 20% descuento</p><a class="btn btn-primary btn-sm" href="#" data-animation="fadeInUp" data-delay="800ms" data-wow-duration="1000ms">Contactar</a>
            </div>
          </div>
        </div>

        <div class="single-hero-slide" style="background-image: url('img/bg-img/2.jpg')">
          <div class="slide-content h-100 d-flex align-items-center">
            <div class="container">
              <h4 class="text-white mb-0" data-animation="fadeInUp" data-delay="100ms" data-wow-duration="1000ms">El Museo</h4>
              <p class="text-white" data-animation="fadeInUp" data-delay="400ms" data-wow-duration="1000ms">Artículos decorativos</p><a class="btn btn-success btn-sm" href="#" data-animation="fadeInUp" data-delay="500ms" data-wow-duration="1000ms">Contactar</a>
            </div>
          </div>
        </div>

        <div class="single-hero-slide" style="background-image: url('img/bg-img/3.jpg')">
          <div class="slide-content h-100 d-flex align-items-center">
            <div class="container">
              <h4 class="text-white mb-0" data-animation="fadeInUp" data-delay="100ms" data-wow-duration="1000ms">Veterinaria Cat & Dog</h4>
              <p class="text-white" data-animation="fadeInUp" data-delay="400ms" data-wow-duration="1000ms">5 años consintiendo a tu mascota</p><a class="btn btn-danger btn-sm" href="#" data-animation="fadeInUp" data-delay="800ms" data-wow-duration="1000ms">Contactar</a>
            </div>
          </div>
        </div>
    `

    let rootBanner = document.getElementById('rootBanner');
    rootBanner.innerHTML = str;

};


getBanner();

