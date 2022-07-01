import { useState } from "react";
import { AddCategory, GifGrid } from './components';
const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch']);
    const onAddCategory = (NewCategory)=>{
        
        if(categories.includes(NewCategory)) return;
        setCategories([
            ...categories,
            NewCategory
        ])
        
    }
    return ( <>
        <h1>GIF EXPERT APP</h1>
        <AddCategory 
            onNewCategory={onAddCategory}
        />
        
       
        { categories.map( (category) => (
            <GifGrid 
                key={ category }
                category={ category }
            />
        ))}
        
    </> );
}
 
export default GifExpertApp;