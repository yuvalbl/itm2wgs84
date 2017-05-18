// http://spatialreference.org/ref/epsg/2039/

var proj4 = require('proj4')

// http://spatialreference.org/ref/epsg/2039/
proj4.defs([
        [
            "ITM", 
            "+proj=tmerc +lat_0=31.73439361111111 +lon_0=35.20451694444445 +k=1.0000067 +x_0=219529.584 +y_0=626907.39 +ellps=GRS80 +towgs84=-48,55,52,0,0,0,0 +units=m +no_defs"
        ]
    ])

console.log("new coords: " + proj4("ITM", "WGS84", [176938.5353,534281.1522]))