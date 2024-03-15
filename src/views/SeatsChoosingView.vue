<template>
  <div class="seats-choosing-background" id="seats">
    <HomeHeader/>
    <div class="seats-choosing-page-body">
      <div class="seats-choosing-page-left-nav"></div>
      <div class="seats-choosing-page-centre-nav">
        <div class="seats-choosing-box">
          <div class="seats-choosing-box-left-ticket-info-column">
            <div class="ticket-info">
              <div class="ticket-info-image"><img :src="movieResponse.imageUrl"></div>
              <div class="ticket-movie-name">MOVIE NAME: {{ movieResponse.name }}</div>
              <div class="ticket-movie-genre">GENRE: {{ movieResponse.genre }}</div>
              <div class="ticket-movie-language">LANGUAGE: {{ movieResponse.language }}</div>
              <div class="ticket-movie-start-time">START TIME: {{ movieResponse.time }}</div>
              <div class="ticket-movie-tickets-chosen">TICKETS CHOSEN: {{ ticketCount }}</div>
            </div>
          </div>
          <div class="seats-choosing-box-right-booking-column">
            <div class="seat-container">
              <div v-for="row in reversedRows" :key="row" class="seat-row">
                <div class="row-number">{{ row }}</div>
                <div @click="selectSeats"
                     v-for="column in 12"
                     :key="column"
                     :id="`seat-${row}-${column}`"
                     class="seat-box">
                  {{ column }}
                </div>
              </div>
            </div>
            <div class="screen"></div>
          </div>
        </div>
      </div>
      <div class="seats-choosing-page-right-nav"></div>
    </div>
    <InfoFooter/>
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader";
import InfoFooter from "@/components/InfoFooter";

export default {
  name: 'SeatsChoosingView',
  components: {HomeHeader, InfoFooter},
  data() {
    return {
      movieId: this.$route.query.movieId,
      ticketCount: this.$route.query.ticketCount,
      movieResponse: {
        id: 0,
        name: '',
        time: 0,
        genre: '',
        ageRestriction: '',
        language: '',
        weekDay: '',
        imageUrl: ''
      },
    }
  },
  computed: {
    reversedRows() {
      return Array.from({length: 9}, (_, index) => 9 - index);
    },
  },
  methods: {
    recommendedSeats() {
      const rows = 9;
      const columns = 12;
      const ticketCount = this.$route.query.ticketCount;
      const recommendedCount = Math.min(ticketCount, 4);
      const centralAreaWidth = Math.min(columns, 4);
      const startColumn = Math.floor((columns - centralAreaWidth) / 2) + 1;
      const startRow = Math.ceil(rows / 2);
      const isConsecutiveSeatsAvailable = (rowId, startColumn, count) => {
        for (let j = 0; j < count; j++) {
          if (this.isSeatTaken(rowId, startColumn + j)) {
            return false;
          }
        }
        return true;
      };
      for (let rowOffset = 0; rowOffset <= Math.floor(rows / 2); rowOffset++) {
        const rowId = startRow + rowOffset;

        if (isConsecutiveSeatsAvailable(rowId, startColumn, recommendedCount)) {
          for (let j = 0; j < recommendedCount; j++) {
            this.changeColorToRecommended(rowId, startColumn + j);
          }
          return;
        }
        for (let direction of [-1, 1]) {
          let currentRowId = rowId;
          let currentStartColumn = startColumn;
          while (
              currentRowId >= 1 &&
              currentRowId <= rows &&
              isConsecutiveSeatsAvailable(currentRowId, currentStartColumn, recommendedCount)
              ) {
            for (let j = 0; j < recommendedCount; j++) {
              this.changeColorToRecommended(currentRowId, currentStartColumn + j);
            }
            return;
          }

          currentRowId = rowId;
          currentStartColumn = startColumn + direction;
          if (
              currentRowId >= 1 &&
              currentRowId <= rows &&
              isConsecutiveSeatsAvailable(currentRowId, currentStartColumn, recommendedCount)
          ) {
            for (let j = 0; j < recommendedCount; j++) {
              this.changeColorToRecommended(currentRowId, currentStartColumn + j);
            }
            return;
          }
        }
      }
    },
    isSeatTaken(rowId, columnId) {
      const seatId = `seat-${rowId}-${columnId}`;
      const seatElement = document.getElementById(seatId);

      return seatElement && seatElement.classList.contains("seat-box-taken");
    },
    randomTakenSeats() {
      const rows = 9;
      const columns = 12;
      const minSeatsTaken = 5;
      const maxSeatsTaken = 20;

      const seatsTaken = Math.floor(Math.random() * (maxSeatsTaken - minSeatsTaken + 1)) + minSeatsTaken;

      for (let i = 0; i < seatsTaken; i++) {
        const rowId = Math.floor(Math.random() * rows) + 1;
        const columnId = Math.floor(Math.random() * columns) + 1;
        this.changeColorToTaken(rowId, columnId);
      }
    },
    changeColorToRecommended(rowId, columnId) {
      const seatId = `seat-${rowId}-${columnId}`;
      const seatElement = document.getElementById(seatId);

      if (seatElement) {
        seatElement.classList.remove("seat-box");
        seatElement.classList.add("seat-box-recommended");
      }
    },
    changeColorToTaken(rowId, columnId) {
      document.getElementById(`seat-${rowId}-${columnId}`).classList.remove("seat-box")
      document.getElementById(`seat-${rowId}-${columnId}`).classList.add("seat-box-taken")
    },
    selectSeats(event) {
      const id = event.target.id;
      document.getElementById(id).classList.toggle("disabled")
      console.log(document.getElementById(id).classList)
    },
    getMovieInformationByMovieId() {
      this.$http.get(`/movie/info`, {
            params: {
              movieId: this.movieId,
            }
          }
      ).then(response => {
        this.movieResponse = response.data;
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
  },
  mounted() {
    console.log('MOVIE ID IN PROPS IS:', this.movieId);
    this.getMovieInformationByMovieId();
    this.randomTakenSeats();
    this.recommendedSeats();

  },
}
</script>

<style>
.seats-choosing-background {
  width: 100%;
  min-height: 100vh;
  position: relative;
  background-color: #000014;
  background-position: center;
}

.seats-choosing-page-body {
  display: flex;
  overflow: hidden;
  min-height: 80vh;
  /*border: 1px solid white;*/
}

.seats-choosing-page-left-nav {
  margin-top: 125px;
  width: 10%;
  display: flex;
  height: 80vh;
  /*border: 1px solid white;*/
}

.seats-choosing-page-right-nav {
  margin-top: 125px;
  width: 10%;
  display: flex;
  height: 80vh;
  /*border: 1px solid white;*/
}

.seats-choosing-page-centre-nav {
  margin-top: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  /*border: 1px solid white;*/
}

.seats-choosing-box {
  /*border: 1px solid greenyellow;*/
  text-align: center;
  justify-content: center;
  height: 100%;
  display: flex;
  padding: 10px;
  width: 100%;
}

.seats-choosing-box-left-ticket-info-column {
  width: 20%;
  padding: 5px;
  /*border: 1px solid white;*/
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.seats-choosing-box-right-booking-column {
  width: 75%;
  padding: 5px;
  /*border: 1px solid orangered;*/
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
}


.ticket-info {
  flex-direction: column;
  box-shadow: 0 6px 24px 0 #3c78b4;
  height: 500px;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 90%;
  background-color: #001428;
  padding: 10px;
  border-radius: 10px;
}

.ticket-info-image {
  /*border: 1px solid white;*/
  display: flex;
  height: 30%;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
}

.ticket-info-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.ticket-movie-name,
.ticket-movie-genre,
.ticket-movie-language,
.ticket-movie-start-time {
  border-radius: 5px;
  /*border: 1px solid white;*/
  display: flex;
  height: 50px;
  width: 100%;
  margin-top: 5px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 500;
  color: #FFFFFF;
  text-align: center;
  align-items: center;
}

.ticket-movie-tickets-chosen {
  border-radius: 5px;
  /*border: 1px solid white;*/
  display: flex;
  height: 50px;
  margin-top: 25%;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 500;
  color: #FFFFFF;
  text-align: center;
  align-items: center;
}


.seat-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  /*border: 1px solid greenyellow;*/
  width: 80%;
}

.seat-row {
  display: flex;
  width: 100%;
  justify-content: center;
}

.seat-box {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 500;
  font-size: 25px;
  color: #000014;
  width: 50px;
  height: 70px;
  background-color: #009fff;
  border-radius: 39% 39% 41% 42% / 26% 26% 68% 69%;
  margin: 5px;
  box-shadow: 1px -20px 16px 8px rgba(0, 0, 0, 0.89);
  -webkit-box-shadow: 1px -20px 16px 8px rgba(0, 0, 0, 0.89);
  -moz-box-shadow: 1px -20px 16px 8px rgba(0, 0, 0, 0.89);
  cursor: pointer;
}

.seat-box-taken {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 500;
  font-size: 25px;
  color: #000014;
  width: 50px;
  height: 70px;
  background-image: repeating-linear-gradient(45deg, #ac0e28 0, #ac0e28 4.5px, transparent 0, transparent 50%);
  background-size: 10px 10px;
  background-color: #ff0000;
  border-radius: 39% 39% 41% 42% / 26% 26% 68% 69%;
  margin: 5px;
  box-shadow: 1px -20px 16px 8px rgba(0, 0, 0, 0.89);
  -webkit-box-shadow: 1px -20px 16px 8px rgba(0, 0, 0, 0.89);
  -moz-box-shadow: 1px -20px 16px 8px rgba(0, 0, 0, 0.89);
  pointer-events: none
}

.seat-box-recommended {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 500;
  font-size: 25px;
  color: #000014;
  width: 50px;
  height: 70px;
  background-image: repeating-linear-gradient(45deg, #e8af30 0, #e8af30 4.5px, transparent 0, transparent 50%);
  background-size: 10px 10px;
  background-color: #ffd200;
  border-radius: 39% 39% 41% 42% / 26% 26% 68% 69%;
  margin: 5px;
  box-shadow: 1px -20px 16px 8px rgba(0, 0, 0, 0.89);
  -webkit-box-shadow: 1px -20px 16px 8px rgba(0, 0, 0, 0.89);
  -moz-box-shadow: 1px -20px 16px 8px rgba(0, 0, 0, 0.89);
  cursor: pointer;
}

.row-number {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 500;
  font-size: 25px;
  color: #FFFFFF;
  margin-right: 20px;
  width: 30px;
}

.screen {
  display: flex;
  width: 80%;
  height: 15px;
  margin-top: 50px;
  background-color: rgba(255, 255, 255, 0.78);
  border-radius: 3px;
  /*clip-path: polygon(0% 0%, 100% 0%, 94.2% 100%, 6.6% 100%);*/
  box-shadow: 1px -8px 16px 8px rgba(143, 141, 141, 0.89);
  -webkit-box-shadow: 1px -8px 16px 8px rgba(143, 141, 141, 0.89);
  -moz-box-shadow: 1px -8px 16px 8px rgba(143, 141, 141, 0.89);
}
</style>

