import React from 'react';
import { Card } from 'react-bootstrap';
import product from './product';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  const firstName = "Votre Prénom"; // Remplacez par votre prénom

  return (
    <div className="container">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
          {firstName && <Image image={product.image} />}
        </Card.Body>
      </Card>
      <p>Bonjour, {firstName ? firstName : "là"} !</p>
    </div>
  );
};

export default App;
