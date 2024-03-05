<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-cta pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="fas fa-map-marker-alt"></i>
              <div class="cta-text">
                <h4>Find us</h4>
                <span>50106, Sõbra 54, 51013 Tartu</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="fas fa-phone"></i>
              <div class="cta-text">
                <h4>Call us</h4>
                <span>737 0700</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-md-4 mb-30">
            <div class="single-cta">
              <i class="far fa-envelope-open"></i>
              <div class="cta-text">
                <h4>Mail us</h4>
                <span>mail@cgi.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-content pt-5 pb-5">
        <div class="row">
          <div class="col-xl-4 col-lg-4 mb-50">
            <div class="footer-widget">
              <div class="footer-logo">
                <a href="index.html"><img src="@/assets/cgi-stream-high-resolution-logo-transparent.png"
                                          class="img-fluid" alt="logo"></a>
              </div>
              <div class="footer-text">
                <p>
                  1976. aastal asutatud CGI on üks maailma suuremaid IT- ja ärinõustamisteenuste osutajaid.
                  Tugineme pikaaegsele kogemusele, et aidata kiirendada koostööpartnerite investeeringute tasuvust.</p>
              </div>

            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3>Ressursikeskus</h3>
              </div>
              <ul>
                <li><a href="#">Viimased uudised</a></li>
                <li><a href="#">Artiklid</a></li>
                <li><a href="#">Blogi</a></li>
                <li><a href="#">Õigused</a></li>
                <li><a href="#">Privaatsus</a></li>
                <li><a href="#">Juurdepääs</a></li>
                <li><a href="#">Muuda nõusolekut</a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
            <div class="footer-widget">
              <div class="footer-widget-heading">
                <h3>Subscribe</h3>
              </div>
              <div class="footer-text mb-25">
                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
              </div>
              <div class="subscribe-form">
                <form action="#">
                  <input type="text" placeholder="Email Address">
                  <button><i class="fab fa-telegram-plane"></i></button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: 'InfoFooter'
}
</script>
<style>
/*HEADER CSS*/

/*BODY CSS*/

/*FOOTER*/


ul {
  margin: 0px;
  padding: 0px;
}

.footer-section {
  background: black;
  position: relative;
  margin-top: 200px;
}

.footer-cta {
  border-bottom: 1px solid #373636;
}

.single-cta i {
  color: #3c78a0;
  font-size: 30px;
  float: left;
  margin-top: 8px;
}

.cta-text {
  padding-left: 15px;
  display: inline-block;
}

.cta-text h4 {
  color: #3c78b4;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 2px;
}

.cta-text span {
  color: #757575;
  font-size: 15px;
}

.footer-content {
  position: relative;
  z-index: 2;
}

.footer-pattern img {
  position: absolute;
  top: 0;
  left: 0;
  height: 330px;
  background-size: cover;
  background-position: 100% 100%;
}

.footer-logo {
  margin-bottom: 30px;
}

.footer-logo img {
  max-width: 200px;
}

.footer-text p {
  margin-bottom: 14px;
  font-size: 14px;
  color: #7e7e7e;
  line-height: 28px;
}

.footer-widget-heading h3 {
  color: #3c78b4;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 40px;
  position: relative;
}

.footer-widget-heading h3::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -15px;
  height: 2px;
  width: 50px;
  background: #3c78a0;
}

.footer-widget ul li {
  display: inline-block;
  float: left;
  width: 50%;
  margin-bottom: 12px;
}

.footer-widget ul li a:hover {
  color: #3c78a0;
}

.footer-widget ul li a {
  color: #878787;
  text-transform: capitalize;
}

.subscribe-form {
  position: relative;
  overflow: hidden;
}

.subscribe-form input {
  width: 100%;
  padding: 14px 28px;
  background: #2E2E2E;
  border: 1px solid #2E2E2E;
  color: #3c78b4;
}

.subscribe-form button {
  position: absolute;
  right: 0;
  background: #3c78a0;
  padding: 13px 20px;
  border: 1px solid #3c78a0;
  top: 0;
}

.subscribe-form button i {
  color: #3c78b4;
  font-size: 22px;
  transform: rotate(-6deg);
}

.footer-menu li {
  display: inline-block;
  margin-left: 20px;
}

.footer-menu li:hover a {
  color: #3c78a0;
}

.footer-menu li a {
  font-size: 14px;
  color: #878787;
}
</style>