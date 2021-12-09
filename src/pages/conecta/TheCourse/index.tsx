import {
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import Image from 'next/image';
import logoNew from '../../../../public/images/ConectaNovoLogo.svg';
import { useForm } from 'react-hook-form';

import { TriangleUpIcon } from '@chakra-ui/icons';

export default function TheCourse() {
  return (
    <Flex
      pb="5rem"
      bgColor="#E5E5E5"
      w="100%"
      h="100%"
      mx="auto"
      flexDir="column"
    >
      <Flex
        px="3rem"
        flexDir="column"
        mx="auto"
        w="100%"
        h="100%"
        maxW="1400px"
      >
        <Flex
          mt="2rem"
          mx="auto"
          w="100%"
          h="auto"
          align="center"
          justify="center"
        >
          <Image width={249} height={249} src={logoNew} />
          <Heading
            fontSize="64px"
            color="#912B78"
            fontWeight="700"
            fontFamily="Public Sans"
            textAlign="center"
            maxW="600px"
          >
            Curso de liderança
            <Text mx="auto" color="#340B77">
              política da conecta
            </Text>
          </Heading>
        </Flex>
        <Text
          color="#666666"
          fontSize="20px"
          fontWeight="400"
          fontFamily="Roboto"
          lineHeight="35px"
          textAlign="justify"
        >
          A democracia só será realmente forte no momento em que nos vermos
          representados nela - homens, mulheres, negras, negros, ricos, pobres,
          e assim por diante. Desenvolver habilidades em liderança e apoiar
          mulheres dispostas a participar da democracia de forma competitiva é
          extremamente importante para mudar esse cenário.{' '}
          <Text mt="3rem">
            {' '}
            A CONECTA é uma ACELERADORA DE MULHERES NA POLÍTICA, que nasceu com
            a missão de contribuir na redução do tempo para se atingir a
            igualdade feminina nos espaços de decisão pública. Uma iniciativa
            suprapartidária, criada a várias mãos com muito carinho, que
            pretende conectar e desenvolver mulheres para se tornarem lideranças
            políticas capazes de gerar impactos positivos na sociedade.{' '}
          </Text>{' '}
          <Text mt="3rem">
            As participantes selecionadas terão acesso a um curso prático de 30
            horas em liderança política, incluindo tópicos como cultura
            política, marketing digital e gestão pública totalmente gratuito,
            além de mentoria e uma rede de apoio na segunda fase, caso sejam
            aprovadas no curso. As aulas da primeira turma vão de 22 de janeiro
            a 12 de março de 2022.{' '}
            <Text mt="3rem">
              As sessões acontecem todo sábado com duração de 4 horas, sendo 5
              sessões on-line e a última presencial em São Paulo. Estão
              convidadas a participar da primeira turma, mulheres do ESTADO DE
              SP com o seguinte perfil:
            </Text>
          </Text>
        </Text>
        <List mt="3rem" spacing={3}>
          <ListItem
            color="#666666"
            fontSize="20px"
            fontWeight="400"
            fontFamily="Roboto"
            lineHeight="35px"
            textAlign="justify"
          >
            <ListIcon
              transform="rotate(90deg)"
              as={TriangleUpIcon}
              color="#340B77"
            />
            Todas as idades
          </ListItem>
          <ListItem
            color="#666666"
            fontSize="20px"
            fontWeight="400"
            fontFamily="Roboto"
            lineHeight="35px"
            textAlign="justify"
          >
            <ListIcon
              transform="rotate(90deg)"
              as={TriangleUpIcon}
              color="#340B77"
            />
            que já tenham ou não participado de eleições
          </ListItem>
          <ListItem
            color="#666666"
            fontSize="20px"
            fontWeight="400"
            fontFamily="Roboto"
            lineHeight="35px"
            textAlign="justify"
          >
            <ListIcon
              transform="rotate(90deg)"
              as={TriangleUpIcon}
              color="#340B77"
            />
            que sejam dirigentes ou coordenadoras de movimentos sociais ou
            comunitários
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem
            color="#666666"
            fontSize="20px"
            fontWeight="400"
            fontFamily="Roboto"
            lineHeight="35px"
            textAlign="justify"
          >
            <ListIcon
              transform="rotate(90deg)"
              as={TriangleUpIcon}
              color="#340B77"
            />
            o critério de diversidade regional e racial terão peso na seleção de
            mulheres
          </ListItem>
        </List>
        <Text
          color="#666666"
          fontSize="20px"
          fontWeight="400"
          fontFamily="Roboto"
          lineHeight="35px"
          mt="3rem"
          textAlign="justify"
        >
          A primeira turma contará com 150 vagas. Caso queira participar,
          preencha o formulário abaixo e aguarde a conclusão do processo de
          seleção até 11/01 por e-mail. Vamos acelerar a representatividade da
          mulher nos espaços de poder! Esperamos por você!!!
        </Text>
      </Flex>
    </Flex>
  );
}
