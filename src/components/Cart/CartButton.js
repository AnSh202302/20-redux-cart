import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";

import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const totalCartQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(uiActions.toogle());
  }

  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartQuantity}</span>
    </button>
  );
};

export default CartButton;
