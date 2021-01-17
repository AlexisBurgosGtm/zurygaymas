function getEmpresasCategoria(categoria){
    
    location.hash = "#";

    switch (categoria) {
        case 'comida':
            getListado('comida');
            break;
            
        case 'belleza':
            getListado('belleza');
            break;
        case 'talleres':
            getListado('talleres');
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
        
    };

    var tiempo = tiempo || 1000;
    $("html, body").animate({ scrollTop: $("#root").offset().top }, tiempo);

    location.hash = "#root";
    
};

function getListado(cat){
    let str = ` <div class="card shadow">
                    <h3 class="text-info">Negocio de ${cat}</h3>
                    <div class="form-group">
                        <label>Dirección del negocio</label>
                        <br>
                        <a 
                            href="https://api.whatsapp.com/send?phone=50257255092&text=Hola%20vi%20tu%20anuncio%20en%20Empresas%20Chapinas.%20com"
                            target="_blank"
                        >Tel: 5725-5092</a>
                    </div>
                </div>
                <br>`

    let root = document.getElementById('root');
    root.innerHTML = GlobalLoader;

    root.innerHTML = '<br><br><br>' + str + str + str + str + str + str + str + str + str + str + str + str + str + str + str + str
};

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

