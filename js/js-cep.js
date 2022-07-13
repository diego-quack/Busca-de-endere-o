
$(document).ready(function(){

    //Faz a instancia do modal:
    var modal = new bootstrap.Modal("#JanelaEndereco");
    
    $("#btn").on("click", function() {

            var cep = $("#cep").val().replace(/\D/g, '');
    
            //Verifica se campo cep possui valor informado.
            if (cep != "") {
    
                //Expressão regular para validar o CEP:
                var validacep = /^[0-9]{8}$/;
    
                //Valida o formato do CEP:
                if(validacep.test(cep)) {
                    
                    $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
    
                        if (!("erro" in dados)) {
                            $("#rua").val(dados.logradouro);
                            $("#bairro").val(dados.bairro);
                            $("#cidade").val(dados.localidade);
                            $("#uf").val(dados.uf);
                            modal.show();
                        } 
                        else {
                            //CEP pesquisado não foi encontrado.
                            alert("CEP não encontrado.");
                            $("#cep").val("");
                        }
                    });
                }
                else {
                    //cep é inválido.
                    alert("Formato de CEP inválido.");
                    $("#cep").val("");
                }
            }
            else {
                alert("Digite um CEP válido!");
            }
    });
});


