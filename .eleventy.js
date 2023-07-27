module.exports = function(eleventyConfig) {
    // Výchozí výstupní složka je: _site
    // Zkopírovat images/ do _site/images
    eleventyConfig.addPassthroughCopy("images");
    // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("css");

    eleventyConfig.addPassthroughCopy("icons");

    eleventyConfig.addPassthroughCopy("flavicon")

    eleventyConfig.addPassthroughCopy("scripts")

    // Přidání passthrough pro soubory .txt
    eleventyConfig.addPassthroughCopy("*.txt");

    // Přidání passthrough pro soubory .xml
    eleventyConfig.addPassthroughCopy("*.xml");

    eleventyConfig.setBrowserSyncConfig({
      callbacks: {
        ready: function (err, browserSync) {
          const mime = browserSync.mime;
          mime.define({
            'text/javascript': ['js']
          });
        }
      }
    });

    return async () => {
      let output = await esbuild.build({
        target: 'es2020',
        entryPoints: [path],
        minify: true,
        bundle: true,
        write: false,
      });
    
      return output.outputFiles[0].text;
    }


    return {
        // možné formáty šablon
        templateFormats: ["njk", "html", "md"],
        // jako šablonovací jazyk zvolíme Nunjucks`
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
      }    
   };