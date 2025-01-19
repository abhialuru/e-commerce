import { Metadata } from "next";

export function constructMetadata({
    title = 'GoShop - Trendy, high-quality fashion wear',
    description = 'Discover a wide range of trendy, high-quality fashion designed for every occasion.',
    image = '/thumbnail.png',
    icons = '/fevicon.ico',
  }:{title?: string, description?: string, image?: string, icons?:string}={}): Metadata {
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images : [{url : image}]
      },
      icons
    } 
  }