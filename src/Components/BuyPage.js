import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Axios from 'axios';
import { random, commerce, datatype } from 'faker';
import CardItem from './CardItem';

const apiKey = '563492ad6f91700001000001e900097e37b14e90b0ea0800c19b6fa1';
const url = 'https://api.pexels.com/v1/search?query=laptop&per_page=30&page=1';

const BuyPage = ({ addToCart }) => {
    
    const [product, setProduct] = useState([]);
    
    const fetchPhotos = async () => {
        const { data } = await Axios.get(url, {
            headers: {
                Authorization: apiKey
            }
        });
        const { photos } = data;
        const allProduct = photos.map(res => ({
            smallImage: res.src.medium,
            tinyImage: res.src.tiny,
            productName: random.word(),
            productPrice: commerce.price(),
            id: datatype.uuid()
        }));
        setProduct(allProduct);
    };
    useEffect(() => {
        fetchPhotos();
    }, []);

    return(
        <Container fluid>
            <h1 className="text-center text-success">
                Buy Page
            </h1>
            <Row>
                {
                    product.map(res => (
                        <Col md={4} key={res.id}>
                            <CardItem product={res} addToCart={addToCart} />
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default BuyPage;