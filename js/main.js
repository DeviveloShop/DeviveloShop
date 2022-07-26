
let pages = '';

function ids1 () {
    ids = 'servicios.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'servicios.html.html';

};

function ids2 () {
    ids = 'carrito.html';
    history.pushState(`Selected: ${ids}`, `./${ids}`);
    pages = 'carrito.html';

};



window.addEventListener('popstate', e => {
    backweb();
    
});


let urlclick =`https://devivelo.blogspot.com`; 

function backweb() {
   
    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        conta=0;
        contador=0;
        history.back();
    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("products-id").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        contador=1;
        ids1(); 
        

    }
    else{
        history.back();
        
    }

    } 

function inicio() {
    document.getElementById("informacion").style.display = "block";	
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    backarriba(); 
    conta=0;
    contador=0;
    backweb();
}

function backarriba(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });       
};



var btn = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    contador=0;


function servicios() {

if (contador==0) {
    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=1;
    ids1(); 
}
else{
    document.getElementById("informacion").style.display = "none";	
    document.getElementById("portafolio").style.display = "block";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("screen4").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    conta=0;
    contador=0;
    ids1(); 
}
}



let enviosprecio = parseFloat(3.00) ;

function cotizar() {
    document.getElementById("screen4").style.display = "block";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("informacion").style.display = "none";
    document.getElementById("sharelink").style.display = "none";
    backarriba();
    ids2(); 
    priceTotal3.innerHTML = parseFloat(totalCard) + parseFloat(enviosprecio);
    conta=0;
    contador=2; 
    if (countProduct ==0) {
        enviosprecio = 0;
        priceTotal3.innerHTML = parseFloat(totalCard) + parseFloat(enviosprecio);
        
    }else
    {if  (countProduct ==1)
        enviosprecio = 3.00;
        priceTotal3.innerHTML = parseFloat(totalCard) + parseFloat(enviosprecio);
       
        
    }
       
    
}

function sharetj(){
    document.getElementById("informacion").style.display = "none";
    document.getElementById("portafolio").style.display = "none";
    document.getElementById("side").style.display = "none";
    document.getElementById("sharelink").style.display = "block";
    document.getElementById("screen4").style.display = "none";
    conta=0;
    contador=2; 
    backarriba();
    ids2(); 
}
    
//   boton atras

function back() {

    if (contador==1) {
        document.getElementById("informacion").style.display = "block";
        document.getElementById("portafolio").style.display = "none";
        document.getElementById("side").style.display = "none";
        document.getElementById("screen4").style.display = "none";
        conta=0;
        contador=0;
        history.back();
    }
    else if(contador==2){
        document.getElementById("portafolio").style.display = "block";
        document.getElementById("screen4").style.display = "none";
        document.getElementById("products-id").style.display = "none";
        document.getElementById("sharelink").style.display = "none";
        contador=1;
        ids1(); 
        

    }}


    function cerrarpedido() {


            document.getElementById("portafolio").style.display = "block";
            document.getElementById("side").style.display = "none";
            document.getElementById("screen4").style.display = "none";
            document.getElementById("products-id").style.display = "none";
            contador=1;
          
   
    
        }


// llevar cerrar side automatico

document.querySelector('.tarjeta').addEventListener('click',()=>{
    document.getElementById("side").style.display = "none";
    conta=0;
    });

   //    menu laterl 

    var btns = document.getElementById("inicio"),
    informacion = document.getElementById("infomacion"),
    conta=0;

    function sidebar()  {

        if (conta==0) {
            document.getElementById("side").style.display = "block";
            conta=1;
        }
        else{
            document.getElementById("side").style.display = "none";
            conta=0;
        }
        }

        function cerrarside() {
            document.getElementById("side").style.display = "none";
            conta=0;
            
        }

        document.querySelector('.descriptitulo')   
        .addEventListener('click',()=>{
            document.getElementById("products-id2").style.display = "block";
           });



// llevar arriba
     

document.querySelector('.side')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});


document.querySelector('.back')   
.addEventListener('click',()=>{
 window.scrollTo({
 top: 0,
 behavior: 'smooth'
});
});
  



        document.querySelector('.side1')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });


        document.querySelector('.side3')   
        .addEventListener('click',()=>{
         window.scrollTo({
         top: 0,
         behavior: 'smooth'
        });
        });

        
//carritodecompras
     

        //variables
let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total')
let amountProduct = document.querySelector('.count-product');

let amountProduct2 = document.querySelector('.count-product2');
let amountProduct3 = document.querySelector('.count-product3');

let priceTotal2 = document.querySelector('.price-total2')
let priceTotal3 = document.querySelector('.price-total3')
let detalle = document.querySelector('.descrip1')
let containerBuyCart2 = document.querySelector('.card-items2');
let descrip = document.querySelector('.descrip1')



let buyThings = [];
let totalCard = 0;
let countProduct = 0;


function showCart2(x){
    document.getElementById("products-id2").style.display = "block";
}

function closeBtn2(){
    document.getElementById("products-id2").style.display = "none";
}


function showCart(x){
    document.getElementById("products-id").style.display = "block";
}
function closeBtn(){
     document.getElementById("products-id").style.display = "none";
}

//functions
loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct);

    containerBuyCart.addEventListener('click', deleteProduct);

    containerBuyCart2.addEventListener('click', deleteProduct2);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement; 
        readTheContent(selectProduct); 
        addz();    
    }
}

function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
                priceTotal.innerHTML = totalCard;
                amountProduct.innerHTML = 0;
                priceTotal2.innerHTML = totalCard;
                priceTotal3.innerHTML = totalCard;
                amountProduct2.innerHTML = "";
                amountProduct3.innerHTML = "";
               
                
                
            }
        });

  buyThings.forEach(value => {
            if (value.id == deleteId) {
                countProduct = (countProduct)-(value.amount);
                amountProduct.innerHTML = 0;
                buyThings = buyThings.filter(product => product.id !== deleteId);
      
           
             
               
                
                
            }
        });
       
    }
    loadHtml();
    loadHtml2();
}


let cantenv = 1;
let cantenvio = 3;
let cantenvioss = 0;

function deleteProduct2(e) {
    if (e.target.classList.contains('delete-product2')) {
        const deleteId = e.target.getAttribute('data-id2');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
                priceTotal.innerHTML = totalCard;
                amountProduct.innerHTML = 0;
                priceTotal2.innerHTML = totalCard;
                amountProduct2.innerHTML = "";
                amountProduct3.innerHTML = "";
                detalle.innerHTML = "";
                cantenvio = parseFloat(cantenvio) - parseFloat(cantenv);
                cantenvioss = cantenvio ;
                if (countProduct ==2) {
                    priceTotal3.innerHTML = parseFloat(totalCard) + parseFloat(enviosprecio);
                    
                }else
                {if  (countProduct ==1)
                    enviosprecio = 0;
                    priceTotal3.innerHTML = parseFloat(totalCard) + parseFloat(enviosprecio);
                    enviosprecio = 3.00;
                    
                }
                   
                
            }
        });
        buyThings.forEach(value => {
            if (value.id == deleteId) {
                countProduct = (countProduct)-(value.amount);
                amountProduct.innerHTML = 0;
                buyThings = buyThings.filter(product => product.id !== deleteId);
      
           
             
               
                
                
            }
        });
       
    }
    loadHtml();
    loadHtml2();
}



function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        talla: product.querySelector("#talla").value,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                countProduct++;
                return product;
            } else {
                return product;
                
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    loadHtml();
    loadHtml2();
    
   
    //console.log(infoProduct);
}

function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image, title, talla, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5>${talla}</h5>
                <h5 class="cart-price">Precio ${price}$</h5>
                <h6>Cantidad: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
            
        `;

       

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        

        amountProduct.innerHTML = countProduct;
        amountProduct3.innerHTML = countProduct;
    });
}



function loadHtml2(){
    clearHtml2();
    buyThings.forEach(product => {
        const {image, title, talla, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item2');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content2">
                <h5>&nbsp;&nbsp;${title}</h5>
                <h5>${talla}</h5>
                <h5 class="cart-price2">Precio ${price}$</h5>
                <h6>Cantidad: ${amount}</h6>
            </div>
            <span class="delete-product2" data-id2="${id}">x</span>
            
        `;

        containerBuyCart2.appendChild(row);
        priceTotal2.innerHTML = totalCard;
        amountProduct2.innerHTML = "Cantidad" + countProduct ;
        detalle.innerHTML = document.querySelector('.card-items2').textContent;

       
    });
}



 function clearHtml(){
    containerBuyCart.innerHTML = '';

    
 }

 function clearHtml2(){
    containerBuyCart2.innerHTML = '';

    
 }


 // formulario

document.querySelector("#submit").addEventListener("click", e => {
    e.preventDefault();
  
    //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
    let telefono = "593995159919";
  
    let cliente = document.querySelector("#cliente").value;
    let contacto = document.querySelector("#contacto").value;
    let fpagos = document.querySelector("#modulos").value;
    let detalle =document.querySelector('.card-items2').textContent;
    let resp = document.querySelector("#respuesta");
    let totalpedido = parseFloat(totalCard) + parseFloat(enviosprecio);
    
  
    resp.classList.remove("fail");
    resp.classList.remove("send");
  
    let url = `https://api.whatsapp.com/send?phone=593987465771&text=
          *Devicelo Shop*%0A
          *Solicitud de Compra*%0A
          *Nombre de Cliente*%0A
          ${cliente}%0A
          *Numero de Contacto*%0A
          ${contacto}%0A
          *Detalles del Pedido*%0A
          ${detalle}%0A
          *articulos*%0A
          ${totalCard}%0A
          *Envio*%0A
          ${enviosprecio}.00%0A
          *Total a Pagar*%0A
          ${totalpedido}%0A
          *Forma de Pago*%0A
          ${fpagos}%0A`;
  
    if (cliente === "" || contacto === "" ) {
      resp.classList.add("fail");
      resp.innerHTML = `Espera, ${cliente} faltan algunos Datos `;
      return false;
    }
    resp.classList.remove("fail");
    resp.classList.add("send");
    resp.innerHTML = `Se Envio a DEVIVELO SHOP`;
  
    window.open(url);
  });
    
    
    
  
      //ALERTAS>
      function save(){
        let url = `https://drive.google.com/u/0/uc?id=1J6QHf4QbXvCWtJkpBX0e56cBhdq0yRSC&export=download`;
        window.open(url); 
       };
      
      function ftuser() {
          Swal.fire({
              title: 'Calzado Exclusivo',
              imageUrl: 'img/LOGODEVI.png',
              imageWidth: 200,
              confirmButtonText: 'Añadir a Contactos',
              showCloseButton: 'true',
              showCancelButton: true,
        
          
            }).then((result) => {
              if (result.isConfirmed) {
                save();
                Swal.fire({
                  position: 'top-end',
                  icon: 'success',
                  title: 'Descarga Correcta',
                  showConfirmButton: false,
                  timer: 1500
                })
              }
            })
      
       
      };
      
      function abrirpagos(){
        let urla = `https://devivelo.blogspot.com/p/opciones-de-pago.html`;
        window.open(urla); 
       };


       function verpagos(){
        let urlsp = `https://devivelo.blogspot.com/p/opciones-de-pago.html`;
        window.open(urlsp); 
       };


      function msjpagos() {
        Swal.fire({
            title: 'Opciones de Pago',
            icon: 'success',
            html:
           '<a href="https://api.whatsapp.com//send?text=Enviado%20desde%20la%20App%20de%20Cliconline%20Ver%20Opciones%20de%20Pago%20https://devivelo.blogspot.com/p/opciones-de-pago.html" class="botonp" ><span class="fa fa-share-alt"></span >&nbsp;Compartir nro. Cuenta</a>',
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Ver nro. Cuenta',
          })
          .then((result) => {
            if (result.isConfirmed) {
              verpagos();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Información ',
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
      
       
      };
      
      function msj2() {
        Swal.fire({
        showCloseButton: true,
        icon: 'success',
        title: 'Tarjeta Digital',
        text: 'Link Copiado a Portapapeles',
        footer: 'Devivelo Shop'
        });
      
       
      };  
      

      function addz() {
        Swal.fire({
        icon: 'success',
        title: 'Producto',
        text: 'Agregado al Carrito',
        showConfirmButton: false,
        timer: 1000,
        footer: 'Devivelo Shop',
        });
      
       
      };  

        
      const $content = document.getElementById('textareacopy');
      $btncopy = document.getElementById ('btcopi');
      $title = document.getElementById ('titlelink')

      $btncopy.addEventListener('click', e => {
        $content.select();
        document.execCommand('copy')
        msj2();
      }); 




