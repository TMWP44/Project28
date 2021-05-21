class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    display(){
        if(this.launcher.bodyA){
        var posA = this.launcher.bodyA.position;
        var posB = this.pointB;
        strokeWeight(4);
        stroke("black")
        line(posA.x, posA.y, posB.x, posB.y);
        }
    }
    
    fly(){

        this.launcher.bodyA = null;

    }
    attach(body){
        this.launcher.bodyA = body;
    }
}