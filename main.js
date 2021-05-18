var canvas = new fabric.Canvas("myCanvas");
var PX = 10;
var PY = 10;
var BH = 30;
var BW = 30;
var player_object = "";
var block_object = "";

function player_update() {

    fabric.Image.fromURL("player.png", function (Img)

        {

            player_object = Img;
            player_object.scaleToWidth(150);
            player_object.scaleToHeight(160);
            player_object.set({

                top: PY,
                left: PX

            });
            canvas.add(player_object);
        }

    );

}

function new_image(get_image) {

    fabric.Image.fromURL(get_image, function (Img)

        {

            block_object = Img;
            block_object.scaleToWidth(BW);
            block_object.scaleToHeight(BH);
            block_object.set({

                top: PY,
                left: PX

            });
            canvas.add(block_object);
        }

    );

}
window.addEventListener("keydown", mykeydown);

function mykeydown(e) {

    keypress = e.keyCode;
    if (e.shiftKey == true && keypress == "80") {

        BH = BH + 10;
        BW = BW + 10;
        document.getElementById("current_width").innerHTML = BW;
        document.getElementById("current_height").innerHTML = BH;
        console.log("increament"); //"Shift" and "P" together

    }
    if (e.shiftKey == true && keypress == "77") {

        BH = BH - 10;
        BW = BW - 10;
        document.getElementById("current_width").innerHTML = BW;
        document.getElementById("current_height").innerHTML = BH;
        console.log("increament"); //"Shift" and "M" together

    }

    if (keypress == "37") {

        left();

    }

    if (keypress == "38") {

        up();

    }

    if (keypress == "39") {

        right();

    }

    if (keypress == "40") {

        down();

    }
    //ascii code for A is 65                 
    if (keypress == "68") {

        new_image("Block_of_diamond.png");

    }

    if (keypress == "82") {

        new_image("Block_of_redstone.png");

    }

    if (keypress == "66") {

        new_image("brick_block.jpg");

    }

    if (keypress == "67") {

        new_image("cactus.png");

    }

    if (keypress == "89") {

        new_image("extra.png");

    }

    if (keypress == "71") {

        new_image("glowstone.png");

    }

    if (keypress == "65") {

        new_image("grass_block.png");

    }

    if (keypress == "78") {

        new_image("netherack.png");

    }

    if (keypress == "76") {

        new_image("oak_log.jpg");

    }

    if (keypress == "79") {

        new_image("Obsidian.jpg");

    }

    if (keypress == "77") {

        new_image("slime_block.png");

    }

    if (keypress == "83") {

        new_image("stone.jpg");

    }

}

function up(){

if(PY>0){

PY=PY-BH;
canvas.remove(player_object);
player_update();

}

}

function down(){

    if(PY<400){
    
    PY=PY+BH;
    canvas.remove(player_object);
    player_update();
    console.log("down");
    
    }

    }

    function left(){

        if(PX>0){
        
        PX=PX-BW;
        canvas.remove(player_object);
        player_update();
        
        }

        }

        function right(){

            if(PX<800){
            
            PX=PX+BW;
            canvas.remove(player_object);
            player_update();
            
            }
    
            }