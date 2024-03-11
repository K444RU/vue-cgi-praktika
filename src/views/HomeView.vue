<template>
  <div class="home-page-background">
    <!--HEADER-->
    <HomeHeader @recommendMovies="recommendMoviesBasedOnHistory" :isUserLoggedIn="isUserLoggedIn" />
    <!--BODY-->
    <div class="home-page-body">
      <div class="home-page-left-nav"></div>
      <!--NEW UPPER BUTTONS DAY PICKERS-->
      <div class="home-page-centre-nav">
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
            <!--NEW UPPER BUTTONS FILTER PICKERS-->
            <div class="filter-picker-choice">
              <div class="dropdown">
                <button class="dropdown-button dropdown-toggle" type="button" id="dropdownMenuButton"
                        data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <font-awesome-icon :icon="['fas', 'film']"/>  Zanr
                </button>
                <ul class="dropdown-menu">
                  <li v-for="genre in genresResponse" :key="genre">
                    <label class="checkbox">
                      <input v-model="selectedGenres[genre]"
                             @change="filterMoviesByGenre" type="checkbox">{{ genre }}
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div class="filter-picker-choice">
              <div class="dropdown">
                <button class="dropdown-button dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                  <font-awesome-icon :icon="['fas', 'hand']"/>
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
                  <font-awesome-icon :icon="['fas', 'clock']"/>
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
                  <font-awesome-icon :icon="['fas', 'volume-high']"/>
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
          </ul>
        </div>
        <!--MOVIE INFO BOX-->
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
                      <div class="row">Filmi algus: {{ movie.time }}</div>
                      <div class="row">CGI Stream</div>
                      <div class="row">Keel: {{ movie.language }}</div>
                    </div>
                  </div>

                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Filmi nimi: {{ movie.name }}</div>
                        <div class="row">Vanusepiirang: {{ movie.ageRestriction }} • Zanr: {{ movie.genre }}</div>
                        <div class="row">
                          <button class="trailer-button">
                            <font-awesome-icon :icon="['fas', 'video']"/>
                            Vaata Treilerit
                          </button>
                        </div>
                      </div>
                    </div>
                    <div  class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row">
                          <button class="ticket-button" @click="redirectToBuyTicket(movie.id)">
                            <font-awesome-icon :icon="['fas', 'ticket']"/>
                            OSTA PILET
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
        <!--MOVIE INFO BOX-->
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
  components: { HomeHeader, InfoFooter },
  data() {
    return {
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
      genresResponse:[],
      moviesByDay: reactive({}),
      isUserLoggedIn: false,
    };
  },
  mounted() {
    this.getAllMovieWeekDays();
    this.getAllMovieStartTimes()
    this.getAllMovieLanguages()
    this.getAllMovieAgeRestrictions()
    this.getAllMovieGenres()
  },
  methods: {
    redirectToBuyTicket(movieId) {
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
    filterMoviesByGenre() {
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
      if (selectedLanguages.length === 0){
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
    selectDay(day){
      this.activeDay = day;
      this.getAllMovieWeekDays();
    },
    isActiveDay(day){
      return this.activeDay === day;
    },
    getDayName(day){
      const dayNames = {
        MONDAY: 'Esmaspaev',
        TUESDAY: 'Teisipaev',
        WEDNESDAY: 'Kolmapaev',
        THURSDAY: 'Neljapaev',
        FRIDAY: 'Reede',
        SATURDAY: 'Laupaev',
        SUNDAY: 'Puhapaev',
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

/*HEADER CSS*/

.home-page-background {
  width: 100%;
  min-height: 150vh;
  position: relative;
  background-size: cover;
  background-color: #000014;
  background-position: center;
}

/*BODY CSS*/
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
  background-color: #183153;
  box-shadow: 0px 6px 24px 0px #000014;
  cursor: pointer;
  border: none;
}
.filter-picker-choice .dropdown-menu {
  width: 250px;
  height: auto;
  background-color: #3c78b4;
  border: #3c78a0 2px solid;
  margin-left: 50px;
  box-shadow: 0px 6px 24px 0px #000014;
  font-family: "Montserrat", sans-serif;
}

.filter-picker-choice .dropdown-button {
  background: #183153;
  font-family: "Montserrat", sans-serif;
  cursor: pointer;
  border: none;
  color: #3c78b4;
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
  box-shadow: 0px 6px 24px 0px #183153;

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
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  margin-bottom: 20px;
  /*box-shadow: 0px 6px 24px 0px #183153;*/

}

/*.movie-info-row:hover{*/
/*  background-color: #001428;*/
/*  cursor: pointer;*/
/*}*/

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

}

.movie-row-right-box {
  flex: 1;
  box-sizing: border-box;
  margin-left: -40%;
  font-size: 20px;
  color: #FFFFFF;
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
  color: white;
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
  color: white;
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

.trailer-button{
  background-color: #3c78b4;
  border-radius: 5px;
  height: 50px;
  width: 210px !important;
  border: #3c78b4 solid 1px;
  color: #001428;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}

.ticket-button{
  background-color: #3c78b4;
  border-radius: 5px;
  height: 50px;
  width: 200px !important;
  border: #3c78b4 solid 1px;
  color: #000014;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}
</style>
