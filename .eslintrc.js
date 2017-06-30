module.exports = {
    "env": {
        "browser": false,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "airbnb-base",
    "rules": {
        // indentation
        "indent": ["error", 4],

        // semicolons
        "semi": ["off"],

        // no this in class method declaration
        "class-methods-use-this": "off",

        // curly braces http://eslint.org/docs/rules/curly
        "curly": "off",

        // tracing comma
        "comma-dangle": "off",

        // https://medium.freecodecamp.org/adding-some-air-to-the-airbnb-style-guide-3df40e31c57a
        // code arrangement matter
        "no-use-before-define": [ "error", { "functions": false } ],
        
        // keep it simple
        "complexity": [ "warn", 5 ],
        
        // react
        // "react/prefer-es6-class": 0,
        // "react/jsx-filename-extension": 0,
        // "react/jsx-curly-spacing": [ 2, "always" ],
        // "react/jsx-indent": [ 2, 4 ]
    },
    "plugins": [
        "import"
    ]
};