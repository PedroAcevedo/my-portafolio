import React, { useEffect } from 'react';
import { useIntersectionObserver } from '../utils/IntersectionObserver';

const MainSection = ({ children, sectionId, onIntersecting }: {
    children: React.ReactNode;
    sectionId: number;
    onIntersecting: (current: number, visible: boolean) => void;
}) => {

    const { isIntersecting, ref } = useIntersectionObserver({
        threshold: 0.20,
    })

    useEffect(() => {
        onIntersecting(sectionId, isIntersecting);
     }, [isIntersecting, onIntersecting, sectionId]);

    return (
        <div key={sectionId} ref={ref}>
            {children}
        </div>
    )
}

export default MainSection;
