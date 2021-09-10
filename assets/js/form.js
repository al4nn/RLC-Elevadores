
$(function(){
    $('form').submit(function(){
        if(formularioPreenchido()){
                var form = $('form');
                $('form').ajaxSubmit({
                    beforeSubmit:function(){
                        form.find('input[type=submit]').attr('disabled','true');
                        form.find('input[type=submit]').animate({'opacity':'0.4'})
                        form.find('input[type=submit]').attr('value','Carregando');
                    },
                    success:function(data){
                        alert('Mensagem enviada com sucesso!');
                        form.find('input[type=submit]').removeAttr('disabled');
                        form.find('input[type=submit]').animate({'opacity':'1'})
                        form.find('input[type=submit]').attr('value','Enviar');
                        form[0].reset();
                    }
                });
        }else{
            alert("Campos vázios não são permitidos!");
        }
        return false;
    })

    function formularioPreenchido(){
        var nome = $('[name=nome]').val();
        var email = $('[name=email]').val();
        var telefone = $('[name=telefone]').val();
        var mensagem = $('[name=mensagem]').val();
        if(nome === '' || email === '' || telefone === '' || mensagem === ''){
            return false;
        }else{
            return true;
        }
    }
})