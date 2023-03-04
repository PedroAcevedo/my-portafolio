import Image from "next/image";
import styled from "styled-components";
import JobCardStyles from './JobCard.styles';
import JobDescription from './JobDescription/JobDescription';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Column = styled.div`${JobCardStyles.col}`;
const Row = styled.div`${JobCardStyles.row}`;
const Wrapper = styled.div`${JobCardStyles.wrapper}`;


const JobCard = ({ job }) => {
    return (
        <Wrapper>
            <Row>
                <Column>
                    <Carousel showThumbs={false} showIndicators={true} showStatus={false} autoPlay infiniteLoop>
                        {
                            job.screenshoots.map((screenshoot) => (
                                <div key={screenshoot.width}>
                                    <Image src={screenshoot.image} alt={job.role} width={screenshoot.width} height={screenshoot.height} layout="intrinsic" />
                                </div>)
                            )
                        }
                    </Carousel>
                </Column>
                <Column>
                    <JobDescription {...job} />
                </Column>
            </Row>
        </Wrapper>
    );
}

export default JobCard;