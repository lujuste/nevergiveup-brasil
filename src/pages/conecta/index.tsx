import { Flex, Text, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import conectaLogo from '../../../public/images/logoConecta.svg';
import FormArea from './FormArea';
import MiniFooter from './MiniFooter';
import TheCourse from './TheCourse';
export default function Conecta() {
  return (
    <>
      <Flex
        boxShadow="dark-lg"
        w="100%"
        h="15vh"
        justify="center"
        align="center"
      >
        <Image
          src={conectaLogo}
          width={192}
          height={108}
          quality={100}
          priority
        />
      </Flex>
      <Flex
        w="100%"
        h="85vh"
        mx="auto"
        bgImage="url('/images/bgPage.png')"
        bgRepeat="no-repeat"
        bgSize="cover"
        flexDir="column"
        p="3rem"
        justify="center"
      >
        <Flex
          flexDir="column"
          w="100%"
          mx="auto"
          maxW="1400"
          justify="space-around"
          h="auto"
          align="center"
        >
          <Text
            color="white"
            fontSize={['20px', '20px', '30px']}
            fontWeight="400"
            fontFamily="Public Sans"
            mx="auto"
          >
            👋 Olá, seja bem vinda!{' '}
          </Text>
          <Heading
            fontSize={['32px', '32px', '42px', '64px']}
            fontWeight="600"
            color="white"
            fontFamily="Public Sans"
            textAlign="center"
            maxW="700px"
            mx="auto"
            mt="2rem"
            lineHeight={['45px', '45px', '70px', '80px', '92px']}
          >
            Lugar de mulher é onde ela quiser,{' '}
            <Text as="span" px={['0', '0', '2rem']} bgColor={['#912B78']}>
              inclusive na política!
            </Text>
          </Heading>
        </Flex>
      </Flex>
      <TheCourse />
      <FormArea />
      <MiniFooter />
    </>
  );
}
