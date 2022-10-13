// const user = {
//     name: "Jacques Gluke",
//     tag: ["jgluke", "sun"],
//     location: {
//       country: "Jamaica",
//       city: "Ocho Rios",
//     },
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
    // getName(){
    //     return this.name;
    // },
    // addTag(newTag){
    //     this.tag.push(newTag);
    // },
    // removetag(oldTag){
    //     const index = this.tag.indexOf(oldTag);
    //     this.tag.splice(index, 1)
    // }
// };
//   console.log(user);
//   user.addTag("life");
//   user.removetag("jgluke")

//   user.name = "Milla"
//   console.log(user.name);
//   console.log(user.stats.likes)
//   user.age = 23
//   console.log(user.age)
// for (const key in user){
//     console.log(key);
//     console.log(user[key]);
// }

// const newUser = Object.create(user);
// console.log(newUser.tag);
// console.log(newUser.hasOwnProperty("tag"));

// const keys = Object.keys(user);
// console.log(keys);
// const values = Object.values(user);
// console.log(values);
// const entries = Object.entries(user);
// console.log(entries);


const books = [
    {
      title: "The Last Kingdom",
      author: "Bernard Cornwell",
      rating: 8.38,
    },
    {
      title: "На березі спокійних вод",
      author: "Роберт Шеклі",
      rating: 8.51,
    },
    {
      title: "Сон смішної людини",
      author: "Федір Достоєвський",
      rating: 7.75,
    },
  ];

//   const bookNames = [];
//   for (const book of books) {
//     bookNames.push(book.title)
//   }
//   console.log(bookNames);

  let totalRating = 0;
  for (const book of books) {
    totalRating += book.rating;
  }
  console.log(totalRating);

  const averageRating = (totalRating / books.length).toFixed(1);
console.log(averageRating);