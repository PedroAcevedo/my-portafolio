import styled from "styled-components";
import ItemListStyles from './ItemList.styles';

const Wrapper = styled.div`${ItemListStyles.wrapper}`;
const Row = styled.div`${ItemListStyles.row}`;
const Category = styled.span`${ItemListStyles.category}`;
const Column = styled.div`${ItemListStyles.column}`;

const ItemList = ({ items }) => {
    const listItems = items;
    return (
        <Wrapper>
            {
                listItems.map((item) => (
                    <Row key={item.category}>
                        <Column><Category>{item.category}</Category></Column>
                        <Column>{item.name}</Column>
                    </Row>
                ))
            }
        </Wrapper>
    );
}

export default ItemList;
