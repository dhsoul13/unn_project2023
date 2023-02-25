import { specifications } from 'helpers/specifications';
import React, { useState } from 'react';

const Specifications: React.FC<{
  property: any;
}> = ({ property = {} }) => {
  const [state, setState] = useState(2);
  const [showAll, setShowAll] = useState(false);
  const arrayFromProperty = Object.entries(property);

  const handlerClickButton = () => {
    if (!showAll) {
      setState(arrayFromProperty.length);
      setShowAll((prev) => !prev);
    } else {
      setState(2);
      setShowAll((prev) => !prev);
    }
  };

  return (
    <section className="specifications">
      <div className="specifications__contianer container">
        <div className="specifications__content">
          <section>
            <header>
              <h2 className="specifications__title title">Технические характеристики:</h2>
            </header>
            <div className="specifications__all">
              <table className="specifications__table">
                <tbody>
                  {arrayFromProperty.slice(0, state).map((elem: any, index) => (
                    <tr className="specifications__elem" key={index}>
                      <td className="specifications__key">
                        {specifications.find((el: any) => el.name === elem[0])?.nameRus}
                      </td>
                      <td className="specifications__proporty">{elem[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="specifications__buttons">
                <button
                  onClick={() => {
                    handlerClickButton();
                  }}>
                  {showAll ? 'Закрыть характеристику' : 'Открыть характеристику'}
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
