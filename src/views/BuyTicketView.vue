<template>
  <div class="buy-ticket-background" id="ticket">
    <HomeHeader />

    <div class="buy-ticket-page-body">
      <div class="buy-ticket-page-left-nav"></div>
      <div class="buy-ticket-page-centre-nav">
        <div class="buy-ticket-box">
            <div class="cardWrap">
              <div class="card cardLeft">
                <h1>CGI <span>STREAM</span></h1>
                <div class="title">
                  <h2>{{ movieResponse.name }}</h2>
                  <span>FILM</span>
                </div>
                <div class="name">
                  <h2>{{ movieResponse.time }}</h2>
                  <span>ALGUS</span>
                </div>
                <div class="seat">
                  <h2>{{ movieResponse.language }}</h2>
                  <span>KEEL</span>
                </div>
              </div>
              <div class="card cardRight">
                <div class="ticket">
                  PILET
                </div>

                <div class="barcode"></div>
                <div class="number">
                  <button class="buy-ticket-button" >
                    <font-awesome-icon :icon="['fas', 'ticket']"/>
                    OSTA PILET
                  </button>
                  <div class="ticket-counter">
                    <button class="counter-button" @click="decrementCounter">-</button>
                    <span class="counter-number">{{ ticketCount }}</span>
                    <button class="counter-button" @click="incrementCounter">+</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="buy-ticket-page-right-nav"></div>
    </div>
    <InfoFooter />
  </div>
</template>

<script>
import HomeHeader from "@/components/HomeHeader";
import InfoFooter from "@/components/InfoFooter";

export default {
  name: 'BuyTicketView',

  components: { InfoFooter, HomeHeader },
  data() {
    return {
      movieId: this.$route.query.movieId,
      ticketCount: 1,
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
  methods: {
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
    incrementCounter() {
      this.ticketCount += 1;
    },
    decrementCounter() {
      if (this.ticketCount > 1) {
        this.ticketCount -= 1;
      }
    }
  },
  mounted() {
    console.log('MOVIE ID IN PROPS IS:', this.movieId);
    this.getMovieInformationByMovieId();
  },
}
</script>

<style>
.buy-ticket-background {
  width: 100%;
  min-height: 80vh;
  position: relative;
  background-color: #000014;
  background-position: center;
}

.buy-ticket-page-body {
  display: flex;
  overflow: hidden;
  min-height: 80vh;
  /*border: 1px solid white;*/
}

.buy-ticket-page-left-nav {
  margin-top: 125px;
  width: 10%;
  display: flex;
  height: 80vh;
  /*border: 1px solid white;*/
}

.buy-ticket-page-right-nav {
  margin-top: 125px;
  width: 10%;
  display: flex;
  height: 80vh;
  /*border: 1px solid white;*/
}

.buy-ticket-page-centre-nav {
  margin-top: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;
  /*border: 1px solid white;*/
}

.buy-ticket-box {
  text-align: center;
  justify-content: center;
  height: 100%;
  display: flex;
  padding: 10px;
  width: 100%;
}

.cardWrap {
  height: 500px;
  width: 100%;
  max-width: 900px;
  color: #fff;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
}
.card {
  border: 2px solid white !important;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  background: linear-gradient(to bottom, #3c78b4 0%, #000014 26%, white 26%, #3c78a0 90%);
  height: 11em;
  position: relative;
  padding: 1em;
  margin-top: 100px;
  box-sizing: border-box;
}
.cardLeft {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 60%;
}
.cardRight {
  width: 25%;
  border-left: 0.14em dashed #fff;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 1.1em;
  margin-top: 0;
}
h1 span {
  font-weight: normal;
}
.title,
.name,
.seat{
  text-transform: uppercase;
  font-weight: normal;
}
.title h2,
.name h2,
.seat h2 {
  font-size: 0.9em;
  color: #000014;
  margin: 0;
}
.title span,
.name span,
.seat span {
  font-size: 0.7em;
  color: #a2aeae;
}
.title {
  margin: 2em 0 0 0;
}
.name,
.seat {
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 500;
  font-size: 23px;
}
.seat {
  float: left;
}
.ticket{
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 500;
  font-size: 30px;
}
.number {
  text-align: center;
  text-transform: uppercase;
  margin-top: 1em;
}
.number h3 {
  color: #000014;
  margin: 0.9em 0 0 0;
  font-size: 2.5em;
}
.number span {
  display: block;
  color: #a2aeae;
}
.barcode {
  height: 3em;
  width: 0;
  margin: 5em 0 0 -5em;
  box-shadow: 1px 0 0 1px #000014, 5px 0 0 1px #000014, 10px 0 0 1px #000014, 11px 0 0 1px #000014,
  15px 0 0 1px #000014, 18px 0 0 1px #000014, 22px 0 0 1px #000014, 23px 0 0 1px #000014, 26px 0 0 1px #000014,
  30px 0 0 1px #000014, 35px 0 0 1px #000014, 37px 0 0 1px #000014, 41px 0 0 1px #000014, 44px 0 0 1px #000014,
  47px 0 0 1px #000014, 51px 0 0 1px #000014, 56px 0 0 1px #000014, 59px 0 0 1px #000014, 64px 0 0 1px #000014,
  68px 0 0 1px #000014, 72px 0 0 1px #000014, 74px 0 0 1px #000014, 77px 0 0 1px #000014, 81px 0 0 1px #000014,
  1px 0 0 1px #000014, 5px 0 0 1px #000014, 10px 0 0 1px #000014, 11px 0 0 1px #000014,
  15px 0 0 1px #000014, 18px 0 0 1px #000014, 22px 0 0 1px #000014, 23px 0 0 1px #000014, 26px 0 0 1px #000014,
  30px 0 0 1px #000014, 35px 0 0 1px #000014, 37px 0 0 1px #000014, 41px 0 0 1px #000014, 44px 0 0 1px #000014,
  47px 0 0 1px #000014, 51px 0 0 1px #000014, 56px 0 0 1px #000014, 59px 0 0 1px #000014, 64px 0 0 1px #000014,
  68px 0 0 1px #000014, 72px 0 0 1px #000014, 74px 0 0 1px #000014, 77px 0 0 1px #000014, 81px 0 0 1px #000014;
}
.buy-ticket-button{
  margin: 3em 0 0 0em;
  background-color: #3c78b4;
  border-radius: 5px;
  height: 50px;
  width: 100px !important;
  border: #000014 solid 2px;
  color: #000014;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 400;
}
.buy-ticket-button:hover{
  background-color: #000014;
  color: #FFFFFF;
  box-shadow: 0px 6px 24px 0px #000014;
}
.ticket-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
}

.counter-button {
  cursor: pointer;
  background-color: #3c78b4;
  color: #fff;
  border: 2px solid #000014;
  padding: 0.5em 1em;
  font-size: 1em;
}

.counter-number {
  margin: 0 0.5em;
  font-size: 1.2em;
  color: #000014 !important;
}
</style>
