import React from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/utils/validators';
import './PlaceForm.css';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State BUilding',
    description: 'One of the most famouse place in heart of India',
    imageUrl:
      'https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg?w=1440',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7484405,
      lng: 73.9878531,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empire State BUilding',
    description: 'One of the most famouse place in heart of India',
    imageUrl:
      'https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_VMS/21/202/tdih-may01-HD.jpg?w=1440',
    address: '20 W 34th St, New York, NY 10001, United States',
    location: {
      lat: 40.7484405,
      lng: 73.9878531,
    },
    creator: 'u2',
  },
];

const UpdatePlace = (props) => {
  const placeId = useParams().placeId;

  const identiFiedPlace = DUMMY_PLACES.find((place) => place.id === placeId);

  if (!identiFiedPlace) {
    return (
      <div className="center">
        <h2>No place found!</h2>
      </div>
    );
  }
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identiFiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid title."
        onInput={() => {}}
        value={identiFiedPlace.description}
        valid={true}
      />
      <Button tyep="submit" disabled={true}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;