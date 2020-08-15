const fs = require("fs");
const files = fs.readdirSync(__dirname + "/monsters");

function getJSON(name) {
  return JSON.stringify(
    {
      name,
      classification: "",
      physiology: {
        fire: "",
        water: "",
        thunder: "",
        ice: "",
        dragon: "",
        poison: "",
        sleep: "",
        paralysis: "",
        blast: "",
        stun: "",
      },
      biology: {
        roar: "",
        tail: {
          breakable: undefined,
          durability: {},
          severable: undefined,
        },
      },
      effects: {},
    },
    null,
    2
  );
}

for (let file of files) {
  const name = file.replace(".png", "");
  const fileName = file.replace(".png", ".json");
  const json = getJSON(name);

  fs.writeFileSync(`./data/${fileName}`, json, () => console.log(json));
}
