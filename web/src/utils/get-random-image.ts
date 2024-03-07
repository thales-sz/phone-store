const images: string[] = ['https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14-202209?wid=364&hei=333&fmt=p-jpg&qlt=95&.v=1693086290654', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone15pro-digitalmat-gallery-3-202309?wid=364&hei=333&fmt=png-alpha&.v=1693081542150', 'https://images.samsung.com/is/image/samsung/p6pim/br/2401/gallery/br-galaxy-s24-s928-sm-s928bztuzto-thumb-539293007?$216_216_PNG$', "https://d1r6yjixh9u0er.cloudfront.net/Custom/Content/Products/52/35/5235_smartphone-xiaomi-redmi-note-13-5g-br-6-67-120hz-8-256gb-prin_m21_638422213059756812.png", 'https://d1r6yjixh9u0er.cloudfront.net/Custom/Content/Products/40/25/4025_smartphone-poco-c40-tela-667-4gb64gb-c00348_z1_637955647293935846.png', 'https://brmotorolanew.vtexassets.com/arquivos/ids/166412-1200-auto?v=638406672625430000&width=1200&height=auto&aspect=true'];

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};