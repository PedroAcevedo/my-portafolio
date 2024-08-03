import Image from "next/image";
import { useState } from "react";
import styled from "styled-components";
import AboutStyles from './About.styles';
import Social from "../Intro/Social/Social";


const Column = styled.div`${AboutStyles.col}`;
const ColumnText = styled(Column)`${AboutStyles.colLeft}`;
const Row = styled.div`${AboutStyles.row}`;
const Wrapper = styled.div`${AboutStyles.wrapper}`;
const Profile = styled.div`${AboutStyles.profile}`;
const Photo = styled(Image)`${AboutStyles.photo}`;
const Link = styled.a`${AboutStyles.link}`;

const About = () => {

    const [photoColor, setPhotoColor] = useState("");
    const profileSize = 250;
    const randonBackground = () => {
        return "#" + Math.floor(Math.random() * 16777215).toString(16);
    }

    return (
        <Wrapper>
            <Row>
                <ColumnText>
                    <p>
                    Hey! My name is <strong>Pedro Acevedo</strong>. I am a Ph.D. candidate in the Department of Computer Graphics Technology at Purdue University. I work under the advice of Dr. Christos Mousas and am also a Unity developer at <Link href="https://www.ecshowcase.com/" target="_blank">Envision Center</Link>.
                    </p>
                    <p>
                    I hold Master&apos;s and Bachelor&apos;s degrees in Software Engineering from Universidad del Norte, Colombia. My research interests include Virtual Reality, Games, Human-computer interaction, Procedural Content Generation, and Wireless Sensor Networks. In my Ph.D., I focus on designing and developing immersive learning experiences using VR technology.
                    </p>
                    <p>
                    If you have any questions, please contact me at <Link href="mailto:pedrodavidacevedo@live.com" target="_blank">paceved@purdue.edu</Link>
                    </p>
                </ColumnText>
                <Column>
                    <Profile
                        onMouseEnter={() => setPhotoColor(randonBackground())}
                        background={photoColor}
                        size={profileSize}
                    >
                        <Photo
                            src="/me.jpg"
                            alt="Me"
                            width={profileSize}
                            height={profileSize}
                        />
                    </Profile>
                    <Social></Social>
                </Column>
            </Row>
        </Wrapper>
    );
}

export default About;