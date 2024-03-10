#Sudan_interactive_map

a small project i made for fun :)

## HOW TO RUN

you can directly open `index.html` or using live server extension on vscode

states data are saved in `state.json`, in order for the endpoints to work you meed to use
[json-server](https://www.npmjs.com/package/json-server)
you can use it directly by running :
`npx json-server --watch ./state.json --port 3000`
or install it by running :
`npm install -g json-server`
and then use it 
`json-server --watch states.json --port 3000`
