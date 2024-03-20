import { useState } from "react";
import { useForm } from "../hooks/UseForm";
import { GenerarMatriz } from "./GenerarMatriz";

export const FormMatriz = ({ data }) => {
  const [Result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const { handleInputChange, reset, values } = useForm();

 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    if (values === undefined) return alert("Todos los campos son requeridos");
    for (let i = 0; i < data.filas; i++) {
      for (let j = 0; j < data.columnas; j++) {
        let valueA = parseFloat(values[`A:[${i}][${j}]`]);
        let valueB = parseFloat(values[`B:[${i}][${j}]`]);
          if (Number.isNaN(valueA)||Number.isNaN(valueB)) {
            setError(true);
            alert("Todos los campos son requeridos");
            return;
            
          }
        mResult[i][j] =
          Number(values[`A:[${i}][${j}]`]) + Number(values[`B:[${i}][${j}]`]);
      }
    }
    setError(null);
    setResult(mResult);
    console.log(mResult);
  };
  const matriz = Array.from({ length: data.filas }, () =>
    Array.from({ length: data.columnas })
  );
  const matriz2 = Array.from({ length: data.filas }, () =>
    Array.from({ length: data.columnas })
  );
  const mResult = Array.from({ length: data.filas }, () =>
    Array.from({ length: data.columnas })
  );

  return (
    <div className="container mt-2 ">
      <form onSubmit={handleSubmit} className="row">
        <div className="col-6 border">
          <h3 className="text-center">Matriz A</h3>
          <GenerarMatriz
            matriz={matriz}
            handleInputChange={handleInputChange}
            mName={"A"}
          />
        </div>
        <div className="col-6 border">
          <h3 className="text-center">Matriz B</h3>
          <GenerarMatriz
            matriz={matriz2}
            handleInputChange={handleInputChange}
            mName={"B"}
          />
        </div>
        <div className="col-12 text-center mt-2">
          <button className="btn btn-primary">Calcular</button>
        </div>
      </form>

      <div>
        
        {!error && Result &&(
          <div className="container border">
          <h3>Resultado</h3>
        {  Result?.map((fila, i) => (
            <div className="row " key={i}>
              {fila.map((columna, j) => (
                <div className="col" key={j}>
                  <input
                    className="form-control"
                    type="number"
                    name={`result:[${i}][${j}]`}
                    value={columna}
                    readOnly
                  />
                </div>
              ))}
            </div>
          ))}
          </div>
          )}
            
      </div>
    </div>
  );
};
