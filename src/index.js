import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];



function App(){




    return <div className="container">

        <Header></Header>
        <Menu>
        </Menu>
        <Footer></Footer>
        </div>
}


function Header(){

    return <header className="header">

        <h1>
            Universal Pizza
        </h1>

        <br/>

    </header>
}


function Menu() {

    return <div className="menu">
        <h2>Our menu</h2>

        <ul className="pizzas">

            {pizzaData.map((pizza_map)=>(
                <Pizza_element PizzaObject = {pizza_map} key={pizza_map.name} />
            ))}

        </ul>
    </div>
}

function Pizza_element({PizzaObject}){



    return <li className={`pizza ${PizzaObject.soldOut ? "sold-out": ""}`}>


        <img src={PizzaObject.photoName}/>

        <div>

            <h3>
                {PizzaObject.name}
            </h3>
            <p>
                {PizzaObject.ingredients}
            </p>


            <span>
                {PizzaObject.soldOut ? "Sold out": PizzaObject.price}
            </span>


        </div>

    </li>
}


function Footer() {


    const Hour = new Date().getHours()
    const openHour = 9;
    const closeHour = 22;

    const isOpen = Hour >= openHour && Hour <=  closeHour;




    return <footer className="footer">

        {isOpen ? (
            <div className="order">
                <p>
                    We're open till the end of universe order and <b> now you can order a intergalactic pizza </b>
                </p>

                <button className="btn">Order now </button>
            </div>
        ) : <p> We are close till the end of universe JK we are just taking a nap and will be back at {openHour}:00 </p>}

    </footer>
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
    <App/>
    </React.StrictMode>
);


