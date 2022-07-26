class Paper {
    constructor() {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0,
            density: 1.2
        }
        this.r = 60
        this.body = Bodies.circle(50,650,this.r ,options)
        World.add(world,this.body)
        this.image = loadImage("bola.png")
        

    }
    display(){
        var pos = this.body.position
        image(this.image, pos.x, pos.y, this.r, this.r )

    }
}