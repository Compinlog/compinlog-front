
<template>
  <div style="margin:0; padding:0;">
    <footer class="footer">
      <div class="container-text-footer">
        <div class="divCenter">
          <p class="nameColumLeft"><strong>Company</strong></p>
          <p class="nameColum1">About Us</p>
          <p class="nameColum1">Why Choose Us</p>
          <p class="nameColum1">Princing</p>
          <p class="nameColum1">Testimonial</p>
        </div>
        <div>
          <p class="nameColum"><Strong>Resources</Strong></p>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Blog</p>
          <p>Contact Us</p>
        </div>
        <div>
          <p class="nameColum"><strong>Products</strong></p>
          <p>Project Managment</p>
          <p>Time Tacker</p>
          <p>Time Schedule</p>
          <p>Lead Generate</p>
          <p>Remote Colaboration</p>
        </div>
        <div>
          <p class="nameColumCompinlog">
            <img src="" /><strong style="font-family: 'Roboto';margin-left:46px"
              >Compinlog</strong
            >
          </p>
          <p class="nameColum"><strong>Contact Us</strong></p>
          <p><input class="input" type="text" /><button class="btn">Get Started</button></p>
        </div>
      </div>
      <div class="container-social-footer">
        <hr />
        <div class="social">Copyright @2022</div>
        <div style="display: flex">
          <a class="social" href="facebook.com"
            ><img class="image-social-footer" src="@/assets/face.png"
          /></a>
          <a class="social" href="facebook.com"
            ><img class="image-social-footer" src="@/assets/twit.png"
          /></a>
          <a class="social" href="facebook.com"
            ><img class="image-social-footer" src="@/assets/insta.png"
          /></a>
          <a class="social" href="facebook.com"
            ><img class="image-social-footer" src="@/assets/link.png"
          /></a>
        </div>
        <hr />
      </div>
    </footer>
  </div>
</template>

<script>
</script>

<style scoped>
.footer {
  background: #1E1E21;
  height: 40%;
  padding: 56px;
}

.container-text-footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 2fr;
  margin-bottom: 1.5rem;
}
.nameColum1 {
  width: 100%;
  display: flex;
  justify-content: center;
}

.nameColumLeft {
  color: white;
  width: 100%;
  display: flex;
  justify-content: center;
}

p {
  color: rgb(194, 194, 194);
  margin-left: 10%;
  font-family: 'Roboto';
}

hr {
  width: 30%;
  height: 2px;
  background: white;
  margin-left: 15px;
  margin-right: 15px;
}

.social {
  color: white;
  margin-right: 15px;
  font-family: 'Roboto';
}

.nameColum {
  color: white;
}

.nameColumCompinlog {
  color: white;
  font-style: normal;
font-weight: 400;
font-size: 50px;
margin: 0;
}

.btn {
  background: #BC2C2C ;
  border: #BC2C2C;
  color: white;
  border-radius: 8px;
  font-family: sans-serif;
  font-size: 20px;
  width: 195px;
  height: 47px;
}

.input {
  font-size: 19px;
  border-radius: 8px;
  font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
  height: 39px;
}

.image-social-footer {
  width: 20px;

}
.container-social-footer {
  display: flex;
  justify-content: space-between;
}
</style>
