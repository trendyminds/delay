# ⏱ Delay
A promise-based setTimeout so you can await for a duration before proceeding

## Install
```sh
npm i @trendyminds/delay
```

## Usage
```js
import delay from "@trendyminds/delay";

(async () => {
  console.log("Hello");

  // wait 2 seconds until the next command
  await delay(2000);

  console.log("world");
})();
```
