<template>
  <div class="home-page-background">
    <!--HEADER-->
    <HomeHeader/>

    <!--BODY-->
    <div class="home-page-body">
      <div class="home-page-left-nav">
      </div>

      <!--NEW UPPER BUTTONS DAY PICKERS-->
      <div class="home-page-centre-nav">
        <div class="home-page-centre-upper-tabs2">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <div class="day-picker_choice">
              <li class="nav-item" role="presentation">
                <button class="day-choice-button active" id="pills-monday-tab"
                        data-bs-toggle="pill" data-bs-target="#pills-monday"
                        type="button" role="tab" aria-controls="pills-monday"
                        aria-selected="true"
                >
                  <span>Esmaspaev</span>
                </button>
              </li>
            </div>

            <div class="day-picker_choice">
              <li class="nav-item" role="presentation">
                <button class="day-choice-button" id="pills-tuesday-tab"
                        data-bs-toggle="pill" data-bs-target="#pills-tuesday"
                        type="button" role="tab" aria-controls="pills-tuesday"
                        aria-selected="false">Teisipaev.
                </button>
              </li>
            </div>

            <div class="day-picker_choice">
              <li class="nav-item" role="presentation">
                <button class="day-choice-button" id="pills-wednesday-tab"
                        data-bs-toggle="pill" data-bs-target="#pills-wednesday"
                        type="button" role="tab" aria-controls="pills-wednesday"
                        aria-selected="false">Kolmapaev.
                </button>
              </li>
            </div>

            <div class="day-picker_choice">
              <li class="nav-item" role="presentation">
                <button class="day-choice-button" id="pills-thursday-tab"
                        data-bs-toggle="pill" data-bs-target="#pills-thursday"
                        type="button" role="tab" aria-controls="pills-thursday"
                        aria-selected="false">Neljapaev.
                </button>
              </li>
            </div>

            <div class="day-picker_choice">
              <li class="nav-item" role="presentation">
                <button class="day-choice-button" id="pills-friday-tab"
                        data-bs-toggle="pill" data-bs-target="#pills-friday"
                        type="button" role="tab" aria-controls="pills-friday"
                        aria-selected="false">Reede.
                </button>
              </li>
            </div>

            <div class="day-picker_choice">
              <li class="nav-item" role="presentation">
                <button class="day-choice-button" id="pills-saturday-tab"
                        data-bs-toggle="pill" data-bs-target="#pills-saturday"
                        type="button" role="tab" aria-controls="pills-saturday"
                        aria-selected="false">Laupaev.
                </button>
              </li>
            </div>

            <div class="day-picker_choice">
              <li class="nav-item" role="presentation">
                <button class="day-choice-button" id="pills-sunday-tab"
                        data-bs-toggle="pill" data-bs-target="#pills-sunday"
                        type="button" role="tab" aria-controls="pills-sunday"
                        aria-selected="false">Puhapaev.
                </button>
              </li>
            </div>

            <div class="filter-picker-choice">
              <div class=" dropdown">
                <button class="dropdown-button dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <font-awesome-icon :icon="['fas', 'film']"/>  Zanr
                </button>
                <ul class="dropdown-menu">
                  <li><label class="checkbox"><input type="checkbox">Two</label></li>
                  <li><label class="checkbox"><input type="checkbox">Two</label></li>
                  <li><label class="checkbox"><input type="checkbox">Two</label></li>
                  <li><label class="checkbox"><input type="checkbox">Two</label></li>
                  <li><label class="checkbox"><input type="checkbox">Two</label></li>
                  <li><label class="checkbox"><input type="checkbox">Two</label></li>
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
                  <li><label class="checkbox"><input type="checkbox">Two</label></li>
                  <li><label class="checkbox"><input type="checkbox">Two</label></li>
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
                  <li><label class="checkbox"><input type="checkbox">Two</label></li>
                  <li><label class="checkbox"><input type="checkbox">Two</label></li>
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
                  <li><label class="checkbox"><input type="checkbox">Two</label></li>
                  <li><label class="checkbox"><input type="checkbox">Two</label></li>
                </ul>
              </div>
            </div>
          </ul>
        </div>
        <!--NEW UPPER BUTTONS DAY PICKERS-->


        <div class="home-page-centre-lower-tabs">
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-monday"
                 role="tabpanel" aria-labelledby="pills-monday-tab" tabindex="0">
              <!--MOVIE INFO BOX-->
              <div class="movie-info-row">
                <div class="movie-row-left-box">
                  <img class="movie-image" src="@/assets/ducks.jpeg" alt="Logo">
                </div>
                <div class="movie-row-right-box">
                  <div class="movie-time-container">
                    <div class="grid-wrapper">
                      <div class="row">Filmi algus</div>
                      <div class="row">CGI Stream</div>
                      <div class="row">
                        Keel
                      </div>
                    </div>
                  </div>

                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Filmi nimi</div>
                        <div class="row">Vanusepiirang • Zanr</div>
                        <div class="row">
                          <button class="trailer-button">
                            <font-awesome-icon :icon="['fas', 'video']"/>
                            Vaata Treilerit
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row">
                          <button class="ticket-button" >
                            <font-awesome-icon :icon="['fas', 'ticket']"/>
                            OSTA PILET
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--MOVIE INFO BOX-->

              <div class="movie-info-row">
                <div class="movie-row-left-box">
                  <img class="movie-image" src="@/assets/dune.jpg" alt="Logo">
                </div>
                <div class="movie-row-right-box">
                  <div class="movie-time-container">
                    <div class="grid-wrapper">
                      <div class="row">Filmi algus</div>
                      <div class="row">CGI Stream</div>
                      <div class="row">
                        Keel
                      </div>
                    </div>
                  </div>

                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Filmi nimi</div>
                        <div class="row">Vanusepiirang • Zanr</div>
                        <div class="row">
                          <button class="trailer-button">
                            <font-awesome-icon :icon="['fas', 'video']"/>
                            Vaata Treilerit
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row">
                          <button class="ticket-button" >
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
            <div class="tab-pane fade" id="pills-tuesday"
                 role="tabpanel" aria-labelledby="pills-tuesday-tab" tabindex="0">
              <div class="movie-info-row">
                <div class="movie-row-left-box">
                  <img class="movie-image" src="@/assets/cgi-stream-high-resolution-logo-transparent.png" alt="Logo">
                </div>
                <div class="movie-row-right-box">
                  <div class="movie-time-container">
                    <div class="grid-wrapper">
                      <div class="row">Filmi algus</div>
                      <div class="row">CGI Stream</div>
                      <div class="row">
                        Keel
                      </div>
                    </div>
                  </div>

                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Filmi nimi</div>
                        <div class="row">Vanusepiirang • Zanr</div>
                        <div class="row">
                          <button class="trailer-button">
                            <font-awesome-icon :icon="['fas', 'video']"/>
                            Vaata Treilerit
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row">
                          <button class="ticket-button" >
                            <font-awesome-icon :icon="['fas', 'ticket']"/>
                            OSTA PILET
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--MOVIE INFO BOX-->
            </div>
            <div class="tab-pane fade" id="pills-wednesday"
                 role="tabpanel" aria-labelledby="pills-wednesday-tab" tabindex="0">
              <div class="movie-info-row">
                <div class="movie-row-left-box">
                  <img class="movie-image" src="@/assets/cgi-stream-high-resolution-logo-transparent.png" alt="Logo">
                </div>
                <div class="movie-row-right-box">
                  <div class="movie-time-container">
                    <div class="grid-wrapper">
                      <div class="row">Filmi algus</div>
                      <div class="row">CGI Stream</div>
                      <div class="row">
                        Keel
                      </div>
                    </div>
                  </div>

                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Filmi nimi</div>
                        <div class="row">Vanusepiirang • Zanr</div>
                        <div class="row">
                          <button class="trailer-button">
                            <font-awesome-icon :icon="['fas', 'video']"/>
                            Vaata Treilerit
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row">
                          <button class="ticket-button" >
                            <font-awesome-icon :icon="['fas', 'ticket']"/>
                            OSTA PILET
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--MOVIE INFO BOX-->
            </div>
            <div class="tab-pane fade" id="pills-thursday"
                 role="tabpanel" aria-labelledby="pills-thursday-tab" tabindex="0">
              <div class="movie-info-row">
                <div class="movie-row-left-box">
                  <img class="movie-image" src="@/assets/cgi-stream-high-resolution-logo-transparent.png" alt="Logo">
                </div>
                <div class="movie-row-right-box">
                  <div class="movie-time-container">
                    <div class="grid-wrapper">
                      <div class="row">Filmi algus</div>
                      <div class="row">CGI Stream</div>
                      <div class="row">
                        Keel
                      </div>
                    </div>
                  </div>

                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Filmi nimi</div>
                        <div class="row">Vanusepiirang • Zanr</div>
                        <div class="row">
                          <button class="trailer-button">
                            <font-awesome-icon :icon="['fas', 'video']"/>
                            Vaata Treilerit
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row">
                          <button class="ticket-button" >
                            <font-awesome-icon :icon="['fas', 'ticket']"/>
                            OSTA PILET
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--MOVIE INFO BOX-->
            </div>
            <div class="tab-pane fade" id="pills-friday"
                 role="tabpanel" aria-labelledby="pills-friday-tab" tabindex="0">
              <div class="movie-info-row">
                <div class="movie-row-left-box">
                  <img class="movie-image" src="@/assets/cgi-stream-high-resolution-logo-transparent.png" alt="Logo">
                </div>
                <div class="movie-row-right-box">
                  <div class="movie-time-container">
                    <div class="grid-wrapper">
                      <div class="row">Filmi algus</div>
                      <div class="row">CGI Stream</div>
                      <div class="row">
                        Keel
                      </div>
                    </div>
                  </div>

                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Filmi nimi</div>
                        <div class="row">Vanusepiirang • Zanr</div>
                        <div class="row">
                          <button class="trailer-button">
                            <font-awesome-icon :icon="['fas', 'video']"/>
                            Vaata Treilerit
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row">
                          <button class="ticket-button" >
                            <font-awesome-icon :icon="['fas', 'ticket']"/>
                            OSTA PILET
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--MOVIE INFO BOX-->
            </div>
            <div class="tab-pane fade" id="pills-saturday"
                 role="tabpanel" aria-labelledby="pills-saturday-tab" tabindex="0">
              <div class="movie-info-row">
                <div class="movie-row-left-box">
                  <img class="movie-image" src="@/assets/cgi-stream-high-resolution-logo-transparent.png" alt="Logo">
                </div>
                <div class="movie-row-right-box">
                  <div class="movie-time-container">
                    <div class="grid-wrapper">
                      <div class="row">Filmi algus</div>
                      <div class="row">CGI Stream</div>
                      <div class="row">
                        Keel
                      </div>
                    </div>
                  </div>

                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Filmi nimi</div>
                        <div class="row">Vanusepiirang • Zanr</div>
                        <div class="row">
                          <button class="trailer-button">
                            <font-awesome-icon :icon="['fas', 'video']"/>
                            Vaata Treilerit
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row">
                          <button class="ticket-button" >
                            <font-awesome-icon :icon="['fas', 'ticket']"/>
                            OSTA PILET
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--MOVIE INFO BOX-->
            </div>
            <div class="tab-pane fade" id="pills-sunday"
                 role="tabpanel" aria-labelledby="pills-sunday-tab" tabindex="0">
              <div class="movie-info-row">
                <div class="movie-row-left-box">
                  <img class="movie-image" src="@/assets/cgi-stream-high-resolution-logo-transparent.png" alt="Logo">
                </div>
                <div class="movie-row-right-box">
                  <div class="movie-time-container">
                    <div class="grid-wrapper">
                      <div class="row">Filmi algus</div>
                      <div class="row">CGI Stream</div>
                      <div class="row">
                        Keel
                      </div>
                    </div>
                  </div>

                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Filmi nimi</div>
                        <div class="row">Vanusepiirang • Zanr</div>
                        <div class="row">
                          <button class="trailer-button">
                            <font-awesome-icon :icon="['fas', 'video']"/>
                            Vaata Treilerit
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row"></div>
                        <div class="row"></div>
                        <div class="row">
                          <button class="ticket-button" >
                            <font-awesome-icon :icon="['fas', 'ticket']"/>
                            OSTA PILET
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--MOVIE INFO BOX-->
            </div>
          </div>
        </div>

      </div>
      <div class="home-page-right-nav">
      </div>
    </div>
    <!--FOOTER-->
    <InfoFooter/>
  </div>
</template>

<script>
import InfoFooter from "@/components/InfoFooter";
import HomeHeader from "@/components/HomeHeader";

export default {
  name: 'HomeView',
  components: {HomeHeader, InfoFooter},
  data() {
    return {
      isScrolling: false
    }
  },
  methods: {

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
  width: 200px;
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
.day-choice-button.active { /* For Bootstrap's 'active' class */
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
