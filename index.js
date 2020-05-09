const { Keystone } = require("@keystonejs/keystone");
const { MongooseAdapter } = require("@keystonejs/adapter-mongoose");

const keystone = new Keystone({
  name: "New Project",
  adapter: new MongooseAdapter(),
});
