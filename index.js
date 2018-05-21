var coin = {
    state: 0,
    flip: function() {
      return this.state = Math.round(Math.random());
       
       
   
    }, 
    toString: function() {
        if(coin.flip() === 0){
            return this.state = "H";
        }else{
            return this.state = "T";
        }
        
    },
    toHTML: function() {
        var img = document.createElement("img");
           let main = document.getElementById("main")
            if(coin.toString() === "H"){
               img.src = "headsCoin.jpg";
                main.appendChild(img)
                
            }else {
                img.src ="tails.jpg"
                main.appendChild(img);
            
            }
        // set the properties of the image element to show either heads or tails
        return img;
    }

};  
for(i = 0; i < 20; i++){
coin.flip();
coin.toString();
coin.toHTML();
}