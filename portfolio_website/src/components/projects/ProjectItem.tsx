import React from 'react';
import styled from 'styled-components';

//Styles:

const MainProjectContainer = styled.div`
    margin: 1em 0;
`;

const HeaderContainer = styled.div`
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
    font-size: 1em;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
`;

//This type could also be interface, use interface if need to export for extension. Interface are better used for prop handling in react. Types are better used for functions and complex types...
interface ProjectItemProps {
    header: string;
    desc: string;
}

//Destructure the header type from type or interface, JSX.Element is an annotated return type. This causes an error to be raised if another type is return accidentally. Leaving out JSX.Element results in an inferred return type.

const ProjectItem = ({ header, desc }: ProjectItemProps): JSX.Element => {
    return (
        <MainProjectContainer>
            <HeaderContainer>
                <MainHeader>{header}</MainHeader>
            </HeaderContainer>
            <DescContainer>
                <DescText>{desc}</DescText>
            </DescContainer>
        </MainProjectContainer>
    );
};

export default ProjectItem;
