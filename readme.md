# Faicon
[![Software License][ico-license]](license.md)

Font awesome icon is react component.

## Install

#### With Yarn
`yarn add faicon`

#### With npm
`npm i --save faicon`

## Use
After installing faicon, react, and webpack:
```javascript
import React from 'react';
import { Faicon } from 'faicon';

class App extends React.Component {
  render() {
    return (
      <Faicon name="user"/>
    );
  };
}
```
#### Attributes
* `name="user"` - name of icon without "fa-"
* `size="2"` - size of icon without "fa-" & "x", default "lg"
* `spin` or `pulse` - Set animate for icon
* `border`
* `fixed` - Set fixed size for icon
* `fh` or `fv` - Set flip for icon
* `rotate="90"`
* `inverse`
* `addClass="my-cool-class"`

#### Stack
Inversing user in square:
```javascript
import React from 'react';
import { Stack } from 'faicon';

class App extends React.Component {
  render() {
    return (
      <Stack name1="user" name2="square-o" inverse1/>
    );
  };
}
```

## Change log

Please see [CHANGELOG](changelog.md) for more information what has changed recently.

## License

The Apache License Version 2.0. Please see [License File](license.md) for more information.

[ico-license]: https://img.shields.io/badge/license-Apache%202-brightgreen.svg?style=flat-square
