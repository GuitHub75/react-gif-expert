import {useState} from 'react';
import { AddCategory , Gifrid } from './components';

export const GiftExpertApp = () => {
    
const [categories, setCategories] = useState(['Spider man']);

  const  onAddCategory = (newCategory) => {
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
       <div>GiftExpertAp</div>
       <AddCategory 
        onNewCategory={(value) =>onAddCategory(value)}
        />
           { 
           categories.map((categoria) =>(
             <Gifrid
              key={categoria } 
              category = {categoria}
               />
           ))
           }
    </>
 
  )
}
