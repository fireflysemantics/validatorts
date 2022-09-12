var ghpages = require("gh-pages");

ghpages.publish("doc",
  {
    repo: "git@github.com:fireflysemantics/validatorts.git"
  },
  function (err) {
    if (err) {
      console.error(err);
    }
  }
);