module.exports = {
    "presets": [
        ["next/babel", {
            "preset-env": {
                "targets": "last 2 versions"
            }
        }]
    ],
    "env": {
        "production": {
            "plugins": [
            ]
        },
        "test": {
            "presets": [
                ["@babel/preset-env",
                    {
                        "targets": {
                            "node": true
                        }
                    }],
                "next/babel"
            ]
        }
    },
    "plugins": [
        ["@babel/proposal-class-properties"],
        ["module-resolver", {
            "alias": {
                "components": "./components/",
                "common": "./common/"
            }
        }],
        ["react-docgen"]
    ]
}
