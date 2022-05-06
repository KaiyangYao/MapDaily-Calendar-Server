# Map Daily Calendar Server



This is the proxy server for [MapDaily](https://github.com/KaiyangYao/MapDaily) project. It helps fetching the calendar data from Macalester website. It changes the response header `Access-Control-Allow-Origin` to `*` so that the response can be shared with website other than Macalester. This repo is deployed on the [Heroku](https://www.heroku.com) Cloud Platform.