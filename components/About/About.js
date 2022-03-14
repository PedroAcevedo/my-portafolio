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
                        My interest in software started in 2015 when I began my Computer Science degree,
                        where I can improve my coding skills to point over problem-solving through software.
                    </p>
                    <p>
                        Currently, I have the privilege of working at great companies and academic centers.
                        As research, my interest is focused on Virtual Reality, Games, Human-computer interactions, and Wireless Sensor Networks.
                        Here is a list of technologies and languages that I have been working with recently:
                    </p>
                    <ul>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            Unity (C#)
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            GraphQL
                        </li>
                        <li>
                            Python
                        </li>
                        <li>
                            VueJS
                        </li>
                        <li>
                            OpenGL
                        </li>
                    </ul>
                </Column>
                <Column>
                    <Profile>
                        <Photo
                            onMouseEnter={() => setPhotoColor(randonBackground())}
                            src="/me.png"
                            alt="Github Logo"
                            width={336}
                            height={336}
                            background={photoColor}
                        />
                    </Profile>
                </Column>
            </Row>
        </Wrapper>
    );
}

export default About;