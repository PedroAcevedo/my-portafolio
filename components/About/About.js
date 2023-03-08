import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import AboutStyles from './About.styles';

const Column = styled.div`${AboutStyles.col}`;
const Row = styled.div`${AboutStyles.row}`;
const Wrapper = styled.div`${AboutStyles.wrapper}`;
const Profile = styled.div`${AboutStyles.profile}`;
const Photo = styled(Image)`${AboutStyles.photo}`;

const About = () => {

    const [photoColor, setPhotoColor] = useState("");

    const randonBackground = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    return (
        <Wrapper>
            <Row>
                <Column>
                    <p>
                    Hello! My name is Pedro, and I am a passionate software developer and researcher.
                    My interest in software started in 2015 when I began my Computer Science degree in Colombia.
                    I am enthusiastic about the softwares potential to solve problems in real-life applications.
                    </p>
                    <p>
                    I am currently privileged to work at great companies and academic centers. 
                    My research interest is Virtual Reality, Games, Human-computer interaction, Procedural Content Generation, and Wireless Sensor Networks. 
                    Here is a list of technologies and languages that I have been working with recently:
                    </p>
                    <ul>
                        <li>
                            Unity (C#)
                        </li>
                        <li>
                            XR Interaction Toolkit
                        </li>
                        <li>
                            Oculus SDK
                        </li>
                        <li>
                            Python Scripting
                        </li>
                        <li>
                            OpenGL (C++)
                        </li>
                        <li>
                            MATLAB
                        </li>
                        <li>
                            JavaScript
                        </li>
                    </ul>
                </Column>
                <Column>
                    <Profile
                        onMouseEnter={() => setPhotoColor(randonBackground())}
                        background={photoColor}
                    >
                        <Photo
                            src="/me.jpg"
                            alt="Me"
                            width={336}
                            height={336}
                        />
                    </Profile>
                </Column>
            </Row>
        </Wrapper>
    );
}

export default About;