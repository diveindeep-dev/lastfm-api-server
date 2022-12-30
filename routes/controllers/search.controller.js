import axios from 'axios';

const getCover = async (req, res, next) => {
  try {
    const getCoverByAlbum = await axios.get(
      `https://ws.audioscrobbler.com/2.0/?method=album.search&album=${req.body.query}&api_key=${process.env.FM_API_KEY}&format=json`,
    );

    const albumList = getCoverByAlbum.data.results.albummatches.album;

    res.status(200).json({
      result: albumList,
    });
  } catch (err) {
    console.log(err);
  }
};

export { getCover };
