// Description
//   A Hubot script that list gists or get a single gist
//
// Dependencies:
//   "hubot-arm": "^0.2.1",
//   "hubot-request-arm": "^0.2.1"
//
// Configuration:
//   None
//
// Commands:
//   hubot gist - list gists or get a single gist
//
// Author:
//   bouzuya <m@bouzuya.net>
//
module.exports = function(robot) {
  var format, rpad;
  require('hubot-arm')(robot);
  rpad = function(s, l) {
    while (s.length < l) {
      s += ' ';
    }
    return s;
  };
  format = function(body) {
    var filtered, gist, gists, key, message, width;
    if (Array.isArray(body)) {
      gists = body;
      filtered = gists.filter(function(item, i) {
        return i < 10;
      });
      width = filtered.reduce((function(w, i) {
        return Math.max(i.html_url.length, w);
      }), 0);
      return message = filtered.map(function(g) {
        return rpad(g.html_url, width) + ' ' + g.description;
      }).join('\n');
    } else {
      gist = body;
      key = Object.keys(gist.files)[0];
      return gist.files[key].content;
    }
  };
  return robot.respond(/gist\s+(\S+)(?:\s+(\S+))?\s*$/i, function(res) {
    var id, match, url, user;
    user = res.match[1];
    id = res.match[2];
    url = id != null ? (match = id.match(/^https:\/\/gist.github.com\/(.+)$/), id = match != null ? match[1] : id, "https://api.github.com/gists/" + id) : "https://api.github.com/users/" + user + "/gists";
    return res.robot.arm('request')({
      method: 'GET',
      url: url,
      json: true,
      headers: {
        'User-Agent': 'hubot-gist'
      }
    }).then(function(r) {
      return res.send(format(r.body));
    });
  });
};
