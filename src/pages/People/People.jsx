import {data, people} from "./data.js";

// id, name, nickName?, images?small?url

export const Names = () => {
  return (
    <div className="container">
      <div className="row">
        {data.map((e) => {
          return <div className="col-6 text-capitalize">
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
            <img src={img? img : "https://placehold.co/50x50"} width="50" height="50" className="d-inline rounded-5" />
            <p className="d-inline-block w-min text-capitalize">{e.name}</p>
          </div>
          </div>
          <div className="col-8 text-start text-capitalize">
            Nickname: {e.nickName? e.nickName: "None"}
          </div>
        </div>
      })}
    </div>
  )
}