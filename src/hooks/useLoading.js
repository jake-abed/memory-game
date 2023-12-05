import { useState } from 'react'

export default function useLoading(loadingState) {
  const [loading, setLoading] = useState(loadingState)

  return [loading, setLoading]
};
