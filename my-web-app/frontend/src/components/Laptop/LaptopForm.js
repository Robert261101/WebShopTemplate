import React,{useState} from "react";
import '../../styles/CalculatorForm.css'

function LaptopForm({initialData = {}, onSubmit}){
    const [formData, setFormData] = useState({
            model: '',
            producator:'',
            pret: '',
            dimensiuneDiagonala: '',
            memorieRAM: '',
            sistemOperare: '',
            tipStocare: '',
            ...initialData,
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            onSubmit(formData);
        };
    
        return (
            <form className="laptop-form" onSubmit={handleSubmit}>
                <input type="text" name="model" value={formData.model} onChange={handleChange} placeholder="Model" required />
                <input type="text" name="producator" value={formData.producator} onChange={handleChange} placeholder="Producator" required />
                <input type="number" name="pret" value={formData.pret} onChange={handleChange} placeholder="Preț" required />
                <input type="number" name="dimensiuneDiagonala" value={formData.dimensiuneDiagonala} onChange={handleChange} placeholder="Dimensiune Diagonala" required />
                <input type="text" name="tipProcesor" value={formData.tipProcesor} onChange={handleChange} placeholder="Tip Procesor" required />
                <input type="text" name="memorieRAM" value={formData.memorieRAM} onChange={handleChange} placeholder="Memorie RAM" required />
                <input type="text" name="sistemOperare" value={formData.sistemOperare} onChange={handleChange} placeholder="Sistem Operare" required />
                <input type="text" name="tipStocare" value={formData.tipStocare} onChange={handleChange} placeholder="Tip Stocare" required />
                <button type="submit">Submit</button>
            </form>
        );
    }
    
    export default LaptopForm;