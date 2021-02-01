const { default: GalleryItem } = require("../GalleryItem/GalleryItem");

function GalleryList({ galleryLists, getGallery }) {
    console.log(galleryLists);

    return (
        <div className="gallery">
            {galleryLists.map(item =>
            (<div key={item.id} className='gallery-item'>
                <GalleryItem 
                item={item}
                getGallery={getGallery}
                />
            </div>)
            )}
        </div>
    );
}

export default GalleryList;