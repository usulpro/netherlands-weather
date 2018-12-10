import React from 'react';
import styled from '@emotion/styled';
import { withApollo } from 'react-apollo';
import MarkerClusterer from '@google/markerclusterer';

import { mapStyle } from '../mapTheme';
import query from './city.gql';

const MapSection = styled.div`
  width: 100%;
  height: 150vh;
  min-height: 500px;
`;

class Maps extends React.Component {
  mapContainer = null;
  map = null;
  mapApi = null;
  markers = [];
  markerCluster = null;

  componentDidMount() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${
      process.env.MAPS_KEY
    }`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    this.initMap();
  }


  componentDidUpdate() {
    this.zoomToCity();
  }

  initMap = () => {
    if (!window.google) {
      console.log('Google map is loading...');
      setTimeout(this.initMap, 50);
      return;
    }
    this.mapApi = window.google.maps;
    this.map = new this.mapApi.Map(this.mapContainer, {
      zoom: 9,
      center: { lat: 52.354775, lng: 4.7585387 },
      styles: mapStyle,
    });
    this.fetchCoords();
  };

  fetchCoords = () => {
    const { client, navigate } = this.props;
    client
      .query({ query })
      .then(({ data }) => data.city)
      .then(cities => {
        cities.forEach(city => {
          const marker = new this.mapApi.Marker({
            position: { lat: city.latitude, lng: city.longitude },
            title: city.name,
            label: {
              text: city.name,
              color: '#3a3a3a',
              fontSize: '16px',
              fontWeight: '600',
            },
            icon: {
              url: '/place.svg',
              scaledSize: new this.mapApi.Size(40, 40),
              labelOrigin: new this.mapApi.Point(20, -5),
            },
          });
          this.markers.push(marker);
          marker.addListener('click', () =>
            navigate(`/cities/${encodeURIComponent(city.name.toLowerCase())}`)
          );
        });
        this.markerCluster = new MarkerClusterer(this.map, this.markers, {
          imagePath:
            'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
        });
        this.zoomToCity();
      });
  };

  zoomToCity = () => {
    const { client, city } = this.props;
    if (!city) return;
    client
      .query({ query, variables: { city } })
      .then(({ data }) => {
        return data.city[0];
      })
      .then(({ latitude, longitude }) => {
        this.map.panTo({ lat: latitude, lng: longitude });
        this.map.setZoom(11);
      });
  };


  render() {
    return (
      <>
        <MapSection
          id="map"
          ref={mapContainer => {
            this.mapContainer = mapContainer;
          }}
        />
      </>
    );
  }
}

export default withApollo(Maps);
