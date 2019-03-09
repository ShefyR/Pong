function randomSpeed(){
    // Set the speed of the ball
    let sign;
    if (Math.random() < 0.5){
        sign = -1;
    } else {
        sign = 1;
    }
    return (Math.random()+8)*sign;
}

function Ball(canvasWidth, canvasHeight, size, color){
    // Set the caracteristics of the ball
    let obj = {};

    obj.x = canvasWidth / 2 - size / 2;
    obj.y = canvasHeight / 2 - size / 2;
    obj.size = size;
    obj.color = color;
    obj.vx = randomSpeed();
    obj.vy = Math.random() * 6 - 3;

    obj.display = function(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    };

    obj.move = function(canvasHeight, pad1, pad2){
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
        if (this.y <= 0){
            this.vy = -this.vy;
        }
        if (this.y >= canvasHeight - this.size){
            this.vy = -this.vy;
        }
        if (this.x <= pad1.x + pad1.width){
            if(this.y + this.size >= pad1.y && this.y <= pad1.y + pad1.height){
                this.vx = -this.vx;
                this.x = pad1.x + pad1.width;
            }
        }
        if (this.x >= pad2.x - this.size){
            if(this.y + this.size >= pad2.y && this.y <= pad2.y + pad2.height){
                this.vx = -this.vx;
                this.x = pad2.x - this.size;
            }
        }
    }

    return obj;
}
