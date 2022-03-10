import JobCard from '../JobCard/JobCard';
import ExperienceInfo from './data/experience.json';

const ExperienceList = () => {

    const experience = ExperienceInfo.experience;

    return (
        <>
            {
                experience.map((position) => (
                    <JobCard key={position.id} job={position} />
                ))
            }
        </>
    );
}

export default ExperienceList;