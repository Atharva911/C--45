class Form{
 
     constructor(){

     this.name= createInput("NAME:");
     this.age= createInput("AGE:");
     this.male= createInput("MALE:")
     this.female= createInput("FEMALE:")
     this.button =  createButton("PLAY")
     this.image = loadImage("sniper.jpg")
     }




     form(){
      
      this.name.position(displayWidth-1200,200)
      this.age.position(displayWidth-950,200)
      this.male.position(displayWidth-650 ,200)
      this.female.position(displayWidth-400,200)
      this.button.position(600,displayHeight-300)
      imageMode(CENTER)
      image(this.image,displayWidth/2,displayHeight/2,displayWidth,displayHeight)





     }


}