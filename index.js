// http://spatialreference.org/ref/epsg/2039/

var proj4 = require('proj4')

// http://spatialreference.org/ref/epsg/2039/
proj4.defs([
        [
            "ITM", 
            "+proj=tmerc +lat_0=31.73439361111111 +lon_0=35.20451694444445 +k=1.0000067 +x_0=219529.584 +y_0=626907.39 +ellps=GRS80 +towgs84=-48,55,52,0,0,0,0 +units=m +no_defs"
        ]
    ])

var coords = proj4("ITM", "WGS84", [process.argv[2],process.argv[3]])
console.log("WGS84:", "\n", + coords[1],"," ,coords[0])