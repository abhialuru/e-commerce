import { clsx, type ClassValue } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
  title = 'GoShop - Trendy, high-quality fashion wear',
  description = 'Discover a wide range of trendy, high-quality fashion designed for every occasion.',
  image = '/thumbnail.png',
  icons = '/favicon.ico',
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