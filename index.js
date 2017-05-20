// http://spatialreference.org/ref/epsg/2039/

var proj4 = require('proj4')

// http://spatialreference.org/ref/epsg/2039/
proj4.defs([
        [
            "ITM", 
            "+proj=tmerc +lat_0=31.73439361111111 +lon_0=35.20451694444445 +k=1.0000067 +x_0=219529.584 +y_0=626907.39 +ellps=GRS80 +towgs84=-48,55,52,0,0,0,0 +units=m +no_defs"
        ]
    ])
//var iconv = require('iconv');
//var ic = new iconv.Iconv('iso-8859-1', 'utf-8');

var fileName = process.argv[2];
var outputFileName = fileName.split('.')[0] + '_WGS84.' + fileName.split('.')[1]
var latProperty = process.argv[3];
var longProperty = process.argv[4];
var fs = require('fs');
var jsonData = JSON.parse(fs.readFileSync(fileName, 'utf-8'));
console.log(jsonData)
var coordinate
for(var i in jsonData) {
	coordinate = proj4("ITM", "WGS84", [jsonData[i][latProperty], jsonData[i][longProperty]])
	jsonData[i][latProperty] = coordinate[0];
	jsonData[i][longProperty] = coordinate[1];
}
	
console.log('\n\n');
console.log('==========================================');
fs.writeFile(outputFileName, JSON.stringify(jsonData), 'utf-8', function(){ console.log('output file: '+outputFileName)});