import Image from "next/image";
import styled from "styled-components";
import SocialStyles from './Social.styles';

const Wrapper = styled.div`${SocialStyles.wrapper}`;
const InfiniteDiv = styled.div`${SocialStyles.infiniteDiv}`;
const ControlDiv = styled.div`${SocialStyles.controlDiv}`;
const SocialList = styled.ul`${SocialStyles.socialList}`;
const Media = styled.li`${SocialStyles.media}`;
const Link = styled.a`${SocialStyles.link}`;

const iconSize = 20;

const Social = () => {
    return (
        <Wrapper>
            <SocialList>
                <Media>
                    <Link href="mailto:pedrodavidacevedo@live.com" target="_blank"><Image src="/email-svgrepo-com.svg" alt="item bullet" width={iconSize} height={iconSize} /></Link>
                </Media>
                <Media>
                    <Link href="https://www.linkedin.com/in/pedroacevedo242497/" target="_blank"><Image src="/linkedin-svgrepo-com.svg" alt="item bullet" width={iconSize} height={iconSize} /></Link>
                </Media>
                <Media>
                    <Link href="https://github.com/PedroAcevedo" target="_blank"><Image src="/github-svgrepo-com.svg" alt="item bullet" width={iconSize} height={iconSize} /></Link>
                </Media>
                <Media>
                    <Link href="https://orcid.org/0000-0003-0814-7675" target="_blank">
                        <Image src="/orcid-svgrepo-com.svg" alt="item bullet" width={iconSize} height={iconSize} /></Link>
                </Media>
                <Media>
                    <Link href="https://scholar.google.com/citations?user=vv1sb0IAAAAJ&hl" target="_blank">
                        <Image src="/googlescholar-svgrepo-com.svg" alt="item bullet" width={iconSize} height={iconSize} /></Link>
                </Media>
                <Media>
                    <Link href="https://www.scopus.com/authid/detail.uri?authorId=57224197715" target="_blank">
                        <Image src="/scopus-svgrepo-com.svg" alt="item bullet" width={iconSize} height={iconSize} /></Link>
                </Media>
                <Media>
                    <Link href="https://www.researchgate.net/profile/Pedro-Acevedo-4?ev=hdr_xprf" target="_blank">
                        <Image src="/RG_Logo.02_Black.White.png" alt="item bullet" width={iconSize} height={iconSize} /></Link>
                </Media>
                                <Media>
                    <Link href="https://dblp.org/pid/190/5390-1.html" target="_blank">
                        <Image src="/dpbl-icon.png" alt="item bullet" width={iconSize} height={iconSize} /></Link>
                </Media>
            </SocialList>
        </Wrapper>
    );
}

export default Social;