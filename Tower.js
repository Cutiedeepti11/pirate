class Tower{
    constructor(x,y,width,height)
    {
        var option= {
            isStatic:true
        }
        this.image=loadImage("tower.png");
        this.body=Bodies.rectangle(x,y,width,height,option)
        this.width= width;
        this.height=height;
        World.add(world,this.body)
    }
    display()
    {
        var pos =this.body.position;

        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
    }
}