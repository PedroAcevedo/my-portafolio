import Image from "next/image";
import styled from "styled-components";
import SocialStyles from './Social.styles';

const Wrapper = styled.div`${SocialStyles.wrapper}`;
const InfiniteDiv = styled.div`${SocialStyles.infiniteDiv}`;
const ControlDiv = styled.div`${SocialStyles.controlDiv}`;
const SocialList = styled.ul`${SocialStyles.socialList}`;
const Media = styled.li`${SocialStyles.media}`;
const Link = styled.a`${SocialStyles.link}`;

const Social = () => {
    return (
        <Wrapper>
            <InfiniteDiv>
                <ControlDiv>
                    <SocialList>
                        <Media>
                            <Image src="/email-svgrepo-com.svg" alt="item bullet" width={15} height={15} />
                            <Link href="mailto:pedrodavidacevedo@live.com" target="_blank">pedrodavidacevedo@live.com</Link>
                        </Media>
                        <Media>
                            <Image src="/linkedin-svgrepo-com.svg" alt="item bullet" width={15} height={15} />
                            <Link href="https://www.linkedin.com/in/pedroacevedo242497/" target="_blank">linkedin.com/in/pedroacevedo242497</Link>
                        </Media>
                    </SocialList>
                </ControlDiv>
                <ControlDiv>
                    <SocialList>
                        <Media>
                            <Image src="/github-svgrepo-com.svg" alt="item bullet" width={15} height={15} />
                            <Link href="https://github.com/PedroAcevedo" target="_blank">github.com/PedroAcevedo</Link>
                        </Media>
                        <Media>
                            <Image src="/orcid-svgrepo-com.svg" alt="item bullet" width={15} height={15} />
                            <Link href="https://orcid.org/0000-0003-0814-7675" target="_blank">orcid.org/0000-0003-0814-7675</Link>
                        </Media>
                    </SocialList>
                </ControlDiv>
            </InfiniteDiv>
        </Wrapper>
    );
}

export default Social;