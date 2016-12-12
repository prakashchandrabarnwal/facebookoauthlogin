module.exports = {
	entry: "./client/index.jsx",
    output: {
    	path:'./client/',
        filename: "bundle.js"
    },
    module:{
        loaders:[
            {
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      loader: 'babel',
      query: {
        presets: ['es2015',"react","stage-1"]
      }
    },
	 { test: /\.css$/, loader: "style-loader!css-loader" }
	
        ]
    }
}