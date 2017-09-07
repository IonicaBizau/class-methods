## Documentation

You can see below the API reference of this module.

### `classMethods(input, options)`
Get the methods of a JavaScript class.

#### Params

- **Class** `input`: The class you want to get the methods of.
- **Object** `options`: An object containing the following fields:
 - `deep` (Boolean): If `false` the parent classes will not be iterated.
 - `includeStatic` (Boolean): If `true`, the static methods will be included too.

#### Return
- **Array** The class methods.

