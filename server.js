const express = require('express');
const { graphHTTP } = require('express-graphql');

const app = express();

app.use(
  '/graphql',
  graphHTTP({
    schema,
    graphipl: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));
