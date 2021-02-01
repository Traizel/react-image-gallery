import axios from 'axios';
import './GalleryItem.css'
import { useState } from 'react';

function GalleryItem({ item, getGallery }) {

    const [description, setDescription] = useState(false);


    const addLike = (item) => {
        axios({
            method: 'PUT',
            url: `/gallery/like/${item.id}`,
        })
            .then((response) => {
                console.log(response);
                getGallery();
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <>
            <h3>{item.title}</h3>
            {
                description === false ?
                    <div onClick={() => {setDescription(!description)}} className='item-pic'>
                        <img src={item.path} />
                    </div>
                    :
                    <div onClick={() => {setDescription(!description)}} className='item-pic'>
                        <p>{item.description}</p>
                    </div>
            }
            <button onClick={() => { addLike(item) }}>Love It!</button>
            <p>{item.likes} people like this!</p>
        </>
    );
}

export default GalleryItem;