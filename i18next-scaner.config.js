const fs = require("fs");
const { crc32 } = require("crc");

const FN_KEY = "$I18N_KEY_";

module.exports = {
  input: [
    "src/**/*.{js,ts,vue}",
    // 不需要扫描的文件加!
    "!src/i18n/**",
    "!**/node_modules/**",
  ],
  output: "./", //输出目录
  options: {
    debug: true,
    func: false,
    trans: false,
    lngs: ["zh_CN", "en_US"],
    defaultLng: "zh",
    resource: {
      loadPath: "./src/lang/{{lng}}.json", //输入路径 (手动新建目录)
      savePath: "./src/lang/{{lng}}.json", //输出路径 (输出会根据输入路径内容自增, 不会覆盖已有的key)
      jsonIndent: 2,
      lineEnding: "\n",
    },
    removeUnusedKeys: false,
    nsSeparator: false, // namespace separator
    keySeparator: false, // key separator
    interpolation: {
      prefix: "{{",
      suffix: "}}",
    },
  },
  // 这里我们要实现将中文转换成crc格式, 通过crc格式key作为索引, 最终实现语言包的切换.
  transform: function customTransform(file, enc, done) {
    //自己通过该函数来加工key或value
    const parser = this.parser;
    const content = fs.readFileSync(file.path, enc);
    let newCode = content;
    // console.log("文件：", file.path);
    // console.log("zcxzx", parser);
    parser.parseFuncFromString(content, { list: ["t"] }, (key, options) => {
      if (String(key).includes(FN_KEY)) {
        return;
      }
      console.log("parser.parseFuncFromString:", key, options);
      options.defaultValue = key;
      let hashKey = `${FN_KEY}${crc32(key).toString(16)}`; // crc32转换格式

      newCode = String(newCode).replace(key, hashKey);

      parser.set(hashKey, options);
    });

    if (newCode != content)
      fs.writeFileSync(file.path, newCode, { encoding: "utf-8" });

    done();
  },
};