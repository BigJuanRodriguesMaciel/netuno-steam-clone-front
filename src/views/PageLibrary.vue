<template>
    <SideBarMenu/>
    <AllGamesPlayed/>
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