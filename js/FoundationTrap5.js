class FoundationTrap5{
  constructor(x1,y1,x2,y2,sprite){
    this.sprite1 = Nakama.trapGroup.create(x1, y1,'Foundation',sprite );
    Nakama.game.physics.arcade.enable(this.sprite1);
    this.sprite1.body.allowGravity = false;
    this.sprite1.body.immovable = true;
    this.sprite2 = Nakama.trapGroup.create(x2, y2,'Foundation',sprite );
    // Nakama.game.add(this.sprite);
    this.sprite2.body.allowGravity = false;
    Nakama.game.physics.arcade.enable(this.sprite2);
    //this.sprite1.body.collideWorldBounds = true;
    // this.configs = configs;
    this.sprite2.body.immovable = true;
    //this.sprite.body.setSize(135.199,431.242-14,0,14);
  }
  update(){
    this.sprite1.body.velocity.x=-FoundationTrap5.XSPEED;
    this.sprite2.body.velocity.x=-FoundationTrap5.XSPEED;
    this.playerSprite=Nakama.playerGroup.getFirstAlive();
    if((this.sprite1.position.x-10-this.playerSprite.position.x)<0 &&(this.sprite1.position.y>1200)){
      this.sprite1.body.velocity.y = -FoundationTrap5.SPEED;
      this.sprite2.body.velocity.y = FoundationTrap5.SPEED;

    }
    if(this.sprite1.position.y<1215){
      this.sprite1.body.velocity.y=0;
    }
  }
}
FoundationTrap5.SPEED=500;
FoundationTrap5.XSPEED=100;