import Image from "next/image";
import styled from "styled-components";
import PublicationCardStyles from './PublicationCard.styles';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Column = styled.div`${PublicationCardStyles.col}`;
const Row = styled.div`${PublicationCardStyles.row}`;
const URL = styled.a`${PublicationCardStyles.url}`;
const Wrapper = styled.div`${PublicationCardStyles.wrapper}`;
const Title = styled.div`${PublicationCardStyles.title}`;
const Thumbnail = styled.img`${PublicationCardStyles.thumbnail}`;


const PublicationCard = ({ publication, index }) => {
    return (
        <Wrapper>
            <Row>
                <Thumbnail  src={publication.thumbnail} alt={'img'}/>
                <Column>
                        <Title>{index}. {publication.title}</Title>
                        <p>{publication.authors}</p>
                        <p>{publication.description}</p>
                        {publication.pdf != "" && <URL href={publication.pdf} target="_blank"> <FontAwesomeIcon icon={['fa-solid','fa-file-pdf']} /> PDF</URL>}
                        {publication.doi != "" && <URL href={publication.doi} target="_blank"> <FontAwesomeIcon icon={['fa-solid','fa-link']} /> DOI</URL>}
                        {publication.video != "" && <URL href={publication.video} target="_blank"> <FontAwesomeIcon icon={['fa-brands','fa-youtube']} /> VID </URL>}
                </Column>
            </Row>
        </Wrapper>
    );
}

export default PublicationCard;