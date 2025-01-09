import React, {useEffect, useState} from 'react';
import LaptopCard from '../../components/Laptop/LaptopCard'
import SearchBar from '../../components/SearchBar';
import { getAllLaptops, deleteLaptop } from '../../services/LaptopService';
import { useNavigate } from 'react-router-dom';

function LaptopListPage(){
    const [laptops, setLaptops] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    useEffect(() =>{
        getAllLaptops().then(setLaptops);
    }, []);

    const handleDelete = (id) => {
        deleteLaptop(id).then(() =>{
            setLaptops(laptops.filter((lapt) => lapt.id !== id));
        });
    };

    const handleEdit = (id) => {
        console.log("Edit laptop with ID: ", id);
        //Redirec la pagina de editare
        navigate(`/laptops/edit/${id}`);
    };

    const handleAdd = (id) => {
        console.log("Add laptop: ", id);
        //redirec la pagina de editare
        navigate(`/laptops/add`);
    };

    const filteredLaptops = laptops.filter((lapt) =>
        Object.values(lapt).some((value) =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    const handleBackToHome =() =>{
        navigate('/')
    };

    return(
        <div>
            <button onClick={handleBackToHome}>Intoarce-te la Home</button>
            <h1>Laptop List</h1>
            <button onClick={handleAdd}>Adauga Laptop</button>
            <SearchBar onSearch={setSearchTerm}/>
            {filteredLaptops.map((lapt) => (
                <LaptopCard
                    key={lapt.id}
                    laptop={lapt}
                    onDelete={handleDelete}
                    onEdit={handleEdit}
                />
            ))}
        </div>
    );

}

export default LaptopListPage;