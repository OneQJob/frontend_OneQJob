import { useEffect, useState } from "react";
import { Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";

const Map = ({ address }: { address: string }) => {
  const [position, setPosition] = useState({
    lat: 0,
    lng: 0,
  });
  const [map, setMap] = useState<kakao.maps.Map>();

  useEffect(() => {
    const script = document.createElement("script");
    script.async = false;
    script.type = "text/javascript";
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&libraries=services&autoload=false`;
    document.head.appendChild(script);
    script.onload = () => getPosition();

    const getPosition = () => {
      window.kakao.maps.load(() => {
        const geocoder = new kakao.maps.services.Geocoder();
        geocoder.addressSearch(address, (data, status) => {
          if (status === kakao.maps.services.Status.OK && data.length > 0) {
            const { x, y } = data[0];
            setPosition({ lat: parseFloat(y), lng: parseFloat(x) });
          }
        });
      });
    };
  }, []);

  return (
    <>
      {position.lat === 0 ? (
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "#dbdbdb",
          }}
        ></div>
      ) : (
        <KakaoMap
          center={position}
          onCreate={(createdMap) => setMap(createdMap as kakao.maps.Map)}
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <MapMarker position={position}></MapMarker>
        </KakaoMap>
      )}
    </>
  );
};

export default Map;
