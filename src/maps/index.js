import React from 'react';
import styled from '@emotion/styled';
import { withApollo } from 'react-apollo';
import MarkerClusterer from '@google/markerclusterer';

import { mapStyle } from '../mapTheme';
import query from './city.gql';

const MapSection = styled.div`
  width: 100%;
  height: 150vh;
`;

class Maps extends React.Component {
  mapContainer = null;
  map = null;
  mapApi = null;
  markers = [];
  markerCluster = null;

  componentDidMount() {
    console.log(
      '​Maps -> componentDidMount -> process.env.MAPS_KEY',
      process.env.MAPS_KEY
    );
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${
      process.env.MAPS_KEY
    }`;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    this.initMap();
  }

  initMap = () => {
    if (!window.google) {
      console.log(
        'TCL: MapList -> componentDidMount -> window.google',
        window.google
      );
      setTimeout(this.initMap, 50);
      return;
    }
    console.log('initMap', window.google);
    this.mapApi = window.google.maps;
    this.map = new this.mapApi.Map(this.mapContainer, {
      zoom: 9,
      center: { lat: 52.354775, lng: 4.7585387 },
      styles: mapStyle,
    });
    this.fetchCoords();
  };

  fetchCoords = () => {
    const { client } = this.props;
    client
      .query({ query })
      .then(({ data }) => data.city)
      .then(cities => {
				console.log("​Maps -> fetchCoords -> cities", cities)
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

        });
        console.log("​Maps -> fetchCoords -> this.markers", this.markers)
        this.markerCluster = new MarkerClusterer(this.map, this.markers, {
          imagePath:
            'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
        });
      });
  };

  componentDidUpdate() {
    const { client, city = 'amsterdam' } = this.props;
    client
      .query({ query, variables: { city } })
      .then(({ data }) => {
        console.log('​Maps -> componentDidUpdate -> data', data);
        return data.city[0];
      })
      .then(({ latitude, longitude }) => {
        this.map.panTo({ lat: latitude, lng: longitude });
        this.map.setZoom(11);
      });
  }

  render() {
    return (
      <>
        <MapSection
          id="map"
          ref={mapContainer => {
            this.mapContainer = mapContainer;
          }}
        />
        {/* <Query
          query={query}
          variables={{ today, city }}
          onCompleted={(data) =>
            console.log('complited', data.city[0].latitude)
          }
        >
          {({ data, loading }) => {
            if (loading) return 'loading...';
            console.log('​Maps -> render -> data', data);

            return null;
          }}
        </Query> */}
      </>
    );
  }
}

export default withApollo(Maps);
