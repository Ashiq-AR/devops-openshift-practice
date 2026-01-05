# devops-openshift-practice

## Express Messages App

Simple Express server with a small messages API.

Install dependencies and run:

```bash
npm install
npm start
```

Endpoints:

- `GET /` - welcome text
- `GET /messages` - list all messages (JSON)
- `GET /messages/:id` - fetch a single message
- `POST /messages` - create a message (JSON body: `{ "text": "..." }`)

Files:

- [package.json](package.json)
- [index.js](index.js)
