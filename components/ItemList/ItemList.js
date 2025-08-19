import styled from "styled-components";
import ItemListStyles from './ItemList.styles';

const Wrapper = styled.table`${ItemListStyles.wrapper}`;
const Category = styled.span`${ItemListStyles.category}`;
const Column = styled.td`${ItemListStyles.column}`;

const ItemList = (items) => {
    const listItems = items.items;
    console.log(items.items);
    return (
        <Wrapper>
            <tbody>
                {
                    listItems.map((item) => (
                        <tr key={item.category}>
                            <Column><Category>{item.category}</Category></Column>
                            <Column>{item.name}</Column>
                        </tr>
                    ))
                }

            </tbody>
        </Wrapper>
    );
}

export default ItemList;