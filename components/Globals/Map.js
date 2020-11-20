import { useEffect } from 'react';
export default () => {

  useEffect(() => {
    if (mymap) {
      mymap.remove();
    }
    var mymap = L.map('mapid').setView([38.319095,26.643206], 11);
    var marker = L.marker([38.319095,26.643206]).addTo(mymap);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiY2VtaWx1enVuaGFzYW4iLCJhIjoiY2sxYzRheTBmMDhkczNicnlwbDFsZ2RrdSJ9.w8f71HWuvzQ4FJiqPOxP8w'
    }).addTo(mymap);
  }, []);

  return (
    <div id="mapid" />
  );
}