import React from 'react';
import styled from 'styled-components';

//Icons: boxicons-logos

import { Html5 } from '@styled-icons/boxicons-logos/Html5';
import { Css3 } from '@styled-icons/boxicons-logos/Css3';
import { Javascript } from '@styled-icons/boxicons-logos/Javascript';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';
import { Redux } from '@styled-icons/boxicons-logos/Redux';
import { Typescript } from '@styled-icons/simple-icons/Typescript';
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs';
import { Mongodb } from '@styled-icons/simple-icons/Mongodb';
import { Express } from '@styled-icons/simple-icons/Express';

const htmlIcon = styled(Html5)`
    height: 1em;
    width: 1em;
    color: #fdbc3d;
`;

const cssIcon = styled(Css3)`
    height: 1em;
    width: 1em;
    color: #fdbc3d;
`;

const javascriptIcon = styled(Javascript)`
    height: 1em;
    width: 1em;
    color: #fdbc3d;
`;

const reactIcon = styled(ReactLogo)`
    height: 1em;
    width: 1em;
    color: #fdbc3d;
`;

const reduxIcon = styled(Redux)`
    height: 1em;
    width: 1em;
    color: #fdbc3d;
`;

const typescriptIcon = styled(Typescript)`
    height: 1em;
    width: 1em;
    color: #fdbc3d;
`;

const nodeIcon = styled(Nodejs)`
    height: 1em;
    width: 1em;
    color: #fdbc3d;
`;

const mongoIcon = styled(Mongodb)`
    height: 1em;
    width: 1em;
    color: #fdbc3d;
`;

const expressIcon = styled(Express)`
    height: 1em;
    width: 1em;
    color: #fdbc3d;
`;

//Styles:

const MainProjectContainer = styled.div`
    margin: 1em 0;
`;

const HeaderContainer = styled.div`
    margin: 1em 0;
    text-align: left;
`;

const MainHeader = styled.h2`
    font-family: 'Nunito', sans-serif;
    font-size: 1.3em;
    font-weight: 700;
    color: #ffffff;
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
`;

const DescContainer = styled.div``;

const DescText = styled.p`
    font-family: 'Nunito', sans-serif;
    font-size: 0.9em;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
`;

const ImgContainer = styled.div`
    margin: 1em 0;
`;

const ImgItem = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 1em;
    box-shadow: rgba(13, 56, 72, 1) 1px 5px 8px;
`;

const BuildToolsContainer = styled.div``;

//This type could also be interface, use interface if need to export for extension. Interface are better used for prop handling in react. Types are better used for functions and complex types...
//Question mark indicates an optional component...
//string[] is an array of a certain type. If denotated [string] that means one string argument in array.
interface ProjectItemProps {
    header: string;
    desc: string;
    image: string;
    buildTools?: string[];
}

//Destructure the header type from type or interface, JSX.Element is an annotated return type. This causes an error to be raised if another type is return accidentally. Leaving out JSX.Element results in an inferred return type.

const ProjectItem = ({
    header,
    desc,
    image,
    buildTools,
}: ProjectItemProps): JSX.Element => {
    return (
        <MainProjectContainer>
            <HeaderContainer>
                <MainHeader>{header}</MainHeader>
            </HeaderContainer>
            <DescContainer>
                <DescText>{desc}</DescText>
            </DescContainer>
            <ImgContainer>
                <ImgItem src={image} />
            </ImgContainer>
        </MainProjectContainer>
    );
};

/*
    Image details:
    
    -For Mobile: 500px x 500px

*/

export default ProjectItem;
