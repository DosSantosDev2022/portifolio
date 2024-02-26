export const fetchHygraph = async <T> (query : string) : Promise<T> => {
  const response = await fetch(process.env.HYGRAPH_API || '', {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`
    },
    body :JSON.stringify({query}),
    cache: 'no-cache'
  })

  const { data } = await  response.json()

  return data
}