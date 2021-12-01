import styled from 'styled-components';

export const SectionBody = styled.div`
  color: #fff;
  padding: 60px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;

export const SectionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 20%;
  margin-right: 20%;
  flex-direction: ${({ imgPosition }) => (imgPosition ? 'row-reverse' : 'row')};
`;

export const SectionColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 10px;
  padding-left: 10px;
  flex: 1;
  max-width: 30%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width:30%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 38px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ HeadingLight }) => (HeadingLight ? '#f7f8fa' : '#1c2237')};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 14px;
  line-height: 24px;
  color: ${({ DescLight}) => (DescLight ? '#a9b3c1' : '#1c2237')};
`;
export const ImageWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;