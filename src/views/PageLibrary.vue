<template>
    <b-container fluid class="mblank">
        <b-row>
            <b-col md="3">
                <SideBarMenu/>
            </b-col>
            <b-col md="9">
                <AllGamesPlayed/>
            </b-col>
        </b-row>
    </b-container>
    
   
</template>

<script>
import AllGamesPlayed from '@/components/AllGames/AllGamesPlayed.vue';
import SideBarMenu from '@/components/SideBar/SideBarMenu.vue';

export default {
    components: { AllGamesPlayed, SideBarMenu }
}
</script>

<style>

</style>