<template>
  <b-container class="header_store" fluid>
    <div>
        <b-button class="wishlist-button" href="#">WISHLIST</b-button>
    </div>
    <div class="store_nav">

        <b-nav>
            <b-nav-item>Your Store</b-nav-item>
            <b-nav-item>New & Noteworthy</b-nav-item>
            <b-nav-item>Categories</b-nav-item>
            <b-nav-item>Points Shop</b-nav-item>
            <b-nav-item>News</b-nav-item>
            <b-nav-item>Labs</b-nav-item>
            <div>
                <b-input-group class="search-box">
                    <b-form-input placeholder="Search" maxlength="65"></b-form-input>
                    <a class="btn"><img src="../../assets/loupe.png"></a>
                </b-input-group>
            </div>
        </b-nav>

    </div>
  </b-container>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "../Input/input-mod.scss";
@import "./style.scss";
</style>