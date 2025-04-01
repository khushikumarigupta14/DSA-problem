// call bind and apply
const person = {
  name: "khushu",
  age: 2,
  designation: "student",
  personalDetails: function () {
    console.log(this);
  },
  personalInfo: () => {
    console.log(this);
  },
};
// person.personalInfo();
let personalDetails = function (state, country) {
  console.log(this.name, " ", state, "", country);
};
personalDetails.call(person);
const person2 = {
  name: "mus",
  age: 12,
  designation: "student",
  personalDetails: function () {
    console.log(this);
  },
  personalInfo: () => {
    console.log(this);
  },
};
// person.personalDetails.call(person2);
personalDetails.call(person2, "bihar");
personalDetails.apply(person2, ["bihar", "india"]);
