<template>
    <b-container class="side-bar">
        <b-button class="sidebar-home">HOME</b-button>
        <a class="btn four-squares"  href="#"><img src="../../assets/ButtonImages/four-squares.png"></a>
        <div class="dropdown-menu-all">
            <b-dropdown id="dropdown-1" text="ALL">
            <div v-for="(item, index) in allMenu" :key="index">
                <b-dropdown-item v-if="item != '#divider'">{{ item }}</b-dropdown-item>
                <b-dropdown-divider v-else class="divider"></b-dropdown-divider>
            </div>
            </b-dropdown>
            <a class="btn clock-button" href="#"><img src="../../assets/ButtonImages/clock.png"></a>
            <a class="btn play-button"  href="#"><img src="../../assets/ButtonImages/play.png"></a>
        </div>
        <b-input-group class="menu-search">
            <a class="btn"><img src="../../assets/loupemenu.png"></a>
            <b-form-input type="search" placeholder="Search by Name" maxlength="65"></b-form-input>
        </b-input-group>
        <a class="btn adjust-button"  href="#"><img src="../../assets/ButtonImages/adjust-button.png"></a>
    </b-container>
</template>
    
<script>
    export default {
        data() {
            return {
                allMenu : [
                'GAMES',
                'TOOLS',
                '#divider',
                'GROUP BY COLLECTION',
                ],
            }
        },
    };
</script>
  
<style lang="scss">
    @import '.././Input/input-mod.scss';
    @import '../Button/ButtonStyle.scss';
    @import './StyleSideBar.scss';
</style>