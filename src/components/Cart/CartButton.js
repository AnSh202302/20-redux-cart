import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux";

import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(uiActions.toogle());
  }

  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
