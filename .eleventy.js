const { DateTime } = require("luxon");
const emojiReadTime = require("@11tyrocks/eleventy-plugin-emoji-readtime");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/pages");
  eleventyConfig.addPassthroughCopy("./src/script");
  eleventyConfig.addPassthroughCopy("./src/admin");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj)
      .setLocale("en")
      .toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY);
  });

  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addPlugin(emojiReadTime, {
    emoji: "📕",
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
