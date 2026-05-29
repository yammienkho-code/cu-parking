var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_amenity_parking_1 = new ol.format.GeoJSON();
var features_amenity_parking_1 = format_amenity_parking_1.readFeatures(json_amenity_parking_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amenity_parking_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenity_parking_1.addFeatures(features_amenity_parking_1);
var lyr_amenity_parking_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amenity_parking_1, 
                style: style_amenity_parking_1,
                popuplayertitle: 'amenity_parking',
                interactive: true,
                title: '<img src="styles/legend/amenity_parking_1.png" /> amenity_parking'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_amenity_parking_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_amenity_parking_1];
lyr_amenity_parking_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', });
lyr_amenity_parking_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', });
lyr_amenity_parking_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', });
lyr_amenity_parking_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});