var Nakama = {};
Nakama.configs = {
  GAME_WIDTH  : 2046,
  GAME_HEIGHT : 1277,
  MIN_WIDTH   : 800,
  MIN_HEIGHT  : 500,
  MAX_WIDTH   : 2046,
  MAX_HEIGHT  : 1277,
};
 Nakama.game = new Phaser.Game(Nakama.configs.GAME_WIDTH,Nakama.configs.GAME_HEIGHT,Phaser.AUTO,'');

Nakama.game.state.add('boot', bootState);
Nakama.game.state.add('load', loadState);
Nakama.game.state.add('menu', menuState);
Nakama.game.state.add('play', playState);
Nakama.game.state.add('gameOver', gameOverState);

Nakama.game.state.start('boot');
var gameOver = function(){
  console.log("Em nó đã dính bẫy :'(")
}
function  dkm(){
  //this.cooldown = true;
}

var gameOver = function(){
  if(Nakama.playerGroup.getFirstAlive() != null){
    Nakama.playerGroup.getFirstAlive().kill();
  }
}
var again = false;
var tempt = [];
var createArray = function(soluong){
  var arr = [];
  arr.push(0);
  for(let i=0; i<soluong; i++){
    arr.push(Math.floor(Math.random() * 18) + 1);
  }
  arr.push(69);
  return arr;
}
var createMap = function(arr){
  Nakama.found.length = 0;
  var x = 549;
  for(let i=0; i< arr.length ;i++){
    switch (arr[i]) {
      case 0:
        Nakama.found.push(new Foundation(0,1200));
        break;
      case 1:
        Nakama.found.push(new FoundationTrap1(x,1200));
        x += 1023;
        break;
      case 2:
        Nakama.found.push(new FoundationTrap2(x,1200));
        x += 1023;
        break;
      case 3:
        Nakama.found.push(new FoundationTrap3(x,1200));
        x += 1023;
        break;
      case 4:
        Nakama.found.push(new FoundationTrap4(x,1200));
        x += 1023;
        break;
      case 5:
        Nakama.found.push(new FoundationTrap5(x,1200));
        x += 1023;
        break;
      case 6:
        Nakama.found.push(new FoundationTrap6(x,1200));
        x += 1023;
        break;
      case 7:
        Nakama.found.push(new FoundationTrap7(x,1200));
        x += 1023;
        break;
      case 8:
        Nakama.found.push(new FoundationTrap8(x,1200));
        x += 1023;
        break;
      case 9:
        Nakama.found.push(new FoundationTrap9(x,1200));
        x += 1023;
        break;
      case 10:
        Nakama.found.push(new FoundationTrap10(x,1200));
        x += 1023;
        break;
      case 11:
        Nakama.found.push(new FoundationTrap11(x,1200));
        x += 1023;
        break;
      case 12:
        Nakama.found.push(new FoundationTrap12(x,1200));
        x += 1023;
        break;
      case 13:
        Nakama.found.push(new FoundationTrap13(x,1200));
        x += 1023;
        break;
      case 14:
        Nakama.found.push(new FoundationTrap14(x,1200));
        x += 1023;
        break;
      case 15:
        Nakama.found.push(new FoundationTrap15(x,1200));
        x += 1023;
        break;
      case 16:
        Nakama.found.push(new FoundationTrap16(x,1200));
        x += 1023;
        break;
      case 17:
        Nakama.found.push(new FoundationTrap17(x,1200));
        x += 1023;
        break;
      case 18:
        Nakama.found.push(new FoundationTrap18(x,1200));
        x += 1023;
        break;
      case 69:
        Nakama.found.push(new CheckPoint(x,1200));
        x += 1023;
        break;
      default:

    }
  }
}
var checkPoint = function(){
  // console.log(tempt);
  tempt= [];
  tempt = createArray(5);
  createMap(tempt);
  // console.log(tempt);
}