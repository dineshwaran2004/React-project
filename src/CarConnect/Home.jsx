import "./Home.css";
import car1 from "../assets/car1.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


export default function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("https://myfakeapi.com/api/cars/")
      .then((res) => res.json())
      .then((data) => {
        setCars(data.cars);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
     
      <nav className="navbar">
        <div className="navcontainer">
          <div className="logo">
            Car<span>Connect</span>
          </div>

          <ul className="navlinks">
            <li>
              <a href="#newrelease">New Release</a>
            </li>
            <li>
              <Link to="/licensed">Licensed</Link>
            </li>
          </ul>

        </div>
      </nav>

   
     
      <section id="newrelease">
    
        <div className="container">
         
          <h1 className="apistatus">This grid is generated using data fetched from an API call.</h1>
          
          <img className="carimg" src={car1} alt="Car 1" />
           
          
        </div>
        
<hr />
       
        <div className="grid">
          {cars.slice(0, 12).map((car) => (
            <div key={car.id} className="card">
              <img
                src="https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=400&q=60"
                alt="car"
              />

              <h3 >
                {car.car} ({car.car_model})
              </h3>

              <p>
                <strong>Year:</strong> {car.car_model_year}
              </p>

              <p>
                <strong>Price:</strong> {car.price}
              </p>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer">
  <div className="footer-content">
    <h2><span>Car</span>Connect</h2>
    <p>This React project was created by Dineshwaran.</p>
  </div>
</footer>

    </>
  );
}
