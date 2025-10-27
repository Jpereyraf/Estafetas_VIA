var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMapsSatelite_1 = new ol.layer.Tile({
            'title': 'Google Maps Satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_EstafetasVIA_2 = new ol.format.GeoJSON();
var features_EstafetasVIA_2 = format_EstafetasVIA_2.readFeatures(json_EstafetasVIA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EstafetasVIA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstafetasVIA_2.addFeatures(features_EstafetasVIA_2);
var lyr_EstafetasVIA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EstafetasVIA_2, 
                style: style_EstafetasVIA_2,
                popuplayertitle: 'Estafetas  VIA',
                interactive: true,
                title: '<img src="styles/legend/EstafetasVIA_2.png" /> Estafetas  VIA'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleMapsSatelite_1.setVisible(true);lyr_EstafetasVIA_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleMapsSatelite_1,lyr_EstafetasVIA_2];
lyr_EstafetasVIA_2.set('fieldAliases', {'Estafetas de Pagos': 'Estafetas de Pagos', 'Dirección del Comercio': 'Dirección del Comercio', 'Modalidad de Cobro': 'Modalidad de Cobro', 'Tipo': 'Tipo', 'X': 'X', 'Y': 'Y', });
lyr_EstafetasVIA_2.set('fieldImages', {'Estafetas de Pagos': 'TextEdit', 'Dirección del Comercio': 'TextEdit', 'Modalidad de Cobro': 'TextEdit', 'Tipo': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_EstafetasVIA_2.set('fieldLabels', {'Estafetas de Pagos': 'inline label - visible with data', 'Dirección del Comercio': 'inline label - visible with data', 'Modalidad de Cobro': 'hidden field', 'Tipo': 'hidden field', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_EstafetasVIA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});