module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy('./src/assets/*/**');
    eleventyConfig.addPassthroughCopy("./src/css");
    
    return {
        dir: {
            input: "src",
            output: "public",
            layouts: "_includes/_layouts",
            partials: "_includes/_partials"
        }
    }
}