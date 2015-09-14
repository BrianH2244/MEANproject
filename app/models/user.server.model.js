var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = new Schema ({
    firstName: String,
    lastName: String,
    email: {
      type: String,
      index: true,
      match: /.+\@.+\..+/
    },
    username: {
      type: String,
      trim: true,
      unique: true,
      required: true
    },
    password: {
      type: String,
      validate: [
        function (password) {
          return password.length >= 6;
        },
        'Password should be longer'
      ]
    },
    created: {
      type: Date,
      default: Date.now
    },
    role: {
      type: String,
      enum: ['Admin', 'Owner', 'User']
    },
    website: {
      type: String,
      get: function(url) {
        if (!url) {
          return url;
        } else {
          if (url.indecOf('http://') !== 0  && url.indexOf('http://') !==0) {
            url = 'http://' + url;
          }

          return url;
          }
      }
    },

});

var PostSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    author: {
      type: Schema.ObjectId,
      ref: 'User'
    }
});

mongoose.model('Post', PostSchema);

UserSchema.virtual('fullName').get(function() {
    return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
  var splitName = fullName.split(' ');
  this.firstName = splitName[0] || '';
  this.lastName = splitName[1] || '';
});

UserSchema.pre('save', function(next) {
    if (...) {
      next()
    } else {
      next(new Error('An Error Occured'));
    }
});

UserSchema.post('save', function(next) {
    if(this.isNew) {
      console.log('A new user was created.');
    } else {
      console.log('A user updated his details.');
    }
});

Post.find().populate('author').exec(function(err, posts) {
    
});

UserSchema.set('toJSON', { getters: true, virtuals:true });

mongoose.model ('User', UserSchema);