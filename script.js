$(document).ready(function () {
    $('#carrousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburger').click(function () {
        $('nav').slideToggle();
    });

    $('#campo-telefone').mask('(00) 00000-0000');

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoDeInteresse: {}
        },
        messages: {
            nome: 'Por favor, preencha o nome'
        },
        submitHandler: function (form) {
            console.log(form);
        },
        invalidHandler: function (e, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    });

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato')
       const nomeVeiculo = ($(this).parent().find('h3').text())
        
       $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

});