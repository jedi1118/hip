# hip
hip test code
reactJS FE + PY BE,

inspired by: https://cloudflex.team/blog/building-web-applications-with-react-and-python/

idea is: use ajax to call PY BE(route/API), BE returns data in JSON form, and rendred by the React

use cgi-bin for py - it reads existing cvs file as data input for the react

1. run `npm start` for react app  it defaults to localhost:3000
2. run `py -m http.server -b 127.0.0.1 8080 --cgi` to start the cgi py
3. when user click Submit button, it calls to `http://localhost:8080/cgi-bin/q.py` for a new question/answer set