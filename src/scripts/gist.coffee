# Description
#   A Hubot script that list gists or get a single gist
#
# Dependencies:
#   "hubot-arm": "^0.2.1",
#   "hubot-request-arm": "^0.2.1"
#
# Configuration:
#   None
#
# Commands:
#   hubot gist - list gists or get a single gist
#
# Author:
#   bouzuya <m@bouzuya.net>
#
module.exports = (robot) ->
  require('hubot-arm') robot

  rpad = (s, l) ->
    while s.length < l
      s += ' '
    s

  format = (body) ->
    if Array.isArray(body)
      gists = body
      filtered = gists.filter (item, i) -> i < 10
      width = filtered.reduce ((w, i) -> Math.max(i.html_url.length, w)), 0
      message = filtered.map (g) ->
        rpad(g.html_url, width) + ' ' + g.description
      .join '\n'
    else
      gist = body
      key = Object.keys(gist.files)[0]
      gist.files[key].content

  robot.respond /gist\s+(\S+)(?:\s+(\S+))?\s*$/i, (res) ->
    user = res.match[1]
    id = res.match[2]
    url = if id?
      match = id.match /^https:\/\/gist.github.com\/(.+)$/
      id = if match? then match[1] else id
      "https://api.github.com/gists/#{id}"
    else
      "https://api.github.com/users/#{user}/gists"

    res.robot.arm('request')
      method: 'GET'
      url: url
      json: true
      headers:
        'User-Agent': 'hubot-gist'
    .then (r) ->
      res.send format(r.body)
