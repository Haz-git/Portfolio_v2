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

const HtmlIcon = styled(Html5)`
    height: 2rem;
    width: 2rem;
    color: #fdbc3d;
`;

const CssIcon = styled(Css3)`
    height: 2rem;
    width: 2rem;
    color: #fdbc3d;
`;

const JavascriptIcon = styled(Javascript)`
    height: 2rem;
    width: 2rem;
    color: #fdbc3d;
`;

const ReactIcon = styled(ReactLogo)`
    height: 2rem;
    width: 2rem;
    color: #fdbc3d;
`;

const ReduxIcon = styled(Redux)`
    height: 2rem;
    width: 2rem;
    color: #fdbc3d;
`;

const TypescriptIcon = styled(Typescript)`
    height: 2rem;
    width: 2rem;
    color: #fdbc3d;
`;

const NodeIcon = styled(Nodejs)`
    height: 2rem;
    width: 2rem;
    color: #fdbc3d;
`;

const MongoIcon = styled(Mongodb)`
    height: 2rem;
    width: 2rem;
    color: #fdbc3d;
`;

const ExpressIcon = styled(Express)`
    height: 2rem;
    width: 2rem;
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

const BuildToolsHeader = styled.h3`
    font-family: 'Nunito', sans-serif;
    font-size: 0.9em;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.8);
    text-shadow: rgba(0, 0, 0, 1) 0px 3px 3px;
`;

const BuildToolsContainer = styled.div`
    background: inherit;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(48px, 100%), 0fr));
    align-items: center;
    justify-items: center;
    align-content: center;
    margin: 0.5em 0;
    row-gap: 0.2em;
    column-gap: 0.2em;
    /* gap: 0.2em; */
`;

const ToolContainer = styled.div`
    background: #1b222a;
    padding: 0.5em 0.5em;
    border-radius: 0.4em;
    margin: 0 auto;
`;

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
    const findBuildTools = () => {
        //How do I take this array of text --> Insert a bunch of icons according to the order of the text --> map them out to the website?
        if (buildTools) {
            return buildTools.map((tool) => {
                // if (tool === 'html') return <HtmlIcon />;
                switch (tool) {
                    case 'html':
                        return (
                            <ToolContainer>
                                <HtmlIcon />
                            </ToolContainer>
                        );
                        break;
                    case 'css':
                        return (
                            <ToolContainer>
                                <CssIcon />
                            </ToolContainer>
                        );
                        break;
                    case 'js':
                        return (
                            <ToolContainer>
                                <JavascriptIcon />
                            </ToolContainer>
                        );
                        break;
                    case 'react':
                        return (
                            <ToolContainer>
                                <ReactIcon />
                            </ToolContainer>
                        );
                        break;
                    case 'redux':
                        return (
                            <ToolContainer>
                                <ReduxIcon />
                            </ToolContainer>
                        );
                        break;
                    case 'ts':
                        return (
                            <ToolContainer>
                                <TypescriptIcon />
                            </ToolContainer>
                        );
                        break;
                    case 'node':
                        return (
                            <ToolContainer>
                                <NodeIcon />
                            </ToolContainer>
                        );
                        break;
                    case 'mongo':
                        return (
                            <ToolContainer>
                                <MongoIcon />
                            </ToolContainer>
                        );
                        break;
                    case 'express':
                        return (
                            <ToolContainer>
                                <ExpressIcon />
                            </ToolContainer>
                        );
                        break;
                    default:
                        return null;
                }
            });
        }
    };

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
            <BuildToolsHeader>Built with</BuildToolsHeader>
            <BuildToolsContainer>{findBuildTools()}</BuildToolsContainer>
        </MainProjectContainer>
    );
};

/*
    Image details:
    
    -For Mobile: 500px x 500px

*/

export default ProjectItem;
