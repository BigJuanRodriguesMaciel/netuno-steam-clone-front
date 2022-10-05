<template>
    <div>
        <b-form-checkbox class="checkbox-account"></b-form-checkbox>
    </div>
    <br>
    <div>
        <b-form-select class="select-account" v-model="selected" :options="options"></b-form-select>  
    </div>
    <br>
    <div>
        <b-form-input class="input-account" maxlength="65"></b-form-input>
    </div>
    <br>
    <div>
        <b-form-checkbox class="checkbox-login"></b-form-checkbox>
    </div>
    <br>
    <div>
        <b-form-input class="input-login" maxlength="65"></b-form-input>
    </div>
    <br>
    <div>
        <b-button class="btn"></b-button>
    </div>
    <br>
    <div>
        <b-input-group class="search-box">
            <b-form-input placeholder="Search" maxlength="65"></b-form-input>
            <a class="btn"><img src="../../assets/loupe.png"></a>
        </b-input-group>
    </div>
    <br>
    <div>
        <b-input-group class="menu-search">
            <a class="btn"><img src="../../assets/loupemenu.png"></a>
            <b-form-input type="search" placeholder="Search by Name" maxlength="65"></b-form-input>
        </b-input-group>
    </div>
    <br>
</template>

<script>
export default {
    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Please select some item' },
          { value: '1', text: 'Teste 1' },
          { value: '2', text: 'Teste 2' },
          { value: '3', text: 'Teste 3' },
        ]
      }
    }
  }
</script>

<style lang="scss">
  @import './input-mod.scss';
</style>