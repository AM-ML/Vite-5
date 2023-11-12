import {data, people} from "./data.js";

// id, name, nickName?, images?small?url

export const Names = () => {
  return (
    <div className="container">
      <div className="row">
        {data.map((e) => {
          return <div className="col-6">
            Name: {e.name}
          </div>
        })}
      </div>
    </div>
  )
}

export const People = () => {
  
  return (
    <div className="container">
      {people.map((e) => {
        const img = e.images && e.images[0] && e.images[0].small && e.images[0].small.url;
        
        return <div className="row shadow-lg rounded-3 p-5 my-3" key={e.id}>
          <div className="col-4 text-start">
          <div className="text-start d-inline-block">
            {img? <img src={img} width="50" height="50" className="d-inline" /> : null}
            <p className="d-inline-block w-min">{e.name}</p>
          </div>
          </div>
          {e.nickName? <div className="col-8 text-start">
            Nickname: {e.nickName}
          </div>: null}
        </div>
      })}
    </div>
  )
}