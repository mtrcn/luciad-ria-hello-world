import "./license-loader";
import {Map} from "@mtrcn/ria/view/Map";
import {WMSTileSetModel}  from "@mtrcn/ria/model/tileset/WMSTileSetModel";
import {RasterTileSetLayer} from "@mtrcn/ria/view/tileset/RasterTileSetLayer";
 
//Create a new map instance, and display it in the div with the "map" ID
const map = new Map("map");
 
//Add some WMS data to the map
const server = "https://sampleservices.luciad.com/wms";
const dataSetName = "92c09725-a9c5-46fb-bffd-d9e23b4abbf2";
WMSTileSetModel.createFromURL(server, [{layer: dataSetName}])
.then(model => {
  //Once the data is available, create a layer for it
  const layer = new RasterTileSetLayer(model);
  //and add the layer to the map
  map.layerTree.addChild(layer);
});