<template>
  <div class="home-page-background">
    <!--HEADER-->
    <HomeHeader/>

    <!--BODY-->
    <div class="home-page-body">
      <div class="home-page-left-nav">
        GG
      </div>
      <div class="home-page-centre-nav">
        <div class="home-page-centre-upper-tabs">
          <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" id="pills-monday-tab"
                      data-bs-toggle="pill" data-bs-target="#pills-monday"
                      type="button" role="tab" aria-controls="pills-monday"
                      aria-selected="true">Esmaspäev
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-tuesday-tab"
                      data-bs-toggle="pill" data-bs-target="#pills-tuesday"
                      type="button" role="tab" aria-controls="pills-tuesday"
                      aria-selected="false">Teisipäev
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-wednesday-tab"
                      data-bs-toggle="pill" data-bs-target="#pills-wednesday"
                      type="button" role="tab" aria-controls="pills-wednesday"
                      aria-selected="false">Kolmapäev
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-thursday-tab"
                      data-bs-toggle="pill" data-bs-target="#pills-thursday"
                      type="button" role="tab" aria-controls="pills-thursday"
                      aria-selected="false">Neljapäev
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-friday-tab"
                      data-bs-toggle="pill" data-bs-target="#pills-friday"
                      type="button" role="tab" aria-controls="pills-friday"
                      aria-selected="false">Reede
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-saturday-tab"
                      data-bs-toggle="pill" data-bs-target="#pills-saturday"
                      type="button" role="tab" aria-controls="pills-saturday"
                      aria-selected="false">Laupäev
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-sunday-tab"
                      data-bs-toggle="pill" data-bs-target="#pills-sunday"
                      type="button" role="tab" aria-controls="pills-sunday"
                      aria-selected="false">Pühapäev
              </button>
            </li>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon :icon="['fas', 'film']" /> Zanrid
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon :icon="['fas', 'hand']" /> Vanusepiirang
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon :icon="['fas', 'clock']" /> Algus alates
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <font-awesome-icon :icon="['fas', 'volume-high']" /> Keel
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>

          </ul>


        </div>
        <div class="home-page-centre-lower-tabs">
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-monday"
                 role="tabpanel" aria-labelledby="pills-monday-tab" tabindex="0">
              <!--MOVIE INFO BOX-->
              <div class="movie-info-row">
                <div class="movie-row-left-box">
                  <img class="movie-image" src="@/assets/cgi-stream-high-resolution-logo-transparent.png" alt="Logo">
                </div>
                <div class="movie-row-right-box">
                  <div class="movie-time-container">
                    <div class="grid-wrapper">
                      <div class="row">Row 1 Filmi Algus</div>
                      <div class="row">Row 2 CGI Stream</div>
                      <div class="row"><button style="width: 80%"><font-awesome-icon :icon="['fas', 'video']" /> Vaata Treilerit</button></div>
                    </div>
                  </div>

                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Filmi Nimi</div>
                        <div class="row"></div>
                        <div class="row">Keel • Vanusepiirang • Zanr</div>
                      </div>
                    </div>

                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Movie name</div>
                        <div class="row"></div>
                        <div class="row"><button style="width: 50%"><font-awesome-icon :icon="['fas', 'ticket']" /> OSTA PILET</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <div class="movie-info-row">
                <div class="movie-row-left-box">

                </div>
                <div class="movie-row-right-box">

                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-tuesday"
                 role="tabpanel" aria-labelledby="pills-tuesday-tab" tabindex="0">TEISIPAEV
              <div class="movie-info-row">
                <div class="movie-row-left-box">
                  <img class="movie-image" src="@/assets/cgi-stream-high-resolution-logo-transparent.png" alt="Logo">
                </div>
                <div class="movie-row-right-box">
                  <div class="movie-time-container">
                    <div class="grid-wrapper">
                      <div class="row">Row 1 Filmi Algus</div>
                      <div class="row">Row 2 CGI Stream</div>
                      <div class="row"><button style="width: 80%"><font-awesome-icon :icon="['fas', 'video']" /> Vaata Treilerit</button></div>
                    </div>
                  </div>

                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Filmi Nimi</div>
                        <div class="row"></div>
                        <div class="row">Keel • Vanusepiirang • Zanr</div>
                      </div>
                    </div>

                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Movie name</div>
                        <div class="row"></div>
                        <div class="row"><button style="width: 50%"><font-awesome-icon :icon="['fas', 'ticket']" /> OSTA PILET</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-wednesday"
                 role="tabpanel" aria-labelledby="pills-wednesday-tab" tabindex="0">KOLMAPAEV
              <div class="movie-info-row">
                <div class="movie-row-left-box">
                  <img class="movie-image" src="@/assets/cgi-stream-high-resolution-logo-transparent.png" alt="Logo">
                </div>
                <div class="movie-row-right-box">
                  <div class="movie-time-container">
                    <div class="grid-wrapper">
                      <div class="row">Row 1 Filmi Algus</div>
                      <div class="row">Row 2 CGI Stream</div>
                      <div class="row"><button style="width: 80%"><font-awesome-icon :icon="['fas', 'video']" /> Vaata Treilerit</button></div>
                    </div>
                  </div>

                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Filmi Nimi</div>
                        <div class="row"></div>
                        <div class="row">Keel • Vanusepiirang • Zanr</div>
                      </div>
                    </div>

                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Movie name</div>
                        <div class="row"></div>
                        <div class="row"><button style="width: 50%"><font-awesome-icon :icon="['fas', 'ticket']" /> OSTA PILET</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-thursday"
                 role="tabpanel" aria-labelledby="pills-thursday-tab" tabindex="0">NELJAPAEV
              <div class="movie-info-row">
                <div class="movie-row-left-box">
                  <img class="movie-image" src="@/assets/cgi-stream-high-resolution-logo-transparent.png" alt="Logo">
                </div>
                <div class="movie-row-right-box">
                  <div class="movie-time-container">
                    <div class="grid-wrapper">
                      <div class="row">Row 1 Filmi Algus</div>
                      <div class="row">Row 2 CGI Stream</div>
                      <div class="row"><button style="width: 80%"><font-awesome-icon :icon="['fas', 'video']" /> Vaata Treilerit</button></div>
                    </div>
                  </div>

                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Filmi Nimi</div>
                        <div class="row"></div>
                        <div class="row">Keel • Vanusepiirang • Zanr</div>
                      </div>
                    </div>

                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Movie name</div>
                        <div class="row"></div>
                        <div class="row"><button style="width: 50%"><font-awesome-icon :icon="['fas', 'ticket']" /> OSTA PILET</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-friday"
                 role="tabpanel" aria-labelledby="pills-friday-tab" tabindex="0">REEDE
              <div class="movie-info-row">
                <div class="movie-row-left-box">
                  <img class="movie-image" src="@/assets/cgi-stream-high-resolution-logo-transparent.png" alt="Logo">
                </div>
                <div class="movie-row-right-box">
                  <div class="movie-time-container">
                    <div class="grid-wrapper">
                      <div class="row">Row 1 Filmi Algus</div>
                      <div class="row">Row 2 CGI Stream</div>
                      <div class="row"><button style="width: 80%"><font-awesome-icon :icon="['fas', 'video']" /> Vaata Treilerit</button></div>
                    </div>
                  </div>

                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Filmi Nimi</div>
                        <div class="row"></div>
                        <div class="row">Keel • Vanusepiirang • Zanr</div>
                      </div>
                    </div>

                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Movie name</div>
                        <div class="row"></div>
                        <div class="row"><button style="width: 50%"><font-awesome-icon :icon="['fas', 'ticket']" /> OSTA PILET</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-saturday"
                 role="tabpanel" aria-labelledby="pills-saturday-tab" tabindex="0">LAUPÄEV
              <div class="movie-info-row">
                <div class="movie-row-left-box">
                  <img class="movie-image" src="@/assets/cgi-stream-high-resolution-logo-transparent.png" alt="Logo">
                </div>
                <div class="movie-row-right-box">
                  <div class="movie-time-container">
                    <div class="grid-wrapper">
                      <div class="row">Row 1 Filmi Algus</div>
                      <div class="row">Row 2 CGI Stream</div>
                      <div class="row"><button style="width: 80%"><font-awesome-icon :icon="['fas', 'video']" /> Vaata Treilerit</button></div>
                    </div>
                  </div>

                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Filmi Nimi</div>
                        <div class="row"></div>
                        <div class="row">Keel • Vanusepiirang • Zanr</div>
                      </div>
                    </div>

                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Movie name</div>
                        <div class="row"></div>
                        <div class="row"><button style="width: 50%"><font-awesome-icon :icon="['fas', 'ticket']" /> OSTA PILET</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-sunday"
                 role="tabpanel" aria-labelledby="pills-sunday-tab" tabindex="0">PÜHAPÄEV
              <div class="movie-info-row">
                <div class="movie-row-left-box">
                  <img class="movie-image" src="@/assets/cgi-stream-high-resolution-logo-transparent.png" alt="Logo">
                </div>
                <div class="movie-row-right-box">
                  <div class="movie-time-container">
                    <div class="grid-wrapper">
                      <div class="row">Row 1 Filmi Algus</div>
                      <div class="row">Row 2 CGI Stream</div>
                      <div class="row"><button style="width: 80%"><font-awesome-icon :icon="['fas', 'video']" /> Vaata Treilerit</button></div>
                    </div>
                  </div>

                  <div class="movie-info-container">
                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Filmi Nimi</div>
                        <div class="row"></div>
                        <div class="row">Keel • Vanusepiirang • Zanr</div>
                      </div>
                    </div>

                    <div class="info-column">
                      <div class="info-grid-wrapper">
                        <div class="row">Movie name</div>
                        <div class="row"></div>
                        <div class="row"><button style="width: 50%"><font-awesome-icon :icon="['fas', 'ticket']" /> OSTA PILET</button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="home-page-right-nav">
        GG
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
  methods: {},


}
</script>

<style>
/*HEADER CSS*/

.home-page-background {
  width: 100%;
  min-height: 150vh;
  position: relative;
  background-size: cover;
  background-color: black;
  background-position: center;
}

/*BODY CSS*/
.home-page-body {
  display: flex;
  height: auto;
  border: 1px solid white;
  overflow: hidden;
}

.home-page-left-nav {
  margin-top: 125px;
  width: 10%;
  display: flex;
  height: auto;
  border: 1px solid white;
}

.home-page-right-nav {
  margin-top: 125px;
  width: 10%;
  display: flex;
  height: auto;
  border: 1px solid white;
}

.home-page-centre-nav {
  margin-top: 125px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  min-height: auto;
  border: 1px solid white;
}
.home-page-centre-upper-tabs {
  padding: 15px;
  width: 100%;
  margin-top: 20px;
  border: 1px solid white;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: #000014;
}
.home-page-centre-lower-tabs{
  flex-direction: column;
  padding: 15px;
  width: 100%;
  margin-top: 20px;
  border: 1px solid white;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  background-color: black;
}

.movie-info-row{
  display: grid;
  align-items: stretch;
  width: 100%;
  height: 250px;
  border: 1px solid white;
  border-radius: 20px;
  background-color: black;
  grid-template-columns: 1fr 1fr; /* Two equal columns */
  margin-bottom: 10px;
}
.movie-info-row:hover{
  background-color: #001428;
  cursor: pointer;
}

.movie-row-left-box{
  flex: 1;
  box-sizing: border-box;
  margin-right: 40%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: 20px;
  height: 95%;
  margin-top: 5px;
  margin-left: 5px;
  border: 1px solid white;
  overflow: hidden;
}
.movie-image {
  width: 90%;
  height: 90%;
  margin-top: 5px;
  background-size: cover;
}

.movie-row-right-box{
  flex: 1;
  box-sizing: border-box;
  margin-left: -40%;
  font-size: 20px;
  color: #FFFFFF;
  border: 1px solid white;
  border-radius: 20px;
  height: 95%;
  margin-top: 5px;
  margin-right: 5px;
  display: flex;
}

.movie-time-container {
  display: flex;
  flex: 0 0 30%;
  box-sizing: border-box;
  border: 1px solid white;
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
  border: 1px solid white;
  width: 90%;
  margin-left: 10px;
}

.movie-info-container{
  display: flex;
  flex: 0 0 70%;
  box-sizing: border-box;
  border: 1px solid white;
  border-radius: 20px;
}

.movie-info-container .row{
  color: white;
  align-items: center;
  border: 1px solid white;
  margin-left: 10px;
  text-align: start;
  justify-content: start;
  height: 100%;
}

.info-grid-wrapper{
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

.dropdown{
  margin-left: 15px;
}
</style>
