    // chocolat js
    $(document).ready(function(){
        $('#work-1').Chocolat({
            imageSize:'contain',
            images:[{src:'images/F1.jpg', title:'Concepto: 3 Atmósferas: Tránsito, Pausa, Permanencia Límites no como fin, sino como traspaso de situaciones.'},{src:'images/F2.jpg', title:'Concepto: 3 Atmósferas: Tránsito, Pausa, Permanencia Límites no como fin, sino como traspaso de situaciones.'},]
        });
        $('#work-2').Chocolat({
            imageSize:'contain',
            images:[{src:'images/F5.jpg', title:'Restaurant “La Bóveda”, Gastronomía Húngara'},{src:'images/F6.jpg', title:'Restaurant “La Bóveda”, Gastronomía Húngara'},]
        });
        $('#work-3').Chocolat({
            imageSize:'contain',
            images:[{src:'images/F8.jpg', title:'Interiorismo departamento unifamiliar'},]
        });
        $('#work-4').Chocolat({
            imageSize:'contain',
            images:[{src:'images/F10.jpg', title:'Edificio Parque Lesonia, Jardin del mar, Viña del mar'},{src:'images/F11.jpg', title:'Edificio Parque Lesonia, Jardin del mar, Viña del mar'},{src:'images/F12.jpg', title:'Edificio Parque Lesonia, Jardin del mar, Viña del mar'},{src:'images/F13.jpg', title:'Edificio Parque Lesonia, Jardin del mar, Viña del mar'},{src:'images/F14.jpg', title:'Edificio Parque Lesonia, Jardin del mar, Viña del mar'},]
        });
        $('#work-5').Chocolat({
            imageSize:'contain',
            images:[{src:'images/F16.jpg', title:'Llevar el museo al espacio público, Instalación temporal con más de 600 objetos virtuales a partir de proyecciones holográficas'},{src:'images/F17.jpg', title:'Llevar el museo al espacio público, Instalación temporal con más de 600 objetos virtuales a partir de proyecciones holográficas'},{src:'images/F18.jpg', title:'Llevar el museo al espacio público, Instalación temporal con más de 600 objetos virtuales a partir de proyecciones holográficas'},{src:'images/F19.jpg', title:'Llevar el museo al espacio público, Instalación temporal con más de 600 objetos virtuales a partir de proyecciones holográficas'},{src:'images/F20.jpg', title:'Llevar el museo al espacio público, Instalación temporal con más de 600 objetos virtuales a partir de proyecciones holográficas'},]
        });
        $('#work-7').Chocolat({
            imageSize:'contain',
            images:[{src:'images/F22.jpg', title:'Accesorios y complementos en cuero'},{src:'images/F23.jpg', title:'Accesorios y complementos en cuero'},{src:'images/F24.jpg', title:'Accesorios y complementos en cuero'},{src:'images/F25.jpg', title:'Accesorios y complementos en cuero'},{src:'images/F26.jpg', title:'Accesorios y complementos en cuero'},{src:'images/F27.jpg', title:'Accesorios y complementos en cuero'},]
        });
        $('#work-8').Chocolat({
            imageSize:'contain',
            images:[{src:'images/F28.jpg', title:'A partir de la experimentación con el material “Staron”, A60 nace del concepto de contener, el cual se lleva a la forma con el trabajo de formas básicas'},{src:'images/F29.jpg', title:'A partir de la experimentación con el material “Staron”, A60 nace del concepto de contener, el cual se lleva a la forma con el trabajo de formas básicas'},{src:'images/F31.jpg', title:'A partir de la experimentación con el material “Staron”, A60 nace del concepto de contener, el cual se lleva a la forma con el trabajo de formas básicas'},{src:'images/F32.jpg', title:'A partir de la experimentación con el material “Staron”, A60 nace del concepto de contener, el cual se lleva a la forma con el trabajo de formas básicas'},]
        });
        $('#work-9').Chocolat({
            imageSize:'contain',
            images:[{src:'images/F34.jpg', title:'Iluminación oficina restaurant Santa Pizza'},]
        });
    });

    // hamburger mobile nav
    $(document).ready(function(){
        $('.ion-navicon').on('click',function(){
            $('nav').css('right','0');
        });
        $('.ion-android-close').on('click',function(){
            $('nav').css('right','-13em');
        });
    });
    
    // hamburger button fixed
    $(window).scroll(function(){
      var hamburger = $('.ion-navicon')
      var scrollposition = $(window).scrollTop();
          if (scrollposition >= 50){
             $('.ion-navicon').addClass("fixed");
          }else{
            $('.ion-navicon').removeClass("fixed");
          }
    });

    // ionicons hover
/*    $(document).ready(function(){
        $('#work-1 div:last-child a img').mouseenter(function(){
            $('#work-1 div:last-child a i').delay(5000).css('display','block');
                $('#work-1 div:last-child a img').mouseleave(function(){
            $('#work-1 div:last-child a i').delay(5000).css('display','none');    
        });
        });
    });*/

    // hover.css    
    $(document).ready(function(){
        $('#projects div h3').addClass('hvr-underline-from-left');
        $('#about div p').addClass('hvr-underline-from-left');
    });

    // smooth scroll (snippet)
    $(document).ready(function(){
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash;
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop':  $target.offset().top
            }, 700, 'swing', function () {
                window.location.hash = target;
            });
        });
    });