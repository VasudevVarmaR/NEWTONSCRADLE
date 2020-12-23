class Rope
{
    constructor(body1,pointB)
    {

        var options=
        {
            bodyA : body1,
            pointB : pointB
        }

        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    display()
    {  
     var posA=this.rope.bodyA.position;
     var posB=this.pointB;
     strokeWeight(4);
     line(posA.x,posA.y,posB.x,posB.y);
       
    }
}