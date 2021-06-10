import React from 'react';

const ImageCard = ({ image }) => {
  const tags = image.tags.split(',');

  return (
    <div className="text max-w-sm m-4 rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full"/>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-700 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{tag}
        </span>
        ))}
      </div>
    </div>
  )
}

export default ImageCard;
