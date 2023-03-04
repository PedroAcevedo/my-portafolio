import JobCard from '../JobCard/JobCard';
import ExperienceInfo from './data/experience.json';
import styled from "styled-components";
import ProjectListStyles from './ProjectList.styles';

const Wrapper = styled.div`${ProjectListStyles.wrapper}`;

const ProjectList = () => {

    const experience = ExperienceInfo.projects;

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

export default ProjectList;