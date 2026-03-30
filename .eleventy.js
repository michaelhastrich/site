module.exports = function(eleventyConfig) {

    eleventyConfig.addCollection("projects", (api) =>
        api.getFilteredByTag("projects").sort((a, b) => a.data.order - b.data.order)
    );

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