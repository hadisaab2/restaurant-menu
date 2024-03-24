import React, { useState } from 'react'
import { Container, MenuWrapper } from './styles';
import Header from './Header';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Theme2() {
    const [activeCategory, setactiveCategory] = useState(0);
    const {restaurantName}=useParams();
    const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
    const [animationchange, setanimationchange] = useState(false);

    return (
      <Container>
        <MenuWrapper >
          
              <Header
                categories={restaurant.categories}
                activeCategory={activeCategory}
                setactiveCategory={setactiveCategory}
                animationchange={animationchange}
                setanimationchange={setanimationchange}
              />
        </MenuWrapper>

      </Container>
    )
}
