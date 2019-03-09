
function Pad(x, canvasWidth, canvasHeight, upKeyCode, downKeyCode, color) {
    // Set the caracteristics of the pads
    let obj = {};
    obj.width = canvasWidth*0.007;
    obj.height = canvasHeight*0.12;
    obj.x = x * (canvas.width - obj.width);
    obj.y = canvas.height/2 - obj.height/2;
    obj.speed = 10;
    obj.upKey = upKeyCode;
    obj.downKey = downKeyCode;
    obj.moveUp = false;
    obj.moveDown = false;
    obj.color = color;
    obj.canvasWidth = canvasWidth;
    obj.canvasHeight = canvasHeight,

    obj.display = function(ctx){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    obj.keyDown = function(keyCode){
        if (keyCode == this.upKey){
            this.moveUp = true;
        }
        if (keyCode == this.downKey){
            this.moveDown = true;
        }
    };

    obj.keyUp = function(keyCode){
        if (keyCode == this.upKey){
            this.moveUp = false;
        }
        if (keyCode == this.downKey){
            this.moveDown = false;
        }
    };

    obj.move = function(){
        if (this.moveUp){
            this.y -= this.speed;
        }
        if (this.moveDown){
            this.y += this.speed;
        }
        if (this.y < 0){
            this.y = 0;
        }
        if (this.y > this.canvasHeight - this.height){
            this.y = this.canvasHeight - this.height;
        }
    }

    return obj;
}
