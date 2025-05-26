import Image from "next/image";
import styled from "styled-components";
import SocialStyles from './Social.styles';
import 'academicons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled.div`${SocialStyles.wrapper}`;
const InfiniteDiv = styled.div`${SocialStyles.infiniteDiv}`;
const ControlDiv = styled.div`${SocialStyles.controlDiv}`;
const SocialList = styled.ul`${SocialStyles.socialList}`;
const Media = styled.li`${SocialStyles.media}`;
const Link = styled.a`${SocialStyles.link}`;

const Social = () => {
    return (
        <Wrapper>
            <SocialList>
                <Media>
                    <Link href="mailto:pedrodavidacevedo@live.com" target="_blank"><FontAwesomeIcon icon={['fa','envelope']} /></Link>
                </Media>
                <Media>
                    <Link href="https://www.linkedin.com/in/pedroacevedo242497/" target="_blank"><FontAwesomeIcon icon={['fa-brands','linkedin']} /></Link>
                </Media>
                <Media>
                    <Link href="https://github.com/PedroAcevedo" target="_blank"><FontAwesomeIcon icon={['fa-brands','github']} /></Link>
                </Media>
                <Media>
                    <Link href="https://orcid.org/0000-0003-0814-7675" target="_blank">
                        <span><i className={"ai ai-orcid"}></i></span></Link>
                </Media>
                <Media>
                    <Link href="https://scholar.google.com/citations?user=vv1sb0IAAAAJ&hl" target="_blank">
                        <span><i className={"ai ai-google-scholar"}></i></span></Link>
                </Media>
                <Media>
                    <Link href="https://www.scopus.com/authid/detail.uri?authorId=57224197715" target="_blank">
                        <span><i className={"ai ai-scopus"}></i></span></Link>
                </Media>
                <Media>
                    <Link href="https://www.researchgate.net/profile/Pedro-Acevedo-4?ev=hdr_xprf" target="_blank">
                        <span><i className={"ai ai-researchgate"}></i></span></Link>
                </Media>
                <Media>
                    <Link href="https://dblp.org/pid/190/5390-1.html" target="_blank">
                        <span><i className={"ai ai-dblp"}></i></span></Link>
                </Media>
            </SocialList>
        </Wrapper>
    );
}

export default Social;