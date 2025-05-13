
// 40.5460275,34.9510655

import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px"
};

const center = {
  lat: 40.5460275,  // Enlem
  lng: 34.9510655   // Boylam
};

function LocationViewer() {
  return (
    <div>
    <div>
      <h2 style={{    fontFamily: "serif", color: "#ffc300", marginTop: 48, margin: 0}}>📍 Lezzet Durağımız - İnönü Caddesinde!</h2>
      <h4 style={{fontWeight: "400", color: "#eee", paddingLeft: 12, paddingRight: 12}}>Şehrin kalbinde, İnönü Caddesi üzerinde yer alan Murat Et Gece Dönercisi, 100% dana etinden hazırlanan enfes dönerleriyle damaklarda iz bırakıyor.</h4>
    </div>
    <iframe
  style={{alignSelf: "center", borderRadius: 12, marginTop: 10, marginBottom: 32, minWidth: 400, minHeight: 300}}
  src='https://www.google.com/maps?q=40.5460275,34.9510655&hl=tr&z=16&output=embed'
  allowFullScreen
></iframe>
</div>
  );
}

export default LocationViewer;
