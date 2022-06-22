const fetchRockets = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const results = await response.json();
  const resData = [];
  results.forEach((result) => {
    resData.push({
      id: result.id,
      rocket_name: result.rocket_name,
      description: result.description,
      flickr_image: result.flickr_images[0],
      reserve: false,
    });
  });
  return resData;
};

export default fetchRockets;
