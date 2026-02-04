//Importando o jquery cdn
$(document).ready(function() {
    //Botão clicavel 
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active'); //Classe active para deixar o botão de três barrinhas clicável

        //Trocar o botão das três barrinhas para X
        $('#mobile_btn i')
            .toggleClass('fa-bars')
            .toggleClass('fa-xmark'); 
    });

    const sections = $('section'); //Pegando os elementos'section' e colocando dentro da variável 'sections'
    const navItems = $('.nav-item'); //Pegando os elementos'nav-item' e colocando dentro da variável 'navItems'

    $(window).on('scroll', function  () { //Animações ao rolar a página
        const header = $('header'); //Pegando os elemtentos 'header' e colocando dentro da variável 'header'
        const scrollPosition = $(window).scrollTop() - header.outerHeight(); //Descobrir a posição do scroll do mouse

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) { //Verificando a posição do scroll para colocar as animações, sombras etc.
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0,0.1)');
        }

       sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
       });

       navItems.removeClass('active');
       $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', { //Aplicando as animações no id #cta
        origin: 'left',
        duration: 2000,
        distance: '20%'
    }); 

    ScrollReveal().reveal('.dish', { //Aplicando as animações na classe .dish 
        origin: 'left',
        duration: 2000,
        distance: '20%'
    }); 

     ScrollReveal().reveal('#testimonial_chef', { //Aplicando as animações no id #testimonial_chef (Imagem)
        origin: 'left',
        duration: 1000,
        distance: '20%'
    }); 

    ScrollReveal().reveal('.feedback', { //Aplicando as animações na classe .feedback
        origin: 'right',
        duration: 1000,
        distance: '20%'
    }); 

    ScrollReveal().reveal('.social-media-buttons', { //Aplicando as animações na classe .feedback
        origin: 'right',
        duration: 2000,
        distance: '20%'
    }); 

    
});