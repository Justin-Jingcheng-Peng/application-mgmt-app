const express = require("express");
const colors = require("colors");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();
require("dotenv").config();

// Connect to database
mongoose.set("strictQuery", false);
connectDB();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
app.listen(port, console.log(`server running on port ${port}`));
