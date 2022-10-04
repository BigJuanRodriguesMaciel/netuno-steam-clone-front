<template>
  
<b-container class="InputContainer">
    <p>Iniciar sessão Steam</p>
    
    <img class="imagem" src="https://cdn.discordapp.com/attachments/986475682190196756/1026502090027184198/steam.png" alt=""><b-span>STEAM</b-span>
 

    <b-form class="form">

        <br>
    
         <b-label class="InputLabel" for="nome">Nome de Usuario</b-label>
         <b-form-input type="text" class="input-login" maxlength="65"></b-form-input>
         <b-label class="InputLabel" for="nome">Senha</b-label>
         <b-form-input type="password" class="input-login" maxlength="65"></b-form-input>
         <br>
         <b-form-checkbox class="checkbox-login">Lembrar Senha</b-form-checkbox>
         <br>
     </b-form>

     <div class="InputBottom">
        <b-button class="btn">INICIAR SESSÃO</b-button>
        <b-button class="btn">CANCELAR</b-button>

        <hr>

         <label class="InputLabel" for="nome">Não possui uma conta Steam?</label>
         <b-button class="btn">CRIAR NOVA CONTA...</b-button>
         

     </div>
</b-container>

</template>

<script>
export default {

}
</script>

<style lang="scss">
     @import '../Input/input-mod.scss';
     
     

     .InputContainer {
        font-size: 12px;
        background-color:#32353C;
        color: white;
        padding: 15px;
        padding-bottom: 5px;
        height: 390px;
        left: 130px;
       
     }


     .InputLabel {
        color: white;
        margin-left: 5px;
     }

     .imagem {
        width: 45px;
        padding-bottom: 5px;
        margin-left: 25px;
        
     }

     .btn {
        background-color:#32353C;
        margin-left: 10px;
        border: 1px solid #32353C;
        height: 30px;
        width: 205px;
        font-size: 10px;
     }

</style>