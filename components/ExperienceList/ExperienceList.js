import JobCard from '../JobCard/JobCard';
import ExperienceInfo from './data/experience.json';
import styled from "styled-components";
import ExperienceListStyles from './ExperienceList.styles';

const Wrapper = styled.div`${ExperienceListStyles.wrapper}`;

const ExperienceList = () => {

    const experience = ExperienceInfo.experience;

    return (
        <Wrapper>
            {
                experience.map((position) => (
                    <JobCard key={position.id} job={position} />
                ))
            }
        </Wrapper>
    );
}

export default ExperienceList;