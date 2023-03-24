<template>
    <div>
        <footer class="footer">
            
                <div>
                    <p class="titulo"><strong>Company</strong></p>
                    <p>About Us</p>
                    <p>Why Choose Us</p>
                    <p>Princing</p>
                    <p>Testimonial</p>
                    
                </div>
                <div>
                    <p class="titulo"><Strong>Resources</Strong></p>
                    <p>Privacy Policy</p>
                    <p>Terms and Conditions</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
                </div>
                <div>
                    <p class="titulo"><strong>Products</strong></p>
                    <p>Project Managment</p>
                    <p>Time Tacker</p>
                    <p>Time Schedule</p>
                    <p>Lead Generate</p>
                    <p>Remote Colaboration</p>
                </div>
                <div class="seccionDer">
                    <p class="tituloCompinlog"><img src="@/assets/logoCompinlog.png" width="70px" height="70px"><strong>Compinlog</strong></p>
                    <p class="titulo"><strong>Contact Us</strong></p>
                    <p><input class="input" type="text"><button class="btn">Get Started</button></p>
                    <p></p>
                </div> 
            
        </footer>
    </div>
</template>

<script>

</script>

<style scoped>

p{
    color: rgb(194, 194, 194);
    
    margin-left: 10%;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.footer
{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: #717171; 
    height: 40%;
    width: 100%;
    position: fixed;
    margin-top: 35%;
}

.titulo{
    color: white;
}

.tituloCompinlog{
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