import React from 'react'
import { Delete, Edit, EditDeleteIcons, Table, Td, Th } from './styles';

export default function TableRestaurants({restaurants,setSelectedIdForAction,setIsPopupOpen,handleEdit}) {
    return (
        <Table>
            <thead>
                <tr>
                    <Th>User name</Th>
                    <Th>Restaurant name</Th>
                    <Th>Phone</Th>
                </tr>
            </thead>
            <tbody>
                {restaurants.map((restaurant) => {
                    return (
                        <tr>
                            <Td>{restaurant.username}</Td>
                            <Td>{restaurant.restaurantName}</Td>
                            <Td>{restaurant.phone_number}</Td>
                            <Td>
                                <EditDeleteIcons>
                                    <Edit onClick={() => handleEdit(restaurant)} />
                                    <Delete
                                        onClick={() => {
                                            setSelectedIdForAction(restaurant.restaurant_id);
                                            setIsPopupOpen(true);
                                        }}
                                    />
                                </EditDeleteIcons>
                            </Td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>

    )
}
