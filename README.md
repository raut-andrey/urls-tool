# urls-tool
----
A little script that will help you work with the url `path` / `params` / `hash` without reloading the page.

## Installing
----
Using npm:
```
$ npm install urls-tool
```

Using yarn:
```
$ yarn add urls-tool
```

## Example
----
#### Easily get or change url pathname.
```
import Url from "urls-tool";

const { pathname } = Url;
// Variable `pathname` will be have the pathname value in string.

Url.pathname = "your path name";
// Pathname will be changed.

```
#### Effortlessly get or set (just one or all at once) params
```
import Url from "urls-tool";

const { params } = Url;
// Variable `params` will be have the object with all params in shape `{ "paramsName": "paramsValue" }`.

const {
  array, // Array of all params. [{ name: "paramsName", value: "paramsValue" }]
  object, // The same object as in the previous method 
  string // String of params without "?".
} = Url.getParams();

Url.params = ["paramsName", "paramsValue"];
// Use to set only one params item. Also it will be removed in the absence or FALSE value of "paramsValue".

Url.params = { "paramsName": "paramsValue" };
// Use to set all params at once. All params will be cleared in case of an empty object.
```
#### No problem get or set the hash
```
import Url from "urls-tool";

const { hash } = Url;
// Variable `hash` will be have the hash value in string without "#".

Url.pathname = "your path name";
// Hash will be changed. And you don't need to add "#"
```
## License
----
ISC