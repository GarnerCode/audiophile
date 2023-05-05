export interface Product {
    id: number,
    slug: string,
    name: string,
    image: ProductImages,
    category: string,
    categoryImage: ProductImages,
    new: boolean,
    price: number,
    description: string,
    features: string,
    includes: ProductInclusions[],
    gallery: ProductGallery,
    others: OtherProducts[],
}

export interface ProductInclusions {
    quantity: number,
    item: string,
}

export interface ProductGallery {
    first: ProductImages,
    second: ProductImages,
    third: ProductImages,
}

export interface OtherProducts {
    slug: string,
    name: string,
    image: ProductImages,
}

export interface ProductImages {
    mobile: string,
    tablet: string,
    desktop: string,
}

export interface FeaturedProduct {
    id: number,
    name: string,
    description: string,
    image: ProductImages,
}