var wms_layers = [];

        var lyr__0 = new ol.layer.Tile({
            'title': '',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });var format_Referencias_1 = new ol.format.GeoJSON();
var features_Referencias_1 = format_Referencias_1.readFeatures(json_Referencias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Referencias_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Referencias_1.addFeatures(features_Referencias_1);var lyr_Referencias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Referencias_1, 
                style: style_Referencias_1,
    title: 'Referencias<br />\
    <img src="styles/legend/Referencias_1_0.png" /> -<br />\
    <img src="styles/legend/Referencias_1_1.png" /> Alianza Cambiemos<br />\
    <img src="styles/legend/Referencias_1_2.png" /> Alianza Frente Justicialista Creer Entre Rios<br />\
    <img src="styles/legend/Referencias_1_3.png" /> Empate Alianza Cambiemos / Alianza Frente Justicialista Creer Entre Rios<br />\
    <img src="styles/legend/Referencias_1_4.png" /> <br />'
        });

lyr__0.setVisible(true);lyr_Referencias_1.setVisible(true);
var layersList = [lyr__0,lyr_Referencias_1];
lyr_Referencias_1.set('fieldAliases', {'departamen': 'departamen', 'circuito': 'circuito', '._Circuito': '._Circuito', '._Ganador': '._Ganador', '._Partido SER': '._Partido SER', '._Confederacion Venecinalista Entre Rios': '._Confederacion Venecinalista Entre Rios', '._Partido Socialista': '._Partido Socialista', '._Nueva Izquierda': '._Nueva Izquierda', '._Alianza Frente Justicialista Creer Entre Rios': '._Alianza Frente Justicialista Creer Entre Rios', '._Alianza Cambiemos': '._Alianza Cambiemos', '._Votos nulos': '._Votos nulos', '._Votos recurridos': '._Votos recurridos', '._Votos en blanco': '._Votos en blanco', '._Votos impugnados': '._Votos impugnados', '._Totales': '._Totales', });
lyr_Referencias_1.set('fieldImages', {'departamen': 'TextEdit', 'circuito': 'TextEdit', '._Circuito': 'TextEdit', '._Ganador': 'TextEdit', '._Partido SER': 'TextEdit', '._Confederacion Venecinalista Entre Rios': 'TextEdit', '._Partido Socialista': 'TextEdit', '._Nueva Izquierda': 'TextEdit', '._Alianza Frente Justicialista Creer Entre Rios': 'TextEdit', '._Alianza Cambiemos': 'TextEdit', '._Votos nulos': 'TextEdit', '._Votos recurridos': 'TextEdit', '._Votos en blanco': 'TextEdit', '._Votos impugnados': 'TextEdit', '._Totales': 'TextEdit', });
lyr_Referencias_1.set('fieldLabels', {'departamen': 'header label', 'circuito': 'no label', '._Circuito': 'header label', '._Ganador': 'header label', '._Partido SER': 'header label', '._Confederacion Venecinalista Entre Rios': 'header label', '._Partido Socialista': 'header label', '._Nueva Izquierda': 'header label', '._Alianza Frente Justicialista Creer Entre Rios': 'header label', '._Alianza Cambiemos': 'header label', '._Votos nulos': 'header label', '._Votos recurridos': 'header label', '._Votos en blanco': 'header label', '._Votos impugnados': 'header label', '._Totales': 'header label', });
lyr_Referencias_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});