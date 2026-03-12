export async function fetchGraphQLOgolne(query, variables) {
  const response = await fetch(
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clnjy77g74kpg01ue0l6kbpnf/master',
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    }
  )
  const { data } = await response.json()

  return data
}

export async function fetchGraphQLFilm(query, variables) {
  const response = await fetch(
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clov734v4292h01updp6fd3sk/master',
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    }
  )
  const { data } = await response.json()

  return data
}

export async function fetchGraphQLAktualnosci(query, variables) {
  const response = await fetch(
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clmsvs4rz00kh01tafyoi2wxl/master',
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    }
  )
  const { data } = await response.json()

  return data
}
export async function fetchGraphQLOgloszenia(query, variables) {
  const response = await fetch(
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clmsvtfet00gt01uo1l9s3fen/master',
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    }
  )
  const { data } = await response.json()

  return data
}
export async function fetchGraphQLDokumenty(query, variables) {
  const response = await fetch(
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clmsvuz7s00nv01uo8v7jb4a9/master',
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    }
  )
  const { data } = await response.json()

  return data
}
export async function fetchGraphQLOrtherPosts(query, variables) {
  const response = await fetch(
    'https://eu-central-1-shared-euc1-02.cdn.hygraph.com/content/clhz48gql2gtd01uh6pdxdcrs/master',
    {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    }
  )
  const { data } = await response.json()

  return data
}
