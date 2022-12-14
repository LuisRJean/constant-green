import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

import blockContent from "./blockContent";
import category from "./category";
import product from "./product";
import vendor from "./vendor";
import banner from "./banner";
import productVariant from "./productVariant";

import localeString from "./locale/String";
import localeText from "./locale/Text";
import localeBlockContent from "./locale/BlockContent";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    product,
    vendor,
    category,
    banner,
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant,
  ]),
});
