<template>
  

  <b-container class="InputContainer2">
        <h1 class="text">CADASTRAR-SE</h1>
        
        <b-form class="form" style="width: 300px">
    
            <br><br>
        
             <b-label class="InputLabel" for="nome">Endereço de e-mail</b-label>
             <b-form-input type="email" class="input-account" maxlength="65"></b-form-input>
             <br>
             <br>
             <b-label class="InputLabel" for="nome">Confirme o e-mail</b-label>
             <b-form-input type="email" class="input-account" maxlength="65"></b-form-input>
             <br>
             <br>
             <b-label class="InputLabel" for="nome">Pais de Residencia</b-label>
             <b-form-select class="select-account" v-model="selected" :options="options">
              <option value="">Selecione</option>
              <option value="">Afeganistão</option>
              <option value="">África do Sul</option>
              <option value="">Albânia</option>
              <option value="">Alemanha</option>
              <option value="">Andorra</option>
              <option value="">Angola</option>
              <option value="">Antiga e Barbuda</option>
              <option value="">Arábia Saudita</option>
              <option value="">Argélia</option>
              <option value="">Argentina</option>
              <option value="">Arménia</option>
              <option value="">Austrália</option>
              <option value="">Áustria</option>
              <option value="">Azerbaijão</option>
              <option value="">Bahamas</option>
              <option value="">Bangladexe</option>
              <option value="">Barbados</option>
              <option value="">Barém</option>
              <option value="">Bélgica</option>
              <option value="">Belize</option>
              <option value="">Benim</option>
              <option value="">Bielorrússia</option>
              <option value="">Bolívia</option>
              <option value="">Bósnia e Herzegovina</option>
              <option value="">Botsuana</option>
              <option value="">Brasil</option>
              <option value="">Brunei</option>
              <option value="">Bulgária</option>
              <option value="">Burquina Faso</option>
              <option value="">Catar</option>
              <option value="">Cazaquistão</option>
              <option value="">Chade</option>
              <option value="">Chile</option>
              <option value="">China</option>
              <option value="">Chipre</option>
              <option value="">Colômbia</option>
              <option value="">Comores</option>
              <option value="">Congo-Brazzaville</option>
              <option value="">Coreia do Norte</option>
              <option value="">Coreia do Sul</option>
              <option value="">Cosovo</option>
              <option value="">Costa do Marfim</option>
              <option value="">Costa Rica</option>
              <option value="">Croácia</option>
              <option value="">Cuaite</option>
              <option value="">Cuba</option>
              <option value="">Dinamarca</option>
              <option value="">Dominica</option>
              <option value="">Egito</option>
              <option value="">Eslovénia</option>
              <option value="">Espanha</option>
              <option value="">Essuatíni</option>
              <option value="">Nova Zelândia</option>
              <option value="">Omã</option>
              <option value="">Países Baixos</option>
              <option value="">Palau</option>
              <option value="">Panamá</option>
              <option value="">Papua Nova Guiné</option>
              <option value="">Paquistão</option>
              <option value="">Paraguai</option>
              <option value="">Ruanda</option>
              <option value="">Rússia</option>
              <option value="">Salomão</option>
              <option value="">Salvador</option>
             </b-form-select>  
             <br><br>
             <b-form-checkbox class="checkbox-account">Tenho 13 anos de idade ou mais e aceitoos termos <br>
                do <b>Acordo de Assinatura do Steam e da politica <br> de Privacidade da Valve</b>
             </b-form-checkbox>
             <br> 
         </b-form>
    
         <div>
            <b-button class="btn">Continuar</b-button>
         </div>
    </b-container>

    </template>
    
    <script>
    export default {
    
     

      }
    
    </script>
    
    <style lang="scss">

         @import '../Input/input-mod.scss';
         @import './CadastroSteam.scss';

    </style>     