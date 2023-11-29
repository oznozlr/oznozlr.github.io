import { MetadataRoute } from 'next'
import directus from '@/lib/directus';
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const baseURL = process.env.NEXT_PUBLIC_SITE_URL as string;

    //Get Post

    const posts = await directus.items("post").readByQuery({
        fields:["slug","date_updated"],
      });

      const postLinks=posts?.data?.map((post) => {
        return [
            {
                url: `${baseURL}/en/blog/${post.slug}`,
                lastModified: new Date(post.date_updated),
            },
            {
                url: `${baseURL}/tr/blog/${post.slug}`,
                lastModified: new Date(post.date_updated),
            },
            {
                url: `${baseURL}/blog/${post.slug}`,
                lastModified: new Date(post.date_updated),
            }

        ];
    });


    //Get Categories

    const categories = await directus.items("category").readByQuery({
        fields:["slug","date_updated"],
      });

      const categoryLinks = categories?.data?.map((category) =>{
        return [
            {
                url: `${baseURL}/en/${category.slug}`,
                lastModified: new Date(),
            },
            {
                url: `${baseURL}/tr/${category.slug}`,
                lastModified: new Date(),
            },
            {
                url: `${baseURL}/${category.slug}`,
                lastModified: new Date(),
            },
        ];
      });

      const dynamicLinks = postLinks?.concat(categoryLinks ?? []).flat() ?? [];

  return [
    {
      url: baseURL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseURL}/en`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseURL}/tr`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
    ...dynamicLinks,
  ];
}