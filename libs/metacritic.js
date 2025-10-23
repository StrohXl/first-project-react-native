export async function getAllAnimes() {
  const animes = "https://api.jikan.moe/v4/anime";

  const rawData = await fetch(animes);
  const json = await rawData.json();

  const { data } = json;

  return data.map((item) => {
    const { images, title, score, synopsis, year, mal_id } = item;

    const { webp } = images;

    return {
      id: mal_id,
      score,
      title,
      images: {
        image: webp.image_url,
        small: webp.small_image_url,
        large: webp.large_image_url,
      },
      synopsis,
      year,
    };
  });
}

export async function getAnimeDetails(slug) {
  const animeDetails = `https://api.jikan.moe/v4/anime/${slug}/full`;

  const rawData = await fetch(animeDetails);
  const json = await rawData.json();

  const { data } = json;

  const { images, title, score, synopsis, year, mal_id } = data;

  const { webp } = images;

  return {
    id: mal_id,
    score,
    title,
    images: {
      image: webp.image_url,
      small: webp.small_image_url,
      large: webp.large_image_url,
    },
    synopsis,
    year,
  };
}
