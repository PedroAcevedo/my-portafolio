import Image from "next/image";
import styled from "styled-components";
import StudentListStyles from "./StudentList.styles";

const Wrapper = styled.div`${StudentListStyles.wrapper}`;
const Card = styled.article`${StudentListStyles.card}`;
const ImageFrame = styled.div`${StudentListStyles.imageFrame}`;
const Photo = styled(Image)`${StudentListStyles.photo}`;
const Placeholder = styled.div`${StudentListStyles.placeholder}`;
const Body = styled.div`${StudentListStyles.body}`;
const Name = styled.h6`${StudentListStyles.name}`;
const Details = styled.p`${StudentListStyles.details}`;

const StudentList = ({ students }) => {
  return (
    <Wrapper>
      {students.map((student) => (
        <Card key={student.id || student.name}>
          <ImageFrame>
            {student.photo ? (
              <Photo
                src={student.photo}
                alt={`${student.name} portrait`}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            ) : (
              <Placeholder aria-hidden="true" />
            )}
          </ImageFrame>
          <Body>
            <Name>{student.name}</Name>
            <Details>
              {student.major && <span>Major: {student.major}</span>}
              {student.minor && <span>Minor: {student.minor}</span>}
              {student.research && <span>Research: {student.research}</span>}
            </Details>
          </Body>
        </Card>
      ))}
    </Wrapper>
  );
};

export default StudentList;
