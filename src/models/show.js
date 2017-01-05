import mongoose from 'mongoose';

const ShowSchema = mongoose.Schema({
  name: String,
  slug: String,
  airing: Boolean,
  episodes: Number,
  image: String
});

const Show = mongoose.model('Show', ShowSchema);

export default Show;
