const PORT = process.env.PORT || 3000;
const DATABASE = process.env.NODE_ENV === 'production' ? process.env.DB : 'mongodb://localhost:27017/moviesdb';
const JWT_SECRET = process.env.NODE_ENV === 'production' ? process.env.JWT_SECRET : 'some-secret-key';

module.exports = {
  PORT,
  DATABASE,
  JWT_SECRET,
};
