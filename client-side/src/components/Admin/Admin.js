import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
const axios = require('axios');

const Admin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const bookData = {
      title: data.title,
      description: data.description,
      price: data.price,
      imageURL: imageURL,
    };
    const url = `https://shrouded-oasis-19794.herokuapp.com/addServices`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(bookData),
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
    <div className="row mt-5">
      <div className="col-md-5">
        <Link to="/manage">
          <h3>Manage Services</h3>
        </Link>
      </div>
      <div className="col-md-7">
        <div>
          <h2>Add Services</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="form-control w-50"
              placeholder="Title"
              {...register('title')}
            />
            <textarea
              className="form-control w-50"
              placeholder="Description"
              {...register('description')}
            ></textarea>
            <input
              className="form-control w-50"
              placeholder="Price"
              type="number"
              {...register('price', { valueAsNumber: true })}
            />
            <input type="file" onChange={handleImgUpload} />
            <input className="btn btn-primary" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
