<template>
  <div class="container">
    <div class="header">
      <div class="header-title">
        <h2>Weather App</h2>
      </div>
      <div class="header-searchbar">
        <input type="text" placeholder="Search Your City" />
        <font-awesome-icon
          id="search-icon"
          icon="fa-solid fa-magnifying-glass"
        />
      </div>
    </div>
    <div class="tile-one">
      <div class="tile-one-temp">
        <font-awesome-icon icon="fa-solid fa-sun" size="3x" beat  />
        <h1>21°</h1>
        <h2>Mumbai, India</h2>
      </div>
      <div class="tile-one-hour">
        <h1>03:11 PM</h1>
        <h2>Monday</h2>
      </div>
    </div>

    <div class="section-wrapper">
      <div class="section-wrapper-left">
        <div class="left-tile">
          
        </div>

        <div class="left-tile">
          
        </div>
      </div>
      <div class="section-wrapper-right">
        <div class="right-tile">
          
         <Chart />  
              
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from './components/Chart.vue';


export default {
  name: "App",
  components: {
    Chart,
}
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
