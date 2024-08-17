import Image from "next/image";
import styled from "styled-components";
import PublicationCardStyles from './PublicationCard.styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Column = styled.div`${PublicationCardStyles.col}`;
const Row = styled.div`${PublicationCardStyles.row}`;
const URL = styled.a`${PublicationCardStyles.url}`;
const Wrapper = styled.div`${PublicationCardStyles.wrapper}`;
const Title = styled.div`${PublicationCardStyles.title}`;
const Thumbnail = styled.div`${PublicationCardStyles.thumbnail}`;


const PublicationCard = ({ publication }) => {
    return (
        <Wrapper>
            <Row>
                <Thumbnail>
                    <Image src={publication.thumbnail} alt={'img'} width={255} height={144} />
                </Thumbnail>
                <Column>
                        <Title>{publication.title}</Title>
                        <p>{publication.authors}</p>
                        <p>{publication.description}</p>
                        {publication.pdf != "" && <URL href={publication.pdf} target="_blank">PDF</URL>}
                        {publication.doi != "" && <URL href={publication.doi} target="_blank">DOI</URL>}
                </Column>
            </Row>
        </Wrapper>
    );
}

export default PublicationCard;