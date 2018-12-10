import React from 'react';
import styled from '@emotion/styled';
import { withApollo } from 'react-apollo';

import { mapStyle } from '../mapTheme';
import query from './city.gql';

const MapSection = styled.div`
  width: 100%;
  height: 200vh;
`;

class Maps extends React.Component {
  mapContainer = null;
  map = null;
  mapApi = null;
  markers = null;
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
    // this.fetchData();
  };

  componentDidUpdate(props) {
    const { client, today, city = 'amsterdam' } = this.props;
    client
      .query({ query, variables: { today, city } })
      .then(({ data }) => {
        console.log('​Maps -> componentDidUpdate -> data', data);
        return data.city[0];
      })
      .then(({ latitude, longitude }) =>
        {
          const marker = new this.mapApi.Marker({
            position: { lat: latitude, lng: longitude },
            title: city,
            label: {
              text: city,
              color: '#5691ad',
              fontSize: '10px'
            },
            // icon: {
            //   url: cityIcon,
            //   labelOrigin: new this.mapApi.Point(50, 13)
            // }
          });
          this.map.panTo({ lat: latitude, lng: longitude });
          this.map.addMarker(marker);
        }
      );
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
