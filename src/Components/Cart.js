import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';
import { FaTrash } from 'react-icons/fa';
const Cart = ({ cartItem, removeItem, buyNow }) => {
    let amount = 0;
    cartItem.forEach(res => amount += parseFloat(res.productPrice));
    return(
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {
                    cartItem.map(res => (
                        <ListGroupItem key={res.id}>
                            <Row>
                                <Col>
                                    <img height={80} src={res.tinyImage} alt="icon" />
                                </Col>
                                <Col className="text-center">
                                    <div className="text-primary">
                                        { res.productName }
                                    </div>
                                    <span className="mr-2">
                                        Price - ₹{res.productPrice}
                                    </span>
                                    <Button
                                        color="danger"
                                        onClick={() => removeItem(res)}
                                    >
                                        <FaTrash />
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    ))
                }
            </ListGroup>
            {
                cartItem.length > 0 ? (
                    <Card className="text-center mt-3">
                        <CardHeader>
                            Grand Total
                        </CardHeader>
                        <CardBody>
                            Your amount for {cartItem.length} product is <strong>₹{amount}</strong>
                        </CardBody>
                        <CardFooter>
                            <Button
                                color="success"
                                onClick={buyNow}
                            >
                                Checkout <strong>₹{amount}</strong>
                            </Button>
                        </CardFooter>
                    </Card>
                ) : (
                    <h3 className="text-warning">Cart is Empty</h3>
                )
            }
        </Container>
    );
};

export default Cart;