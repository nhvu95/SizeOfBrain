class Foundation{
  constructor(x, y,sprite){
    this.sprite = Nakama.foundGroup.create(x, y,'Foundation',sprite);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.allowGravity = false;
    this.sprite.body.immovable = true;
    this.sprite.body.setSize(976.199,431.242-14,0,14);
  }
  update(){
  }
  move(){
    this.sprite.body.velocity.x = -Dinosarus.SPEED;
  }
  stop(){
    this.sprite.body.velocity.x = 0;
  }
}
//  Foundation.SPRITE = 'Foundation1.png';
Foundation.SPEED=100;
