const StandardConfigs = require("@mendix/pluggable-widgets-tools/configs/webpack.native.config");
// set any custom webpack configs here
module.exports = StandardConfigs.map(config => ({
    ...config,
    externals: [
        ...(config.externals != null ? config.externals : []),
        { "react-native-youtube": "@widget/react-native-youtube" }
    ]
}));
