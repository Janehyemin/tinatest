const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');

const apiRouter = express.Router();

app.use(logger('dev', {}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/api', apiRouter);

apiRouter.post('/tinatest', function(req, res) {
  const responseBody = {
    version: "2.0",
    template: {
      outputs: [
        {
          simpleText: {
            text: "티나는 힝입니다"
          }
        }
      ]
    }
  };

  res.status(200).send(responseBody);
});

app.listen(3000, function() {
    console.log('서버가 연결연결^^7');
  });