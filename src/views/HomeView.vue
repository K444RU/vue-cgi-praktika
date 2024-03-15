<template>
  <div class="home-page-background">
    <!--HEADER-->
    <HomeHeader :isUserLoggedIn="isUserLoggedIn"/>
    <!--BODY-->
    <div class="home-page-body">
      <div class="home-page-left-nav"></div>
      <!--MOVIE BANNER CAROUSEL START-->
      <div class="home-page-centre-nav">
        <div class="carousel">
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2" class="active" aria-current="true" aria-label="Slide 3"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item">
                <div href="#" class="col home-page-carousel-img">
                  <img src="@/assets/dune2.jpeg">
                </div>
              </div>
              <div class="carousel-item">
                <div href="#" class="col home-page-carousel-img">
                  <img src="@/assets/kungfu.webp">
                </div>
              </div>
              <div class="carousel-item active">
                <div href="#" class="col home-page-carousel-img">
                  <img src="@/assets/migration.jpeg">
                </div>
              </div>
              <div class="carousel-item">
                <div href="#" class="col home-page-carousel-img">
                  <img src="@/assets/The-Beekeeper.webp">
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button"
                    data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <!--MOVIE BANNER CAROUSEL END-->
        <!--WEEK DAY PICKER BUTTONS START-->
        <div class="home-page-centre-upper-tabs2">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <div class="day-picker_choice" v-for="day in weekDaysResponse" :key="day">
              <li class="nav-item" role="presentation">
                <button class="day-choice-button" :class="{ 'active': isActiveDay(day) }"
                        :id="'pills-' + day.toLowerCase() + '-tab'"
                        @click="selectDay(day)"
                        type="button" role="tab" :aria-controls="'pills-' + day.toLowerCase()"
                        :aria-selected="isActiveDay(day)">
                  <span>{{ getDayName(day) }}</span>
                </button>
              </li>
            </div>
            <!--WEEK DAY PICKER BUTTONS END-->
            <!--FILTER DROPDOWN BUTTONS START-->
            <div class="filter-picker-choice">
              <div class="dropdown">
                <button class="dropdown-button dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <font-awesome-icon :icon="['fas', 'film']" class="icon-space"/>
                  Žanr
                </button>
                <ul class="dropdown-menu">
                  <li v-for="genre in genresResponse" :key="genre">
                    <label class="checkbox">
                      <input v-model="selectedGenres[genre]"
                             @change="filterMoviesByGenres" type="checkbox">{{ genre }}
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="filter-picker-choice">
              <div class="dropdown">
                <button class="dropdown-button dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                  <font-awesome-icon :icon="['fas', 'hand']" class="icon-space"/>
                  Vanus
                </button>
                <ul class="dropdown-menu">
                  <li v-for="age in ageRestrictionsResponse" :key="age">
                    <label class="checkbox">
                      <input v-model="selectedAgeRestrictions[age]"
                             @change="filterMoviesByAgeRestrictions" type="checkbox">{{ age }}
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="filter-picker-choice">
              <div class="dropdown">
                <button class="dropdown-button dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                  <font-awesome-icon :icon="['fas', 'clock']" class="icon-space"/>
                  Algus
                </button>
                <ul class="dropdown-menu">
                  <li v-for="start in startTimesResponse" :key="start">
                    <label class="checkbox">
                      <input v-model="selectedStartTimes[start]"
                             @change="filterMoviesByStartTimes" type="checkbox">{{ start }}:00
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="filter-picker-choice">
              <div class="dropdown">
                <button class="dropdown-button dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                  <font-awesome-icon :icon="['fas', 'volume-high']" class="icon-space"/>
                  Keel
                </button>
                <ul class="dropdown-menu">
                  <li v-for="language in languagesResponse" :key="language">
                    <label class="checkbox">
                      <input v-model="selectedLanguages[language]"
                             @change="filterMoviesByLanguages" type="checkbox">{{ language }}
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="filter-picker-choice" v-if="isUserLoggedIn">
              <button class="recommend-button" type="button" @click="recommendMoviesBasedOnHistory">
                <font-awesome-icon :icon="['far', 'star']" class="icon-space"/>
                Soovita filme vaatamisajaloo põhjal
              </button>
            </div>
          </ul>
        </div>
        <!--FILTER DROPDOWN BUTTONS START-->
        <!--MOVIE INFO BOX START-->
        <div class="home-page-centre-lower-tabs">
          <div class="tab-content" id="pills-tabContent">
            <div v-for="day in weekDaysResponse" :key="day" class="tab-pane fade show"
                 :class="{ 'active': isActiveDay(day) }"
                 :id="'pills-' + day.toLowerCase()"
                 role="tabpanel" :aria-labelledby="'pills-' + day.toLowerCase() + '-tab'" tabindex="0">
              <div v-for="movie in moviesByDay[day]" :key="movie.id" class="movie-info-row">
                <div class="movie-row-left-box">
                  <img class="movie-image" :src="movie.imageUrl" alt="Movie Poster">
                </div>
                <div class="movie-row-right-box">
                  <div class="movie-time-container">
                    <div class="grid-wrapper">
                      <div class="row">{{ movie.time }}</div>
                      <div class="row">CGI Stream</div>
                      <div class="row">{{ movie.language }}</div>
                    </div>
                  </div>
                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">{{ movie.name }}</div>
                        <div class="row">{{ movie.genre }}</div>
                        <div class="row">
                          {{ movie.ageRestriction }}
                        </div>
                      </div>
                    </div>
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="imdb-rate-row">
                          <div class="rate-col-1"><img src="@/assets/imdb.png"></div>
                          <div class="rate-col-2">
                            <font-awesome-icon style="color: rgb(245, 197, 24);" :icon="['fas', 'star']"/>
                            {{ movie.rating }}/10
                          </div>
                        </div>
                        <div class="row">
                          <button class="trailer-button">
                            <font-awesome-icon :icon="['fas', 'video']"/>
                            Vaata Treilerit
                          </button>
                        </div>
                        <div class="row">
                          <button class="ticket-button" @click="navigateToBuyTicket(movie.id)">
                            <font-awesome-icon :icon="['fas', 'ticket']"/>
                            Osta Pileteid
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--MOVIE INFO BOX END-->
        <button class="back-to-top-button" @click="scrollToTop">
          Tagasi Üles
        </button>
      </div>
      <div class="home-page-right-nav"></div>
    </div>
    <!--FOOTER-->
    <InfoFooter/>
  </div>
</template>

<script>
import InfoFooter from "@/components/InfoFooter";
import HomeHeader from "@/components/HomeHeader";
import {reactive} from "vue";

export default {
  name: 'HomeView',
  components: {HomeHeader, InfoFooter},
  data() {
    return {
      currentSlideIndex: 0,
      selectedGenres: [],
      selectedAgeRestrictions: [],
      selectedStartTimes: [],
      selectedLanguages: [],
      activeDay: 'MONDAY',
      isScrolling: false,
      weekDaysResponse: [],
      startTimesResponse: [],
      languagesResponse: [],
      ageRestrictionsResponse: [],
      genresResponse: [],
      moviesByDay: reactive({}),
      isUserLoggedIn: false,
    };
  },
  mounted() {
    this.scrollToTopByDefault()
    this.getAllMovieWeekDays()
    this.getAllMovieStartTimes()
    this.getAllMovieLanguages()
    this.getAllMovieAgeRestrictions()
    this.getAllMovieGenres()
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.isUserLoggedIn = true;
    }
  },
  methods: {
    scrollToTopByDefault() {
      window.scrollTo(0, 0);
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    navigateToBuyTicket(movieId) {
      console.log("Navigating to buy ticket page with movieId:", movieId);

      this.$router.push({
        name: 'ticket',
        query: {
          movieId: movieId,
        },
      });
    },
    recommendMoviesBasedOnHistory() {
      const userId = localStorage.getItem('userId');
      const weekDay = this.activeDay;

      this.$http.get(`/filter/by-recommended-genres?userId=${userId}&weekDay=${weekDay}`)
          .then(response => {
            this.moviesByDay[this.activeDay] = response.data;
            console.log('Recommended Movies:', response.data);
          })
          .catch(error => {
            console.error('Error fetching recommended movies:', error);
          });
    },
    filterMoviesByGenres() {
      const selectedGenres = Object.keys(this.selectedGenres)
          .filter(genre => this.selectedGenres[genre]);

      if (selectedGenres.length === 0) {
        this.getAllMovieWeekDays();
        return;
      }
      const genreQueryParam = `genre=${selectedGenres.join(',')}`;
      this.$http.get(`/filter/by-genre?${genreQueryParam}&weekDay=${this.activeDay}`)
          .then(response => {
            this.moviesByDay[this.activeDay] = response.data;
            console.log("Response:", response.data);
          })
          .catch(error => {
            console.error("Error:", error);
          });
    },
    filterMoviesByAgeRestrictions() {
      const selectedAgeRestrictions = Object.keys(this.selectedAgeRestrictions)
          .filter(ageRestriction => this.selectedAgeRestrictions[ageRestriction]);

      if (selectedAgeRestrictions.length === 0) {
        this.getAllMovieWeekDays();
        return;
      }

      const ageRestrictionsParam = `ageRestriction=${selectedAgeRestrictions.join(',')}`;
      this.$http.get(`/filter/by-age-restriction?${ageRestrictionsParam}&weekDay=${this.activeDay}`)
          .then(response => {
            this.moviesByDay[this.activeDay] = response.data;
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },
    filterMoviesByStartTimes() {
      const selectedStartTimes = Object.keys(this.selectedStartTimes)
          .filter(startTime => this.selectedStartTimes[startTime]);

      if (selectedStartTimes.length === 0) {
        this.getAllMovieWeekDays();
        return;
      }

      const startTimesArray = selectedStartTimes.map(time => parseInt(time));

      const startTimesParam = `startTimes=${startTimesArray.join(',')}`;
      this.$http.get(`/filter/by-start-time?${startTimesParam}&weekDay=${this.activeDay}`)
          .then(response => {
            this.moviesByDay[this.activeDay] = response.data;
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          });
    },
    filterMoviesByLanguages() {
      const selectedLanguages = Object.keys(this.selectedLanguages)
          .filter(languages => this.selectedLanguages[languages]);
      if (selectedLanguages.length === 0) {
        this.getAllMovieWeekDays();
        return;
      }
      const languagesParam = `language=${selectedLanguages.join(',')}`;
      this.$http.get(`/filter/by-language?${languagesParam}&weekDay=${this.activeDay}`)
          .then(response => {
            this.moviesByDay[this.activeDay] = response.data;
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
    selectDay(day) {
      this.activeDay = day;
      this.getAllMovieWeekDays();
    },
    isActiveDay(day) {
      return this.activeDay === day;
    },
    getDayName(day) {
      const dayNames = {
        MONDAY: 'Esmaspäev',
        TUESDAY: 'Teisipäev',
        WEDNESDAY: 'Kolmapäev',
        THURSDAY: 'Neljapäev',
        FRIDAY: 'Reede',
        SATURDAY: 'Laupäev',
        SUNDAY: 'Pühapäev',
      }
      return dayNames[day];
    },
    getAllMovieWeekDays() {
      this.$http.get("/filter/all/week-days")
          .then(response => {
            this.weekDaysResponse = response.data;
            this.weekDaysResponse.forEach(day => {
              this.$http.get(`/movie/by-weekday?weekDay=${day}`)
                  .then(movieResponse => {
                    // Use reactive approach to update moviesByDay
                    this.moviesByDay[day] = movieResponse.data;
                    console.log('MOVIE RESPONSE: ' + movieResponse.data);
                    console.log('MOVIeS: ' + this.moviesByDay);
                  })
                  .catch(error => {
                    console.log(error);
                  });
            });
          })
          .catch(error => {
            console.log(error);
          });
    },
    getAllMovieStartTimes() {
      this.$http.get("/filter/all/start-times")
          .then(response => {
            this.startTimesResponse = response.data;
            console.log(response.data);
          })
          .catch(error => {
            console.error("Error fetching movie start times:", error);
          });
    },
    getAllMovieLanguages() {
      this.$http.get("/filter/all/languages")
          .then(response => {
            this.languagesResponse = response.data;
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
    getAllMovieAgeRestrictions() {
      this.$http.get("/filter/all/age-restrictions")
          .then(response => {
            this.ageRestrictionsResponse = response.data;
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
    getAllMovieGenres() {
      this.$http.get("/filter/all/genres")
          .then(response => {
            this.genresResponse = response.data;
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Open+Sans:wght@300&family=Permanent+Marker&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&family=Smooch&display=swap');

/*HOME PAGE CAROUSEL CSS*/

.carousel {
  margin-top: 5px;
  display: flex;
  /*border: 1px solid white;*/
  height: 500px;
  width: 1300px;
  cursor: pointer;
  margin-bottom: 10px;
}

.home-page-carousel-img {
  height: 500px;
  width: 1300px;
  border-radius: 5px;
  overflow: hidden;
}

.home-page-carousel-img img {
  width: 100%;
  height: 100%;
}

/*BODY CSS*/

.home-page-background {
  width: 100%;
  min-height: 150vh;
  position: relative;
  background-size: cover;
  background-color: #000014;
  background-position: center;
}

.home-page-body {
  display: flex;
  min-height: 120vh;
  /*border: 1px solid white;*/
  overflow: hidden;
}

.home-page-left-nav {
  margin-top: 125px;
  width: 10%;
  display: flex;
  height: auto;
  /*border: 1px solid white;*/
}

.home-page-right-nav {
  margin-top: 125px;
  width: 10%;
  display: flex;
  height: auto;
  /*border: 1px solid white;*/
}

.home-page-centre-nav {
  margin-top: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: auto;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
  /*border: 1px solid white;*/
}

.home-page-centre-upper-tabs2 {
  display: flex;
  flex-direction: row;
  position: relative;
  width: 98%;
  height: 88px;
  /*border: 1px solid white;*/
  text-align: center;
  align-items: center;
  border-radius: 10px;
  margin: 20px;
  padding: 0 16px;
  justify-content: space-between;
  overflow: visible;
}

/*DAY PICKER CSS*/

.day-picker_choice {
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 500px;
  height: 80px;
  /*border: 1px solid white;*/
  margin-right: 5px;
  position: relative;
  text-align: center;
  border-radius: 5px;
}

/*MOVIE FILTER CSS*/

.filter-picker-choice {
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 500px;
  height: 80px;
  margin-right: 5px;
  position: relative;
  text-align: center;
  border-radius: 5px;
  background-color: #3c648c;
  box-shadow: 0px 6px 24px 0px #000014;
  cursor: pointer;
  border: none;
}

.filter-picker-choice .dropdown-menu {
  width: 250px;
  height: auto;
  background-color: #3c648c;
  border: #3c78a0 2px solid;
  margin-left: 50px;
  box-shadow: 0px 6px 24px 0px #000014;
  font-family: "Montserrat", sans-serif;
  color: white !important;
}

.recommend-button {
  background: #3c648c;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  border: none;
  color: white !important;
}

.filter-picker-choice .dropdown-button {
  background: #3c648c;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  border: none;
  color: white !important;
}

.filter-picker-choice .dropdown-button .dropdown-toggle {
  width: 100%;
  height: 100%;
  padding: 15px;
  text-align: center;
}

.filter-picker-choice .checkbox label {
  font-size: 20px;
  vertical-align: middle;
}

.filter-picker-choice .checkbox input {
  margin-left: 20px;
  margin-bottom: 10px;
  box-shadow: 0px 6px 24px 0px #000014;
  margin-right: 20px;
  width: 20px;
  height: 20px;
  vertical-align: middle;
}

.day-choice-button {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3c78b4;
  font-family: "Montserrat", sans-serif;
  box-shadow: 0px 6px 24px 0px #000014;
  cursor: pointer;
  border: none;
  height: 100%;
  color: #000014;
}

.day-choice-button:active,
.day-choice-button.active {
  background: #000014;
  color: white;
  box-shadow: 0px 14px 36px -18px #3c78b4;
}

.dropdown-button {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #183153;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  border: none;
  color: #3c78a0 !important;
}

.icon-space {
  margin-right: 0.5em;
}

/*MOVIE INFO BOX CSS*/

.home-page-centre-lower-tabs {
  flex-direction: column;
  padding: 15px;
  width: 100%;
  margin-top: 20px;
  /*border: 1px solid white;*/
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  background-color: #000014;
}

.movie-info-row {
  display: grid;
  align-items: stretch;
  width: 100%;
  height: 250px;
  /*border: 2px solid #183153;*/
  border-radius: 10px;
  background-color: #001428;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 20px;
  /*box-shadow: 0px 6px 24px 0px #183153;*/
}

.movie-row-left-box {
  flex: 1;
  box-sizing: border-box;
  margin-right: 40%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 10px;
  height: 95%;
  margin-top: 5px;
  margin-left: 5px;
  /*border: 1px solid white;*/
  overflow: hidden;
}

.movie-image {
  width: 100%;
  height: 100%;
  background-size: cover;
  border-radius: 10px;
  overflow: hidden;
}

.movie-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.movie-row-right-box {
  flex: 1;
  box-sizing: border-box;
  margin-left: -40%;
  font-size: 20px;
  color: #333333;
  /*border: 1px solid white;*/
  border-radius: 10px;
  height: 95%;
  margin-top: 5px;
  margin-right: 5px;
  display: flex;
}

.movie-time-container {
  display: flex;
  flex: 0 0 30%;
  box-sizing: border-box;
  /*border: 1px solid white;*/
  border-radius: 20px;
}

.grid-wrapper {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
}

.movie-time-container .row {
  text-align: center;
  color: #FFFFFF;
  align-items: center;
  justify-content: center;
  /*border: 1px solid white;*/
  width: 90%;
  margin-left: 10px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 500;
  font-size: 26px;
}

.movie-info-container {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 500;
  font-size: 25px;
  display: flex;
  flex: 0 0 70%;
  box-sizing: border-box;
  /*border: 1px solid white;*/
  border-radius: 20px;
}

.movie-info-container .row {
  color: #FFFFFF;
  align-items: center;
  /*border: 1px solid white;*/
  margin-left: 10px;
  text-align: start;
  justify-content: start;
  height: 100%;
}

.info-grid-wrapper {
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
}

.info-column {
  flex: 1;
  display: flex;
  margin-right: 10px;
  border-radius: 20px;
}

.imdb-rate-row {
  display: flex;
  grid-template-columns: 1fr 1fr;
  color: #FFFFFF;
  align-items: center;
  /*border: 1px solid white;*/
  margin-left: 10px;
  text-align: start;
  justify-content: start;
  height: 100%;
  width: 100%;
}

.rate-col-1 {
  /*border: 1px solid white;*/
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: end;
}

.rate-col-1 img {
  height: 40%;
  width: 100%;
  object-fit: cover;
}

.rate-col-2 {
  /*border: 1px solid white;*/
  width: 100px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: start;
}

.trailer-button {
  background-color: #3c648c;
  border-radius: 5px;
  height: 50px;
  width: 200px !important;
  border: #3c648c solid 1px;
  color: #001428;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}

.trailer-button:hover {
  background-color: #4f7397;
}

.ticket-button {
  background-color: #7CFC00 !important;
  border-radius: 5px;
  height: 50px;
  width: 200px !important;
  border: #4CAF50 solid 1px;
  color: #000014;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}

.ticket-button:hover {
  background-color: #68d400 !important;
}

/*BACK TO TOP BUTTON CSS*/

.back-to-top-button {
  background-color: #3c648c !important;
  border-radius: 5px;
  height: 50px;
  width: 200px !important;
  border: #3c648c solid 1px;
  color: #000014;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 20px;
}

.back-to-top-button:hover {
  background-color: #4f7397 !important;
}
</style>
