import React from 'react';
import Card from '../../../shared/components/UIElements/Card';
import PlaceItem from '../PlaceItem/PlaceItem';

import './PlaceList.css';

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
        <h2>No places found. Maybe create one?</h2>
        <button>Share Place</button>
        </Card>
      </div>
    )
  }
  return  <ul className="place-list">
    {props.items.map(place => <PlaceItem key={place.id} 
      imageUrl={place.imageUrl} 
      title={place.title}
      description={place.description}
      createdDate={place.createdDate} 
      address={place.address} 
      creatorId={place.creatorId}/>
    )}
  </ul>
}
export default PlaceList;