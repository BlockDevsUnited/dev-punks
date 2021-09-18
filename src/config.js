const description =
  "This is the description of your NFT project, remember to replace this";
const baseUri = "https://hashlips/nft";

const layerConfigurations = [
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Background" },
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
