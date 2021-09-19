const description =
  "A DEV-PUNKS project by BlockDevsUnited NFT-COURSE";
const baseUri = "https://gateway.pinata.cloud/ipfs/";

const layerConfigurations = [
  {
    growEditionSizeTo: 500,
    layersOrder: [
      { name: "Background" },
      { name: "TshirtBackground" },
      { name: "Head" },
      { name: "HeadAndShoulders" },
      { name: "HttpStatusCodes"},
      { name: "Skin" },
      { name: "Facial" },
      { name: "Hair" },
    ],
  },
];

const format = {
  width: 512,
  height: 512,
};

const background = {
  generate: true,
  brightness: "80%",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
};
