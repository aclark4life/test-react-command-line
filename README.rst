test-react-command-line
================================================================================

In which I learn how to transpile.

Install
-------

::

    ┌[alexclark@alexclarks-Air] [/dev/ttys000] [main ⚡] 
    └[~/Developer/test-react-command-line]> make install
    /Library/Developer/CommandLineTools/usr/bin/make npm-install
    npm install

    added 184 packages, and audited 185 packages in 735ms

    58 packages are looking for funding
      run `npm fund` for details

    found 0 vulnerabilities
    git add package-lock.json


Build (transpile)
-----------------

::

    ┌[alexclark@alexclarks-Air] [/dev/ttys000] [main ⚡] 
    └[~/Developer/test-react-command-line]> make build
    npm run babel

    > test-react-command-line@1.0.0 babel
    > node_modules/.bin/babel src -d dist --presets @babel/preset-react

    Successfully compiled 1 file with Babel (56ms).


Serve (run ``node`` on the transpiled component)
------------------------------------------------

::

    ┌[alexclark@alexclarks-Air] [/dev/ttys000] [main ⚡] 
    └[~/Developer/test-react-command-line]> make serve
    node run start
    {
      '$$typeof': Symbol(react.element),
      type: 'div',
      key: null,
      ref: null,
      props: { children: 'Hello, world!' },
      _owner: null,
      _store: {}
    }
