function getEmpresasCategoria(categoria){
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
        
    }
};


function getListado(cat){
    let str = ` <div class="card shadow">
                    <h3 class="text-success">Negocio de ${cat}</h3>
                    <div class="form-group">
                        <label>Dirección del negocio</label>
                        <br>
                        <a href="https://api.whatsapp.com/send?phone=50257255092&text=Hola%20vi%20tu%20anuncio%20en%20Empresas%20Chapinas.%20com">Tel: 5725-5092</a>
                    </div>
                </div>
                <br>`

    let root = document.getElementById('root');
    root.innerHTML = str + str + str + str + str + str + str + str + str + str + str + str + str + str + str + str
}