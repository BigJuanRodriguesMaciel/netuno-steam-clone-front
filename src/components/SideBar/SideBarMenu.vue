<template>
    <b-container class="side-bar w-25">
        <b-row class="gx-0 gy-0">
            <b-col md="10">
                <b-button class="side-bar-home">HOME</b-button>
            </b-col>
            <b-col md="2">
                <a class="btn four-squares"  href="#"><img src="../../assets/ButtonImages/four-squares.png"></a>
            </b-col>
        </b-row>
        <b-row class=" gx-0 gy-0 mt-1">
            <b-col md="10">
                <b-dropdown class="dropdown-menu-all" id="dropdown-3" text="ALL">
                <div v-for="(item, index) in allMenu" :key="index">
                    <b-dropdown-item v-if="item != '#divider'"><input type="checkbox">{{ item }}</b-dropdown-item>
                    <b-dropdown-divider v-else class="divider"></b-dropdown-divider>
                </div>
                </b-dropdown>
            </b-col>
            <b-col md="2">
                <a class="btn clock-button" href="#"><img src="../../assets/ButtonImages/clock.png"></a>
                <a class="btn play-button"  href="#"><img src="../../assets/ButtonImages/play.png"></a>
            </b-col>
        </b-row>
        <b-row class="gx-0 gy-0 mt-1">
            <b-col md="10">
                <b-input-group class="menu-search">
                    <a class="btn"><img src="../../assets/loupemenu.png"></a>
                    <b-form-input type="search" placeholder="Search by Name" maxlength="65"></b-form-input>
                </b-input-group>
            </b-col>
            <b-col md="2">
                <a class="btn adjust-button"  href="#"><img src="../../assets/ButtonImages/adjust-button.png"></a>
            </b-col>
        </b-row>
        <b-row class="pt-2">
            <div class="p-0" v-for="(item, index) in list" :key="index">
                <b-col md="12" class="list-games">
                    <b-button class="more-less" @click="changeShowListGames(index)">{{(`${ item.showListGames ? '-' : '+' }`)}}</b-button>
                    <p class="list-period ml-0">{{ item.listPeriodTitle + ` (${ item.listGames.length })` }}</p>
                </b-col >
                <b-col class="size-img-thumb" md="12" v-show="item.showListGames" v-for="(listGamesItem, listGamesIndex) in item.listGames" :key="listGamesIndex">
                    <img :src="listGamesItem.urlImage"/>
                    <p>{{ listGamesItem.title }}</p>
                </b-col>
            </div>
        </b-row>
    </b-container>
</template>
    
<script>
    export default {
        data() {
            return {
                list:[
                    {
                        listPeriodTitle: 'RECENT',
                        showListGames: true,
                        listGames: [
                            {title: "Game 1", urlImage:"http://loremflickr.com/640/480"},
                            {title: "Game 2", urlImage:"http://loremflickr.com/640/480"},
                            {title: "Game 3", urlImage:"http://loremflickr.com/640/480"},
                            {title: "Game 4", urlImage:"http://loremflickr.com/640/480"},
                        ],
                    },
                    {
                        listPeriodTitle: 'YEAR',
                        showListGames: true,
                        listGames: [
                            {title: "Game 1", urlImage:"http://loremflickr.com/640/480"},
                            {title: "Game 2", urlImage:"http://loremflickr.com/640/480"},
                            {title: "Game 3", urlImage:"http://loremflickr.com/640/480"},
                            {title: "Game 4", urlImage:"http://loremflickr.com/640/480"},
                        ],
                    },
                    {
                        listPeriodTitle: 'NO RECORD ACTIVITY',
                        showListGames: true,
                        listGames: [
                            {title: "Game 1", urlImage:"http://loremflickr.com/640/480"},
                            {title: "Game 2", urlImage:"http://loremflickr.com/640/480"},
                            {title: "Game 3", urlImage:"http://loremflickr.com/640/480"},
                            {title: "Game 4", urlImage:"http://loremflickr.com/640/480"},
                        ],
                    },
                ],
                allMenu: [
                    'GAMES',
                    'TOOLS',
                    '#divider',
                    'GROUP BY COLLECTION',
                ], 
            }
        },
        methods: {
            changeShowListGames (index) {
                this.list[index].showListGames = ! this.list[index].showListGames;

                console.log('changeShowListGames')
            }
        },
    };
</script>

<style lang="scss">
    @import '.././Input/input-mod.scss';
    @import '../Button/ButtonStyle.scss';
    @import './StyleSideBar.scss';
</style>