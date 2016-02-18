var ExifImage = require('exif').ExifImage;//TO read exif data

var gm = require('gm'); //to manipulate data

var fs = require('fs'); //to save image to disk


try {

	//vars
	var imageSrc = 'img_1771.jpg';
	var imageDst = 'converted.jpg';
	
    new ExifImage({ image :  imageSrc}, function (error, exifData) {
        if (error)
            console.log('Error: '+error.message);
        else{
            
            //console.log(exifData); //uncomment this to get detailed info

        	//get the image orientation
        	var ori = exifData.image.Orientation;

        	console.log('ORIENTATION WAS --> ' + ori);

        	//logic goes here
        	console.log('PERFORMING OPERATIONS ON FILE '   + imageSrc);
        	gm(imageSrc)
        	.rotate('white',45) // rotete(color , degrees)
        	.write('./'+imageDst , function(err){
				if(err){
					console.log(err);
				}
			});

			console.log('DONE ! Image saved as ' + imageDst);
}


    });
} catch (error) {
    console.log('Error: ' + error.message);
}