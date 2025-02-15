import { useEffect } from 'react';
import { useDispatch, useSelector } from '../../hooks';
import { WS_ORDERS_PERSONAL_START, WS_ORDERS_PERSONAL_CLOSED } from '../../services/actions/orders-personal';
import styles from './profile-orders.module.css';
import Loader from '../../components/loader/loader';
import OrdersList from '../../components/orders-list/orders-list';
import { Snackbar } from "@material-ui/core";

const ProfileOrders = () => {
    
    const dispatch = useDispatch();
    const { wsConnected, error, message } = useSelector(
        (state) => state.ordersPersonal
      );

    useEffect(() => {
        dispatch({ type: WS_ORDERS_PERSONAL_START, url: "wss://norma.nomoreparties.space/orders", auth: true});
        return () => {
            dispatch({ type: WS_ORDERS_PERSONAL_CLOSED });
        };
    }, [dispatch]);

    return (
        <div className={styles.container}>
            <Snackbar open={!!error} message="Приозошла ошибка" />
            {!wsConnected && <Loader />}
            {wsConnected && !error && message && (
                <OrdersList orders={message} isPersonal={true} />
            )}
        </div>
    );
}

export default ProfileOrders;