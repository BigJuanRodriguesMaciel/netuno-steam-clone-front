<template>
    <div>
        <b-button class="login-button" href="#">{{text}}</b-button>
    </div>
    <div>
        <b-button class="gradient-blue-button" href="#">{{text}}</b-button>
    </div>
    <div>
        <b-button class="wishlist-button" href="#">{{text}}</b-button>
    </div>
    <div>
        <b-button class="transparent-button" href="#">{{text}}</b-button>
    </div>
    <div>
        <a class="btn clock-button" href="#"><img src="../../assets/ButtonImages/clock.png"></a>
    </div>
    <div>
        <a class="btn play-button"  href="#"><img src="../../assets/ButtonImages/play.png"></a>
    </div>
    <div>
        <a class="btn message-button"  href="#"><img src="../../assets/ButtonImages/open-message.png"></a>
    </div>
    <div>
        <a class="btn notices-button"  href="#"><img src="../../assets/ButtonImages/megaphone.png"></a>
    </div>
    <div>
        <a class="btn four-squares"  href="#"><img src="../../assets/ButtonImages/four-squares.png"></a>
    </div>
    <div>
        <a class="btn adjust-button"  href="#"><img src="../../assets/ButtonImages/adjust-button.png"></a>
    </div>
    <div>
        <a class="btn add-button"  href="#"><img src="../../assets/ButtonImages/add-button.png"></a>
    </div>
    <div>
        <a class="btn big-picture-button"  href="#"><img src="../../assets/ButtonImages/fullscreen-button.png"></a>
    </div>
    <div>
        <a class="btn settings-button"  href="#"><img src="../../assets/ButtonImages/settings-button.png"></a>
    </div>
    <div>
        <a class="btn left-arrow-button"  href="#"><img src="../../assets/ButtonImages/left-arrow.png"></a>
    </div>
    <div>
        <a class="btn right-arrow-button"  href="#"><img src="../../assets/ButtonImages/right-arrow.png"></a>
    </div>
</template>

<script>
    export default {
        name: 'StandardButton', 
        props: {
            variant: {
                type: String,
                require: false,
            },
            text: {
                type: String,
                require: false,
                default: "Steam"
            },
            disabled: {
                type: Boolean,
                require: false,
                default: false
            }                         
        }
    }
</script>

<style lang="scss">
     @import './ButtonStyle.scss' 
</style>