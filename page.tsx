import Image from "next/image";


export default function Home () {
  return (
    <div className = "Container">
      <div  className = "childContainer">
        <h1>Introduction</h1>
        <p> I am Bisma Saleem, a front-end developer focused on creating user-friendly websites with HTML, CSS, and JavaScript.</p>
      </div>
      <div className="imageContainer"> 
        <img
         src="/images/myImage.png" alt="girlImage"
        width={500}
        />
      </div>
    </div>
  )
}
