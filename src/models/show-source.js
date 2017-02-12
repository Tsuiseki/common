import mongoose from 'mongoose';

const ShowSourceSchema = mongoose.Schema({
  show: { type: mongoose.Schema.Types.ObjectId, ref: 'Show' },
  source: String,
  lastEpisode: Number,
  schedule: [{
    day: Number,
    hour: Number,
    minute: Number,
  }]
});

const ShowSource = mongoose.model('ShowSource', ShowSourceSchema);

export default ShowSource;
