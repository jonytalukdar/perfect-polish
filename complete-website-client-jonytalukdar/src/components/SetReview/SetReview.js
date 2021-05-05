import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import UserSideBar from '../UserSideBar/UserSideBar';
const axios = require('axios');

const SetReview = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const reviewData = {
      title: data.title,
      profession: data.profession,
      description: data.description,
      imageURL: imageURL,
    };
    const url = `https://shrouded-oasis-19794.herokuapp.com/addReview`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    }).then((res) => console.log('server side reponse', res));
  };

  const handleImgUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set('key', '5aaaddefebdfb8bdc581dde6185be518');
    imageData.append('image', event.target.files[0]);

    axios
      .post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <UserSideBar></UserSideBar>
        </div>
        <div className="col-md-8">
          <div>
            <h2>Add Review</h2>
            <form
              style={{ backgroundClip: '#ddd', padding: '12px' }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                className="form-control w-50"
                placeholder="Name"
                {...register('title')}
              />
              <input
                className="form-control w-50"
                type="text"
                placeholder="Profession"
                {...register('profession')}
              />
              <textarea
                className="form-control w-50"
                placeholder="Description"
                {...register('description')}
              ></textarea>

              <input type="file" onChange={handleImgUpload} />
              <input className="btn btn-primary" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetReview;
