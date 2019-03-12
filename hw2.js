var inquirer = require("inquirer")

function Human (n,h){
    if(h== undefined) h=100;
    this.name=n;
    this.health=h;
}

function Survivor (n,h){
    var min = Math.ceil(1);
    var max = Math.floor(30);
    Human.call(this,n,h)
    this.luckyNumber=Math.floor(Math.random() * (max - min + 1)) + min
}
Survivor.prototype=Object.create(Human.prototype)

Survivor.prototype.escape=function(){
    var thisSurvivor= this 
    
    return inquirer
    .prompt([
        {
            type:"input",
            message: "enter number 1-30",
            name: "number",
        }
    ])
    .then(function(res){
        var guess = parseInt(res.number)
        var val;
        
        if (guess==thisSurvivor.luckyNumber){
           console.log("this is true")
            val= true
        }
        else{
            console.log('nope')
            val= false 
        }

        return val 
    }) 
}


// // testing Survivor 
// var s = new Survivor("aaron", 70)
// console.log(s.luckyNumber)
// s.escape().then(function(res){
//     console.log(res)
// })



function Monster(n,h,attack_num){
    this.attack_num=attack_num; 
    Human.call(this,n,h);
} 

Monster.prototype=Object.create(Human.prototype)
    
Monster.prototype.attack=function(){
  var ran=  Math.ceil(Math.random()*5)

    if (ran===3){
        return false;
    }else{
        return true
    }
};

var monster = new Monster("george",56,5)


inquirer
    .prompt([
        {
            type:"input",
            message: "What is your name?",
            name: "name",
        }
    ])
    .then(function(res){
        var survivor= new Survivor(res.name,100)
 
        function callEscape(){
            survivor.escape().then(function(res){
                var es=res;
            
            if (es){
                console.log('you have won');
                return;
            
            }else 
            var attack=monster.attack();

            if(attack != false){
                survivor.health -= monster.attach_number;
            
            console.log(`you've lost ${monster.attack_number} health and now you have a total of this much health: ${s.health}`)
            return;
          }else{
            console.log("you've dodged the monster's attack!");
            return;
          }
        }
    });
    
 
    setInterval(callEscape, 4*1000)  
    
    if (survivor.health <= 0){
        console.log(`the monster named ${m.name} got you`)
      }
    ; 

