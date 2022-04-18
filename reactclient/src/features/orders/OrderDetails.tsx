import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { BasketItem } from "../../app/models/basket";
import { Order } from "../../app/models/order";
import BasketSummary from "../basket/BasketSummary";
import BasketTable from "../basket/BasketTable";

interface Props {
	order: Order;
	setSelectedOrder: (id: number) => void;
}

export default function OrderDetails({ order, setSelectedOrder }: Props) {
	const subtotal =
		order.orderItems.reduce((sum, item) => sum + item.quantity * item.price, 0) ?? 0;

	return (
		<>
			<Box display="flex" justifyContent="space-between">
				<Typography sx={{ p: 2 }} gutterBottom variant="h4">
					Order#: #10-3103-{order.id}
				</Typography>
				<Button
					onClick={() => setSelectedOrder(0)}
					sx={{ m: 2 }}
					size="medium"
					variant="contained"
				>
					Back to orders
				</Button>
			</Box>
			<BasketTable items={order.orderItems as BasketItem[]} isBasket={false} />
			<Grid container>
				<Grid item xs={6} />
				<Grid item xs={6}>
					<BasketSummary subtotal={subtotal} />
				</Grid>
			</Grid>
			<Box display="flex" justifyContent="space-between">
				<Typography sx={{ p: 2 }} gutterBottom variant="h5">
					Order status: {order.orderStatus}
				</Typography>
			</Box>
		</>
	);
}