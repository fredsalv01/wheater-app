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
        <div class="left-tile indicators">
          <div class="indicators-wrapper">
            <div class="indicators-item">
              <img src="./assets/img/humidity.png" alt="humidity">
              <span>
                Humidity
                <strong>56%</strong>
              </span>
            </div>
            <div class="indicators-item">
              <img src="./assets/img/wind.png" alt="wind">
              <span>
                Air Quality
                <strong>151</strong>
              </span>
            </div>
          </div>
          <div class="divider"></div>
          <div class="indicators-wrapper">
            <div class="indicators-item">
              <img src="./assets/img/sunrise.png" alt="sunrise">
              <span>
                Sunrise
                <strong>6:45 AM</strong>
              </span>
            </div>
            <div class="indicators-item">
              <img src="./assets/img/sea.png" alt="sea">
              <span>
                Sunset
                <strong>6:15 PM</strong>
              </span>
            </div>
          </div>
        </div>

        <div class="left-tile bg-primary rain">
          <div class="rain-item">
            <span class="rain-indicator">
              Monthly Rainfall
              <strong>22mm</strong>
            </span>
          </div>
          <div class="rain-item">
            <span class="rain-indicator">
              This year
              <strong class="primary">+2%</strong>
            </span>
          </div>
        </div>
      </div>
      <div class="section-wrapper-right">
        <div class="right-tile">
          <h4>Today, 5 February</h4>
          <div class="chart-wrapper">
            <Chart></Chart>
          </div>
          <div class="days-wrapper">
            <div class="day-indicator-wrapper">
              <span class="day">MON</span>
              <font-awesome-icon
                id="search-icon"
                icon="fa-solid fa-sun"
                size="xl"
              />
              <span class="degrees">19°</span>
            </div>
            <span class="divider"></span>
            <div class="day-indicator-wrapper">
              <span class="day">TUE</span>
              <font-awesome-icon
                id="search-icon"
                icon="fa-solid fa-cloud"
                size="xl"
              />
              <span class="degrees">19°</span>
            </div>
            <span class="divider"></span>
            <div class="day-indicator-wrapper">
              <span class="day">WED</span>
              <font-awesome-icon
                id="search-icon"
                icon="fa-solid fa-cloud-rain"
                size="xl"
              />
              <span class="degrees">19°</span>
            </div>
            <span class="divider"></span>
            <div class="day-indicator-wrapper">
              <span class="day">THU</span>
              <font-awesome-icon
                id="search-icon"
                icon="fa-solid fa-cloud-sun"
                size="xl"
              />
              <span class="degrees">19°</span>
            </div>
            <span class="divider"></span>
            <div class="day-indicator-wrapper">
              <span class="day">FRI</span>
              <font-awesome-icon
                id="search-icon"
                icon="fa-solid fa-wind"
                size="xl"
              />
              <span class="degrees">19°</span>
            </div>
            <span class="divider"></span>
            <div class="day-indicator-wrapper">
              <span class="day">SAT</span>
              <font-awesome-icon
                id="search-icon"
                icon="fa-solid fa-sun"
                size="xl"
              />
              <span class="degrees">19°</span>
            </div>
            <span class="divider"></span>
            <div class="day-indicator-wrapper">
              <span class="day">SUN</span>
              <font-awesome-icon
                id="search-icon"
                icon="fa-solid fa-cloud-sun"
                size="xl"
              />
              <span class="degrees">19°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from './components/Chart.vue';

export default {
    name: "App",
    components: { Chart }
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
