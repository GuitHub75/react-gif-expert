import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {
    
  const [inputValues, setInputValues] = useState("");

  const onInputChangue = ({ target }) => {
    setInputValues(target.value);
  };

  const onSubmitFunction = (event) => {
    event.preventDefault();
    if(inputValues.trim() .length<=1 )return;
    onNewCategory(inputValues.trim() ); 
    setInputValues('');
  };

  return (
    <form action=""  onSubmit={onSubmitFunction} >
      <input
        type="text"
        placeholder="Buscar"
        value={inputValues}
        onChange={onInputChangue}
      />
    </form>
  );
};
