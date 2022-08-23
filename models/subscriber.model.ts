import { Schema, model, models } from 'mongoose';

const subscriberSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const Subscriber = models.Subscriber || model('Subscriber', subscriberSchema);

export default Subscriber;