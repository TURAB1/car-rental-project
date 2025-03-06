import React from "react";
import BasicWorldMap from "react-basic-world-map";

 function WorldMap() {
  const onClickMapLocation = (selectedContinent) => {
    // do something
  };

  const continents= [
    { key: "africa", value: "Afrika" },
    { key: "south_america", value: "Güney Amerika" },
    { key: "europe", value: "Avrupa" },
    { key: "asia", value: "Asya" },
    { key: "america", value: "Amerika" },
    { key: "australia", value: "Okyanusya" },
  ];

  return (
    <div style={styles.container}>
      <BasicWorldMap
        primaryColor="#007BFF" // Blue for selected regions
        secondaryColor="#F0F0F0" // Light gray for other regions
        hoverColor="#FF6347" // Red on hover (if supported)
        onClickMapContinent={onClickMapLocation}
        continents={continents}
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full viewport height
    width: "100vw", // Full viewport width
  },
};


export default WorldMap
