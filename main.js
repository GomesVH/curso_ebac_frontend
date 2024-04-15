$(document).ready(function()         //INICIO DO Jquery
        {                                                  
            $('#telefone').mask('(00) 00000-0000',   //aplicando o plugin DE NUMERO DE TELEFONE (00 NUMEROS) (SS LETRAS)
            {
                placeholder: '(11) 98980-6445'                          //placeholder: '__/__/____/'
            })  
            
            $('form').validate(                      //plugim para deixar obrigatorio o prenchimento dos IMPUT   
            {
                rules:
                {
                    nome:
                    {
                        required: true
                    },
                    email:
                    {
                        required: true,
                        email: true
                    },
                    telefone:
                    {
                        required: true
                    },
                    mensagen:
                    {
                        required: true,
                    },
                    veiculoDeInteresse:
                    {
                        required: false,
                    }               
                },
                messages:
                {
                    nome: 'Por favor, Insira seu Nome '      //mensagem quando o campo nao tiver preenchido  
                },
                submitHandler: function(form)
                {
                    console.log(form)
                },
                invalidHandler: function(evento, validador)
                {
                    var camposIncorretos = validador.numberOfInvalids();
                    if (camposIncorretos)
                    {
                        alert(`Existem ${camposIncorretos} campos incorretos`)
                    }
                }                
            })


            //chamada botao verde, dando a funçao de click
            $('.lista-veiculos button').click(function()    
            {
                const destino = $('#contato');   //criada a costante DESTINO RECEBE CONTATO
                const nomeVeiculo = $(this).parent().find('h3').text();    //aqui estou dizendo q quando eu clicar no botao verde ele ira procurar o parent LI e pergar pegar o texto do H3
                
                $('#veiculo-interesse').val(nomeVeiculo);


                //DIRECIONA AO FORMULARIO
                $('html').animate(                         
                {
                    scrollTop: destino.offset().top    // funçao OFFSET retorna a possiçao do elemento (ANIMAÇAO)
                }, 1000)     // duraçao da animaçao em milisegundos
            })
        })