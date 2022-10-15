var canvas = new fabric.Canvas('myCanvas');
 var audio= document.getElementById("MyAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg, function(Img)')
    {
    block_image_object = Img;
    
    block_image_object.scaleToWidth(700);
    block_image_object.scaleToHeight(510);
    block_image_object.set({
     top: 0,
     left: 0

    });
    canvas.add(block_image_object);

    }
	
}

function CanvasImg()
{
    base_image = new Image();
    base_image.src = 'Birthdayimage.jpg';
    context.drawImage(base_image, 100, 100);
}


function playSound()
{
	document.getElementById("MyAudio").play();
}
