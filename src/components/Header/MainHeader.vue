<template>
  <b-container fluid>
      <div class="nav-header">
        <b-nav>
          <b-nav-item>Steam</b-nav-item>
          <b-nav-item>View</b-nav-item>
          <b-nav-item>Friends</b-nav-item>
          <b-nav-item>Games</b-nav-item>
          <b-nav-item>Help</b-nav-item>
        </b-nav>
      </div>
      <div class="buttons-header float-right">
        <a class="btn notices-button"  href="#"><img src="../../assets/ButtonImages/megaphone.png"></a>
        <a class="btn message-button"  href="#"><img src="../../assets/ButtonImages/open-message.png"></a>

        <img src="../../assets/user-icon.png" alt="user">
        <b-dropdown text="User_Name" block variant="primary" class="m-2 dropuser">
          <b-dropdown-item href="#">View profile</b-dropdown-item>
          <b-dropdown-item href="#">Account details</b-dropdown-item>
          <b-dropdown-item href="#">Logout: <p>user_name</p></b-dropdown-item>
          <b-dropdown-item href="#">Preferences</b-dropdown-item>
          <b-dropdown-item href="#">Change language</b-dropdown-item>
        </b-dropdown>
      </div>
  </b-container>

  <b-container fluid class="header">
    <div class="arrow">
      <a class="btn left-arrow-button"  href="#"><img src="../../assets/ButtonImages/left-arrow.png"></a>
      <a class="btn right-arrow-button"  href="#"><img src="../../assets/ButtonImages/right-arrow.png"></a>
    </div>
    <div class="principal">
      <b-nav>
        <b-nav-item>STORE</b-nav-item>
        <b-nav-item>LIBRARY</b-nav-item>
        <b-nav-item>COMMUNITY</b-nav-item>
        <b-nav-item>USER_NAME</b-nav-item>
      </b-nav>
    </div>


  </b-container>
</template>

<script>
 
</script>
<style lang="scss">
@import './style.scss';
@import '../Button/ButtonStyle.scss';
@import '../Input/input-mod.scss';

</style>
