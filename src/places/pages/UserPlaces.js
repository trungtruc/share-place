import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList/PlaceList';

const DUMMY_PLACES =  [
  {
   id: 'p1',
   title: 'Mountain',
   description: 'Green Trees Near Body of Water',
   imageUrl: 'https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
   location: {
     lat: 10.8621592,
     long: 106.7588497
   },
   creatorId: 'u1',
  },
  {
    id: 'p2',
    title: 'Mountain pathway',
    description: 'High-angle Photography of Mountain Pathway',
    imageUrl: 'https://images.pexels.com/photos/2082949/pexels-photo-2082949.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    location: {
      lat: 10.850651,
      long: 106.68182
    },
    creatorId: 'u2'
   }
]

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creatorId === userId);
  return <PlaceList items={loadedPlaces} />
}

export default UserPlaces;