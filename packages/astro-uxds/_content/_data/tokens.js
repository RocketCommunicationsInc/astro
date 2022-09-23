const tokens = require("@astrouxds/design-tokens/dist/json/docs.json");
const lightTokens = require("@astrouxds/design-tokens/dist/json/docs-light.json");

module.exports = {
  reference: (theme, category) => {
    let themeTokens = tokens;
    if (theme === "light") {
      themeTokens = lightTokens;
    }

    themeTokens = themeTokens.filter(
      (token) => token.tokenLevel === "reference" && token.category === category
    );
    if (category === "spacing") {
      themeTokens = themeTokens.sort((a, b) => {
        return a.value.replace("rem", "") - b.value.replace("rem", "");
      });
    }
    return themeTokens;
  },
  component: (theme, componentName) => {
    let themeTokens = tokens;
    if (theme === "light") {
      if (componentName === "status-symbol") {
        console.log("whatup", componentName);
      }
      themeTokens = lightTokens;
    }
    return themeTokens.filter((token) => token.component === componentName);
  },
  system: (theme, category, property) => {
    let themeTokens = tokens;
    if (theme === "light") {
      themeTokens = lightTokens;
    }
    return themeTokens.filter((token) => {
      return (
        token.tokenLevel === "system" &&
        token.category === category &&
        token.property === property
      );
    });
  },
  findByName: (name) => {
    return tokens.find(token => token.name === name)
  },
  lookupProperty: (category, property = null) => {
    if (category === "boxShadow") {
      return "shadow";
    }

    if (category === "borderRadius") {
      return "radius";
    }

    if (property === "fill" || property === "icon") {
      return "background";
    }

    // TODO fix in transformer
    if (property === "on-dark" || property === "on-light") {
      return "border-width";
    }

    return property;
  },
};
