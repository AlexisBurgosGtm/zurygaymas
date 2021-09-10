function getEmpresasCategoria(categoria){
    
    location.hash = "#";
   

    var tiempo = tiempo || 1000;
    $("html, body").animate({ scrollTop: $("#root").offset().top }, tiempo);

    location.hash = "#root";
    
};


function getPlantillaProducto(nombre,imagen,precio){
  return `
          <div class="col-6 col-md-4 col-lg-3">
            <div class="card product-card">
              <div class="card-body">
                <span class="badge rounded-pill badge-success">Nuevo</span>
                <a class="product-thumbnail d-block" href="#">
                  <img class="mb-2" src="img/product/${imagen}" alt="">
                </a>
                <a class="product-title d-block text-success" href="#">${nombre}</a>
                <p class="sale-price">Desde <b>Q ${precio}</b></p>
                <a class="btn btn-success btn-sm" href="#"><i class="lni lni-whatsapp" href="https://api.whatsapp.com/send?phone=50230090668&text=Hola%2C%20quisiera%20informacion%20de%20${replaceSpaces(nombre)}"></i>Pedir</a>
              </div>
            </div>
          </div>
  `

  
}

function getNuevos(){
  let str = "";
  negocios.map((r)=>{
    str += getPlantillaProducto(r.nombre,r.imagen,r.precio)
  })

  root.innerHTML =  str;
}

function replaceSpaces(text){
  return text.replace(' ','%20');
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

getNuevos();