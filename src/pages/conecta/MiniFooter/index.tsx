import { Flex, Text } from '@chakra-ui/react';

export default function MiniFooter() {
  return (
    <Flex
      w="100%"
      bgColor="#E5E5E5"
      justify="center"
      mx="auto"
      h="100%"
      py="2rem"
    >
      <Text
        textAlign="center"
        fontSize={['14px', '14px', '16px']}
        fontFamily="Roboto"
        mx="auto"
        mt={['-3rem', '-3rem', '-2rem']}
      >
        Copyright © 2021 Luana Tavares. Todos os direitos reservados.
      </Text>
    </Flex>
  );
}
