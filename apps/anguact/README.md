# Multi-file with multiple nested components (React root component)

## DOM structure

```
#App            Top level container
  MainPage           Angular component
    LazyFive         React component
      Seven     Angular component
        Six    React component
```

## Running it

```sh
git clone git@github.com:bcherny/angular2react-demos.git
cd angular2react-demos/multi-file
yarn
yarn run build
yarn run start
# open https://localhost:9000 in a browser
```
