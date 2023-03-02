## Readme luxspace-html

### Install Tailwind via Cli

```sh
$ npm install -D tailwindcss
$ npx tailwindcss init -p

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],,
  theme: {
    extend: {},
  },
  plugins: [],
}

# add in main.css
@tailwind base;
@tailwind components;
@tailwind utilities;

# run this cli
$ npx tailwindcss -i ./src/css/main.css -o ./dist/output.css --watch
```
