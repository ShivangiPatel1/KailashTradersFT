import React from "react";
import {
  SectionBody,
  SectionColumn,
  SectionRow,
  TextWrapper,
  Heading,
  Subtitle,
  ImageWrapper,
  Img,
} from "./SubSection.elements";
import { Container, } from "../../GlobalStyles";

const SubSection = ({
  lightBg,
  imgPosition,
  HeadingLight,
  DescLight,
  headline1,
  description1,
  headline2,
  description2,
  headline3,
  description3,
  img1,
  img2,
  img3,
  alt,
  start,
}) => {
  return (
    <>
      <SectionBody lightBg={lightBg}>
        <Container>
          <SectionRow imgPosition={imgPosition}>
            <SectionColumn>
              <ImageWrapper start={start}>
                <Img src={img1} alt={alt} />
              </ImageWrapper>
              <TextWrapper>
                <Heading HeadingLight={HeadingLight}>{headline1}</Heading>
                <Subtitle DescLight={DescLight}>{description1}</Subtitle>
              </TextWrapper>
            </SectionColumn>

            <SectionColumn>
              <ImageWrapper start={start}>
                <Img src={img2} alt={alt} />
              </ImageWrapper>
              <TextWrapper>
                <Heading HeadingLight={HeadingLight}>{headline2}</Heading>
                <Subtitle DescLight={DescLight}>{description2}</Subtitle>
              </TextWrapper>
            </SectionColumn>
            <SectionColumn>
              <ImageWrapper start={start}>
                <Img src={img3} alt={alt} />
              </ImageWrapper>
              <TextWrapper>
                <Heading HeadingLight={HeadingLight}>{headline3}</Heading>
                <Subtitle DescLight={DescLight}>{description3}</Subtitle>
              </TextWrapper>
            </SectionColumn>
          </SectionRow>
        </Container>
      </SectionBody>
    </>
  );
};

export default SubSection;
