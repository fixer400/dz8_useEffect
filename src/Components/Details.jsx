import { useState } from "react"
import { useEffect } from "react"

function Details(props) {
  let data = props.info
  const [cardDetails , setDetails] = useState('loading')

  useEffect(() => {
      const ac = new AbortController()
      setDetails('loading')
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${data.id}.json`, {signal: ac.signal})
      .then(response => response.json())
      .then(data => setDetails(data))
      return () => {
        ac.abort()
      }
  
  }, [data.id])

  return(
    
    <div>
      {(cardDetails === 'loading'
      ? 
      <div>loading</div> 
      : 
      <div>
        <img alt="" src={cardDetails.avatar + '?img=' + cardDetails.id}/>
        <p>{cardDetails.name}</p>
        <p>{cardDetails.details.city}</p>
        <p>{cardDetails.details.company}</p>
        <p>{cardDetails.details.position}</p>
      </div>)}
    </div>
  )
}

export default Details