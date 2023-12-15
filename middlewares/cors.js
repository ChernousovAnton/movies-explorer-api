const allowedCors = [
  'https://mesto2222.students.nomoredomainsmonster.ru',
  'http://localhost:3001',
];

// eslint-disable-next-line consistent-return
const corsHandler = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';
  const requestHeaders = req.headers['access-control-request-headers'];

  // if (allowedCors.includes(origin)) {
  //   if (method === 'OPTIONS') {
  //     res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
  //     res.header('Access-Control-Allow-Headers', requestHeaders);
  //     res.header('Access-Control-Allow-Origin', origin);
  //     return res.end();
  //   }
  //   res.header('Access-Control-Allow-Origin', origin);
  // }
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    res.header('Access-Control-Allow-Origin', '*');
    return res.end();
  }
  res.header('Access-Control-Allow-Origin', '*');
  next();
};

module.exports = corsHandler;
