import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: '763jxe6w',
    dataset: 'production',
    apiVersion: '2022-06-21',
    useCdn: true,
    token: 'sk4oFotsfGwOqlmEOC2vJOJCfzTZvoIgclDfxWGnChdstPoOQl9VmAoElpDjvprNtxTUEqZqx99qh7xiDSCukRRwLG3ZmXKs3Zaco4ks4phO8JzQwTsqBdpPDEqFlVhAGGMEeYxOG4NWBbxXpyFYdtq5vjzbw5GgSrBMbJkQ69tht2w55kUN'
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);