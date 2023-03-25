<template>
    <div>
        <footer class="footer">
            
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
                    <p class="nameColumCompinlog"><img src="@/assets/logoCompinlog.png" width="70px" height="70px"><strong>Compinlog</strong></p>
                    <p class="nameColum"><strong>Contact Us</strong></p>
                    <p><input class="input" type="text"><button class="btn">Get Started</button></p>
                </div>
                <hr><div class="social">Copyright @2022</div> 
                    <div>
                    <a class="social" href="facebook.com"><img src="@/assets/face.png" width="50px" height="30px"></a>
                    <a class="social"  href="facebook.com"><img src="@/assets/twit.png" width="30px" height="30px"></a>
                    <a class="social"  href="facebook.com"><img src="@/assets/insta.png" width="30px" height="30px"></a>
                    <a class="social"  href="facebook.com"><img src="@/assets/link.png" width="30px" height="30px"></a></div>
                    <div><hr class="hrRigth"></div>
            
        </footer>
    </div>
</template>

<script>

</script>

<style scoped>

.nameColum1{

    width: 100%;
    display: flex;
    justify-content: center;
}

.nameColumLeft{
    
    color: white;
    width: 100%;
    display: flex;
    justify-content: center;
}

.hrRigth{
    width: 720px;
}

p{
    color: rgb(194, 194, 194);
    
    margin-left: 10%;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

hr{
    width: 520px;
    height: 2px;
    background: white;
    display: grid;
    grid-template-rows: 1fr;
    margin-left: 15px;
    margin-right: 15px;
}

.social{
    color: white;
    margin-right: 15px;
}

.footer
{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: #717171; 
    height: 40%;
    width: 100%;
    position: fixed;
    margin-top:32%;
}

.nameColum{
    color: white;
}

.nameColumCompinlog{
    color: white;
    font-size: 300%;
    margin-bottom: 0%;
}

.btn{
    background: black;
    color: white;
    border-radius: 8px;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
}

.input{
    color: black;
    font-size: 19px;
    border-radius: 8px;
    font-family: Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>