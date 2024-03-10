# Sudan_interactive_map

a small project i made for fun :)

## HOW TO RUN

you can directly open `index.html` or using live server extension on vscode

states data are saved in `state.json`, in order for the endpoints to work you need to use
[json-server](https://www.npmjs.com/package/json-server) <br />
you can use it directly by running :<br />
`npx json-server --watch ./state.json --port 3000`<br />
or install it by running :<br />
`npm install -g json-server`<br />
and then use it <br />
`json-server --watch states.json --port 3000`
