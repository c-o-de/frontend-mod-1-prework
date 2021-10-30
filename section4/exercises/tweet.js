/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/





  class Tweet {
    constructor(author, content, timeStamp, numberOfLikes, comments) {
      this.author = author;
      this.content = content;
      this.timeStamp = timeStamp;
      this.numberOfLikes = numberOfLikes;
      this.comments = comments;
    }
    changeNumberOfLikes() {
      this.numberOfLikes++
    }
    addComments(commentNew) {
      this.comments.push(commentNew)
    }
  };

  var tweet1 = new Tweet('Mike', 'this is ridiculous', '23Jun2022 17:04', 44422, 'you\'re awesome');

  var tweet2 = new Tweet('John Amos', 'Do Only Good Every Day', '13Dec2019 23:22', 435, ['To The Moon', ' FTW', 'cool beans']);

  var tweet3 = new Tweet('CNN', 'The Asteroid Will Hit the Earth Today', '01Jan2012 00:01', 5843057340, ['Goodbye World!', 'It was fun', 'Thanks for all the fish']);

  console.log(tweet1);
  tweet1.changeNumberOfLikes();
  console.log(tweet1);
  console.log(tweet2);
  tweet2.addComments('I want my money back');
  console.log(tweet2);
  console.log(tweet3);
  tweet3.addComments('Is this real?');
  console.log(tweet3);
  tweet3.changeNumberOfLikes();
  console.log(tweet3);
