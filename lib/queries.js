import {
  fetchGraphQLOgolne,
  fetchGraphQLAktualnosci,
  fetchGraphQLOgloszenia,
  fetchGraphQLDokumenty,
  fetchGraphQLFilm,
  fetchGraphQLOrtherPosts,
} from './fetches'

export async function getTransmissionPosts() {
  try {
    const { transmissions } = await fetchGraphQLAktualnosci(`
    query getTransmissionPosts {
      transmissions(first: 1000, orderBy: date_DESC) {
        id
        title
        slug
        date
        mainImage { url }
        content { html }
      }
    }
    `)

    return transmissions
  } catch (error) {
    console.error('Error fetching transmissions: ', error)
  }
}
export async function getTransmissionsPostBySlug(params) {
  try {
    const { transmissions } = await fetchGraphQLAktualnosci(
      `
        query getPostBySlug($slug: String!) {
        transmissions(where: { slug: $slug }) {
          title
          slug
          date
          mainImage { url }
          content { html }
          images(first: 100) { id url }
          files(first: 100) {
            id
            url
            fileName
          }
        }
      }
    `,
      { slug: params.slug }
    )
    return transmissions
  } catch (error) {
    console.error('Error fetching transmissions: ', error)
  }
}
export async function getAnnouncements() {
  try {
    const { announcements } = await fetchGraphQLOgloszenia(`
    query getAnnouncements {
      announcements(first: 1000, orderBy: date_DESC) {
        id
        title
        slug
        date
        mainImage { url }
        content { html }
      }
    }
    `)

    return announcements
  } catch (error) {
    console.error('Error fetching announcements: ', error)
  }
}
export async function getAnnouncementsPostBySlug(params) {
  try {
    const { announcements } = await fetchGraphQLOgloszenia(
      `
        query getPostBySlug($slug: String!) {
          announcements(where: { slug: $slug }) {
          title
          slug
          date
          mainImage { url }
          content { html }
          images(first: 100) { id url }
          files(first: 100) {
            id
            url
            fileName
          }
        }
      }
    `,
      { slug: params.slug }
    )
    return announcements
  } catch (error) {
    console.error('Error fetching announcements: ', error)
  }
}
export async function getDocumentsPosts() {
  try {
    const { documents } = await fetchGraphQLDokumenty(`
    query getDocumentsPosts {
      documents(first: 1000, orderBy: order_ASC) {
        id
        title
        file { url fileName size }
        order
      }
    }
    `)

    return documents
  } catch (error) {
    console.error('Error fetching documents: ', error)
  }
}
export async function getForParentsPosts() {
  try {
    const { forParents } = await fetchGraphQLDokumenty(`
    query getforParentsPosts {
      forParents(first: 1000) {
        id
        title
        file { url fileName size }
      }
    }
    `)

    return forParents
  } catch (error) {
    console.error('Error fetching forParents: ', error)
  }
}
export async function getCadrePosts() {
  try {
    const { cadres } = await fetchGraphQLOgolne(`
    query getCadrePosts {
      cadres(first: 1000) {
        id
        title
        description
        section
      }
    }
    `)

    return cadres
  } catch (error) {
    console.error('Error fetching cadres: ', error)
  }
}
export async function getDirectionsPosts() {
  try {
    const { directions } = await fetchGraphQLOgolne(`
    query getDirectionsPosts {
      directions(first: 1000) {
        id
        school
        title
        slug
        mainImage { url }
      }
    }
    `)

    return directions
  } catch (error) {
    console.error('Error fetching directions: ', error)
  }
}
export async function getDirectionsPostBySlug(params) {
  try {
    const { directions } = await fetchGraphQLOrtherPosts(
      `
        query getDirectionsPostBySlug($slug: String!) {
          directions(where: { slug: $slug }) {
          title
          slug
          mainImage { url }
          content { html }
          files(first: 100) {
            id
            url
            fileName
          }
          images(first: 100) { id url }
        }
      }
    `,
      { slug: params.slug }
    )
    return directions
  } catch (error) {
    console.error('Error fetching directions: ', error)
  }
}
export async function getOtherPostBySlug(params) {
  try {
    const { otherPosts } = await fetchGraphQLOrtherPosts(
      `
        query getOtherPostBySlug($slug: String!) {
          otherPosts(where: { slug: $slug }) {
            id
            title
            slug
            mainImage { url }
            content { html }
            files(first: 100) {
              id
              url
              fileName
            }
            images(first: 100) { id url }
        }
      }
    `,
      { slug: params.slug }
    )
    return otherPosts
  } catch (error) {
    console.error('Error fetching otherPosts: ', error)
  }
}
export async function getCompetitionsPosts() {
  try {
    const { competitions } = await fetchGraphQLOgolne(`
    query getCompetitionsPosts {
      competitions(first: 1000) {
        id
        title
        slug
        mainImage { url }
      }
    }
    `)

    return competitions
  } catch (error) {
    console.error('Error fetching competitions: ', error)
  }
}
export async function getCompetitionBySlug(params) {
  try {
    const { competition } = await fetchGraphQLOgolne(
      `
        query getCompetitionBySlug($slug: String!) {
          competition(where: { slug: $slug }) {
            id
            title
            slug
            mainImage { url }
            content { html }
            files(first: 100) {
              id
              url
              fileName
            }
            images(first: 100) { id url }
        }
      }
    `,
      { slug: params.slug }
    )
    return competition
  } catch (error) {
    console.error('Error fetching competition: ', error)
  }
}
export async function getMovies() {
  try {
    const { movies } = await fetchGraphQLFilm(`
      query getMovies {
        movies(first: 1) {
          movie { url }
        }
      }
    `)

    return movies
  } catch (error) {
    console.error('Error fetching movies: ', error)
  }
}
