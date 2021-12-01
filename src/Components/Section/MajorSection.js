import React from "react";
import {
  SmallHeader,
  SectionBody,
  SectionColumn,
  SectionRow,
  TextWrapper,
  Heading,
  Subtitle,
  ImageWrapper,Img,
} from "./MajorSection.elements";
import { Container} from "../../GlobalStyles";

const MajorSection = ({
  lightBg,
  imgPosition,
  SmallHeaderLight,
  HeadingLight,
  DescLight,
  SmallHeading,
  headline,
  description,
  img,alt,start,BigImage
}) => {
  return (
    <>
      <SectionBody lightBg={lightBg}>
        <Container>
          <SectionRow imgPosition={imgPosition}>
            <SectionColumn>
              <TextWrapper>
                <SmallHeader SmallHeaderLight={SmallHeaderLight}>
                  {SmallHeading}
                </SmallHeader>
                <Heading HeadingLight={HeadingLight}>{headline}</Heading>
                <Subtitle DescLight={DescLight}>{description}</Subtitle>
              </TextWrapper>
            </SectionColumn>
            <SectionColumn>
              <ImageWrapper start={start}>
                <Img src={img} alt={alt} BigImage={BigImage}/>
              </ImageWrapper>
            </SectionColumn>
          </SectionRow>
        </Container>
      </SectionBody>
    </>
  );
};

export default MajorSection;
