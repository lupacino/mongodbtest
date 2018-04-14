const assert = require('assert');

const User = require('../src/user');

describe("updating records", () => {

  let joe;

  beforeEach((done) =>{

    joe = new User({name: "Joe" });
    joe.save()
    .then(() => done());
     });

    it('instance type using set n save', () => {


  });
});
