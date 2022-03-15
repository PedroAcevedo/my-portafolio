import Image from "next/image";
import styled from "styled-components";
import JobDescriptionStyles from "./JobDescription.styles";

const Bullet = styled.div`${JobDescriptionStyles.bullet}`;
const ItemList = styled.ul`${JobDescriptionStyles.itemList}`;
const Item = styled.li`${JobDescriptionStyles.item}`;
const Label = styled.div`${JobDescriptionStyles.label}`;
const Title = styled.p`${JobDescriptionStyles.title}`;


const JobDescription = ({ role, description }) => {
    return (
        <>
            <Title>{role}</Title>
            <ItemList>
                {description.map((functions) =>
                    (<Item key={functions.length}>
                        <Label>
                            <Bullet>
                                <Image src="/bullet.svg" alt="item bullet" width={15} height={15} />
                            </Bullet>
                            {functions}
                        </Label>
                    </Item>)
                    )
                }
            </ItemList>
        </>
    );
}

export default JobDescription;