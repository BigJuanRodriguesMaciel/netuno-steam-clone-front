<template>
  
    <div class="box">
      <p id="text2">Cadastrar-se</p>
      <img class="img" click="" src="https://cdn.discordapp.com/attachments/1026706518860627989/1027266193834385429/seta-esquerda.png" alt="">
      <img class="img" src="https://cdn.discordapp.com/attachments/1026706518860627989/1027266674757476352/seta-direita.png" alt="">
      <img class="img" src="https://cdn.discordapp.com/attachments/1026706518860627989/1027267154711695501/go-back-arrow.png" alt="">
      <img class="img" src="https://cdn.discordapp.com/attachments/1026706518860627989/1027276079653732423/cadeado.png" alt="">
      <b-bottom class="bottom">Valve Corp [US]</b-bottom>
      <a class="urlsteam" href="url">https://store.steampowerred.com/join/?|=brazilian</a>
   </div>

  <b-container class="InputContainer2">
        <h1 class="text">CADASTRAR-SE</h1>
        
        <b-form class="form">
    
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
              <option value="">Burúndi</option>
              <option value="">Butão</option>
              <option value="">Cabo Verde</option>
              <option value="">Camarões</option>
              <option value="">Camboja</option>
              <option value="">Canadá</option>
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
              <option value="">Emirados Árabes Unidos</option>
              <option value="">Equador</option>
              <option value="">Eritreia</option>
              <option value="">Eslováquia</option>
              <option value="">Eslovénia</option>
              <option value="">Espanha</option>
              <option value="">Essuatíni</option>
              <option value="">Estado da Palestina</option>
              <option value="">Estados Unidos</option>
              <option value="">Estónia</option>
              <option value="">Etiópia</option>
              <option value="">Fiji</option>
              <option value="">Filipinas</option>
              <option value="">Finlândia</option>
              <option value="">França</option>
              <option value="">Gabão</option>
              <option value="">Gâmbia</option>
              <option value="">Gana</option>
              <option value="">Geórgia</option>
              <option value="">Granada</option>
              <option value="">Grécia</option>
              <option value="">Guatemala</option>
              <option value="">Guiana</option>
              <option value="">Guiné</option>
              <option value="">Guiné Equatorial</option>
              <option value="">Guiné-Bissau</option>
              <option value="">Haiti</option>
              <option value="">Honduras</option>
              <option value="">Hungria</option>
              <option value="">Iémen</option>
              <option value="">Ilhas Marechal</option>
              <option value="">Índia</option>
              <option value="">Indonésia</option>
              <option value="">Irão</option>
              <option value="">Iraque</option>
              <option value="">Islândia</option>
              <option value="">Israel</option>
              <option value="">Itália</option>
              <option value="">Jamaica</option>
              <option value="">Japão</option>
              <option value="">Jibuti</option>
              <option value="">Jordânia</option>
              <option value="">Laus</option>
              <option value="">Lesoto</option>
              <option value="">Letónia</option>
              <option value="">Líbano</option>
              <option value="">Libéria</option>
              <option value="">Líbia</option>
              <option value="">Listenstaine</option>
              <option value="">Lituânia</option>
              <option value="">Luxemburgo</option>
              <option value="">Macedónia do Norte</option>
              <option value="">Madagáscar</option>
              <option value="">Malásia</option>
              <option value="">Maláui</option>
              <option value="">Maldivas</option>
              <option value="">Mali</option>
              <option value="">Malta</option>
              <option value="">Marrocos</option>
              <option value="">Maurícia</option>
              <option value="">Mauritânia</option>
              <option value="">México</option>
              <option value="">Mianmar</option>
              <option value="">Micronésia</option>
              <option value="">Moçambique</option>
              <option value="">Moldávia</option>
              <option value="">Mónaco</option>
              <option value="">Mongólia</option>
              <option value="">Montenegro</option>
              <option value="">Namíbia</option>
              <option value="">Nauru</option>
              <option value="">Nepal</option>
              <option value="">Nicarágua</option>
              <option value="">Níger</option>
              <option value="">Nigéria</option>
              <option value="">Noruega</option>
              <option value="">Nova Zelândia</option>
              <option value="">Omã</option>
              <option value="">Países Baixos</option>
              <option value="">Palau</option>
              <option value="">Panamá</option>
              <option value="">Papua Nova Guiné</option>
              <option value="">Paquistão</option>
              <option value="">Paraguai</option>
              <option value="">Peru</option>
              <option value="">Polónia</option>
              <option value="">Portugal</option>
              <option value="">Quénia</option>
              <option value="">Quirguistão</option>
              <option value="">Quiribáti</option>
              <option value="">Reino Unido</option>
              <option value="">República Centro-Africana</option>
              <option value="">República Checa</option>
              <option value="">República Democrática do Congo	</option>
              <option value="">República Dominicana</option>
              <option value="">Roménia</option>
              <option value="">Ruanda</option>
              <option value="">Rússia</option>
              <option value="">Salomão</option>
              <option value="">Salvador</option>
              <option value="">Samoa</option>
              <option value="">Santa Lúcia</option>
              <option value="">São Cristóvão e Neves</option>
              <option value="">São Marinho</option>
              <option value="">São Tomé e Príncipe</option>
              <option value="">São Vicente e Granadinas</option>
              <option value="">Seicheles</option>
              <option value="">Senegal</option>
              <option value="">Serra Leoa</option>
              <option value="">Sérvia</option>
              <option value="">Singapura</option>
              <option value="">Síria</option>
              <option value="">Somália</option>
              <option value="">Sri Lanca</option>
              <option value="">Sudão</option>
              <option value="">Sudão do Sul</option>
              <option value="">Suécia</option>
              <option value="">Suíça</option>
              <option value="">Suriname</option>
              <option value="">Tailândia</option>
              <option value="">Taiuã</option>
              <option value="">Tajiquistão</option>
              <option value="">Tanzânia</option>
              <option value="">Timor-Leste</option>
              <option value="">Togo</option>
              <option value="">Tonga</option>
              <option value="">Trindade e Tobago</option>
              <option value="">Tunísia</option>
              <option value="">Turcomenistão</option>
              <option value="">Turquia</option>
              <option value="">Tuvalu</option>
              <option value="">Ucrânia</option>
              <option value="">Uganda</option>
              <option value="">Uruguai</option>
              <option value="">Usbequistão</option>
              <option value="">Vanuatu</option>
              <option value="">Vaticano</option>
              <option value="">Venezuela</option>
              <option value="">Vietname</option>
              <option value="">Zâmbia</option>
              <option value="">Zimbábue</option>
             </b-form-select>  
             <br><br>
             <b-form-checkbox class="checkbox-account">Tenho 13 anos de idade ou mais e aceitoos termos <br>
                do <b>Acordo de Assinatura do Steam e da politica  de Privacidade da Valve</b>
             </b-form-checkbox>
             <br> 
         </b-form>
    
         <div class="InputBottom">
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


         .InputContainer2{
    background-color: #32353C;
    color: white;
    padding-bottom: 40px;
    padding-top: 40px;
    margin-left: 70px;

   }

   .InputLabel {
    color: white;
   }

   .btn {
    border-radius: 0;
   }

   .text {
    font-size: 50px;
    margin-top: 15px;
   }

   .box {
     background-color: #565b66;
     margin-right: 840px;
     margin-left: 131px;
     height: 70px;

   }


   .img {
     padding-right: 10px;

   }

   #text2 {
     color: rgb(255, 251, 251);
   }

   .bottom {
     background-color: green;
     padding: 3px;
     border-radius: 2px;
   }

   .urlsteam {
     padding-left: 8px;
     color: green
   }

    </style>     