# hubot-gist

A Hubot script that list gists or get a single gist.

![](http://img.f.hatena.ne.jp/images/fotolife/b/bouzuya/20140912/20140912000520.gif)

## Installation

    $ npm install git://github.com/bouzuya/hubot-gist.git

or

    $ # TAG is the package version you need.
    $ npm install 'git://github.com/bouzuya/hubot-gist.git#TAG'

## Example

    bouzuya> hubot help gist
      hubot> hubot gist - list gists or get a single gist

    bouzuya> hubot gist bouzuya
      Hubot> https://gist.github.com/6ad742d4fa554568ad70 description of gist
             https://gist.github.com/9944964              old gist

    bouzuya> hubot gist bouzuya https://gist.github.com/9944964
      Hubot> content of gist

    bouzuya> hubot gist bouzuya 9944964
      Hubot> content of gist

## Configuration

See [`src/scripts/gist.coffee`](src/scripts/gist.coffee).

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-gist
[travis-badge]: https://travis-ci.org/bouzuya/hubot-gist.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-gist
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-gist.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-gist
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-gist.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
