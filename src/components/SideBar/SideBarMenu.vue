<template>
    <b-container class="side-bar">
        <b-button class="sidebar-home">HOME</b-button>
        <a class="btn four-squares"  href="#"><img src="../../assets/ButtonImages/four-squares.png"></a>
        <div class="dropdown-menu-all">
            <b-dropdown id="dropdown-3" text="ALL">
            <div v-for="(item, index) in allMenu" :key="index">
                <b-dropdown-item v-if="item != '#divider'">{{ item }}</b-dropdown-item>
                <b-dropdown-divider v-else class="divider"></b-dropdown-divider>
            </div>
            </b-dropdown>
            <a class="btn clock-button" href="#"><img src="../../assets/ButtonImages/clock.png"></a>
            <a class="btn play-button"  href="#"><img src="../../assets/ButtonImages/play.png"></a>
        </div>
        <div>
            <b-input-group class="menu-search">
                <a class="btn"><img src="../../assets/loupemenu.png"></a>
                <b-form-input type="search" placeholder="Search by Name" maxlength="65"></b-form-input>
            </b-input-group>
            <a class="btn adjust-button"  href="#"><img src="../../assets/ButtonImages/adjust-button.png"></a>
        </div>

        <b-row class="pt-2">
            <b-col cols="6" sm="4" md="2" lg="2" class=" size-img mb-2" v-for="(item, index) in imgDatas" :key="index">
                <ListAllGames :image="item" />
            </b-col>
        </b-row>
    </b-container>
</template>
    
<script>
    export default {
        data() {
            return {
                listGames: [
                    {title: "Game 1",urlImage:"http://loremflickr.com/640/480"},
                    {title: "Game 2",urlImage:"http://loremflickr.com/640/480"},
                    {title: "Game 3",urlImage:"http://loremflickr.com/640/480"},
                    {title: "Game 4",urlImage:"http://loremflickr.com/640/480"},
                ],
                allMenu: [
                'GAMES',
                'TOOLS',
                '#divider',
                'GROUP BY COLLECTION',
                ],
            }
        },
    };
<style lang="scss">
    @import '.././Input/input-mod.scss';
    @import '../Button/ButtonStyle.scss';
    @import './StyleSideBar.scss';
</style>