import React from 'react';
import styled from '@emotion/styled';
import { useInView } from 'react-intersection-observer';

const TopDiv = styled.div`
    display: flex;
    height: 150vh;
    background-color: burlywood;
    font-size: 10rem;
`

const MidDiv = styled.div`
    display: flex;
    height: 100vh;
    background-color: forestgreen;
    font-size: 10rem;
`

const BottomDiv = styled.div`
    display: flex;
    height: 120vh;
    background-color: firebrick;
    font-size: 10rem;
`

const Floater = styled.div`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: forestgreen;
    padding: 2rem;
    font-size: 2rem;
`

export const ReactIntersectionObserver: React.FC = () => {
    const options = { threshold: 0 };
    const { ref, inView, entry } = useInView(options);
    console.log('entry', entry);

    return <div>
        <Floater>{inView ? 'In View' : 'Not In View'}</Floater>
        <TopDiv>
            Scroll Now
        </TopDiv>
        <MidDiv ref={ref}>
            Middle
        </MidDiv>
        <BottomDiv>
            End
        </BottomDiv>
    </div>
}
