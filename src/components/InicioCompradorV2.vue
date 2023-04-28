

<template>
    <div class="container">
        
            <div class="box">
                

                <div class="box2">
                    <p style="Color:#BC2C2C">Orden de compra</p>
                    <div class="card">
                        <div class="cardBoxL">

                        </div>
                        <div class="cardBoxR">

                        </div>
                    </div>
                </div>
                <div class="box3">
                        <div class="box3R">
                            <div class="box3R1">
                                <button class="btnL"><strong>Aprobar</strong></button>
                                <button class="btnR"><strong>Rechazar</strong></button>
                            </div>
                                <button class="btn"><strong>Revisar</strong></button>
                            
        
                            <div class="box3R2">
                                <button><strong>Editar orden</strong></button>
                            </div>
                            <div class="box3R2">
                                <button><strong>Historial de ordenes</strong></button>
                            </div>
                            
                            <div class="box3R2" >
                                <button ><strong >Adicionar nota</strong></button>
                            </div>
                        </div>
                </div>
            </div>  
         
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anybody&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    background-color: #F8F8FA;
    padding: 100px;
    

}
.b {
    width: 100%;
    height: 8%;
    border-top: 2px solid white;
    border-left: 2px solid white;
    border-right: 2px solid white;
    border-radius: 20px 20px 0 0;
    margin-top: 2%;
    color: gray;
    
}
.b p{
    margin-left: 15px;
}



.box{
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 1500px;
    height: 700px;
    border-radius: 2px;
    overflow: hidden;
    box-shadow: 0px 10px 10px 4px rgba(0, 0, 0, 0.3);
    cursor: default;
    background-color:#BC2C2C;
    font-family: 'Poppins'
    }


.box2{
    width: 1000px;
    height: 700px; 
    }

.box3{
    padding: 10%;
    margin-top: 100px;
}

.box3R{
    width: 100%;
    height: 100%;
}

.box3R1{
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-top: 30%;
    width: 100%;
    height: 8%;;
}

.btnL{
    border-radius: 15px;
    background-color: #F8F8FA ;
    color: #1E1E21;
    border: none;
    margin-right:5px
}
.btnR{
    border-radius: 15px;
    
    background-color:#1E1E21;
    color: #F8F8FA ;
    border: none;
}
.box3R2{
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 1%;
    width: 100%;
    height: 8%;
}
.box3R2 button{
    border-radius: 15px;
    border-color:none;
    background-color: #C0C0C2 ;
    color:#1E1E21;
}

.btn{
    width: 100%;
    height: 8%;
    border-radius:15px;
    border-color:none;
    color:#1E1E21;
    background-color: #C0C0C2    ;
    margin-top: 1%;
}
.card {
    margin-left: 15px;
    width: 900px;
    height: 530px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 10px 10px 4px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.cardBoxL{
    width: 100%;
    height: 100%;
    background-color: rgb(215, 245, 245);
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
}
.cardBoxR   {
    width: 100%;
    height: 100%;
    background-color: rgb(232, 215, 247);
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
}

.box img {
    width: 130px;
    height: 115px;
    left: 99px;
    top: 28px;
    padding: 30px;
}

.box h1{
    font-family: 'Anybody', cursive;
    text-align: center;
    font-weight: 700;
    font-size: 22px;
    line-height: 24px;
}

.box2 p{
    font-family: 'Poppins', sans-serif;
    font-size: 40px;
    padding: 10px;
    color: gray;
}
</style>
