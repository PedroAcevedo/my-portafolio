import PublicationCard from '../PublicationCard/PublicationCard';
import Publications from './data/publication.json';
import styled from "styled-components";
import PublicationListStyles from './PublicationList.styles';

const Wrapper = styled.div`${PublicationListStyles.wrapper}`;

const PublicationList = () => {

    const publications = Publications.publication;

    return (
        <Wrapper>
            {
                publications.map((publication, index) => (
                    <PublicationCard key={publication.id}  index={publication.id} publication={publication} />
                ))
            }
        </Wrapper>
    );
}

export default PublicationList;