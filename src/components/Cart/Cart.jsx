import React from "react";
import s from "./cart.module.css";
import { Drawer, Button, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { openDrawer } from "../../store/authSlice";
import { deleteItem } from "../../store/authSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.auth.drawerOpen);
  const purchasedProduct = useSelector((state) => state.auth.cart);
  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={() => dispatch(openDrawer())}
        open={open}
      >
        {purchasedProduct.map((item, index) => {
          return (
            <div key={item.id} className={s.cart__container}>
              <Card
                title={item.title}
                extra={
                  <div className={s.product__cart_header}>
                    <p className={s.product__cart_header_category}>
                      {item.category}
                    </p>
                    <Button
                      danger
                      onClick={() => dispatch(deleteItem(item.id))}
                    >
                      delete
                    </Button>
                  </div>
                }
              >
                <p>{item.description}</p>
              </Card>
            </div>
          );
        })}
      </Drawer>
    </>
  );
};

export default Cart;
