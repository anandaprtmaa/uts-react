import { useState } from "react";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Header from "./components/header";

export default function App() {
  const [shoes, setShoes] = useState([
    {
      id: 1,
      name: "Appel Vision Pro",
      gambar: "/apple_vision_pro.jpg",
      harga: 500000,
    },
    {
      id: 2,
      name: "Apple Watch Sereies 8",
      gambar: "/apple_watch_series_8.jpg",
      harga: 578000,
    },
    {
      id: 3,
      name: "Ipad Pro",
      gambar: "/ipad_pro.jpg",
      harga: 750000,
    },
    {
      id: 4,
      name: "Iphone 14",
      gambar: "/iphone_14.jpg",
      harga: 970000,
    },
    {
      id: 5,
      name: "Iphone 14 Pro",
      gambar: "/iphone_14_pro.jpg",
      harga: 650000,
    },
    {
      id: 6,
      name: "Macbook Air 15",
      gambar: "/macbook_air_15.jpg",
      harga: 430000,
    },
  ]);

  const [keyword, Setkeyword] = useState("");
  const [minHarga, setMinHarga] = useState (0); 
  const [maxHarga, setMaxHarga] = useState (Infinity);
  const [sortBy, setSortBy] = useState ("id")
  const [sortOrder,setSortOrder] = useState ("asc")
  const [newShoes,setNewShoes] = useState ()
  const [IncreamentId,setIncreamentId] = useState (shoes.length)
  const [editedShoe, setEditedShoe] = useState ()

  
  return (
    <>
      <Header />
      <main>
        <header>
          {" "}
          <label>
            Search :
            <input
              type="text"
              onChange={(e) => Setkeyword(e.target.value.toLocaleLowerCase())}
            />
          </label>
          <section>
          Harga :
          <label>
            Minimal :
            <input type="number" onChange={(e) => setMinHarga (parseInt(e.target.value))}/>
          </label>  
          
          <label>
            Maksimal :
            <input type="number" onChange={(e) => setMaxHarga (parseInt(e.target.value) || Infinity )}/>
          </label>  
          </section>
          <section>
            Urutkan :
            <select onChange={(e) => setSortBy (e.target.value)}>
              <option value="id">Normal</option>
              <option value="name">Nama</option>
              <option value="harga">Harga</option>
            </select>
            <select onChange={(e) => setSortOrder (e.target.value)}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </section>
          <button onClick={() => setNewShoes({ id : IncreamentId})}>Tambah</button>
        </header>
        <main>
          {shoes
          .toSorted((a,b) => {
            if(sortOrder === "asc") {
              return a[sortBy] < b[sortBy] ? -1 : 1 
            } else {
              return a [sortBy] > b[sortBy] ? -1 : 1 
            }
          })
            .filter((shoe) => shoe.name.toLowerCase().includes(keyword) && shoe.harga >= minHarga && shoe.harga <= maxHarga )
            .map((shoe) => (
              <Product key={shoe.id} {...shoe} setEditedShoe={setEditedShoe} setShoes={setShoes} shoes={shoes}/>
            ))}
        </main>
        <footer></footer>
      </main>
      <Footer />
      {newShoes && (
        <form className="dialog card" onSubmit={(e) => {
          e.preventDefault();
          setShoes([...shoes,newShoes])
          setNewShoes();
          setIncreamentId(IncreamentId + 1 );
        }}>
          <label>
            Id:
            <input type="text" value={newShoes.id} readOnly />
          </label>
          <label>
            Name:
          <input type="text" onChange={(e) => setNewShoes({...newShoes,name : e.target.value})}/>
          </label>
          <label>
            Gambar :
          <input type="file" onChange={(e) => setNewShoes ({...newShoes,gambar:e.target.value.slice(11)})}/>  
          </label>
          <label>
            Harga :
          <input type="number" onChange={(e) => setNewShoes ({...newShoes,harga:parseInt(e.target.value)})}/>  
          </label>
          <label >
            Kategori :
            <select id="mySelect">
            
            <option value="1">Handphone</option>
            <option value="2">Macbook</option>
            <option value="1">iwatch</option>
            <option value="2">etc</option>
            </select>
          </label>
          <button type="reset" onClick={() => setNewShoes ()}>Cancel</button>
          <button>Save</button> 
          </form>
      )}
    {editedShoe && (<form className="dialog card" onSubmit={(e) => {
          e.preventDefault();
          setShoes(shoes.map((shoe) => shoe.id === editedShoe.id ? editedShoe : shoe));
          setEditedShoe();
        }}>
          <label>
            Id:
            <input type="text" value={editedShoe.id} readOnly />
          </label>
          <label>
            Name:
          <input type="text" value={editedShoe.name} onChange={(e) => setEditedShoe({...editedShoe,name : e.target.value})}/>
          </label>
          <label>
            Gambar :
          <input type="file"  onChange={(e) => setEditedShoe ({...editedShoe,gambar:e.target.value.slice(11)})}/>  
          </label>
          <label>
            Harga :
          <input type="number" value={editedShoe.harga} onChange={(e) => setEditedShoe ({...editedShoe,harga:parseInt(e.target.value)})}/>  
          </label>
          <button type="reset" onClick={() => setEditedShoe ()}>Cancel</button>
          <button>Save</button> 
          </form>
)}
    </>
  );
}
