import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, IconButton } from '@mui/material';
import { ShoppingBasket, Close } from '@mui/icons-material';
import React from 'react';
import { Divider } from '@material-ui/core';
import basketStyles from './basket_style.module.scss'

const Basket = () => {

    const {
        cartOpen,
        order = [],
        removeFromOrder
    } = props;

    return (
        <Drawer
            anchor="right"
            open={cartOpen}
            onClose={closeCart}
        >
             <List sx={{width: '400px'}}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Cart" />
                </ListItem>
                <Divider />

                {!order.length ? (
                    <ListItem>Cart is empty!</ListItem>
                ) : (
                    <>
                    {order.map((item) => (
                        <BasketItem key={item.name} removeFromOrder={removeFromOrder} {...item} />
                    ))}
                    <Divider />
                    <ListItem>
                        <Typography sx={{fontWeight: 700}}>
                        Total cost:{' '}
                            {order.reduce((acc, item) => {
                            return acc + item.price * item.quantity;
                            }, 0)}{' '}
                            $.
                        </Typography>
                    </ListItem>
                    </>
                )}

            </List>
        </Drawer>
    )
}

export default Basket